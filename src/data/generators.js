export const categories = [
  {
    id: "websites",
    name: "Websites",
    slug: "websites",
    description: "AI-built business and personal sites for any goal.",
    href: "#websites"
  },
  {
    id: "landing-pages",
    name: "Landing Pages",
    slug: "landing-pages",
    description: "Single-page sites built to convert visitors fast.",
    href: "#landing-pages"
  },
  {
    id: "portfolios",
    name: "Portfolios",
    slug: "portfolios",
    description: "Showcase your work with a clean, focused site.",
    href: "#portfolios"
  },
  {
    id: "blogs",
    name: "Blogs",
    slug: "blogs",
    description: "Publish-ready blogs with built-in SEO basics.",
    href: "#blogs"
  },
  {
    id: "stores",
    name: "Online Stores",
    slug: "stores",
    description: "Sell products online with payments built in.",
    href: "#stores"
  },
  {
    id: "link-in-bio",
    name: "Link-in-Bio",
    slug: "link-in-bio",
    description: "One link, all your places. Made for creators.",
    href: "#link-in-bio"
  }
];

export const featuredGenerators = [
  { name: "AI Website Generator", description: "Describe your business, get a full site", category: "Website", slug: "ai-website-generator" },
  { name: "Free Portfolio Generator", description: "For creatives, in minutes, no fee", category: "Portfolio", slug: "free-portfolio-generator" },
  { name: "AI Landing Page Maker", description: "One-page sites built to convert", category: "Landing Page", slug: "ai-landing-page-maker" },
  { name: "Online Store Builder", description: "Start selling without writing code", category: "Store", slug: "online-store-builder" },
  { name: "Link-in-Bio Generator", description: "One link for all your channels", category: "Link-in-Bio", slug: "link-in-bio-generator" },
  { name: "One-Page Website Builder", description: "Simple sites, single scroll", category: "Website", slug: "one-page-website-builder" },
  { name: "Wedding Website Generator", description: "Share your day with guests", category: "Website", slug: "wedding-website-generator" },
  { name: "Restaurant Website Builder", description: "Menu, hours, reservations, done", category: "Website", slug: "restaurant-website-builder" },
  { name: "Blog Generator for Beginners", description: "Publish-ready in minutes", category: "Blog", slug: "blog-generator-for-beginners" }
];

