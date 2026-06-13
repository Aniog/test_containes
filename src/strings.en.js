const strings = {
  // Top bar
  logo: 'strikingly AI',

  // Breadcrumb
  breadcrumbHome: 'Strikingly',
  breadcrumbCurrent: 'AI Generators',

  // Hero
  heroLine1: 'BUILD ANY KIND OF SITE',
  heroLine2: 'WITH AI, IN AN INSTANT',
  heroSub: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
  heroPrimaryCTA: "START BUILDING - IT'S FREE",
  heroSecondaryCTA: 'BROWSE GENERATORS',

  // Featured Generators
  featuredHeading: 'FEATURED GENERATORS',
  featuredSub: 'A few common starting points.',

  // Browse by Category
  browseHeading: 'BROWSE BY CATEGORY',

  // All Generators
  allHeading: 'ALL GENERATORS',
  allSub: 'Sixty-plus generators, organized by what you\'re building.',
  searchPlaceholder: 'Search generators...',
  searchLabel: 'Search generators',
  resultsCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
  noResults: 'No generators match your search.',
  clearSearch: 'Clear search',
  noResultsFallback: "Can't find it? Start with our AI builder.",
  showAll: (n, category) => `Show all ${n} ${category} generators`,
  showLess: 'Show fewer',

  // Categories
  catWebsites: 'Websites',
  catLandingPages: 'Landing Pages',
  catPortfolios: 'Portfolios',
  catBlogs: 'Blogs',
  catStores: 'Online Stores',
  catLinkInBio: 'Link-in-Bio',

  catDescWebsites: 'AI-built business and personal sites for any goal.',
  catDescLandingPages: 'Single-page sites built to convert visitors fast.',
  catDescPortfolios: 'Showcase your work with a clean, focused site.',
  catDescBlogs: 'Publish-ready blogs with built-in SEO basics.',
  catDescStores: 'Sell products online with payments built in.',
  catDescLinkInBio: 'One link, all your places. Made for creators.',

  // How It Works
  howHeading: 'HOW IT WORKS',
  howStep1Title: 'PICK A GENERATOR',
  howStep1Desc: 'Browse by category or search to find one that fits your goal.',
  howStep2Title: 'DESCRIBE YOUR SITE',
  howStep2Desc: 'Tell our AI builder about your business in a sentence or two.',
  howStep3Title: 'GENERATE AND PUBLISH',
  howStep3Desc: 'Get a fully built site in seconds. Customize anything, then go live.',

  // Why Strikingly
  whyHeading: 'WHY STRIKINGLY',
  why1Title: 'LIVE IN SECONDS',
  why1Desc: 'Describe your site, we build it. No setup, no learning curve.',
  why2Title: 'MOBILE BY DEFAULT',
  why2Desc: 'Every generator produces responsive sites that work on any device.',
  why3Title: 'FREE TO START',
  why3Desc: 'Generate, customize, and publish without a credit card.',

  // FAQ
  faqHeading: 'FREQUENTLY ASKED QUESTIONS',
  faq: [
    {
      q: 'What is an AI site generator?',
      a: 'An AI site generator is a tool that builds a complete website for you based on a short description of your business or project. Instead of picking a template and manually customizing every section, you tell the generator what kind of site you need — a portfolio, a store, a blog — and it creates a fully structured site with relevant content, images, and layout. Strikingly\'s generators are built on top of our AI site builder, which means every generated site is editable and ready to publish.',
    },
    {
      q: 'How is a generator different from a template?',
      a: 'A template is a static starting point — the same layout and placeholder content is given to every user, and you have to fill in the details yourself. A generator is dynamic: it uses AI to create a site tailored to your description. You get a unique result each time, with content and structure matched to your specific goal. Generators are faster than templates because the AI handles the heavy lifting of writing copy, picking sections, and laying out pages.',
    },
    {
      q: 'Are these generators free to use?',
      a: 'Yes, all Strikingly generators are free to use. You can generate a site, preview it, and customize it without entering a credit card. When you\'re ready to publish with a custom domain or remove Strikingly branding, you can choose from our affordable paid plans.',
    },
    {
      q: 'What kinds of sites can I build?',
      a: 'You can build a wide range of sites: business websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each generator is tuned for a specific use case — for example, a restaurant website generator will include menus, hours, and reservation sections, while a portfolio generator focuses on project galleries and about pages.',
    },
    {
      q: 'Can I customize what the generator produces?',
      a: 'Absolutely. Every site produced by a generator is fully customizable. You can change text, swap images, add or remove sections, pick new colors and fonts, and adjust layouts. The generator gives you a complete starting point, and from there you have full creative control.',
    },
    {
      q: 'Do generated sites work on mobile?',
      a: 'Yes. Every site created through Strikingly\'s generators is responsive by default. Your site will automatically look great on phones, tablets, and desktops. You can also preview and fine-tune the mobile appearance in our editor.',
    },
  ],

  // Closing CTA
  closingHeading: 'READY TO BUILD?',
  closingSub: 'Pick a generator above, or jump straight into our AI builder.',
  closingCTA: 'START WITH AI BUILDER',

  // Footer
  footerAbout: 'About',
  footerPricing: 'Pricing',
  footerTemplates: 'Templates',
  footerSupport: 'Support',
  footerBlog: 'Blog',
  footerTerms: 'Terms',
  footerPrivacy: 'Privacy',
  footerCopyright: '© 2026 Strikingly. All rights reserved.',
};

export default strings;
