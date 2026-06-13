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
    
    // Browse by Category
    browseHeading: 'BROWSE BY CATEGORY',
    categories: [
      { name: 'WEBSITES', slug: 'websites', description: 'AI-built business and personal sites for any goal.' },
      { name: 'LANDING PAGES', slug: 'landing-pages', description: 'Single-page sites built to convert visitors fast.' },
      { name: 'PORTFOLIOS', slug: 'portfolios', description: 'Showcase your work with a clean, focused site.' },
      { name: 'BLOGS', slug: 'blogs', description: 'Publish-ready blogs with built-in SEO basics.' },
      { name: 'ONLINE STORES', slug: 'stores', description: 'Sell products online with payments built in.' },
      { name: 'LINK-IN-BIO', slug: 'link-in-bio', description: 'One link, all your places. Made for creators.' },
    ],
    
    // All Generators
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    resultsCount: (count) => `${count} generator${count !== 1 ? 's' : ''} match`,
    noResultsTitle: 'No generators found',
    noResultsText: 'Can\'t find it? Start with our AI builder.',
    noResultsCta: 'Start with AI Builder',
    clearSearch: 'Clear search',
    showAll: (count) => `Show all ${count} generators`,
    showLess: 'Show less',
    
    // How It Works
    howItWorksHeading: 'HOW IT WORKS',
    steps: [
      { number: 1, title: 'PICK A GENERATOR', description: 'Browse by category or search to find one that fits your goal.' },
      { number: 2, title: 'DESCRIBE YOUR SITE', description: 'Tell our AI builder about your business in a sentence or two.' },
      { number: 3, title: 'GENERATE AND PUBLISH', description: 'Get a fully built site in seconds. Customize anything, then go live.' },
    ],
    
    // Why Strikingly
    whyHeading: 'WHY STRIKINGLY',
    whyItems: [
      { title: 'LIVE IN SECONDS', description: 'Describe your site, we build it. No setup, no learning curve.' },
      { title: 'MOBILE BY DEFAULT', description: 'Every generator produces responsive sites that work on any device.' },
      { title: 'FREE TO START', description: 'Generate, customize, and publish without a credit card.' },
    ],
    
    // FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faqItems: [
      {
        question: 'What is an AI site generator?',
        answer: 'An AI site generator is a tool that uses artificial intelligence to create a complete website from a simple description. Instead of choosing templates and manually arranging elements, you tell the AI what kind of site you want, and it builds the structure, writes the copy, selects images, and applies a design that fits your industry and goals.\n\nStrikingly\'s AI generators go a step further by offering specialized starting points for different site types, so you get a head start tailored to your specific needs.',
      },
      {
        question: 'How is a generator different from a template?',
        answer: 'A template gives you a pre-designed layout that you fill in yourself. A generator creates a unique site based on your description, including custom copy, relevant images, and a structure that matches your business or project.\n\nThink of a template as a coloring book page, and a generator as an artist who paints something original just for you. You still get full control to customize everything after generation.',
      },
      {
        question: 'Are these generators free to use?',
        answer: 'Yes. You can generate, customize, and publish a site without entering a credit card. Strikingly\'s free plan includes everything you need to get started.\n\nIf you need advanced features like a custom domain, e-commerce tools, or removing the Strikingly branding, paid plans are available. But the core AI generation and site building experience is free.',
      },
      {
        question: 'What kinds of sites can I build?',
        answer: 'You can build almost any type of website. Our generators cover business sites, portfolios, landing pages, blogs, online stores, link-in-bio pages, wedding sites, restaurant sites, and many more.\n\nIf you don\'t see a specific generator for your niche, the general AI Website Generator can handle any industry or goal you describe.',
      },
      {
        question: 'Can I customize what the generator produces?',
        answer: 'Absolutely. The generator gives you a complete starting point, but every element is editable. You can change text, swap images, adjust colors, rearrange sections, add new pages, and modify any part of the design.\n\nThe AI gets you 80% of the way there in seconds. The remaining 20% is yours to perfect.',
      },
      {
        question: 'Do generated sites work on mobile?',
        answer: 'Yes. Every site produced by our generators is fully responsive by default. It will look great on phones, tablets, laptops, and desktops without any extra work on your part.\n\nYou can also fine-tune the mobile view if you want to adjust how specific elements appear on smaller screens.',
      },
    ],
    
    // Closing CTA
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    
    // Footer
    footerProduct: 'Product',
    footerCompany: 'Company',
    footerResources: 'Resources',
    footerLegal: 'Legal',
  },
};
