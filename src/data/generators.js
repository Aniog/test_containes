export const strings = {
  en: {
    siteTitle: "Strikingly AI",
    breadcrumb: {
      home: "Strikingly",
      current: "AI Generators"
    },
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
    browseByCategory: {
      title: "BROWSE BY CATEGORY",
      categories: {
        websites: {
          title: "Websites",
          description: "AI-built business and personal sites for any goal.",
          slug: "websites"
        },
        landingPages: {
          title: "Landing Pages",
          description: "Single-page sites built to convert visitors fast.",
          slug: "landing-pages"
        },
        portfolios: {
          title: "Portfolios",
          description: "Showcase your work with a clean, focused site.",
          slug: "portfolios"
        },
        blogs: {
          title: "Blogs",
          description: "Publish-ready blogs with built-in SEO basics.",
          slug: "blogs"
        },
        stores: {
          title: "Online Stores",
          description: "Sell products online with payments built in.",
          slug: "stores"
        },
        linkInBio: {
          title: "Link-in-Bio",
          description: "One link, all your places. Made for creators.",
          slug: "link-in-bio"
        }
      }
    },
    allGenerators: {
      title: "ALL GENERATORS",
      subtitle: "Sixty-plus generators, organized by what you're building.",
      searchPlaceholder: "Search generators...",
      searchAriaLabel: "Search generators",
      matchCount: "{count} generators match",
      noResults: "Can't find it? Start with our AI builder.",
      clearSearch: "Clear search",
      showAll: "Show all {count} generators",
      showLess: "Show less"
    },
    howItWorks: {
      title: "HOW IT WORKS",
      steps: [
        {
          title: "PICK A GENERATOR",
          description: "Browse by category or search to find one that fits your goal."
        },
        {
          title: "DESCRIBE YOUR SITE",
          description: "Tell our AI builder about your business in a sentence or two."
        },
        {
          title: "GENERATE AND PUBLISH",
          description: "Get a fully built site in seconds. Customize anything, then go live."
        }
      ]
    },
    whyStrikingly: {
      title: "WHY STRIKINGLY",
      features: [
        {
          title: "LIVE IN SECONDS",
          description: "Describe your site, we build it. No setup, no learning curve."
        },
        {
          title: "MOBILE BY DEFAULT",
          description: "Every generator produces responsive sites that work on any device."
        },
        {
          title: "FREE TO START",
          description: "Generate, customize, and publish without a credit card."
        }
      ]
    },
    faq: {
      title: "FREQUENTLY ASKED QUESTIONS",
      questions: [
        {
          q: "What is an AI site generator?",
          a: "An AI site generator is a tool that uses artificial intelligence to create a complete website based on a simple text description. Instead of starting with a blank canvas or a rigid template, you tell the AI what your site is about, and it generates the layout, copy, and images for you in seconds."
        },
        {
          q: "How is a generator different from a template?",
          a: "Templates are static starting points that require you to manually replace all placeholder content and rearrange elements. A generator, on the other hand, builds a unique site structure and writes custom content specifically tailored to your description, saving you hours of design and copywriting work."
        },
        {
          q: "Are these generators free to use?",
          a: "Yes! You can use any of our AI generators to build and customize your site for free. You only pay if you decide to upgrade to one of our premium plans for advanced features like a custom domain, more bandwidth, or an online store."
        },
        {
          q: "What kinds of sites can I build?",
          a: "Our AI is capable of building almost any type of site, including business websites, landing pages, personal portfolios, blogs, event pages, and online stores. With over 60 specialized generators, we have a starting point for virtually every industry and use case."
        },
        {
          q: "Can I customize what the generator produces?",
          a: "Absolutely. Once the AI has generated your initial site, you have full control. You can change colors, swap fonts, add or remove sections, and edit any text or image using our intuitive drag-and-drop editor. The AI gives you a head start, but the final site is entirely yours."
        },
        {
          q: "Do generated sites work on mobile?",
          a: "Yes. Every site created with our AI generators is fully responsive by default. This means your website will automatically adjust its layout to look great on desktops, tablets, and smartphones, ensuring a seamless experience for all your visitors."
        }
      ]
    },
    closingCTA: {
      title: "READY TO BUILD?",
      subtitle: "Pick a generator above, or jump straight into our AI builder.",
      button: "START WITH AI BUILDER"
    },
    footer: {
      about: "About",
      pricing: "Pricing",
      templates: "Templates",
      support: "Support",
      blog: "Blog",
      terms: "Terms",
      privacy: "Privacy",
      copyright: "© 2026 Strikingly"
    }
  }
};

