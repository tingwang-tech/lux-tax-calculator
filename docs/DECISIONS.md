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

## Older decisions

*(Add older ADRs below as the project grows.)*
