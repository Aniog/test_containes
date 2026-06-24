const strings = {
  en: {
    // Top bar
    topBar: {
      brand: 'strikingly AI',
    },

    // Breadcrumb
    breadcrumb: {
      home: 'Strikingly',
      homeLink: '/',
      current: 'AI Generators',
    },

    // Hero
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      subheadline:
        'Browse the right generator for what you\u2019re building, or jump straight into our AI site builder.',
      primaryCta: 'START BUILDING \u2013 IT\u2019S FREE',
      primaryCtaLink: '/s/ai_site_builder',
      secondaryCta: 'BROWSE GENERATORS',
      secondaryCtaLink: '#all-generators',
    },

    // Featured Generators
    featured: {
      heading: 'FEATURED GENERATORS',
      subheading: 'A few common starting points.',
    },

    // Browse by Category
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
    },

    // All Generators
    allGenerators: {
      heading: 'ALL GENERATORS',
      subheading:
        'Sixty-plus generators, organized by what you\u2019re building.',
      searchPlaceholder: 'Search generators\u2026',
      searchAriaLabel: 'Search generators',
      resultCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      cantFind: 'Can\u2019t find it? Start with our AI builder.',
      cantFindLink: '/s/ai_site_builder',
      showAll: (n) => `Show all ${n} generators`,
      showLess: 'Show less',
    },

    // How It Works
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        {
          number: 1,
          title: 'PICK A GENERATOR',
          description:
            'Browse by category or search to find one that fits your goal.',
        },
        {
          number: 2,
          title: 'DESCRIBE YOUR SITE',
          description:
            'Tell our AI builder about your business in a sentence or two.',
        },
        {
          number: 3,
          title: 'GENERATE AND PUBLISH',
          description:
            'Get a fully built site in seconds. Customize anything, then go live.',
        },
      ],
    },

    // Why Strikingly
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      reasons: [
        {
          title: 'LIVE IN SECONDS',
          description:
            'Describe your site, we build it. No setup, no learning curve.',
        },
        {
          title: 'MOBILE BY DEFAULT',
          description:
            'Every generator produces responsive sites that work on any device.',
        },
        {
          title: 'FREE TO START',
          description:
            'Generate, customize, and publish without a credit card.',
        },
      ],
    },

    // FAQ
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      questions: [
        {
          question: 'What is an AI site generator?',
          answer:
            'An AI site generator is a tool that builds a complete website for you based on a short description of your business, project, or goal. Instead of choosing a template and manually editing every section, you describe what you need and the AI assembles pages, writes copy, and arranges layout in seconds. It\u2019s the fastest way to get a professional site online without design or coding skills.',
        },
        {
          question: 'How is a generator different from a template?',
          answer:
            'A template is a pre-designed layout that you fill in yourself. A generator uses AI to create a unique site tailored to what you describe. The result is customized to your content, industry, and style preferences rather than being a one-size-fits-all starting point. You can still edit everything after the generator finishes, but you start much closer to a finished product.',
        },
        {
          question: 'Are these generators free to use?',
          answer:
            'Yes. You can generate a site, customize it, and publish it without entering a credit card. Some advanced features like custom domains and e-commerce tools are available on paid plans, but getting a working site online is completely free.',
        },
        {
          question: 'What kinds of sites can I build?',
          answer:
            'You can build business sites, portfolios, landing pages, blogs, online stores, link-in-bio pages, event sites, and more. We have generators tailored to specific industries like restaurants, real estate, fitness, and weddings, as well as general-purpose tools for any type of project.',
        },
        {
          question: 'Can I customize what the generator produces?',
          answer:
            'Absolutely. After the AI generates your site, you can change text, swap images, adjust colors, rearrange sections, add new pages, and modify any element you see. The generator gives you a polished starting point, and you have full control from there.',
        },
        {
          question: 'Do generated sites work on mobile?',
          answer:
            'Yes. Every site created by our generators is fully responsive, meaning it automatically adapts to phones, tablets, and desktops. Mobile optimization is built in from the start, so you don\u2019t need to create a separate mobile version.',
        },
      ],
    },

    // Closing CTA
    closingCta: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      button: 'START WITH AI BUILDER',
      buttonLink: '/s/ai_site_builder',
    },

    // Footer
    footer: {
      brand: 'Strikingly',
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
      copyright: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`,
    },
  },
};

export default strings;
