export const categories = [
  { slug: 'websites', title: 'Websites', description: 'AI-built business and personal sites for any goal.' },
  { slug: 'landing-pages', title: 'Landing Pages', description: 'Single-page sites built to convert visitors fast.' },
  { slug: 'portfolios', title: 'Portfolios', description: 'Showcase your work with a clean, focused site.' },
  { slug: 'blogs', title: 'Blogs', description: 'Publish-ready blogs with built-in SEO basics.' },
  { slug: 'stores', title: 'Online Stores', description: 'Sell products online with payments built in.' },
  { slug: 'link-in-bio', title: 'Link-in-Bio', description: 'One link, all your places. Made for creators.' }
];

export const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' }
];

export const generators = [
  // Websites
  { name: 'AI Website Generator', description: 'Full business site in seconds', categoryId: 'websites', slug: 'ai-website-generator' },
  { name: 'Business Website Builder', description: 'Professional sites for any industry', categoryId: 'websites', slug: 'business-website-builder' },
  { name: 'Small Business Website', description: 'Get your business online fast', categoryId: 'websites', slug: 'small-business-website' },
  { name: 'Corporate Site Generator', description: 'Modern designs for larger teams', categoryId: 'websites', slug: 'corporate-site-generator' },
  { name: 'Consultant Website Maker', description: 'Showcase your expertise', categoryId: 'websites', slug: 'consultant-website-maker' },
  { name: 'Real Estate Website Builder', description: 'Listings and contact forms built-in', categoryId: 'websites', slug: 'real-estate-website-builder' },
  { name: 'Medical Practice Website', description: 'Safe and professional online presence', categoryId: 'websites', slug: 'medical-practice-website' },
  { name: 'Education Website Builder', description: 'Sites for teachers and schools', categoryId: 'websites', slug: 'education-website-builder' },
  { name: 'NGO Website Generator', description: 'Drive donations and awareness', categoryId: 'websites', slug: 'ngo-website-generator' },
  
  // Landing Pages
  { name: 'AI Landing Page Maker', description: 'Convert visitors into customers', categoryId: 'landing-pages', slug: 'ai-landing-page-maker' },
  { name: 'SaaS Landing Page', description: 'Perfect for software and apps', categoryId: 'landing-pages', slug: 'saas-landing-page' },
  { name: 'Lead Gen Landing Page', description: 'Focus on capturing emails', categoryId: 'landing-pages', slug: 'lead-gen-landing-page' },
  { name: 'Product Launch Page', description: 'Generate hype for your new thing', categoryId: 'landing-pages', slug: 'product-launch-page' },
  { name: 'Event Registration Page', description: 'Track signups effortlessly', categoryId: 'landing-pages', slug: 'event-registration-page' },
  { name: 'Webinar Signup Page', description: 'Get more attendees for your talk', categoryId: 'landing-pages', slug: 'webinar-signup-page' },
  
  // Portfolios
  { name: 'Free Portfolio Generator', description: 'Best for visual creatives', categoryId: 'portfolios', slug: 'free-portfolio-generator' },
  { name: 'Designer Portfolio', description: 'Clean layouts for pixel-perfectionists', categoryId: 'portfolios', slug: 'designer-portfolio' },
  { name: 'Photographer Site Builder', description: 'Gorgeous galleries for your shots', categoryId: 'portfolios', slug: 'photographer-site-builder' },
  { name: 'Artist Portfolio Maker', description: 'Showcase your art to the world', categoryId: 'portfolios', slug: 'artist-portfolio-maker' },
  { name: 'Writer Portfolio', description: 'Focus on typography and readability', categoryId: 'portfolios', slug: 'writer-portfolio' },
  { name: 'Actor Portfolio Builder', description: 'Headshots and reels front and center', categoryId: 'portfolios', slug: 'actor-portfolio-builder' },
  
  // Blogs
  { name: 'Blog Generator for Beginners', description: 'Start writing immediately', categoryId: 'blogs', slug: 'blog-generator-for-beginners' },
  { name: 'Lifestyle Blog Maker', description: 'Share your daily adventures', categoryId: 'blogs', slug: 'lifestyle-blog-maker' },
  { name: 'Tech Blog Generator', description: 'Beautiful code snippets and reviews', categoryId: 'blogs', slug: 'tech-blog-generator' },
  { name: 'Food Blog Builder', description: 'Recipe cards and food photography', categoryId: 'blogs', slug: 'food-blog-builder' },
  { name: 'Travel Blog Site', description: 'Maps and photo journals integrated', categoryId: 'blogs', slug: 'travel-blog-site' },
  
  // Online Stores
  { name: 'Online Store Builder', description: 'Sell products with ease', categoryId: 'stores', slug: 'online-store-builder' },
  { name: 'Dropshipping Store Maker', description: 'Start your e-commerce journey', categoryId: 'stores', slug: 'dropshipping-store-maker' },
  { name: 'Fashion Boutique Builder', description: 'Lookbooks and collections', categoryId: 'stores', slug: 'fashion-boutique-builder' },
  { name: 'Digital Product Shop', description: 'Sell downloads and license keys', categoryId: 'stores', slug: 'digital-product-shop' },
  { name: 'Jewelry Store Generator', description: 'Elegant displays for small items', categoryId: 'stores', slug: 'jewelry-store-generator' },
  
  // Link-in-Bio
  { name: 'Link-in-Bio Generator', description: 'One link for all socials', categoryId: 'link-in-bio', slug: 'link-in-bio-generator' },
  { name: 'Instagram Bio Link', description: 'Perfect for creators and brands', categoryId: 'link-in-bio', slug: 'instagram-bio-link' },
  { name: 'TikTok Profile Page', description: 'Optimize for your viral content', categoryId: 'link-in-bio', slug: 'tiktok-profile-page' },
  { name: 'YouTube Channel Hub', description: 'Centralize your video empire', categoryId: 'link-in-bio', slug: 'youtube-channel-hub' }
];
