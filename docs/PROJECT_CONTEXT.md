# Luxembourg Tax Calculator - Project Context

**For AI Assistants: Read this document to understand project goals, technical decisions, and current status when helping with this codebase.**

---

## Quick Reference

- **Project:** Luxembourg Tax Deduction Calculator 2026
- **Type:** 4-week vibe coding learning project
- **Owner:** Ting Wang (PM learning to code)
- **Started:** January 26, 2026
- **Repo:** https://github.com/tingwang-tech/lux-tax-calculator
- **Status:** Week 1 ✅ Complete, Week 2 ✅ Complete, Week 3 ⏳ Next

---

## Mission & Problem Statement

### The Problem
Luxembourg residents in Tax Class 2 (married couples with children) often miss thousands of euros in tax deductions because:
1. Deduction rules are complex and scattered across multiple government websites
2. The 2026 pension reform increased private pension caps from €3,200 to €4,500 per person, but awareness is low
3. No simple tool exists to show personalized deduction limits based on age, marital status, and family size
4. Users don't know which deductions apply to their specific situation

### The Solution
A web application that:
- Shows all 8 major deduction categories with 2026 caps
- Links directly to official Luxembourg government sources
- Calculates personalized caps based on user profile (age, married, children)
- Tracks current expenses and highlights unused deduction room
- Provides optimization recommendations to maximize tax savings

### Project Goals
**Primary:** Learn vibe coding (AI-assisted development) while building a useful tool
**Secondary:** Create a template/methodology for future client projects
**Tertiary:** Help Luxembourg taxpayers maximize legitimate deductions

### Owner Context
- **Background:** Senior Risk Manager at Amazon Luxembourg, MBA, PM experience
- **Coding experience:** Zero before this project (learning from scratch)
- **Learning approach:** "Learn once, reuse forever" - focus on transferable skills (terminal, git, documentation)
- **Exit plan:** Transition to coaching professionals navigating international corporate environments by Q1 2027
- **Why this project:** Combines personal need (Luxembourg resident) with learning goals (vibe coding)

---

## Tech Stack & Decisions

### Current Stack
- **Frontend:** React 19.2 (declarative UI, component-based)
- **Build Tool:** Vite 7.3 (fast dev server, modern)
- **Styling:** Tailwind CSS 3.4 (utility-first, rapid prototyping)
- **Storage:** localStorage (browser storage, no backend yet)
- **Version Control:** Git + GitHub
- **Deployment:** Vercel (planned for Week 4)

### Why These Choices?

#### React + Vite (Not Create React App)
**Decision Date:** 2026-01-26
**Rationale:**
- Vite has faster dev server and HMR (Hot Module Replacement)
- More modern tooling, better for learning current practices
- Smaller bundle size than CRA
- Industry is moving away from CRA

**Trade-offs:**
- ✅ Faster builds, better DX (developer experience)
- ✅ Less boilerplate to understand
- ❌ Slightly less beginner documentation than CRA
- ❌ Need to configure some things manually

**When to revisit:** Never - this was the right choice

---

#### Tailwind CSS (Not Custom CSS)
**Decision Date:** 2026-01-26
**Rationale:**
- Rapid prototyping without writing custom CSS
- Utility-first approach is easier for PM-to-builder learning
- Consistent design system out of the box
- Mobile-responsive by default

**Trade-offs:**
- ✅ Fast to build professional UIs
- ✅ No need to name CSS classes or manage stylesheets
- ✅ Easy to iterate and change design
- ❌ HTML classes can get verbose
- ❌ Requires learning utility class names

**When to revisit:** Not needed for this project, Tailwind is perfect for MVP

---

#### localStorage (Not Database)
**Decision Date:** 2026-01-26
**Rationale:**
- MVP doesn't need backend or multi-device sync
- Faster to build (no server, no authentication, no database)
- Good for learning browser APIs
- Can migrate to backend in Week 5+ if needed

