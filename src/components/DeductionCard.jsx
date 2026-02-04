import { calculatePersonalizedCap, formatCurrency } from '../utils/taxCalculations'

export default function DeductionCard({ deduction, profile }) {
  const hasProfile = profile && profile.person1BirthYear
  const capInfo = hasProfile
    ? calculatePersonalizedCap(deduction, profile)
    : null

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
        ) : (
          <span className="inline-block rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            {deduction.capDisplay}
          </span>
        )}
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {deduction.description}
      </p>

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
