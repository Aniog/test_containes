

// i18n-ready strings for the Generators Hub page.
// Add strings.es, strings.ja, etc. as sibling files for future locales.
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
  featuredTitle: 'FEATURED GENERATORS',
  featuredSub: 'A few common starting points.',

  // Browse by Category
  browseTitle: 'BROWSE BY CATEGORY',

  // All Generators
  allTitle: 'ALL GENERATORS',
  allSub: 'Sixty-plus generators, organized by what you\'re building.',
  searchPlaceholder: 'Search generators...',
  searchLabel: 'Search generators',
  showAll: 'Show all',
  showLess: 'Show less',
  noResults: 'No generators match your search.',
  clearSearch: 'Clear search',
  noResultsHint: "Can't find it? Start with our AI builder.",

  // How It Works
  howTitle: 'HOW IT WORKS',
  howSteps: [
    { title: 'PICK A GENERATOR', desc: 'Browse by category or search to find one that fits your goal.' },
    { title: 'DESCRIBE YOUR SITE', desc: 'Tell our AI builder about your business in a sentence or two.' },
    { title: 'GENERATE AND PUBLISH', desc: 'Get a fully built site in seconds. Customize anything, then go live.' },
  ],

  // Why Strikingly
  whyTitle: 'WHY STRIKINGLY',
  whyItems: [
    { title: 'LIVE IN SECONDS', desc: 'Describe your site, we build it. No setup, no learning curve.' },
    { title: 'MOBILE BY DEFAULT', desc: 'Every generator produces responsive sites that work on any device.' },
    { title: 'FREE TO START', desc: 'Generate, customize, and publish without a credit card.' },
  ],

  // FAQ
  faqTitle: 'FREQUENTLY ASKED QUESTIONS',
  faqs: [
    {
      q: 'What is an AI site generator?',
      a: 'An AI site generator is a tool that builds a complete, ready-to-publish website from a simple description of your business or project. Instead of dragging elements around a blank canvas, you just tell the generator what kind of site you need and the AI handles the layout, copy, images, and structure. Strikingly\'s generator goes further by producing mobile-optimized, SEO-friendly pages that you can customize afterward.',
    },
    {
      q: 'How is a generator different from a template?',
      a: 'A template gives you a fixed layout that you fill in yourself. A generator creates the layout, copy, and structure tailored to your specific goal. With a template you start with an empty shell; with a generator the AI writes your headlines, picks your sections, and assembles a complete site. You can still customize everything afterward, but your starting point is far closer to done.',
    },
    {
      q: 'Are these generators free to use?',
      a: 'Yes, all Strikingly generators are free to start. You can generate a site, preview it, customize it, and publish it to a strikingly.com subdomain without entering any payment information. Premium features like custom domains, advanced analytics, and e-commerce checkout are available on paid plans, but the core generator experience is free.',
    },
    {
      q: 'What kinds of sites can I build?',
      a: 'You can build almost any kind of site: business websites, landing pages, portfolios, blogs, online stores, link-in-bio pages, wedding sites, restaurant sites, event pages, and more. If you have a specific goal in mind, there is likely a generator tailored to it. And if you cannot find the right one, the general AI Site Builder can handle any description you give it.',
    },
    {
      q: 'Can I customize what the generator produces?',
      a: 'Absolutely. After the generator creates your site, you can edit every part of it: change the text, swap images, adjust colors and fonts, add or remove sections, and connect your own domain. The generator gives you a complete starting point, and our editor lets you refine it until it matches your exact vision.',
    },
    {
      q: 'Do generated sites work on mobile?',
      a: 'Yes. Every site produced by a Strikingly generator is responsive and mobile-optimized by default. The layouts automatically adjust for phones, tablets, and desktops. You can preview the mobile view in the editor, and all pages are tested to ensure they look great on any screen size.',
    },
  ],

  // Closing CTA
  closingTitle: 'READY TO BUILD?',
  closingSub: 'Pick a generator above, or jump straight into our AI builder.',
  closingCTA: 'START WITH AI BUILDER',

  // Footer
  footerCopyright: '© 2026 Strikingly, Inc. All rights reserved.',
  footerLinks: {
    product: {
      title: 'Product',
      links: [
        { text: 'AI Site Builder', href: '/s/ai_site_builder' },
        { text: 'Templates', href: '/templates' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Features', href: '/features' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'Careers', href: '/careers' },
        { text: 'Press', href: '/press' },
      ],
    },
    support: {
      title: 'Support',
      links: [
        { text: 'Help Center', href: '/support' },
        { text: 'Contact', href: '/contact' },
        { text: 'Community', href: '/community' },
        { text: 'Developers', href: '/developers' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { text: 'Terms', href: '/terms' },
        { text: 'Privacy', href: '/privacy' },
        { text: 'Cookies', href: '/cookies' },
        { text: 'GDPR', href: '/gdpr' },
      ],
    },
  },
};

// Category data
strings.categories = [
  {
    slug: 'websites',
    name: 'Websites',
    desc: 'AI-built business and personal sites for any goal.',
    icon: 'website',
  },
  {
    slug: 'landing-pages',
    name: 'Landing Pages',
    desc: 'Single-page sites built to convert visitors fast.',
    icon: 'landing',
  },
  {
    slug: 'portfolios',
    name: 'Portfolios',
    desc: 'Showcase your work with a clean, focused site.',
    icon: 'portfolio',
  },
  {
    slug: 'blogs',
    name: 'Blogs',
    desc: 'Publish-ready blogs with built-in SEO basics.',
    icon: 'blog',
  },
  {
    slug: 'stores',
    name: 'Online Stores',
    desc: 'Sell products online with payments built in.',
    icon: 'store',
  },
  {
    slug: 'link-in-bio',
    name: 'Link-in-Bio',
    desc: 'One link, all your places. Made for creators.',
    icon: 'link-in-bio',
  },
];

// Featured generators (mixed category grid)
strings.featuredGenerators = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' },
];

