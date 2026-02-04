const TAX_YEAR = 2026
const AGE_THRESHOLD = 40

/**
 * Get the household multiplier for a deduction based on profile
 * Some deductions are per-person (adults only), others include children
 * @param {object} deduction
 * @param {object} profile
 * @returns {number}
 */
export function getHouseholdMultiplier(deduction, profile) {
  if (!deduction.isPerPerson) {
    return 1 // Flat household cap (e.g., commuting, childcare)
  }

  const isMarried = profile.maritalStatus === 'married'
  const adults = 1 + (isMarried ? 1 : 0)
  const childCount = deduction.includesChildren ? (profile.children || 0) : 0

  return adults + childCount
}

/**
 * Calculate age in the tax year based on birth year
 * @param {number|string} birthYear
 * @returns {number|null}
 */
export function calculateAge(birthYear) {
  if (!birthYear || birthYear === '') return null
  const year = Number(birthYear)
  if (isNaN(year)) return null
  return TAX_YEAR - year
}

/**
 * Get the youngest age from profile (for married couples)
 * @param {object} profile
 * @returns {number|null}
 */
export function getYoungestAge(profile) {
  const age1 = calculateAge(profile.person1BirthYear)
  const age2 = calculateAge(profile.person2BirthYear)

  if (profile.maritalStatus === 'married' && age1 !== null && age2 !== null) {
    return Math.min(age1, age2)
  }
  return age1
}

/**
 * Calculate the base cap for home savings based on age
 * Uses youngest person's age for married couples
 * @param {object} profile
 * @param {object} deduction
 * @returns {number}
 */
export function getHomeSavingsBaseCap(profile, deduction) {
  const youngestAge = getYoungestAge(profile)

  if (youngestAge === null) {
    // No age entered, return lower cap as conservative default
    return deduction.baseCapOver40
  }

  return youngestAge <= AGE_THRESHOLD
    ? deduction.baseCapUnder40
    : deduction.baseCapOver40
}

/**
 * Build an explanation string for the cap calculation
 * @param {number} baseCap
 * @param {number} multiplier
 * @param {object} profile
 * @param {object} deduction
 * @returns {string|null}
 */
function buildExplanation(baseCap, multiplier, profile, deduction) {
  if (multiplier === 1) {
    return null // No explanation needed for single person, no children
  }

  const isMarried = profile.maritalStatus === 'married'
  const adults = 1 + (isMarried ? 1 : 0)
  const children = deduction.includesChildren ? (profile.children || 0) : 0

  const parts = []
  if (adults === 1) {
    parts.push('1 adult')
  } else {
    parts.push('2 adults')
  }

  if (children > 0) {
    parts.push(`${children} ${children === 1 ? 'child' : 'children'}`)
  }

  return `€${baseCap.toLocaleString()} × ${multiplier} (${parts.join(' + ')})`
}

/**
 * Check if a deduction should be hidden based on profile
 * @param {object} deduction
 * @param {object} profile
 * @returns {boolean}
 */
export function shouldHideDeduction(deduction, profile) {
  // Hide mortgage interest card if user is not a homeowner
  if (deduction.requiresHomeOwner && !profile.isHomeOwner) {
    return true
  }
  return false
}

/**
 * Calculate personalized cap for a deduction based on profile
 * @param {object} deduction
 * @param {object} profile
 * @returns {object} { totalCap, baseCap, multiplier, explanation, isFullyDeductible, fullyDeductibleNote }
 */
export function calculatePersonalizedCap(deduction, profile) {
  const multiplier = getHouseholdMultiplier(deduction, profile)

  let baseCap
  let isFullyDeductible = false
  let fullyDeductibleNote = null

  // Handle mortgage interest with year tiers
  if (deduction.mortgageCaps) {
    const tier = profile.mortgageYearTier
    if (!tier) {
      // No tier selected yet, return null to show generic display
      return null
    }

    baseCap = deduction.mortgageCaps[tier]

    if (baseCap === null) {
      // Fully deductible case (0-1 years)
      isFullyDeductible = true
      fullyDeductibleNote = 'Requires no mortgage interest deducted on a main residence in the previous 5 years'
      return {
        totalCap: null,
        baseCap: null,
        multiplier,
        explanation: null,
        isFullyDeductible,
        fullyDeductibleNote,
        ageNote: null,
      }
    }
  }
  // Handle age-based deductions (home savings)
  else if (deduction.isAgeBased) {
    baseCap = getHomeSavingsBaseCap(profile, deduction)
  } else {
    baseCap = deduction.baseCap
  }

  const totalCap = baseCap * multiplier

  // Build explanation
  const explanation = buildExplanation(baseCap, multiplier, profile, deduction)

  // Add age explanation for home savings
  let ageNote = null
  if (deduction.isAgeBased) {
    const youngestAge = getYoungestAge(profile)
    if (youngestAge !== null) {
      const isUnder40 = youngestAge <= AGE_THRESHOLD
      ageNote = isUnder40
        ? `Age ${youngestAge} ≤ 40: higher cap`
        : `Age ${youngestAge} > 40: standard cap`
    }
  }

  return {
    totalCap,
    baseCap,
    multiplier,
    explanation,
    ageNote,
    isFullyDeductible,
    fullyDeductibleNote,
  }
}

/**
 * Format currency for display
 * @param {number} amount
 * @returns {string}
 */
export function formatCurrency(amount) {
  return `€${amount.toLocaleString()}`
}
