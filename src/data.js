export const categoryData = [
  {
    id: "websites",
    name: "Websites",
    desc: "AI-built business and personal sites for any goal.",
    icon: "websites"
  },
  {
    id: "landing-pages",
    name: "Landing Pages",
    desc: "Single-page sites built to convert visitors fast.",
    icon: "landing-pages"
  },
  {
    id: "portfolios",
    name: "Portfolios",
    desc: "Showcase your work with a clean, focused site.",
    icon: "portfolios"
  },
  {
    id: "blogs",
    name: "Blogs",
    desc: "Publish-ready blogs with built-in SEO basics.",
    icon: "blogs"
  },
  {
    id: "stores",
    name: "Online Stores",
    desc: "Sell products online with payments built in.",
    icon: "stores"
  },
  {
    id: "link-in-bio",
    name: "Link-in-Bio",
    desc: "One link, all your places. Made for creators.",
    icon: "link-in-bio"
  }
];

// Featured Generators exactly matching prompt
export const featuredGenerators = [
  { name: "AI Website Generator", desc: "Describe your business, get a full site", category: "Website" },
  { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee", category: "Portfolio" },
  { name: "AI Landing Page Maker", desc: "One-page sites built to convert", category: "Landing Page" },
  { name: "Online Store Builder", desc: "Start selling without writing code", category: "Store" },
  { name: "Link-in-Bio Generator", desc: "One link for all your channels", category: "Link-in-Bio" },
  { name: "One-Page Website Builder", desc: "Simple sites, single scroll", category: "Website" },
  { name: "Wedding Website Generator", desc: "Share your day with guests", category: "Website" },
  { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done", category: "Website" },
  { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", category: "Blog" }
];

export const allGenerators = {
  "websites": [
    { name: "AI Website Generator", desc: "Describe your business, get a full site" },
    { name: "One-Page Website Builder", desc: "Simple sites, single scroll" },
    { name: "Wedding Website Generator", desc: "Share your day with guests" },
    { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done" },
    { name: "Small Business Website Maker", desc: "Professional sites for local businesses" },
    { name: "Real Estate Website Generator", desc: "Showcase properties and agent profiles" },
    { name: "Construction Company Website Tool", desc: "Highlight your projects and services" },
    { name: "Consultant Website Builder", desc: "Build authority and book more clients" },
    { name: "Nonprofits Website Generator", desc: "Share your mission and gather donations" },
    { name: "Salon Website Maker", desc: "Hair and beauty sites with service lists" },
  ],
  "landing-pages": [
    { name: "AI Landing Page Maker", desc: "One-page sites built to convert" },
    { name: "App Launch Landing Page Builder", desc: "Collect emails before your app goes live" },
    { name: "Waitlist Page Generator", desc: "Build excitement for your upcoming product" },
    { name: "Webinar Registration Maker", desc: "Simple pages to drive webinar signups" },
    { name: "Ebook Download Landing Page", desc: "Exchange free resources for email leads" },
    { name: "Event Splash Page Generator", desc: "Announce your event and sell tickets" },
    { name: "Product Teaser Page Builder", desc: "Showcase your newest offering in style" },
    { name: "Free Trial Landing Page Maker", desc: "Convert visitors into software users" },
    { name: "SaaS Landing Page Generator", desc: "Highlight features, pricing, and benefits" }
  ],
  "portfolios": [
    { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee" },
    { name: "Portfolio Generator for Designers", desc: "Highlight UI/UX and graphic design" },
    { name: "Photographer Portfolio Maker", desc: "Display your galleries beautifully" },
    { name: "Developer Portfolio Builder", desc: "Showcase your code and open source projects" },
    { name: "Copywriter Portfolio Tool", desc: "Clean typography to feature your writing" },
    { name: "Illustrator Portfolio Generator", desc: "Colorful templates for modern artwork" },
    { name: "Videographer Portfolio Setup", desc: "Embed reels and showcase video projects" },
    { name: "Model Portfolio Builder", desc: "High-resolution layouts for lookbooks" },
  ],
  "blogs": [
    { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes" },
    { name: "Travel Blog Maker", desc: "Share your journeys with map embeds and photos" },
    { name: "Food Blog Builder", desc: "Recipe templates and beautiful food imagery" },
    { name: "Tech Blog Generator", desc: "Clean layouts with code snippet support" },
    { name: "Lifestyle Blog Setup", desc: "A cozy aesthetic for daily updates" },
    { name: "Fashion Blog Builder", desc: "Outfit of the day showcases and style tips" },
    { name: "Fitness Blog Generator", desc: "Workout routines and health advice layouts" },
    { name: "Mom Blog Maker", desc: "Parenting tips and family stories" },
    { name: "Review Blog Setup Tool", desc: "Product reviews and affiliate link features" }
  ],
  "stores": [
    { name: "Online Store Builder", desc: "Start selling without writing code" },
    { name: "Online Store Builder for Restaurants", desc: "Take takeout orders online" },
    { name: "Digital Products Store Maker", desc: "Sell ebooks, templates, and downloads" },
    { name: "Print on Demand Store Tool", desc: "Merch storefronts ready to drop-ship" },
    { name: "Clothing Boutique Builder", desc: "Apparel stores with varied sizes and colors" },
    { name: "Jewelry Store Generator", desc: "Elegant product displays and secure checkout" },
    { name: "Art Print Store Setup", desc: "Sell limited editions directly to fans" },
    { name: "Handmade Goods Store Maker", desc: "Perfect for crafters and Etsy sellers" },
  ],
  "link-in-bio": [
    { name: "Link-in-Bio Generator", desc: "One link for all your channels" },
    { name: "Creator Link Page Builder", desc: "Connect your YouTube, TikTok, and merch" },
    { name: "Musician Link-in-Bio Tool", desc: "Embed Spotify, Apple Music, and tour dates" },
    { name: "Streamer Profile Page Maker", desc: "Twitch links, schedules, and donation options" },
    { name: "Podcast Link Setup", desc: "Funnel listeners to their preferred app" },
    { name: "Author Link-in-Bio Setup", desc: "Links to Amazon, Goodreads, and your blog" },
    { name: "Influencer Hub Builder", desc: "Sponsorship links and social media accounts" },
    { name: "Small Biz Contact Link Page", desc: "Quick access to menus, maps, and hours" },
  ]
};

// Create URL friendly slugs
export const slugify = (text) => text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');