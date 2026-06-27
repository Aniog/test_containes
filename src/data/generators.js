// All user-visible strings live here for i18n readiness.
// To add a locale, duplicate this object as strings.es, strings.ja, etc.
export const strings = {
  en: {
    // Top bar
    logoText: 'strikingly AI',

    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',

    // Hero
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSubheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    heroCTAPrimary: 'START BUILDING — IT\'S FREE',
    heroCTASecondary: 'BROWSE GENERATORS',

    // Featured
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',

    // Browse by category
    browseCategoryHeading: 'BROWSE BY CATEGORY',

    // All generators
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchResultCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
    searchNoResults: 'No generators match your search.',
    searchClearBtn: 'Clear search',
    searchNoResultsCTA: 'Can\'t find it? Start with our AI builder.',
    showAllBtn: (n) => `Show all ${n} generators`,
    showLessBtn: 'Show less',

    // How it works
    howItWorksHeading: 'HOW IT WORKS',

    // Why Strikingly
    whyHeading: 'WHY STRIKINGLY',

    // FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',

    // Closing CTA
    closingHeadline: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCTA: 'START WITH AI BUILDER',

    // Footer
    footerCopyright: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`,
  },
};

// ─── Featured Generators (9 tiles, mixed categories) ─────────────────────────
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

// ─── Browse by Category cards ─────────────────────────────────────────────────
export const categories = [
  { id: 'websites', name: 'Websites', description: 'AI-built business and personal sites for any goal.', anchor: '#websites' },
  { id: 'landing-pages', name: 'Landing Pages', description: 'Single-page sites built to convert visitors fast.', anchor: '#landing-pages' },
  { id: 'portfolios', name: 'Portfolios', description: 'Showcase your work with a clean, focused site.', anchor: '#portfolios' },
  { id: 'blogs', name: 'Blogs', description: 'Publish-ready blogs with built-in SEO basics.', anchor: '#blogs' },
  { id: 'stores', name: 'Online Stores', description: 'Sell products online with payments built in.', anchor: '#stores' },
  { id: 'link-in-bio', name: 'Link-in-Bio', description: 'One link, all your places. Made for creators.', anchor: '#link-in-bio' },
];

// ─── All Generators directory ─────────────────────────────────────────────────
export const allGenerators = [
  {
    categoryId: 'websites',
    categoryLabel: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
    generators: [
      { name: 'AI Website Generator', slug: 'ai-website-generator', description: 'Describe your business in a sentence and get a complete site.' },
      { name: 'Free Website Builder for Photographers', slug: 'free-website-builder-for-photographers', description: 'A portfolio-ready site for photographers, at no cost.' },
      { name: 'One-Page Wedding Website Builder', slug: 'one-page-wedding-website-builder', description: 'Everything guests need on a single, beautiful page.' },
      { name: 'Small Business Website Generator', slug: 'small-business-website-generator', description: 'Professional sites for local and online businesses.' },
      { name: 'No-Code Website Builder for Coaches', slug: 'no-code-website-builder-for-coaches', description: 'Book clients and share your story without writing code.' },
      { name: 'Restaurant Website Builder', slug: 'restaurant-website-builder', description: 'Menu, hours, reservations, and directions in one place.' },
      { name: 'Yoga Instructor Website Generator', slug: 'yoga-instructor-website-generator', description: 'Class schedules, booking, and your teaching philosophy.' },
      { name: 'Real Estate Agent Website Builder', slug: 'real-estate-agent-website-builder', description: 'Listings, contact forms, and local SEO built in.' },
      { name: 'Nonprofit Website Generator', slug: 'nonprofit-website-generator', description: 'Tell your mission story and accept donations online.' },
      { name: 'Beautiful Personal Website Builder', slug: 'beautiful-personal-website-builder', description: 'A polished personal site that reflects who you are.' },
    ],
  },
  {
    categoryId: 'landing-pages',
    categoryLabel: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    generators: [
      { name: 'AI Landing Page Maker', slug: 'ai-landing-page-maker', description: 'Generate a high-converting landing page in seconds.' },
      { name: 'Free Landing Page Builder', slug: 'free-landing-page-builder', description: 'Launch a landing page without spending a cent.' },
      { name: 'Product Launch Landing Page Generator', slug: 'product-launch-landing-page-generator', description: 'Build buzz and capture leads before you ship.' },
      { name: 'Event Registration Landing Page Builder', slug: 'event-registration-landing-page-builder', description: 'Collect RSVPs and ticket sales on one focused page.' },
      { name: 'Lead Generation Landing Page Maker', slug: 'lead-generation-landing-page-maker', description: 'Capture emails and grow your list from day one.' },
      { name: 'App Download Landing Page Generator', slug: 'app-download-landing-page-generator', description: 'Drive installs with a clean, persuasive app page.' },
      { name: 'Webinar Registration Page Builder', slug: 'webinar-registration-page-builder', description: 'Fill your webinar seats with a dedicated sign-up page.' },
      { name: 'Coming Soon Page Generator', slug: 'coming-soon-page-generator', description: 'Build anticipation and collect emails before launch.' },
      { name: 'Sales Funnel Landing Page Maker', slug: 'sales-funnel-landing-page-maker', description: 'Guide visitors from interest to purchase in one scroll.' },
    ],
  },
  {
    categoryId: 'portfolios',
    categoryLabel: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    generators: [
      { name: 'Free Portfolio Generator', slug: 'free-portfolio-generator', description: 'A clean portfolio site for any creative, at no cost.' },
      { name: 'Portfolio Generator for Designers', slug: 'portfolio-generator-for-designers', description: 'Show your visual work in a gallery-first layout.' },
      { name: 'Photography Portfolio Website Builder', slug: 'photography-portfolio-website-builder', description: 'Full-bleed images and minimal chrome for photographers.' },
      { name: 'Illustrator Portfolio Generator', slug: 'illustrator-portfolio-generator', description: 'Display your illustration work in a curated grid.' },
      { name: 'Developer Portfolio Website Maker', slug: 'developer-portfolio-website-maker', description: 'Projects, skills, and contact info in one clean page.' },
      { name: 'Architect Portfolio Site Generator', slug: 'architect-portfolio-site-generator', description: 'Showcase plans, renders, and built work professionally.' },
      { name: 'Model Portfolio Website Builder', slug: 'model-portfolio-website-builder', description: 'A sleek, image-forward site for modeling portfolios.' },
      { name: 'Freelancer Portfolio Generator', slug: 'freelancer-portfolio-generator', description: 'Win more clients with a polished freelance portfolio.' },
      { name: 'Artist Portfolio Website Maker', slug: 'artist-portfolio-website-maker', description: 'Let your art take center stage on a minimal canvas.' },
      { name: 'UX Designer Portfolio Builder', slug: 'ux-designer-portfolio-builder', description: 'Case studies, process work, and contact in one place.' },
    ],
  },
  {
    categoryId: 'blogs',
    categoryLabel: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    generators: [
      { name: 'Blog Generator for Beginners', slug: 'blog-generator-for-beginners', description: 'Start publishing in minutes with no technical setup.' },
      { name: 'AI Blog Website Builder', slug: 'ai-blog-website-builder', description: 'Let AI scaffold your blog structure and first posts.' },
      { name: 'Personal Blog Site Generator', slug: 'personal-blog-site-generator', description: 'A clean, readable home for your writing and ideas.' },
      { name: 'Travel Blog Website Builder', slug: 'travel-blog-website-builder', description: 'Share your journeys with maps, photos, and stories.' },
      { name: 'Food Blog Generator', slug: 'food-blog-generator', description: 'Recipes, photos, and a newsletter in one place.' },
      { name: 'Business Blog Website Maker', slug: 'business-blog-website-maker', description: 'Thought leadership content that builds your brand.' },
      { name: 'Lifestyle Blog Builder', slug: 'lifestyle-blog-builder', description: 'A warm, editorial site for lifestyle and wellness content.' },
      { name: 'Tech Blog Generator', slug: 'tech-blog-generator', description: 'Tutorials, opinions, and code snippets, beautifully laid out.' },
      { name: 'Parenting Blog Website Builder', slug: 'parenting-blog-website-builder', description: 'Share your family stories with a welcoming design.' },
    ],
  },
  {
    categoryId: 'stores',
    categoryLabel: 'Online Stores',
    description: 'Sell products online with payments built in.',
    generators: [
      { name: 'Online Store Builder', slug: 'online-store-builder', description: 'Start selling products online without writing code.' },
      { name: 'Online Store Builder for Restaurants', slug: 'online-store-builder-for-restaurants', description: 'Take orders and sell meal kits directly from your site.' },
      { name: 'Handmade Goods Store Generator', slug: 'handmade-goods-store-generator', description: 'Sell your crafts with a shop that matches your aesthetic.' },
      { name: 'Digital Products Store Builder', slug: 'digital-products-store-builder', description: 'Sell ebooks, templates, and downloads instantly.' },
      { name: 'Fashion Boutique Website Generator', slug: 'fashion-boutique-website-generator', description: 'A stylish storefront for clothing and accessories.' },
      { name: 'Print-on-Demand Store Builder', slug: 'print-on-demand-store-builder', description: 'Sell custom merch with no inventory to manage.' },
      { name: 'Subscription Box Store Generator', slug: 'subscription-box-store-generator', description: 'Recurring billing and product pages in one setup.' },
      { name: 'Local Bakery Online Store Builder', slug: 'local-bakery-online-store-builder', description: 'Take pre-orders and sell baked goods from your site.' },
      { name: 'Beauty Products Store Generator', slug: 'beauty-products-store-generator', description: 'A polished storefront for skincare and beauty brands.' },
      { name: 'Art Print Store Builder', slug: 'art-print-store-builder', description: 'Sell limited-edition prints with a gallery-style shop.' },
    ],
  },
  {
    categoryId: 'link-in-bio',
    categoryLabel: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    generators: [
      { name: 'Link-in-Bio Generator', slug: 'link-in-bio-generator', description: 'One link that connects all your channels and content.' },
      { name: 'Instagram Link-in-Bio Builder', slug: 'instagram-link-in-bio-builder', description: 'Turn your Instagram bio link into a full landing page.' },
      { name: 'Creator Link Page Generator', slug: 'creator-link-page-generator', description: 'A branded hub for all your content and social profiles.' },
      { name: 'Musician Link-in-Bio Builder', slug: 'musician-link-in-bio-builder', description: 'Stream links, tour dates, and merch in one tap.' },
      { name: 'Influencer Bio Link Page Maker', slug: 'influencer-bio-link-page-maker', description: 'Monetize your audience with a polished link page.' },
      { name: 'Podcast Link-in-Bio Generator', slug: 'podcast-link-in-bio-generator', description: 'All your episodes and platforms in one shareable link.' },
      { name: 'TikTok Bio Link Builder', slug: 'tiktok-bio-link-builder', description: 'Drive TikTok followers to your most important content.' },
      { name: 'Freelancer Bio Link Page Generator', slug: 'freelancer-bio-link-page-generator', description: 'Portfolio, contact, and services in a single link.' },
      { name: 'Author Link-in-Bio Builder', slug: 'author-link-in-bio-builder', description: 'Books, newsletter, and events all in one place.' },
    ],
  },
];

// ─── How It Works steps ───────────────────────────────────────────────────────
export const howItWorksSteps = [
  {
    number: '01',
    title: 'PICK A GENERATOR',
    body: 'Browse by category or search to find one that fits your goal.',
  },
  {
    number: '02',
    title: 'DESCRIBE YOUR SITE',
    body: 'Tell our AI builder about your business in a sentence or two.',
  },
  {
    number: '03',
    title: 'GENERATE AND PUBLISH',
    body: 'Get a fully built site in seconds. Customize anything, then go live.',
  },
];

// ─── Why Strikingly ───────────────────────────────────────────────────────────
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

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const faqItems = [
  {
    id: 'faq-1',
    question: 'What is an AI site generator?',
    answer: 'An AI site generator is a tool that builds a complete website for you based on a short description of your business or goal. Instead of dragging and dropping elements manually, you describe what you need and the AI assembles the layout, copy, and structure in seconds.\n\nStrikingly\'s generators are tuned for specific use cases — portfolios, stores, landing pages, and more — so the output is already shaped for your purpose rather than a blank canvas.',
  },
  {
    id: 'faq-2',
    question: 'How is a generator different from a template?',
    answer: 'A template gives you a pre-designed layout that you fill in yourself. A generator goes further: it takes your input, applies AI to write placeholder copy, choose a fitting layout, and pre-configure sections relevant to your goal.\n\nThe result is a site that feels like it was started for you, not just styled for you. You still customize everything, but you start from something meaningful rather than a blank page.',
  },
  {
    id: 'faq-3',
    question: 'Are these generators free to use?',
    answer: 'Yes. You can generate, preview, and customize your site without a credit card. Strikingly offers a free plan that lets you publish a site on a Strikingly subdomain.\n\nPaid plans unlock custom domains, additional pages, e-commerce features, and more. You can upgrade at any time, but you\'re never required to.',
  },
  {
    id: 'faq-4',
    question: 'What kinds of sites can I build?',
    answer: 'The generators on this page cover the most common site types: business websites, personal portfolios, landing pages, blogs, online stores, and link-in-bio pages. Each category has multiple generators tuned for specific industries and goals.\n\nIf you don\'t see a generator that matches your exact need, the AI Site Builder at the top of this page can handle almost any brief you give it.',
  },
  {
    id: 'faq-5',
    question: 'Can I customize what the generator produces?',
    answer: 'Absolutely. Every generated site opens in Strikingly\'s editor, where you can change text, swap images, reorder sections, adjust colors, and add or remove any element.\n\nThe generator gives you a strong starting point; the editor gives you full control. Nothing is locked in.',
  },
  {
    id: 'faq-6',
    question: 'Do generated sites work on mobile?',
    answer: 'Yes. Every site Strikingly generates is fully responsive by default. The layout adapts automatically to phones, tablets, and desktops without any extra work on your part.\n\nYou can preview the mobile view in the editor before you publish to make sure everything looks exactly right.',
  },
];
