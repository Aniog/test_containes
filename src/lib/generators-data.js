export const strings = {
  en: {
    common: {
      breadcrumbHome: "Strikingly",
      breadcrumbCurrent: "AI Generators",
      ctaStartBuilding: "START BUILDING - IT'S FREE",
      ctaBrowseGenerators: "BROWSE GENERATORS",
      ctaStartWithAI: "START WITH AI BUILDER",
      clearSearch: "Clear search",
      noResults: "Can't find it? Start with our AI builder.",
      showAll: "Show all {count} generators",
    },
    hero: {
      line1: "BUILD ANY KIND OF SITE",
      line2: "WITH AI, IN AN INSTANT",
      subheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    },
    featured: {
      title: "FEATURED GENERATORS",
      subtitle: "A few common starting points.",
    },
    categories: {
      title: "BROWSE BY CATEGORY",
      items: [
        { id: "websites", name: "Websites", description: "AI-built business and personal sites for any goal." },
        { id: "landing-pages", name: "Landing Pages", description: "Single-page sites built to convert visitors fast." },
        { id: "portfolios", name: "Portfolios", description: "Showcase your work with a clean, focused site." },
        { id: "blogs", name: "Blogs", description: "Publish-ready blogs with built-in SEO basics." },
        { id: "stores", name: "Online Stores", description: "Sell products online with payments built in." },
        { id: "link-in-bio", name: "Link-in-Bio", description: "One link, all your places. Made for creators." },
      ]
    },
    allGenerators: {
      title: "ALL GENERATORS",
      subtitle: "Sixty-plus generators, organized by what you're building.",
      searchPlaceholder: "Search generators...",
      matchCount: "{count} generators match",
    },
    howItWorks: {
      title: "HOW IT WORKS",
      steps: [
        { title: "PICK A GENERATOR", text: "Browse by category or search to find one that fits your goal." },
        { title: "DESCRIBE YOUR SITE", text: "Tell our AI builder about your business in a sentence or two." },
        { title: "GENERATE AND PUBLISH", text: "Get a fully built site in seconds. Customize anything, then go live." },
      ]
    },
    whyStrikingly: {
      title: "WHY STRIKINGLY",
      features: [
        { title: "LIVE IN SECONDS", text: "Describe your site, we build it. No setup, no learning curve." },
        { title: "MOBILE BY DEFAULT", text: "Every generator produces responsive sites that work on any device." },
        { title: "FREE TO START", text: "Generate, customize, and publish without a credit card." },
      ]
    },
    faq: {
      title: "FREQUENTLY ASKED QUESTIONS",
      items: [
        { 
          question: "What is an AI site generator?", 
          answer: "An AI site generator is a tool that uses artificial intelligence to create a complete website based on a simple description. Instead of starting from a blank page or a rigid template, you tell the AI what your site is for, and it generates the layout, copy, and images for you instantly."
        },
        { 
          question: "How is a generator different from a template?", 
          answer: "Templates are pre-made designs that you have to manually fill with content. A generator, on the other hand, creates a custom site structure and content specifically for your needs. It's like having a professional designer and copywriter build your first draft in seconds."
        },
        { 
          question: "Are these generators free to use?", 
          answer: "Yes, you can use any of our AI generators to build and preview your site for free. You only need to choose a plan when you're ready to publish to a custom domain or access advanced professional features."
        },
        { 
          question: "What kinds of sites can I build?", 
          answer: "You can build almost anything! From business websites and personal portfolios to landing pages, blogs, and online stores. Our AI is trained on hundreds of industries and use cases to ensured tailored results."
        },
        { 
          question: "Can I customize what the generator produces?", 
          answer: "Absolutely. Once the AI generates your site, you have full control. You can edit text, swap images, change colors and fonts, and add or remove sections using our intuitive drag-and-drop editor."
        },
        { 
          question: "Do generated sites work on mobile?", 
          answer: "Yes, every site created with Strikingly AI is fully responsive by default. Your site will look great and function perfectly on desktops, tablets, and smartphones without any extra work."
        },
      ]
    },
    closing: {
      title: "READY TO BUILD?",
      sub: "Pick a generator above, or jump straight into our AI builder.",
    }
  }
};

