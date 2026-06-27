// ── i18n strings ──────────────────────────────────────────────────────────────
export const strings = {
  en: {
    siteTitle: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',

    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    heroCta1: "START BUILDING — IT'S FREE",
    heroCta2: 'BROWSE GENERATORS',

    featuredHeading: 'FEATURED GENERATORS',
    featuredSub: 'A few common starting points.',

    browseHeading: 'BROWSE BY CATEGORY',
    browseSub: "Jump to the section that fits what you're building.",

    allHeading: 'ALL GENERATORS',
    allSub: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    searchResultCount: (n) => `${n} generator${n === 1 ? '' : 's'} match`,
    searchEmpty: 'No generators match your search.',
    searchClear: 'Clear search',
    searchEmptyBuilderLink: "Can't find it? Start with our AI builder.",
    showAll: (n) => `Show all ${n} generators`,
    showLess: 'Show less',

    howHeading: 'HOW IT WORKS',
    step1Title: 'PICK A GENERATOR',
    step1Body: 'Browse by category or search to find one that fits your goal.',
    step2Title: 'DESCRIBE YOUR SITE',
    step2Body: 'Tell our AI builder about your business in a sentence or two.',
    step3Title: 'GENERATE AND PUBLISH',
    step3Body: 'Get a fully built site in seconds. Customize anything, then go live.',

    whyHeading: 'WHY STRIKINGLY',
    why1Title: 'LIVE IN SECONDS',
    why1Body: 'Describe your site, we build it. No setup, no learning curve.',
    why2Title: 'MOBILE BY DEFAULT',
    why2Body: 'Every generator produces responsive sites that work on any device.',
    why3Title: 'FREE TO START',
    why3Body: 'Generate, customize, and publish without a credit card.',

    faqHeading: 'FREQUENTLY ASKED QUESTIONS',

    closingHeadline: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',

    footerCopyright: `\u00A9 ${new Date().getFullYear()} Strikingly. All rights reserved.`,
  },
};

// ── Category definitions ───────────────────────────────────────────────────────
export const categories = [
  {
    id: 'websites',
    slug: 'websites',
    name: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
  },
  {
    id: 'landing-pages',
    slug: 'landing-pages',
    name: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
  },
  {
    id: 'portfolios',
    slug: 'portfolios',
    name: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
  },
  {
    id: 'blogs',
    slug: 'blogs',
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
  },
  {
    id: 'stores',
    slug: 'stores',
    name: 'Online Stores',
    description: 'Sell products online with payments built in.',
  },
  {
    id: 'link-in-bio',
    slug: 'link-in-bio',
    name: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
  },
];

