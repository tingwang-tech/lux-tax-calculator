import { useState, useEffect } from 'react'

const TAX_YEAR = 2026
const MIN_BIRTH_YEAR = 1900
const MAX_BIRTH_YEAR = 2026
const MAX_CHILDREN = 10

const STORAGE_KEY = 'luxTaxProfile'

const defaultProfile = {
  person1BirthYear: '',
  person2BirthYear: '',
  maritalStatus: 'single',
  children: 0,
}

function loadProfile() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      return { ...defaultProfile, ...JSON.parse(saved) }
    }
  } catch (err) {
    console.warn('Failed to load profile from localStorage:', err)
  }
  return defaultProfile
}

function saveProfile(profile) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
  } catch (err) {
    console.warn('Failed to save profile to localStorage:', err)
  }
}

function validateBirthYear(year) {
  if (year === '' || year === null) return null
  const num = Number(year)
  if (isNaN(num)) return 'Please enter a valid number'
  if (num < MIN_BIRTH_YEAR || num > MAX_BIRTH_YEAR) {
    return `Please enter a year between ${MIN_BIRTH_YEAR} and ${MAX_BIRTH_YEAR}`
  }
  return null
}

export default function ProfileSection({ profile, onProfileChange }) {
  const [errors, setErrors] = useState({})

  const isMarried = profile.maritalStatus === 'married'

  const handleChange = (field, value) => {
    const newProfile = { ...profile, [field]: value }

    // Clear person2 birth year if switching to single
    if (field === 'maritalStatus' && value === 'single') {
      newProfile.person2BirthYear = ''
    }

    onProfileChange(newProfile)
    saveProfile(newProfile)

    // Validate birth years
    if (field === 'person1BirthYear' || field === 'person2BirthYear') {
      const error = validateBirthYear(value)
      setErrors((prev) => ({ ...prev, [field]: error }))
    }
  }

  const handleClear = () => {
    onProfileChange(defaultProfile)
    saveProfile(defaultProfile)
    setErrors({})
  }

  // Calculate ages for display
  const person1Age = profile.person1BirthYear
    ? TAX_YEAR - Number(profile.person1BirthYear)
    : null
  const person2Age = profile.person2BirthYear
    ? TAX_YEAR - Number(profile.person2BirthYear)
    : null

  return (
    <section className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">Your Profile</h2>
        <button
          type="button"
          onClick={handleClear}
          className="text-sm text-slate-500 hover:text-slate-700"
        >
          Clear
        </button>
      </div>
      <p className="mt-1 text-sm text-slate-600">
        Enter your details to see personalized deduction caps for {TAX_YEAR}.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marital Status */}
        <div>
          <label
            htmlFor="maritalStatus"
            className="block text-sm font-medium text-slate-700"
          >
            Marital Status
          </label>
          <select
            id="maritalStatus"
            value={profile.maritalStatus}
            onChange={(e) => handleChange('maritalStatus', e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="single">Single</option>
            <option value="married">Married / Civil Union</option>
          </select>
        </div>

        {/* Person 1 Birth Year */}
        <div>
          <label
            htmlFor="person1BirthYear"
            className="block text-sm font-medium text-slate-700"
          >
            {isMarried ? 'Person 1 Birth Year' : 'Your Birth Year'}
          </label>
          <input
            type="number"
            id="person1BirthYear"
            min={MIN_BIRTH_YEAR}
            max={MAX_BIRTH_YEAR}
            placeholder="e.g. 1985"
            value={profile.person1BirthYear}
            onChange={(e) => handleChange('person1BirthYear', e.target.value)}
            className={`mt-1.5 block w-full rounded-lg border px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-1 ${
              errors.person1BirthYear
                ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
                : 'border-slate-300 focus:border-blue-500 focus:ring-blue-500'
            }`}
          />
          {errors.person1BirthYear && (
            <p className="mt-1 text-xs text-red-600">{errors.person1BirthYear}</p>
          )}
          {person1Age !== null && !errors.person1BirthYear && (
            <p className="mt-1 text-xs text-slate-500">
              Age in {TAX_YEAR}: {person1Age}
            </p>
          )}
        </div>

        {/* Person 2 Birth Year (only shown when married) */}
        {isMarried && (
          <div>
            <label
              htmlFor="person2BirthYear"
              className="block text-sm font-medium text-slate-700"
            >
              Person 2 Birth Year
            </label>
            <input
              type="number"
              id="person2BirthYear"
              min={MIN_BIRTH_YEAR}
              max={MAX_BIRTH_YEAR}
              placeholder="e.g. 1987"
              value={profile.person2BirthYear}
              onChange={(e) => handleChange('person2BirthYear', e.target.value)}
              className={`mt-1.5 block w-full rounded-lg border px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-1 ${
                errors.person2BirthYear
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
                  : 'border-slate-300 focus:border-blue-500 focus:ring-blue-500'
              }`}
            />
            {errors.person2BirthYear && (
              <p className="mt-1 text-xs text-red-600">{errors.person2BirthYear}</p>
            )}
            {person2Age !== null && !errors.person2BirthYear && (
              <p className="mt-1 text-xs text-slate-500">
                Age in {TAX_YEAR}: {person2Age}
              </p>
            )}
          </div>
        )}

        {/* Number of Children */}
        <div>
          <label
            htmlFor="children"
            className="block text-sm font-medium text-slate-700"
          >
            Number of Children
          </label>
          <input
            type="number"
            id="children"
            min={0}
            max={MAX_CHILDREN}
            value={profile.children}
            onChange={(e) => handleChange('children', Math.max(0, Math.min(MAX_CHILDREN, Number(e.target.value) || 0)))}
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
    </section>
  )
}

export { loadProfile, defaultProfile }
