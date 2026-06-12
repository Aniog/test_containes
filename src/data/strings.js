export const strings = {
  en: {
    topBar: {
      logoText: 'strikingly',
      logoAI: 'AI',
    },
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      subheadline:
        "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      primaryCta: "START BUILDING — IT'S FREE",
      secondaryCta: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      subheading: 'A few common starting points.',
    },
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
      subheading: "Jump to the section that fits what you're building.",
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      subheading: "Sixty-plus generators, organized by what you're building.",
      searchPlaceholder: 'Search generators\u2026',
      searchLabel: 'Search generators',
      resultCount: (n) => `${n} generator${n === 1 ? '' : 's'} match`,
      noResults: 'No generators match your search.',
      noResultsClear: 'Clear search',
      noResultsBuilder: "Can't find it? Start with our AI builder.",
      showAll: (n) => `Show all ${n} generators`,
      showLess: 'Show less',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        {
          number: '1',
          title: 'PICK A GENERATOR',
          body: 'Browse by category or search to find one that fits your goal.',
        },
        {
          number: '2',
          title: 'DESCRIBE YOUR SITE',
          body: 'Tell our AI builder about your business in a sentence or two.',
        },
        {
          number: '3',
          title: 'GENERATE AND PUBLISH',
          body: 'Get a fully built site in seconds. Customize anything, then go live.',
        },
      ],
    },
    whyStrikingly: {
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
          question: 'What is an AI site generator?',
          answer:
            "An AI site generator is a tool that builds a complete website for you based on a short description of your business or goal. Instead of dragging and dropping elements manually, you describe what you need and the AI assembles the layout, copy, and design in seconds.\n\nStrikingly's generators are tuned for specific use cases\u2014portfolios, stores, landing pages, and more\u2014so the output is already shaped for your purpose rather than a blank canvas.",
        },
        {
          question: 'How is a generator different from a template?',
          answer:
            'A template gives you a pre-designed layout that you fill in yourself. A generator goes further: it reads your input, writes placeholder copy, selects relevant sections, and produces a site that already reflects your context.\n\nThink of a template as a blank form and a generator as a first draft. You still customize the result, but you start much further along.',
        },
        {
          question: 'Are these generators free to use?',
          answer:
            'Yes. You can generate, preview, and customize any site on Strikingly without a credit card. Publishing to a custom domain or unlocking advanced features requires a paid plan, but the generation step itself is always free.',
        },
        {
          question: 'What kinds of sites can I build?',
          answer:
            "The generators on this page cover six broad categories: websites for businesses and individuals, landing pages built to convert, portfolios for creatives, blogs, online stores, and link-in-bio pages for creators.\n\nWithin each category you'll find generators tuned for specific industries and goals\u2014photographers, restaurants, yoga instructors, musicians, and many more.",
        },
        {
          question: 'Can I customize what the generator produces?',
          answer:
            "Absolutely. Every generated site opens in Strikingly's visual editor, where you can change text, swap images, reorder sections, adjust colors, and add or remove any element. The generator gives you a strong starting point; you own everything after that.",
        },
        {
          question: 'Do generated sites work on mobile?',
          answer:
            'Yes. Every site Strikingly generates is fully responsive by default. The layout adapts automatically to phones, tablets, and desktops without any extra work on your part.',
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      logoText: 'strikingly',
      logoAI: 'AI',
      copyright: `© ${new Date().getFullYear()} Strikingly, Inc. All rights reserved.`,
      columns: [
        {
          heading: 'Product',
          links: [
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'AI Site Builder', href: '/s/ai_site_builder' },
            { label: 'Generators', href: '/generators' },
          ],
        },
        {
          heading: 'Resources',
          links: [
            { label: 'Blog', href: '/blog' },
            { label: 'Support', href: '/support' },
          ],
        },
        {
          heading: 'Company',
          links: [
            { label: 'About', href: '/about' },
          ],
        },
        {
          heading: 'Legal',
          links: [
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Privacy Policy', href: '/privacy' },
          ],
        },
      ],
    },
  },
};

export default strings;
