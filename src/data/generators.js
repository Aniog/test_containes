// Sample generator data. Six categories, 8-12 entries each.
// The "slug" field is the URL slug at /generators/{slug}.
// The "category" field matches a category id used by All Generators.

export const categories = [
  { id: 'websites', name: 'Websites', short: 'Website' },
  { id: 'landing-pages', name: 'Landing Pages', short: 'Landing Page' },
  { id: 'portfolios', name: 'Portfolios', short: 'Portfolio' },
  { id: 'blogs', name: 'Blogs', short: 'Blog' },
  { id: 'stores', name: 'Online Stores', short: 'Store' },
  { id: 'link-in-bio', name: 'Link-in-Bio', short: 'Link-in-Bio' },
];

// Featured 9: a mixed-category 3x3 grid for the top of the page.
export const featuredGenerators = [
  {
    name: 'AI Website Generator',
    description: 'Describe your business, get a full site.',
    category: 'websites',
    categoryLabel: 'Website',
    slug: 'ai-website-generator',
  },
  {
    name: 'Free Portfolio Generator',
    description: 'For creatives, in minutes, no fee.',
    category: 'portfolios',
    categoryLabel: 'Portfolio',
    slug: 'free-portfolio-generator',
  },
  {
    name: 'AI Landing Page Maker',
    description: 'One-page sites built to convert.',
    category: 'landing-pages',
    categoryLabel: 'Landing Page',
    slug: 'ai-landing-page-maker',
  },
  {
    name: 'Online Store Builder',
    description: 'Start selling without writing code.',
    category: 'stores',
    categoryLabel: 'Store',
    slug: 'online-store-builder',
  },
  {
    name: 'Link-in-Bio Generator',
    description: 'One link for all your channels.',
    category: 'link-in-bio',
    categoryLabel: 'Link-in-Bio',
    slug: 'link-in-bio-generator',
  },
  {
    name: 'One-Page Website Builder',
    description: 'Simple sites, single scroll.',
    category: 'websites',
    categoryLabel: 'Website',
    slug: 'one-page-website-builder',
  },
  {
    name: 'Wedding Website Generator',
    description: 'Share your day with guests.',
    category: 'websites',
    categoryLabel: 'Website',
    slug: 'wedding-website-generator',
  },
  {
    name: 'Restaurant Website Builder',
    description: 'Menu, hours, reservations, done.',
    category: 'websites',
    categoryLabel: 'Website',
    slug: 'restaurant-website-builder',
  },
  {
    name: 'Blog Generator for Beginners',
    description: 'Publish-ready in minutes.',
    category: 'blogs',
    categoryLabel: 'Blog',
    slug: 'blog-generator-for-beginners',
  },
];

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const build = (name, description, category) => ({
  name,
  description,
  category,
  slug: slugify(name),
});

