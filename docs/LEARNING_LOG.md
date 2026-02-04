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

### Week of 2026-01-26 to 2026-02-04

#### What I learned

**Technical**
- Claude Code installation and authentication: `npm install -g @anthropic-ai/claude-code` then `claude auth`
- Mac requires `sudo` for global npm packages (permission denied error normal)
- Terminal security prompt (trust folder) is a safety feature - press 1 to proceed
- Two-tool workflow: Perplexity Pro for research, Claude Code for direct file building
- Testing workflow: `npm run dev` → browser → test → `Ctrl+C` → `git commit`
- localStorage for profile persistence: save as JSON object, load on component mount
- React useState and useEffect for form state management
- Conditional rendering in React: show/hide Person 2 input based on marital status

**Domain (Luxembourg tax)**
- Tax Class 2 is for married couples with children (most complex case)
- 8 major deduction categories with specific 2026 caps
- 2026 private pension cap increased to €4,500 per person (major change from €3,200!)
- Official source hierarchy: impotsdirects A-Z > guichet specific > gov announcements
- Age calculation for home savings: 2026 - birthYear (not Date() objects)
- Per-person vs household caps: Insurance doubles for married, commuting doesn't

**Process / tools**
- PROJECT_CONTEXT.md serves as comprehensive AI assistant guide
- Universal vibe coding skill: transferable methodology across all future projects
- Constraint blocks in prompts prevent AI hallucinations (MUST HAVE / MUST NOT)
- Tool clarity: Perplexity = research, Claude Code = building, Claude Chat = strategy
- Security prompts are normal (not errors to fear)
- Weekly documentation updates work best as batch ritual (not daily)

#### Challenges I faced
- Cursor free plan hit limit after Week 1
- npm permission denied error when installing Claude Code globally
- Confusion about tool overlap between Perplexity and Claude Code
- Understanding when to use which tool (three tools felt overwhelming)
- Terminal security prompts seemed scary at first

#### How I solved them
- Installed Claude Code as Cursor alternative (included with Claude Pro)
- Used `sudo npm install` to get admin permission on Mac
- Clarified tool roles: Perplexity = research ONLY, Claude Code = building ONLY
- Created decision framework for tool selection
- Learned security prompts are protective features

#### Next week I want to learn
- [ ] How to calculate personalized caps based on age (home savings logic)
- [ ] How to multiply caps by 2 for married couples (per-person categories only)
- [ ] localStorage patterns: when to save, how to structure data
- [ ] Input validation best practices in React
- [ ] Tailwind form styling patterns
- [ ] useEffect dependency array (when does component re-render?)

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