export const generatorData = [
  // Website Category
  { id: "ai-website-generator", name: "AI Website Generator", description: "Describe your business, get a full site", category: "websites", slug: "ai-website-generator" },
  { id: "one-page-website-builder", name: "One-Page Website Builder", description: "Simple sites, single scroll", category: "websites", slug: "one-page-website-builder" },
  { id: "wedding-website-generator", name: "Wedding Website Generator", description: "Share your day with guests", category: "websites", slug: "wedding-website-generator" },
  { id: "restaurant-website-builder", name: "Restaurant Website Builder", description: "Menu, hours, reservations, done", category: "websites", slug: "restaurant-website-builder" },
  { id: "coffee-shop-generator", name: "Coffee Shop Website Generator", description: "Brew up a beautiful online presence", category: "websites", slug: "coffee-shop-generator" },
  { id: "dentist-website-builder", name: "AI Builder for Dentists", description: "Professional sites for your practice", category: "websites", slug: "dentist-website-builder" },
  { id: "law-firm-generator", name: "Law Firm Website Generator", description: "Build trust with a polished legal site", category: "websites", slug: "law-firm-generator" },
  { id: "saas-landing-page", name: "SaaS Startup Generator", description: "Launch your product with AI speed", category: "websites", slug: "saas-landing-page" },
  { id: "event-website-builder", name: "Event & Conference Builder", description: "Manage tickets and details easily", category: "websites", slug: "event-website-builder" },
  { id: "non-profit-generator", name: "Non-Profit Organization Site", description: "Raise awareness and donations", category: "websites", slug: "non-profit-generator" },

  // Landing Pages Category
  { id: "ai-landing-page-maker", name: "AI Landing Page Maker", description: "One-page sites built to convert", category: "landing-pages", slug: "ai-landing-page-maker" },
  { id: "mobile-app-landing-page", name: "Mobile App Landing Page", description: "Get more downloads via AI magic", category: "landing-pages", slug: "mobile-app-landing-page" },
  { id: "lead-magnet-page", name: "Lead Magnet Generator", description: "Build your email list in minutes", category: "landing-pages", slug: "lead-magnet-page" },
  { id: "webinar-registration", name: "Webinar Registration Page", description: "Fill your seats with a high-converting page", category: "landing-pages", slug: "webinar-registration" },
  { id: "pre-launch-page", name: "Product Pre-launch Generator", description: "Hype up your next big release", category: "landing-pages", slug: "pre-launch-page" },
  { id: "ebook-landing-page", name: "Ebook Sales Page Maker", description: "Sell your digital books instantly", category: "landing-pages", slug: "ebook-landing-page" },
  { id: "consulting-landing-page", name: "Consulting Landing Page", description: "Turn visitors into high-value clients", category: "landing-pages", slug: "consulting-landing-page" },
  { id: "real-estate-landing-page", name: "Real Estate Listing Page", description: "Showcase properties and capture leads", category: "landing-pages", slug: "real-estate-landing-page" },

  // Portfolios Category
  { id: "free-portfolio-generator", name: "Free Portfolio Generator", description: "For creatives, in minutes, no fee", category: "portfolios", slug: "free-portfolio-generator" },
  { id: "photography-portfolio", name: "Photography Portfolio Builder", description: "Let your photos speak for themselves", category: "portfolios", slug: "photography-portfolio" },
  { id: "graphic-design-portfolio", name: "Graphic Designer Portfolio", description: "Showcase your visual work with style", category: "portfolios", slug: "graphic-design-portfolio" },
  { id: "developer-portfolio", name: "Developer Portfolio Generator", description: "Highlight your code and projects", category: "portfolios", slug: "developer-portfolio" },
  { id: "architecture-portfolio", name: "Architecture Portfolio Builder", description: "Build a home for your grand designs", category: "portfolios", slug: "architecture-portfolio" },
  { id: "copywriter-portfolio", name: "Copywriter Portfolio Maker", description: "Present your words in a clean layout", category: "portfolios", slug: "copywriter-portfolio" },
  { id: "artist-portfolio-generator", name: "Artist Portfolio Generator", description: "Digital gallery for your masterpieces", category: "portfolios", slug: "artist-portfolio-generator" },
  { id: "model-portfolio-builder", name: "Model Portfolio Generator", description: "Your professional lookbook online", category: "portfolios", slug: "model-portfolio-builder" },

  // Blogs Category
  { id: "blog-generator-beginners", name: "Blog Generator for Beginners", description: "Publish-ready in minutes", category: "blogs", slug: "blog-generator-beginners" },
  { id: "travel-blog-generator", name: "Travel Blog Builder", description: "Share your adventures with the world", category: "blogs", slug: "travel-blog-generator" },
  { id: "food-blog-maker", name: "Food Blog Generator", description: "Delicious layouts for your recipes", category: "blogs", slug: "food-blog-maker" },
  { id: "lifestyle-blog-builder", name: "Lifestyle Blog Generator", description: "Capture daily life and interests", category: "blogs", slug: "lifestyle-blog-builder" },
  { id: "tech-blog-generator", name: "Tech News Blog Builder", description: "Review and report on the latest gadgets", category: "blogs", slug: "tech-blog-generator" },
  { id: "personal-blog-maker", name: "Personal Blog Generator", description: "Your own corner of the internet", category: "blogs", slug: "personal-blog-maker" },
  { id: "fitness-blog-builder", name: "Fitness & Wellness Blog", description: "Empower others with health advice", category: "blogs", slug: "fitness-blog-builder" },
  { id: "financial-blog-generator", name: "Financial Advice Blog", description: "Share insights on wealth and money", category: "blogs", slug: "financial-blog-generator" },

  // Stores Category
  { id: "online-store-builder", name: "Online Store Builder", description: "Start selling without writing code", category: "stores", slug: "online-store-builder" },
  { id: "fashion-store-generator", name: "Fashion Boutique Builder", description: "Start your clothing line today", category: "stores", slug: "fashion-store-generator" },
  { id: "jewelry-store-maker", name: "Jewelry Store Generator", description: "Sell sparkle and shine with ease", category: "stores", slug: "jewelry-store-maker" },
  { id: "home-decor-store", name: "Home Decor Store Finder", description: "Stylish shops for beautiful spaces", category: "stores", slug: "home-decor-store" },
  { id: "art-shop-generator", name: "Online Art Gallery Store", description: "Sell prints and originals directly", category: "stores", slug: "art-shop-generator" },
  { id: "electronics-store-builder", name: "Electronics Store Maker", description: "Sell devices and tech accessories", category: "stores", slug: "electronics-store-builder" },
  { id: "subscription-box-store", name: "Subscription Box Generator", description: "Recurring revenue made simple", category: "stores", slug: "subscription-box-store" },
  { id: "pet-supplies-store", name: "Pet Supplies Store Builder", description: "Everything for furry friends online", category: "stores", slug: "pet-supplies-store" },

  // Link-in-Bio Category
  { id: "link-in-bio-generator", name: "Link-in-Bio Generator", description: "One link, all your places. Made for creators.", category: "link-in-bio", slug: "link-in-bio-generator" },
  { id: "instagram-link-in-bio", name: "Instagram Bio Link Page", description: "Turn followers into customers", category: "link-in-bio", slug: "instagram-link-in-bio" },
  { id: "tiktok-bio-generator", name: "TikTok Bio Link Builder", description: "Your videos, now with better links", category: "link-in-bio", slug: "tiktok-bio-generator" },
  { id: "creator-hub-page", name: "Creator Portfolio hub", description: "Centralize your social presence", category: "link-in-bio", slug: "creator-hub-page" },
  { id: "podcaster-link-bio", name: "Podcaster Bio Page", description: "All your episodes in one link", category: "link-in-bio", slug: "podcaster-link-bio" },
  { id: "musician-link-bio", name: "Musician Bio Page", description: "Streams, tours, and merch together", category: "link-in-bio", slug: "musician-link-bio" },
  { id: "author-bio-generator", name: "Author Profile Bio Page", description: "Connect with readers everywhere", category: "link-in-bio", slug: "author-bio-generator" },
  { id: "influencer-press-kit", name: "Influencer Media Kit Page", description: "Get brand deals with data-lite bio", category: "link-in-bio", slug: "influencer-press-kit" }
];

export const featuredGenerators = [
  "ai-website-generator",
  "free-portfolio-generator",
  "ai-landing-page-maker",
  "online-store-builder",
  "link-in-bio-generator",
  "one-page-website-builder",
  "wedding-website-generator",
  "restaurant-website-builder",
  "blog-generator-beginners"
];
