# Architecture & Project Decisions - Luxembourg Tax Calculator

## How to use this document

- **When to use:** Whenever you make a non-trivial choice about structure, tech, data shape, or process (e.g. "why React", "why this file layout", "why store caps in JSON").
- **Add a new entry:** Copy the "Decision template" below, paste it under "Recent decisions", assign the next number, fill in context, options, decision, and consequences.
- **Review:** Revisit when you change stack or refactor; update "Consequences" if the decision later caused trade-offs.

## Purpose

This document records why certain architecture and project decisions were made, so you (or others) can understand and change them later without losing context.

---

## Decision template (copy for new decision)

```markdown
### ADR-XXX: [Short title, e.g. "Single data file for deduction caps"]

**Date:** YYYY-MM-DD

**Context**
- What situation or problem led to this decision?
- What constraints or goals did you have?

**Options considered**
1. [Option A]: [Brief pros/cons]
2. [Option B]: [Brief pros/cons]
3. [Option C]: [Brief pros/cons]

**Decision**
- We chose: [Option X]
- In practice: [One or two sentences on how it looks in the repo.]

**Consequences**
- Positive: [What you gain]
- Negative / trade-offs: [What you accept or revisit later]
- Revisit when: [e.g. "When we add multiple tax years or i18n"]
```

---

## Recent decisions

### ADR-001: Single-page app with static deduction data (Week 1)

**Date:** 2026-01-26

**Context**
- Learning project: display 2026 deduction categories and caps with official links.
- Goals: simple to run (Vite + React), no backend, easy to extend later with inputs.

**Options considered**
1. **Plain HTML + CSS:** Simple but no component reuse or state for future inputs.
2. **React + single JSON/JS data file:** Components + clear data/code split; easy to add forms later.
3. **React + API/backend:** Overkill for Week 1; no official API for caps.

**Decision**
- We chose: React (Vite) + Tailwind, with deduction data in `src/data/deductions.js` and a `DeductionCard` component.
- In practice: One page, one data array, cards rendered in a grid; links and caps are the single source of truth for display.

**Consequences**
- Positive: Fast to build, easy to read, ready for Week 2 inputs; Tailwind keeps styling consistent.
- Negative / trade-offs: Caps are in code; when 2027 caps land, we update data (and optionally RESEARCH_LOG).
- Revisit when: Adding multiple tax years, or when caps need to come from an external source.

---
---

### ADR-002: Claude Code over Cursor Pro for Development

**Date:** 2026-02-04

**Context**
- Cursor free plan hit monthly limit after Week 1
- Need AI-assisted coding tool for Week 2-4 development
- Already have Claude Pro subscription ($20/month)
- Could upgrade Cursor Pro ($20/month) or use included Claude Code

**Options considered**
1. **Upgrade Cursor Pro ($20/month):** Visual interface, fastest workflow, but another subscription
2. **Claude Code (included with Claude Pro):** Terminal-based, direct file manipulation, no extra cost
3. **Manual copy-paste (Claude Chat + Cursor as editor):** Free but slowest, most manual work
4. **Perplexity Pro for building:** Attempted but creates tool confusion (research vs building)

**Decision**
- We chose: Claude Code
- In practice: Install via `npm install -g @anthropic-ai/claude-code`, authenticate with `claude auth`, use `claude "@docs/PROJECT_CONTEXT.md [task]"` pattern for all feature building.

**Consequences**
- Positive: Zero extra cost (included in Claude Pro), reinforces terminal skills (universal/transferable), direct file manipulation (fast iteration), works with any editor
- Negative / trade-offs: Steeper learning curve than GUI, less visual debugging, requires terminal comfort, occasional API errors (500)
- Revisit when: If terminal workflow proves too difficult, or if building large multi-file features where visual IDE helps more

---

### ADR-003: Two-prompt workflow for factual accuracy

**Date:** 2026-02-04

**Context**
- AI tools (Cursor, Claude Code, ChatGPT) tend to hallucinate facts, especially URLs and domain-specific rules
- Luxembourg tax data must be accurate (legal/financial consequences)
- Need systematic approach to verify facts before building features

**Options considered**
1. **Trust AI without verification:** Fastest but risky (Week 1 had wrong URLs)
2. **Manual research each time:** Slow, inconsistent, hard to document
3. **Two-prompt workflow (Perplexity → Claude Code):** Separate research from building, clear handoff
4. **Build first, verify later:** Fast but requires rework when facts are wrong

**Decision**
- We chose: Two-prompt workflow
- In practice: (1) Perplexity Pro: "Find official source for [fact]" with domain hierarchy constraints, (2) Claude Code: "Build [feature] using EXACTLY these verified facts: [paste]"

**Consequences**
- Positive: Eliminates AI hallucinations, creates audit trail (RESEARCH_LOG), clear separation of concerns, Perplexity Pro optimized for research
- Negative / trade-offs: Requires two tools instead of one, adds 2-3 minutes per feature, only needed for factual features (not UI-only)
- Revisit when: If Perplexity Pro becomes unreliable, or if we switch to a backend with verified data source

---

### ADR-004: PROJECT_CONTEXT.md as single source of truth for AI

**Date:** 2026-02-04

**Context**
- Multiple AI tools need same project context (tech stack, coding standards, Luxembourg tax rules)
- Repeating context manually in every prompt is tedious and error-prone
- Need consistent AI guidance across Claude Chat, Claude Code, and future tools

**Options considered**
1. **No central context:** Repeat in every prompt (tedious, inconsistent)
2. **README.md only:** Too high-level, missing coding standards and gotchas
3. **Multiple scattered docs:** Hard to maintain, AI doesn't know which to read
4. **PROJECT_CONTEXT.md as comprehensive guide:** Single file with everything AI needs

