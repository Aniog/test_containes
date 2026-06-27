export const strings = {
  en: {
    common: {
      brandName: "strikingly",
      brandAi: "AI",
      breadcrumbBase: "Strikingly",
      breadcrumbCurrent: "AI Generators",
      ctaStartBuilding: "START BUILDING - IT'S FREE",
      ctaBrowse: "BROWSE GENERATORS",
      ctaStartAiBuilder: "START WITH AI BUILDER",
      searchPlaceholder: "Search generators...",
      matchCount: (count) => `${count} ${count === 1 ? 'generator matches' : 'generators match'}`,
      noResults: "Can't find it? Start with our AI builder.",
      clearSearch: "Clear search",
      showAll: (count, category) => `Show all ${count} ${category} generators`,
      hideAll: "Show less",
    },
    hero: {
      h1Line1: "BUILD ANY KIND OF SITE",
      h1Line2: "WITH AI, IN AN INSTANT",
      subheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    },
    featured: {
      title: "FEATURED GENERATORS",
      subtitle: "A few common starting points.",
    },
    categories: {
      title: "BROWSE BY CATEGORY",
      items: [
        { id: "websites", name: "Websites", desc: "AI-built business and personal sites for any goal.", slug: "websites" },
        { id: "landing-pages", name: "Landing Pages", desc: "Single-page sites built to convert visitors fast.", slug: "landing-pages" },
        { id: "portfolios", name: "Portfolios", desc: "Showcase your work with a clean, focused site.", slug: "portfolios" },
        { id: "blogs", name: "Blogs", desc: "Publish-ready blogs with built-in SEO basics.", slug: "blogs" },
        { id: "stores", name: "Online Stores", desc: "Sell products online with payments built in.", slug: "stores" },
        { id: "link-in-bio", name: "Link-in-Bio", desc: "One link, all your places. Made for creators.", slug: "link-in-bio" },
      ]
    },
    allGenerators: {
      title: "ALL GENERATORS",
      subtitle: "Sixty-plus generators, organized by what you're building.",
    },
    howItWorks: {
      title: "HOW IT WORKS",
      steps: [
        { title: "PICK A GENERATOR", desc: "Browse by category or search to find one that fits your goal." },
        { title: "DESCRIBE YOUR SITE", desc: "Tell our AI builder about your business in a sentence or two." },
        { title: "GENERATE AND PUBLISH", desc: "Get a fully built site in seconds. Customize anything, then go live." },
      ]
    },
    whyStrikingly: {
      title: "WHY STRIKINGLY",
      features: [
        { title: "LIVE IN SECONDS", desc: "Describe your site, we build it. No setup, no learning curve." },
        { title: "MOBILE BY DEFAULT", desc: "Every generator produces responsive sites that work on any device." },
        { title: "FREE TO START", desc: "Generate, customize, and publish without a credit card." },
      ]
    },
    faq: {
      title: "FREQUENTLY ASKED QUESTIONS",
      items: [
        {
          q: "What is an AI site generator?",
          a: "An AI site generator is a tool that uses artificial intelligence to create a complete website based on a simple description you provide. Instead of starting with a blank canvas or a static template, the AI processes your input to generate professional layouts, relevant copy, and appropriate imagery tailored to your specific needs."
        },
        {
          q: "How is a generator different from a template?",
          a: "While a template is a pre-designed container that you manually fill with content, a generator is dynamic. It builds the structure and content simultaneously. Our AI generators understand context—if you're building a restaurant site, it automatically includes sections for menus and hours, rather than you having to manually adapt a generic business template."
        },
        {
          q: "Are these generators free to use?",
          a: "Yes, you can browse, use any AI generator, and customize your resulting site for free. Strikingly allows you to generate and publish your first site without requiring a credit card, making it the perfect low-risk way to get your ideas online instantly."
        },
        {
          q: "What kinds of sites can I build?",
          a: "You can build almost anything! From complex business websites and online stores with integrated payments to simple link-in-bio pages and portfolios. Our directory includes over 60 specialized generators designed for photographers, restaurants, designers, wedding planning, and more."
        },
        {
          q: "Can I customize what the generator produces?",
          a: "Absolutely. The generator provides a professional foundation, but you maintain full control. Once your site is generated, you can use our intuitive editor to change colors, fonts, images, and layout blocks. You can add new pages or sections anytime as your site grows."
        },
        {
          q: "Do generated sites work on mobile?",
          a: "Every site created with our AI generators is fully responsive by default. This means your website will look and function perfectly on smartphones, tablets, and desktops without any extra effort on your part."
        }
      ]
    },
    footer: {
      title: "READY TO BUILD?",
      subtitle: "Pick a generator above, or jump straight into our AI builder.",
      copyright: `© ${new Date().getFullYear()} Strikingly, Inc.`,
    }
  }
};

