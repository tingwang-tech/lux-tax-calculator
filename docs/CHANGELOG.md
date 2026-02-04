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

### Week of 2026-01-26 to 2026-02-04

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

#### Changed
- `src/App.jsx`: Added ProfileSection component above deduction catalog
- `src/components/ProfileSection.jsx`: Created new profile input form
- `docs/PROJECT_CONTEXT.md`: Added comprehensive project context for AI assistance

#### Fixed
- npm permission error when installing Claude Code (used sudo)
- Cursor free plan limit exhausted (switched to Claude Code)
- Tool confusion (clarified: Perplexity = research, Claude Code = building)

#### Deferred / Next week
- [ ] Week 2 completion: Age-based home savings cap calculation
- [ ] Week 2 completion: Personalized caps (married × 2 logic)
- [ ] Week 3: Expense tracking with progress bars

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