**Trade-offs:**
- ✅ Simple, fast, zero cost
- ✅ No backend complexity
- ✅ Works offline
- ❌ Single device only (data doesn't sync)
- ❌ Data lost if browser cache cleared
- ❌ No collaboration features

**When to revisit:**
- If building multi-device sync (not planned for Weeks 1-4)
- If adding user accounts (future feature)
- If storing sensitive data (not applicable - tax calculators don't store financial info)

---

#### No TypeScript (Yet)
**Decision Date:** 2026-01-26
**Rationale:**
- Learn JavaScript fundamentals first before adding type complexity
- Vibe coding is about rapid iteration, types slow that down initially
- Can add TypeScript in Week 5+ after understanding patterns

**Trade-offs:**
- ✅ Simpler for learning (fewer concepts to grasp)
- ✅ Faster iteration in early weeks
- ❌ No type safety (more runtime errors possible)
- ❌ Less IDE autocompletion

**When to revisit:** After Week 4, if continuing development

---

## Luxembourg Tax Context (2026)

### Tax Class 2 Definition
- **Who:** Married couples or registered civil partnerships with dependent children
- **Tax treatment:** More favorable rates than Tax Class 1 (single)
- **Relevance:** This app is specifically for Tax Class 2 (most complex case)

### The 8 Major Deduction Categories

#### 1. Insurance & Loan Interest
- **Cap:** €672 per person (€1,344 for married couple)
- **What qualifies:** Life, accident, disability, liability insurance PLUS personal loan interest (car loans, consumer loans)
- **Combined cap:** Both insurance and loan interest share this single €672 cap
- **Official source:** https://impotsdirects.public.lu/fr/az/i/inter_debit.html
- **Source type:** A-Z entry (most authoritative)

#### 2. Private Pension (NEW 2026 INCREASE!)
- **Cap:** €4,500 per person (€9,000 for married couple)
- **Previous cap:** €3,200 per person (2025 and earlier)
- **Increase:** +€1,300 per person (+€2,600 for married couple)
- **What qualifies:** Contributions to qualifying private pension schemes (3rd pillar)
- **Official source:** https://gouvernement.lu/en/actualites/toutes_actualites/articles/2025/12-decembre/nouveautes-2026.html
- **Source type:** 2026 reform announcement
- **Highlight:** This is THE big news for 2026 that many taxpayers don't know about

#### 3. Employer-Provided Pension
- **Cap:** €1,200 per person (€2,400 for married couple)
- **What qualifies:** Employee contributions to employer pension schemes (2nd pillar)
- **Separate from:** Private pension (item #2) - these are two different caps
- **Official source:** https://guichet.public.lu/en/citoyens/fiscalite/salarie/traitement-fiscal-pension-employeur.html
- **Source type:** Guichet.lu dedicated page

#### 4. Home Savings Plans (Épargne-logement / Bëllegen Akt)
- **Cap (under 40):** €1,344 per person (€2,688 for married couple)
- **Cap (over 40):** €672 per person (€1,344 for married couple)
- **Age threshold:** Exactly 40 years old on December 31, 2026
- **Age calculation:** 2026 - birth_year (simple year-based, not exact birthdate)
- **For married:** Use the YOUNGEST person's age to determine cap
- **What qualifies:** Contributions to approved home ownership savings plans
- **Official source:** https://taxsummaries.pwc.com/luxembourg/individual/deductions
- **Edge case:** Person born in 1986 turns 40 during 2026 → use €672 cap (over 40)

#### 5. Mortgage Interest (Primary Residence)
- **Cap (first 6 years):** €2,000–€4,000 per person depending on energy efficiency
- **Cap (after 6 years):** Reduced cap (exact amount TBD - needs research)
- **What qualifies:** Interest paid on mortgage for PRIMARY residence only
- **Not included:** Principal repayment (only interest is deductible)
- **Official source:** https://www.analietax.com/luxembourg-tax-guide
- **Note:** Complex rules around energy efficiency ratings affect the cap

#### 6. Commuting Costs (Frais de déplacement)
- **Cap:** €2,574 maximum per household (not per person)
- **Distance requirement:** Home to work must exceed 4km each way
- **Calculation:** Based on distance and days worked
- **What qualifies:** Travel between home and workplace
- **Official source:** https://taxsummaries.pwc.com/luxembourg/individual/deductions

#### 7. Professional Expenses (Frais d'obtention)
- **Minimum automatic deduction:** €540 per person (€1,080 for married couple)
- **How it works:** Automatically applied, no documentation needed
- **Alternative:** Can claim actual work expenses if higher (requires receipts)
- **What qualifies:** Work-related expenses (uniforms, tools, professional development)
- **Official source:** https://taxsummaries.pwc.com/luxembourg/individual/deductions

#### 8. Childcare & Household Help (Personnel de ménage)
- **Cap:** €5,400 maximum per household (not per person)
- **What qualifies:**
  - Childcare costs (daycare, nanny, after-school care)
  - Household employees (cleaning, gardening)
  - Care for disabled/elderly family members
- **Official source:** https://guichet.public.lu/en/citoyens/famille/engager-personnel-menage.html
- **Source type:** Guichet.lu dedicated page

### Official Source Hierarchy (Most to Least Authoritative)

1. **impotsdirects.public.lu A-Z entries** - Most authoritative, topic-specific
2. **guichet.public.lu dedicated pages** - Official, user-friendly
3. **Government reform announcements** - For new changes like 2026 pension increase
4. **General overview pages** - Good for context but not primary source
5. **Third-party (PWC, banks)** - Useful but always verify with official sources

### Common Gotchas & Edge Cases

**Gotcha 1: Age Calculation for Home Savings**
- ❌ Wrong: `new Date().getFullYear() - birthYear` (uses current system date)
- ✅ Correct: `2026 - birthYear` (uses tax year)
- **Why:** Tax is calculated for the full year 2026, not "today"

**Gotcha 2: Youngest vs Oldest for Married**
- Home savings cap uses **YOUNGEST** person's age
- Example: Person 1 born 1985 (41), Person 2 born 1987 (39)
- Correct cap: €1,344 (under 40, using youngest)
- Wrong cap: €672 (using oldest person)

**Gotcha 3: Per Person vs Per Household**
- **Per person, doubled for married:** Insurance, pensions, professional expenses, mortgage interest
- **Per household, NOT doubled:** Commuting, childcare
- Example: €672 insurance cap becomes €1,344 for married (2 people)
- Example: €2,574 commuting cap stays €2,574 for married (household cap)

**Gotcha 4: Combined Caps**
- Insurance + Loan Interest share ONE €672 cap (not separate)
- Private pension + Employer pension are SEPARATE caps (can use both)

**Gotcha 5: 2026 Reform Awareness**
- Many taxpayers still think private pension cap is €3,200
- It's now €4,500 - that's €1,300 more per person!
- For married couple: €2,600 additional deduction capacity

---

## 4-Week Development Plan

### Week 1: Deduction Catalog ✅ COMPLETE (Jan 26, 2026)

**Goal:** Build the "skateboard" - minimal working reference

**Features Built:**
- 8 deduction category cards in responsive grid
- Each card shows: name, 2026 cap, description, official source link
- Tailwind styling with hover effects
- Mobile-responsive (2 columns desktop, 1 column mobile)
- Links to official Luxembourg government sources
- Highlight NEW 2026 private pension increase

**Tech Setup:**
- React + Vite project initialization
- Tailwind CSS integration (v3.4 - not v4 due to PostCSS issues)
- Git repository initialized
- GitHub repository created and pushed
- Documentation structure created (RESEARCH_LOG, CHANGELOG, DECISIONS, LEARNING_LOG)
- Professional README.md

**Key Learnings:**
- Two-prompt workflow discovered (Perplexity → Cursor)
- Importance of explicit URLs (AI will hallucinate if given freedom)
- Terminal commands > GUI clicking
- Weekly documentation ritual design

**Files Created:**
- `src/App.jsx` - Main application container
- `src/components/DeductionCard.jsx` - Individual deduction card component
- `src/data/deductions.js` - Single source of truth for deduction data
- `docs/RESEARCH_LOG.md` - Source verification tracking
- `docs/CHANGELOG.md` - Weekly progress tracking
- `docs/DECISIONS.md` - Architecture decisions
- `docs/LEARNING_LOG.md` - Personal reflection
- `README.md` - Public-facing project description

---

### Week 2: Profile Section ✅ COMPLETE (Feb 4, 2026)

**Goal:** Add user inputs to personalize deduction caps

**Features Built:**
- Profile input section above deduction catalog
- Input fields:
  - Person 1 birth year (number input, 1900-2026)
  - Person 2 birth year (number input, 1900-2026, shown only if married)
  - Number of children (number input, 0-10)
  - Marital status (dropdown: "Single" or "Married/Civil Union")
  - Homeowner status (Yes/No dropdown)
  - Mortgage year tier (conditional dropdown for homeowners)
- Age calculation: `2026 - birthYear`
- Validation: Birth years 1900-2026 with inline error messages
- Home savings cap: Age-based (€1,344 ≤40, €672 >40), uses youngest for married
- Per-person cap multiplication with `includesChildren` flag:
  - Insurance, home savings, mortgage: includes children in multiplier
  - Pensions, professional expenses: adults only
  - Commuting, childcare: household caps (no multiplication)
- localStorage persistence with `luxTaxProfile` key
- Clear Profile button to reset all inputs

**UI Features:**
- DeductionCard shows personalized caps with explanation (e.g., "€672 × 4 (2 adults + 2 children)")
- Age note for home savings (e.g., "Age 35 ≤ 40: higher cap")
- Mortgage interest card hidden when not homeowner
- "Fully deductible" display for new homeowners (0-1 years)
- Disclaimer about 5-year rule for full deduction

**Files Created/Modified:**
- `src/components/ProfileSection.jsx` (NEW) - Profile input form with validation
- `src/utils/taxCalculations.js` (NEW) - Age, multiplier, and cap calculation logic
- `src/components/DeductionCard.jsx` (MODIFIED) - Personalized cap display
- `src/data/deductions.js` (MODIFIED) - Added `isPerPerson`, `includesChildren`, `requiresHomeOwner`, `mortgageCaps` flags
- `src/App.jsx` (MODIFIED) - Profile state management

**Key Learnings:**
- Two-prompt workflow (Perplexity → Claude Code) essential for tax accuracy
- Children affect some caps but not others (verified via official sources)
- Mortgage interest rules are complex (year tiers, 5-year rule)

---

### Week 3: Expense Tracking ⏳ PLANNED (Feb 4, 2026)

**Goal:** Track current expenses and show gap analysis

**Features to Build:**
- Add expense input to each deduction card (below description)
  - Number input: "Your current expenses (€)"
  - Min: 0, Max: [the cap amount]
  - Step: 1 (whole euros only)
- Progress bar visualization:
  - Show: (current / cap) × 100%
  - Color coding:
    - 0-50%: Blue (#2563eb) - room to grow
    - 51-99%: Yellow (#eab308) - approaching limit
    - 100%: Green (#16a34a) - fully utilized
- Unutilized amount display:
  - Text: "Unused: €X,XXX of €Y,YYY"
  - If over cap: "⚠️ You've exceeded the cap by €X"
  - If at cap: "✓ Fully utilized"
- localStorage persistence:
  - Save as JSON: `{expenses: {insurance: 0, privatePension: 0, ...}}`
  - Key: `luxTaxExpenses`
  - Auto-save on input change (debounced)
- Summary section at bottom:
  - Total utilized: sum of all expenses
  - Total unutilized: sum of all gaps
  - Utilization percentage: (total used / total caps) × 100%

**Files to Create/Modify:**
- `src/components/ExpenseTracker.jsx` (NEW) - Expense input + progress bar component
- `src/components/SummaryCard.jsx` (NEW) - Overall summary statistics
- `src/utils/taxCalculations.js` (MODIFY) - Add gap calculation logic
- `src/App.jsx` (MODIFY) - Add expense state management

**Technical Constraints:**
- NO tax savings calculation yet (that's Week 4)
- NO export functionality yet (that's Week 4)
- NO charts/graphs yet (that's Week 4)

---

### Week 4: Optimization Dashboard ⏳ PLANNED (Feb 11, 2026)

**Goal:** Show potential savings and recommendations

**Features to Build:**
- Tax savings calculation:
  - Formula: `unutilized × effective_tax_rate`
  - Use conservative estimate: 35% effective rate (Luxembourg middle bracket)
  - Display: "Potential additional tax savings: €X,XXX per year"
  - Disclaimer: "Based on 35% estimated effective tax rate. Actual savings depend on total income."
- Prioritized recommendations (sorted by impact):
  - Show top 3 categories with most unused room
  - For each: "Consider increasing [category] by €X to save €Y in taxes"
  - Link to official source for that category
- Visualization (simple bar chart):
  - Show utilized vs unutilized for each category
  - Use Recharts library (already available in React ecosystem)
- Export/Print functionality:
  - Button: "Export Summary"
  - Generate PDF or printable HTML
  - Include: profile, all caps, current expenses, recommendations
- Vercel deployment:
  - Deploy to production
  - Custom domain (optional): lux-tax-calculator.vercel.app

**Files to Create/Modify:**
- `src/components/OptimizationDashboard.jsx` (NEW) - Savings + recommendations
- `src/components/RecommendationCard.jsx` (NEW) - Individual recommendation display
- `src/utils/taxCalculations.js` (MODIFY) - Add tax savings calculations
- `src/utils/exportPDF.js` (NEW) - PDF generation logic

**Technical Notes:**
- For charts: Use Recharts (npm install recharts)
- For PDF: Use html2canvas + jsPDF or browser print
- Tax rate: Use 35% as conservative middle estimate (Luxembourg rates: 0-42%)

---

## Project Status & Current Work

### As of 2026-02-04:
- ✅ Week 1 complete (deduction catalog)
- ✅ Week 2 complete (profile section with personalized caps)
- ✅ GitHub repository live
- ✅ Documentation structure in place
- ✅ Claude Code workflow established
- ⏳ Week 3 next (expense tracking)

### Next Immediate Tasks (Week 3):
1. Add expense input to each deduction card
2. Implement progress bar visualization
3. Calculate unutilized amounts
4. Add summary section with totals
5. Save/load expenses from localStorage

---

## Coding Standards for This Project

### File Organization
- **One component per file** (no multiple exports from same file)
- **Component files:** PascalCase (ProfileSection.jsx, not profile-section.jsx)
- **Utility files:** camelCase (taxCalculations.js, not tax-calculations.js)
- **Data files:** camelCase (deductions.js)

### React Patterns
- **Functional components only** (no class components)
- **Hooks for state:** useState, useEffect (no Redux for MVP)
- **Props drilling okay** (no Context API yet - overkill for this size)
- **Default exports** for components (not named exports)

### Styling
- **Tailwind only** (no custom CSS files except index.css)
- **Utility classes** in JSX (no @apply in CSS)
- **Responsive:** Mobile-first (default styles, then sm:, md:, lg:)
- **Colors:** Use Tailwind's blue palette (blue-600, blue-700) for primary

### State Management
- **localStorage for persistence** (no backend APIs)
- **useState at App level** for shared state (profile, expenses)
- **Props for component communication** (no Redux, no Context)

### Data Flow
- **Single source of truth:** deductions.js for all deduction metadata
- **Calculations in utils:** Don't calculate in components, import from utils/
- **Pure functions:** taxCalculations.js functions should be pure (no side effects)

### Naming Conventions
- **Components:** PascalCase (ProfileSection, DeductionCard)
- **Functions:** camelCase (calculateAge, saveProfile)
- **Constants:** UPPER_CASE (TAX_YEAR, MAX_CHILDREN)
- **Props:** camelCase (birthYear, maritalStatus)

### Error Handling
- **Input validation:** Check min/max, show inline errors
- **localStorage errors:** Wrap in try/catch, fallback to defaults
- **Calculation errors:** Return null or 0, don't crash app

---

## Working with AI on This Project

### When Starting a New Chat with Claude/Claude Code

**Always provide context:**
```
I'm working on the Luxembourg Tax Calculator.
@docs/PROJECT_CONTEXT.md

[Your specific question or task]
```

**This gives the AI:**
- Current project status (which week)
- Technical decisions already made (why React, why Tailwind)
- Luxembourg tax rules (so it doesn't hallucinate facts)
- Coding standards (file naming, patterns)
- What's in scope vs out of scope

---

### Two-Prompt Workflow (Critical!)

**For ANY facts that need accuracy:**

**Step 1: Research with Perplexity**
```
Find the official Luxembourg tax authority page for [topic].
Prioritize: impotsdirects.public.lu > guichet.public.lu > gov announcements
Return exact URL and quality rating.
```

**Step 2: Build with Claude Code**
```
@docs/PROJECT_CONTEXT.md

Using this verified fact: [paste from Perplexity]
Build [feature] with these constraints:
MUST HAVE: [exact requirements]
MUST NOT: [constraints]
```

**When NOT to use two-prompt workflow:**
- UI styling (colors, spacing) - no factual accuracy needed
- Component structure (patterns) - architectural, not factual
- Bug fixes - working with existing code

---

### Prompting Best Practices for This Project

**Good Prompt:**
```
@docs/PROJECT_CONTEXT.md

Build ProfileSection.jsx for Week 2.

MUST HAVE:
- Two number inputs for birth years (1900-2026)
- Dropdown for marital status ("Single", "Married/Civil Union")
- When married, show second birth year input
- Calculate age as: 2026 - birthYear
- Validate: birthYear between 1900 and 2026
- Save to localStorage as {person1BirthYear, person2BirthYear, maritalStatus}

MUST NOT:
- Add children count input (not in scope for this task)
- Add tax calculation (that's Week 4)
- Use Date() objects (just year arithmetic)

TECHNICAL:
- React functional component with useState
- Tailwind for styling (form-input, rounded-lg)
- Export default ProfileSection
```

**Bad Prompt:**
```
"Build a profile section"
```
**Why bad:** Vague, no constraints, AI will guess what fields to include

---

### Red Flags When Working with AI

**Red Flag 1: AI Suggests URLs Without Being Asked**
```
❌ AI: "I'll add links to official Luxembourg sources"
✅ You: "Stop. Use ONLY these exact URLs: [list from Perplexity]"
```

**Red Flag 2: AI Adds Features Out of Scope**
```
❌ AI: "I also added a tax filing export feature"
✅ You: "Remove that. Week 2 scope is only profile inputs."
```

**Red Flag 3: AI Uses Complex Patterns Unnecessarily**
```
❌ AI: "I set up Redux for state management"
✅ You: "Too complex. Use useState at App level only."
```

**Red Flag 4: AI Doesn't Match Project Standards**
```
❌ AI: "Created profile-section.jsx with named export"
✅ You: "Rename to ProfileSection.jsx with default export per project standards"
```

---

## Future Enhancement Ideas (Post-Week 4)

**Potential Week 5+ Features:**
- Backend API (Express.js + PostgreSQL)
- User authentication (email/password or OAuth)
- Multi-language support (EN/FR/DE/LU)
- PDF export with official tax form layout
- Historical tracking (2025, 2026, 2027 comparison)
- Integration with accounting software (optional)
- Notifications when new tax rules announced
- Tax professional consultation booking
- Community forum for questions

**Annual Maintenance:**
- Update caps every January 1st
- Verify all official source URLs still work
- Check for tax law changes
- Update documentation

---

## Common Questions & Answers

**Q: Why Tax Class 2 specifically?**
A: Most complex case (married + children). If we solve this, Tax Class 1 (single) is a subset.

**Q: Why not build for all tax classes?**
A: Scope control. Master one case first, expand later. PM principle: start narrow, validate, then broaden.

**Q: Why not integrate with Luxembourg tax filing system?**
A: Out of scope for learning MVP. That requires official API access, legal compliance, security audits. This is a calculator/estimator, not a filing tool.

**Q: Why not mobile app (iOS/Android)?**
A: Web-first is faster to build and deploy. Can wrap in Capacitor later if needed. For learning vibe coding, web is better (inspector tools, faster iteration).

**Q: Should we add backend/database?**
A: Not for Weeks 1-4. localStorage is sufficient for MVP. Can add backend in Week 5+ if continuing development or productizing.

**Q: What about data privacy / GDPR?**
A: No personal data stored on servers (all localStorage). No user accounts. No tracking. No cookies. Calculator runs entirely in browser. Still, add privacy disclaimer in footer.

**Q: Can this be monetized?**
A: Possible paths: (1) Ad-supported free version, (2) Premium features (multi-year tracking, PDF export), (3) Tax professional partnerships, (4) Corporate licensing. But monetization is NOT a goal for this 4-week learning project.

---

## Success Criteria

### Week 1 Success ✅
- [x] 8 deduction cards displaying correctly
- [x] Mobile responsive
- [x] Links to official sources
- [x] Professional README
- [x] Git + GitHub set up
- [x] Documentation structure created

### Week 2 Success ✅
- [x] Profile inputs functional (birth years, marital status, children, homeowner)
- [x] Age calculation correct (2026 - birthYear)
- [x] Home savings cap adjusts based on age (€1,344 vs €672)
- [x] Married doubles per-person caps (shows "€X × 2 (married)")
- [x] Children increase caps where applicable (shows "€X × 4 (2 adults + 2 children)")
- [x] localStorage saves/loads profile
- [x] Input validation works (1900-2026)
- [x] Mortgage interest conditional logic (homeowner + year tier)
- [x] Fully deductible case for new homeowners
- [ ] No console errors (verify with `npm run dev`)
- [ ] Git commits for Week 2 features

### Week 3 Success (Checklist)
- [ ] Expense inputs added to all cards
- [ ] Progress bars show utilization visually
- [ ] Colors change based on percentage (blue/yellow/green)
- [ ] Unutilized amounts calculated correctly
- [ ] Summary section shows totals
- [ ] localStorage saves/loads expenses
- [ ] No accuracy bugs in calculations

### Week 4 Success (Checklist)
- [ ] Tax savings estimated (using 35% rate)
- [ ] Recommendations prioritized by impact
- [ ] Simple visualization (bar chart)
- [ ] Export/print functionality works
- [ ] Deployed to Vercel (live URL)
- [ ] All documentation updated
- [ ] Project complete and portfolio-ready

---

## When Things Go Wrong

### Issue: AI Hallucinates Luxembourg Tax Rules
**Solution:** ALWAYS use two-prompt workflow. Verify with Perplexity first.

### Issue: localStorage Data Lost
**Solution:** Expected behavior (browser cache clearing). Add "Export Data" button in Week 4 for backup.

### Issue: Calculation Bug (Wrong Caps Shown)
**Solution:** Check utils/taxCalculations.js. Add console.log() to trace values. Use React DevTools to inspect state.

### Issue: Git Conflicts
**Solution:** You're solo dev, shouldn't happen. If it does: `git reset --hard origin/main` (WARNING: loses uncommitted work).

### Issue: Vercel Deploy Fails
**Solution:** Check build command in package.json. Usually: `npm run build`. Output should be in `dist/` folder.

---

## Contact & Questions

**Project Owner:** Ting Wang
- **GitHub:** github.com/tingwang-tech
- **LinkedIn:** [Your LinkedIn]
- **Substack:** "Where I Begin Again" newsletter

**For AI Assistants:**
- Reference this document when helping with this project
- Check RESEARCH_LOG.md for verified sources
- Check DECISIONS.md for context on past choices
- Check CHANGELOG.md for recent changes
- Ask clarifying questions rather than guessing
- Follow the coding standards section above

---

## Document Maintenance

**Last Updated:** 2026-01-29
**Update Frequency:** Weekly (every Friday/Sunday)
**Owner:** Ting Wang

**Update Checklist:**
- [ ] Current status (which week, what's in progress)
- [ ] Recent decisions added to appropriate sections
- [ ] Tech stack changes (if any)
- [ ] New learnings or gotchas discovered
- [ ] Success criteria checkboxes updated

**Git Commit When Updated:**
```bash
git add docs/PROJECT_CONTEXT.md
git commit -m "Updated PROJECT_CONTEXT: Week X progress and learnings"
git push
```

---

**End of Project Context Document**
