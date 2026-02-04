# Research Log - Luxembourg Tax Calculator

## How to use this document

- **When to use:** Whenever you look up official sources (URLs, caps, rules) for tax data used in the app.
- **Add a new entry:** Copy the "Dated entry template" below, paste it under the last entry, replace the date and fill in the sections.
- **Per source:** For each source found, fill in URL, domain, source type, quality (1–5 stars), why chosen, verified date, next review date.
- **Quality standards:** Use the star definitions at the bottom when rating; prefer impotsdirects A–Z and government announcements where possible.
- **When links break:** Note in "When Links Break", then add a new research entry with the new URL and date.

## Purpose

This document tracks all research decisions, official sources, and verification dates for the tax calculator data.

## Dated entry template (copy for new research)

```markdown
## YYYY-MM-DD: [Short title, e.g. "Official Source URLs for Deductions"]

### Research Question
[One sentence: what you needed to find.]

### Research Method
- Tool: [e.g. Perplexity.ai, web search, impotsdirects.lu]
- Search strategy: [How you prioritized or filtered results.]
- Date: [Date of research]

### Sources Found

#### 1. [Category or topic name]
- **URL:** 
- **Domain:** 
- **Source Type:** A-Z entry / specific page / overview
- **Quality Rating:** ⭐⭐⭐⭐⭐ (1-5 stars)
- **Why chosen:** 
- **Verified:** YYYY-MM-DD
- **Next review:** YYYY-MM-DD

[Repeat for each source.]

### Action Taken
[What you changed in the codebase, e.g. "Updated src/data/deductions.js with verified URLs on YYYY-MM-DD."]

### Notes
[Optional: prioritization rules, caveats, "only overview available", etc.]
```

---

## 2026-01-26: Official Source URLs for Deductions

### Research Question
Find the most authoritative Luxembourg government URLs for 8 tax deduction categories in 2026.

### Research Method
- Tool: Perplexity.ai
- Search strategy: Prioritize impotsdirects.public.lu A-Z entries, then guichet.public.lu specific pages
- Date: January 26, 2026

### Sources Found

#### 1. Insurance & Loan Interest (€672 per person)
- **URL:** https://impotsdirects.public.lu/fr/az/i/inter_debit.html
- **Domain:** impotsdirects.public.lu
- **Source Type:** A-Z entry
- **Quality Rating:** ⭐⭐⭐⭐⭐ (1-5 stars)
- **Why chosen:** Official A-Z entry on interest/deductions; topic-specific primary source.
- **Verified:** 2026-01-26
- **Next review:** 2027-01-01

#### 2. Private Pension (€4,500 per person - NEW 2026)
- **URL:** https://gouvernement.lu/en/actualites/toutes_actualites/articles/2025/12-decembre/nouveautes-2026.html
- **Domain:** gouvernement.lu
- **Source Type:** Government reform announcement
- **Quality Rating:** ⭐⭐⭐⭐⭐ (1-5 stars)
- **Why chosen:** Official 2026 nouveautés announcement; primary source for new pension cap.
- **Verified:** 2026-01-26
- **Next review:** 2027-01-01

#### 3. Employer Pension (€1,200 per person)
- **URL:** https://guichet.public.lu/en/citoyens/fiscalite/declaration-impot-decompte/pension/perception-pension/traitement-fiscal-pension-employeur.html
- **Domain:** guichet.public.lu
- **Source Type:** Specific page (employer pension treatment)
- **Quality Rating:** ⭐⭐⭐⭐ (1-5 stars)
- **Why chosen:** Dedicated guichet page for employer pension tax treatment; topic-specific.
- **Verified:** 2026-01-26
- **Next review:** 2027-01-01

#### 4. Home Savings Plans (€672/€1,344)
- **URL:** https://guichet.public.lu/en/citoyens/logement/aides/aides-indirectes-avantages-fiscaux/epargne-logement-resident.html
- **Domain:** guichet.public.lu
- **Source Type:** Specific page (épargne-logement)
- **Quality Rating:** ⭐⭐⭐⭐ (1-5 stars)
- **Why chosen:** Dedicated guichet page for home-purchase savings; official, topic-specific.
- **Verified:** 2026-01-26
- **Next review:** 2027-01-01

#### 5. Mortgage Interest (€2,000-€4,000)
- **URL:** https://guichet.public.lu/en/citoyens/fiscalite/immobilier/depenses-deductibles/declarer-residence-principale-secondaire.html
- **Domain:** guichet.public.lu
- **Source Type:** Specific page (main residence / deductible expenses)
- **Quality Rating:** ⭐⭐⭐⭐ (1-5 stars)
- **Why chosen:** Official page on declaring main residence and deductible financing costs; topic-specific.
- **Verified:** 2026-01-26
- **Next review:** 2027-01-01

#### 6. Commuting Costs (€2,574)
- **URL:** https://guichet.public.lu/en/citoyens/fiscalite/declaration-impot-decompte/depenses-deductibles/frais-professionnels-resident.html
- **Domain:** guichet.public.lu
- **Source Type:** Specific page (professional expenses, includes commuting)
- **Quality Rating:** ⭐⭐⭐⭐ (1-5 stars)
- **Why chosen:** Official page on deductible professional expenses; covers home-to-work travel.
- **Verified:** 2026-01-26
- **Next review:** 2027-01-01

#### 7. Professional Expenses (€540)
- **URL:** https://guichet.public.lu/en/citoyens/fiscalite/declaration-impot-decompte/depenses-deductibles/frais-professionnels-resident.html
- **Domain:** guichet.public.lu
- **Source Type:** Specific page (professional expenses)
- **Quality Rating:** ⭐⭐⭐⭐ (1-5 stars)
- **Why chosen:** Dedicated guichet page for professional expenses and flat-rate allowance; topic-specific.
- **Verified:** 2026-01-26
- **Next review:** 2027-01-01

