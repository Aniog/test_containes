const categories = [
  {
    slug: 'websites',
    name: 'Websites',
    desc: 'AI-built business and personal sites for any goal.',
  },
  {
    slug: 'landing-pages',
    name: 'Landing Pages',
    desc: 'Single-page sites built to convert visitors fast.',
  },
  {
    slug: 'portfolios',
    name: 'Portfolios',
    desc: 'Showcase your work with a clean, focused site.',
  },
  {
    slug: 'blogs',
    name: 'Blogs',
    desc: 'Publish-ready blogs with built-in SEO basics.',
  },
  {
    slug: 'stores',
    name: 'Online Stores',
    desc: 'Sell products online with payments built in.',
  },
  {
    slug: 'link-in-bio',
    name: 'Link-in-Bio',
    desc: 'One link, all your places. Made for creators.',
  },
];

const featured = [
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

const allGenerators = {
  websites: [
    { name: 'AI Website Generator', desc: 'Describe your business and get a full site in seconds', slug: 'ai-website-generator' },
    { name: 'One-Page Website Builder', desc: 'Simple, elegant single-scroll sites', slug: 'one-page-website-builder' },
    { name: 'Free Website Builder for Photographers', desc: 'Portfolio-ready sites for visual artists', slug: 'free-website-builder-for-photographers' },
    { name: 'Beautiful Website Builder for Small Business', desc: 'Professional sites without the agency price tag', slug: 'beautiful-website-builder-for-small-business' },
    { name: 'No-Code Website Maker', desc: 'Build without touching a line of code', slug: 'no-code-website-maker' },
    { name: 'Free Website Generator for Nonprofits', desc: 'Cause-driven sites with donation integration', slug: 'free-website-generator-for-nonprofits' },
    { name: 'Wedding Website Generator', desc: 'Share your day with guests beautifully', slug: 'wedding-website-generator' },
    { name: 'Restaurant Website Builder', desc: 'Menu, hours, and reservations built in', slug: 'restaurant-website-builder' },
    { name: 'Personal Website Generator', desc: 'A home online for your ideas and projects', slug: 'personal-website-generator' },
    { name: 'Church Website Builder', desc: 'Sermons, events, and community in one place', slug: 'church-website-builder' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', desc: 'One-page sites optimized for conversion', slug: 'ai-landing-page-maker' },
    { name: 'Landing Page Generator for Startups', desc: 'Launch-ready pages for early-stage products', slug: 'landing-page-generator-for-startups' },
    { name: 'Free Landing Page Builder', desc: 'High-converting pages at no cost', slug: 'free-landing-page-builder' },
    { name: 'Coming Soon Page Generator', desc: 'Build hype before you launch', slug: 'coming-soon-page-generator' },
    { name: 'SaaS Landing Page Builder', desc: 'Product pages that explain and convert', slug: 'saas-landing-page-builder' },
    { name: 'Event Landing Page Generator', desc: 'Registration pages for conferences and meetups', slug: 'event-landing-page-generator' },
    { name: 'Real Estate Landing Page Builder', desc: 'Property pages that drive inquiries', slug: 'real-estate-landing-page-builder' },
    { name: 'Lead Generation Page Maker', desc: 'Capture emails and grow your list', slug: 'lead-generation-page-maker' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
    { name: 'Portfolio Generator for Designers', desc: 'Showcase your best work with style', slug: 'portfolio-generator-for-designers' },
    { name: 'Photography Portfolio Builder', desc: 'Full-screen galleries for visual storytellers', slug: 'photography-portfolio-builder' },
    { name: 'Writer Portfolio Website Generator', desc: 'Clean typography-first layouts for words', slug: 'writer-portfolio-website-generator' },
    { name: 'Artist Portfolio Maker', desc: 'Let your art take center stage', slug: 'artist-portfolio-maker' },
    { name: 'Model Portfolio Website Builder', desc: 'Professional comp cards and galleries', slug: 'model-portfolio-website-builder' },
    { name: 'Architecture Portfolio Generator', desc: 'Project pages with clean, structured layouts', slug: 'architecture-portfolio-generator' },
    { name: 'Makeup Artist Portfolio Site', desc: 'Before-and-after galleries that impress', slug: 'makeup-artist-portfolio-site' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
    { name: 'Free Blog Website Builder', desc: 'Start writing without spending a dime', slug: 'free-blog-website-builder' },
    { name: 'AI Blog Site Maker', desc: 'Auto-generated structure with SEO baked in', slug: 'ai-blog-site-maker' },
    { name: 'Travel Blog Generator', desc: 'Photo-rich layouts for your adventures', slug: 'travel-blog-generator' },
    { name: 'Food Blog Website Builder', desc: 'Recipe cards, galleries, and storytelling', slug: 'food-blog-website-builder' },
    { name: 'Personal Blog Maker', desc: 'A simple space for your thoughts', slug: 'personal-blog-maker' },
    { name: 'News Blog Generator', desc: 'Multi-author, category-driven layouts', slug: 'news-blog-generator' },
    { name: 'Fashion Blog Website Builder', desc: 'Lookbook-style layouts for style bloggers', slug: 'fashion-blog-website-builder' },
  ],
  stores: [
    { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
    { name: 'Free Ecommerce Website Generator', desc: 'Open shop with zero upfront cost', slug: 'free-ecommerce-website-generator' },
    { name: 'Online Store Builder for Restaurants', desc: 'Take orders and reservations online', slug: 'online-store-builder-for-restaurants' },
    { name: 'Clothing Store Website Maker', desc: 'Lookbooks, size guides, and checkout', slug: 'clothing-store-website-maker' },
    { name: 'Digital Products Store Generator', desc: 'Sell downloads, courses, and memberships', slug: 'digital-products-store-generator' },
    { name: 'Handmade Goods Shop Builder', desc: 'Craft-focused storefronts for makers', slug: 'handmade-goods-shop-builder' },
    { name: 'Jewelry Store Website Generator', desc: 'Elegant product displays with secure checkout', slug: 'jewelry-store-website-generator' },
    { name: 'Beauty Products Store Builder', desc: 'Skincare and cosmetics, beautifully presented', slug: 'beauty-products-store-builder' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
    { name: 'Free Link-in-Bio Maker', desc: 'No-cost hub for your social presence', slug: 'free-link-in-bio-maker' },
    { name: 'Instagram Bio Link Builder', desc: 'Turn your IG bio into a full landing page', slug: 'instagram-bio-link-builder' },
    { name: 'Creator Link-in-Bio Generator', desc: 'Built for YouTubers, TikTokers, and streamers', slug: 'creator-link-in-bio-generator' },
    { name: 'Musician Bio Link Page', desc: 'Music, tour dates, and merch in one link', slug: 'musician-bio-link-page' },
    { name: 'Podcaster Link Page Builder', desc: 'Episodes, show notes, and subscribe links', slug: 'podcaster-link-page-builder' },
    { name: 'Business Bio Link Generator', desc: 'Professional micro-site for your bio link', slug: 'business-bio-link-generator' },
    { name: 'TikTok Bio Link Maker', desc: 'Optimized mobile pages for TikTok traffic', slug: 'tiktok-bio-link-maker' },
  ],
};

export { categories, featured, allGenerators };
