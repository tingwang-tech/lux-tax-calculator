# Learning Log - Luxembourg Tax Calculator

## How to use this document

- **When to use:** At the end of each week (or whenever you want to capture "what I learned").
- **Add a new entry:** Copy the "Weekly learning template" below, paste it under "Recent entries", replace the date and fill in the sections.
- **Be concrete:** Prefer "I learned that X does Y" or "I fixed Z by doing W" over vague notes.
- **Link to docs/code:** Reference `RESEARCH_LOG.md`, `DECISIONS.md`, or specific files when relevant.

## Purpose

This document records what you learned each week while building the Luxembourg tax calculator: technical, domain (tax), and process takeaways.

---

## Weekly learning template (copy for new week)

```markdown
## Week of YYYY-MM-DD to YYYY-MM-DD

### What I learned

**Technical**
- [e.g. "Vite HMR: dev server must stay running; closing the terminal stops it and the next run can get a different port (5174)."]
- [Another technical takeaway]

**Domain (Luxembourg tax)**
- [e.g. "Insurance/loan interest cap is €672 per person; the best source is impotsdirects A–Z, not the general deductions page."]
- [Another tax/domain takeaway]

**Process / tools**
- [e.g. "Keeping a research log with URLs and quality ratings avoids re-searching and wrong links."]
- [Another process takeaway]

### Surprises / gotchas
- [Something that didn’t work as expected or took extra time]

### Next week I want to learn
- [ ] [One concrete learning goal for the next week]
```

---

## Recent entries

### Week of 2026-02-04 to 2026-02-11 (Week 3)

#### What I learned

**Technical**
- Progress bar implementation: simple div with dynamic width via `style={{ width: \`${percentage}%\` }}`
- Color coding with conditional Tailwind classes: `getProgressColor()` returns different `bg-` classes
- Mobile number inputs are notoriously hard to use (tiny browser spinners are nearly impossible to tap)
- Better mobile pattern: custom +/− stepper buttons with large touch targets (40px minimum)
- CSS to hide native number spinners: `[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none`
- Placeholder vs value: use `value={count === 0 ? '' : count}` with `placeholder="0"` for cleaner UX
- Vercel deployment is straightforward: connect GitHub repo, auto-deploys on push
- `npm run build` creates production bundle in `dist/` folder

**Domain (Luxembourg tax)**
- Expense tracking helps visualize utilization: seeing "Unused: €2,500" is more actionable than just seeing the cap
- Summary totals across categories reveal overall tax optimization opportunity
- Some deductions (fully deductible mortgage interest) can't have progress bars - need special handling

**Process / tools**
- Vercel CLI: `npm install -g vercel` then `vercel` to deploy
- GitHub integration with Vercel enables automatic deployments on push
- Beta testing with real URL helps catch UX issues (like mobile number inputs)
- Quick iteration cycle: fix → commit → push → Vercel auto-deploys in ~1 minute

#### Challenges I faced
- Mobile users couldn't easily use number input steppers (arrows too small)
- Children count showing "0" felt like data, not like an empty input waiting for user

#### How I solved them
- Added custom +/− buttons with 40px touch targets for mobile-friendly input
- Changed to show placeholder "0" when value is 0, making it feel like an empty input
- Hid native browser spinners for cleaner look (CSS appearance:textfield)

#### Next week I want to learn
- [ ] Tax savings estimation (what marginal rate to use?)
- [ ] Chart library integration (Recharts)
- [ ] PDF export or print-friendly view
- [ ] Prioritized recommendations algorithm

---

### Week of 2026-01-26 to 2026-02-04 (Weeks 1-2)

#### What I learned

**Technical**
- Claude Code installation and authentication: `npm install -g @anthropic-ai/claude-code` then `claude auth`
- Mac requires `sudo` for global npm packages (permission denied error normal)
- Terminal security prompt (trust folder) is a safety feature - press 1 to proceed
- Two-tool workflow: Perplexity Pro for research, Claude Code for direct file building
- Testing workflow: `npm run dev` → browser → test → `Ctrl+C` → `git commit`
- localStorage for profile persistence: save as JSON object, load on component mount
- React useState and useEffect for form state management
- Conditional rendering in React: show/hide fields based on state (marital status, homeowner)
- Early return pattern in React: `if (condition) return null` to hide components
- Data-driven UI: flags in data file (`isPerPerson`, `includesChildren`) control display logic
- Utility functions for calculations: keep logic out of components, import from utils/

