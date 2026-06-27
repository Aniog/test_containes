// All user-visible strings live here so adding strings.es / strings.ja is a one-file change.
export const strings = {
  en: {
    brand: 'strikingly AI',
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSub:
      'Browse the right generator for what you\u2019re building, or jump straight into our AI site builder.',
    heroPrimaryCta: 'START BUILDING - IT\u2019S FREE',
    heroSecondaryCta: 'BROWSE GENERATORS',
    featuredHeading: 'FEATURED GENERATORS',
    featuredSub: 'A few common starting points.',
    browseHeading: 'BROWSE BY CATEGORY',
    allHeading: 'ALL GENERATORS',
    allSub: 'Sixty-plus generators, organized by what you\u2019re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    searchEmpty: 'No generators match your search.',
    searchClear: 'Clear search',
    searchCantFind: 'Can\u2019t find it? Start with our AI builder.',
    howHeading: 'HOW IT WORKS',
    whyHeading: 'WHY STRIKINGLY',
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    closingHeadline: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    footerCopyright: (year) => `\u00A9 ${year} Strikingly. All rights reserved.`,
    footerCols: [
      { title: 'Product', links: [
        { label: 'Templates', href: '/templates' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'AI Site Builder', href: '/s/ai_site_builder' },
      ] },
      { title: 'Company', links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
      ] },
      { title: 'Support', links: [
        { label: 'Help Center', href: '/support' },
      ] },
      { title: 'Legal', links: [
        { label: 'Terms', href: '/terms' },
        { label: 'Privacy', href: '/privacy' },
      ] },
    ],
    howSteps: [
      { title: 'PICK A GENERATOR', body: 'Browse by category or search to find one that fits your goal.' },
      { title: 'DESCRIBE YOUR SITE', body: 'Tell our AI builder about your business in a sentence or two.' },
      { title: 'GENERATE AND PUBLISH', body: 'Get a fully built site in seconds. Customize anything, then go live.' },
    ],
    whyPoints: [
      { title: 'LIVE IN SECONDS', body: 'Describe your site, we build it. No setup, no learning curve.' },
      { title: 'MOBILE BY DEFAULT', body: 'Every generator produces responsive sites that work on any device.' },
      { title: 'FREE TO START', body: 'Generate, customize, and publish without a credit card.' },
    ],
    faqs: [
      { q: 'What is an AI site generator?', a: 'An AI site generator takes a short description of what you want to build and produces a complete, structured website in seconds. You describe your business or project, and the generator writes the copy, picks a layout, and assembles the sections for you.' },
      { q: 'How is a generator different from a template?', a: 'A template is a fixed design you fill in by hand. A generator builds the site for you based on your description, so the starting point is already tailored to your goal. You can then customize anything the generator produced.' },
      { q: 'Are these generators free to use?', a: 'Yes. You can generate, customize, and publish a site without a credit card. Paid plans unlock custom domains and additional features when you need them.' },
      { q: 'What kinds of sites can I build?', a: 'Business websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages are all covered. Each category includes generators tuned to specific industries and goals.' },
      { q: 'Can I customize what the generator produces?', a: 'Absolutely. Everything the generator creates is editable. Swap text and images, rearrange sections, change colors, and add new blocks until the site is yours.' },
      { q: 'Do generated sites work on mobile?', a: 'Yes. Every generator produces responsive layouts that adapt to phones, tablets, and desktops automatically, so your site looks right on any device.' },
    ],
  },
}

// Six categories. id matches the hash anchor (#websites, #landing-pages, ...).
export const categories = [
  { id: 'websites', name: 'Websites', desc: 'AI-built business and personal sites for any goal.' },
  { id: 'landing-pages', name: 'Landing Pages', desc: 'Single-page sites built to convert visitors fast.' },
  { id: 'portfolios', name: 'Portfolios', desc: 'Showcase your work with a clean, focused site.' },
  { id: 'blogs', name: 'Blogs', desc: 'Publish-ready blogs with built-in SEO basics.' },
  { id: 'stores', name: 'Online Stores', desc: 'Sell products online with payments built in.' },
  { id: 'link-in-bio', name: 'Link-in-Bio', desc: 'One link, all your places. Made for creators.' },
]

// Featured grid mixes categories, so each tile carries a category tag.
export const featured = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' },
]

