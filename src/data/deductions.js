export const deductions2026 = [
  {
    id: 'insurance-loan-interest',
    name: 'Insurance & Loan Interest',
    baseCap: 672,
    capDisplay: '€672 per person',
    isPerPerson: true,
    includesChildren: true,
    description:
      'Premiums (e.g., life insurance) and certain personal loan interest are typically deductible up to a capped amount per household member.',
    sourceUrl: 'https://impotsdirects.public.lu/fr/az/i/inter_debit.html',
  },
  {
    id: 'private-pension',
    name: 'Private Pension',
    baseCap: 4500,
    capDisplay: '€4,500 per person (NEW for 2026)',
    isPerPerson: true,
    includesChildren: false,
    isHighlighted: true,
    description:
      'Contributions to an eligible private pension plan (third pillar) can reduce taxable income, subject to an annual cap per person.',
    sourceUrl:
      'https://gouvernement.lu/en/actualites/toutes_actualites/articles/2025/12-decembre/nouveautes-2026.html',
  },
  {
    id: 'employer-pension',
    name: 'Employer Pension',
    baseCap: 1200,
    capDisplay: '€1,200 per person',
    isPerPerson: true,
    includesChildren: false,
    description:
      'Employer pension scheme contributions may be deductible/treated favorably depending on plan type and reporting; this card highlights the learning-project cap target.',
    sourceUrl:
      'https://guichet.public.lu/en/citoyens/fiscalite/declaration-impot-decompte/pension/perception-pension/traitement-fiscal-pension-employeur.html',
  },
  {
    id: 'home-savings',
    name: 'Home Savings',
    baseCap: null, // Age-dependent: calculated dynamically
    baseCapUnder40: 1344,
    baseCapOver40: 672,
    capDisplay: '€672–€1,344 depending on age',
    isPerPerson: true,
    includesChildren: true,
    isAgeBased: true,
    description:
      'Home purchase savings (épargne-logement) contributions can be deductible, with higher caps for younger taxpayers.',
    sourceUrl:
      'https://guichet.public.lu/en/citoyens/logement/aides/aides-indirectes-avantages-fiscaux/epargne-logement-resident.html',
  },
  {
    id: 'mortgage-interest',
    name: 'Mortgage Interest',
    baseCap: null, // Dynamic based on year tier
    mortgageCaps: {
      '0-1': null, // Fully deductible
      '2-5': 4000,
      '6-10': 3000,
      '11+': 2000,
    },
    capDisplay: '€2,000–€4,000 per person (year-based)',
    isPerPerson: true,
    includesChildren: true,
    requiresHomeOwner: true,
    description:
      'Interest on main residence loans: fully deductible in year of valeur locative fixation + 1 year after, then €4,000/person (years 2-5), €3,000/person (years 6-10), €2,000/person (year 11+).',
    sourceUrl: 'https://impotsdirects.public.lu/fr/az/h/habit_pers.html',
  },
  {
    id: 'commuting',
    name: 'Commuting',
    baseCap: 2574,
    capDisplay: '€2,574 max',
    isPerPerson: false,
    description:
      'Home-to-work travel costs are treated as professional expenses; rules include standard allowances and limits depending on situation.',
    sourceUrl:
      'https://guichet.public.lu/en/citoyens/fiscalite/declaration-impot-decompte/depenses-deductibles/frais-professionnels-resident.html',
  },
  {
    id: 'professional-expenses',
    name: 'Professional Expenses',
    baseCap: 540,
    capDisplay: '€540 minimum',
    isPerPerson: true,
    includesChildren: false,
    description:
      'Employees generally benefit from a standard professional-expenses allowance; additional work-related costs may be deductible beyond that threshold.',
    sourceUrl:
      'https://guichet.public.lu/en/citoyens/fiscalite/declaration-impot-decompte/depenses-deductibles/frais-professionnels-resident.html',
  },
  {
    id: 'childcare-help',
    name: 'Childcare/Help',
    baseCap: 5400,
    capDisplay: '€5,400 max',
    isPerPerson: false,
    description:
      'Certain childcare and household help expenses may be deductible under specific conditions (documentation and eligibility rules apply).',
    sourceUrl:
      'https://guichet.public.lu/en/citoyens/fiscalite/declaration-impot-decompte/depenses-deductibles/engager-personnel-menage.html',
  },
]
