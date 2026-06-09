// Featured generators (9 tiles, mixed categories)
export const featuredGenerators = [
  { name: 'AI Website Generator', slug: 'ai-website-generator', desc: 'Describe your business, get a full site.', category: 'Website' },
  { name: 'Free Portfolio Generator', slug: 'free-portfolio-generator', desc: 'For creatives, in minutes, no fee.', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', slug: 'ai-landing-page-maker', desc: 'One-page sites built to convert.', category: 'Landing Page' },
  { name: 'Online Store Builder', slug: 'online-store-builder', desc: 'Start selling without writing code.', category: 'Store' },
  { name: 'Link-in-Bio Generator', slug: 'link-in-bio-generator', desc: 'One link for all your channels.', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', slug: 'one-page-website-builder', desc: 'Simple sites, single scroll.', category: 'Website' },
  { name: 'Wedding Website Generator', slug: 'wedding-website-generator', desc: 'Share your day with guests.', category: 'Website' },
  { name: 'Restaurant Website Builder', slug: 'restaurant-website-builder', desc: 'Menu, hours, reservations, done.', category: 'Website' },
  { name: 'Blog Generator for Beginners', slug: 'blog-generator-for-beginners', desc: 'Publish-ready in minutes.', category: 'Blog' },
];

// Full directory by category
export const allGenerators = {
  websites: {
    heading: 'Website Generators',
    desc: 'AI-built business and personal sites for any goal.',
    items: [
      { name: 'AI Website Generator', slug: 'ai-website-generator', desc: 'Describe your business, get a full site.' },
      { name: 'Free Website Builder', slug: 'free-website-builder', desc: 'Build a complete site at no cost.' },
      { name: 'One-Page Website Builder', slug: 'one-page-website-builder', desc: 'Simple sites, single scroll.' },
      { name: 'Small Business Website Generator', slug: 'small-business-website-generator', desc: 'A professional site for your local business.' },
      { name: 'Wedding Website Generator', slug: 'wedding-website-generator', desc: 'Share your day with guests.' },
      { name: 'Restaurant Website Builder', slug: 'restaurant-website-builder', desc: 'Menu, hours, reservations, done.' },
      { name: 'Photography Website Generator', slug: 'photography-website-generator', desc: 'Showcase your portfolio beautifully.' },
      { name: 'Real Estate Website Builder', slug: 'real-estate-website-builder', desc: 'Listings and lead capture built in.' },
      { name: 'Fitness Website Generator', slug: 'fitness-website-generator', desc: 'Sell classes and showcase your brand.' },
      { name: 'Nonprofit Website Builder', slug: 'nonprofit-website-builder', desc: 'Collect donations and share your mission.' },
      { name: 'Beauty Salon Website Generator', slug: 'beauty-salon-website-generator', desc: 'Bookings and services in one place.' },
      { name: 'Consulting Website Builder', slug: 'consulting-website-builder', desc: 'Look professional and win clients.' },
    ],
  },
  'landing-pages': {
    heading: 'Landing Page Generators',
    desc: 'Single-page sites built to convert visitors fast.',
    items: [
      { name: 'AI Landing Page Maker', slug: 'ai-landing-page-maker', desc: 'One-page sites built to convert.' },
      { name: 'Product Launch Page Generator', slug: 'product-launch-page-generator', desc: 'Build hype for your next release.' },
      { name: 'Event Landing Page Builder', slug: 'event-landing-page-builder', desc: 'RSVPs and details, done fast.' },
      { name: 'App Landing Page Generator', slug: 'app-landing-page-generator', desc: 'Showcase your app and drive downloads.' },
      { name: 'Coming Soon Page Builder', slug: 'coming-soon-page-builder', desc: 'Collect emails before you launch.' },
      { name: 'SaaS Landing Page Generator', slug: 'saas-landing-page-generator', desc: 'Sell your software with a crisp page.' },
      { name: 'Lead Capture Page Generator', slug: 'lead-capture-page-generator', desc: 'Grow your list with a focused page.' },
      { name: 'Course Landing Page Builder', slug: 'course-landing-page-builder', desc: 'Sell your online course in minutes.' },
      { name: 'Book Launch Page Generator', slug: 'book-launch-page-generator', desc: 'Promote your book with style.' },
    ],
  },
  portfolios: {
    heading: 'Portfolio Generators',
    desc: 'Showcase your work with a clean, focused site.',
    items: [
      { name: 'Free Portfolio Generator', slug: 'free-portfolio-generator', desc: 'For creatives, in minutes, no fee.' },
      { name: 'Photography Portfolio Builder', slug: 'photography-portfolio-builder', desc: 'Your best shots, beautifully displayed.' },
      { name: 'Designer Portfolio Generator', slug: 'designer-portfolio-generator', desc: 'Show your work and land clients.' },
      { name: 'Artist Portfolio Website', slug: 'artist-portfolio-website', desc: 'A gallery site for your creations.' },
      { name: 'Writer Portfolio Builder', slug: 'writer-portfolio-builder', desc: 'Articles, books, and bylines in one place.' },
      { name: 'Model Portfolio Generator', slug: 'model-portfolio-generator', desc: 'Professional comp cards and reels.' },
      { name: 'Architecture Portfolio Builder', slug: 'architecture-portfolio-builder', desc: 'Projects, plans, and your vision.' },
      { name: 'Videographer Portfolio Site', slug: 'videographer-portfolio-site', desc: 'Reels and projects, front and center.' },
      { name: 'Makeup Artist Portfolio', slug: 'makeup-artist-portfolio', desc: 'Before, after, and booking info.' },
    ],
  },
  blogs: {
    heading: 'Blog Generators',
    desc: 'Publish-ready blogs with built-in SEO basics.',
    items: [
      { name: 'Blog Generator for Beginners', slug: 'blog-generator-for-beginners', desc: 'Publish-ready in minutes.' },
      { name: 'AI Blog Builder', slug: 'ai-blog-builder', desc: 'A smart blog with SEO built in.' },
      { name: 'Personal Blog Generator', slug: 'personal-blog-generator', desc: 'Share your thoughts with the world.' },
      { name: 'Food Blog Builder', slug: 'food-blog-builder', desc: 'Recipes, photos, and stories.' },
      { name: 'Travel Blog Generator', slug: 'travel-blog-generator', desc: 'Document your adventures beautifully.' },
      { name: 'Tech Blog Builder', slug: 'tech-blog-builder', desc: 'Tutorials, reviews, and insights.' },
      { name: 'Fashion Blog Generator', slug: 'fashion-blog-generator', desc: 'Style posts with a chic layout.' },
      { name: 'Business Blog Builder', slug: 'business-blog-builder', desc: 'Content marketing made simple.' },
      { name: 'Lifestyle Blog Generator', slug: 'lifestyle-blog-generator', desc: 'A home for all your topics.' },
      { name: 'News Blog Builder', slug: 'news-blog-builder', desc: 'Timely content in a clean format.' },
    ],
  },
  stores: {
    heading: 'Online Store Generators',
    desc: 'Sell products online with payments built in.',
    items: [
      { name: 'Online Store Builder', slug: 'online-store-builder', desc: 'Start selling without writing code.' },
      { name: 'Clothing Store Generator', slug: 'clothing-store-generator', desc: 'Fashion ecommerce, up and running fast.' },
      { name: 'Jewelry Store Builder', slug: 'jewelry-store-builder', desc: 'Showcase your collection beautifully.' },
      { name: 'Digital Products Store', slug: 'digital-products-store', desc: 'Sell downloads, templates, and courses.' },
      { name: 'Handmade Goods Store', slug: 'handmade-goods-store', desc: 'Your crafts deserve a proper shop.' },
      { name: 'Bookstore Builder', slug: 'bookstore-builder', desc: 'List your catalog and start selling.' },
      { name: 'Art Print Store Generator', slug: 'art-print-store-generator', desc: 'Sell prints and originals online.' },
      { name: 'Food Delivery Store Builder', slug: 'food-delivery-store-builder', desc: 'Menus, orders, and delivery setup.' },
      { name: 'Subscription Box Store', slug: 'subscription-box-store', desc: 'Recurring revenue with style.' },
      { name: 'Pet Supplies Store', slug: 'pet-supplies-store', desc: 'Treats, toys, and gear, all online.' },
    ],
  },
  'link-in-bio': {
    heading: 'Link-in-Bio Generators',
    desc: 'One link, all your places. Made for creators.',
    items: [
      { name: 'Link-in-Bio Generator', slug: 'link-in-bio-generator', desc: 'One link for all your channels.' },
      { name: 'Creator Link-in-Bio', slug: 'creator-link-in-bio', desc: 'All your content in one tap.' },
      { name: 'Instagram Bio Link Builder', slug: 'instagram-bio-link-builder', desc: 'Perfect for your Instagram profile.' },
      { name: 'TikTok Bio Link Generator', slug: 'tiktok-bio-link-generator', desc: 'Drive followers to all your places.' },
      { name: 'Podcaster Link-in-Bio', slug: 'podcaster-link-in-bio', desc: 'Episodes, socials, and merch.' },
      { name: 'Musician Link-in-Bio', slug: 'musician-link-in-bio', desc: 'Streaming links and tour dates.' },
      { name: 'YouTuber Link Page', slug: 'youtuber-link-page', desc: 'Videos, socials, and sponsors.' },
      { name: 'Freelancer Link-in-Bio', slug: 'freelancer-link-in-bio', desc: 'Portfolio, rates, and contact.' },
      { name: 'Agency Link-in-Bio', slug: 'agency-link-in-bio', desc: 'Clients, case studies, one tap.' },
    ],
  },
};

// Category slug helpers
export const categorySlugs = ['websites', 'landing-pages', 'portfolios', 'blogs', 'stores', 'link-in-bio'];

// Build flat list for search
export const flatGenerators = categorySlugs.flatMap((slug) =>
  allGenerators[slug].items.map((item) => ({
    ...item,
    category: slug,
    categoryName: allGenerators[slug].heading.replace(' Generators', '').replace(' Generator', ''),
  }))
);
