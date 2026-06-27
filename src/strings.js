// i18n strings - single source of truth for all user-visible text
export const strings = {
  // Section 0: Top bar
  topBar: {
    logo: 'strikingly AI',
  },

  // Section 1: Breadcrumb
  breadcrumb: {
    home: 'Strikingly',
    current: 'AI Generators',
  },

  // Section 2: Hero
  hero: {
    h1Line1: 'BUILD ANY KIND OF SITE',
    h1Line2: 'WITH AI, IN AN INSTANT',
    subheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    primaryCta: "START BUILDING - IT'S FREE",
    secondaryCta: 'BROWSE GENERATORS',
  },

  // Section 3: Featured Generators
  featured: {
    heading: 'FEATURED GENERATORS',
    subheading: 'A few common starting points.',
  },

  // Section 4: Browse by Category
  categories: {
    heading: 'BROWSE BY CATEGORY',
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

  // Section 5: All Generators
  allGenerators: {
    heading: 'ALL GENERATORS',
    subheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    resultCount: '{count} generators match',
    noResults: 'No generators found',
    clearSearch: 'Clear search',
    cantFind: "Can't find it?",
    startWithAi: 'Start with our AI builder.',
    showAll: 'Show all {count} generators',
    showLess: 'Show less',
  },

  // Section 6: How It Works
  howItWorks: {
    heading: 'HOW IT WORKS',
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
  },

  // Section 7: Why Strikingly
  whyStrikingly: {
    heading: 'WHY STRIKINGLY',
    reasons: [
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
  },

  // Section 8: FAQ
  faq: {
    heading: 'FREQUENTLY ASKED QUESTIONS',
    questions: [
      {
        question: 'What is an AI site generator?',
        answer: 'An AI site generator is a tool that uses artificial intelligence to automatically create a website based on your input. Instead of building from scratch or choosing from static templates, you describe what you need—like "a portfolio for my photography business"—and our AI builds a complete, customized site in seconds.',
      },
      {
        question: 'How is a generator different from a template?',
        answer: 'Templates are pre-designed layouts that you customize manually, choosing colors, fonts, and arranging content yourself. Generators go further: they create unique, tailored sites based on your specific goals and content. The AI adapts the design, structure, and copy to match what you\'re building.',
      },
      {
        question: 'Are these generators free to use?',
        answer: 'Yes! You can generate, customize, and publish your site without entering any payment information. Our free tier lets you create and host a personal site at no cost. Premium features and custom domains are available when you\'re ready to upgrade.',
      },
      {
        question: 'What kinds of sites can I build?',
        answer: 'Almost anything. Our generators cover business websites, portfolios, blogs, online stores, landing pages, wedding sites, restaurant menus, and link-in-bio pages for social media. Each generator is optimized for its specific use case.',
      },
      {
        question: 'Can I customize what the generator produces?',
        answer: 'Absolutely. The AI provides a starting point, but everything is fully editable. Change text, images, colors, layouts, and add new sections. Our editor is intuitive and requires no coding knowledge—you have complete control over your final site.',
      },
      {
        question: 'Do generated sites work on mobile?',
        answer: 'Every site generated through Strikingly is fully responsive by default. They look and work beautifully on phones, tablets, and desktops. Mobile optimization is built into the generator, not added as an afterthought.',
      },
    ],
  },

  // Section 9: Closing CTA
  closingCta: {
    headline: 'READY TO BUILD?',
    sub: 'Pick a generator above, or jump straight into our AI builder.',
    button: 'START WITH AI BUILDER',
  },

  // Section 10: Footer
  footer: {
    columns: [
      {
        title: 'Product',
        links: [
          { text: 'Templates', href: '/templates' },
          { text: 'Pricing', href: '/pricing' },
          { text: 'Features', href: '/features' },
          { text: 'Support', href: '/support' },
        ],
      },
      {
        title: 'Company',
        links: [
          { text: 'About', href: '/about' },
          { text: 'Blog', href: '/blog' },
          { text: 'Careers', href: '/careers' },
          { text: 'Press', href: '/press' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { text: 'Help Center', href: '/support' },
          { text: 'Community', href: '/community' },
          { text: 'Webinars', href: '/webinars' },
          { text: 'API', href: '/api' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { text: 'Terms', href: '/terms' },
          { text: 'Privacy', href: '/privacy' },
          { text: 'Cookies', href: '/cookies' },
        ],
      },
    ],
    copyright: '© 2026 Strikingly. All rights reserved.',
  },
};

// Generator data for the directory
export const generators = {
  websites: [
    { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website' },
    { name: 'Free Website Builder for Photographers', description: 'Beautiful photo galleries, built for pros', category: 'Website' },
    { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website' },
    { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website' },
    { name: 'Yoga Instructor Website Builder', description: 'Class schedules, booking, and bio', category: 'Website' },
    { name: 'Real Estate Agent Website', description: 'Property listings and contact forms', category: 'Website' },
    { name: 'Freelancer Portfolio Website', description: 'Showcase services and client work', category: 'Website' },
    { name: 'Nonprofit Website Builder', description: 'Donations, events, and mission', category: 'Website' },
    { name: 'Medical Practice Website', description: 'Appointments and patient info', category: 'Website' },
  ],
  landingPages: [
    { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page' },
    { name: 'Product Launch Landing Page', description: 'Announce and sell your new product', category: 'Landing Page' },
    { name: 'Webinar Registration Page', description: 'Sign-ups for online events', category: 'Landing Page' },
    { name: 'Lead Capture Page', description: 'Grow your email list fast', category: 'Landing Page' },
    { name: 'Coming Soon Page', description: 'Build hype before you launch', category: 'Landing Page' },
    { name: 'Thank You Page', description: 'Confirmations that convert', category: 'Landing Page' },
    { name: 'App Download Landing Page', description: 'Mobile app promotion', category: 'Landing Page' },
    { name: 'Course Sales Page', description: 'Sell your online class', category: 'Landing Page' },
    { name: 'Ebook Download Page', description: 'Lead magnet made easy', category: 'Landing Page' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio' },
    { name: 'Portfolio Generator for Designers', description: 'Showcase visual work beautifully', category: 'Portfolio' },
    { name: 'Artist Portfolio Builder', description: 'Paintings, sculptures, and more', category: 'Portfolio' },
    { name: 'Writer Portfolio Generator', description: 'Articles, books, and samples', category: 'Portfolio' },
    { name: 'Musician Portfolio Website', description: 'Music, videos, and tour dates', category: 'Portfolio' },
    { name: 'Architect Portfolio Builder', description: 'Projects and blueprints', category: 'Portfolio' },
    { name: 'Video Producer Portfolio', description: 'Reels, commercials, and films', category: 'Portfolio' },
    { name: 'Fashion Designer Portfolio', description: 'Collections and lookbooks', category: 'Portfolio' },
    { name: 'Interior Designer Portfolio', description: 'Spaces and transformations', category: 'Portfolio' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog' },
    { name: 'Personal Blog Builder', description: 'Share your thoughts with the world', category: 'Blog' },
    { name: 'Business Blog Generator', description: 'Content marketing made easy', category: 'Blog' },
    { name: 'Travel Blog Builder', description: 'Stories and photos from the road', category: 'Blog' },
    { name: 'Food Blog Generator', description: 'Recipes and restaurant reviews', category: 'Blog' },
    { name: 'Tech Blog Builder', description: 'News, reviews, and tutorials', category: 'Blog' },
    { name: 'Fashion Blog Generator', description: 'Trends and style guides', category: 'Blog' },
    { name: 'Fitness Blog Builder', description: 'Workouts and health tips', category: 'Blog' },
    { name: 'Parenting Blog Generator', description: 'Family stories and advice', category: 'Blog' },
  ],
  stores: [
    { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store' },
    { name: 'Online Store Builder for Restaurants', description: 'Menu and takeout ordering', category: 'Store' },
    { name: 'E-commerce Site for Artists', description: 'Sell prints and originals', category: 'Store' },
    { name: 'Clothing Store Builder', description: 'Fashion retail made simple', category: 'Store' },
    { name: 'Digital Products Store', description: 'Ebooks, courses, and downloads', category: 'Store' },
    { name: 'Handmade Goods Marketplace', description: 'Crafts and artisan items', category: 'Store' },
    { name: 'Subscription Box Builder', description: 'Recurring deliveries made easy', category: 'Store' },
    { name: 'Service Booking Store', description: 'Appointments and payments', category: 'Store' },
    { name: 'Print-on-Demand Store', description: 'Custom products, no inventory', category: 'Store' },
  ],
  linkInBio: [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio' },
    { name: 'Influencer Link Page', description: 'All your links in one place', category: 'Link-in-Bio' },
    { name: 'Creator Link in Bio', description: 'Monetize your following', category: 'Link-in-Bio' },
    { name: 'Musician Link Tree', description: 'Music, tour dates, merch', category: 'Link-in-Bio' },
    { name: 'Podcast Link Page', description: 'Episodes and show notes', category: 'Link-in-Bio' },
    { name: 'Business Link in Bio', description: 'Connect with customers', category: 'Link-in-Bio' },
    { name: 'Artist Link Page', description: 'Commissions and portfolio', category: 'Link-in-Bio' },
    { name: 'Nonprofit Link Page', description: 'Donations and events', category: 'Link-in-Bio' },
  ],
};

// Featured generators (9 items)
export const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog' },
];

// Helper to generate slug from name
export const generateSlug = (name) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};