// i18n-ready strings object
export const strings = {
  en: {
    topBarLogo: 'strikingly AI',
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSubheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    heroCtaPrimary: 'START BUILDING - IT\'S FREE',
    heroCtaSecondary: 'BROWSE GENERATORS',
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',
    browseByCategoryHeading: 'BROWSE BY CATEGORY',
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    searchResultCount: '{count} generators match',
    searchNoResults: 'No generators match your search.',
    searchClear: 'Clear search',
    searchFallbackCta: 'Can\'t find it? Start with our AI builder.',
    showAll: 'Show all {count} generators',
    showLess: 'Show less',
    howItWorksHeading: 'HOW IT WORKS',
    step1Title: 'PICK A GENERATOR',
    step1Desc: 'Browse by category or search to find one that fits your goal.',
    step2Title: 'DESCRIBE YOUR SITE',
    step2Desc: 'Tell our AI builder about your business in a sentence or two.',
    step3Title: 'GENERATE AND PUBLISH',
    step3Desc: 'Get a fully built site in seconds. Customize anything, then go live.',
    whyStrikinglyHeading: 'WHY STRIKINGLY',
    why1Title: 'LIVE IN SECONDS',
    why1Desc: 'Describe your site, we build it. No setup, no learning curve.',
    why2Title: 'MOBILE BY DEFAULT',
    why2Desc: 'Every generator produces responsive sites that work on any device.',
    why3Title: 'FREE TO START',
    why3Desc: 'Generate, customize, and publish without a credit card.',
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    closingCtaHeading: 'READY TO BUILD?',
    closingCtaSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCtaButton: 'START WITH AI BUILDER',
    footerCopyright: '\u00A9 {year} Strikingly, Inc. All rights reserved.',
  },
};

// Helper to get string
export const t = (key, vars = {}) => {
  let str = strings.en[key] || key;
  Object.entries(vars).forEach(([k, v]) => {
    str = str.replace(`{${k}}`, String(v));
  });
  return str;
};

// Slugify helper
const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

// Category definitions
export const categories = [
  {
    id: 'websites',
    name: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
    shortDescription: 'Sites for any goal',
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    shortDescription: 'Built to convert',
  },
  {
    id: 'portfolios',
    name: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    shortDescription: 'Showcase your work',
  },
  {
    id: 'blogs',
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    shortDescription: 'Publish-ready blogs',
  },
  {
    id: 'stores',
    name: 'Online Stores',
    description: 'Sell products online with payments built in.',
    shortDescription: 'Sell online',
  },
  {
    id: 'link-in-bio',
    name: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    shortDescription: 'One link, all places',
  },
];

// Featured generators (Section 3) - exactly 9 items
export const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' },
];

