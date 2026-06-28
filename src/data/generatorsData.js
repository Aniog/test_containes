// All user-visible strings in strings.en for i18n readiness.
// To add a new locale, add strings.es = { ... } etc.
export const strings = {
  en: {
    siteTitle: "AI Website Generators - Build Any Site in Seconds | Strikingly",
    breadcrumbHome: "Strikingly",
    breadcrumbCurrent: "AI Generators",
    heroH1Line1: "BUILD ANY KIND OF SITE",
    heroH1Line2: "WITH AI, IN AN INSTANT",
    heroSubheadline:
      "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    heroCTAPrimary: "START BUILDING — IT'S FREE",
    heroCTASecondary: "BROWSE GENERATORS",
    featuredHeading: "FEATURED GENERATORS",
    featuredSubheading: "A few common starting points.",
    categoryHeading: "BROWSE BY CATEGORY",
    allGeneratorsHeading: "ALL GENERATORS",
    allGeneratorsSubheading: "Sixty-plus generators, organized by what you're building.",
    searchPlaceholder: "Search generators...",
    searchResultCount: (n) => `${n} generator${n !== 1 ? "s" : ""} match`,
    searchEmpty: "No generators match your search.",
    searchClear: "Clear search",
    searchEmptyBuilderLink: "Can't find it? Start with our AI builder.",
    howItWorksHeading: "HOW IT WORKS",
    whyStrikinglyHeading: "WHY STRIKINGLY",
    faqHeading: "FREQUENTLY ASKED QUESTIONS",
    closingHeading: "READY TO BUILD?",
    closingSub: "Pick a generator above, or jump straight into our AI builder.",
    closingCTA: "START WITH AI BUILDER",
    builderUrl: "/s/ai_site_builder",
    showAll: (n) => `Show all ${n} generators`,
    showLess: "Show less",
  },
};

export const BUILDER_URL = "/s/ai_site_builder";

// Featured generators (Section 3) — 9 tiles, mixed categories
export const featuredGenerators = [
  {
    slug: "ai-website-generator",
    name: "AI Website Generator",
    description: "Describe your business, get a full site.",
    category: "Website",
  },
  {
    slug: "free-portfolio-generator",
    name: "Free Portfolio Generator",
    description: "For creatives, in minutes, no fee.",
    category: "Portfolio",
  },
  {
    slug: "ai-landing-page-maker",
    name: "AI Landing Page Maker",
    description: "One-page sites built to convert.",
    category: "Landing Page",
  },
  {
    slug: "online-store-builder",
    name: "Online Store Builder",
    description: "Start selling without writing code.",
    category: "Store",
  },
  {
    slug: "link-in-bio-generator",
    name: "Link-in-Bio Generator",
    description: "One link for all your channels.",
    category: "Link-in-Bio",
  },
  {
    slug: "one-page-website-builder",
    name: "One-Page Website Builder",
    description: "Simple sites, single scroll.",
    category: "Website",
  },
  {
    slug: "wedding-website-generator",
    name: "Wedding Website Generator",
    description: "Share your day with guests.",
    category: "Website",
  },
  {
    slug: "restaurant-website-builder",
    name: "Restaurant Website Builder",
    description: "Menu, hours, reservations, done.",
    category: "Website",
  },
  {
    slug: "blog-generator-for-beginners",
    name: "Blog Generator for Beginners",
    description: "Publish-ready in minutes.",
    category: "Blog",
  },
];

// Browse by Category (Section 4) — 6 category cards
export const categories = [
  {
    slug: "websites",
    name: "Websites",
    description: "AI-built business and personal sites for any goal.",
    anchor: "#websites",
  },
  {
    slug: "landing-pages",
    name: "Landing Pages",
    description: "Single-page sites built to convert visitors fast.",
    anchor: "#landing-pages",
  },
  {
    slug: "portfolios",
    name: "Portfolios",
    description: "Showcase your work with a clean, focused site.",
    anchor: "#portfolios",
  },
  {
    slug: "blogs",
    name: "Blogs",
    description: "Publish-ready blogs with built-in SEO basics.",
    anchor: "#blogs",
  },
  {
    slug: "stores",
    name: "Online Stores",
    description: "Sell products online with payments built in.",
    anchor: "#stores",
  },
  {
    slug: "link-in-bio",
    name: "Link-in-Bio",
    description: "One link, all your places. Made for creators.",
    anchor: "#link-in-bio",
  },
];

