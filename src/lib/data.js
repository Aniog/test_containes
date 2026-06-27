export const strings = {
  en: {
    siteTitle: "strikingly AI",
    hero: {
      line1: "BUILD ANY KIND OF SITE",
      line2: "WITH AI, IN AN INSTANT",
      subheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      primaryCTA: "START BUILDING - IT'S FREE",
      secondaryCTA: "BROWSE GENERATORS"
    },
    featured: {
      title: "FEATURED GENERATORS",
      subtitle: "A few common starting points."
    },
    categories: {
      title: "BROWSE BY CATEGORY",
      items: [
        { id: "websites", name: "Websites", slug: "websites", description: "AI-built business and personal sites for any goal." },
        { id: "landing-pages", name: "Landing Pages", slug: "landing-pages", description: "Single-page sites built to convert visitors fast." },
        { id: "portfolios", name: "Portfolios", slug: "portfolios", description: "Showcase your work with a clean, focused site." },
        { id: "blogs", name: "Blogs", slug: "blogs", description: "Publish-ready blogs with built-in SEO basics." },
        { id: "stores", name: "Online Stores", slug: "stores", description: "Sell products online with payments built in." },
        { id: "link-in-bio", name: "Link-in-Bio", slug: "link-in-bio", description: "One link, all your places. Made for creators." }
      ]
    },
    allGenerators: {
      title: "ALL GENERATORS",
      subtitle: "Sixty-plus generators, organized by what you're building.",
      searchPlaceholder: "Search generators...",
      matchCount: "{count} generators match",
      emptyState: {
        text: "Can't find it? Start with our AI builder.",
        clearSearch: "Clear search"
      },
      showAll: "Show all {count} generators"
    },
    howItWorks: {
      title: "HOW IT WORKS",
      steps: [
        { title: "PICK A GENERATOR", description: "Browse by category or search to find one that fits your goal." },
        { title: "DESCRIBE YOUR SITE", description: "Tell our AI builder about your business in a sentence or two." },
        { title: "GENERATE AND PUBLISH", description: "Get a fully built site in seconds. Customize anything, then go live." }
      ]
    },
    whyStrikingly: {
      title: "WHY STRIKINGLY",
      features: [
        { title: "LIVE IN SECONDS", description: "Describe your site, we build it. No setup, no learning curve." },
        { title: "MOBILE BY DEFAULT", description: "Every generator produces responsive sites that work on any device." },
        { title: "FREE TO START", description: "Generate, customize, and publish without a credit card." }
      ]
    },
    faq: {
      title: "FREQUENTLY ASKED QUESTIONS",
      items: [
        {
          question: "What is an AI site generator?",
          answer: "An AI site generator is a tool that uses artificial intelligence to create a complete website based on your text description. It selects the layout, images, and copy that best fit your needs automatically."
        },
        {
          question: "How is a generator different from a template?",
          answer: "Templates are static structures where you manually replace placeholder content. A generator actively builds a custom site for you, choosing the right components and generating unique copy and image suggestions based on your input."
        },
        {
          question: "Are these generators free to use?",
          answer: "Yes, you can browse all our generators and start building for free. You only pay if you decide to upgrade to a premium plan for custom domains or advanced features."
        },
        {
          question: "What kinds of sites can I build?",
          answer: "You can build almost anything! From business websites and personal portfolios to landing pages for specific marketing campaigns, blogs, and even full online stores."
        },
        {
          question: "Can I customize what the generator produces?",
          answer: "Absolutely. Once the AI has generated your initial site, you can use our intuitive editor to change colors, fonts, layouts, and any content until it's exactly how you want it."
        },
        {
          question: "Do generated sites work on mobile?",
          answer: "Every site we generate is mobile-responsive by default. Your content will automatically reorganizing itself to look great on phones, tablets, and desktop screens."
        }
      ]
    },
    cta: {
      title: "READY TO BUILD?",
      subtitle: "Pick a generator above, or jump straight into our AI builder.",
      button: "START WITH AI BUILDER"
    }
  }
};

export const generatorsData = [
  { id: 1, name: "AI Website Generator", description: "Describe your business, get a full site", category: "Websites", slug: "ai-website-generator" },
  { id: 2, name: "Free Portfolio Generator", description: "For creatives, in minutes, no fee", category: "Portfolios", slug: "free-portfolio-generator" },
  { id: 3, name: "AI Landing Page Maker", description: "One-page sites built to convert", category: "Landing Pages", slug: "ai-landing-page-maker" },
  { id: 4, name: "Online Store Builder", description: "Start selling without writing code", category: "Online Stores", slug: "online-store-builder" },
  { id: 5, name: "Link-in-Bio Generator", description: "One link for all your channels", category: "Link-in-Bio", slug: "link-in-bio-generator" },
  { id: 6, name: "One-Page Website Builder", description: "Simple sites, single scroll", category: "Websites", slug: "one-page-website-builder" },
  { id: 7, name: "Wedding Website Generator", description: "Share your day with guests", category: "Websites", slug: "wedding-website-generator" },
  { id: 8, name: "Restaurant Website Builder", description: "Menu, hours, reservations, done", category: "Websites", slug: "restaurant-website-builder" },
  { id: 9, name: "Blog Generator for Beginners", description: "Publish-ready in minutes", category: "Blogs", slug: "blog-generator-for-beginners" }
];