**Domain (Luxembourg tax)**
- Tax Class 2 is for married couples with children (most complex case)
- 8 major deduction categories with specific 2026 caps
- 2026 private pension cap increased to €4,500 per person (major change from €3,200!)
- Official source hierarchy: impotsdirects A-Z > guichet specific > gov announcements
- Age calculation for home savings: 2026 - birthYear (not Date() objects)
- Per-person vs household caps: Insurance doubles for married, commuting doesn't
- **Children affect some caps but not others:**
  - Insurance & loan interest: €672 × (1 + spouse + children) ← includes children
  - Home savings: same formula ← includes children
  - Mortgage interest: same formula ← includes children
  - Private pension: €4,500 × (1 + spouse) ← adults only
  - Employer pension: €1,200 × (1 + spouse) ← adults only
- **Mortgage interest is complex:**
  - Year 0-1: fully deductible (if no prior mortgage deduction in 5 years)
  - Years 2-5: €4,000/person
  - Years 6-10: €3,000/person
  - Year 11+: €2,000/person

**Process / tools**
- PROJECT_CONTEXT.md serves as comprehensive AI assistant guide
- Universal vibe coding skill: transferable methodology across all future projects
- Constraint blocks in prompts prevent AI hallucinations (MUST HAVE / MUST NOT)
- Tool clarity: Perplexity = research, Claude Code = building, Claude Chat = strategy
- Security prompts are normal (not errors to fear)
- Weekly documentation updates work best as batch ritual (not daily)
- **Two-prompt workflow is essential for tax accuracy:**
  1. Perplexity: "Find official source for [rule]"
  2. Claude Code: "Build feature using EXACTLY this verified info: [paste]"
- Live updates UX (no submit button) works well for calculators/exploratory tools

#### Challenges I faced
- Cursor free plan hit limit after Week 1
- npm permission denied error when installing Claude Code globally
- Confusion about tool overlap between Perplexity and Claude Code
- Understanding when to use which tool (three tools felt overwhelming)
- Terminal security prompts seemed scary at first
- Initial cap calculations were wrong (didn't include children for some deductions)
- Mortgage interest rules were more complex than expected

#### How I solved them
- Installed Claude Code as Cursor alternative (included with Claude Pro)
- Used `sudo npm install` to get admin permission on Mac
- Clarified tool roles: Perplexity = research ONLY, Claude Code = building ONLY
- Created decision framework for tool selection
- Learned security prompts are protective features
- Used Perplexity to verify exact cap formulas from official sources
- Created reusable prompt template for Perplexity tax research

#### Next week I want to learn
- [x] How to calculate personalized caps based on age (home savings logic) ✅ Done
- [x] How to multiply caps by 2 for married couples (per-person categories only) ✅ Done
- [x] localStorage patterns: when to save, how to structure data ✅ Done
- [x] Input validation best practices in React ✅ Done
- [x] Tailwind form styling patterns ✅ Done
- [x] Progress bar visualization ✅ Done (Week 3)
- [x] Summary calculations across multiple cards ✅ Done (Week 3)
- Debounced input saving: Decided against (immediate save works well for this use case)

---

### Week of 2026-01-20 to 2026-01-26

#### What I learned

**Technical**
- Running `npm run dev` from the project root is required; running from `~` gives "Missing script: dev" because npm looks for `package.json` in the current directory.
- If the dev server is already running on 5173, a new run picks the next free port (e.g. 5174); the browser must use the URL printed in the terminal. For this project the dev server runs at `http://localhost:5174/` when 5173 is in use.
- Closing the terminal that runs `npm run dev` stops the server; the app won’t hot-reload until the server is started again from the project folder.

**Domain (Luxembourg tax)**
- Official sources for deduction caps are spread across impotsdirects.public.lu (A–Z), guichet.public.lu (topic pages), and gouvernement.lu (reform announcements); generic "deductible expenses" pages are not always the best link for a specific category.
- 2026 private pension cap (€4,500) is announced in a government "nouveautés 2026" article rather than only in the generic pension pages.

**Process / tools**
- A research log with URL, domain, source type, and quality rating (e.g. RESEARCH_LOG.md) makes it clear which link is canonical and when to re-verify.
- Specifying exact URLs in the prompt ("use exactly these official URLs") avoids the model substituting a generic overview for a topic-specific page.

#### Surprises / gotchas
- Initial implementation used high-level guichet overview links; the most accurate links (e.g. impotsdirects A–Z for interest, dedicated pages for employer pension and childcare) had to be provided and then wired in.

#### Next week I want to learn
- [ ] How to add user inputs and compute a simple tax-related result (Week 2 scope TBD).

---

## Older entries

*(Add older weeks below as the project grows.)*
