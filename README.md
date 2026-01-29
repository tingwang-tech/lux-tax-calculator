# Luxembourg Tax Deduction Calculator 2026

A learning project to help **Tax Class 2** households in Luxembourg understand and maximize their tax deductions. Built with React, Vite, and Tailwind.

---

## Project overview

### Problem

Luxembourg’s deduction rules (insurance, pensions, home savings, commuting, childcare, etc.) are spread across official sites and change by year. It’s hard to see at a glance what applies to you, what the caps are, and where the official sources are.

### Purpose

This app aims to give Tax Class 2 households a clear, source-backed view of 2026 deduction categories and caps—and later, a simple way to estimate how much they can deduct. All links point to official Luxembourg sources where possible.

---

## Features

### Completed (Week 1)

- **Deduction catalog:** Single-page view of 8 deduction categories with 2026 caps.
- **Per category:** Name, cap amount, short explanation, and link to the official source.
- **Categories:** Insurance & loan interest, private pension (new 2026), employer pension, home savings, mortgage interest, commuting, professional expenses, childcare/help.
- **Responsive UI:** Card layout with Tailwind; mobile-friendly.

### Planned (Weeks 2–4)

- **Week 2:** User inputs and basic calculation (e.g. enter amounts per category, see estimated deductible total).
- **Week 3–4:** To be defined (e.g. class 1 vs 2, multi-person household, or export/summary).

---

## Tech stack

- **React** (UI)
- **Vite** (dev server and build)
- **Tailwind CSS** (styling)

No backend; data lives in the repo (`src/data/deductions.js`). Official URLs and caps are documented in `docs/RESEARCH_LOG.md`.

---

## How to run locally

1. **Clone** (or download) the repo and open a terminal in the project folder.
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the dev server:**
   ```bash
   npm run dev
   ```
4. Open the URL shown in the terminal (e.g. `http://localhost:5174/`). Keep that terminal open so the app hot-reloads when you edit files.

**Build for production:**
```bash
npm run build
```
Output is in `dist/`. Serve that folder with any static host.

---

## Project structure

```
lux-tax-calculator/
├── src/
│   ├── App.jsx           # Main page: header + deduction card grid
│   ├── main.jsx           # React entry point
│   ├── index.css          # Tailwind + base styles
│   ├── components/
│   │   └── DeductionCard.jsx   # Single deduction category card
│   └── data/
│       └── deductions.js       # 2026 deduction data (caps, descriptions, URLs)
├── docs/
│   ├── RESEARCH_LOG.md    # Official sources, URLs, quality ratings
│   ├── CHANGELOG.md       # Weekly progress
│   ├── DECISIONS.md       # Architecture and project decisions
│   └── LEARNING_LOG.md   # What I learned each week
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## Development timeline (4 weeks)

| Week | Focus | Status |
|------|--------|--------|
| 1 | Deduction catalog: 8 categories, caps, official links | ✅ Done |
| 2 | User inputs + basic deduction calculation | Planned |
| 3 | TBD (e.g. class 1/2, household composition) | Planned |
| 4 | TBD (e.g. summary, polish, or export) | Planned |

---

## Documentation

All project docs live in `docs/`:

- **[RESEARCH_LOG.md](docs/RESEARCH_LOG.md)** — Official sources for each deduction, URLs, quality ratings, and when to re-check.
- **[CHANGELOG.md](docs/CHANGELOG.md)** — Weekly progress: what was built, fixed, or deferred.
- **[DECISIONS.md](docs/DECISIONS.md)** — Why we chose this structure and tech (ADR-style).
- **[LEARNING_LOG.md](docs/LEARNING_LOG.md)** — What I learned each week (technical, domain, process).

---

## Author

**[Ting Wang]** — Luxembourg Tax Deduction Calculator 2026

---

## Note

This is a **learning project** (vibe coding). The app is for personal use and education. It is not tax or legal advice; always confirm numbers and rules with official Luxembourg sources (e.g. [guichet.public.lu](https://guichet.public.lu), [impotsdirects.public.lu](https://impotsdirects.public.lu)) or a qualified advisor.