#### 8. Childcare & Help (€5,400)
- **URL:** https://guichet.public.lu/en/citoyens/fiscalite/declaration-impot-decompte/depenses-deductibles/engager-personnel-menage.html
- **Domain:** guichet.public.lu
- **Source Type:** Specific page (household help / personnel de ménage)
- **Quality Rating:** ⭐⭐⭐⭐ (1-5 stars)
- **Why chosen:** Dedicated guichet page for employing household help; topic-specific.
- **Verified:** 2026-01-26
- **Next review:** 2027-01-01

### Action Taken
Updated `src/data/deductions.js` with verified URLs on 2026-01-26.

### Notes
- Prioritized impotsdirects.public.lu A-Z entries where available
- 2026 pension reform URL comes from government announcement
- Some categories only have overview pages (noted in quality rating)

---

## 2026-02-04: Cap Calculation Rules Verification (Week 2)

### Research Question
Verify the exact formula for calculating personalized caps, specifically:
1. Does children count affect the insurance & loan interest cap?
2. Does children count affect the home savings cap?
3. What are the exact mortgage interest caps by year?

### Research Method
- Tool: Perplexity.ai
- Search strategy: Request official A-Z entries with exact cap formulas
- Date: February 4, 2026

### Sources Found

#### 1. Insurance & Loan Interest - Cap Formula
- **URL:** https://impotsdirects.public.lu/fr/az/c/cotis_prim.html
- **Secondary URL:** https://impotsdirects.public.lu/fr/az/i/inter_debit.html
- **Domain:** impotsdirects.public.lu
- **Source Type:** A-Z entry
- **Quality Rating:** ⭐⭐⭐⭐⭐ (5/5)
- **Key finding:** Cap = €672 × (1 + spouse + eligible children)
- **Quote:** "Le plafond est majoré de son propre montant pour le conjoint ou le partenaire si les conjoints ou les partenaires sont imposés collectivement et pour chaque enfant pour lequel le contribuable obtient une modération d'impôt pour enfant."
- **Verified:** 2026-02-04
- **Next review:** 2027-01-01

#### 2. Home Savings (Épargne-logement) - Cap Formula
- **URL:** https://impotsdirects.public.lu/fr/az/c/cotis-epargne-logement.html
- **Domain:** impotsdirects.public.lu
- **Source Type:** A-Z entry
- **Quality Rating:** ⭐⭐⭐⭐⭐ (5/5)
- **Key finding:**
  - Base: €1,344 (age 18-40) or €672 (over 40)
  - Formula: base × (1 + spouse + eligible children)
- **Quote:** Same multiplier rule as insurance/loan interest
- **Verified:** 2026-02-04
- **Next review:** 2027-01-01

#### 3. Mortgage Interest - Year-Based Caps
- **URL:** https://impotsdirects.public.lu/fr/az/h/habit_pers.html
- **Domain:** impotsdirects.public.lu
- **Source Type:** A-Z entry
- **Quality Rating:** ⭐⭐⭐⭐⭐ (5/5)
- **Key finding:**
  - Year of fixation + 1 year after: Fully deductible (if no prior mortgage deduction in 5 years)
  - Years 2-5: €4,000 per person
  - Years 6-10: €3,000 per person
  - Year 11+: €2,000 per person
  - Formula: per-person cap × (1 + spouse + children)
- **Verified:** 2026-02-04
- **Next review:** 2027-01-01

#### 4. Private Pension - Adults Only
- **URL:** https://gouvernement.lu/fr/actualites/toutes_actualites/communiques/2026/01-janvier/06-presentation-paquet-mesures.html
- **Domain:** gouvernement.lu
- **Source Type:** Government announcement
- **Quality Rating:** ⭐⭐⭐⭐⭐ (5/5)
- **Key finding:** €4,500 per taxpayer (adults only, children do not increase cap)
- **Verified:** 2026-02-04
- **Next review:** 2027-01-01

### Action Taken
- Updated `src/data/deductions.js` with `includesChildren` flag for each deduction
- Updated `src/utils/taxCalculations.js` with correct multiplier logic
- Updated mortgage interest source URL to A-Z entry
- Added `mortgageCaps` object with year-based tiers

### Notes
- Critical distinction: Some caps include children (insurance, home savings, mortgage), others don't (pensions)
- Mortgage interest has complex rules: year tiers + 5-year prior deduction rule
- All A-Z entries use same "majoré de son propre montant" language for multiplier

---

## Future Research Tasks

### 2027-01-01: Annual Cap Review
- [ ] Check if any 2027 caps changed
- [ ] Verify all URLs still work
- [ ] Update deductions.js if needed

### When Links Break
1. Check if page moved (search domain)
2. Re-run Perplexity search with same criteria
3. Update this log with new URL and date

---

## Research Quality Standards

**5 Stars ⭐⭐⭐⭐⭐:**
- impotsdirects.public.lu A-Z entry
- Specific government reform announcement
- Primary source, topic-specific

**4 Stars ⭐⭐⭐⭐:**
- guichet.public.lu dedicated page for the topic
- Official but not A-Z entry

**3 Stars ⭐⭐⭐:**
- General deductions overview page
- Official domain but not topic-specific

**2 Stars ⭐⭐:**
- Third-party (PWC, banks) but reputable
- Links to official sources

**1 Star ⭐:**
- Generic overview
- No official government backing