// All generators data organized by category
strings.allGenerators = {
  websites: {
    name: 'Websites',
    desc: 'AI-built business and personal sites for any goal.',
    generators: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site in seconds', slug: 'ai-website-generator' },
      { name: 'Free Website Builder', desc: 'Build a beautiful site without paying a cent', slug: 'free-website-builder' },
      { name: 'One-Page Website Builder', desc: 'Simple, focused sites in a single scroll', slug: 'one-page-website-builder' },
      { name: 'Wedding Website Generator', desc: 'Share your special day with friends and family', slug: 'wedding-website-generator' },
      { name: 'Restaurant Website Builder', desc: 'Menus, hours, reservations, all in one place', slug: 'restaurant-website-builder' },
      { name: 'Small Business Website Maker', desc: 'Professional sites for local businesses', slug: 'small-business-website-maker' },
      { name: 'Photographer Website Builder', desc: 'Galleries and booking for photography pros', slug: 'photographer-website-builder' },
      { name: 'Yoga Instructor Website', desc: 'Class schedules, bookings, and wellness content', slug: 'yoga-instructor-website' },
      { name: 'Real Estate Website Builder', desc: 'Property listings and agent profiles, done', slug: 'real-estate-website-builder' },
      { name: 'Nonprofit Website Generator', desc: 'Donation pages and mission-driven sites', slug: 'nonprofit-website-generator' },
    ],
  },
  'landing-pages': {
    name: 'Landing Pages',
    desc: 'Single-page sites built to convert visitors fast.',
    generators: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
      { name: 'Product Launch Page Builder', desc: 'Build hype and capture leads before launch', slug: 'product-launch-page-builder' },
      { name: 'Event Landing Page Generator', desc: 'Registration pages for conferences and meetups', slug: 'event-landing-page-generator' },
      { name: 'Lead Generation Page Maker', desc: 'Capture emails with high-converting landing pages', slug: 'lead-generation-page-maker' },
      { name: 'Coming Soon Page Generator', desc: 'Teaser pages that build anticipation', slug: 'coming-soon-page-generator' },
      { name: 'Sales Page Builder', desc: 'Persuasive pages designed to sell', slug: 'sales-page-builder' },
      { name: 'Squeeze Page Generator', desc: 'Focused pages for email list growth', slug: 'squeeze-page-generator' },
      { name: 'App Landing Page Builder', desc: 'Showcase your mobile app with a polished page', slug: 'app-landing-page-builder' },
    ],
  },
  portfolios: {
    name: 'Portfolios',
    desc: 'Showcase your work with a clean, focused site.',
    generators: [
      { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', desc: 'Clean layouts that let your work shine', slug: 'portfolio-generator-for-designers' },
      { name: 'Photography Portfolio Builder', desc: 'Full-bleed galleries for visual storytellers', slug: 'photography-portfolio-builder' },
      { name: 'Artist Portfolio Website', desc: 'Showcase paintings, sculptures, and installations', slug: 'artist-portfolio-website' },
      { name: 'Writer Portfolio Generator', desc: 'Clean text layouts for authors and journalists', slug: 'writer-portfolio-generator' },
      { name: 'Developer Portfolio Builder', desc: 'Showcase your projects and technical skills', slug: 'developer-portfolio-builder' },
      { name: 'Model Portfolio Website', desc: 'Professional comp cards and portfolio pages', slug: 'model-portfolio-website' },
      { name: 'Architect Portfolio Generator', desc: 'Project galleries and firm profiles', slug: 'architect-portfolio-generator' },
    ],
  },
  blogs: {
    name: 'Blogs',
    desc: 'Publish-ready blogs with built-in SEO basics.',
    generators: [
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Builder', desc: 'AI helps you write and structure your posts', slug: 'ai-blog-builder' },
      { name: 'Travel Blog Generator', desc: 'Itineraries, photo galleries, and travel tips', slug: 'travel-blog-generator' },
      { name: 'Food Blog Website Builder', desc: 'Recipe cards, ingredient lists, and food photography', slug: 'food-blog-website-builder' },
      { name: 'Fashion Blog Generator', desc: 'Lookbooks, outfit posts, and style guides', slug: 'fashion-blog-generator' },
      { name: 'Personal Blog Builder', desc: 'A simple, beautiful space for your thoughts', slug: 'personal-blog-builder' },
      { name: 'News Blog Generator', desc: 'Multi-author news sites with category pages', slug: 'news-blog-generator' },
      { name: 'Tech Blog Builder', desc: 'Code snippets, tutorials, and tech reviews', slug: 'tech-blog-builder' },
    ],
  },
  stores: {
    name: 'Online Stores',
    desc: 'Sell products online with payments built in.',
    generators: [
      { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
      { name: 'Online Store Builder for Restaurants', desc: 'Online ordering and menu management', slug: 'online-store-builder-for-restaurants' },
      { name: 'Clothing Store Generator', desc: 'Product grids, size charts, and lookbooks', slug: 'clothing-store-generator' },
      { name: 'Digital Products Store Builder', desc: 'Sell ebooks, courses, and downloads', slug: 'digital-products-store-builder' },
      { name: 'Handmade Goods Store', desc: 'Artisan shopfronts with product stories', slug: 'handmade-goods-store' },
      { name: 'Print-on-Demand Store Builder', desc: 'Sell custom merch without inventory', slug: 'print-on-demand-store-builder' },
      { name: 'Beauty Products Store', desc: 'Skincare and cosmetics e-commerce', slug: 'beauty-products-store' },
      { name: 'Coffee Shop Online Store', desc: 'Beans, merch, and subscription sales', slug: 'coffee-shop-online-store' },
      { name: 'Furniture Store Builder', desc: 'Room-by-room catalogs and delivery info', slug: 'furniture-store-builder' },
      { name: 'Jewelry Store Generator', desc: 'Elegant product displays for fine jewelry', slug: 'jewelry-store-generator' },
    ],
  },
  'link-in-bio': {
    name: 'Link-in-Bio',
    desc: 'One link, all your places. Made for creators.',
    generators: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
      { name: 'Creator Link-in-Bio Page', desc: 'All your social links in one clean page', slug: 'creator-link-in-bio-page' },
      { name: 'Influencer Bio Link Page', desc: 'Brand deals, social links, and latest content', slug: 'influencer-bio-link-page' },
      { name: 'Musician Link-in-Bio', desc: 'Streaming links, tour dates, and merch', slug: 'musician-link-in-bio' },
      { name: 'Podcaster Bio Link', desc: 'Latest episodes, socials, and newsletter signup', slug: 'podcaster-bio-link' },
      { name: 'Business Link-in-Bio', desc: 'Contact info, booking links, and social proof', slug: 'business-link-in-bio' },
      { name: 'Free Link-in-Bio Maker', desc: 'No-cost bio link pages for beginners', slug: 'free-link-in-bio-maker' },
      { name: 'Aesthetic Link-in-Bio', desc: 'Beautiful, minimal bio link designs', slug: 'aesthetic-link-in-bio' },
    ],
  },
};

export default strings;