export const allGeneratorsData = {
  websites: [
    { name: "AI Website Generator", description: "Generate a complete website for any purpose with AI.", slug: "ai-website-generator" },
    { name: "Website Builder for Photographers", description: "Showcase your photography with a professional website.", slug: "photographer-website" },
    { name: "One-Page Wedding Website Builder", description: "Create a beautiful one-page site for your big day.", slug: "wedding-website" },
    { name: "Business Website Maker", description: "Establish your brand with a scalable business platform.", slug: "business-website" },
    { name: "AI Web Design for Coaching", description: "Attract more clients with a high-converting coaching site.", slug: "coaching-website" },
    { name: "Real Estate Website Generator", description: "List properties and capture leads effectively.", slug: "real-estate-website" },
    { name: "Free Website for Non-Profits", description: "Spread your message and collect donations online.", slug: "non-profit-website" },
    { name: "AI Site for Law Firms", description: "A professional online presence for legal professionals.", slug: "law-firm-website" },
    { name: "One-Page Personal Website", description: "Your digital business card, live in seconds.", slug: "personal-website" },
    { name: "Restaurant Website Builder", description: "Menu, reservations, and location details online.", slug: "restaurant-website" }
  ],
  "landing-pages": [
    { name: "AI Landing Page Maker", description: "High-converting one-page sites built for results.", slug: "ai-landing-page" },
    { name: "Product Launch Page Generator", description: "Build excitement for your new product release.", slug: "product-launch" },
    { name: "Lead Generation Site Builder", description: "Capture emails and grow your marketing list.", slug: "lead-gen" },
    { name: "Webinar Registration Page", description: "Get more signups for your online events.", slug: "webinar-page" },
    { name: "Ebook Download Landing Page", description: "Promote and distribute your digital content.", slug: "ebook-page" },
    { name: "App Landing Page Builder", description: "Showcase your mobile app with a clean site.", slug: "app-page" },
    { name: "Coming Soon Page Generator", description: "Start building your audience before you launch.", slug: "coming-soon" },
    { name: "Event Page Maker", description: "Promote your workshop, conference, or party.", slug: "event-page" }
  ],
  portfolios: [
    { name: "Free Portfolio Generator", description: "Modern portfolios for designers and artists.", slug: "free-portfolio" },
    { name: "Writer Portfolio Maker", description: "Showcase your articles and clips beautifully.", slug: "writer-portfolio" },
    { name: "Developer Portfolio Site", description: "Display your projects and coding skills.", slug: "developer-portfolio" },
    { name: "Video Portfolio Builder", description: "Focus on your reel and video projects.", slug: "video-portfolio" },
    { name: "Modeling Portfolio Generator", description: "Professional headshots and stats page.", slug: "model-portfolio" },
    { name: "Music Portfolio for Artists", description: "Stream tracks and announce tour dates.", slug: "music-portfolio" },
    { name: "Architecture Portfolio Site", description: "High-resolution project galleries.", slug: "architecture-portfolio" },
    { name: "Student Portfolio Maker", description: "Stand out to employers with your best work.", slug: "student-portfolio" }
  ],
  blogs: [
    { name: "Blog Generator for Beginners", description: "Simple blogging platform with SEO built-in.", slug: "beginner-blog" },
    { name: "Travel Blog Builder", description: "Share your adventures with photo journals.", slug: "travel-blog" },
    { name: "Food Blog Generator", description: "Recipe layouts and cooking tips platform.", slug: "food-blog" },
    { name: "Tech Blog Maker", description: "Review gadgets and share industry news.", slug: "tech-blog" },
    { name: "Fashion Blog Builder", description: "Showcase trends and your personal style.", slug: "fashion-blog" },
    { name: "Lifestyle Blog Generator", description: "A beautiful space for your daily stories.", slug: "lifestyle-blog" },
    { name: "Finance Blog Maker", description: "Share investment advice and money tips.", slug: "finance-blog" },
    { name: "Niche Affiliate Blog", description: "Optimized for reviews and affiliate marketing.", slug: "affiliate-blog" }
  ],
  stores: [
    { name: "Online Store Builder", description: "Launch your e-commerce business in minutes.", slug: "online-store" },
    { name: "Clothing Store Generator", description: "Sell apparel with ease and style.", slug: "clothing-store" },
    { name: "Jewelry Shop Maker", description: "Elegant showcase for your handmade pieces.", slug: "jewelry-store" },
    { name: "Digital Product Store", description: "Sell downloads, courses, and software.", slug: "digital-store" },
    { name: "Dropshipping Store Builder", description: "Integrated with popular fulfillment tools.", slug: "dropshipping-store" },
    { name: "Coffee Shop Online Orders", description: "Sell beans and take pickup orders.", slug: "coffee-store" },
    { name: "Art Print Shop Builder", description: "High-quality galleries and print sales.", slug: "art-store" },
    { name: "Subscription Box Site", description: "Managed recurring billing for your boxes.", slug: "subscription-store" }
  ],
  "link-in-bio": [
    { name: "Link-in-Bio Generator", description: "The ultimate hub for all your social links.", slug: "link-in-bio" },
    { name: "Social Link Page for Influencers", description: "Monetize your audience from one page.", slug: "influencer-links" },
    { name: "Creator Hub Site Builder", description: "Deep links to all your platforms.", slug: "creator-hub" },
    { name: "Musician Link-in-Bio", description: "Links to Spotify, Apple Music, and more.", slug: "musician-links" },
    { name: "Podcast Link Page Maker", description: "One link for all your show platforms.", slug: "podcast-links" },
    { name: "Streamer Link Hub", description: "Live status and social links for gamers.", slug: "streamer-links" },
    { name: "Course Creator Link Page", description: "Direct your students to your latest content.", slug: "course-links" },
    { name: "Short Link Landing Page", description: "Beautiful custom redirects for your brand.", slug: "short-links" }
  ]
};