export const featuredGenerators = [
  { name: "AI Website Generator", desc: "Describe your business, get a full site", category: "Website", slug: "ai-website-generator" },
  { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee", category: "Portfolio", slug: "free-portfolio-generator" },
  { name: "AI Landing Page Maker", desc: "One-page sites built to convert", category: "Landing Page", slug: "ai-landing-page-maker" },
  { name: "Online Store Builder", desc: "Start selling without writing code", category: "Store", slug: "online-store-builder" },
  { name: "Link-in-Bio Generator", desc: "One link for all your channels", category: "Link-in-Bio", slug: "link-in-bio-generator" },
  { name: "One-Page Website Builder", desc: "Simple sites, single scroll", category: "Website", slug: "one-page-website-builder" },
  { name: "Wedding Website Generator", desc: "Share your day with guests", category: "Website", slug: "wedding-website-generator" },
  { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done", category: "Website", slug: "restaurant-website-builder" },
  { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", category: "Blog", slug: "blog-generator-for-beginners" },
];

export const allGeneratorsData = {
  websites: [
    { name: "AI Website Generator", desc: "Describe your business, get a full site", slug: "ai-website-generator" },
    { name: "One-Page Website Builder", desc: "Simple sites, single scroll", slug: "one-page-website-builder" },
    { name: "Wedding Website Generator", desc: "Share your day with guests", slug: "wedding-website-generator" },
    { name: "Restaurant Website Builder", desc: "Menu, hours, reservations, done", slug: "restaurant-website-builder" },
    { name: "Small Business Website Generator", desc: "Professional sites for local businesses", slug: "small-business-website-generator" },
    { name: "Real Estate Website Builder", desc: "Showcase properties with ease", slug: "real--estate-website-builder" },
    { name: "Event Website Maker", desc: "Promote your event and track RSVPs", slug: "event-website-maker" },
    { name: "Personal Website Builder", desc: "Build your personal brand online", slug: "personal-website-builder" },
    { name: "Consultant Website Generator", desc: "Highlight your expertise and services", slug: "consultant-website-generator" },
    { name: "Fitness Website Builder", desc: "For gyms, trainers, and studios", slug: "fitness-website-builder" },
    { name: "Non-Profit Website Maker", desc: "Spread your mission and collect donations", slug: "non-profit-website-maker" },
    { name: "Beauty Salon Website Builder", desc: "Booking and service menus included", slug: "beauty-salon-website-builder" },
  ],
  "landing-pages": [
    { name: "AI Landing Page Maker", desc: "One-page sites built to convert", slug: "ai-landing-page-maker" },
    { name: "Product Launch Landing Page", desc: "Generate buzz for your new release", slug: "product-launch-landing-page" },
    { name: "App Landing Page Builder", desc: "Showcase your mobile app features", slug: "app-landing-page-builder" },
    { name: "Newsletter Signup Page", desc: "Grow your email list quickly", slug: "newsletter-signup-page" },
    { name: "Webinar Registration Page", desc: "High-converting webinar funnels", slug: "webinar-registration-page" },
    { name: "Ebook Download Page", desc: "Lead magnets made simple", slug: "ebook-download-page" },
    { name: "Service Lead Gen Page", desc: "Capture leads for your agency", slug: "service-lead-gen-page" },
    { name: "Coming Soon Landing Page", desc: "Start building an audience today", slug: "coming-soon-landing-page" },
  ],
  portfolios: [
    { name: "Free Portfolio Generator", desc: "For creatives, in minutes, no fee", slug: "free-portfolio-generator" },
    { name: "Photography Portfolio Builder", desc: "Gorgeous galleries for your shots", slug: "photography-portfolio-builder" },
    { name: "Designer Portfolio Maker", desc: "Showcase your creative projects", slug: "designer-portfolio-maker" },
    { name: "Writer Portfolio Generator", desc: "Clean layout for your articles", slug: "writer-portfolio-generator" },
    { name: "Student Portfolio Builder", desc: "Impress recruiters with your work", slug: "student-portfolio-builder" },
    { name: "CV & Resume Website", desc: "A modern way to present your career", slug: "cv-resume-website" },
    { name: "Architect Portfolio Maker", desc: "Visual storytelling for projects", slug: "architect-portfolio-maker" },
    { name: "Artist Portfolio Generator", desc: "Digital gallery for your fine art", slug: "artist-portfolio-generator" },
  ],
  blogs: [
    { name: "Blog Generator for Beginners", desc: "Publish-ready in minutes", slug: "blog-generator-for-beginners" },
    { name: "Travel Blog Maker", desc: "Document and share your adventures", slug: "travel-blog-maker" },
    { name: "Food Blog Generator", desc: "Recipe-focused layouts for foodies", slug: "food-blog-generator" },
    { name: "Tech Blog Builder", desc: "Share news and technical insights", slug: "tech-blog-builder" },
    { name: "Lifestyle Blog Generator", desc: "Beautiful pages for your stories", slug: "lifestyle-blog-generator" },
    { name: "Fashion Blog Maker", desc: "Visual-first layouts for style blogs", slug: "fashion-blog-maker" },
    { name: "Parenting Blog Builder", desc: "Connect with other parents online", slug: "parenting-blog-builder" },
    { name: "Music Blog Generator", desc: "Share tracks, news, and reviews", slug: "music-blog-generator" },
  ],
  stores: [
    { name: "Online Store Builder", desc: "Start selling without writing code", slug: "online-store-builder" },
    { name: "Fashion Boutique Maker", desc: "Sell apparel and accessories", slug: "fashion-boutique-maker" },
    { name: "Digital Product Store", desc: "Sell ebooks, music, and software", slug: "digital-product-store" },
    { name: "Handmade Goods Shop", desc: "Perfect for artisans and crafters", slug: "handmade-goods-shop" },
    { name: "Dropshipping Store Builder", desc: "Launch your ecommerce business", slug: "dropshipping-store-builder" },
    { name: "Local Grocery Shop Maker", desc: "Take orders and manage inventory", slug: "local-grocery-shop-maker" },
    { name: "Subscription Box Site", desc: "Recurring payments made easy", slug: "subscription-box-site" },
    { name: "Equipment Rental Store", desc: "Rent out tools and gear online", slug: "equipment-rental-store" },
  ],
  "link-in-bio": [
    { name: "Link-in-Bio Generator", desc: "One link for all your channels", slug: "link-in-bio-generator" },
    { name: "Creator Link-in-Bio", desc: "Social links and recent content", slug: "creator-link-in-bio" },
    { name: "Influencer Link Page", desc: "Monetize your social presence", slug: "influencer-link-page" },
    { name: "Podcaster Link-in-Bio", desc: "Links to episodes and platforms", slug: "podcaster-link-in-bio" },
    { name: "Musician Link Page", desc: "Streaming links and tour dates", slug: "musician-link-page" },
    { name: "Artist Link-in-Bio", desc: "Portfolio and shop links", slug: "artist-link-in-bio" },
    { name: "Business Social Landing Page", desc: "Connect customers to all channels", slug: "business-social-landing-page" },
    { name: "Personal Link-in-Bio", desc: "Simple digital business card", slug: "personal-link-in-bio" },
  ],
};

