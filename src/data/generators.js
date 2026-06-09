export const strings = {
  en: {
    brand: "Strikingly",
    brandTagline: "AI",
    breadcrumbHome: "Strikingly",
    breadcrumbCurrent: "AI Generators",
    heroLine1: "BUILD ANY KIND OF SITE",
    heroLine2: "WITH AI, IN AN INSTANT",
    heroSubheadline:
      "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    heroCtaPrimary: "START BUILDING - IT'S FREE",
    heroCtaSecondary: "BROWSE GENERATORS",
    featuredHeading: "FEATURED GENERATORS",
    featuredSubheading: "A few common starting points.",
    categoryHeading: "BROWSE BY CATEGORY",
    allGeneratorsHeading: "ALL GENERATORS",
    allGeneratorsSubheading:
      "Sixty-plus generators, organized by what you're building.",
    searchPlaceholder: "Search generators...",
    showAllLabel: (n) => `Show all ${n} generators`,
    hideAllLabel: (n) => `Show fewer`,
    resultCount: (n) => `${n} generator${n !== 1 ? "s" : ""} match`,
    noResultsHeading: "No generators found",
    noResultsCta: "Can't find it? Start with our AI builder.",
    howItWorksHeading: "HOW IT WORKS",
    whyStrikinglyHeading: "WHY STRIKINGLY",
    faqHeading: "FREQUENTLY ASKED QUESTIONS",
    closingCtaHeading: "READY TO BUILD?",
    closingCtaSub:
      "Pick a generator above, or jump straight into our AI builder.",
    closingCtaButton: "START WITH AI BUILDER",
    footerCopyright: `\u00A9 ${new Date().getFullYear()} Strikingly, Inc.`,
    builderPath: "/s/ai_site_builder",
    generatorsPath: "/generators",
  },
};

export const categories = [
  {
    id: "websites",
    name: "Websites",
    description: "AI-built business and personal sites for any goal.",
  },
  {
    id: "landing-pages",
    name: "Landing Pages",
    description: "Single-page sites built to convert visitors fast.",
  },
  {
    id: "portfolios",
    name: "Portfolios",
    description: "Showcase your work with a clean, focused site.",
  },
  {
    id: "blogs",
    name: "Blogs",
    description: "Publish-ready blogs with built-in SEO basics.",
  },
  {
    id: "stores",
    name: "Online Stores",
    description: "Sell products online with payments built in.",
  },
  {
    id: "link-in-bio",
    name: "Link-in-Bio",
    description: "One link, all your places. Made for creators.",
  },
];

export const featuredGenerators = [
  {
    name: "AI Website Generator",
    slug: "ai-website-generator",
    description: "Describe your business, get a full site",
    category: "Websites",
  },
  {
    name: "Free Portfolio Generator",
    slug: "free-portfolio-generator",
    description: "For creatives, in minutes, no fee",
    category: "Portfolios",
  },
  {
    name: "AI Landing Page Maker",
    slug: "ai-landing-page-maker",
    description: "One-page sites built to convert",
    category: "Landing Pages",
  },
  {
    name: "Online Store Builder",
    slug: "online-store-builder",
    description: "Start selling without writing code",
    category: "Online Stores",
  },
  {
    name: "Link-in-Bio Generator",
    slug: "link-in-bio-generator",
    description: "One link for all your channels",
    category: "Link-in-Bio",
  },
  {
    name: "One-Page Website Builder",
    slug: "one-page-website-builder",
    description: "Simple sites, single scroll",
    category: "Websites",
  },
  {
    name: "Wedding Website Generator",
    slug: "wedding-website-generator",
    description: "Share your day with guests",
    category: "Websites",
  },
  {
    name: "Restaurant Website Builder",
    slug: "restaurant-website-builder",
    description: "Menu, hours, reservations, done",
    category: "Websites",
  },
  {
    name: "Blog Generator for Beginners",
    slug: "blog-generator-for-beginners",
    description: "Publish-ready in minutes",
    category: "Blogs",
  },
];