**Decision**
- We chose: PROJECT_CONTEXT.md
- In practice: One file in `docs/PROJECT_CONTEXT.md` with: project status, tech decisions, Luxembourg tax rules, coding standards, common gotchas, week-by-week plan. Reference with `@docs/PROJECT_CONTEXT.md` in all AI prompts.

**Consequences**
- Positive: Consistent AI guidance, one file to maintain, works across all AI tools, can upload to Claude Projects for auto-context, git-tracked and version-controlled
- Negative / trade-offs: Needs weekly updates (adds to documentation ritual), large file (~100KB), AI must read entire file each time (token cost)
- Revisit when: If file grows too large (split into multiple contexts), or if AI tools support automatic project context without manual reference

---

### ADR-005: Data-driven cap calculation with flags

**Date:** 2026-02-04

**Context**
- Different deductions have different rules for calculating household caps
- Some caps multiply by adults only (pensions), others include children (insurance, home savings)
- Some deductions require additional profile info (mortgage needs homeowner status + year tier)
- Need flexible system that doesn't hardcode deduction IDs in calculation logic

**Options considered**
1. **Hardcode logic per deduction ID:** Simple but brittle, calculation logic knows deduction names
2. **Configuration flags in data file:** Flexible, data-driven, calculation logic is generic
3. **Separate config file for rules:** More complex, harder to maintain

**Decision**
- We chose: Configuration flags in `deductions.js`
- In practice: Each deduction has flags like `isPerPerson`, `includesChildren`, `requiresHomeOwner`, `isAgeBased`, `mortgageCaps` that control calculation behavior

**Consequences**
- Positive: Adding new deductions requires only data changes, not code changes; calculation logic is testable and generic; easy to see all rules at a glance in data file
- Negative / trade-offs: Data file is more complex; need to understand flag meanings
- Revisit when: If rules become too complex to express with flags (need rule engine)

---

### ADR-006: Conditional card visibility based on profile

**Date:** 2026-02-04

**Context**
- Mortgage interest deduction only applies to homeowners
- Showing mortgage card to non-homeowners creates confusion
- Need way to conditionally show/hide cards based on profile

**Options considered**
1. **Always show all cards:** Simpler but confusing for users who aren't homeowners
2. **Hide irrelevant cards:** Cleaner UX, only show what applies
3. **Gray out irrelevant cards:** Shows what exists but not applicable

**Decision**
- We chose: Hide irrelevant cards
- In practice: `shouldHideDeduction()` function checks `requiresHomeOwner` flag against profile; card returns `null` if hidden

**Consequences**
- Positive: Cleaner UX, less cognitive load, users only see relevant deductions
- Negative / trade-offs: Users might not know mortgage deduction exists if they forget to select homeowner; could add "You may also qualify for..." section later
- Revisit when: If users complain about missing information, or if we add more conditional deductions

---

### ADR-007: Live updates vs submit button for profile

**Date:** 2026-02-04

**Context**
- Profile has ~6 inputs (birth years, marital status, children, homeowner, mortgage tier)
- Need to decide when to update cap calculations: on every change or on submit

**Options considered**
1. **Submit button:** Traditional form pattern, explicit action
2. **Live updates:** Instant feedback on every change
3. **Hybrid:** Live preview with explicit save button

**Decision**
- We chose: Live updates (no submit button)
- In practice: Every input change triggers immediate recalculation and localStorage save

**Consequences**
- Positive: Encourages exploration ("what if I had 3 kids?"), builds understanding of tax rules, standard pattern for calculators, no "forgot to click submit" errors
- Negative / trade-offs: More re-renders, localStorage writes on every keystroke (could debounce)
- Revisit when: If adding expensive calculations (API calls) or if users request explicit save

---

### ADR-008: Scrap Week 4 "Optimization Dashboard" features

**Date:** 2026-02-12

**Context**
- Original Week 4 plan included: tax savings estimation, prioritized recommendations, bar chart visualization, export/print
- After completing Week 3 with progress bars and gap displays, re-evaluated whether these features add real value
- Applied "feature bloat" filter before building

**Options considered**
1. **Build all four features as planned:** Complete the original vision
2. **Build some features:** Pick highest-value items
3. **Scrap all four:** Recognize that existing UI already solves the problem

**Analysis of each feature:**

1. **Tax savings estimation (€X unused → "Save €Y"):**
   - Multiplying by 35% doesn't change behavior - people either care about deductions or they don't
   - 35% assumption is inaccurate (20% for low earners, 42% for high earners)
   - Verdict: Weak value

2. **Prioritized recommendations:**
   - Progress bars already show utilization per card at a glance
   - "Private pension is 20% used" is visible without a separate text section
   - Verdict: Completely redundant - the visual gap IS the recommendation

3. **Bar chart visualization:**
   - 8 cards with progress bars already show relative utilization
   - Same data, different pixels - no new insight
   - Would only add value for time-series comparison (2025 vs 2026)
   - Verdict: No value - card layout IS the visualization

4. **Export/Print:**
   - Users can screenshot
   - PDF generation is complex for minimal benefit
   - Verdict: Not worth the effort

**Decision**
- We chose: Scrap all four Week 4 features
- In practice: Week 3 completion = project MVP complete. Focus shifts to polish, testing, or new project.

**Consequences**
- Positive: Avoided feature bloat, saved development time, kept app simple and focused
- Positive: Demonstrates PM skill of knowing when NOT to build
- Negative / trade-offs: None identified - these features genuinely don't add value
- Revisit when: If user feedback specifically requests these features with clear use cases

---

## Older decisions

*(Add older ADRs below as the project grows.)*
