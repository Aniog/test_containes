export const CATEGORIES = [
  { id: "websites", name: "Websites", description: "AI-built business and personal sites for any goal." },
  { id: "landing-pages", name: "Landing Pages", description: "Single-page sites built to convert visitors fast." },
  { id: "portfolios", name: "Portfolios", description: "Showcase your work with a clean, focused site." },
  { id: "blogs", name: "Blogs", description: "Publish-ready blogs with built-in SEO basics." },
  { id: "stores", name: "Online Stores", description: "Sell products online with payments built in." },
  { id: "link-in-bio", name: "Link-in-Bio", description: "One link, all your places. Made for creators." },
];

export const FEATURED_SHORT_LIST = [
  { name: "AI Website Generator", description: "Describe your business, get a full site", category: "Website", slug: "ai-website-generator" },
  { name: "Free Portfolio Generator", description: "For creatives, in minutes, no fee", category: "Portfolio", slug: "free-portfolio-generator" },
  { name: "AI Landing Page Maker", description: "One-page sites built to convert", category: "Landing Page", slug: "ai-landing-page-maker" },
  { name: "Online Store Builder", description: "Start selling without writing code", category: "Store", slug: "online-store-builder" },
  { name: "Link-in-Bio Generator", description: "One link for all your channels", category: "Link-in-Bio", slug: "link-in-bio-generator" },
  { name: "One-Page Website Builder", description: "Simple sites, single scroll", category: "Website", slug: "one-page-website-builder" },
  { name: "Wedding Website Generator", description: "Share your day with guests", category: "Website", slug: "wedding-website-generator" },
  { name: "Restaurant Website Builder", description: "Menu, hours, reservations, done", category: "Website", slug: "restaurant-website-builder" },
  { name: "Blog Generator for Beginners", description: "Publish-ready in minutes", category: "Blog", slug: "blog-generator-for-beginners" },
];

const generateItems = (category, count) => {
  const modifiers = ["Free", "AI", "Beautiful", "One-Page", "Professional", "No-Code", "Modern"];
  const demographics = ["Photographers", "Restaurants", "Yoga Instructors", "Designers", "Freelancers", "Startups", "Musicians", "Non-profits", "Real Estate Agents", "Events"];
  
  return Array.from({ length: count }).map((_, i) => {
    const mod = modifiers[i % modifiers.length];
    const dem = demographics[i % demographics.length];
    const categoryName = category.name.endsWith('s') ? category.name.slice(0, -1) : category.name;
    const name = `${mod} ${categoryName} Generator for ${dem}`;
    return {
      name,
      description: `Create a professional ${category.name.toLowerCase()} in seconds.`,
      slug: name.toLowerCase().replace(/ /g, "-")
    };
  });
};

export const ALL_GENERATORS = CATEGORIES.reduce((acc, cat) => {
  acc[cat.id] = generateItems(cat, 12);
  return acc;
}, {});
