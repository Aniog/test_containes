export const generatorCategories = [
  {
    key: "websites",
    slug: "websites",
    title: "Websites",
  },
  {
    key: "landingPages",
    slug: "landing-pages",
    title: "Landing Page",
  },
  {
    key: "portfolios",
    slug: "portfolios",
    title: "Portfolio",
  },
  {
    key: "blogs",
    slug: "blogs",
    title: "Blog",
  },
  {
    key: "stores",
    slug: "stores",
    title: "Store",
  },
  {
    key: "linkInBio",
    slug: "link-in-bio",
    title: "Link-in-Bio",
  },
]

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

const makeGenerators = (categoryKey, names) =>
  names.map(([name, description]) => ({
    id: slugify(name),
    slug: slugify(name),
    name,
    description,
    categoryKey,
  }))

const websiteGenerators = makeGenerators("websites", [
  ["AI Website Generator", "Describe your business, get a full site."],
  ["Free Website Builder for Photographers", "Showcase galleries and book clients."],
  ["One-Page Wedding Website Builder", "Share your story and RSVPs in one scroll."],
  ["Restaurant Website Builder", "Menu, hours, reservations, done."],
  ["Small Business Website Generator", "Professional sites that build trust fast."],
  ["No-Code Website Builder for Startups", "Launch fast without a developer."],
  ["Beautiful Wedding Website Generator", "Elegant designs for your big day."],
  ["AI Website Builder for Coaches", "Book sessions and share your expertise."],
  ["Real Estate Website Generator", "List properties and capture leads."],
  ["Musician Website Builder", "Share tracks, shows, and merch."],
  ["Personal Brand Website Generator", "Turn your profile into a home base."],
  ["Nonprofit Website Builder", "Tell your story and collect donations."],
])

const landingPageGenerators = makeGenerators("landingPages", [
  ["AI Landing Page Maker", "One-page sites built to convert."],
  ["Free Landing Page Generator", "No-cost pages for campaigns and launches."],
  ["Product Launch Landing Page Builder", "Announce, explain, and collect signups."],
  ["Event Landing Page Generator", "Sell tickets and share details."],
  ["SaaS Landing Page Builder", "Show features, pricing, and social proof."],
  ["App Landing Page Generator", "Download-focused pages for mobile apps."],
  ["Webinar Landing Page Builder", "Register attendees in minutes."],
  ["One-Page Website Builder", "Simple sites, single scroll."],
  ["Lead Capture Landing Page Maker", "Forms and CTAs that convert."],
  ["Ebook Landing Page Generator", "Promote and deliver your content."],
])

const portfolioGenerators = makeGenerators("portfolios", [
  ["Free Portfolio Generator", "For creatives, in minutes, no fee."],
  ["Portfolio Generator for Designers", "Clean layouts for case studies."],
  ["Photography Portfolio Generator", "Gallery-first sites for visual storytellers."],
  ["Illustrator Portfolio Builder", "Let your artwork speak first."],
  ["UX Portfolio Generator", "Show process, research, and outcomes."],
  ["Architecture Portfolio Builder", "Present projects with big images."],
  ["Model Portfolio Generator", "Comp cards, galleries, and bookings."],
  ["Freelance Writer Portfolio Maker", "Publish clips and pitch clients."],
  ["Makeup Artist Portfolio Builder", "Before-and-after galleries and booking."],
  ["Developer Portfolio Generator", "Projects, code, and contact in one place."],
])

const blogGenerators = makeGenerators("blogs", [
  ["Blog Generator for Beginners", "Publish-ready in minutes."],
  ["AI Blog Generator", "Get a blog with posts, categories, and SEO."],
  ["Personal Blog Builder", "Share your thoughts with a clean layout."],
  ["Food Blog Generator", "Recipes, photos, and stories organized."],
  ["Travel Blog Builder", "Map your trips and collect subscribers."],
  ["Fashion Blog Generator", "Editorial style for outfit posts."],
  ["Tech Blog Builder", "Articles, tutorials, and code snippets."],
  ["Lifestyle Blog Generator", "Multitopic blogs that grow with you."],
])