export const allGenerators = {
  websites: {
    categoryId: "websites",
    heading: "Websites",
    description: "AI-built business and personal sites for any goal.",
    generators: [
      { name: "AI Website Generator", description: "Describe your business, get a full site", slug: "ai-website-generator" },
      { name: "Free Website Builder for Photographers", description: "Stunning photo sites, zero cost", slug: "free-website-builder-for-photographers" },
      { name: "One-Page Wedding Website Builder", description: "Share your day with guests in one scroll", slug: "one-page-wedding-website-builder" },
      { name: "Restaurant Website Builder", description: "Menu, hours, reservations, done", slug: "restaurant-website-builder" },
      { name: "Small Business Website Generator", description: "Professional sites for local businesses", slug: "small-business-website-generator" },
      { name: "Yoga Studio Website Builder", description: "Class schedules and booking, simplified", slug: "yoga-studio-website-builder" },
      { name: "Real Estate Website Generator", description: "Listings and lead capture, built in", slug: "real-estate-website-generator" },
      { name: "Nonprofit Website Builder", description: "Tell your story, accept donations", slug: "nonprofit-website-builder" },
      { name: "Personal Website Generator", description: "Your online presence, in minutes", slug: "personal-website-generator" },
      { name: "Consulting Website Builder", description: "Book calls and share expertise", slug: "consulting-website-builder" },
      { name: "Fitness Website Generator", description: "Trainer profiles and class signups", slug: "fitness-website-generator" },
      { name: "Beauty Salon Website Builder", description: "Services, pricing, and online booking", slug: "beauty-salon-website-builder" }
    ]
  },
  "landing-pages": {
    categoryId: "landing-pages",
    heading: "Landing Pages",
    description: "Single-page sites built to convert visitors fast.",
    generators: [
      { name: "AI Landing Page Maker", description: "One-page sites built to convert", slug: "ai-landing-page-maker" },
      { name: "Free Landing Page Builder", description: "No cost, no code, high impact", slug: "free-landing-page-builder" },
      { name: "SaaS Landing Page Generator", description: "Feature highlights and signup forms", slug: "saas-landing-page-generator" },
      { name: "Event Landing Page Builder", description: "Countdown, details, and RSVPs", slug: "event-landing-page-builder" },
      { name: "Product Launch Page Generator", description: "Build buzz before you ship", slug: "product-launch-page-generator" },
      { name: "Lead Capture Page Builder", description: "Turn visitors into contacts", slug: "lead-capture-page-builder" },
      { name: "App Download Landing Page", description: "Drive installs with a focused page", slug: "app-download-landing-page" },
      { name: "Webinar Registration Page Builder", description: "Signups and reminders, automated", slug: "webinar-registration-page-builder" },
      { name: "Coming Soon Page Generator", description: "Tease your next move", slug: "coming-soon-page-generator" },
      { name: "Click-Through Landing Page Builder", description: "One clear call to action", slug: "click-through-landing-page-builder" }
    ]
  },
  portfolios: {
    categoryId: "portfolios",
    heading: "Portfolios",
    description: "Showcase your work with a clean, focused site.",
    generators: [
      { name: "Free Portfolio Generator", description: "For creatives, in minutes, no fee", slug: "free-portfolio-generator" },
      { name: "Photography Portfolio Builder", description: "Let your images do the talking", slug: "photography-portfolio-builder" },
      { name: "Design Portfolio Generator", description: "Case studies and visuals, organized", slug: "design-portfolio-generator" },
      { name: "Writer Portfolio Builder", description: "Clips and bylines, beautifully laid out", slug: "writer-portfolio-builder" },
      { name: "Artist Portfolio Generator", description: "Gallery-style showcase for your art", slug: "artist-portfolio-generator" },
      { name: "Student Portfolio Builder", description: "Academic projects and achievements", slug: "student-portfolio-builder" },
      { name: "Architecture Portfolio Generator", description: "Renderings and plans, presented clearly", slug: "architecture-portfolio-generator" },
      { name: "Video Portfolio Builder", description: "Reel and clips, front and center", slug: "video-portfolio-builder" },
      { name: "Model Portfolio Generator", description: "Headshots and comp cards, online", slug: "model-portfolio-generator" },
      { name: "Music Portfolio Builder", description: "Tracks, tour dates, and bio", slug: "music-portfolio-builder" }
    ]
  },
  blogs: {
    categoryId: "blogs",
    heading: "Blogs",
    description: "Publish-ready blogs with built-in SEO basics.",
    generators: [
      { name: "Blog Generator for Beginners", description: "Publish-ready in minutes", slug: "blog-generator-for-beginners" },
      { name: "Personal Blog Builder", description: "Share your thoughts with the world", slug: "personal-blog-builder" },
      { name: "Travel Blog Generator", description: "Stories and guides from the road", slug: "travel-blog-generator" },
      { name: "Food Blog Builder", description: "Recipes and reviews, beautifully served", slug: "food-blog-builder" },
      { name: "Tech Blog Generator", description: "Tutorials and insights, organized", slug: "tech-blog-generator" },
      { name: "Lifestyle Blog Builder", description: "Curated content for your audience", slug: "lifestyle-blog-builder" },
      { name: "Business Blog Generator", description: "Thought leadership and company news", slug: "business-blog-generator" },
      { name: "Fashion Blog Builder", description: "Trends and looks, editorial style", slug: "fashion-blog-builder" },
      { name: "Health and Wellness Blog Generator", description: "Tips and routines, reader-friendly", slug: "health-and-wellness-blog-generator" },
      { name: "AI Blog Generator", description: "Let AI draft your first posts too", slug: "ai-blog-generator" }
    ]
  },
  stores: {
    categoryId: "stores",
    heading: "Online Stores",
    description: "Sell products online with payments built in.",
    generators: [
      { name: "Online Store Builder", description: "Start selling without writing code", slug: "online-store-builder" },
      { name: "Free Online Store Generator", description: "No fees to get started", slug: "free-online-store-generator" },
      { name: "Clothing Store Builder", description: "Collections, sizes, and checkout", slug: "clothing-store-builder" },
      { name: "Handmade Shop Generator", description: "Craft and artisan products, beautifully displayed", slug: "handmade-shop-generator" },
      { name: "Digital Product Store Builder", description: "Sell downloads and subscriptions", slug: "digital-product-store-builder" },
      { name: "Food and Beverage Store Generator", description: "Order online, pickup or delivery", slug: "food-and-beverage-store-generator" },
      { name: "Print-on-Demand Store Builder", description: "Custom designs, no inventory needed", slug: "print-on-demand-store-builder" },
      { name: "Subscription Box Store Generator", description: "Recurring revenue, simplified", slug: "subscription-box-store-generator" },
      { name: "Jewelry Store Builder", description: "Elegant product pages and secure checkout", slug: "jewelry-store-builder" },
      { name: "Book Store Generator", description: "Catalog, reviews, and instant purchase", slug: "book-store-generator" }
    ]
  },
  "link-in-bio": {
    categoryId: "link-in-bio",
    heading: "Link-in-Bio",
    description: "One link, all your places. Made for creators.",
    generators: [
      { name: "Link-in-Bio Generator", description: "One link for all your channels", slug: "link-in-bio-generator" },
      { name: "Free Link-in-Bio Builder", description: "All your links, no cost", slug: "free-link-in-bio-builder" },
      { name: "Instagram Link-in-Bio Generator", description: "From grid to link tree in seconds", slug: "instagram-link-in-bio-generator" },
      { name: "TikTok Link-in-Bio Builder", description: "Drive traffic from every video", slug: "tiktok-link-in-bio-builder" },
      { name: "YouTube Link-in-Bio Generator", description: "Channel links and merch, one page", slug: "youtube-link-in-bio-generator" },
      { name: "Musician Link-in-Bio Builder", description: "Streams, merch, and tour dates", slug: "musician-link-in-bio-builder" },
      { name: "Podcast Link-in-Bio Generator", description: "Episodes, subscribe links, and sponsors", slug: "podcast-link-in-bio-generator" },
      { name: "Creator Link-in-Bio Builder", description: "Tips, shops, and socials, unified", slug: "creator-link-in-bio-builder" },
      { name: "Influencer Link Page Generator", description: "Brand deals and content, organized", slug: "influencer-link-page-generator" },
      { name: "No-Code Link-in-Bio Builder", description: "Drag, drop, publish", slug: "no-code-link-in-bio-builder" }
    ]
  }
};

export const VISIBLE_DEFAULT = 6;
