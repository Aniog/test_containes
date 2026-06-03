

const featuredGenerators = [
  {
    slug: 'ai-website-generator',
    name: 'AI Website Generator',
    description: 'Describe your business, get a full site',
    category: 'Website',
  },
  {
    slug: 'free-portfolio-generator',
    name: 'Free Portfolio Generator',
    description: 'For creatives, in minutes, no fee',
    category: 'Portfolio',
  },
  {
    slug: 'ai-landing-page-maker',
    name: 'AI Landing Page Maker',
    description: 'One-page sites built to convert',
    category: 'Landing Page',
  },
  {
    slug: 'online-store-builder',
    name: 'Online Store Builder',
    description: 'Start selling without writing code',
    category: 'Store',
  },
  {
    slug: 'link-in-bio-generator',
    name: 'Link-in-Bio Generator',
    description: 'One link for all your channels',
    category: 'Link-in-Bio',
  },
  {
    slug: 'one-page-website-builder',
    name: 'One-Page Website Builder',
    description: 'Simple sites, single scroll',
    category: 'Website',
  },
  {
    slug: 'wedding-website-generator',
    name: 'Wedding Website Generator',
    description: 'Share your day with guests',
    category: 'Website',
  },
  {
    slug: 'restaurant-website-builder',
    name: 'Restaurant Website Builder',
    description: 'Menu, hours, reservations, done',
    category: 'Website',
  },
  {
    slug: 'blog-generator-for-beginners',
    name: 'Blog Generator for Beginners',
    description: 'Publish-ready in minutes',
    category: 'Blog',
  },
];