// All Generators directory (Section 5) — 6 subsections, 8–12 entries each
export const allGenerators = [
  {
    id: "websites",
    heading: "Websites",
    description: "AI-built sites for businesses, freelancers, and personal projects.",
    generators: [
      { slug: "ai-website-generator", name: "AI Website Generator", description: "Describe your business, get a full site in seconds." },
      { slug: "free-website-builder-photographers", name: "Free Website Builder for Photographers", description: "Showcase your portfolio with a clean, image-first layout." },
      { slug: "small-business-website-generator", name: "Small Business Website Generator", description: "Professional sites for local and online businesses." },
      { slug: "one-page-wedding-website-builder", name: "One-Page Wedding Website Builder", description: "Simple, beautiful wedding sites in minutes." },
      { slug: "restaurant-website-builder", name: "Restaurant Website Builder", description: "Menu, hours, reservations, and map — all in one site." },
      { slug: "yoga-instructor-website-generator", name: "Yoga Instructor Website Generator", description: "Class schedules, booking, and your story in one place." },
      { slug: "no-code-website-builder", name: "No-Code Website Builder", description: "Build a full site without touching a line of code." },
      { slug: "beautiful-website-generator", name: "Beautiful Website Generator", description: "Stunning designs generated from a single sentence." },
      { slug: "freelancer-website-builder", name: "Freelancer Website Builder", description: "Pitch your services and win clients online." },
      { slug: "nonprofit-website-generator", name: "Nonprofit Website Generator", description: "Tell your mission story and collect donations online." },
      { slug: "event-website-builder", name: "Event Website Builder", description: "Promote any event with a dedicated, shareable site." },
      { slug: "personal-website-generator", name: "Personal Website Generator", description: "Your name, your story, your corner of the web." },
    ],
  },
  {
    id: "landing-pages",
    heading: "Landing Pages",
    description: "Single-page sites designed to capture leads and drive conversions.",
    generators: [
      { slug: "ai-landing-page-maker", name: "AI Landing Page Maker", description: "One-page sites built to convert, generated by AI." },
      { slug: "product-launch-landing-page", name: "Product Launch Landing Page", description: "Build hype and collect sign-ups before you ship." },
      { slug: "lead-capture-page-generator", name: "Lead Capture Page Generator", description: "Grow your email list with a focused opt-in page." },
      { slug: "saas-landing-page-builder", name: "SaaS Landing Page Builder", description: "Explain your software and drive free-trial sign-ups." },
      { slug: "event-registration-landing-page", name: "Event Registration Landing Page", description: "Promote your event and collect RSVPs in one place." },
      { slug: "app-download-landing-page", name: "App Download Landing Page", description: "Drive installs with a clean, mobile-first page." },
      { slug: "coming-soon-page-generator", name: "Coming Soon Page Generator", description: "Build anticipation and capture early interest." },
      { slug: "webinar-registration-page", name: "Webinar Registration Page", description: "Fill your virtual event with a dedicated sign-up page." },
      { slug: "free-landing-page-builder", name: "Free Landing Page Builder", description: "Publish a high-converting page at no cost." },
      { slug: "real-estate-landing-page", name: "Real Estate Landing Page", description: "Showcase a property and capture buyer inquiries." },
    ],
  },
  {
    id: "portfolios",
    heading: "Portfolios",
    description: "Clean, focused sites that let your work speak for itself.",
    generators: [
      { slug: "free-portfolio-generator", name: "Free Portfolio Generator", description: "For creatives, in minutes, no fee." },
      { slug: "portfolio-generator-for-designers", name: "Portfolio Generator for Designers", description: "Grid layouts and full-bleed images for visual work." },
      { slug: "photography-portfolio-builder", name: "Photography Portfolio Builder", description: "Gallery-first sites that load fast and look stunning." },
      { slug: "developer-portfolio-generator", name: "Developer Portfolio Generator", description: "Show your projects, skills, and GitHub in one place." },
      { slug: "artist-portfolio-website", name: "Artist Portfolio Website", description: "Curate and display your art with a gallery-style site." },
      { slug: "writer-portfolio-generator", name: "Writer Portfolio Generator", description: "Clips, bio, and contact — everything an editor needs." },
      { slug: "ux-designer-portfolio-builder", name: "UX Designer Portfolio Builder", description: "Case studies and process work, beautifully presented." },
      { slug: "model-portfolio-website", name: "Model Portfolio Website", description: "Full-screen images and a clean comp card layout." },
      { slug: "architect-portfolio-generator", name: "Architect Portfolio Generator", description: "Showcase projects with plans, renders, and photos." },
      { slug: "video-portfolio-builder", name: "Video Portfolio Builder", description: "Embed your reels and showreel in a sleek site." },
    ],
  },
  {
    id: "blogs",
    heading: "Blogs",
    description: "Publish-ready blogs with built-in SEO and clean reading layouts.",
    generators: [
      { slug: "blog-generator-for-beginners", name: "Blog Generator for Beginners", description: "Publish-ready in minutes, no experience needed." },
      { slug: "ai-blog-builder", name: "AI Blog Builder", description: "Generate your blog structure and first posts with AI." },
      { slug: "personal-blog-generator", name: "Personal Blog Generator", description: "Share your thoughts with a clean, readable layout." },
      { slug: "travel-blog-builder", name: "Travel Blog Builder", description: "Document your journeys with maps, photos, and stories." },
      { slug: "food-blog-generator", name: "Food Blog Generator", description: "Recipes, photos, and reviews in a beautiful format." },
      { slug: "business-blog-builder", name: "Business Blog Builder", description: "Thought leadership content that builds your brand." },
      { slug: "fashion-blog-generator", name: "Fashion Blog Generator", description: "Lookbooks, reviews, and style guides in one site." },
      { slug: "tech-blog-builder", name: "Tech Blog Builder", description: "Tutorials, reviews, and opinions for a tech audience." },
      { slug: "parenting-blog-generator", name: "Parenting Blog Generator", description: "Share your family stories with a warm, inviting layout." },
      { slug: "seo-blog-generator", name: "SEO Blog Generator", description: "Blogs structured from the start for search visibility." },
    ],
  },
  {
    id: "stores",
    heading: "Online Stores",
    description: "Sell products online with payments, inventory, and shipping built in.",
    generators: [
      { slug: "online-store-builder", name: "Online Store Builder", description: "Start selling without writing code." },
      { slug: "online-store-builder-for-restaurants", name: "Online Store Builder for Restaurants", description: "Sell meals, gift cards, and merch directly from your site." },
      { slug: "handmade-goods-store-generator", name: "Handmade Goods Store Generator", description: "Sell your crafts with a warm, artisan-style storefront." },
      { slug: "digital-products-store-builder", name: "Digital Products Store Builder", description: "Sell ebooks, templates, and downloads instantly." },
      { slug: "clothing-store-generator", name: "Clothing Store Generator", description: "Fashion-forward layouts with size guides and lookbooks." },
      { slug: "photography-print-store", name: "Photography Print Store", description: "Sell prints and licenses directly from your portfolio." },
      { slug: "subscription-box-store-builder", name: "Subscription Box Store Builder", description: "Recurring billing and product curation made simple." },
      { slug: "local-business-online-store", name: "Local Business Online Store", description: "Take your brick-and-mortar sales online in a day." },
      { slug: "dropshipping-store-generator", name: "Dropshipping Store Generator", description: "Launch a store without holding any inventory." },
      { slug: "course-and-coaching-store", name: "Course and Coaching Store", description: "Sell online courses and coaching packages with ease." },
      { slug: "jewelry-store-builder", name: "Jewelry Store Builder", description: "Elegant product pages for rings, necklaces, and more." },
    ],
  },
  {
    id: "link-in-bio",
    heading: "Link-in-Bio",
    description: "One link that holds all your content, channels, and calls to action.",
    generators: [
      { slug: "link-in-bio-generator", name: "Link-in-Bio Generator", description: "One link for all your channels." },
      { slug: "instagram-link-in-bio-builder", name: "Instagram Link-in-Bio Builder", description: "Turn your Instagram bio link into a mini-site." },
      { slug: "creator-link-page-generator", name: "Creator Link Page Generator", description: "All your content, merch, and socials in one tap." },
      { slug: "musician-link-in-bio", name: "Musician Link-in-Bio", description: "Stream links, tour dates, and merch in one place." },
      { slug: "influencer-link-page-builder", name: "Influencer Link Page Builder", description: "Monetize your audience with a branded link page." },
      { slug: "podcast-link-in-bio", name: "Podcast Link-in-Bio", description: "All your episodes and platforms in a single link." },
      { slug: "tiktok-link-in-bio-builder", name: "TikTok Link-in-Bio Builder", description: "Drive traffic from TikTok to everything you create." },
      { slug: "youtube-creator-link-page", name: "YouTube Creator Link Page", description: "Channel, merch, and community links in one place." },
      { slug: "freelancer-link-in-bio", name: "Freelancer Link-in-Bio", description: "Portfolio, rates, and contact — one link to share." },
      { slug: "nonprofit-link-page-generator", name: "Nonprofit Link Page Generator", description: "Donations, events, and social proof in a single link." },
    ],
  },
];