// All generators by category (Section 5)
export const allGeneratorsByCategory = {
  websites: [
    { name: 'AI Website Generator', description: 'Describe your business, get a full site' },
    { name: 'Free Website Builder for Photographers', description: 'Showcase your portfolio with zero cost' },
    { name: 'One-Page Wedding Website Builder', description: 'Everything your guests need in one scroll' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done' },
    { name: 'No-Code Website Builder for Yoga Instructors', description: 'Book classes and share schedules online' },
    { name: 'Beautiful Website Generator for Coaches', description: 'Attract clients with a polished presence' },
    { name: 'AI Website Builder for Real Estate', description: 'List properties with stunning galleries' },
    { name: 'Free Website Maker for Nonprofits', description: 'Tell your story and collect donations' },
    { name: 'One-Page Website Builder for Events', description: 'RSVP, details, and maps in one place' },
    { name: 'AI Website Generator for Consultants', description: 'Establish credibility in minutes' },
    { name: 'Website Builder for Musicians', description: 'Share tracks, tour dates, and merch' },
    { name: 'Free Website Builder for Startups', description: 'Launch your landing page today' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', description: 'One-page sites built to convert' },
    { name: 'Free Landing Page Generator', description: 'Capture leads without spending a dime' },
    { name: 'AI Landing Page Builder for SaaS', description: 'Explain your product and drive signups' },
    { name: 'One-Page Landing Builder for Apps', description: 'Show features and get downloads' },
    { name: 'Landing Page Generator for Webinars', description: 'Register attendees with a single page' },
    { name: 'AI Landing Page for Ebooks', description: 'Sell or give away your digital guide' },
    { name: 'Free Landing Page for Courses', description: 'Enroll students with a compelling pitch' },
    { name: 'Landing Page Builder for Agencies', description: 'Win clients with a sharp first impression' },
    { name: 'AI Landing Page for Product Launches', description: 'Build buzz before you ship' },
    { name: 'One-Page Landing for Fitness Challenges', description: 'Sign up participants in seconds' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee' },
    { name: 'Portfolio Generator for Designers', description: 'Showcase projects with clean layouts' },
    { name: 'AI Portfolio Builder for Photographers', description: 'Galleries that load fast and look great' },
    { name: 'Portfolio Maker for Illustrators', description: 'Let your artwork speak for itself' },
    { name: 'Free Portfolio Builder for Architects', description: 'Present plans and renders beautifully' },
    { name: 'Portfolio Generator for Developers', description: 'Highlight repos, skills, and case studies' },
    { name: 'AI Portfolio for Makeup Artists', description: 'Before-and-after galleries that convert' },
    { name: 'Portfolio Builder for Writers', description: 'Publish clips and bylines in one place' },
    { name: 'Free Portfolio for Videographers', description: 'Embed reels and client testimonials' },
    { name: 'Portfolio Generator for Fashion Stylists', description: 'Curate looks and editorial work' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes' },
    { name: 'AI Blog Builder for Food Writers', description: 'Recipes, photos, and stories together' },
    { name: 'Free Blog Generator for Travelers', description: 'Document trips with maps and galleries' },
    { name: 'Blog Maker for Personal Finance', description: 'Share tips with a clean reading layout' },
    { name: 'AI Blog Builder for Tech Reviews', description: 'Compare products with rich media' },
    { name: 'Blog Generator for Parenting', description: 'Connect with readers through stories' },
    { name: 'Free Blog Maker for Fitness', description: 'Workouts, nutrition, and progress posts' },
    { name: 'Blog Builder for Book Reviews', description: 'Rate and discuss your latest reads' },
    { name: 'AI Blog for Small Business Owners', description: 'Share updates and build an audience' },
    { name: 'Blog Generator for DIY Crafters', description: 'Tutorials and supply lists made easy' },
  ],
  stores: [
    { name: 'Online Store Builder', description: 'Start selling without writing code' },
    { name: 'AI Store Builder for Restaurants', description: 'Take orders and reservations online' },
    { name: 'Free Online Store for Handmade Goods', description: 'Sell crafts with beautiful product pages' },
    { name: 'Store Builder for Digital Products', description: 'Deliver downloads automatically' },
    { name: 'AI Store for Fashion Brands', description: 'Lookbooks with built-in checkout' },
    { name: 'Online Store Maker for Bakeries', description: 'Pre-orders, menus, and local delivery' },
    { name: 'Free Store Builder for Artists', description: 'Sell prints and originals worldwide' },
    { name: 'Store Generator for Subscription Boxes', description: 'Recurring billing made simple' },
    { name: 'AI Store for Fitness Equipment', description: 'Product specs and reviews that sell' },
    { name: 'Online Store for Pet Supplies', description: 'Everything pet owners need to buy' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels' },
    { name: 'Free Link-in-Bio for Creators', description: 'Aggregate content across platforms' },
    { name: 'Link-in-Bio Builder for Influencers', description: 'Sponsored links and media kits' },
    { name: 'AI Link-in-Bio for Musicians', description: 'Streaming links, tour dates, and merch' },
    { name: 'Link-in-Bio Maker for Podcasters', description: 'Episodes, platforms, and subscribe buttons' },
    { name: 'Free Link-in-Bio for Coaches', description: 'Booking links and free resources' },
    { name: 'Link-in-Bio Generator for Artists', description: 'Portfolio, shop, and social in one link' },
    { name: 'AI Link-in-Bio for Fitness Trainers', description: 'Programs, bookings, and testimonials' },
  ],
};

// Add slugs to all generators
Object.keys(allGeneratorsByCategory).forEach((catId) => {
  allGeneratorsByCategory[catId] = allGeneratorsByCategory[catId].map((g) => ({
    ...g,
    slug: g.slug || slugify(g.name),
    categoryId: catId,
  }));
});

// FAQ data
export const faqData = [
  {
    question: 'What is an AI site generator?',
    answer: 'An AI site generator is a tool that uses artificial intelligence to build a complete website from a brief description of your business or goal. Instead of starting from a blank page or picking a template, you tell the AI what you need, and it generates a tailored site with layout, copy, and images in seconds.',
  },
  {
    question: 'How is a generator different from a template?',
    answer: 'A template is a pre-designed layout that you customize manually. A generator goes further: it asks about your business, then creates a unique site structure, writes relevant copy, and selects appropriate visuals automatically. You still have full control to edit everything afterward, but you start with a site that already fits your purpose.',
  },
  {
    question: 'Are these generators free to use?',
    answer: 'Yes, you can generate and publish a site for free. Strikingly offers a free plan that includes AI generation, hosting, and a strikingly.com subdomain. Paid plans unlock custom domains, more pages, and advanced features like password protection and e-commerce tools.',
  },
  {
    question: 'What kinds of sites can I build?',
    answer: 'You can build personal sites, business websites, portfolios, blogs, online stores, landing pages, event pages, wedding sites, restaurant pages, and more. Each generator is tuned for a specific use case, so the AI understands the structure and content that works best for that type of site.',
  },
  {
    question: 'Can I customize what the generator produces?',
    answer: 'Absolutely. After the AI generates your site, you have full editing control. Change text, swap images, adjust colors, add or remove sections, and rearrange the layout. The generator gives you a strong starting point, but the final site is entirely yours to shape.',
  },
  {
    question: 'Do generated sites work on mobile?',
    answer: 'Every site generated by Strikingly is responsive by default. The layouts automatically adapt to phones, tablets, and desktops, so your visitors get a great experience no matter what device they use. You can also preview the mobile view before publishing.',
  },
];

// Flat list of all generators for search
export const allGeneratorsFlat = Object.values(allGeneratorsByCategory).flat();
