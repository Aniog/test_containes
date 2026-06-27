// Static, in-source generator data. The real data layer wires up later.
// Each generator has a stable slug and is grouped under one of six categories.
// Slugs are URL-safe and used in /generators/{slug} links.

export const CATEGORIES = [
  {
    id: "websites",
    labelKey: "catWebsites",
    descKey: "catWebsitesDesc",
    iconKey: "website",
  },
  {
    id: "landing-pages",
    labelKey: "catLandingPages",
    descKey: "catLandingPagesDesc",
    iconKey: "landing",
  },
  {
    id: "portfolios",
    labelKey: "catPortfolios",
    descKey: "catPortfoliosDesc",
    iconKey: "portfolio",
  },
  {
    id: "blogs",
    labelKey: "catBlogs",
    descKey: "catBlogsDesc",
    iconKey: "blog",
  },
  {
    id: "stores",
    labelKey: "catStores",
    descKey: "catStoresDesc",
    iconKey: "store",
  },
  {
    id: "link-in-bio",
    labelKey: "catLinkInBio",
    descKey: "catLinkInBioDesc",
    iconKey: "link",
  },
];

// Featured tiles (Section 3). Each carries a category tag because the grid
// mixes categories — the tag tells visitors what kind of tool the tile is.
export const FEATURED = [
  { name: "AI Website Generator",       desc: "Describe your business, get a full site.",          tag: "tagWebsite",     slug: "ai-website-generator", category: "websites" },
  { name: "Free Portfolio Generator",   desc: "For creatives, in minutes, no fee.",                tag: "tagPortfolio",   slug: "free-portfolio-generator", category: "portfolios" },
  { name: "AI Landing Page Maker",      desc: "One-page sites built to convert.",                  tag: "tagLandingPage", slug: "ai-landing-page-maker", category: "landing-pages" },
  { name: "Online Store Builder",       desc: "Start selling without writing code.",               tag: "tagStore",       slug: "online-store-builder", category: "stores" },
  { name: "Link-in-Bio Generator",      desc: "One link for all your channels.",                   tag: "tagLinkInBio",   slug: "link-in-bio-generator", category: "link-in-bio" },
  { name: "One-Page Website Builder",   desc: "Simple sites, single scroll.",                      tag: "tagWebsite",     slug: "one-page-website-builder", category: "websites" },
  { name: "Wedding Website Generator",  desc: "Share your day with guests.",                       tag: "tagWebsite",     slug: "wedding-website-generator", category: "websites" },
  { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done.",                 tag: "tagWebsite",     slug: "restaurant-website-builder", category: "websites" },
  { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes.",                       tag: "tagBlog",        slug: "blog-generator-for-beginners", category: "blogs" },
];

// Directory entries (Section 5). 8–12 per subsection.
// Cards inside each subsection share one illustration; the subsection heading
// supplies the category context, so no per-card tag here.
export const GENERATORS = {
  websites: [
    { name: "AI Website Generator",                desc: "Describe your business, get a full site.",        slug: "ai-website-generator" },
    { name: "Free Website Builder for Photographers", desc: "A clean site that puts your work first.",      slug: "free-website-builder-for-photographers" },
    { name: "One-Page Wedding Website Builder",    desc: "Share the day, with a single scroll.",            slug: "one-page-wedding-website-builder" },
    { name: "Restaurant Website Builder",          desc: "Menu, hours, reservations, done.",               slug: "restaurant-website-builder" },
    { name: "AI Website Maker for Small Business", desc: "A full business site, ready to publish.",       slug: "ai-website-maker-for-small-business" },
    { name: "Personal Website Generator",          desc: "Your name, your story, your corner of the web.",  slug: "personal-website-generator" },
    { name: "Photography Website Builder",         desc: "Galleries, pricing, and bookings in one site.",  slug: "photography-website-builder" },
    { name: "Yoga Studio Website Builder",         desc: "Schedule, classes, and a clean signup flow.",    slug: "yoga-studio-website-builder" },
    { name: "Real Estate Website Generator",       desc: "Listings, lead forms, and a polished brand page.", slug: "real-estate-website-generator" },
    { name: "Law Firm Website Builder",            desc: "Practice areas, contact, and trust at a glance.", slug: "law-firm-website-builder" },
  ],
  "landing-pages": [
    { name: "AI Landing Page Maker",                desc: "One-page sites built to convert.",                slug: "ai-landing-page-maker" },
    { name: "Free Landing Page Generator",          desc: "A no-cost starting point for any campaign.",      slug: "free-landing-page-generator" },
    { name: "Landing Page Builder for SaaS",         desc: "Feature, pricing, and signup on one page.",       slug: "landing-page-builder-for-saas" },
    { name: "One-Page Landing Page Generator",      desc: "Tell visitors one thing, clearly.",               slug: "one-page-landing-page-generator" },
    { name: "Lead Generation Landing Page Builder", desc: "Capture leads with a polished one-pager.",       slug: "lead-generation-landing-page-builder" },
    { name: "Event Landing Page Generator",          desc: "Date, venue, and RSVP without a stack.",          slug: "event-landing-page-generator" },
    { name: "Coming Soon Landing Page Builder",      desc: "Build anticipation before launch day.",           slug: "coming-soon-landing-page-builder" },
    { name: "App Download Landing Page Generator",  desc: "Show the app, route to the stores.",              slug: "app-download-landing-page-generator" },
    { name: "Product Launch Landing Page Generator", desc: "Reveal one product, with a focused pitch.",       slug: "product-launch-landing-page-generator" },
  ],
  portfolios: [
    { name: "Free Portfolio Generator",              desc: "For creatives, in minutes, no fee.",              slug: "free-portfolio-generator" },
    { name: "Portfolio Generator for Designers",     desc: "A clean grid that lets the work speak.",          slug: "portfolio-generator-for-designers" },
    { name: "Photography Portfolio Builder",         desc: "Big images, fast load, no fuss.",                 slug: "photography-portfolio-builder" },
    { name: "Illustrator Portfolio Generator",       desc: "Pieces up front, contact one tap away.",          slug: "illustrator-portfolio-generator" },
    { name: "Architecture Portfolio Builder",        desc: "Projects first, studio notes second.",            slug: "architecture-portfolio-builder" },
    { name: "Writer Portfolio Generator",            desc: "Clips, bylines, and a contact page.",             slug: "writer-portfolio-generator" },
    { name: "Freelance Portfolio Maker",             desc: "Services, work, and a quote request form.",       slug: "freelance-portfolio-maker" },
    { name: "Creative Portfolio Builder",            desc: "A bold layout for bold work.",                    slug: "creative-portfolio-builder" },
    { name: "Modeling Portfolio Generator",          desc: "Polaroids, digitals, and agency-ready comp cards.", slug: "modeling-portfolio-generator" },
  ],
  blogs: [
    { name: "Blog Generator for Beginners",          desc: "Publish-ready in minutes.",                       slug: "blog-generator-for-beginners" },
    { name: "Personal Blog Generator",               desc: "Your voice, your topics, your domain.",           slug: "personal-blog-generator" },
    { name: "Travel Blog Builder",                   desc: "Posts, maps, and photo stories.",                 slug: "travel-blog-builder" },
    { name: "Food Blog Generator",                   desc: "Recipes, photos, and a clean reading view.",       slug: "food-blog-generator" },
    { name: "Tech Blog Maker",                       desc: "Code-friendly layouts with syntax-friendly fonts.", slug: "tech-blog-maker" },
    { name: "Fashion Blog Builder",                  desc: "Looks, trends, and a shoppable gallery.",         slug: "fashion-blog-builder" },
    { name: "Music Blog Generator",                  desc: "Tracks, reviews, and embeddable players.",        slug: "music-blog-generator" },
    { name: "News-style Blog Builder",               desc: "Categories, headlines, and a featured slot.",     slug: "news-style-blog-builder" },
  ],
  stores: [
    { name: "Online Store Builder",                  desc: "Start selling without writing code.",             slug: "online-store-builder" },
    { name: "Online Store Builder for Restaurants",  desc: "Menus, orders, and pickup-friendly checkout.",   slug: "online-store-builder-for-restaurants" },
    { name: "AI Store Generator",                    desc: "A working storefront from a one-line pitch.",     slug: "ai-store-generator" },
    { name: "T-Shirt Store Builder",                 desc: "Mockups, sizes, and print-on-demand ready.",      slug: "t-shirt-store-builder" },
    { name: "Handmade Store Generator",              desc: "Storytelling blocks that fit craft brands.",      slug: "handmade-store-generator" },
    { name: "Dropshipping Store Builder",            desc: "Catalog-first layout for reseller shops.",        slug: "dropshipping-store-builder" },
    { name: "Digital Product Store Builder",         desc: "Sell downloads, licenses, and bundles.",          slug: "digital-product-store-builder" },
    { name: "Boutique Store Builder",                desc: "An editorial layout for small brands.",           slug: "boutique-store-builder" },
    { name: "Coffee Shop Store Builder",             desc: "Beans, merch, and subscription-friendly checkout.", slug: "coffee-shop-store-builder" },
  ],
  "link-in-bio": [
    { name: "Link-in-Bio Generator",                 desc: "One link for all your channels.",                 slug: "link-in-bio-generator" },
    { name: "Free Link-in-Bio Maker",                desc: "A clean bio page that costs nothing to run.",     slug: "free-link-in-bio-maker" },
    { name: "Link-in-Bio for Musicians",             desc: "Tracks, tour dates, and merch on one page.",      slug: "link-in-bio-for-musicians" },
    { name: "Link-in-Bio for Photographers",         desc: "Featured shoot, gallery links, and contact.",     slug: "link-in-bio-for-photographers" },
    { name: "Link-in-Bio for Influencers",           desc: "Brand-friendly tiles that load fast.",            slug: "link-in-bio-for-influencers" },
    { name: "TikTok Link-in-Bio Builder",            desc: "A bio page tuned for short-form audiences.",      slug: "tiktok-link-in-bio-builder" },
    { name: "Instagram Link-in-Bio Generator",       desc: "An Instagram-friendly tile layout.",             slug: "instagram-link-in-bio-generator" },
    { name: "Creator Link-in-Bio Builder",           desc: "One page for every platform you post on.",        slug: "creator-link-in-bio-builder" },
  ],
};

// Flatten + count helpers used by search + sidebar counters.
export function getAllGenerators() {
  const rows = [];
  for (const cat of CATEGORIES) {
    const list = GENERATORS[cat.id] || [];
    for (const g of list) {
      rows.push({ ...g, category: cat.id });
    }
  }
  return rows;
}

export function getCategoryById(id) {
  return CATEGORIES.find((c) => c.id === id) || null;
}