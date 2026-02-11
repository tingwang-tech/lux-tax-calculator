import { calculatePersonalizedCap, formatCurrency, shouldHideDeduction } from '../utils/taxCalculations'

/**
 * Get progress bar color based on utilization percentage
 * @param {number} percentage 0-100+
 * @returns {string} Tailwind color class
 */
function getProgressColor(percentage) {
  if (percentage >= 100) return 'bg-green-500'
  if (percentage >= 51) return 'bg-yellow-500'
  return 'bg-blue-500'
}

/**
 * Get utilization status text and styling
 * @param {number} expense
 * @param {number} cap
 * @returns {{ text: string, className: string }}
 */
function getUtilizationStatus(expense, cap) {
  const unused = cap - expense

  if (unused < 0) {
    return {
      text: `Exceeded by ${formatCurrency(Math.abs(unused))}`,
      className: 'text-red-600',
    }
  }
  if (unused === 0) {
    return {
      text: 'Fully utilized',
      className: 'text-green-600',
    }
  }
  return {
    text: `Unused: ${formatCurrency(unused)} of ${formatCurrency(cap)}`,
    className: 'text-slate-500',
  }
}

export default function DeductionCard({ deduction, profile, expense = 0, onExpenseChange }) {
  // Hide card if requirements not met (e.g., mortgage interest for non-homeowners)
  if (shouldHideDeduction(deduction, profile)) {
    return null
  }

  const hasProfile = profile && profile.person1BirthYear
  const capInfo = hasProfile
    ? calculatePersonalizedCap(deduction, profile)
    : null

  // Calculate progress (only if we have a numeric cap)
  const cap = capInfo?.totalCap
  const showExpenseInput = hasProfile && capInfo && !capInfo.isFullyDeductible
  const percentage = cap ? Math.min((expense / cap) * 100, 100) : 0
  const utilizationStatus = cap ? getUtilizationStatus(expense, cap) : null

  const handleExpenseChange = (e) => {
    const value = Math.max(0, Number(e.target.value) || 0)
    onExpenseChange(value)
  }

  return (
    <section className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-pretty text-base font-semibold leading-6 text-slate-900">
          {deduction.name}
          {deduction.isHighlighted && (
            <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
              NEW
            </span>
          )}
        </h2>
      </div>

      {/* Cap display */}
      <div className="mt-3">
        {hasProfile && capInfo ? (
          capInfo.isFullyDeductible ? (
            // Fully deductible case (mortgage interest 0-1 years)
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold text-green-600">
                  Fully deductible
                </span>
              </div>
              {capInfo.fullyDeductibleNote && (
                <p className="text-xs text-slate-500">{capInfo.fullyDeductibleNote}</p>
              )}
            </div>
          ) : (
            // Normal cap display
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold text-blue-600">
                  {formatCurrency(capInfo.totalCap)}
                </span>
                <span className="text-sm text-slate-500">your cap</span>
              </div>
              {capInfo.explanation && (
                <p className="text-xs text-slate-500">{capInfo.explanation}</p>
              )}
              {capInfo.ageNote && (
                <p className="text-xs text-slate-500">{capInfo.ageNote}</p>
              )}
            </div>
          )
        ) : (
          <span className="inline-block rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            {deduction.capDisplay}
          </span>
        )}
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {deduction.description}
      </p>

      {/* Expense input and progress bar - only shown when profile is complete */}
      {showExpenseInput && (
        <div className="mt-4 space-y-2">
          <label
            htmlFor={`expense-${deduction.id}`}
            className="block text-sm font-medium text-slate-700"
          >
            Your expenses
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
              €
            </span>
            <input
              type="number"
              id={`expense-${deduction.id}`}
              min={0}
              step={1}
              value={expense}
              onChange={handleExpenseChange}
              className="block w-full rounded-lg border border-slate-300 py-2 pl-7 pr-3 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Progress bar */}
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className={`h-full transition-all duration-300 ${getProgressColor(percentage)}`}
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Utilization status */}
          {utilizationStatus && (
            <p className={`text-xs ${utilizationStatus.className}`}>
              {expense > cap && '⚠️ '}
              {utilizationStatus.text}
              {expense === cap && ' ✓'}
            </p>
          )}
        </div>
      )}

      <div className="mt-4 flex-1" />

      <a
        className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
        href={deduction.sourceUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open official source for ${deduction.name} (opens in a new tab)`}
      >
        Official source
      </a>
    </section>
  )
}
