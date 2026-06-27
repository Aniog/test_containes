export const strings = {
  en: {
    topBar: {
      logo: 'strikingly AI',
    },
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      sub: 'Browse the right generator for what you\u2019re building, or jump straight into our AI site builder.',
      ctaPrimary: 'START BUILDING \u2014 IT\u2019S FREE',
      ctaSecondary: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      sub: 'A few common starting points.',
    },
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      sub: 'Sixty-plus generators, organized by what you\u2019re building.',
      searchPlaceholder: 'Search generators...',
      matchCount: (n) => `${n} generator${n === 1 ? '' : 's'} match`,
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      cantFind: 'Can\u2019t find it? Start with our AI builder.',
      showAll: (n) => `Show all ${n} generators`,
      showLess: 'Show less',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        { title: 'PICK A GENERATOR', body: 'Browse by category or search to find one that fits your goal.' },
        { title: 'DESCRIBE YOUR SITE', body: 'Tell our AI builder about your business in a sentence or two.' },
        { title: 'GENERATE AND PUBLISH', body: 'Get a fully built site in seconds. Customize anything, then go live.' },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      items: [
        { title: 'LIVE IN SECONDS', body: 'Describe your site, we build it. No setup, no learning curve.' },
        { title: 'MOBILE BY DEFAULT', body: 'Every generator produces responsive sites that work on any device.' },
        { title: 'FREE TO START', body: 'Generate, customize, and publish without a credit card.' },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          q: 'What is an AI site generator?',
          a: 'An AI site generator is a tool that creates a complete, ready-to-publish website from a short text description. You tell it what your business does, who your audience is, and what you need\u2014and it produces pages, copy, images, and layout in seconds. Unlike drag-and-drop builders, there\u2019s no blank canvas to start from; the AI handles the first draft so you can focus on refining.',
        },
        {
          q: 'How is a generator different from a template?',
          a: 'A template is a fixed starting layout that you fill in manually. A generator uses AI to produce unique content, structure, and styling based on your specific inputs. Two people using the same generator will get different sites because the AI tailors everything to the description provided. Templates are one-size-fits-many; generators are one-of-a-kind.',
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes. You can generate, preview, and customize a site at no cost. Publishing on a free Strikingly subdomain is also free. Premium features like custom domains, removing branding, and advanced analytics are available on paid plans, but you can explore everything before deciding to upgrade.',
        },
        {
          q: 'What kinds of sites can I build?',
          a: 'Virtually any kind. Our generators cover business websites, portfolios, landing pages, blogs, online stores, link-in-bio pages, event sites, restaurant menus, and more. If you don\u2019t see a generator for your exact use case, the general AI Site Builder can handle almost any description you give it.',
        },
        {
          q: 'Can I customize what the generator produces?',
          a: 'Absolutely. The generated site is a starting point, not a final product. After generation you can edit text, swap images, rearrange sections, change colors and fonts, add new pages, and connect integrations\u2014all through a visual editor. No code required.',
        },
        {
          q: 'Do generated sites work on mobile?',
          a: 'Yes. Every site produced by our generators is responsive by default. The AI builds layouts that adapt to phones, tablets, and desktops automatically. You can preview the mobile version before publishing and make adjustments if needed.',
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      copyright: `\u00A9 ${new Date().getFullYear()} Strikingly. All rights reserved.`,
    },
  },
};