export const generatorData = [
  // Websites
  { slug: "ai-website-generator", name: "AI Website Generator", description: "Describe your business, get a full site", category: "Websites", catSlug: "websites" },
  { slug: "one-page-website-builder", name: "One-Page Website Builder", description: "Simple sites, single scroll", category: "Websites", catSlug: "websites" },
  { slug: "wedding-website-generator", name: "Wedding Website Generator", description: "Share your day with guests", category: "Websites", catSlug: "websites" },
  { slug: "restaurant-website-builder", name: "Restaurant Website Builder", description: "Menu, hours, reservations, done", category: "Websites", catSlug: "websites" },
  { slug: "ai-website-builder-for-photographers", name: "AI Website Builder for Photographers", description: "Showcase your gallery with AI", category: "Websites", catSlug: "websites" },
  { slug: "free-website-builder-for-small-business", name: "Free Website Builder for Small Business", description: "Get online quickly and easily", category: "Websites", catSlug: "websites" },
  { slug: "yoga-instructor-website-builder", name: "Yoga Instructor Website Builder", description: "Book classes and share your practice", category: "Websites", catSlug: "websites" },
  { slug: "real-estate-website-generator", name: "Real Estate Website Generator", description: "List properties and capture leads", category: "Websites", catSlug: "websites" },
  { slug: "non-profit-website-builder", name: "Non-Profit Website Builder", description: "Raise awareness and donations", category: "Websites", catSlug: "websites" },
  { slug: "consultant-website-generator", name: "Consultant Website Generator", description: "Build authority and book clients", category: "Websites", catSlug: "websites" },

  // Landing Pages
  { slug: "ai-landing-page-maker", name: "AI Landing Page Maker", description: "One-page sites built to convert", category: "Landing Pages", catSlug: "landing-pages" },
  { slug: "free-landing-page-generator", name: "Free Landing Page Generator", description: "Create high-converting pages for free", category: "Landing Pages", catSlug: "landing-pages" },
  { slug: "product-launch-landing-page", name: "Product Launch Landing Page", description: "Build hype for your next big thing", category: "Landing Pages", catSlug: "landing-pages" },
  { slug: "mobile-app-landing-page", name: "Mobile App Landing Page", description: "Drive downloads for your iOS or Android app", category: "Landing Pages", catSlug: "landing-pages" },
  { slug: "ebook-landing-page-generator", name: "Ebook Landing Page Generator", description: "Sell your digital books with ease", category: "Landing Pages", catSlug: "landing-pages" },
  { slug: "event-registration-landing-page", name: "Event Registration Landing Page", description: "Capture RSVPs for your next event", category: "Landing Pages", catSlug: "landing-pages" },
  { slug: "waitlist-landing-page-maker", name: "Waitlist Landing Page Maker", description: "Build your early access list", category: "Landing Pages", catSlug: "landing-pages" },
  { slug: "webinar-signup-page-builder", name: "Webinar Signup Page Builder", description: "Promote your online workshops", category: "Landing Pages", catSlug: "landing-pages" },

  // Portfolios
  { slug: "free-portfolio-generator", name: "Free Portfolio Generator", description: "For creatives, in minutes, no fee", category: "Portfolios", catSlug: "portfolios" },
  { slug: "portfolio-generator-for-designers", name: "Portfolio Generator for Designers", description: "Showcase your visual work", category: "Portfolios", catSlug: "portfolios" },
  { slug: "developer-portfolio-builder", name: "Developer Portfolio Builder", description: "Display your projects and skills", category: "Portfolios", catSlug: "portfolios" },
  { slug: "writer-portfolio-generator", name: "Writer Portfolio Generator", description: "Share your articles and stories", category: "Portfolios", catSlug: "portfolios" },
  { slug: "artist-portfolio-maker", name: "Artist Portfolio Maker", description: "Beautiful galleries for your art", category: "Portfolios", catSlug: "portfolios" },
  { slug: "student-portfolio-builder", name: "Student Portfolio Builder", description: "Build your professional online presence", category: "Portfolios", catSlug: "portfolios" },
  { slug: "interior-design-portfolio", name: "Interior Design Portfolio", description: "Present your spaces and style", category: "Portfolios", catSlug: "portfolios" },
  { slug: "architecture-portfolio-generator", name: "Architecture Portfolio Generator", description: "Modern layouts for your projects", category: "Portfolios", catSlug: "portfolios" },

  // Blogs
  { slug: "blog-generator-for-beginners", name: "Blog Generator for Beginners", description: "Publish-ready in minutes", category: "Blogs", catSlug: "blogs" },
  { slug: "ai-blog-builder", name: "AI Blog Builder", description: "Get a custom blog with AI-generated posts", category: "Blogs", catSlug: "blogs" },
  { slug: "lifestyle-blog-generator", name: "Lifestyle Blog Generator", description: "Share your experiences and advice", category: "Blogs", catSlug: "blogs" },
  { slug: "travel-blog-maker", name: "Travel Blog Maker", description: "Document your adventures around the world", category: "Blogs", catSlug: "blogs" },
  { slug: "food-blog-generator", name: "Food Blog Generator", description: "Share recipes and culinary reviews", category: "Blogs", catSlug: "blogs" },
  { slug: "tech-blog-builder", name: "Tech Blog Builder", description: "Discuss the latest industry trends", category: "Blogs", catSlug: "blogs" },
  { slug: "personal-blog-generator", name: "Personal Blog Generator", description: "Your own space on the internet", category: "Blogs", catSlug: "blogs" },
  { slug: "fashion-blog-maker", name: "Fashion Blog Maker", description: "Showcase your style and trends", category: "Blogs", catSlug: "blogs" },

  // Stores
  { slug: "online-store-builder", name: "Online Store Builder", description: "Start selling without writing code", category: "Online Stores", catSlug: "stores" },
  { slug: "ecommerce-store-generator", name: "E-commerce Store Generator", description: "Full-featured online shop in seconds", category: "Online Stores", catSlug: "stores" },
  { slug: "clothing-store-builder", name: "Clothing Store Builder", description: "Sell your fashion brand online", category: "Online Stores", catSlug: "stores" },
  { slug: "digital-product-store", name: "Digital Product Store", description: "Sell downloads, courses, and more", category: "Online Stores", catSlug: "stores" },
  { slug: "jewelry-store-generator", name: "Jewelry Store Generator", description: "Elegant shop for your creations", category: "Online Stores", catSlug: "stores" },
  { slug: "home-decor-store-maker", name: "Home Decor Store Maker", description: "Curate and sell beautiful items", category: "Online Stores", catSlug: "stores" },
  { slug: "beauty-store-builder", name: "Beauty Store Builder", description: "Sell cosmetics and skincare products", category: "Online Stores", catSlug: "stores" },
  { slug: "subscription-box-store", name: "Subscription Box Store", description: "Manage recurring orders easily", category: "Online Stores", catSlug: "stores" },

  // Link-in-Bio
  { slug: "link-in-bio-generator", name: "Link-in-Bio Generator", description: "One link for all your channels", category: "Link-in-Bio", catSlug: "link-in-bio" },
  { slug: "instagram-link-page-builder", name: "Instagram Link Page Builder", description: "Optimized for your social profile", category: "Link-in-Bio", catSlug: "link-in-bio" },
  { slug: "tiktok-bio-link-maker", name: "TikTok Bio Link Maker", description: "Connect with your followers", category: "Link-in-Bio", catSlug: "link-in-bio" },
  { slug: "creator-link-in-bio", name: "Creator Link-in-Bio", description: "Central node for all your content", category: "Link-in-Bio", catSlug: "link-in-bio" },
  { slug: "musician-link-page", name: "Musician Link Page", description: "Share your latest tracks and tour dates", category: "Link-in-Bio", catSlug: "link-in-bio" },
  { slug: "influencer-bio-generator", name: "Influencer Bio Generator", description: "Built for brand partnerships", category: "Link-in-Bio", catSlug: "link-in-bio" },
  { slug: "podcast-link-in-bio", name: "Podcast Link-in-Bio", description: "Direct listeners to all platforms", category: "Link-in-Bio", catSlug: "link-in-bio" },
  { slug: "author-link-page", name: "Author Link Page", description: "Promote your books and social media", category: "Link-in-Bio", catSlug: "link-in-bio" },
];

export const featuredSlugs = [
  "ai-website-generator",
  "free-portfolio-generator",
  "ai-landing-page-maker",
  "online-store-builder",
  "link-in-bio-generator",
  "one-page-website-builder",
  "wedding-website-generator",
  "restaurant-website-builder",
  "blog-generator-for-beginners",
];
