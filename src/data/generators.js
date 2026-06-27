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

const allGenerators = [
  // Websites
  {
    slug: 'ai-website-generator',
    name: 'AI Website Generator',
    description: 'Describe your business, get a full site',
    category: 'Websites',
  },
  {
    slug: 'free-website-builder',
    name: 'Free Website Builder',
    description: 'Build a complete site at no cost',
    category: 'Websites',
  },
  {
    slug: 'website-builder-for-photographers',
    name: 'Website Builder for Photographers',
    description: 'Portfolio sites that showcase your best work',
    category: 'Websites',
  },
  {
    slug: 'restaurant-website-builder',
    name: 'Restaurant Website Builder',
    description: 'Menu, hours, reservations, done',
    category: 'Websites',
  },
  {
    slug: 'wedding-website-generator',
    name: 'Wedding Website Generator',
    description: 'Share your day with guests',
    category: 'Websites',
  },
  {
    slug: 'one-page-website-builder',
    name: 'One-Page Website Builder',
    description: 'Simple sites, single scroll',
    category: 'Websites',
  },
  {
    slug: 'business-website-builder',
    name: 'Business Website Builder',
    description: 'Professional sites for any business',
    category: 'Websites',
  },
  {
    slug: 'personal-website-generator',
    name: 'Personal Website Generator',
    description: 'Your online home, built by AI',
    category: 'Websites',
  },
  {
    slug: 'ai-website-builder-for-small-business',
    name: 'AI Website Builder for Small Business',
    description: 'Get found online with an AI-built site',
    category: 'Websites',
  },
  {
    slug: 'website-builder-for-coaches',
    name: 'Website Builder for Coaches',
    description: 'Landing pages and booking, built fast',
    category: 'Websites',
  },
  {
    slug: 'website-generator-for-artists',
    name: 'Website Generator for Artists',
    description: 'Show your art in a beautiful gallery',
    category: 'Websites',
  },
  {
    slug: 'church-website-builder',
    name: 'Church Website Builder',
    description: 'Service times, events, and community pages',
    category: 'Websites',
  },

  // Landing Pages
  {
    slug: 'ai-landing-page-maker',
    name: 'AI Landing Page Maker',
    description: 'One-page sites built to convert',
    category: 'Landing Pages',
  },
  {
    slug: 'free-landing-page-builder',
    name: 'Free Landing Page Builder',
    description: 'Create high-converting pages for free',
    category: 'Landing Pages',
  },
  {
    slug: 'product-launch-landing-page',
    name: 'Product Launch Landing Page',
    description: 'Build hype before your launch day',
    category: 'Landing Pages',
  },
  {
    slug: 'event-landing-page-generator',
    name: 'Event Landing Page Generator',
    description: 'Registration and details in one scroll',
    category: 'Landing Pages',
  },
  {
    slug: 'lead-gen-landing-page-builder',
    name: 'Lead Gen Landing Page Builder',
    description: 'Capture emails and grow your list',
    category: 'Landing Pages',
  },
  {
    slug: 'sales-landing-page-generator',
    name: 'Sales Landing Page Generator',
    description: 'One page that closes the deal',
    category: 'Landing Pages',
  },
  {
    slug: 'app-landing-page-builder',
    name: 'App Landing Page Builder',
    description: 'Showcase your app and drive downloads',
    category: 'Landing Pages',
  },
  {
    slug: 'coming-soon-page-generator',
    name: 'Coming Soon Page Generator',
    description: 'A teaser page while you build',
    category: 'Landing Pages',
  },
  {
    slug: 'course-landing-page-builder',
    name: 'Course Landing Page Builder',
    description: 'Sell your online course with one page',
    category: 'Landing Pages',
  },
  {
    slug: 'ebook-landing-page-generator',
    name: 'eBook Landing Page Generator',
    description: 'Promote and deliver your digital book',
    category: 'Landing Pages',
  },

  // Portfolios
  {
    slug: 'free-portfolio-generator',
    name: 'Free Portfolio Generator',
    description: 'For creatives, in minutes, no fee',
    category: 'Portfolios',
  },
  {
    slug: 'portfolio-generator-for-designers',
    name: 'Portfolio Generator for Designers',
    description: 'Clean layouts that let your work speak',
    category: 'Portfolios',
  },
  {
    slug: 'photography-portfolio-builder',
    name: 'Photography Portfolio Builder',
    description: 'Full-screen galleries for your images',
    category: 'Portfolios',
  },
  {
    slug: 'writing-portfolio-generator',
    name: 'Writing Portfolio Generator',
    description: 'Showcase articles, essays, and clips',
    category: 'Portfolios',
  },
  {
    slug: 'developer-portfolio-builder',
    name: 'Developer Portfolio Builder',
    description: 'Projects, skills, and GitHub links',
    category: 'Portfolios',
  },
  {
    slug: 'model-portfolio-website',
    name: 'Model Portfolio Website',
    description: 'A lookbook site built in minutes',
    category: 'Portfolios',
  },
  {
    slug: 'architecture-portfolio-generator',
    name: 'Architecture Portfolio Generator',
    description: 'Project pages with large visuals',
    category: 'Portfolios',
  },
  {
    slug: 'makeup-artist-portfolio',
    name: 'Makeup Artist Portfolio',
    description: 'Before-and-after galleries included',
    category: 'Portfolios',
  },
  {
    slug: 'videography-portfolio-builder',
    name: 'Videography Portfolio Builder',
    description: 'Show reels and project breakdowns',
    category: 'Portfolios',
  },
  {
    slug: 'ui-ux-portfolio-generator',
    name: 'UI/UX Portfolio Generator',
    description: 'Case study layouts for design work',
    category: 'Portfolios',
  },

  // Blogs
  {
    slug: 'blog-generator-for-beginners',
    name: 'Blog Generator for Beginners',
    description: 'Publish-ready in minutes',
    category: 'Blogs',
  },
  {
    slug: 'ai-blog-builder',
    name: 'AI Blog Builder',
    description: 'Start with AI-written posts and SEO',
    category: 'Blogs',
  },
  {
    slug: 'travel-blog-generator',
    name: 'Travel Blog Generator',
    description: 'Maps, galleries, and story layouts',
    category: 'Blogs',
  },
  {
    slug: 'food-blog-builder',
    name: 'Food Blog Builder',
    description: 'Recipe cards and photo-rich layouts',
    category: 'Blogs',
  },
  {
    slug: 'personal-blog-generator',
    name: 'Personal Blog Generator',
    description: 'A journal-style site for your thoughts',
    category: 'Blogs',
  },
  {
    slug: 'lifestyle-blog-website',
    name: 'Lifestyle Blog Website',
    description: 'Fashion, wellness, and daily inspiration',
    category: 'Blogs',
  },
  {
    slug: 'news-blog-builder',
    name: 'News Blog Builder',
    description: 'Article-first layouts for timely content',
    category: 'Blogs',
  },
  {
    slug: 'tech-blog-generator',
    name: 'Tech Blog Generator',
    description: 'Code snippets and tutorial layouts',
    category: 'Blogs',
  },

  // Online Stores
  {
    slug: 'online-store-builder',
    name: 'Online Store Builder',
    description: 'Start selling without writing code',
    category: 'Online Stores',
  },
  {
    slug: 'ecommerce-website-generator',
    name: 'Ecommerce Website Generator',
    description: 'A full store, generated by AI',
    category: 'Online Stores',
  },
  {
    slug: 'store-builder-for-restaurants',
    name: 'Online Store Builder for Restaurants',
    description: 'Online ordering and menu management',
    category: 'Online Stores',
  },
  {
    slug: 'clothing-store-website',
    name: 'Clothing Store Website',
    description: 'Lookbooks, sizes, and checkout ready',
    category: 'Online Stores',
  },
  {
    slug: 'handmade-goods-store-builder',
    name: 'Handmade Goods Store Builder',
    description: 'Sell crafts and artisanal products',
    category: 'Online Stores',
  },
  {
    slug: 'digital-products-store',
    name: 'Digital Products Store',
    description: 'Sell downloads, courses, and templates',
    category: 'Online Stores',
  },
  {
    slug: 'jewelry-store-builder',
    name: 'Jewelry Store Builder',
    description: 'Highlight collections with elegant layouts',
    category: 'Online Stores',
  },
  {
    slug: 'beauty-products-store',
    name: 'Beauty Products Store',
    description: 'Skincare and cosmetics, ready to sell',
    category: 'Online Stores',
  },
  {
    slug: 'home-decor-store-generator',
    name: 'Home Decor Store Generator',
    description: 'Room-by-room shopping experiences',
    category: 'Online Stores',
  },
  {
    slug: 'print-on-demand-store',
    name: 'Print-on-Demand Store',
    description: 'Sell custom merch without inventory',
    category: 'Online Stores',
  },

  // Link-in-Bio
  {
    slug: 'link-in-bio-generator',
    name: 'Link-in-Bio Generator',
    description: 'One link for all your channels',
    category: 'Link-in-Bio',
  },
  {
    slug: 'instagram-link-in-bio',
    name: 'Instagram Link-in-Bio',
    description: 'A polished hub for your Instagram followers',
    category: 'Link-in-Bio',
  },
  {
    slug: 'tiktok-creator-link-page',
    name: 'TikTok Creator Link Page',
    description: 'All your content, one tap away',
    category: 'Link-in-Bio',
  },
  {
    slug: 'youtuber-link-page',
    name: 'YouTuber Link Page',
    description: 'Videos, merch, and social links',
    category: 'Link-in-Bio',
  },
  {
    slug: 'musician-link-in-bio',
    name: 'Musician Link-in-Bio',
    description: 'Streaming links, tour dates, and more',
    category: 'Link-in-Bio',
  },
  {
    slug: 'podcaster-link-page',
    name: 'Podcaster Link Page',
    description: 'Episodes, platforms, and newsletter signup',
    category: 'Link-in-Bio',
  },
  {
    slug: 'freelancer-link-hub',
    name: 'Freelancer Link Hub',
    description: 'Portfolio, bookings, and rates in one place',
    category: 'Link-in-Bio',
  },
  {
    slug: 'creator-link-page-builder',
    name: 'Creator Link Page Builder',
    description: 'A branded page for all your platforms',
    category: 'Link-in-Bio',
  },
  {
    slug: 'agency-link-in-bio',
    name: 'Agency Link-in-Bio',
    description: 'Case studies, team, and contact links',
    category: 'Link-in-Bio',
  },
  {
    slug: 'coach-link-in-bio',
    name: 'Coach Link-in-Bio',
    description: 'Booking calendar and social proof',
    category: 'Link-in-Bio',
  },
];

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

export { featuredGenerators, allGenerators, categories };
