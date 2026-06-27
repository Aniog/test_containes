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
].map((g) => ({ ...g, slug: slugify(g.name) }));

export const allGenerators = {
  websites: [
    { name: 'AI Website Generator', description: 'Describe your business and get a complete site in seconds.' },
    { name: 'One-Page Website Builder', description: 'Simple, single-scroll sites for any purpose.' },
    { name: 'Free Website Builder for Photographers', description: 'Showcase your photos with a stunning gallery site.' },
    { name: 'Wedding Website Generator', description: 'Share your story, RSVP, and event details with guests.' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, location, and reservations in one place.' },
    { name: 'Small Business Website Generator', description: 'Professional sites for local and online businesses.' },
    { name: 'AI Website Builder for Consultants', description: 'Establish credibility and book clients online.' },
    { name: 'Nonprofit Website Generator', description: 'Share your mission and accept donations easily.' },
    { name: 'Yoga Instructor Website Builder', description: 'Class schedules, booking, and your teaching philosophy.' },
    { name: 'Real Estate Agent Website Generator', description: 'Listings, contact forms, and neighborhood guides.' },
    { name: 'Freelancer Website Builder', description: 'Show your skills, services, and past work.' },
    { name: 'Church Website Generator', description: 'Service times, events, and community updates.' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', description: 'High-converting single pages built by AI.' },
    { name: 'Product Launch Landing Page', description: 'Build hype and collect signups before launch day.' },
    { name: 'Event Landing Page Generator', description: 'Promote events with RSVP and countdown timers.' },
    { name: 'App Landing Page Builder', description: 'Showcase your mobile app with download links.' },
    { name: 'Free Landing Page Generator', description: 'No-cost landing pages for any campaign.' },
    { name: 'SaaS Landing Page Builder', description: 'Feature highlights, pricing, and signup forms.' },
    { name: 'Webinar Landing Page Generator', description: 'Register attendees and share session details.' },
    { name: 'Coming Soon Page Builder', description: 'Tease your project and grow your email list.' },
    { name: 'Lead Generation Landing Page', description: 'Capture leads with focused, distraction-free pages.' },
    { name: 'No-Code Landing Page Maker', description: 'Beautiful pages without touching a line of code.' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', description: 'A clean portfolio site at no cost.' },
    { name: 'Portfolio Generator for Designers', description: 'Visual-first layouts for graphic and UI designers.' },
    { name: 'Photography Portfolio Builder', description: 'Full-bleed galleries that let your images shine.' },
    { name: 'Artist Portfolio Generator', description: 'Showcase paintings, sculptures, and mixed media.' },
    { name: 'Developer Portfolio Builder', description: 'Highlight projects, GitHub links, and tech stacks.' },
    { name: 'Architecture Portfolio Generator', description: 'Present buildings and plans with elegant layouts.' },
    { name: 'Video Portfolio Builder', description: 'Embed reels and showreels in a cinematic layout.' },
    { name: 'Student Portfolio Generator', description: 'Stand out to employers with your best academic work.' },
    { name: 'Illustration Portfolio Builder', description: 'Colorful grids for illustrators and comic artists.' },
    { name: 'AI Portfolio Maker', description: 'Let AI arrange your work into a polished showcase.' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', description: 'Start publishing with zero technical knowledge.' },
    { name: 'AI Blog Builder', description: 'AI writes your first posts and structures your blog.' },
    { name: 'Personal Blog Generator', description: 'Share stories, thoughts, and life updates.' },
    { name: 'Travel Blog Builder', description: 'Document trips with maps, photos, and itineraries.' },
    { name: 'Food Blog Generator', description: 'Recipes, reviews, and beautiful food photography.' },
    { name: 'Tech Blog Builder', description: 'Tutorials, reviews, and industry commentary.' },
    { name: 'Fashion Blog Generator', description: 'Outfit posts, lookbooks, and style guides.' },
    { name: 'Fitness Blog Builder', description: 'Workout plans, nutrition tips, and progress tracking.' },
    { name: 'Free Blog Maker', description: 'Publish-ready blogs without spending a dime.' },
    { name: 'SEO Blog Generator', description: 'Blogs structured for search engine visibility.' },
  ],
  stores: [
    { name: 'Online Store Builder', description: 'Start selling products online today.' },
    { name: 'AI E-commerce Generator', description: 'AI builds your store from a product description.' },
    { name: 'Free Online Store Maker', description: 'Launch a shop without upfront costs.' },
    { name: 'Clothing Store Builder', description: 'Fashion storefronts with size guides and lookbooks.' },
    { name: 'Digital Products Store Generator', description: 'Sell ebooks, courses, and downloads.' },
    { name: 'Handmade Goods Store Builder', description: 'For artisans, crafters, and makers.' },
    { name: 'Online Store Builder for Restaurants', description: 'Menus, ordering, and delivery options.' },
    { name: 'Jewelry Store Generator', description: 'Elegant product pages for fine accessories.' },
    { name: 'Print-on-Demand Store Builder', description: 'Custom merch without inventory headaches.' },
    { name: 'One-Product Store Generator', description: 'Focused stores for a single hero product.' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels and content.' },
    { name: 'Free Link-in-Bio Maker', description: 'A beautiful link page at no cost.' },
    { name: 'Link-in-Bio for Musicians', description: 'Streaming links, tour dates, and merch.' },
    { name: 'Creator Link Page Builder', description: 'Videos, socials, and sponsorship info in one place.' },
    { name: 'AI Link-in-Bio Generator', description: 'AI arranges your links into a polished page.' },
    { name: 'Link-in-Bio for Podcasters', description: 'Episodes, subscribe links, and show notes.' },
    { name: 'Influencer Link Page Maker', description: 'Brand deals, content, and contact info.' },
    { name: 'Link-in-Bio for Artists', description: 'Gallery, shop, and social links unified.' },
    { name: 'No-Code Link Page Builder', description: 'Drag, drop, publish. No technical skills needed.' },
    { name: 'Link-in-Bio for Small Business', description: 'Hours, location, booking, and social links.' },
  ],
};

// Add slugs to all generators
Object.keys(allGenerators).forEach((cat) => {
  allGenerators[cat] = allGenerators[cat].map((g) => ({
    ...g,
    slug: slugify(g.name),
    categoryId: cat,
  }));
});
