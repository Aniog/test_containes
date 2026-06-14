// All user-visible strings for the /generators hub live here so adding
// `strings.es` or `strings.ja` is a one-file change.

export const strings = {
  en: {
    meta: {
      title: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
      description:
        "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.",
      ogTitle: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
      ogDescription:
        "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.",
      ogUrl: 'https://www.strikingly.com/generators',
      canonical: 'https://www.strikingly.com/generators',
      locale: 'en',
    },
    topBar: {
      logo: 'strikingly AI',
    },
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      line1: 'BUILD ANY KIND OF SITE',
      line2: 'WITH AI, IN AN INSTANT',
      sub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      primaryCta: "START BUILDING - IT'S FREE",
      secondaryCta: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      sub: 'A few common starting points.',
    },
    browseCategories: {
      heading: 'BROWSE BY CATEGORY',
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      sub: 'Sixty-plus generators, organized by what you’re building.',
      searchLabel: 'Search generators',
      searchPlaceholder: 'Search generators...',
      resultCount: (n) => `${n} ${n === 1 ? 'generator matches' : 'generators match'}`,
      emptyTitle: 'No generators match your search.',
      emptyCta: 'Clear search',
      emptyLink: "Can't find it? Start with our AI builder.",
      showAll: (n) => `Show all ${n} generators`,
      showLess: 'Show fewer',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      step1Title: 'PICK A GENERATOR',
      step1Body:
        'Browse by category or search to find one that fits your goal.',
      step2Title: 'DESCRIBE YOUR SITE',
      step2Body:
        'Tell our AI builder about your business in a sentence or two.',
      step3Title: 'GENERATE AND PUBLISH',
      step3Body:
        'Get a fully built site in seconds. Customize anything, then go live.',
    },
    why: {
      heading: 'WHY STRIKINGLY',
      cell1Title: 'LIVE IN SECONDS',
      cell1Body: 'Describe your site, we build it. No setup, no learning curve.',
      cell2Title: 'MOBILE BY DEFAULT',
      cell2Body: 'Every generator produces responsive sites that work on any device.',
      cell3Title: 'FREE TO START',
      cell3Body: 'Generate, customize, and publish without a credit card.',
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
    },
    closing: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      tagline: 'Make a site you’re proud of.',
      product: 'Product',
      productLinks: [
        { label: 'AI Site Builder', href: '/s/ai_site_builder' },
        { label: 'Templates', href: '/templates' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Generators', href: '/generators' },
      ],
      company: 'Company',
      companyLinks: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Support', href: '/support' },
      ],
      resources: 'Resources',
      resourcesLinks: [
        { label: 'Help Center', href: '/support' },
        { label: 'Community', href: '/blog' },
        { label: 'Status', href: '/about' },
      ],
      legal: 'Legal',
      legalLinks: [
        { label: 'Terms', href: '/terms' },
        { label: 'Privacy', href: '/privacy' },
      ],
      copyright: '© Strikingly. All rights reserved.',
    },
  },
};

export const t = (path, locale = 'en') => {
  const segments = path.split('.');
  let value = strings[locale];
  for (const segment of segments) {
    if (value == null) return '';
    value = value[segment];
  }
  return value ?? '';
};
