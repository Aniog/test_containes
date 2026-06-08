const strings = {
  en: {
    brand: 'strikingly AI',
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      subheadline:
        'Browse the right generator for what you\u2019re building, or jump straight into our AI site builder.',
      ctaPrimary: 'START BUILDING \u2013 IT\u2019S FREE',
      ctaSecondary: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      subheading: 'A few common starting points.',
    },
    categories: {
      heading: 'BROWSE BY CATEGORY',
      subheading: 'Jump to the section that matches your goal.',
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      subheading: 'Sixty-plus generators, organized by what you\u2019re building.',
      searchPlaceholder: 'Search generators\u2026',
      searchAria: 'Search generators',
      matchCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
      emptyHeading: 'No generators found',
      emptySubtext: "Can\u2019t find it? Start with our AI builder.",
      clearSearch: 'Clear search',
      showAll: (n) => `Show all ${n} generators`,
      showLess: 'Show less',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        {
          num: 1,
          title: 'PICK A GENERATOR',
          desc: 'Browse by category or search to find one that fits your goal.',
        },
        {
          num: 2,
          title: 'DESCRIBE YOUR SITE',
          desc: 'Tell our AI builder about your business in a sentence or two.',
        },
        {
          num: 3,
          title: 'GENERATE AND PUBLISH',
          desc: 'Get a fully built site in seconds. Customize anything, then go live.',
        },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      items: [
        {
          title: 'LIVE IN SECONDS',
          desc: 'Describe your site, we build it. No setup, no learning curve.',
        },
        {
          title: 'MOBILE BY DEFAULT',
          desc: 'Every generator produces responsive sites that work on any device.',
        },
        {
          title: 'FREE TO START',
          desc: 'Generate, customize, and publish without a credit card.',
        },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          q: 'What is an AI site generator?',
          a: 'An AI site generator is a tool that uses artificial intelligence to build a complete website from a short description. You tell the generator what your site is about\u2014your business, your portfolio, your event\u2014and it produces a polished, ready-to-customize site in seconds.\n\nUnlike traditional website builders that start with a blank canvas, an AI generator does the heavy lifting for you: layout, copy, images, and structure are all generated automatically. You can then tweak anything you like before publishing.',
        },
        {
          q: 'How is a generator different from a template?',
          a: 'A template is a pre-designed layout you fill in yourself. You choose the structure, write the copy, and swap in your own images. A generator, on the other hand, creates all of that for you based on what you tell it.\n\nWith a generator, the starting point is already populated with relevant content, images, and sections tailored to your goal. Templates are great when you know exactly what you want; generators are faster when you want a head start.',
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes. Every generator on this page is free to try. You can generate a site, customize it, and publish it without entering a credit card. If you want advanced features like a custom domain, extra storage, or premium integrations, those are available on paid plans.',
        },
        {
          q: 'What kinds of sites can I build?',
          a: 'The generators cover a wide range of use cases: business websites, portfolios, online stores, blogs, landing pages, link-in-bio pages, event sites, wedding sites, restaurant pages, and more. Each category includes generators designed for specific industries and goals.\n\nIf you don\u2019t see an exact match, the general AI Website Generator works for any purpose\u2014just describe what you need.',
        },
        {
          q: 'Can I customize what the generator produces?',
          a: 'Absolutely. The generator gives you a complete starting point, but every element is editable. You can change text, swap images, rearrange sections, adjust colors, add new pages, and connect your own domain. The AI handles the first draft; you make it yours.',
        },
        {
          q: 'Do generated sites work on mobile?',
          a: 'Yes. Every site created with our generators is fully responsive by default. That means it automatically adapts to phones, tablets, and desktops without any extra work from you. Mobile responsiveness is built into the foundation of every generated site.',
        },
      ],
    },
    closingCTA: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      copyright: `\u00A9 ${new Date().getFullYear()} Strikingly, Inc.`,
      columns: [
        {
          title: 'Product',
          links: [
            { label: 'AI Site Builder', href: '/s/ai_site_builder' },
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'Support', href: '/support' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'Help Center', href: '/support' },
            { label: 'Generators', href: '/generators' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Terms', href: '/terms' },
            { label: 'Privacy', href: '/privacy' },
          ],
        },
      ],
    },
  },
};

export default strings;
