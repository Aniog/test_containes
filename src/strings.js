export const strings = {
  en: {
    // Top bar
    logo: 'strikingly AI',

    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',

    // Hero
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSubheadline:
      'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    heroCtaPrimary: 'START BUILDING - IT\'S FREE',
    heroCtaSecondary: 'BROWSE GENERATORS',

    // Featured Generators
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',

    // Browse by Category
    browseHeading: 'BROWSE BY CATEGORY',
    categories: [
      {
        id: 'websites',
        name: 'WEBSITES',
        description: 'AI-built business and personal sites for any goal.',
      },
      {
        id: 'landing-pages',
        name: 'LANDING PAGES',
        description: 'Single-page sites built to convert visitors fast.',
      },
      {
        id: 'portfolios',
        name: 'PORTFOLIOS',
        description: 'Showcase your work with a clean, focused site.',
      },
      {
        id: 'blogs',
        name: 'BLOGS',
        description: 'Publish-ready blogs with built-in SEO basics.',
      },
      {
        id: 'stores',
        name: 'ONLINE STORES',
        description: 'Sell products online with payments built in.',
      },
      {
        id: 'link-in-bio',
        name: 'LINK-IN-BIO',
        description: 'One link, all your places. Made for creators.',
      },
    ],

    // All Generators
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading:
      'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    resultsCount: (count) => `${count} generator${count === 1 ? '' : 's'} match`,
    noResultsTitle: 'No generators found',
    noResultsDescription: 'Can\'t find it? Start with our AI builder.',
    noResultsCta: 'Start with AI builder',
    clearSearch: 'Clear search',
    showAll: (count) => `Show all ${count} generators`,
    showLess: 'Show less',

    // How It Works
    howItWorksHeading: 'HOW IT WORKS',
    steps: [
      {
        title: 'PICK A GENERATOR',
        description:
          'Browse by category or search to find one that fits your goal.',
      },
      {
        title: 'DESCRIBE YOUR SITE',
        description:
          'Tell our AI builder about your business in a sentence or two.',
      },
      {
        title: 'GENERATE AND PUBLISH',
        description:
          'Get a fully built site in seconds. Customize anything, then go live.',
      },
    ],

    // Why Strikingly
    whyStrikinglyHeading: 'WHY STRIKINGLY',
    benefits: [
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

    // FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faqs: [
      {
        question: 'What is an AI site generator?',
        answer:
          'An AI site generator is a tool that uses artificial intelligence to create a complete website from a simple description. Instead of choosing a template and manually filling in content, you tell the AI what kind of site you need, and it generates the layout, copy, images, and structure automatically. Strikingly\'s AI generators are designed to get you from idea to live site in minutes, not days.',
      },
      {
        question: 'How is a generator different from a template?',
        answer:
          'A template gives you a pre-designed layout that you fill in yourself. A generator creates a custom layout and content tailored to your specific goal, industry, or audience. With a template, you start with a blank canvas and a structure. With a generator, you start with a nearly finished site that you can then refine. Generators save time by doing the heavy lifting of structure and content creation for you.',
      },
      {
        question: 'Are these generators free to use?',
        answer:
          'Yes. You can generate, customize, and publish a site without entering a credit card. Strikingly offers a free tier that includes access to all AI generators. If you need advanced features like a custom domain, e-commerce tools, or higher bandwidth, you can upgrade to a paid plan at any time. But the core experience, generating and publishing a site, is free from day one.',
      },
      {
        question: 'What kinds of sites can I build?',
        answer:
          'Strikingly\'s AI generators cover a wide range of site types: business websites, personal portfolios, landing pages, blogs, online stores, wedding sites, restaurant sites, link-in-bio pages, and many more. Each generator is tuned to the conventions and best practices of its category, so a portfolio site looks and behaves differently from a store site. If you don\'t see a specific generator for your niche, the general AI Website Generator can handle almost any use case.',
      },
      {
        question: 'Can I customize what the generator produces?',
        answer:
          'Absolutely. The generator gives you a strong starting point, but everything is editable. You can change text, swap images, adjust colors, rearrange sections, add new pages, and modify the layout. Strikingly\'s visual editor makes it easy to tweak any part of your site without writing code. Think of the generator as a first draft that you refine until it\'s exactly what you want.',
      },
      {
        question: 'Do generated sites work on mobile?',
        answer:
          'Yes. Every site produced by a Strikingly AI generator is fully responsive by default. The layout, images, and navigation automatically adapt to phones, tablets, and desktops. You don\'t need to do anything special to make your site mobile-friendly, and you can preview how it looks on different screen sizes at any time in the editor.',
      },
    ],

    // Closing CTA
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',

    // Footer
    footerProduct: 'Product',
    footerFeatures: 'Features',
    footerPricing: 'Pricing',
    footerTemplates: 'Templates',
    footerCompany: 'Company',
    footerAbout: 'About',
    footerBlog: 'Blog',
    footerCareers: 'Careers',
    footerSupport: 'Support',
    footerHelpCenter: 'Help Center',
    footerContact: 'Contact',
    footerStatus: 'Status',
    footerLegal: 'Legal',
    footerTerms: 'Terms',
    footerPrivacy: 'Privacy',
    footerCookies: 'Cookies',
    footerCopyright: (year) => `© ${year} Strikingly. All rights reserved.`,
  },
}
