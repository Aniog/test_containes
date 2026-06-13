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
    heroSubheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    heroCtaPrimary: 'START BUILDING - IT\'S FREE',
    heroCtaSecondary: 'BROWSE GENERATORS',

    // Featured
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',

    // Browse by category
    browseHeading: 'BROWSE BY CATEGORY',
    categories: {
      websites: {
        name: 'WEBSITES',
        slug: 'websites',
        description: 'AI-built business and personal sites for any goal.',
      },
      landingPages: {
        name: 'LANDING PAGES',
        slug: 'landing-pages',
        description: 'Single-page sites built to convert visitors fast.',
      },
      portfolios: {
        name: 'PORTFOLIOS',
        slug: 'portfolios',
        description: 'Showcase your work with a clean, focused site.',
      },
      blogs: {
        name: 'BLOGS',
        slug: 'blogs',
        description: 'Publish-ready blogs with built-in SEO basics.',
      },
      stores: {
        name: 'ONLINE STORES',
        slug: 'stores',
        description: 'Sell products online with payments built in.',
      },
      linkInBio: {
        name: 'LINK-IN-BIO',
        slug: 'link-in-bio',
        description: 'One link, all your places. Made for creators.',
      },
    },

    // All generators
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    matchCount: (count) => `${count} generator${count !== 1 ? 's' : ''} match`,
    noResultsTitle: 'No generators found',
    noResultsDescription: 'Can\'t find it? Start with our AI builder.',
    noResultsCta: 'Clear search',
    noResultsLink: 'Start with AI builder',
    showAll: (count) => `Show all ${count} generators`,
    showLess: 'Show less',

    // How it works
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
    whyStrikinglyHeading: 'WHY STRIKINGLY',
    benefits: [
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
    faqs: [
      {
        question: 'What is an AI site generator?',
        answer: 'An AI site generator is a tool that uses artificial intelligence to create a complete website from a simple description. Instead of choosing a template and manually filling in content, you tell the AI what kind of site you need, and it generates the layout, copy, images, and structure automatically.\n\nStrikingly\'s AI generators are designed for people who want a professional site without learning to code or spending hours on design. Each generator is tuned for a specific type of website, so the output is relevant to your industry and goal from the start.',
      },
      {
        question: 'How is a generator different from a template?',
        answer: 'A template gives you a pre-designed layout that you fill in yourself. A generator goes further: it creates the layout and fills it with content tailored to your description. You still get full control to customize everything afterward, but the starting point is a complete, content-rich site instead of a blank framework.\n\nThink of a template as a form to fill out, and a generator as a first draft written for you.',
      },
      {
        question: 'Are these generators free to use?',
        answer: 'Yes. You can generate, customize, and publish a site without entering a credit card. Strikingly\'s free plan lets you build and host a site with a Strikingly subdomain. If you want a custom domain, e-commerce features, or advanced tools, paid plans are available.',
      },
      {
        question: 'What kinds of sites can I build?',
        answer: 'Strikingly offers generators for dozens of site types, including business websites, landing pages, portfolios, blogs, online stores, wedding sites, restaurant sites, and link-in-bio pages. Each generator is optimized for its specific use case, so you get relevant sections, layouts, and content suggestions right away.',
      },
      {
        question: 'Can I customize what the generator produces?',
        answer: 'Absolutely. The generator gives you a complete starting point, but every element is editable. You can change text, swap images, rearrange sections, adjust colors and fonts, and add or remove pages. The AI gets you to 80 percent in seconds; the remaining 20 percent is yours to perfect.',
      },
      {
        question: 'Do generated sites work on mobile?',
        answer: 'Yes. Every site produced by a Strikingly generator is fully responsive by default. The layout adapts to phones, tablets, and desktops automatically. You can preview and fine-tune the mobile view in the editor, but the baseline experience is mobile-ready from the moment the site is generated.',
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