// ── Featured generators (9 tiles, mixed categories) ───────────────────────────
export const featuredGenerators = [
  { name: 'AI Website Generator', slug: 'ai-website-generator', description: 'Describe your business, get a full site.', category: 'Website' },
  { name: 'Free Portfolio Generator', slug: 'free-portfolio-generator', description: 'For creatives, in minutes, no fee.', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', slug: 'ai-landing-page-maker', description: 'One-page sites built to convert.', category: 'Landing Page' },
  { name: 'Online Store Builder', slug: 'online-store-builder', description: 'Start selling without writing code.', category: 'Store' },
  { name: 'Link-in-Bio Generator', slug: 'link-in-bio-generator', description: 'One link for all your channels.', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', slug: 'one-page-website-builder', description: 'Simple sites, single scroll.', category: 'Website' },
  { name: 'Wedding Website Generator', slug: 'wedding-website-generator', description: 'Share your day with guests.', category: 'Website' },
  { name: 'Restaurant Website Builder', slug: 'restaurant-website-builder', description: 'Menu, hours, reservations, done.', category: 'Website' },
  { name: 'Blog Generator for Beginners', slug: 'blog-generator-for-beginners', description: 'Publish-ready in minutes.', category: 'Blog' },
];

// ── All generators by category ─────────────────────────────────────────────────
export const allGenerators = {
  websites: [
    { name: 'AI Website Generator', slug: 'ai-website-generator', description: 'Describe your business, get a full site in seconds.' },
    { name: 'Free Website Builder for Photographers', slug: 'free-website-builder-for-photographers', description: 'Showcase your photography with a stunning, free site.' },
    { name: 'One-Page Wedding Website Builder', slug: 'one-page-wedding-website-builder', description: 'Everything guests need on one beautiful page.' },
    { name: 'Restaurant Website Builder', slug: 'restaurant-website-builder', description: 'Menu, hours, reservations, and directions — done.' },
    { name: 'Small Business Website Generator', slug: 'small-business-website-generator', description: 'A professional site for your local business, fast.' },
    { name: 'Yoga Instructor Website Builder', slug: 'yoga-instructor-website-builder', description: 'Class schedules, booking, and your story in one place.' },
    { name: 'No-Code Website Builder', slug: 'no-code-website-builder', description: 'Build a real site without touching a line of code.' },
    { name: 'Beautiful Website Generator', slug: 'beautiful-website-generator', description: 'AI-designed layouts that look professionally crafted.' },
    { name: 'Nonprofit Website Builder', slug: 'nonprofit-website-builder', description: 'Tell your mission story and accept donations online.' },
    { name: 'Event Website Generator', slug: 'event-website-generator', description: 'Promote your event and collect RSVPs in minutes.' },
    { name: 'Freelancer Website Builder', slug: 'freelancer-website-builder', description: 'Win more clients with a polished personal site.' },
    { name: 'Real Estate Agent Website Generator', slug: 'real-estate-agent-website-generator', description: 'Listings, contact forms, and your brand — all set.' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', slug: 'ai-landing-page-maker', description: 'One-page sites built to convert visitors fast.' },
    { name: 'Product Launch Landing Page', slug: 'product-launch-landing-page', description: 'Build hype and capture leads before you ship.' },
    { name: 'Free Landing Page Generator', slug: 'free-landing-page-generator', description: 'A high-converting page at zero cost.' },
    { name: 'App Download Landing Page', slug: 'app-download-landing-page', description: 'Drive installs with a focused, persuasive page.' },
    { name: 'Webinar Registration Page Builder', slug: 'webinar-registration-page-builder', description: 'Fill your webinar seats with a clean sign-up page.' },
    { name: 'Lead Generation Landing Page', slug: 'lead-generation-landing-page', description: 'Capture emails and grow your list from day one.' },
    { name: 'Coming Soon Page Generator', slug: 'coming-soon-page-generator', description: 'Build anticipation while your product is in progress.' },
    { name: 'Sales Page Builder', slug: 'sales-page-builder', description: 'Long-form sales pages that close, built by AI.' },
    { name: 'Course Landing Page Generator', slug: 'course-landing-page-generator', description: 'Sell your online course with a persuasive page.' },
    { name: 'Startup Landing Page Builder', slug: 'startup-landing-page-builder', description: 'Validate your idea with a polished page in minutes.' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', slug: 'free-portfolio-generator', description: 'For creatives, in minutes, no fee.' },
    { name: 'Portfolio Generator for Designers', slug: 'portfolio-generator-for-designers', description: 'Show your design work in a gallery that impresses.' },
    { name: 'Photography Portfolio Builder', slug: 'photography-portfolio-builder', description: 'Full-bleed galleries that let your images speak.' },
    { name: 'Artist Portfolio Website Generator', slug: 'artist-portfolio-website-generator', description: 'A clean canvas for your paintings, prints, and more.' },
    { name: 'Developer Portfolio Builder', slug: 'developer-portfolio-builder', description: 'Projects, skills, and contact — all in one place.' },
    { name: 'Illustrator Portfolio Generator', slug: 'illustrator-portfolio-generator', description: 'Showcase your illustration work to clients and fans.' },
    { name: 'Model Portfolio Website Builder', slug: 'model-portfolio-website-builder', description: 'A professional comp card and gallery online.' },
    { name: 'Architect Portfolio Generator', slug: 'architect-portfolio-generator', description: 'Present your projects with the detail they deserve.' },
    { name: 'Video Producer Portfolio Builder', slug: 'video-producer-portfolio-builder', description: 'Embed your reels and case studies in one site.' },
    { name: 'UX Designer Portfolio Generator', slug: 'ux-designer-portfolio-generator', description: 'Walk clients through your process and outcomes.' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', slug: 'blog-generator-for-beginners', description: 'Publish-ready in minutes, no experience needed.' },
    { name: 'AI Blog Builder', slug: 'ai-blog-builder', description: 'AI sets up your blog structure and first posts.' },
    { name: 'Personal Blog Generator', slug: 'personal-blog-generator', description: 'Share your thoughts with a site that feels like you.' },
    { name: 'Travel Blog Builder', slug: 'travel-blog-builder', description: 'Document your journeys with maps, photos, and stories.' },
    { name: 'Food Blog Generator', slug: 'food-blog-generator', description: 'Recipes, reviews, and restaurant guides — all in one.' },
    { name: 'Business Blog Builder', slug: 'business-blog-builder', description: 'Thought leadership content that builds your brand.' },
    { name: 'Lifestyle Blog Generator', slug: 'lifestyle-blog-generator', description: 'A beautiful home for your style, wellness, and life.' },
    { name: 'Tech Blog Builder', slug: 'tech-blog-builder', description: 'Write about code, gadgets, and the future of tech.' },
    { name: 'Parenting Blog Generator', slug: 'parenting-blog-generator', description: 'Share your family stories with a warm, welcoming site.' },
    { name: 'Fitness Blog Builder', slug: 'fitness-blog-builder', description: 'Workouts, nutrition tips, and your wellness journey.' },
  ],
  stores: [
    { name: 'Online Store Builder', slug: 'online-store-builder', description: 'Start selling without writing code.' },
    { name: 'Online Store Builder for Restaurants', slug: 'online-store-builder-for-restaurants', description: 'Take orders and sell meal kits directly from your site.' },
    { name: 'Handmade Goods Store Generator', slug: 'handmade-goods-store-generator', description: 'Sell your crafts with a shop that matches your style.' },
    { name: 'Digital Products Store Builder', slug: 'digital-products-store-builder', description: 'Sell ebooks, templates, and downloads instantly.' },
    { name: 'Fashion Boutique Website Generator', slug: 'fashion-boutique-website-generator', description: 'A stylish storefront for your clothing brand.' },
    { name: 'Print-on-Demand Store Builder', slug: 'print-on-demand-store-builder', description: 'Sell custom merch with no inventory to manage.' },
    { name: 'Subscription Box Store Generator', slug: 'subscription-box-store-generator', description: 'Recurring revenue from a curated product experience.' },
    { name: 'Artist Shop Builder', slug: 'artist-shop-builder', description: 'Sell prints, originals, and commissions from your site.' },
    { name: 'Beauty Products Store Generator', slug: 'beauty-products-store-generator', description: 'A polished shop for skincare, makeup, and wellness.' },
    { name: 'Pet Products Store Builder', slug: 'pet-products-store-builder', description: 'Sell treats, toys, and accessories for pet lovers.' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', slug: 'link-in-bio-generator', description: 'One link for all your channels.' },
    { name: 'Creator Link-in-Bio Builder', slug: 'creator-link-in-bio-builder', description: 'Connect your audience to everything you make.' },
    { name: 'Musician Link-in-Bio Generator', slug: 'musician-link-in-bio-generator', description: 'Stream, merch, tour dates — one tap away.' },
    { name: 'Influencer Link Page Builder', slug: 'influencer-link-page-builder', description: 'A branded hub for all your sponsored and organic links.' },
    { name: 'Podcast Link-in-Bio Generator', slug: 'podcast-link-in-bio-generator', description: 'Every episode, every platform, one clean page.' },
    { name: 'Coach Link-in-Bio Builder', slug: 'coach-link-in-bio-builder', description: 'Book sessions, share resources, and grow your list.' },
    { name: 'Artist Link Page Generator', slug: 'artist-link-page-generator', description: 'Gallery, shop, and social — all in one link.' },
    { name: 'Freelancer Link-in-Bio Builder', slug: 'freelancer-link-in-bio-builder', description: 'Portfolio, contact, and services in a single link.' },
    { name: 'Brand Link-in-Bio Generator', slug: 'brand-link-in-bio-generator', description: 'A polished hub that keeps your brand consistent.' },
    { name: 'Nonprofit Link Page Builder', slug: 'nonprofit-link-page-builder', description: 'Donate, volunteer, and follow — all from one link.' },
  ],
};

// ── FAQ data ───────────────────────────────────────────────────────────────────
export const faqItems = [
  {
    id: 'faq-1',
    question: 'What is an AI site generator?',
    answer: "An AI site generator is a tool that builds a complete website for you based on a short description of your business, project, or goal. Instead of dragging and dropping elements or choosing from blank templates, you describe what you need in plain language and the AI assembles a full site — pages, layout, copy, and design — in seconds.\n\nStrikingly's generators are tuned for specific use cases (portfolios, stores, landing pages, and more), so the output is already shaped for your goal rather than a generic starting point.",
  },
  {
    id: 'faq-2',
    question: 'How is a generator different from a template?',
    answer: "A template is a pre-designed layout you fill in manually. A generator takes your input — your business name, what you do, your audience — and produces a site that's already populated with relevant structure and placeholder content tailored to your context.\n\nThe practical difference: with a template you start from a blank shell; with a generator you start from a draft that's already 80% of the way there.",
  },
  {
    id: 'faq-3',
    question: 'Are these generators free to use?',
    answer: "Yes. You can generate, preview, and customize your site without a credit card. Strikingly offers a free plan that lets you publish a site on a Strikingly subdomain. Paid plans unlock custom domains, additional pages, and advanced features.\n\nEvery generator on this page routes to the same AI builder, so the free tier applies to all of them.",
  },
  {
    id: 'faq-4',
    question: 'What kinds of sites can I build?',
    answer: "The generators on this page cover six broad categories: business and personal websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Within each category there are generators tuned for specific industries and goals — photographers, restaurants, yoga instructors, musicians, and many more.\n\nIf you don't see a generator that matches your exact situation, the general AI Website Generator is a good starting point — describe your goal and the AI will adapt.",
  },
  {
    id: 'faq-5',
    question: 'Can I customize what the generator produces?',
    answer: "Yes. The generated site is a starting point, not a finished product you're locked into. Once the AI builds your site, you can edit every section, swap images, change colors, rewrite copy, add or remove pages, and adjust the layout using Strikingly's visual editor.\n\nThink of the generator as doing the heavy lifting of the first draft so you can focus on the details that matter to you.",
  },
  {
    id: 'faq-6',
    question: 'Do generated sites work on mobile?',
    answer: "Yes. Every site produced by a Strikingly generator is responsive by default. The layout adapts automatically to phones, tablets, and desktops without any extra work on your part.\n\nYou can preview the mobile view inside the editor before you publish, and make any adjustments you want.",
  },
];
