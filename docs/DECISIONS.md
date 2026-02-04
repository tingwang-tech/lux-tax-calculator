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

## Older decisions

*(Add older ADRs below as the project grows.)*
