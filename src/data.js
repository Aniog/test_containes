const slugify = (name) =>
  name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const featuredGenerators = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site.', category: 'Website' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee.', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert.', category: 'Landing Page' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code.', category: 'Store' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels.', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll.', category: 'Website' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests.', category: 'Website' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done.', category: 'Website' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes.', category: 'Blog' },
].map((g) => ({ ...g, slug: slugify(g.name) }));

const categoryKeys = ['websites', 'landing-pages', 'portfolios', 'blogs', 'stores', 'link-in-bio'];

const categoryData = {
  websites: [
    'AI Website Generator',
    'Free Website Builder for Photographers',
    'One-Page Website Builder',
    'Wedding Website Generator',
    'Restaurant Website Builder',
    'Business Website Generator',
    'Personal Website Maker',
    'Nonprofit Website Builder',
    'Church Website Generator',
    'Small Business Website Builder',
    'Creative Agency Website Maker',
    'Real Estate Website Generator',
  ],
  'landing-pages': [
    'AI Landing Page Maker',
    'Product Launch Page Builder',
    'SaaS Landing Page Generator',
    'App Landing Page Creator',
    'Event Registration Page Maker',
    'Coming Soon Page Generator',
    'Lead Capture Page Builder',
    'Sales Funnel Landing Page',
    'Book Launch Page Generator',
    'Course Landing Page Builder',
  ],
  portfolios: [
    'Free Portfolio Generator',
    'Photography Portfolio Builder',
    'Design Portfolio Maker',
    'Artist Portfolio Website Generator',
    'Architecture Portfolio Creator',
    'Model Portfolio Site Builder',
    'Writer Portfolio Generator',
    'Videographer Portfolio Maker',
    'Makeup Artist Portfolio Builder',
    'Developer Portfolio Generator',
    'Fashion Portfolio Website Maker',
    'Illustrator Portfolio Creator',
  ],
  blogs: [
    'Blog Generator for Beginners',
    'Personal Blog Builder',
    'Travel Blog Generator',
    'Food Blog Website Maker',
    'Fashion Blog Creator',
    'Tech Blog Generator',
    'Lifestyle Blog Builder',
    'Parenting Blog Generator',
    'Fitness Blog Website Maker',
    'Business Blog Generator',
  ],
  stores: [
    'Online Store Builder',
    'Online Store Builder for Restaurants',
    'Clothing Store Generator',
    'Handmade Goods Store Builder',
    'Digital Products Store Maker',
    'Restaurant Online Ordering Store',
    'Jewelry Store Builder',
    'Art Print Store Generator',
    'Subscription Box Store Creator',
    'Bookstore Website Builder',
    'Home Decor Store Generator',
    'Beauty Products Store Maker',
    'Coffee Shop Online Store',
  ],
  'link-in-bio': [
    'Link-in-Bio Generator',
    'Creator Link-in-Bio Page',
    'Social Media Bio Link Builder',
    'Musician Link-in-Bio Maker',
    'Influencer Bio Link Page',
    'Podcaster Link-in-Bio Generator',
    'Freelancer Bio Link Builder',
    'Coach Link-in-Bio Creator',
    'Artist Bio Link Page Maker',
    'Agency Link-in-Bio Generator',
  ],
};

const directoryEntries = {};

Object.keys(categoryData).forEach((catKey) => {
  directoryEntries[catKey] = categoryData[catKey].map((name) => ({
    name,
    slug: slugify(name),
  }));
});

export { featuredGenerators, categoryKeys, categoryData, directoryEntries, slugify };