const storeGenerators = makeGenerators("stores", [
  ["Online Store Builder", "Start selling without writing code."],
  ["Online Store Builder for Restaurants", "Take orders and reservations online."],
  ["Clothing Store Generator", "Apparel shops with size and color variants."],
  ["Handmade Shop Builder", "Perfect for makers and artisans."],
  ["Digital Product Store Generator", "Sell downloads, courses, and files."],
  ["Jewelry Store Builder", "Elegant product pages that shine."],
  ["Coffee Shop Online Store Generator", "Beans, merchandise, subscriptions."],
  ["Fitness Store Builder", "Equipment, plans, and apparel."],
  ["Book Store Generator", "Show covers, reviews, and samples."],
  ["Beauty Store Builder", "Skincare and cosmetics with quick checkout."],
])

const linkInBioGenerators = makeGenerators("linkInBio", [
  ["Link-in-Bio Generator", "One link for all your channels."],
  ["Creator Link-in-Bio Builder", "TikTok, Instagram, YouTube in one place."],
  ["Influencer Link Page Generator", "Sponsored links and media kit."],
  ["Music Link-in-Bio Builder", "Streaming, merch, and tour links."],
  ["Podcast Link-in-Bio Generator", "Episodes, platforms, and subscribe."],
  ["Business Link Page Builder", "Contact, booking, and offers."],
  ["TikTok Link-in-Bio Generator", "Turn viewers into visitors."],
  ["YouTube Link-in-Bio Builder", "Videos, memberships, and store."],
])

export const allGenerators = [
  ...websiteGenerators,
  ...landingPageGenerators,
  ...portfolioGenerators,
  ...blogGenerators,
  ...storeGenerators,
  ...linkInBioGenerators,
]

export const generatorsByCategory = {
  websites: websiteGenerators,
  landingPages: landingPageGenerators,
  portfolios: portfolioGenerators,
  blogs: blogGenerators,
  stores: storeGenerators,
  linkInBio: linkInBioGenerators,
}

export const featuredGenerators = [
  {
    id: "ai-website-generator",
    slug: "ai-website-generator",
    name: "AI Website Generator",
    description: "Describe your business, get a full site.",
    categoryKey: "websites",
    categoryLabel: "Website",
  },
  {
    id: "free-portfolio-generator",
    slug: "free-portfolio-generator",
    name: "Free Portfolio Generator",
    description: "For creatives, in minutes, no fee.",
    categoryKey: "portfolios",
    categoryLabel: "Portfolio",
  },
  {
    id: "ai-landing-page-maker",
    slug: "ai-landing-page-maker",
    name: "AI Landing Page Maker",
    description: "One-page sites built to convert.",
    categoryKey: "landingPages",
    categoryLabel: "Landing Page",
  },
  {
    id: "online-store-builder",
    slug: "online-store-builder",
    name: "Online Store Builder",
    description: "Start selling without writing code.",
    categoryKey: "stores",
    categoryLabel: "Store",
  },
  {
    id: "link-in-bio-generator",
    slug: "link-in-bio-generator",
    name: "Link-in-Bio Generator",
    description: "One link for all your channels.",
    categoryKey: "linkInBio",
    categoryLabel: "Link-in-Bio",
  },
  {
    id: "one-page-website-builder",
    slug: "one-page-website-builder",
    name: "One-Page Website Builder",
    description: "Simple sites, single scroll.",
    categoryKey: "websites",
    categoryLabel: "Website",
  },
  {
    id: "wedding-website-generator",
    slug: "wedding-website-generator",
    name: "Wedding Website Generator",
    description: "Share your day with guests.",
    categoryKey: "websites",
    categoryLabel: "Website",
  },
  {
    id: "restaurant-website-builder",
    slug: "restaurant-website-builder",
    name: "Restaurant Website Builder",
    description: "Menu, hours, reservations, done.",
    categoryKey: "websites",
    categoryLabel: "Website",
  },
  {
    id: "blog-generator-for-beginners",
    slug: "blog-generator-for-beginners",
    name: "Blog Generator for Beginners",
    description: "Publish-ready in minutes.",
    categoryKey: "blogs",
    categoryLabel: "Blog",
  },
]
