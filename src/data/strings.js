export const strings = {
  en: {
    brand: 'Strikingly',
    brandAI: 'Strikingly AI',

    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',

    // Hero
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSubheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    heroCtaPrimary: 'START BUILDING \u2014 IT\u2019S FREE',
    heroCtaSecondary: 'BROWSE GENERATORS',

    // Featured
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',

    // Browse by Category
    categoryHeading: 'BROWSE BY CATEGORY',

    // All Generators
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchResultCount: (count) => `${count} generator${count !== 1 ? 's' : ''} match`,
    searchNoResults: 'No generators match your search.',
    searchClear: 'Clear search',
    searchNoResultsCta: 'Can\'t find it? Start with our AI builder.',
    showAllPrefix: 'Show all',
    showLessPrefix: 'Show less',

    // How It Works
    howItWorksHeading: 'HOW IT WORKS',
    howItWorksSteps: [
      {
        title: 'PICK A GENERATOR',
        description: 'Browse by category or search to find one that fits your goal.',
      },
      {
        title: 'DESCRIBE YOUR SITE',
        description: 'Tell our AI builder about your business in a sentence or two.',
      },
      {
        title: 'GENERATE AND PUBLISH',
        description: 'Get a fully built site in seconds. Customize anything, then go live.',
      },
    ],

    // Why Strikingly
    whyHeading: 'WHY STRIKINGLY',
    whyCards: [
      {
        title: 'LIVE IN SECONDS',
        description: 'Describe your site, we build it. No setup, no learning curve.',
      },
      {
        title: 'MOBILE BY DEFAULT',
        description: 'Every generator produces responsive sites that work on any device.',
      },
      {
        title: 'FREE TO START',
        description: 'Generate, customize, and publish without a credit card.',
      },
    ],

    // FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faqItems: [
      {
        question: 'What is an AI site generator?',
        answer: [
          'An AI site generator is a tool that uses artificial intelligence to create a complete website from a short description. You tell the AI what your business or project is about, and it generates a polished, ready-to-edit site in seconds.',
          'Instead of choosing from a gallery of static templates, the AI builds your site based on your specific input\u2014your industry, your goals, and your style preferences. The result is a custom-fit site that looks and feels like it was designed just for you.',
        ],
      },
      {
        question: 'How is a generator different from a template?',
        answer: [
          'A template is a pre-designed layout you fill in with your own content. You choose a look and then swap out placeholder text and images one piece at a time.',
          'A generator flips that process. You describe what you need, and the AI builds the content, layout, and structure for you. You still have full control to customize everything afterward, but the heavy lifting is already done.',
        ],
      },
      {
        question: 'Are these generators free to use?',
        answer: [
          'Yes. Every generator on this page lets you create and publish a site at no cost. You can generate a site, customize the design, and go live without entering a credit card.',
          'If you later want advanced features like a custom domain, extra pages, or premium integrations, paid plans are available. But getting started is completely free.',
        ],
      },
      {
        question: 'What kinds of sites can I build?',
        answer: [
          'You can build almost any kind of site: business websites, landing pages, online stores, portfolios, blogs, event pages, link-in-bio pages, and more. Each generator is tuned for a specific use case, so you get a site that matches your goals.',
          'Browse the categories above or use the search bar to find the right generator for your project. If nothing fits perfectly, the AI Website Generator is a great all-purpose starting point.',
        ],
      },
      {
        question: 'Can I customize what the generator produces?',
        answer: [
          'Absolutely. The AI gives you a fully built starting point, but every element is editable. You can change the text, swap images, adjust colors, rearrange sections, and add new pages\u2014all with a simple drag-and-drop editor.',
          'Think of the generator as a first draft written by an expert designer. You keep full ownership and control over every detail of your site.',
        ],
      },
      {
        question: 'Do generated sites work on mobile?',
        answer: [
          'Yes. Every site created with a Strikingly generator is fully responsive, meaning it automatically adapts to phones, tablets, and desktop screens. You do not need to build a separate mobile version.',
          'Mobile responsiveness is built into the AI from the start, so your site will look great on any device right out of the box.',
        ],
      },
    ],

    // Closing CTA
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',

    // Footer
    footerCopyright: (year) => `\u00A9 ${year} Strikingly, Inc. All rights reserved.`,
    footerColumns: [
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
          { label: 'Templates', href: '/templates' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Terms of Service', href: '/terms' },
          { label: 'Privacy Policy', href: '/privacy' },
        ],
      },
    ],

    // ARIA labels
    ariaSearch: 'Search generators',
    ariaBreadcrumb: 'Breadcrumb',
    ariaMainNav: 'Main',
  },
}
