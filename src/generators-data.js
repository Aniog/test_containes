// i18n-ready strings object — adding a new language is a one-file change
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
    browseHeading: 'BROWSE BY CATEGORY',
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    searchResultCount: (n) => `${n} generator${n === 1 ? '' : 's'} match`,
    searchNoResults: 'No generators match your search.',
    searchClear: 'Clear search',
    searchTryBuilder: 'Can\'t find it? Start with our AI builder.',
    showAll: (n, category) => `Show all ${n} ${category} generators`,
    showLess: 'Show less',
    howItWorksHeading: 'HOW IT WORKS',
    whyStrikinglyHeading: 'WHY STRIKINGLY',
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    footerCopyright: '© Strikingly, Inc. All rights reserved.',
  },
};

// Slugify helper for link generation
function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

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

export const browseCategories = [
  {
    id: 'websites',
    name: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
  },
  {
    id: 'portfolios',
    name: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
  },
  {
    id: 'blogs',
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
  },
  {
    id: 'stores',
    name: 'Online Stores',
    description: 'Sell products online with payments built in.',
  },
  {
    id: 'link-in-bio',
    name: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
  },
];

export const allGenerators = [
  {
    id: 'websites',
    name: 'Websites',
    description: 'Full websites for any purpose or profession.',
    generators: [
      { name: 'AI Website Generator', description: 'Describe your business, get a full site' },
      { name: 'Free Website Builder for Photographers', description: 'Showcase your portfolio with stunning galleries' },
      { name: 'One-Page Wedding Website Builder', description: 'Share your story and registry in one scroll' },
      { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done' },
      { name: 'No-Code Website Builder for Startups', description: 'Launch fast without a developer' },
      { name: 'Beautiful Website Builder for Coaches', description: 'Attract clients with a polished presence' },
      { name: 'AI Website Builder for Yoga Instructors', description: 'Schedule classes and share your practice' },
      { name: 'Free Website Builder for Nonprofits', description: 'Tell your mission and accept donations' },
      { name: 'One-Page Website Builder for Events', description: 'Everything guests need on one page' },
      { name: 'AI Website Builder for Consultants', description: 'Establish credibility and book meetings' },
    ],
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    description: 'High-converting single-page sites.',
    generators: [
      { name: 'AI Landing Page Maker', description: 'One-page sites built to convert' },
      { name: 'Free Landing Page Generator for Apps', description: 'Launch your app with a compelling page' },
      { name: 'One-Page Landing Builder for SaaS', description: 'Explain features and capture signups' },
      { name: 'AI Landing Page for Ebooks', description: 'Sell your digital product in one scroll' },
      { name: 'Landing Page Builder for Webinars', description: 'Drive registrations with a focused page' },
      { name: 'Free Landing Page for Courses', description: 'Enroll students with a clean sales page' },
      { name: 'AI Landing Page for Real Estate', description: 'List properties and capture leads' },
      { name: 'One-Page Site for Product Launches', description: 'Build hype and collect early users' },
      { name: 'Landing Page Builder for Agencies', description: 'Pitch services and book discovery calls' },
      { name: 'Free Landing Page for Fitness Programs', description: 'Convert visitors into committed members' },
    ],
  },
  {
    id: 'portfolios',
    name: 'Portfolios',
    description: 'Showcase your work beautifully.',
    generators: [
      { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee' },
      { name: 'Portfolio Generator for Designers', description: 'Present case studies with visual impact' },
      { name: 'AI Portfolio Builder for Photographers', description: 'Curate galleries that win clients' },
      { name: 'Portfolio Site for Illustrators', description: 'Let your artwork speak for itself' },
      { name: 'Free Portfolio for Architects', description: 'Display projects with precision and style' },
      { name: 'Portfolio Builder for Makeup Artists', description: 'Highlight transformations and bookings' },
      { name: 'AI Portfolio for Musicians', description: 'Share your sound and upcoming shows' },
      { name: 'Portfolio Site for Videographers', description: 'Embed reels and attract production gigs' },
      { name: 'Free Portfolio for Writers', description: 'Publish clips and attract commissions' },
      { name: 'Portfolio Builder for Developers', description: 'Showcase repos and side projects' },
    ],
  },
  {
    id: 'blogs',
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO.',
    generators: [
      { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes' },
      { name: 'AI Blog Builder for Travelers', description: 'Document trips with maps and photos' },
      { name: 'Free Blog Maker for Food Writers', description: 'Share recipes and restaurant reviews' },
      { name: 'Blog Site for Parenting Tips', description: 'Connect with other parents and brands' },
      { name: 'AI Blog for Tech Reviews', description: 'Monetize opinions with affiliate links' },
      { name: 'Blog Builder for Lifestyle Creators', description: 'Grow an audience around your interests' },
      { name: 'Free Blog for Personal Finance', description: 'Teach budgeting and build trust' },
      { name: 'Blog Generator for Fitness Tips', description: 'Share workouts and nutrition advice' },
      { name: 'AI Blog for DIY Enthusiasts', description: 'Post tutorials and supply lists' },
      { name: 'Blog Builder for Book Reviews', description: 'Build a community of avid readers' },
    ],
  },
  {
    id: 'stores',
    name: 'Online Stores',
    description: 'Sell products with payments built in.',
    generators: [
      { name: 'Online Store Builder', description: 'Start selling without writing code' },
      { name: 'AI Store Builder for Restaurants', description: 'Take orders and reservations online' },
      { name: 'Free Ecommerce Site for Artists', description: 'Sell prints and originals directly' },
      { name: 'Store Builder for Handmade Goods', description: 'List products and manage inventory' },
      { name: 'AI Store for Fashion Brands', description: 'Lookbooks with integrated checkout' },
      { name: 'Online Shop for Fitness Products', description: 'Sell gear and supplements with ease' },
      { name: 'Free Store Builder for Bakeries', description: 'Accept custom cake orders online' },
      { name: 'Store Site for Digital Downloads', description: 'Sell ebooks, templates, and presets' },
      { name: 'AI Store for Beauty Products', description: 'Launch a skincare or cosmetics line' },
      { name: 'Online Store for Pet Supplies', description: 'Cater to pet owners with curated picks' },
    ],
  },
  {
    id: 'link-in-bio',
    name: 'Link-in-Bio',
    description: 'One link for all your channels.',
    generators: [
      { name: 'Link-in-Bio Generator', description: 'One link for all your channels' },
      { name: 'AI Link Page for Instagram Creators', description: 'Turn followers into customers' },
      { name: 'Free Link-in-Bio for TikTokers', description: 'Monetize your audience with one link' },
      { name: 'Link Page for YouTubers', description: 'Promote videos, merch, and sponsors' },
      { name: 'AI Link-in-Bio for Podcasters', description: 'Episodes, sponsors, and listener links' },
      { name: 'Link Page for Musicians', description: 'Streaming, tickets, and merchandise' },
      { name: 'Free Link-in-Bio for Coaches', description: 'Bookings, testimonials, and resources' },
      { name: 'Link Page for Event Hosts', description: 'Tickets, schedules, and venue info' },
      { name: 'AI Link-in-Bio for Brands', description: 'Campaigns, products, and press kits' },
      { name: 'Link Page for Freelancers', description: 'Services, rates, and contact in one place' },
    ],
  },
];

export const howItWorks = [
  {
    number: '1',
    title: 'PICK A GENERATOR',
    description: 'Browse by category or search to find one that fits your goal.',
  },
  {
    number: '2',
    title: 'DESCRIBE YOUR SITE',
    description: 'Tell our AI builder about your business in a sentence or two.',
  },
  {
    number: '3',
    title: 'GENERATE AND PUBLISH',
    description: 'Get a fully built site in seconds. Customize anything, then go live.',
  },
];

export const whyStrikingly = [
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
];

export const faqData = [
  {
    question: 'What is an AI site generator?',
    answer: 'An AI site generator is a tool that creates a complete website for you based on a short description of your business or goal. Instead of starting from a blank page or picking from hundreds of templates, you tell the AI what you need, and it builds a tailored site with relevant sections, copy, and design in seconds.',
  },
  {
    question: 'How is a generator different from a template?',
    answer: 'A template is a pre-designed layout that you fill in manually. A generator goes further: it asks what you are building, understands your input, and creates a unique site structure with customized content, images, and styling specific to your business. You still have full control to edit everything after generation.',
  },
  {
    question: 'Are these generators free to use?',
    answer: 'Yes. You can generate, customize, and publish a site for free. Strikingly offers paid plans with additional features like custom domains, more pages, and advanced analytics, but the core generator experience and publishing are available at no cost.',
  },
  {
    question: 'What kinds of sites can I build?',
    answer: 'You can build business websites, portfolios, landing pages, blogs, online stores, and link-in-bio pages. Our generators cover dozens of professions and use cases, from photographers and restaurants to coaches and creators.',
  },
  {
    question: 'Can I customize what the generator produces?',
    answer: 'Absolutely. After the AI builds your site, you have full editing control. Change text, swap images, adjust colors, add or remove sections, and rearrange the layout. The generator gives you a strong starting point, and you make it your own.',
  },
  {
    question: 'Do generated sites work on mobile?',
    answer: 'Yes. Every site generated by Strikingly is fully responsive by default. It will look great and function properly on desktops, tablets, and smartphones without any extra configuration.',
  },
];

export { slugify };
