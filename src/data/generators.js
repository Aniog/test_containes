function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const categories = [
  {
    id: 'websites',
    name: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
    href: '#websites',
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    href: '#landing-pages',
  },
  {
    id: 'portfolios',
    name: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    href: '#portfolios',
  },
  {
    id: 'blogs',
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    href: '#blogs',
  },
  {
    id: 'stores',
    name: 'Online Stores',
    description: 'Sell products online with payments built in.',
    href: '#stores',
  },
  {
    id: 'link-in-bio',
    name: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    href: '#link-in-bio',
  },
];

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

export const allGenerators = {
  websites: {
    categoryId: 'websites',
    heading: 'Websites',
    description: 'Full business and personal sites built by AI.',
    generators: [
      { name: 'AI Website Generator', description: 'Describe your business, get a full site' },
      { name: 'Free Website Builder', description: 'No cost, no code, launch today' },
      { name: 'One-Page Website Builder', description: 'Simple sites, single scroll' },
      { name: 'Wedding Website Generator', description: 'Share your day with guests' },
      { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done' },
      { name: 'Small Business Website Builder', description: 'Professional presence for local businesses' },
      { name: 'Real Estate Website Generator', description: 'Listings, galleries, and contact forms' },
      { name: 'Photographer Website Builder', description: 'Stunning image galleries, zero effort' },
      { name: 'Yoga Studio Website Builder', description: 'Class schedules and booking, simplified' },
      { name: 'Nonprofit Website Generator', description: 'Tell your story, accept donations' },
      { name: 'Consultant Website Builder', description: 'Authority and credibility, out of the box' },
      { name: 'Beautiful Website Builder', description: 'Design-forward sites that impress' },
    ],
  },
  'landing-pages': {
    categoryId: 'landing-pages',
    heading: 'Landing Pages',
    description: 'Single-page sites built to convert.',
    generators: [
      { name: 'AI Landing Page Maker', description: 'One-page sites built to convert' },
      { name: 'Free Landing Page Builder', description: 'Launch a campaign page at no cost' },
      { name: 'SaaS Landing Page Generator', description: 'Feature highlights and sign-up flows' },
      { name: 'Event Landing Page Builder', description: 'Countdown, details, and RSVP in one page' },
      { name: 'Product Launch Page Generator', description: 'Build buzz before you ship' },
      { name: 'Lead Capture Page Builder', description: 'Forms and CTAs optimized for sign-ups' },
      { name: 'App Download Page Generator', description: 'Drive installs with a focused page' },
      { name: 'Webinar Registration Page Builder', description: 'Sign-ups and reminders, handled' },
      { name: 'Coming Soon Page Generator', description: 'Tease your next move, collect emails' },
      { name: 'Click-Through Landing Page Builder', description: 'Warm up visitors before they convert' },
    ],
  },
  portfolios: {
    categoryId: 'portfolios',
    heading: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    generators: [
      { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee' },
      { name: 'Portfolio Generator for Designers', description: 'Layouts that let your work speak' },
      { name: 'Photography Portfolio Builder', description: 'Galleries that load fast and look sharp' },
      { name: 'Artist Portfolio Generator', description: 'Canvas-like layouts for visual art' },
      { name: 'Writer Portfolio Builder', description: 'Clean typography, published clips front and center' },
      { name: 'Student Portfolio Generator', description: 'Academic projects, presented professionally' },
      { name: 'Architecture Portfolio Builder', description: 'Spatial layouts for built-work imagery' },
      { name: 'Fashion Portfolio Generator', description: 'Lookbooks and collections, online' },
      { name: 'Video Portfolio Builder', description: 'Embedded reels and showreels, organized' },
      { name: 'Illustration Portfolio Generator', description: 'Grid and masonry layouts for artwork' },
    ],
  },
  blogs: {
    categoryId: 'blogs',
    heading: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    generators: [
      { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes' },
      { name: 'AI Blog Builder', description: 'Describe your niche, get a blog structure' },
      { name: 'Personal Blog Generator', description: 'Your voice, your space, no hassle' },
      { name: 'Travel Blog Builder', description: 'Stories and photos from the road' },
      { name: 'Food Blog Generator', description: 'Recipes and reviews, beautifully laid out' },
      { name: 'Tech Blog Builder', description: 'Code snippets and commentary, styled right' },
      { name: 'Lifestyle Blog Generator', description: 'Curated content, magazine feel' },
      { name: 'Business Blog Builder', description: 'Thought leadership, out of the box' },
      { name: 'Free Blog Generator', description: 'Start writing without spending a cent' },
    ],
  },
  stores: {
    categoryId: 'stores',
    heading: 'Online Stores',
    description: 'Sell products online with payments built in.',
    generators: [
      { name: 'Online Store Builder', description: 'Start selling without writing code' },
      { name: 'Online Store Builder for Restaurants', description: 'Menus, ordering, and delivery setup' },
      { name: 'Fashion Store Generator', description: 'Lookbook-style product pages' },
      { name: 'Handmade Shop Builder', description: 'Artisan products, craft-store feel' },
      { name: 'Digital Product Store Generator', description: 'Sell downloads, courses, and files' },
      { name: 'Subscription Box Store Builder', description: 'Recurring products, managed simply' },
      { name: 'Print-on-Demand Store Generator', description: 'Custom designs, no inventory needed' },
      { name: 'Free Online Store Builder', description: 'Open a shop at zero cost' },
      { name: 'Jewelry Store Generator', description: 'Elegant product galleries and checkout' },
      { name: 'Book Store Builder', description: 'Catalogs, reviews, and instant purchase' },
      { name: 'Fitness Product Store Generator', description: 'Gear and supplements, ready to ship' },
    ],
  },
  'link-in-bio': {
    categoryId: 'link-in-bio',
    heading: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    generators: [
      { name: 'Link-in-Bio Generator', description: 'One link for all your channels' },
      { name: 'Free Link-in-Bio Builder', description: 'All your links, no cost' },
      { name: 'Creator Link Page Generator', description: 'Social, shop, and content in one spot' },
      { name: 'Musician Link-in-Bio Builder', description: 'Streams, merch, and tour dates together' },
      { name: 'Influencer Link Page Generator', description: 'Sponsorships and content, organized' },
      { name: 'Podcast Link-in-Bio Builder', description: 'Episodes, subscribe links, and show notes' },
      { name: 'TikTok Link-in-Bio Generator', description: 'From viral video to full creator hub' },
      { name: 'YouTube Creator Link Page Builder', description: 'Videos, memberships, and merch in one place' },
    ],
  },
};

// Add slugs to all generators
Object.values(allGenerators).forEach((section) => {
  section.generators = section.generators.map((g) => ({
    ...g,
    slug: slugify(g.name),
  }));
});

featuredGenerators.forEach((g) => {
  g.slug = slugify(g.name);
});

export const VISIBLE_COUNT = 6;