// Section 5 directory: 8-12 entries per category, in order.
// Mixes demographic-targeted and modifier-targeted names.
export const allGenerators = {
  websites: [
    build('AI Website Generator', 'Describe your business, get a full site.', 'websites'),
    build('Free Website Builder', 'A free, no-credit-card starting point.', 'websites'),
    build('One-Page Website Builder', 'Simple sites, single scroll.', 'websites'),
    build('Wedding Website Generator', 'Share your day with guests.', 'websites'),
    build('Restaurant Website Builder', 'Menu, hours, reservations, done.', 'websites'),
    build('Website Builder for Photographers', 'A portfolio-first site that books shoots.', 'websites'),
    build('Website Builder for Yoga Instructors', 'Classes, schedules, and a clean intro.', 'websites'),
    build('Beautiful Website Builder', 'Design-led sites for small brands.', 'websites'),
    build('No-Code Website Builder', 'Drag, drop, publish, no engineering.', 'websites'),
    build('Website Builder for Small Business', 'Get found, get leads, get going.', 'websites'),
  ],
  'landing-pages': [
    build('AI Landing Page Maker', 'One-page sites built to convert.', 'landing-pages'),
    build('Free Landing Page Builder', 'A single page that ships today.', 'landing-pages'),
    build('Product Landing Page Generator', 'Show one thing, sell one thing.', 'landing-pages'),
    build('Startup Landing Page Builder', 'Launch your next thing this week.', 'landing-pages'),
    build('Landing Page Builder for SaaS', 'Signups, not surprises.', 'landing-pages'),
    build('Squeeze Page Generator', 'Capture emails with one focused page.', 'landing-pages'),
    build('App Landing Page Builder', 'A page that explains and downloads.', 'landing-pages'),
    build('Event Landing Page Generator', 'Tickets, dates, and one CTA.', 'landing-pages'),
    build('Waitlist Landing Page Builder', 'Build hype before you ship.', 'landing-pages'),
  ],
  portfolios: [
    build('Free Portfolio Generator', 'For creatives, in minutes, no fee.', 'portfolios'),
    build('Portfolio Generator for Designers', 'A clean grid that shows your work.', 'portfolios'),
    build('Portfolio Generator for Photographers', 'Big imagery, fast loading.', 'portfolios'),
    build('Portfolio Generator for Writers', 'Long-form samples and a clear bio.', 'portfolios'),
    build('Portfolio Generator for Illustrators', 'Art-first layouts that load fast.', 'portfolios'),
    build('Portfolio Generator for Filmmakers', 'Reels, credits, and one-click contact.', 'portfolios'),
    build('Portfolio Generator for Architects', 'Projects that breathe on the page.', 'portfolios'),
    build('Portfolio Generator for Models', 'Lookbook-ready, mobile-first.', 'portfolios'),
    build('Portfolio Generator for Developers', 'Code samples, side projects, a hire-me link.', 'portfolios'),
    build('Portfolio Generator for Makeup Artists', 'Before-and-after, services, and booking.', 'portfolios'),
  ],
  blogs: [
    build('Blog Generator for Beginners', 'Publish-ready in minutes.', 'blogs'),
    build('Personal Blog Builder', 'A homepage, an archive, a voice.', 'blogs'),
    build('AI Blog Generator', 'Drafts, outlines, and SEO basics built in.', 'blogs'),
    build('Travel Blog Builder', 'Posts, photos, and a place-based nav.', 'blogs'),
    build('Food Blog Generator', 'Recipes, photos, and printable cards.', 'blogs'),
    build('Lifestyle Blog Builder', 'Categories, an about page, a contact form.', 'blogs'),
    build('News-Style Blog Builder', 'Headlines, dates, and a clean archive.', 'blogs'),
    build('Blog Generator for Writers', 'Distraction-free reading, beautiful writing.', 'blogs'),
    build('Tech Blog Builder', 'Code blocks, RSS, and dark mode.', 'blogs'),
  ],
  stores: [
    build('Online Store Builder', 'Start selling without writing code.', 'stores'),
    build('Online Store Builder for Restaurants', 'Orders, pickup, and a clean menu.', 'stores'),
    build('Online Store Builder for Clothing', 'Lookbook meets checkout.', 'stores'),
    build('Online Store Builder for Handmade Goods', 'Small batch, big personality.', 'stores'),
    build('Online Store Builder for Digital Products', 'Downloads, licenses, and email delivery.', 'stores'),
    build('Online Store Builder for Artists', 'Sell prints without a middleman.', 'stores'),
    build('Online Store Builder for Bakeries', 'Pre-orders, pickup windows, and treats.', 'stores'),
    build('Online Store Builder for Jewelry', 'Collections, lookbooks, and secure checkout.', 'stores'),
    build('Online Store Builder for Bookstores', 'Curation, reviews, and shipping made simple.', 'stores'),
  ],
  'link-in-bio': [
    build('Link-in-Bio Generator', 'One link for all your channels.', 'link-in-bio'),
    build('Link-in-Bio for Instagram', 'A mobile-first hub that updates in seconds.', 'link-in-bio'),
    build('Link-in-Bio for TikTok Creators', 'Your links, your latest, your look.', 'link-in-bio'),
    build('Link-in-Bio for YouTubers', 'Videos, playlists, and a merch link in one place.', 'link-in-bio'),
    build('Link-in-Bio for Podcasters', 'Episodes, platforms, and a tip jar.', 'link-in-bio'),
    build('Link-in-Bio for Musicians', 'Streaming, tour dates, and one bio.', 'link-in-bio'),
    build('Link-in-Bio for Coaches', 'Bookings, offers, and a free resource.', 'link-in-bio'),
    build('Link-in-Bio for Photographers', 'Galleries, packages, and a contact link.', 'link-in-bio'),
  ],
};

export const totalGenerators = Object.values(allGenerators).reduce(
  (sum, list) => sum + list.length,
  0
);
