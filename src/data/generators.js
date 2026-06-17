const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website', categorySlug: 'websites' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio', categorySlug: 'portfolios' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page', categorySlug: 'landing-pages' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store', categorySlug: 'stores' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio', categorySlug: 'link-in-bio' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website', categorySlug: 'websites' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website', categorySlug: 'websites' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website', categorySlug: 'websites' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog', categorySlug: 'blogs' },
];

export const categoryOrder = [
  'websites',
  'landing-pages',
  'portfolios',
  'blogs',
  'stores',
  'link-in-bio',
];

export const allGenerators = {
  websites: {
    heading: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
    items: [
      { name: 'AI Website Generator', description: 'Describe your business, get a full site' },
      { name: 'Free Website Builder', description: 'No cost, no credit card, no catch' },
      { name: 'One-Page Website Builder', description: 'Simple sites, single scroll' },
      { name: 'Wedding Website Generator', description: 'Share your day with guests' },
      { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done' },
      { name: 'Free Website Builder for Photographers', description: 'Stunning galleries, zero effort' },
      { name: 'Small Business Website Generator', description: 'Get online fast with a pro look' },
      { name: 'Real Estate Website Builder', description: 'Listings, tours, and contact forms' },
      { name: 'Yoga Studio Website Generator', description: 'Class schedules and booking, built in' },
      { name: 'Nonprofit Website Builder', description: 'Tell your story, accept donations' },
      { name: 'Personal Website Generator', description: 'Your corner of the internet, your way' },
    ],
  },
  'landing-pages': {
    heading: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    items: [
      { name: 'AI Landing Page Maker', description: 'One-page sites built to convert' },
      { name: 'Free Landing Page Builder', description: 'Launch a campaign page at no cost' },
      { name: 'SaaS Landing Page Generator', description: 'Feature highlights, pricing, and sign-up' },
      { name: 'Event Landing Page Builder', description: 'Countdown, speakers, and registration' },
      { name: 'Product Launch Page Generator', description: 'Build buzz before you ship' },
      { name: 'App Download Landing Page', description: 'QR code, screenshots, and install links' },
      { name: 'Lead Capture Page Builder', description: 'Forms and CTAs that actually convert' },
      { name: 'Webinar Registration Page', description: 'Sign-up form, calendar, and reminders' },
      { name: 'Coming Soon Page Generator', description: 'Collect emails while you build' },
      { name: 'Click-Through Landing Page', description: 'One message, one action, zero friction' },
    ],
  },
  portfolios: {
    heading: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    items: [
      { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee' },
      { name: 'Portfolio Generator for Designers', description: 'Grid layouts that let your work speak' },
      { name: 'Photography Portfolio Builder', description: 'Full-bleed images, minimal UI' },
      { name: 'Art Portfolio Generator', description: 'Gallery walls, artist statement, contact' },
      { name: 'Freelancer Portfolio Builder', description: 'Services, testimonials, and booking' },
      { name: 'Student Portfolio Generator', description: 'Show projects, skills, and resume' },
      { name: 'Architecture Portfolio Builder', description: 'Renderings, plans, and case studies' },
      { name: 'Model Portfolio Generator', description: 'Headshots, comp cards, and bookings' },
      { name: 'Writer Portfolio Builder', description: 'Clips, bio, and publication history' },
      { name: 'Video Portfolio Generator', description: 'Embedded reels and project pages' },
    ],
  },
  blogs: {
    heading: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    items: [
      { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes' },
      { name: 'Free Blog Builder', description: 'Start writing without spending a cent' },
      { name: 'AI Blog Generator', description: 'Describe your niche, get a blog' },
      { name: 'Travel Blog Generator', description: 'Maps, photo essays, and itineraries' },
      { name: 'Food Blog Builder', description: 'Recipes, galleries, and nutrition info' },
      { name: 'Tech Blog Generator', description: 'Code blocks, syntax highlighting, RSS' },
      { name: 'Lifestyle Blog Builder', description: 'Categories, newsletters, and social links' },
      { name: 'Personal Blog Generator', description: 'Journal-style layout, simple and clean' },
      { name: 'Business Blog Builder', description: 'Thought leadership with built-in SEO' },
    ],
  },
  stores: {
    heading: 'Online Stores',
    description: 'Sell products online with payments built in.',
    items: [
      { name: 'Online Store Builder', description: 'Start selling without writing code' },
      { name: 'Free Online Store Generator', description: 'Open a shop at zero upfront cost' },
      { name: 'Online Store Builder for Restaurants', description: 'Menus, ordering, and delivery setup' },
      { name: 'Fashion Store Generator', description: 'Lookbooks, size guides, and quick checkout' },
      { name: 'Digital Product Store Builder', description: 'Sell downloads, courses, and memberships' },
      { name: 'Handmade Shop Generator', description: 'Story-driven product pages for makers' },
      { name: 'Subscription Box Store Builder', description: 'Recurring billing and unboxing pages' },
      { name: 'Print-on-Demand Store Generator', description: 'Design preview and fulfillment built in' },
      { name: 'Dropshipping Store Builder', description: 'Product import and inventory sync' },
      { name: 'Local Business Store Generator', description: 'In-store pickup and local delivery' },
    ],
  },
  'link-in-bio': {
    heading: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    items: [
      { name: 'Link-in-Bio Generator', description: 'One link for all your channels' },
      { name: 'Free Link-in-Bio Builder', description: 'No cost, no code, no hassle' },
      { name: 'Creator Link Page Generator', description: 'Social links, merch, and tip jar' },
      { name: 'Musician Link-in-Bio Builder', description: 'Streaming links, tour dates, and merch' },
      { name: 'Podcast Link Page Generator', description: 'Episode links, subscribe buttons, and clips' },
      { name: 'Influencer Link-in-Bio Builder', description: 'Brand deals, affiliate links, and content' },
      { name: 'Artist Link Page Generator', description: 'Portfolio, shop, and commission info' },
      { name: 'Coach Link-in-Bio Builder', description: 'Booking, testimonials, and free resources' },
    ],
  },
};

export const getGeneratorSlug = (name) => slugify(name);
