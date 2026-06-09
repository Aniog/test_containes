export const featuredGenerators = [
  { name: "AI Website Generator", desc: "Describe your business, get a full site", tag: "Website", slug: "ai-website-generator" },
  { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee", tag: "Portfolio", slug: "free-portfolio-generator" },
  { name: "AI Landing Page Maker", desc: "One-page sites built to convert", tag: "Landing Page", slug: "ai-landing-page-maker" },
  { name: "Online Store Builder", desc: "Start selling without writing code", tag: "Store", slug: "online-store-builder" },
  { name: "Link-in-Bio Generator", desc: "One link for all your channels", tag: "Link-in-Bio", slug: "link-in-bio-generator" },
  { name: "One-Page Website Builder", desc: "Simple sites, single scroll", tag: "Website", slug: "one-page-website-builder" },
  { name: "Wedding Website Generator", desc: "Share your day with guests", tag: "Website", slug: "wedding-website-generator" },
  { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done", tag: "Website", slug: "restaurant-website-builder" },
  { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", tag: "Blog", slug: "blog-generator-for-beginners" }
];

export const categories = [
  { id: "websites", name: "Websites", desc: "AI-built business and personal sites for any goal.", icon: "website" },
  { id: "landing-pages", name: "Landing Pages", desc: "Single-page sites built to convert visitors fast.", icon: "landing" },
  { id: "portfolios", name: "Portfolios", desc: "Showcase your work with a clean, focused site.", icon: "portfolio" },
  { id: "blogs", name: "Blogs", desc: "Publish-ready blogs with built-in SEO basics.", icon: "blog" },
  { id: "stores", name: "Online Stores", desc: "Sell products online with payments built in.", icon: "store" },
  { id: "link-in-bio", name: "Link-in-Bio", desc: "One link, all your places. Made for creators.", icon: "link" }
];

// Helper to generate mostly plausible names
const modifiers = ["Free", "AI", "Beautiful", "Simple", "No-Code", "One-Page", "Quick", "Smart", "Custom"];
const specificTopics = ["Photographers", "Restaurants", "Yoga Instructors", "Wedding Couples", "Designers", "Freelancers", "Consultants", "Real Estate", "Musicians", "Writers", "Startups", "Local Businesses", "Events"];
const baseNames = {
  "websites": ["Website Builder", "Website Generator", "Site Creator", "Website Maker"],
  "landing-pages": ["Landing Page Builder", "Landing Page Generator", "Promo Page Maker"],
  "portfolios": ["Portfolio Builder", "Portfolio Generator", "Showcase Maker", "Gallery Creator"],
  "blogs": ["Blog Builder", "Blog Generator", "Publishing Platform", "Blog Creator"],
  "stores": ["Store Builder", "Store Generator", "eCommerce Maker", "Shop Creator"],
  "link-in-bio": ["Link-in-Bio Builder", "Bio Link Generator", "Profile Link Maker"]
};

// Seed random to keep SSG consistent
let seed = 12345;
function random() {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280;
}

function pick(arr) {
  return arr[Math.floor(random() * arr.length)];
}

export const directoryData = categories.reduce((acc, cat) => {
  const items = [];
  const count = 8 + Math.floor(random() * 5); // 8 to 12 items
  
  for(let i=0; i<count; i++) {
    const type = pick(baseNames[cat.id]);
    let name = "";
    
    const roll = random();
    if(roll < 0.33) {
      name = `${pick(modifiers)} ${type}`;
    } else if (roll < 0.66) {
      name = `${type} for ${pick(specificTopics)}`;
    } else {
      name = `${pick(modifiers)} ${type} for ${pick(specificTopics)}`;
    }
    
    // Quick pseudo-slug
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    items.push({
      name,
      slug,
      desc: `Create your ${name.toLowerCase()} in seconds.`
    });
  }
  
  acc[cat.id] = items;
  return acc;
}, {});
