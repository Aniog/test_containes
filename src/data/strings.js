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

    // Featured
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',

    // Browse by Category
    browseHeading: 'BROWSE BY CATEGORY',
    categories: {
      websites: {
        name: 'WEBSITES',
        description: 'AI-built business and personal sites for any goal.',
        slug: 'websites',
      },
      landingPages: {
        name: 'LANDING PAGES',
        description: 'Single-page sites built to convert visitors fast.',
        slug: 'landing-pages',
      },
      portfolios: {
        name: 'PORTFOLIOS',
        description: 'Showcase your work with a clean, focused site.',
        slug: 'portfolios',
      },
      blogs: {
        name: 'BLOGS',
        description: 'Publish-ready blogs with built-in SEO basics.',
        slug: 'blogs',
      },
      stores: {
        name: 'ONLINE STORES',
        description: 'Sell products online with payments built in.',
        slug: 'stores',
      },
      linkInBio: {
        name: 'LINK-IN-BIO',
        description: 'One link, all your places. Made for creators.',
        slug: 'link-in-bio',
      },
    },

    // All Generators
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    searchResults: (count) => `${count} generator${count !== 1 ? 's' : ''} match`,
    noResultsTitle: 'No generators found',
    noResultsText: 'Can\'t find it? Start with our AI builder.',
    noResultsCta: 'Start with AI Builder',
    clearSearch: 'Clear search',
    showAll: (count) => `Show all ${count} generators`,
    showLess: 'Show less',

    // How It Works
    howItWorksHeading: 'HOW IT WORKS',
    steps: [
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
    whyItems: [
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
        answer:
          'An AI site generator is a tool that uses artificial intelligence to create a complete website from a simple text description. Instead of choosing a template and manually filling in content, you describe your business, goal, or project in plain language, and the AI builds a fully structured site with pages, copy, images, and layout tailored to your needs.\n\nStrikingly\'s generators combine industry-specific knowledge with modern design patterns so you get a professional result without writing code or hiring a designer.',
      },
      {
        question: 'How is a generator different from a template?',
        answer:
          'A template is a pre-designed layout that you customize yourself. You pick one that looks close to what you want, then replace placeholder text and images with your own content. It\'s faster than building from scratch, but still requires significant manual work.\n\nA generator goes further: it creates a unique site based on your description. The AI chooses the layout, writes draft copy, selects relevant images, and structures the pages around your specific goal. You still get full control to edit everything afterward, but the starting point is already personalized.',
      },
      {
        question: 'Are these generators free to use?',
        answer:
          'Yes. You can generate, customize, and publish a site without entering a credit card. Strikingly\'s free plan includes hosting, a Strikingly subdomain, and access to all core features.\n\nIf you need a custom domain, e-commerce tools, or advanced analytics, paid plans are available. But you can build and launch a complete site on the free tier.',
      },
      {
        question: 'What kinds of sites can I build?',
        answer:
          'Strikingly\'s AI generators cover a wide range of site types: business websites, portfolios, landing pages, blogs, online stores, wedding sites, restaurant sites, link-in-bio pages, and many more.\n\nEach generator is tuned for a specific use case, so the output includes the right pages, sections, and calls to action for that type of site. If you don\'t see a generator for your exact need, the general AI Website Builder can handle almost any scenario.',
      },
      {
        question: 'Can I customize what the generator produces?',
        answer:
          'Absolutely. Every generated site is fully editable. You can change text, swap images, rearrange sections, add or remove pages, adjust colors and fonts, and integrate third-party tools.\n\nThe generator gives you a strong starting point, but you have complete creative control from that point forward. Think of it as a first draft that you can refine into exactly what you want.',
      },
      {
        question: 'Do generated sites work on mobile?',
        answer:
          'Yes. Every site produced by Strikingly\'s generators is responsive by default. The AI builds layouts that adapt to phones, tablets, and desktops automatically.\n\nYou can also fine-tune the mobile view in the editor if you want to adjust how specific elements appear on smaller screens.',
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
    footerResources: 'Resources',
    footerBlog: 'Blog',
    footerSupport: 'Support',
    footerAbout: 'About',
    footerLegal: 'Legal',
    footerTerms: 'Terms',
    footerPrivacy: 'Privacy',
    footerCopyright: (year) => `© ${year} Strikingly. All rights reserved.`,
  },
};
