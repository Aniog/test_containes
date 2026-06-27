// Single source of user-visible strings.
// Adding strings.es, strings.ja, etc. is a one-file change.

export const strings = {
  en: {
    brand: 'Strikingly',
    brandAi: 'Strikingly AI',
    locale: 'en',

    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },

    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      sub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      primaryCta: "START BUILDING - IT'S FREE",
      secondaryCta: 'BROWSE GENERATORS',
      illustrationAlt: 'A soft purple line-art illustration of a website mockup',
    },

    featured: {
      heading: 'FEATURED GENERATORS',
      sub: 'A few common starting points.',
    },

    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
      sub: 'Jump straight to a group of generators built for the same job.',
    },

    directory: {
      heading: 'ALL GENERATORS',
      sub: 'Sixty-plus generators, organized by what you’re building.',
      searchLabel: 'Search generators',
      searchPlaceholder: 'Search generators...',
      resultCountSingular: '1 generator matches',
      resultCountPlural: (n) => `${n} generators match`,
      matchCount: (n) => (n === 1 ? '1 generator matches' : `${n} generators match`),
      totalCount: (n) => `${n} generators total`,
      emptyHeading: 'No generators match your search.',
      emptyBody: 'Try a different keyword, or clear the search to see everything.',
      clearSearch: 'Clear search',
      cantFindIt: "Can't find it? Start with our AI builder.",
      showAll: (n) => `Show all ${n} generators`,
      showLess: 'Show fewer',
    },

    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        {
          title: 'PICK A GENERATOR',
          body: 'Browse by category or search to find one that fits your goal.',
        },
        {
          title: 'DESCRIBE YOUR SITE',
          body: 'Tell our AI builder about your business in a sentence or two.',
        },
        {
          title: 'GENERATE AND PUBLISH',
          body: 'Get a fully built site in seconds. Customize anything, then go live.',
        },
      ],
    },

    why: {
      heading: 'WHY STRIKINGLY',
      items: [
        {
          title: 'LIVE IN SECONDS',
          body: 'Describe your site, we build it. No setup, no learning curve.',
        },
        {
          title: 'MOBILE BY DEFAULT',
          body: 'Every generator produces responsive sites that work on any device.',
        },
        {
          title: 'FREE TO START',
          body: 'Generate, customize, and publish without a credit card.',
        },
      ],
    },

    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          q: 'What is an AI site generator?',
          a: "An AI site generator is a starting point built around the kind of site you want to make. Pick a generator for your industry or goal, and our AI builder uses that as the brief when it produces your site. You're not starting from a blank page or a generic template; you're starting from something already shaped for you.",
          a2: "Once the site is generated, you can edit anything. The generator is the starting point, not the limit.",
        },
        {
          q: 'How is a generator different from a template?',
          a: "A template is a fixed design you swap your content into. A generator is a brief the AI builder uses to create a site for you. The result still follows the structure of the generator you chose, but the layout, copy, and imagery are generated for your business rather than copied from a sample.",
          a2: "If you want a template instead, you can browse our regular template library and skip the generator entirely.",
        },
        {
          q: 'Are these generators free to use?',
          a: "Yes. You can generate a site from any of these generators and publish it on a free Strikingly subdomain without a credit card. Paid plans are available if you want to connect a custom domain, remove Strikingly branding, or unlock more advanced features.",
        },
        {
          q: 'What kinds of sites can I build?',
          a: "Generators cover the most common site types: business sites, personal sites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each generator is tuned for a specific kind of work, so a restaurant site generator knows about menus and reservations while a portfolio generator knows about galleries.",
        },
        {
          q: 'Can I customize what the generator produces?',
          a: "Every section, image, and piece of copy on a generated site is editable. Use the editor to change text, swap images, add new sections, or rearrange the page. The generator is the starting point; you stay in control of the result.",
        },
        {
          q: 'Do generated sites work on mobile?',
          a: "Yes. Every site produced by a Strikingly generator is responsive by default. The layout, typography, and images automatically adapt to phones, tablets, and desktops, so you do not need to maintain a separate mobile version.",
        },
      ],
    },

    closing: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },

    footer: {
      tagline: 'The simplest way to build a stunning site.',
      columns: [
        {
          heading: 'Product',
          links: [
            { label: 'AI Site Builder', href: '/s/ai_site_builder' },
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Features', href: '/features' },
          ],
        },
        {
          heading: 'Company',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'Press', href: '/press' },
            { label: 'Contact', href: '/contact' },
          ],
        },
        {
          heading: 'Support',
          links: [
            { label: 'Help Center', href: '/support' },
            { label: 'Community', href: '/community' },
            { label: 'Status', href: '/status' },
            { label: 'Updates', href: '/updates' },
          ],
        },
        {
          heading: 'Legal',
          links: [
            { label: 'Terms', href: '/terms' },
            { label: 'Privacy', href: '/privacy' },
            { label: 'Cookies', href: '/cookies' },
            { label: 'Accessibility', href: '/accessibility' },
          ],
        },
      ],
      copyright: '© Strikingly. All rights reserved.',
    },
  },
};

// Helper for the active locale.
export const t = strings.en;