export const allGenerators = {
  websites: [
    { name: "AI Website Generator", slug: "ai-website-generator", description: "Describe your business, get a full site in seconds." },
    { name: "Free Website Builder for Photographers", slug: "free-website-builder-for-photographers", description: "A polished portfolio site for any photographer." },
    { name: "One-Page Website Builder", slug: "one-page-website-builder", description: "Simple sites, single scroll, zero hassle." },
    { name: "Wedding Website Generator", slug: "wedding-website-generator", description: "Share your day with guests, beautifully." },
    { name: "Restaurant Website Builder", slug: "restaurant-website-builder", description: "Menu, hours, reservations, done." },
    { name: "Small Business Website Generator", slug: "small-business-website-generator", description: "Get online fast with a professional presence." },
    { name: "Church Website Builder", slug: "church-website-builder", description: "Sermons, events, and community in one place." },
    { name: "Real Estate Website Generator", slug: "real-estate-website-generator", description: "Listings and lead capture, built with AI." },
    { name: "Non-Profit Website Builder", slug: "non-profit-website-builder", description: "Tell your mission, accept donations, grow support." },
    { name: "Personal Website Generator", slug: "personal-website-generator", description: "Your name, your story, your site." },
    { name: "School Website Builder", slug: "school-website-builder", description: "Announcements, calendars, and resources for families." },
    { name: "Fitness Website Generator", slug: "fitness-website-generator", description: "Class schedules, trainer bios, and bookings." },
  ],
  "landing-pages": [
    { name: "AI Landing Page Maker", slug: "ai-landing-page-maker", description: "One-page sites built to convert visitors fast." },
    { name: "Free Landing Page Generator", slug: "free-landing-page-generator", description: "Launch a high-converting page at no cost." },
    { name: "Product Launch Page Builder", slug: "product-launch-page-builder", description: "Announce your product with a focused launch page." },
    { name: "Event Landing Page Generator", slug: "event-landing-page-generator", description: "Promote events and collect RSVPs easily." },
    { name: "App Download Landing Page", slug: "app-download-landing-page", description: "Drive installs with a clean app showcase." },
    { name: "SaaS Landing Page Generator", slug: "saas-landing-page-generator", description: "Feature highlights and signup flows for software." },
    { name: "Coming Soon Page Builder", slug: "coming-soon-page-builder", description: "Build anticipation before your launch." },
    { name: "Lead Capture Page Generator", slug: "lead-capture-page-generator", description: "Collect emails and leads with a focused page." },
    { name: "Webinar Landing Page Builder", slug: "webinar-landing-page-builder", description: "Promote webinars and collect registrations." },
    { name: "No-Code Landing Page Maker", slug: "no-code-landing-page-maker", description: "Build landing pages without writing any code." },
  ],
  portfolios: [
    { name: "Free Portfolio Generator", slug: "free-portfolio-generator", description: "For creatives, in minutes, no fee." },
    { name: "Portfolio Generator for Designers", slug: "portfolio-generator-for-designers", description: "Showcase design work with style." },
    { name: "Photography Portfolio Builder", slug: "photography-portfolio-builder", description: "Gallery-first layouts for photographers." },
    { name: "Artist Portfolio Generator", slug: "artist-portfolio-generator", description: "Display artwork in a clean, minimal frame." },
    { name: "Freelancer Portfolio Builder", slug: "freelancer-portfolio-builder", description: "Highlight projects and client results." },
    { name: "Writer Portfolio Generator", slug: "writer-portfolio-generator", description: "Published clips and writing samples, organized." },
    { name: "Architect Portfolio Builder", slug: "architect-portfolio-builder", description: "Project showcases for architecture firms." },
    { name: "Interior Designer Portfolio", slug: "interior-designer-portfolio", description: "Room-by-room galleries with elegant layouts." },
    { name: "Video Creator Portfolio", slug: "video-creator-portfolio", description: "Embed reels, showreels, and production credits." },
    { name: "Musician Portfolio Generator", slug: "musician-portfolio-generator", description: "Tour dates, tracks, and press kit in one site." },
  ],
  blogs: [
    { name: "Blog Generator for Beginners", slug: "blog-generator-for-beginners", description: "Publish-ready in minutes, no experience needed." },
    { name: "AI Blog Writer Generator", slug: "ai-blog-writer-generator", description: "AI drafts your posts, you polish and publish." },
    { name: "Travel Blog Generator", slug: "travel-blog-generator", description: "Share trips with photo-rich blog layouts." },
    { name: "Food Blog Builder", slug: "food-blog-builder", description: "Recipes, reviews, and kitchen stories." },
    { name: "Lifestyle Blog Generator", slug: "lifestyle-blog-generator", description: "Fashion, wellness, and daily life content." },
    { name: "Tech Blog Builder", slug: "tech-blog-builder", description: "Code snippets, tutorials, and tech news." },
    { name: "Parenting Blog Generator", slug: "parenting-blog-generator", description: "Family stories and parenting tips." },
    { name: "Finance Blog Builder", slug: "finance-blog-builder", description: "Money tips, investing guides, and budgeting." },
    { name: "Beauty Blog Generator", slug: "beauty-blog-generator", description: "Reviews, tutorials, and product roundups." },
    { name: "Free Blog Generator", slug: "free-blog-generator", description: "Start blogging without spending a cent." },
  ],
  stores: [
    { name: "Online Store Builder", slug: "online-store-builder", description: "Start selling without writing code." },
    { name: "Online Store Builder for Restaurants", slug: "online-store-builder-for-restaurants", description: "Take orders and manage delivery online." },
    { name: "Clothing Store Generator", slug: "clothing-store-generator", description: "Apparel catalogs with size charts and checkout." },
    { name: "Digital Products Store", slug: "digital-products-store", description: "Sell ebooks, courses, and downloads." },
    { name: "Handmade Goods Store Builder", slug: "handmade-goods-store-builder", description: "Perfect for artisans and craft sellers." },
    { name: "Jewelry Store Generator", slug: "jewelry-store-generator", description: "Elegant layouts for rings, necklaces, and more." },
    { name: "Beauty Products Store", slug: "beauty-products-store", description: "Skincare and cosmetics with built-in checkout." },
    { name: "Home Decor Store Builder", slug: "home-decor-store-builder", description: "Furnishings and accessories, beautifully displayed." },
    { name: "Pet Store Generator", slug: "pet-store-generator", description: "Pet supplies and accessories, online fast." },
    { name: "No-Code Online Store", slug: "no-code-online-store", description: "Launch a store with zero technical skills." },
  ],
  "link-in-bio": [
    { name: "Link-in-Bio Generator", slug: "link-in-bio-generator", description: "One link for all your channels." },
    { name: "Creator Link-in-Bio Builder", slug: "creator-link-in-bio-builder", description: "Built for content creators and influencers." },
    { name: "Musician Link-in-Bio Page", slug: "musician-link-in-bio-page", description: "Streaming links, merch, and tour dates." },
    { name: "Podcast Link-in-Bio Generator", slug: "podcast-link-in-bio-generator", description: "Episode links, subscribe buttons, and show notes." },
    { name: "Coach Link-in-Bio Builder", slug: "coach-link-in-bio-builder", description: "Booking links and testimonials for coaches." },
    { name: "Artist Link-in-Bio Page", slug: "artist-link-in-bio-page", description: "Gallery links, shop, and social profiles." },
    { name: "Small Business Link-in-Bio", slug: "small-business-link-in-bio", description: "Hours, menu, and social links for local shops." },
    { name: "Free Link-in-Bio Generator", slug: "free-link-in-bio-generator", description: "A single link page at no cost." },
    { name: "AI Link-in-Bio Builder", slug: "ai-link-in-bio-builder", description: "Describe yourself, get a ready-made bio page." },
    { name: "TikTok Link-in-Bio Generator", slug: "tiktok-link-in-bio-generator", description: "Optimized for TikTok creator profiles." },
  ],
};

