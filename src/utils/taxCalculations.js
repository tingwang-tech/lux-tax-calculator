const TAX_YEAR = 2026
const AGE_THRESHOLD = 40

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
 * Calculate personalized cap for a deduction based on profile
 * @param {object} deduction
 * @param {object} profile
 * @returns {object} { totalCap, baseCap, multiplier, explanation }
 */
export function calculatePersonalizedCap(deduction, profile) {
  const isMarried = profile.maritalStatus === 'married'
  const multiplier = deduction.isPerPerson && isMarried ? 2 : 1

  let baseCap

  // Handle age-based deductions (home savings)
  if (deduction.isAgeBased) {
    baseCap = getHomeSavingsBaseCap(profile, deduction)
  } else {
    baseCap = deduction.baseCap
  }

  const totalCap = baseCap * multiplier

  // Build explanation
  let explanation = null
  if (deduction.isPerPerson && isMarried) {
    explanation = `€${baseCap.toLocaleString()} × 2 (married)`
  }

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
