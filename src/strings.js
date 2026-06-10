// i18n strings - English
// Add strings.es, strings.ja etc. for other languages

export const strings = {
  en: {
    // Top bar
    logo: 'Strikingly AI',
    logoAlt: 'Strikingly',

    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',

    // Hero
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSubheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    heroPrimaryCTA: "START BUILDING - IT'S FREE",
    heroSecondaryCTA: 'BROWSE GENERATORS',

    // Featured Generators
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',

    // Browse by Category
    browseHeading: 'BROWSE BY CATEGORY',
    categories: {
      websites: {
        name: 'WEBSITES',
        description: 'AI-built business and personal sites for any goal.',
        anchor: '#websites'
      },
      landingPages: {
        name: 'LANDING PAGES',
        description: 'Single-page sites built to convert visitors fast.',
        anchor: '#landing-pages'
      },
      portfolios: {
        name: 'PORTFOLIOS',
        description: 'Showcase your work with a clean, focused site.',
        anchor: '#portfolios'
      },
      blogs: {
        name: 'BLOGS',
        description: 'Publish-ready blogs with built-in SEO basics.',
        anchor: '#blogs'
      },
      stores: {
        name: 'ONLINE STORES',
        description: 'Sell products online with payments built in.',
        anchor: '#stores'
      },
      linkInBio: {
        name: 'LINK-IN-BIO',
        description: 'One link, all your places. Made for creators.',
        anchor: '#link-in-bio'
      }
    },

    // All Generators
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    resultCount: (count) => `${count} generator${count !== 1 ? 's' : ''} match`,
    noResults: 'No generators found',
    clearSearch: 'Clear search',
    cantFind: "Can't find it?",
    startWithAI: 'Start with our AI builder.',
    showAll: 'Show all',
    showLess: 'Show less',
    generators: {
      websites: {
        heading: 'Websites',
        description: 'Full websites for business, personal, and event needs.',
        items: [
          { name: 'AI Website Generator', description: 'Describe your business, get a full site' },
          { name: 'Free Website Builder for Photographers', description: 'Beautiful sites for photo professionals' },
          { name: 'One-Page Wedding Website Builder', description: 'Share your day with guests' },
          { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done' },
          { name: 'Yoga Instructor Website Generator', description: 'Class schedules and booking' },
          { name: 'Real Estate Agent Website Builder', description: 'Property listings and contact forms' },
          { name: 'Medical Practice Website Generator', description: 'Professional healthcare sites' },
          { name: 'Freelancer Portfolio Website', description: 'Showcase your services' },
          { name: 'Nonprofit Organization Website', description: 'Donations and event management' },
          { name: 'Event Planner Portfolio Site', description: 'Showcase past events' }
        ]
      },
      landingPages: {
        heading: 'Landing Pages',
        description: 'Single-page sites built to convert visitors fast.',
        items: [
          { name: 'AI Landing Page Maker', description: 'One-page sites built to convert' },
          { name: 'SaaS Landing Page Generator', description: 'Product demos and sign-ups' },
          { name: 'Lead Capture Landing Page', description: 'Grow your email list' },
          { name: 'Webinar Landing Page Builder', description: 'Event registration pages' },
          { name: 'E-book Download Landing Page', description: 'Content marketing pages' },
          { name: 'App Download Landing Page', description: 'Mobile app promotion' },
          { name: 'Course Landing Page Generator', description: 'Online course sign-ups' },
          { name: 'Consulting Landing Page Builder', description: 'Book consultations' }
        ]
      },
      portfolios: {
        heading: 'Portfolios',
        description: 'Showcase your work with a clean, focused site.',
        items: [
          { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee' },
          { name: 'Portfolio Generator for Designers', description: 'Visual-heavy showcases' },
          { name: 'Artist Portfolio Builder', description: 'Gallery and exhibition pages' },
          { name: 'Writer Portfolio Generator', description: 'Published work samples' },
          { name: 'Photographer Portfolio Site', description: 'Photo galleries and packages' },
          { name: 'Architect Portfolio Builder', description: 'Project showcases' },
          { name: 'Music Producer Portfolio', description: 'Demos and bookings' },
          { name: 'Fashion Designer Portfolio', description: 'Lookbook and collections' },
          { name: 'Video Producer Portfolio', description: 'Reels and client work' }
        ]
      },
      blogs: {
        heading: 'Blogs',
        description: 'Publish-ready blogs with built-in SEO basics.',
        items: [
          { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes' },
          { name: 'Food Blog Generator', description: 'Recipes and food photography' },
          { name: 'Travel Blog Builder', description: 'Adventure stories and guides' },
          { name: 'Personal Finance Blog', description: 'Money tips and advice' },
          { name: 'Tech Blog Generator', description: 'Product reviews and news' },
          { name: 'Lifestyle Blog Builder', description: 'Daily inspiration' },
          { name: 'Parenting Blog Generator', description: 'Family and kids content' },
          { name: 'Fitness Blog Builder', description: 'Workouts and wellness' }
        ]
      },
      stores: {
        heading: 'Online Stores',
        description: 'Sell products online with payments built in.',
        items: [
          { name: 'Online Store Builder', description: 'Start selling without writing code' },
          { name: 'E-commerce Website for Clothing', description: 'Fashion retail solution' },
          { name: 'Handmade Goods Store', description: 'Crafts and artisan products' },
          { name: 'Digital Products Store', description: 'E-books, courses, downloads' },
          { name: 'Food Delivery Website', description: 'Restaurant takeout orders' },
          { name: 'Subscription Box Builder', description: 'Recurring delivery sites' },
          { name: 'Artisan Jewelry Store', description: 'Custom jewelry e-commerce' },
          { name: 'Pet Supplies Store', description: 'Pet product retail' }
        ]
      },
      linkInBio: {
        heading: 'Link-in-Bio',
        description: 'One link, all your places. Made for creators.',
        items: [
          { name: 'Link-in-Bio Generator', description: 'One link for all your channels' },
          { name: 'Influencer Link Page', description: 'Brand collaboration hub' },
          { name: 'Creator Bio Link Builder', description: 'Monetize your audience' },
          { name: 'Musician Link Page', description: 'Music and tour links' },
          { name: 'Podcast Link in Bio', description: 'Episode and subscribe links' },
          { name: 'Artist Link Page', description: 'Commission and gallery links' },
          { name: 'Business Link Card', description: 'Contact and service links' },
          { name: 'Traveler Link Page', description: 'Blog and social links' }
        ]
      }
    },

    // How It Works
    howItWorksHeading: 'HOW IT WORKS',
    steps: [
      { title: 'PICK A GENERATOR', description: 'Browse by category or search to find one that fits your goal.' },
      { title: 'DESCRIBE YOUR SITE', description: 'Tell our AI builder about your business in a sentence or two.' },
      { title: 'GENERATE AND PUBLISH', description: 'Get a fully built site in seconds. Customize anything, then go live.' }
    ],

    // Why Strikingly
    whyStrikinglyHeading: 'WHY STRIKINGLY',
    benefits: [
      { title: 'LIVE IN SECONDS', description: 'Describe your site, we build it. No setup, no learning curve.' },
      { title: 'MOBILE BY DEFAULT', description: 'Every generator produces responsive sites that work on any device.' },
      { title: 'FREE TO START', description: 'Generate, customize, and publish without a credit card.' }
    ],

    // FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faqs: [
      {
        question: 'What is an AI site generator?',
        answer: 'An AI site generator is a tool that uses artificial intelligence to automatically create a website based on your description. Instead of starting from a blank page or choosing from hundreds of templates, you simply tell the AI what kind of site you need—like "a photography portfolio" or "a restaurant with menu"—and it builds a complete, professional-looking website in seconds.'
      },
      {
        question: 'How is a generator different from a template?',
        answer: 'A template is a pre-designed layout that you customize with your own content. A generator uses AI to create a custom site tailored to your specific needs. With a generator, you describe your business or goal, and the AI builds a unique site with appropriate sections, colors, and content structure—much faster than starting from a template.'
      },
      {
        question: 'Are these generators free to use?',
        answer: 'Yes! You can generate, customize, and publish your site without a credit card. Strikingly offers a free plan that lets you build and host your site at no cost. Premium features and custom domains are available for paid plans.'
      },
      {
        question: 'What kinds of sites can I build?',
        answer: 'You can build almost any type of website: business sites, portfolios, blogs, online stores, landing pages, wedding websites, restaurant sites, and more. Our generators are tailored to specific use cases—like "portfolio for photographers" or "restaurant with menu and reservations"—so you get a site that fits your exact needs.'
      },
      {
        question: 'Can I customize what the generator produces?',
        answer: 'Absolutely. The AI generates a solid starting point, but you have full control to customize everything: colors, fonts, images, text, sections, and layout. Think of it as having a professional designer create your first draft, which you then fine-tune to perfection.'
      },
      {
        question: 'Do generated sites work on mobile?',
        answer: 'Every site generated by Strikingly is fully responsive and looks great on any device—phones, tablets, and desktops. Mobile responsiveness is built into all our generators by default, so you don\'t need to worry about separate mobile versions.'
      }
    ],

    // Closing CTA
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCTA: 'START WITH AI BUILDER',

    // Footer
    footer: {
      product: 'Product',
      company: 'Company',
      resources: 'Resources',
      legal: 'Legal',
      links: {
        product: ['Templates', 'Pricing', 'Features', 'Blog'],
        company: ['About', 'Careers', 'Press', 'Contact'],
        resources: ['Help Center', 'Community', 'API Docs', 'Integrations'],
        legal: ['Terms', 'Privacy', 'Cookies']
      },
      copyright: '© 2026 Strikingly. All rights reserved.'
    }
  }
};