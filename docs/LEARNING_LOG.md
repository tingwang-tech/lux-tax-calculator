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