export const howItWorksSteps = [
  {
    number: 1,
    title: "PICK A GENERATOR",
    description: "Browse by category or search to find one that fits your goal.",
  },
  {
    number: 2,
    title: "DESCRIBE YOUR SITE",
    description:
      "Tell our AI builder about your business in a sentence or two.",
  },
  {
    number: 3,
    title: "GENERATE AND PUBLISH",
    description:
      "Get a fully built site in seconds. Customize anything, then go live.",
  },
];

export const whyStrikinglyFeatures = [
  {
    title: "LIVE IN SECONDS",
    description:
      "Describe your site, we build it. No setup, no learning curve.",
  },
  {
    title: "MOBILE BY DEFAULT",
    description:
      "Every generator produces responsive sites that work on any device.",
  },
  {
    title: "FREE TO START",
    description:
      "Generate, customize, and publish without a credit card.",
  },
];

export const faqItems = [
  {
    question: "What is an AI site generator?",
    answer:
      "An AI site generator is a tool that uses artificial intelligence to build a complete website from a short text description. You describe your business, project, or goal in a sentence or two, and the generator creates a ready-to-publish site with layout, copy, and images already in place. Strikingly's AI generators go further by producing sites that are mobile-responsive and SEO-friendly from the start, so you can go live the same day you start.",
  },
  {
    question: "How is a generator different from a template?",
    answer:
      "A template is a fixed design you fill in manually. An AI generator creates a unique site based on what you tell it. Instead of dragging blocks around and rewriting placeholder text, you describe your needs and the generator assembles the right structure, content, and style for your specific goal. You can still customize everything afterward, but you start much closer to a finished product.",
  },
  {
    question: "Are these generators free to use?",
    answer:
      "Yes. You can generate a site, customize it, and publish it on a Strikingly subdomain at no cost. If you want a custom domain, advanced features, or additional storage, paid plans are available. But there is no credit card required to start, and many users build and launch their entire site on the free plan.",
  },
  {
    question: "What kinds of sites can I build?",
    answer:
      "Strikingly's AI generators cover a wide range of site types: business websites, portfolios, landing pages, online stores, blogs, event pages, link-in-bio pages, and more. Each generator is tuned for a specific purpose, so the output is tailored to your goal rather than a generic one-size-fits-all layout. Browse the categories above to find the right generator for what you need.",
  },
  {
    question: "Can I customize what the generator produces?",
    answer:
      "Absolutely. The AI-generated site is a starting point, not a final draft. You can change any text, swap images, adjust colors, rearrange sections, add new pages, and connect your own domain. The editor is visual and requires no coding knowledge. Most users spend a few minutes tweaking the generated site before publishing.",
  },
  {
    question: "Do generated sites work on mobile?",
    answer:
      "Yes. Every site created by a Strikingly AI generator is fully responsive by default. The layout, images, and navigation automatically adapt to phones, tablets, and desktops. You do not need to build a separate mobile version or adjust settings for different screen sizes.",
  },
];

export const footerLinks = {
  Product: [
    { label: "Templates", href: "/templates" },
    { label: "Pricing", href: "/pricing" },
    { label: "Features", href: null },
    { label: "AI Builder", href: "/s/ai_site_builder" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: null },
    { label: "Press", href: null },
  ],
  Resources: [
    { label: "Help Center", href: "/support" },
    { label: "Developers", href: null },
    { label: "Community", href: null },
    { label: "Status", href: null },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: null },
    { label: "Accessibility", href: null },
  ],
};