// How It Works (Section 6)
export const howItWorksSteps = [
  {
    number: "1",
    title: "PICK A GENERATOR",
    body: "Browse by category or search to find one that fits your goal.",
  },
  {
    number: "2",
    title: "DESCRIBE YOUR SITE",
    body: "Tell our AI builder about your business in a sentence or two.",
  },
  {
    number: "3",
    title: "GENERATE AND PUBLISH",
    body: "Get a fully built site in seconds. Customize anything, then go live.",
  },
];

// Why Strikingly (Section 7)
export const whyStrikinglyItems = [
  {
    title: "LIVE IN SECONDS",
    body: "Describe your site, we build it. No setup, no learning curve.",
  },
  {
    title: "MOBILE BY DEFAULT",
    body: "Every generator produces responsive sites that work on any device.",
  },
  {
    title: "FREE TO START",
    body: "Generate, customize, and publish without a credit card.",
  },
];

// FAQ (Section 8)
export const faqItems = [
  {
    id: "faq-1",
    question: "What is an AI site generator?",
    answer:
      "An AI site generator is a tool that builds a complete website for you based on a short description of your business or goal. Instead of choosing a template and filling in blanks, you describe what you need in plain language and the AI assembles the layout, copy, and structure automatically.\n\nStrikingly's generators are tuned for specific use cases — portfolios, stores, landing pages, and more — so the output is already shaped for your purpose before you customize a single thing.",
  },
  {
    id: "faq-2",
    question: "How is a generator different from a template?",
    answer:
      "A template is a fixed starting point: you pick a design and replace the placeholder content yourself. A generator goes further — it reads your input and produces a site with content, structure, and layout already tailored to your goal.\n\nThink of a template as a blank form and a generator as a knowledgeable assistant who fills it in for you, then hands you the pen to make final edits.",
  },
  {
    id: "faq-3",
    question: "Are these generators free to use?",
    answer:
      "Yes. You can generate, preview, and customize your site without entering a credit card. Strikingly offers a free plan that lets you publish a site on a Strikingly subdomain. Paid plans unlock custom domains, additional pages, and advanced features.\n\nEvery generator on this page routes to the same AI builder, so the free tier applies to all of them.",
  },
  {
    id: "faq-4",
    question: "What kinds of sites can I build?",
    answer:
      "The generators on this page cover six broad categories: websites (business, personal, event), landing pages, portfolios, blogs, online stores, and link-in-bio pages. Within each category there are generators tuned for specific industries and goals — photographers, restaurants, yoga instructors, musicians, and many more.\n\nIf you don't see a generator that matches your exact need, the general AI Website Generator is a good starting point for almost any project.",
  },
  {
    id: "faq-5",
    question: "Can I customize what the generator produces?",
    answer:
      "Absolutely. The generated site is a starting point, not a final product. Once the AI builds your site, you can edit every section, swap images, change colors, rewrite copy, add or remove pages, and adjust the layout — all without code.\n\nStrikingly's editor is designed so that the generated output is already 80–90% of the way there, and the remaining customization takes minutes rather than hours.",
  },
  {
    id: "faq-6",
    question: "Do generated sites work on mobile?",
    answer:
      "Yes. Every site generated by Strikingly is responsive by default. The AI builder produces layouts that adapt automatically to phones, tablets, and desktops without any extra configuration on your part.\n\nYou can preview the mobile view directly in the editor before you publish, and make any adjustments you want.",
  },
];
