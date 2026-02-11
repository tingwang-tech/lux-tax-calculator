import { calculatePersonalizedCap, formatCurrency, shouldHideDeduction } from '../utils/taxCalculations'

/**
 * Get progress bar color based on utilization percentage
 * @param {number} percentage 0-100
 * @returns {string} Tailwind color class
 */
function getProgressColor(percentage) {
  if (percentage >= 100) return 'bg-green-500'
  if (percentage >= 51) return 'bg-yellow-500'
  return 'bg-blue-500'
}

export default function SummarySection({ deductions, profile, expenses }) {
  const hasProfile = profile && profile.person1BirthYear

  // Don't show summary if profile is not complete
  if (!hasProfile) {
    return null
  }

  // Calculate totals across all visible deductions with numeric caps
  let totalCap = 0
  let totalExpenses = 0
  let deductionsIncluded = 0

  deductions.forEach((deduction) => {
    // Skip hidden deductions
    if (shouldHideDeduction(deduction, profile)) {
      return
    }

    const capInfo = calculatePersonalizedCap(deduction, profile)

    // Skip deductions without a numeric cap (e.g., fully deductible)
    if (!capInfo || capInfo.isFullyDeductible || !capInfo.totalCap) {
      return
    }

    totalCap += capInfo.totalCap
    totalExpenses += expenses[deduction.id] || 0
    deductionsIncluded++
  })

  // Don't show if no deductions to summarize
  if (deductionsIncluded === 0) {
    return null
  }

  const totalUnused = totalCap - totalExpenses
  const utilizationPercentage = totalCap > 0 ? (totalExpenses / totalCap) * 100 : 0
  const displayPercentage = Math.min(utilizationPercentage, 100)

  return (
    <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Summary</h2>
      <p className="mt-1 text-sm text-slate-600">
        Your total deduction utilization across {deductionsIncluded} categories
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Total Utilized */}
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-500">Total Utilized</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">
            {formatCurrency(totalExpenses)}
          </p>
        </div>

        {/* Total Caps */}
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-500">Total Caps</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900">
            {formatCurrency(totalCap)}
          </p>
        </div>

        {/* Unutilized */}
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-500">Unutilized</p>
          <p className={`mt-1 text-2xl font-semibold ${totalUnused >= 0 ? 'text-slate-900' : 'text-red-600'}`}>
            {totalUnused >= 0 ? formatCurrency(totalUnused) : `-${formatCurrency(Math.abs(totalUnused))}`}
          </p>
        </div>
      </div>

      {/* Overall progress bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-slate-700">Overall Utilization</span>
          <span className="text-slate-500">{Math.round(utilizationPercentage)}%</span>
        </div>
        <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className={`h-full transition-all duration-300 ${getProgressColor(utilizationPercentage)}`}
            style={{ width: `${displayPercentage}%` }}
          />
        </div>
        {utilizationPercentage > 100 && (
          <p className="mt-1 text-xs text-red-600">
            ⚠️ You've exceeded your total caps by {formatCurrency(Math.abs(totalUnused))}
          </p>
        )}
      </div>
    </section>
  )
}
