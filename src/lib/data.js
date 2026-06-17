export const generatorsData = [
  { name: "AI Website Generator", description: "Describe your business, get a full site", category: "Website", categoryId: "websites" },
  { name: "Free Portfolio Generator", description: "For creatives, in minutes, no fee", category: "Portfolio", categoryId: "portfolios" },
  { name: "AI Landing Page Maker", description: "One-page sites built to convert", category: "Landing Page", categoryId: "landing-pages" },
  { name: "Online Store Builder", description: "Start selling without writing code", category: "Store", categoryId: "stores" },
  { name: "Link-in-Bio Generator", description: "One link for all your places. Made for creators.", category: "Link-in-Bio", categoryId: "link-in-bio" },
  { name: "One-Page Website Builder", description: "Simple sites, single scroll", category: "Website", categoryId: "websites" },
  { name: "Wedding Website Generator", description: "Share your day with guests", category: "Website", categoryId: "websites" },
  { name: "Restaurant Website Builder", description: "Menu, hours, reservations, done", category: "Website", categoryId: "websites" },
  { name: "Blog Generator for Beginners", description: "Publish-ready in minutes", category: "Blog", categoryId: "blogs" },
  
  { name: "Real Estate Website Generator", description: "List properties and capture leads", category: "Website", categoryId: "websites" },
  { name: "Event Landing Page Builder", description: "Promote your next big event", category: "Landing Page", categoryId: "landing-pages" },
  { name: "Photography Portfolio Generator", description: "High-quality display for your shots", category: "Portfolio", categoryId: "portfolios" },
  { name: "Digital Products Store", description: "Sell e-books, courses, and more", category: "Store", categoryId: "stores" },
  { name: "Tech Blog Hub", description: "Write about latest innovations", category: "Blog", categoryId: "blogs" },
  { name: "Non-Profit Website Maker", description: "Build your cause's online home", category: "Website", categoryId: "websites" },
  { name: "App Landing Page Maker", description: "The perfect home for your iOS/Android app", category: "Landing Page", categoryId: "landing-pages" },
  { name: "Model Portfolio Builder", description: "A professional look for your career", category: "Portfolio", categoryId: "portfolios" },
  { name: "Grocery Store Builder", description: "Local delivery setup made easy", category: "Store", categoryId: "stores" },
  { name: "Travel Blog Template", description: "Share your adventures with the world", category: "Blog", categoryId: "blogs" },
  { name: "Spa Website Builder", description: "Relaxing sites for your wellness business", category: "Website", categoryId: "websites" },
  { name: "Consulting Landing Page", description: "Showcase your expertise and book clients", category: "Landing Page", categoryId: "landing-pages" },
  { name: "Architecture Portfolio", description: "Showcase your blueprints and builds", category: "Portfolio", categoryId: "portfolios" },
  { name: "Electronics Store Maker", description: "Sell gadgets and tech online", category: "Store", categoryId: "stores" },
  { name: "Foodie Blog Generator", description: "Recipes and reviews in a beautiful layout", category: "Blog", categoryId: "blogs" },
  { name: "Consultant Website Maker", description: "Professional presence for experts", category: "Website", categoryId: "websites" },
  { name: "Waitlist Landing Page", description: "Build hype before you launch", category: "Landing Page", categoryId: "landing-pages" },
  { name: "Developer Portfolio", description: "Showcase your code and projects", category: "Portfolio", categoryId: "portfolios" },
  { name: "Furniture Store Builder", description: "Sell home decor with ease", category: "Store", categoryId: "stores" },
  { name: "News Blog Generator", description: "Publish daily updates efficiently", category: "Blog", categoryId: "blogs" },
  { name: "Gym Website Generator", description: "Classes, schedules, and memberships", category: "Website", categoryId: "websites" },
  { name: "Webinar Landing Page", description: "Drive registrations for your live event", category: "Landing Page", categoryId: "landing-pages" },
  { name: "Writer Portfolio Maker", description: "A clean home for your articles", category: "Portfolio", categoryId: "portfolios" },
  { name: "Pet Store Builder", description: "Sell pet supplies and food", category: "Store", categoryId: "stores" },
  { name: "Lifestyle Blog Hub", description: "Share your daily inspiration", category: "Blog", categoryId: "blogs" },
  { name: "Education Website Builder", description: "Courses, schools, and tutoring", category: "Website", categoryId: "websites" },
  { name: "E-book Landing Page", description: "Convert readers into buyers", category: "Landing Page", categoryId: "landing-pages" },
  { name: "Student Portfolio Builder", description: "Kickstart your career with a site", category: "Portfolio", categoryId: "portfolios" },
  { name: "Beauty Store Maker", description: "Sell cosmetics and skincare", category: "Store", categoryId: "stores" },
  { name: "Parenting Blog Generator", description: "Advice and stories for families", category: "Blog", categoryId: "blogs" },
  { name: "Law Firm Website Generator", description: "Build trust with your legal practice", category: "Website", categoryId: "websites" },
  { name: "Conference Landing Page", description: "Full schedule and speaker lists", category: "Landing Page", categoryId: "landing-pages" },
  { name: "Agency Portfolio", description: "Showcase your client work", category: "Portfolio", categoryId: "portfolios" },
  { name: "T-Shirt Store Builder", description: "Design and sell your apparel", category: "Store", categoryId: "stores" },
  { name: "Gaming Blog Hub", description: "Reviews, news, and streams", category: "Blog", categoryId: "blogs" },
  { name: "Medical Practice Site", description: "Patient info and appointment booking", category: "Website", categoryId: "websites" },
  { name: "Product Launch Page", description: "Make a splash with your new item", category: "Landing Page", categoryId: "landing-pages" },

  { name: "Instagram Bio Generator", description: "Optimized link for your IG profile", category: "Link-in-Bio", categoryId: "link-in-bio" },
  { name: "TikTok Link Maker", description: "Direct your followers to your best content", category: "Link-in-Bio", categoryId: "link-in-bio" },
  { name: "Artist Bio Site", description: "Combine music, tour dates, and shop", category: "Link-in-Bio", categoryId: "link-in-bio" },
  { name: "Influencer Hub Builder", description: "Media kit and links in one page", category: "Link-in-Bio", categoryId: "link-in-bio" },
  { name: "Writer Link-in-Bio", description: "Links to your latest articles and books", category: "Link-in-Bio", categoryId: "link-in-bio" },
  { name: "Portfolio Link-in-Bio", description: "Quick preview of your work with links", category: "Link-in-Bio", categoryId: "link-in-bio" },
  { name: "Store Link-in-Bio", description: "Direct shoppable links for your social", category: "Link-in-Bio", categoryId: "link-in-bio" },
  { name: "Podcast Link-in-Bio", description: "Links to all major podcast platforms", category: "Link-in-Bio", categoryId: "link-in-bio" },
];

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};
