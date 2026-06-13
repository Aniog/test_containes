const categories = [
  {
    slug: 'websites',
    name: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
  },
  {
    slug: 'landing-pages',
    name: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
  },
  {
    slug: 'portfolios',
    name: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
  },
  {
    slug: 'blogs',
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
  },
  {
    slug: 'stores',
    name: 'Online Stores',
    description: 'Sell products online with payments built in.',
  },
  {
    slug: 'link-in-bio',
    name: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
  },
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function makeGenerator(name, category, description) {
  return { name, category, description, slug: slugify(name) };
}

const featuredGenerators = [
  makeGenerator('AI Website Generator', 'Website', 'Describe your business, get a full site.'),
  makeGenerator('Free Portfolio Generator', 'Portfolio', 'For creatives, in minutes, no fee.'),
  makeGenerator('AI Landing Page Maker', 'Landing Page', 'One-page sites built to convert.'),
  makeGenerator('Online Store Builder', 'Store', 'Start selling without writing code.'),
  makeGenerator('Link-in-Bio Generator', 'Link-in-Bio', 'One link for all your channels.'),
  makeGenerator('One-Page Website Builder', 'Website', 'Simple sites, single scroll.'),
  makeGenerator('Wedding Website Generator', 'Website', 'Share your day with guests.'),
  makeGenerator('Restaurant Website Builder', 'Website', 'Menu, hours, reservations, done.'),
  makeGenerator('Blog Generator for Beginners', 'Blog', 'Publish-ready in minutes.'),
];

const allGenerators = {
  websites: [
    makeGenerator('AI Website Generator', 'Website', 'Describe your business, get a full site.'),
    makeGenerator('One-Page Website Builder', 'Website', 'Simple sites, single scroll.'),
    makeGenerator('Wedding Website Generator', 'Website', 'Share your day with guests.'),
    makeGenerator('Restaurant Website Builder', 'Website', 'Menu, hours, reservations, done.'),
    makeGenerator('Free Website Builder for Photographers', 'Website', 'Beautiful galleries for your photos.'),
    makeGenerator('Small Business Website Maker', 'Website', 'A professional site for your business.'),
    makeGenerator('Personal Website Generator', 'Website', 'Your online home in minutes.'),
    makeGenerator('Nonprofit Website Builder', 'Website', 'Share your mission and collect donations.'),
    makeGenerator('Real Estate Website Generator', 'Website', 'List properties with built-in search.'),
    makeGenerator('Church Website Builder', 'Website', 'Sermons, events, and community in one place.'),
    makeGenerator('Event Website Generator', 'Website', 'Promote and manage your next event.'),
    makeGenerator('Educational Website Builder', 'Website', 'Courses, schedules, and resources online.'),
  ],
  'landing-pages': [
    makeGenerator('AI Landing Page Maker', 'Landing Page', 'One-page sites built to convert.'),
    makeGenerator('Product Launch Landing Page', 'Landing Page', 'Build hype and capture emails.'),
    makeGenerator('App Landing Page Generator', 'Landing Page', 'Showcase your app with a download CTA.'),
    makeGenerator('Event Registration Page Builder', 'Landing Page', 'One page for signups and event details.'),
    makeGenerator('Coming Soon Page Generator', 'Landing Page', 'A teaser page with email capture.'),
    makeGenerator('Newsletter Signup Page Builder', 'Landing Page', 'Grow your subscriber list with one page.'),
    makeGenerator('Lead Generation Landing Page', 'Landing Page', 'Capture leads with a focused funnel page.'),
    makeGenerator('Ebook Landing Page Builder', 'Landing Page', 'Promote your free resource and collect emails.'),
    makeGenerator('Webinar Registration Page', 'Landing Page', 'Drive signups for your next webinar.'),
    makeGenerator('Book Launch Landing Page', 'Landing Page', 'A single page for your book release.'),
  ],
  portfolios: [
    makeGenerator('Free Portfolio Generator', 'Portfolio', 'For creatives, in minutes, no fee.'),
    makeGenerator('Photography Portfolio Builder', 'Portfolio', 'Full-screen galleries with client proofing.'),
    makeGenerator('Designer Portfolio Website', 'Portfolio', 'Showcase your best work with style.'),
    makeGenerator('Artist Portfolio Generator', 'Portfolio', 'A clean canvas for your art.'),
    makeGenerator('Model Portfolio Website', 'Portfolio', 'Professional comp card and gallery.'),
    makeGenerator('Writer Portfolio Builder', 'Portfolio', 'Showcase articles, essays, and bylines.'),
    makeGenerator('Developer Portfolio Generator', 'Portfolio', 'Projects, skills, and resume in one place.'),
    makeGenerator('Makeup Artist Portfolio', 'Portfolio', 'Before-and-after galleries that impress.'),
    makeGenerator('Architect Portfolio Website', 'Portfolio', 'Project galleries with clean layouts.'),
    makeGenerator('Videographer Portfolio Builder', 'Portfolio', 'Reels and project highlights front and center.'),
  ],
  blogs: [
    makeGenerator('Blog Generator for Beginners', 'Blog', 'Publish-ready in minutes.'),
    makeGenerator('AI Travel Blog Generator', 'Blog', 'Share your adventures with a beautiful blog.'),
    makeGenerator('Food Blog Website Builder', 'Blog', 'Recipes, photos, and stories in one place.'),
    makeGenerator('Personal Blog Generator', 'Blog', 'A simple, clean blog for your thoughts.'),
    makeGenerator('Fashion Blog Builder', 'Blog', 'Style posts with integrated lookbooks.'),
    makeGenerator('Tech Blog Generator', 'Blog', 'Tutorials and reviews in a clean layout.'),
    makeGenerator('Lifestyle Blog Website', 'Blog', 'Categories, tags, and newsletter built in.'),
    makeGenerator('Parenting Blog Generator', 'Blog', 'Share your journey with a warm design.'),
    makeGenerator('Fitness Blog Builder', 'Blog', 'Workout logs and nutrition tips, blog-ready.'),
    makeGenerator('Business Blog Generator', 'Blog', 'Thought leadership with built-in SEO.'),
  ],
  stores: [
    makeGenerator('Online Store Builder', 'Store', 'Start selling without writing code.'),
    makeGenerator('Clothing Store Website Builder', 'Store', 'Lookbooks, sizes, and checkout built in.'),
    makeGenerator('Handmade Goods Store Generator', 'Store', 'Sell crafts and handmade items online.'),
    makeGenerator('Digital Products Store Builder', 'Store', 'Sell downloads, courses, and digital goods.'),
    makeGenerator('Jewelry Store Website', 'Store', 'Elegant product pages with secure checkout.'),
    makeGenerator('Coffee Shop Online Store', 'Store', 'Sell beans, merch, and subscriptions.'),
    makeGenerator('Print-on-Demand Store Builder', 'Store', 'Design and sell custom merch effortlessly.'),
    makeGenerator('Beauty Products Store Generator', 'Store', 'Skincare and cosmetics with product galleries.'),
    makeGenerator('Home Decor Store Website', 'Store', 'Room-by-room shopping with beautiful layouts.'),
    makeGenerator('Pet Supplies Store Builder', 'Store', 'Products for pets with a fun, friendly design.'),
  ],
  'link-in-bio': [
    makeGenerator('Link-in-Bio Generator', 'Link-in-Bio', 'One link for all your channels.'),
    makeGenerator('Creator Link-in-Bio Page', 'Link-in-Bio', 'All your content, one tap away.'),
    makeGenerator('Instagram Bio Link Builder', 'Link-in-Bio', 'Turn your bio link into a landing page.'),
    makeGenerator('TikTok Creator Bio Page', 'Link-in-Bio', 'Links, videos, and social in one place.'),
    makeGenerator('Musician Link-in-Bio Generator', 'Link-in-Bio', 'Streaming links, tour dates, and merch.'),
    makeGenerator('YouTube Creator Bio Link', 'Link-in-Bio', 'Featured video, playlists, and social links.'),
    makeGenerator('Podcaster Link-in-Bio Page', 'Link-in-Bio', 'Latest episodes and subscribe links.'),
    makeGenerator('Coach Bio Link Builder', 'Link-in-Bio', 'Booking links, testimonials, and services.'),
    makeGenerator('Author Link-in-Bio Generator', 'Link-in-Bio', 'Books, newsletter signup, and events.'),
    makeGenerator('Small Business Bio Link Page', 'Link-in-Bio', 'Hours, location, menu, and contact in one link.'),
  ],
};

export { categories, featuredGenerators, allGenerators };
