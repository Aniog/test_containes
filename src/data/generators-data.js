// ─── i18n strings (all user-visible copy in one place) ───────────────────────
export const strings = {
  en: {
    logoText: 'strikingly',
    logoAI: 'AI',
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    heroCTAPrimary: "START BUILDING — IT'S FREE",
    heroCTASecondary: 'BROWSE GENERATORS',
    featuredHeading: 'FEATURED GENERATORS',
    featuredSub: 'A few common starting points.',
    browseHeading: 'BROWSE BY CATEGORY',
    allHeading: 'ALL GENERATORS',
    allSub: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    searchCountSingle: '1 generator matches',
    searchCountPlural: (n) => `${n} generators match`,
    searchEmpty: "Can't find it?",
    searchEmptyLink: 'Start with our AI builder.',
    showAll: (n) => `Show all ${n} generators`,
    showLess: 'Show less',
    hiwHeading: 'HOW IT WORKS',
    whyHeading: 'WHY STRIKINGLY',
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    closingHeadline: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCTA: 'START WITH AI BUILDER',
    footerCopy: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`,
  },
};

// ─── Featured Generators (9 tiles, mixed categories) ─────────────────────────
export const featuredGenerators = [
  { name: 'AI Website Generator',        slug: 'ai-website-generator',        description: 'Describe your business, get a full site', category: 'Website' },
  { name: 'Free Portfolio Generator',    slug: 'free-portfolio-generator',    description: 'For creatives, in minutes, no fee',       category: 'Portfolio' },
  { name: 'AI Landing Page Maker',       slug: 'ai-landing-page-maker',       description: 'One-page sites built to convert',         category: 'Landing Page' },
  { name: 'Online Store Builder',        slug: 'online-store-builder',        description: 'Start selling without writing code',      category: 'Store' },
  { name: 'Link-in-Bio Generator',       slug: 'link-in-bio-generator',       description: 'One link for all your channels',          category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder',    slug: 'one-page-website-builder',    description: 'Simple sites, single scroll',             category: 'Website' },
  { name: 'Wedding Website Generator',   slug: 'wedding-website-generator',   description: 'Share your day with guests',              category: 'Website' },
  { name: 'Restaurant Website Builder',  slug: 'restaurant-website-builder',  description: 'Menu, hours, reservations, done',         category: 'Website' },
  { name: 'Blog Generator for Beginners',slug: 'blog-generator-for-beginners',description: 'Publish-ready in minutes',                category: 'Blog' },
];

// ─── Browse-by-Category cards (jump anchors into the directory) ───────────────
export const categories = [
  { name: 'Websites',      slug: 'websites',      description: 'AI-built business and personal sites for any goal.' },
  { name: 'Landing Pages', slug: 'landing-pages', description: 'Single-page sites built to convert visitors fast.' },
  { name: 'Portfolios',    slug: 'portfolios',     description: 'Showcase your work with a clean, focused site.' },
  { name: 'Blogs',         slug: 'blogs',          description: 'Publish-ready blogs with built-in SEO basics.' },
  { name: 'Online Stores', slug: 'stores',         description: 'Sell products online with payments built in.' },
  { name: 'Link-in-Bio',   slug: 'link-in-bio',    description: 'One link, all your places. Made for creators.' },
];

// ─── All Generators directory (6 subsections, 8–12 entries each) ─────────────
export const allGenerators = [
  {
    categoryName: 'Websites',
    categorySlug: 'websites',
    description: 'Business, personal, and niche sites built by AI in seconds.',
    generators: [
      { name: 'AI Website Generator',                  slug: 'ai-website-generator',                  description: 'Describe your business, get a full site in seconds.' },
      { name: 'Free Website Builder for Photographers', slug: 'free-website-builder-for-photographers', description: 'Showcase your shots with a clean, image-first layout.' },
      { name: 'One-Page Wedding Website Builder',       slug: 'one-page-wedding-website-builder',       description: 'Share your date, venue, and RSVP in one scroll.' },
      { name: 'Restaurant Website Builder',             slug: 'restaurant-website-builder',             description: 'Menu, hours, reservations, and map — all in one place.' },
      { name: 'Small Business Website Generator',       slug: 'small-business-website-generator',       description: 'Professional site for any local or online business.' },
      { name: 'Yoga Studio Website Builder',            slug: 'yoga-studio-website-builder',            description: 'Class schedules, instructor bios, and booking built in.' },
      { name: 'Real Estate Agent Website Generator',    slug: 'real-estate-agent-website-generator',    description: 'Listings, contact form, and local SEO out of the box.' },
      { name: 'Nonprofit Website Builder',              slug: 'nonprofit-website-builder',              description: 'Mission-driven sites with donation and volunteer sections.' },
      { name: 'Freelancer Website Generator',           slug: 'freelancer-website-generator',           description: 'Services, rates, and contact — ready to share with clients.' },
      { name: 'Event Website Builder',                  slug: 'event-website-builder',                  description: 'Agenda, speakers, tickets, and countdown in one page.' },
      { name: 'No-Code Business Website Maker',         slug: 'no-code-business-website-maker',         description: 'Build a polished business site without touching code.' },
      { name: 'Beautiful Website Generator',            slug: 'beautiful-website-generator',            description: 'AI picks a design that fits your brand and content.' },
    ],
  },
  {
    categoryName: 'Landing Pages',
    categorySlug: 'landing-pages',
    description: 'Single-page sites engineered to turn visitors into leads or customers.',
    generators: [
      { name: 'AI Landing Page Maker',                  slug: 'ai-landing-page-maker',                  description: 'One-page sites built to convert — generated in seconds.' },
      { name: 'Product Launch Landing Page Generator',  slug: 'product-launch-landing-page-generator',  description: 'Announce your launch with a high-impact single page.' },
      { name: 'Lead Generation Landing Page Builder',   slug: 'lead-generation-landing-page-builder',   description: 'Capture emails and leads with a focused, distraction-free page.' },
      { name: 'Webinar Registration Page Generator',    slug: 'webinar-registration-page-generator',    description: 'Drive sign-ups with a clean event registration page.' },
      { name: 'App Download Landing Page Builder',      slug: 'app-download-landing-page-builder',      description: 'Showcase your app and link to the App Store and Google Play.' },
      { name: 'Coming Soon Page Generator',             slug: 'coming-soon-page-generator',             description: 'Build anticipation with a countdown and email capture.' },
      { name: 'Sales Page Builder',                     slug: 'sales-page-builder',                     description: 'Long-form sales pages with social proof and CTA sections.' },
      { name: 'Free Landing Page Generator for Startups', slug: 'free-landing-page-generator-for-startups', description: 'Ship a landing page before you build the product.' },
      { name: 'Course Landing Page Maker',              slug: 'course-landing-page-maker',              description: 'Sell your online course with a persuasive, structured page.' },
      { name: 'Waitlist Page Generator',                slug: 'waitlist-page-generator',                description: 'Collect early interest with a minimal, shareable waitlist page.' },
    ],
  },
  {
    categoryName: 'Portfolios',
    categorySlug: 'portfolios',
    description: 'Clean, focused sites that let your work do the talking.',
    generators: [
      { name: 'Free Portfolio Generator',               slug: 'free-portfolio-generator',               description: 'For creatives, in minutes, no fee required.' },
      { name: 'Portfolio Generator for Designers',      slug: 'portfolio-generator-for-designers',      description: 'Case studies, process shots, and contact — all structured.' },
      { name: 'Photography Portfolio Builder',          slug: 'photography-portfolio-builder',          description: 'Full-bleed galleries with fast-loading image layouts.' },
      { name: 'Artist Portfolio Website Generator',     slug: 'artist-portfolio-website-generator',     description: 'Showcase paintings, sculptures, or mixed media with style.' },
      { name: 'UX Designer Portfolio Builder',          slug: 'ux-designer-portfolio-builder',          description: 'Highlight your process, wireframes, and final outcomes.' },
      { name: 'Illustrator Portfolio Generator',        slug: 'illustrator-portfolio-generator',        description: 'Grid-based layouts built for illustration and character work.' },
      { name: 'Architect Portfolio Website Builder',    slug: 'architect-portfolio-website-builder',    description: 'Project pages with floor plans, renders, and descriptions.' },
      { name: 'Videographer Portfolio Generator',       slug: 'videographer-portfolio-generator',       description: 'Embed reels and project videos in a clean, branded site.' },
      { name: 'Model Portfolio Website Builder',        slug: 'model-portfolio-website-builder',        description: 'Comp card style layouts with stats and booking contact.' },
      { name: 'No-Code Portfolio Maker',                slug: 'no-code-portfolio-maker',                description: 'Build a professional portfolio without writing a line of code.' },
    ],
  },
  {
    categoryName: 'Blogs',
    categorySlug: 'blogs',
    description: 'Publish-ready blogs with clean reading layouts and built-in SEO basics.',
    generators: [
      { name: 'Blog Generator for Beginners',           slug: 'blog-generator-for-beginners',           description: 'Publish-ready in minutes, no experience needed.' },
      { name: 'AI Blog Website Builder',                slug: 'ai-blog-website-builder',                description: 'AI structures your blog with categories, tags, and SEO.' },
      { name: 'Travel Blog Generator',                  slug: 'travel-blog-generator',                  description: 'Map embeds, photo galleries, and destination post layouts.' },
      { name: 'Food Blog Website Builder',              slug: 'food-blog-website-builder',              description: 'Recipe cards, ingredient lists, and beautiful food photography.' },
      { name: 'Personal Blog Generator',                slug: 'personal-blog-generator',                description: 'A clean, minimal space to write and share your thoughts.' },
      { name: 'Tech Blog Builder',                      slug: 'tech-blog-builder',                      description: 'Code-friendly layouts with syntax highlighting and dark mode.' },
      { name: 'Lifestyle Blog Generator',               slug: 'lifestyle-blog-generator',               description: 'Warm, editorial layouts for wellness, home, and culture content.' },
      { name: 'Fashion Blog Website Builder',           slug: 'fashion-blog-website-builder',           description: 'Lookbook-style layouts with shoppable image links.' },
      { name: 'Parenting Blog Generator',               slug: 'parenting-blog-generator',               description: 'Friendly, readable layouts for family and parenting stories.' },
    ],
  },
  {
    categoryName: 'Online Stores',
    categorySlug: 'stores',
    description: 'Sell products online with payments, inventory, and checkout built in.',
    generators: [
      { name: 'Online Store Builder',                   slug: 'online-store-builder',                   description: 'Start selling without writing code — payments included.' },
      { name: 'Online Store Builder for Restaurants',   slug: 'online-store-builder-for-restaurants',   description: 'Online ordering, menu management, and delivery options.' },
      { name: 'Handmade Goods Store Generator',         slug: 'handmade-goods-store-generator',         description: 'Etsy-style product pages for artisan and craft sellers.' },
      { name: 'Digital Products Store Builder',         slug: 'digital-products-store-builder',         description: 'Sell ebooks, templates, and downloads with instant delivery.' },
      { name: 'Clothing Store Website Generator',       slug: 'clothing-store-website-generator',       description: 'Size guides, lookbooks, and variant selectors built in.' },
      { name: 'Jewelry Store Website Builder',          slug: 'jewelry-store-website-builder',          description: 'Elegant product pages with zoom, materials, and care info.' },
      { name: 'Beauty Products Store Generator',        slug: 'beauty-products-store-generator',        description: 'Ingredient lists, before/after photos, and subscription options.' },
      { name: 'Print-on-Demand Store Builder',          slug: 'print-on-demand-store-builder',          description: 'Connect your POD supplier and start selling in minutes.' },
      { name: 'Subscription Box Store Generator',       slug: 'subscription-box-store-generator',       description: 'Recurring billing, unboxing previews, and subscriber perks.' },
      { name: 'Free E-commerce Website Generator',      slug: 'free-ecommerce-website-generator',       description: 'Launch your first store for free, no credit card required.' },
    ],
  },
  {
    categoryName: 'Link-in-Bio',
    categorySlug: 'link-in-bio',
    description: 'One link that holds all your channels, content, and calls to action.',
    generators: [
      { name: 'Link-in-Bio Generator',                  slug: 'link-in-bio-generator',                  description: 'One link for all your channels — built in seconds.' },
      { name: 'Creator Link-in-Bio Builder',            slug: 'creator-link-in-bio-builder',            description: 'Designed for content creators with social and merch links.' },
      { name: 'Musician Link-in-Bio Generator',         slug: 'musician-link-in-bio-generator',         description: 'Stream links, tour dates, and merch in one shareable page.' },
      { name: 'Influencer Link Page Builder',           slug: 'influencer-link-page-builder',           description: 'Brand deals, affiliate links, and latest posts in one place.' },
      { name: 'Artist Link-in-Bio Generator',           slug: 'artist-link-in-bio-generator',           description: 'Gallery previews, shop links, and commission info.' },
      { name: 'Podcast Link Page Builder',              slug: 'podcast-link-page-builder',              description: 'Episode links, subscribe buttons, and sponsor callouts.' },
      { name: 'Coach Link-in-Bio Generator',            slug: 'coach-link-in-bio-generator',            description: 'Booking link, testimonials, and free resource downloads.' },
      { name: 'Streamer Link Page Builder',             slug: 'streamer-link-page-builder',             description: 'Live schedule, donation link, and social channels in one tap.' },
      { name: 'Free Link-in-Bio Page Maker',            slug: 'free-link-in-bio-page-maker',            description: 'No cost, no code — your link page live in under a minute.' },
    ],
  },
];

// ─── How It Works steps ───────────────────────────────────────────────────────
export const howItWorksSteps = [
  {
    number: '1',
    title: 'PICK A GENERATOR',
    body: 'Browse by category or search to find one that fits your goal.',
  },
  {
    number: '2',
    title: 'DESCRIBE YOUR SITE',
    body: 'Tell our AI builder about your business in a sentence or two.',
  },
  {
    number: '3',
    title: 'GENERATE AND PUBLISH',
    body: 'Get a fully built site in seconds. Customize anything, then go live.',
  },
];

// ─── Why Strikingly cells ─────────────────────────────────────────────────────
export const whyItems = [
  {
    title: 'LIVE IN SECONDS',
    body: 'Describe your site, we build it. No setup, no learning curve.',
  },
  {
    title: 'MOBILE BY DEFAULT',
    body: 'Every generator produces responsive sites that work on any device.',
  },
  {
    title: 'FREE TO START',
    body: 'Generate, customize, and publish without a credit card.',
  },
];

// ─── FAQ items ────────────────────────────────────────────────────────────────
export const faqItems = [
  {
    id: 'faq-1',
    question: 'What is an AI site generator?',
    answer: [
      'An AI site generator is a tool that uses artificial intelligence to build a complete website for you based on a short description. Instead of choosing a template and filling in every section manually, you describe your business or project in a sentence or two, and the AI generates a fully structured site with relevant copy, layout, and design.',
      "Strikingly's generators are tuned for specific use cases — portfolios, stores, landing pages, and more — so the output is already shaped for your goal before you even start customizing.",
    ],
  },
  {
    id: 'faq-2',
    question: 'How is a generator different from a template?',
    answer: [
      "A template is a blank starting point: you pick a design, then fill in every section yourself. A generator goes further — it reads what you tell it about your business and produces a site with content already in place. You still customize everything, but you start from something real rather than placeholder text.",
      "Think of a template as an empty house and a generator as a house that's already furnished for your lifestyle. You can rearrange anything, but you're not starting from scratch.",
    ],
  },
  {
    id: 'faq-3',
    question: 'Are these generators free to use?',
    answer: [
      "Yes, you can generate and preview any site for free. Strikingly's free plan lets you publish a site on a Strikingly subdomain at no cost. Paid plans unlock custom domains, more storage, and advanced features like e-commerce and analytics.",
      "No credit card is required to get started. Generate a site, explore the editor, and upgrade only when you're ready.",
    ],
  },
  {
    id: 'faq-4',
    question: "What kinds of sites can I build?",
    answer: [
      "Strikingly's generators cover a wide range of site types: business websites, personal portfolios, online stores, landing pages, blogs, event pages, and link-in-bio pages. Each generator is tuned for a specific goal, so the AI knows what sections to include and what copy to suggest.",
      "If you don't see a generator for your exact use case, the AI Site Builder can handle any description you give it — just describe what you need and it will figure out the structure.",
    ],
  },
  {
    id: 'faq-5',
    question: 'Can I customize what the generator produces?',
    answer: [
      "Absolutely. Every generated site opens in Strikingly's visual editor, where you can change text, swap images, reorder sections, adjust colors, and add or remove any element. The generator gives you a strong starting point; the editor gives you full control.",
      "Nothing is locked in. If the AI's first draft isn't quite right, you can regenerate specific sections or edit them directly.",
    ],
  },
  {
    id: 'faq-6',
    question: 'Do generated sites work on mobile?',
    answer: [
      "Yes. Every site produced by Strikingly's generators is fully responsive by default. The layout automatically adapts to phones, tablets, and desktops without any extra work on your part.",
      'You can preview the mobile view directly in the editor before publishing, and make any adjustments you need.',
    ],
  },
];
