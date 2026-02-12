# Changelog - Luxembourg Tax Calculator

## How to use this document

- **When to use:** At the end of each week (or sprint) of the learning project.
- **Add a new entry:** Copy the "Weekly entry template" below, paste it at the top under "Recent entries", replace the date range and fill in the sections.
- **Keep order:** Newest week at the top, older entries below.
- **Link to code:** Reference specific files or PRs when you change something (e.g. `src/data/deductions.js`, `docs/RESEARCH_LOG.md`).

## Purpose

This document tracks weekly progress: what was built, what was fixed, and what was deferred for the Luxembourg tax calculator project.

---

## Weekly entry template (copy for new week)

```markdown
## Week of YYYY-MM-DD to YYYY-MM-DD

### Done
- [ ] [Feature or task completed]
- [ ] [Another item]

### Changed
- [File or area]: [Brief description of change]

### Fixed
- [Issue or bug]: [What you did]

### Deferred / Next week
- [ ] [What you moved to the next week or plan to do next]
```

---

## Recent entries

### Week of 2026-02-04 to 2026-02-11 (Week 3)

#### Done
- [x] Expense input on each deduction card (number input with €)
- [x] Progress bar visualization with color coding (blue 0-50%, yellow 51-99%, green 100%)
- [x] Unutilized amount display ("Unused: €X of €Y")
- [x] Over-cap warning with emoji ("⚠️ Exceeded by €X")
- [x] Fully utilized indicator ("✓ Fully utilized")
- [x] localStorage persistence for expenses (`luxTaxExpenses` key)
- [x] SummarySection component with total utilized, total caps, unutilized
- [x] Overall utilization percentage with progress bar
- [x] Mobile-friendly stepper buttons (+/−) for children count and expense inputs
- [x] Placeholder display for empty inputs (shows "0" as placeholder, not as value)
- [x] Hidden native browser spinners for cleaner mobile UX
- [x] Deployed to Vercel: https://lux-tax-calculator.vercel.app

#### Changed
- `src/App.jsx`: Added expenses state management with localStorage persistence
- `src/components/DeductionCard.jsx`: Added expense input, progress bar, utilization status, mobile stepper buttons
- `src/components/SummarySection.jsx`: NEW - Overall summary with totals and utilization percentage
- `src/components/ProfileSection.jsx`: Added mobile-friendly +/− stepper buttons for children count
- `src/utils/taxCalculations.js`: Added formatCurrency export

#### Fixed
- Mobile number input UX (added large touch-friendly +/− buttons)
- Children count showing "0" instead of placeholder

#### Deferred / Next week
- ❌ Week 4 SCRAPPED: Tax savings, recommendations, charts, export - all determined to be feature bloat (see ADR-008)
- 🎉 MVP Complete

---

### Week of 2026-01-26 to 2026-02-04 (Weeks 1-2)

#### Done
- [x] Week 1: Single-page React app with Tailwind - 8 deduction category cards
- [x] Week 1: Professional README.md with project overview
- [x] Week 1: Git + GitHub repository setup and first commits
- [x] Week 1: Documentation structure created (4 docs files)
- [x] Week 1: Links to official Luxembourg government sources
- [x] Week 1: Corrected official URLs for all 8 categories
- [x] Week 2: PROJECT_CONTEXT.md created for AI assistant guidance
- [x] Week 2: Universal vibe coding skill created (reusable methodology)
- [x] Week 2: Claude Code installed and configured
- [x] Week 2: ProfileSection component built with birth year inputs
- [x] Week 2: Marital status dropdown (Single/Married)
- [x] Week 2: Children count input (0-10)
- [x] Week 2: localStorage persistence for profile data
- [x] Week 2: Age-based home savings cap calculation (€1,344 ≤40, €672 >40)
- [x] Week 2: Personalized caps with household multiplier logic
- [x] Week 2: `includesChildren` flag - some caps include children, others don't
- [x] Week 2: Homeowner status input with conditional mortgage year tier
- [x] Week 2: Mortgage interest tier caps (€4,000/€3,000/€2,000 based on years)
- [x] Week 2: "Fully deductible" case for new homeowners (0-1 years)
- [x] Week 2: Conditional card hiding (mortgage hidden for non-homeowners)
- [x] Week 2: Explanation strings (e.g., "€672 × 4 (2 adults + 2 children)")

#### Changed
- `src/App.jsx`: Added ProfileSection component above deduction catalog
- `src/components/ProfileSection.jsx`: Created profile form with 6 inputs + validation
- `src/components/DeductionCard.jsx`: Added personalized cap display with explanations
- `src/utils/taxCalculations.js`: Created calculation logic (age, multiplier, caps)
- `src/data/deductions.js`: Added `isPerPerson`, `includesChildren`, `requiresHomeOwner`, `mortgageCaps` flags
- `docs/PROJECT_CONTEXT.md`: Added comprehensive project context for AI assistance

#### Fixed
- npm permission error when installing Claude Code (used sudo)
- Cursor free plan limit exhausted (switched to Claude Code)
- Tool confusion (clarified: Perplexity = research, Claude Code = building)
- Insurance & loan interest cap calculation (now includes children in multiplier)
- Mortgage interest source URL (updated to official A-Z entry)

#### Deferred / Next week
- [x] Week 3: Expense tracking with progress bars ✅ Done
- [x] Week 3: Unutilized amount calculations ✅ Done
- [x] Week 3: Summary section with totals ✅ Done

---

### Example: Week of 2026-01-20 to 2026-01-26

#### Done
- Single-page React app with Tailwind (Week 1)
- 8 deduction category cards: name, cap, description, official source link
- Data in `src/data/deductions.js`; cards in `src/components/DeductionCard.jsx`
- Corrected official URLs for 4 categories (insurance/loan, private pension, employer pension, childcare/help)
- Created `docs/RESEARCH_LOG.md` with sources and quality ratings

#### Changed
- `src/App.jsx`: Replaced Vite starter with header + card grid
- `src/data/deductions.js`: Updated source URLs per user-provided links
- `docs/RESEARCH_LOG.md`: Filled in all 8 sources, verified dates, next review

#### Fixed
- N/A

#### Deferred / Next week
- [ ] Week 2: Add user inputs and basic calculation (TBD)

---

## Older entries

*(Add older weeks below as the project grows.)*