// Directory subsections. Each subsection shares one thumbnail illustration.
// 8-12 entries each so the "Show all" toggle is meaningful.
export const directory = [
  {
    categoryId: 'websites',
    entries: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
      { name: 'Free Website Builder for Photographers', desc: 'A polished photo site, no fee', slug: 'free-website-builder-for-photographers' },
      { name: 'One-Page Wedding Website Builder', desc: 'Share your day on a single scroll', slug: 'one-page-wedding-website-builder' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
      { name: 'Yoga Studio Website Generator', desc: 'Class schedules and bookings online', slug: 'yoga-studio-website-generator' },
      { name: 'Small Business Website Builder', desc: 'A professional presence, fast', slug: 'small-business-website-builder' },
      { name: 'Beautiful Personal Website Generator', desc: 'An about page that feels like you', slug: 'beautiful-personal-website-generator' },
      { name: 'No-Code Website Builder for Startups', desc: 'Launch a startup site without code', slug: 'no-code-website-builder-for-startups' },
      { name: 'Consultant Website Generator', desc: 'Build trust and capture leads', slug: 'consultant-website-generator' },
      { name: 'Real Estate Website Builder', desc: 'Listings and contact in one place', slug: 'real-estate-website-builder' },
    ],
  },
  {
    categoryId: 'landing-pages',
    entries: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
      { name: 'Free Landing Page Generator', desc: 'Launch a campaign page, no cost', slug: 'free-landing-page-generator' },
      { name: 'App Landing Page Builder', desc: 'Showcase your app and drive installs', slug: 'app-landing-page-builder' },
      { name: 'SaaS Landing Page Generator', desc: 'Explain your product, capture signups', slug: 'saas-landing-page-generator' },
      { name: 'Event Landing Page Builder', desc: 'One page for RSVPs and details', slug: 'event-landing-page-builder' },
      { name: 'Product Launch Landing Page Generator', desc: 'Build buzz before you ship', slug: 'product-launch-landing-page-generator' },
      { name: 'Webinar Registration Landing Page', desc: 'Collect signups on a single page', slug: 'webinar-registration-landing-page' },
      { name: 'Lead Capture Landing Page Builder', desc: 'Turn visitors into contacts', slug: 'lead-capture-landing-page-builder' },
      { name: 'One-Page Promo Site Generator', desc: 'A focused page for any offer', slug: 'one-page-promo-site-generator' },
    ],
  },
  {
    categoryId: 'portfolios',
    entries: [
      { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', desc: 'Showcase design work cleanly', slug: 'portfolio-generator-for-designers' },
      { name: 'Photography Portfolio Builder', desc: 'Let your images do the talking', slug: 'photography-portfolio-builder' },
      { name: 'Artist Portfolio Website Generator', desc: 'A gallery for your art', slug: 'artist-portfolio-website-generator' },
      { name: 'Writer Portfolio Builder', desc: 'Collect your clips in one place', slug: 'writer-portfolio-builder' },
      { name: 'Student Portfolio Generator', desc: 'A first portfolio, free to start', slug: 'student-portfolio-generator' },
      { name: 'Architecture Portfolio Website Builder', desc: 'Present projects with space to breathe', slug: 'architecture-portfolio-website-builder' },
      { name: 'Modeling Portfolio Generator', desc: 'A comp card site in minutes', slug: 'modeling-portfolio-generator' },
      { name: 'Freelancer Portfolio Builder', desc: 'Proof of work that wins clients', slug: 'freelancer-portfolio-builder' },
    ],
  },
  {
    categoryId: 'blogs',
    entries: [
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
      { name: 'Free Blog Website Builder', desc: 'Start writing, no setup required', slug: 'free-blog-website-builder' },
      { name: 'AI Blog Generator', desc: 'Draft posts and structure your blog', slug: 'ai-blog-generator' },
      { name: 'Food Blog Website Generator', desc: 'Recipes and stories, beautifully laid out', slug: 'food-blog-website-generator' },
      { name: 'Travel Blog Builder', desc: 'Share trips with maps and galleries', slug: 'travel-blog-builder' },
      { name: 'Personal Blog Generator', desc: 'A home for your thoughts', slug: 'personal-blog-generator' },
      { name: 'Fashion Blog Website Builder', desc: 'Lookbooks and posts in one feed', slug: 'fashion-blog-website-builder' },
      { name: 'Tech Blog Generator', desc: 'Code-friendly layouts for writers', slug: 'tech-blog-generator' },
      { name: 'Lifestyle Blog Builder', desc: 'A magazine-style blog, fast', slug: 'lifestyle-blog-builder' },
    ],
  },
  {
    categoryId: 'stores',
    entries: [
      { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
      { name: 'Online Store Builder for Restaurants', desc: 'Take orders and reservations online', slug: 'online-store-builder-for-restaurants' },
      { name: 'Free Ecommerce Website Generator', desc: 'A shop you can launch today', slug: 'free-ecommerce-website-generator' },
      { name: 'Boutique Store Builder', desc: 'A curated shop for small brands', slug: 'boutique-store-builder' },
      { name: 'Digital Product Store Generator', desc: 'Sell downloads and courses', slug: 'digital-product-store-generator' },
      { name: 'Handmade Goods Store Builder', desc: 'A storefront for makers', slug: 'handmade-goods-store-builder' },
      { name: 'Coffee Shop Online Store Generator', desc: 'Beans, merch, and subscriptions', slug: 'coffee-shop-online-store-generator' },
      { name: 'Print-on-Demand Store Builder', desc: 'Sell custom designs, no inventory', slug: 'print-on-demand-store-builder' },
      { name: 'Subscription Box Store Generator', desc: 'Recurring revenue on autopilot', slug: 'subscription-box-store-generator' },
    ],
  },
  {
    categoryId: 'link-in-bio',
    entries: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
      { name: 'Free Link-in-Bio Builder', desc: 'A link page, no cost to start', slug: 'free-link-in-bio-builder' },
      { name: 'Creator Link Page Generator', desc: 'All your links, one tidy page', slug: 'creator-link-page-generator' },
      { name: 'Musician Link-in-Bio Builder', desc: 'Tour dates, streams, and merch', slug: 'musician-link-in-bio-builder' },
      { name: 'Influencer Bio Link Generator', desc: 'A page that matches your brand', slug: 'influencer-bio-link-generator' },
      { name: 'Podcast Link-in-Bio Builder', desc: 'Episodes and subscribe links', slug: 'podcast-link-in-bio-builder' },
      { name: 'Streamer Link Page Generator', desc: 'Schedules, socials, and support', slug: 'streamer-link-page-generator' },
      { name: 'Small Business Bio Link Builder', desc: 'A mini homepage for your bio', slug: 'small-business-bio-link-builder' },
    ],
  },
]

// How many cards to show before the "Show all" toggle kicks in.
export const VISIBLE_BEFORE_COLLAPSE = 6