const allGenerators = {
  websites: [
    { slug: 'ai-website-generator', name: 'AI Website Generator', description: 'Describe your business, get a full site' },
    { slug: 'free-website-builder', name: 'Free Website Builder', description: 'Build a professional site at no cost' },
    { slug: 'one-page-website-builder', name: 'One-Page Website Builder', description: 'Simple sites, single scroll' },
    { slug: 'wedding-website-generator', name: 'Wedding Website Generator', description: 'Share your day with guests' },
    { slug: 'restaurant-website-builder', name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done' },
    { slug: 'photography-website-builder', name: 'Photography Website Builder', description: 'Showcase your portfolio beautifully' },
    { slug: 'small-business-website-builder', name: 'Small Business Website Builder', description: 'Get your business online today' },
    { slug: 'personal-website-generator', name: 'Personal Website Generator', description: 'Your online home, built by AI' },
    { slug: 'nonprofit-website-builder', name: 'Nonprofit Website Builder', description: 'Share your mission with the world' },
    { slug: 'real-estate-website-builder', name: 'Real Estate Website Builder', description: 'Listings, tours, and lead capture' },
  ],
  'landing-pages': [
    { slug: 'ai-landing-page-maker', name: 'AI Landing Page Maker', description: 'One-page sites built to convert' },
    { slug: 'free-landing-page-builder', name: 'Free Landing Page Builder', description: 'Launch a campaign page at no cost' },
    { slug: 'product-launch-page-generator', name: 'Product Launch Page Generator', description: 'Build hype for your next release' },
    { slug: 'event-landing-page-builder', name: 'Event Landing Page Builder', description: 'RSVPs and details in one place' },
    { slug: 'lead-generation-page-builder', name: 'Lead Generation Page Builder', description: 'Capture emails and grow your list' },
    { slug: 'sales-page-generator', name: 'Sales Page Generator', description: 'Convert visitors into customers' },
    { slug: 'coming-soon-page-builder', name: 'Coming Soon Page Builder', description: 'Tease your launch with style' },
    { slug: 'squeeze-page-generator', name: 'Squeeze Page Generator', description: 'Focused pages for one clear action' },
  ],
  portfolios: [
    { slug: 'free-portfolio-generator', name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee' },
    { slug: 'designer-portfolio-builder', name: 'Designer Portfolio Builder', description: 'Showcase your best work' },
    { slug: 'photographer-portfolio-generator', name: 'Photographer Portfolio Generator', description: 'Beautiful galleries for your photos' },
    { slug: 'artist-portfolio-website-builder', name: 'Artist Portfolio Website Builder', description: 'Display your art the way it deserves' },
    { slug: 'writer-portfolio-generator', name: 'Writer Portfolio Generator', description: 'Share your articles and bylines' },
    { slug: 'model-portfolio-builder', name: 'Model Portfolio Builder', description: 'A professional lookbook online' },
    { slug: 'architect-portfolio-generator', name: 'Architect Portfolio Generator', description: 'Present projects with impact' },
    { slug: 'makeup-artist-portfolio-builder', name: 'Makeup Artist Portfolio Builder', description: 'Before-and-after galleries made easy' },
    { slug: 'videographer-portfolio-generator', name: 'Videographer Portfolio Generator', description: 'Show reels and project highlights' },
  ],
  blogs: [
    { slug: 'blog-generator-for-beginners', name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes' },
    { slug: 'ai-blog-builder', name: 'AI Blog Builder', description: 'Start writing with AI-powered setup' },
    { slug: 'travel-blog-generator', name: 'Travel Blog Generator', description: 'Share your adventures beautifully' },
    { slug: 'food-blog-builder', name: 'Food Blog Builder', description: 'Recipes and stories, ready to publish' },
    { slug: 'fashion-blog-generator', name: 'Fashion Blog Generator', description: 'Style posts with a polished look' },
    { slug: 'tech-blog-builder', name: 'Tech Blog Builder', description: 'Code snippets and tutorials, formatted right' },
    { slug: 'personal-blog-generator', name: 'Personal Blog Generator', description: 'Your thoughts, your space' },
    { slug: 'news-blog-builder', name: 'News Blog Builder', description: 'Timely updates with a clean layout' },
  ],
  stores: [
    { slug: 'online-store-builder', name: 'Online Store Builder', description: 'Start selling without writing code' },
    { slug: 'restaurant-online-store-builder', name: 'Restaurant Online Store Builder', description: 'Take orders directly from your site' },
    { slug: 'clothing-store-generator', name: 'Clothing Store Generator', description: 'Fashion ecommerce, set up fast' },
    { slug: 'digital-products-store-builder', name: 'Digital Products Store Builder', description: 'Sell ebooks, courses, and downloads' },
    { slug: 'handmade-goods-store-generator', name: 'Handmade Goods Store Generator', description: 'Crafts and creations, online' },
    { slug: 'beauty-products-store-builder', name: 'Beauty Products Store Builder', description: 'Skincare and cosmetics, ready to sell' },
    { slug: 'furniture-store-generator', name: 'Furniture Store Generator', description: 'Showroom online, orders built in' },
    { slug: 'bookstore-website-builder', name: 'Bookstore Website Builder', description: 'Sell books with a curated storefront' },
    { slug: 'subscription-box-store-builder', name: 'Subscription Box Store Builder', description: 'Recurring orders, managed simply' },
  ],
  'link-in-bio': [
    { slug: 'link-in-bio-generator', name: 'Link-in-Bio Generator', description: 'One link for all your channels' },
    { slug: 'creator-link-in-bio-builder', name: 'Creator Link-in-Bio Builder', description: 'All your content, one tap away' },
    { slug: 'musician-link-in-bio-generator', name: 'Musician Link-in-Bio Generator', description: 'Music, tour dates, and merch links' },
    { slug: 'influencer-link-in-bio-builder', name: 'Influencer Link-in-Bio Builder', description: 'Brand deals and social links, organized' },
    { slug: 'coach-link-in-bio-generator', name: 'Coach Link-in-Bio Generator', description: 'Booking links and testimonials in one place' },
    { slug: 'podcaster-link-in-bio-builder', name: 'Podcaster Link-in-Bio Builder', description: 'Episodes, show notes, and subscribe links' },
    { slug: 'freelancer-link-in-bio-generator', name: 'Freelancer Link-in-Bio Generator', description: 'Portfolio, rates, and contact, together' },
    { slug: 'youtuber-link-in-bio-builder', name: 'YouTuber Link-in-Bio Builder', description: 'Videos, merch, and socials in one link' },
  ],
};

const categoryMeta = {
  websites: {
    name: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
  },
  'landing-pages': {
    name: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
  },
  portfolios: {
    name: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
  },
  blogs: {
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
  },
  stores: {
    name: 'Online Stores',
    description: 'Sell products online with payments built in.',
  },
  'link-in-bio': {
    name: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
  },
};

export { featuredGenerators, allGenerators, categoryMeta };

