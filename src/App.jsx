import { useState } from 'react'
import DeductionCard from './components/DeductionCard.jsx'
import ProfileSection, { loadProfile } from './components/ProfileSection.jsx'
import SummarySection from './components/SummarySection.jsx'
import { deductions2026 } from './data/deductions.js'

const EXPENSES_STORAGE_KEY = 'luxTaxExpenses'

function loadExpenses() {
  try {
    const saved = localStorage.getItem(EXPENSES_STORAGE_KEY)
    if (saved) {
      return JSON.parse(saved)
    }
  } catch (err) {
    console.warn('Failed to load expenses from localStorage:', err)
  }
  return {}
}

function saveExpenses(expenses) {
  try {
    localStorage.setItem(EXPENSES_STORAGE_KEY, JSON.stringify(expenses))
  } catch (err) {
    console.warn('Failed to save expenses to localStorage:', err)
  }
}

function App() {
  const [profile, setProfile] = useState(() => loadProfile())
  const [expenses, setExpenses] = useState(() => loadExpenses())

  const handleExpenseChange = (deductionId, value) => {
    const newExpenses = { ...expenses, [deductionId]: value }
    setExpenses(newExpenses)
    saveExpenses(newExpenses)
  }

  return (
    <div className="min-h-dvh bg-slate-50 text-slate-900">
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
            Luxembourg Tax Deductions 2026
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Enter your profile to see personalized deduction caps based on age and marital status.
          </p>
        </header>

        <ProfileSection profile={profile} onProfileChange={setProfile} />

        <main>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deductions2026.map((deduction) => (
              <DeductionCard
                key={deduction.id}
                deduction={deduction}
                profile={profile}
                expense={expenses[deduction.id] || 0}
                onExpenseChange={(value) => handleExpenseChange(deduction.id, value)}
              />
            ))}
          </div>
        </main>

        <SummarySection
          deductions={deductions2026}
          profile={profile}
          expenses={expenses}
        />

        <footer className="mt-10 text-xs text-slate-500">
          Caps shown are simplified for learning purposes; always confirm details on the official sources linked in each card.
        </footer>
      </div>
    </div>
  )
}

export default App
