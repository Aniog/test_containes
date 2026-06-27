/**
 * Generator data organized by category.
 * Each generator has: name, description, slug, category (for featured grid tags).
 * Categories have: id (for hash anchors), heading, description, generators list.
 */

export const CATEGORIES = [
  {
    id: 'websites',
    heading: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
  },
  {
    id: 'landing-pages',
    heading: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
  },
  {
    id: 'portfolios',
    heading: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
  },
  {
    id: 'blogs',
    heading: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
  },
  {
    id: 'stores',
    heading: 'Online Stores',
    description: 'Sell products online with payments built in.',
  },
  {
    id: 'link-in-bio',
    heading: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
  },
];

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const GENERATORS_BY_CATEGORY = {
  websites: [
    { name: 'AI Website Generator', desc: 'Describe your business, get a full site' },
    { name: 'Free Website Builder for Photographers', desc: 'Showcase your portfolio with a beautiful site' },
    { name: 'One-Page Wedding Website Builder', desc: 'Share your special day with a single-page site' },
    { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done' },
    { name: 'Beautiful Website Builder', desc: 'Stunning designs that impress visitors' },
    { name: 'No-Code Website Builder', desc: 'Build without writing a single line of code' },
    { name: 'Free Website Builder for Yoga Instructors', desc: 'Attract students with a calming website' },
    { name: 'AI Website Builder for Small Business', desc: 'Get online quickly with AI-powered design' },
    { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll' },
    { name: 'Wedding Website Generator', desc: 'Share your day with guests' },
    { name: 'Free Website Builder for Restaurants', desc: 'Attract diners with a professional site' },
    { name: 'Beautiful Website Builder for Photographers', desc: 'Showcase your work with stunning visuals' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert' },
    { name: 'Free Landing Page Generator', desc: 'Launch a landing page at no cost' },
    { name: 'Landing Page Builder for Startups', desc: 'Validate ideas with a fast, focused page' },
    { name: 'SaaS Landing Page Generator', desc: 'Pages designed for software sign-ups' },
    { name: 'Event Landing Page Builder', desc: 'Promote events with a single scroll' },
    { name: 'Product Launch Landing Page', desc: 'Build buzz before you go live' },
    { name: 'Landing Page Builder for Agencies', desc: 'Win clients with a polished pitch page' },
    { name: 'No-Code Landing Page Generator', desc: 'Create landing pages without writing code' },
    { name: 'AI Landing Page Builder for Coaches', desc: 'Book more clients with a targeted page' },
    { name: 'Mobile Landing Page Builder', desc: 'Pages optimized for phone visitors' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee' },
    { name: 'Portfolio Generator for Designers', desc: 'Showcase design work beautifully' },
    { name: 'Photography Portfolio Builder', desc: 'Display your best shots in a gallery site' },
    { name: 'AI Portfolio Builder for Freelancers', desc: 'Highlight projects and win new clients' },
    { name: 'Portfolio Generator for Artists', desc: 'A clean canvas for your creative work' },
    { name: 'Developer Portfolio Builder', desc: 'Showcase code projects and skills' },
    { name: 'Portfolio Generator for Writers', desc: 'Publish clips and writing samples' },
    { name: 'Portfolio Builder for Architects', desc: 'Present projects with visual impact' },
    { name: 'Free Portfolio Builder for Students', desc: 'Start building your professional presence' },
    { name: 'AI Portfolio Generator for Videographers', desc: 'Embed reels and video work' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes' },
    { name: 'AI Blog Builder', desc: 'Start blogging with AI-written drafts' },
    { name: 'Free Blog Generator', desc: 'Launch a blog without spending a dime' },
    { name: 'Travel Blog Builder', desc: 'Document your adventures online' },
    { name: 'Food Blog Generator', desc: 'Share recipes with a beautiful layout' },
    { name: 'Blog Builder for Writers', desc: 'A clean reading experience for your words' },
    { name: 'Personal Blog Generator', desc: 'Share your thoughts with the world' },
    { name: 'AI Blog Builder for Marketers', desc: 'Content marketing made simple' },
    { name: 'Blog Generator for Photographers', desc: 'Pair stories with your best images' },
    { name: 'No-Code Blog Builder', desc: 'Focus on writing, not on tech' },
  ],
  stores: [
    { name: 'Online Store Builder', desc: 'Start selling without writing code' },
    { name: 'Online Store Builder for Restaurants', desc: 'Take orders and reservations online' },
    { name: 'AI Store Builder for Boutiques', desc: 'Launch a stylish shop in minutes' },
    { name: 'Free Online Store Generator', desc: 'Sell products with zero upfront cost' },
    { name: 'Store Builder for Handmade Goods', desc: 'Perfect for Etsy-style sellers' },
    { name: 'Digital Product Store Builder', desc: 'Sell downloads, courses, and files' },
    { name: 'Store Generator for Fitness Trainers', desc: 'Sell classes and training packages' },
    { name: 'AI Online Store for Artisans', desc: 'A crafted shop for crafted goods' },
    { name: 'No-Code Store Builder', desc: 'Set up payments and products easily' },
    { name: 'Store Builder for Food Trucks', desc: 'Take orders from your mobile kitchen' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', desc: 'One link for all your channels' },
    { name: 'Free Link-in-Bio Builder', desc: 'All your links, zero cost' },
    { name: 'Link-in-Bio Builder for Creators', desc: 'Central hub for your online presence' },
    { name: 'AI Link-in-Bio Generator', desc: 'Auto-build a page from your profiles' },
    { name: 'Link-in-Bio Builder for Musicians', desc: 'Link to every streaming platform' },
    { name: 'No-Code Link-in-Bio Generator', desc: 'Build your bio page without code' },
    { name: 'Link-in-Bio Builder for Influencers', desc: 'Monetize your audience from one link' },
    { name: 'Link-in-Bio Generator for Podcasters', desc: 'Every episode link in one place' },
    { name: 'Free Link-in-Bio for Artists', desc: 'Gallery, shop, and social links combined' },
    { name: 'Link-in-Bio Builder for Businesses', desc: 'Professional link page for your brand' },
  ],
};

export const FEATURED = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site', category: 'Website', slug: slugify('AI Website Generator') },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: slugify('Free Portfolio Generator') },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', category: 'Landing Page', slug: slugify('AI Landing Page Maker') },
  { name: 'Online Store Builder', desc: 'Start selling without writing code', category: 'Store', slug: slugify('Online Store Builder') },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', category: 'Link-in-Bio', slug: slugify('Link-in-Bio Generator') },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', category: 'Website', slug: slugify('One-Page Website Builder') },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests', category: 'Website', slug: slugify('Wedding Website Generator') },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', category: 'Website', slug: slugify('Restaurant Website Builder') },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', category: 'Blog', slug: slugify('Blog Generator for Beginners') },
];

export function getSlug(name) {
  return slugify(name);
}

export function getAllGenerators() {
  const all = [];
  for (const [catId, gens] of Object.entries(GENERATORS_BY_CATEGORY)) {
    for (const gen of gens) {
      all.push({ ...gen, slug: slugify(gen.name), category: catId });
    }
  }
  return all;
}

export function getCategoryHeading(catId) {
  const cat = CATEGORIES.find((c) => c.id === catId);
  return cat ? cat.heading : catId;
}
