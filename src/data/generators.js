// i18n-ready strings
export const strings = {
  en: {
    siteTitle: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
    brandName: 'strikingly AI',
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      line1: 'BUILD ANY KIND OF SITE',
      line2: 'WITH AI, IN AN INSTANT',
      subheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
      ctaPrimary: 'START BUILDING - IT\'S FREE',
      ctaSecondary: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      subheading: 'A few common starting points.',
    },
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      subheading: 'Sixty-plus generators, organized by what you\'re building.',
      searchPlaceholder: 'Search generators...',
      searchAriaLabel: 'Search generators',
      matchText: (count) => `${count} generator${count !== 1 ? 's' : ''} match${count !== 1 ? '' : 'es'}`,
      emptyHeading: 'No generators found',
      emptySubtext: 'Can\'t find it? Start with our AI builder.',
      emptyCta: 'START WITH AI BUILDER',
      clearSearch: 'Clear search',
      showAll: (count) => `Show all ${count} generators`,
      collapseAll: (count) => `Show fewer generators`,
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        { num: 1, title: 'PICK A GENERATOR', desc: 'Browse by category or search to find one that fits your goal.' },
        { num: 2, title: 'DESCRIBE YOUR SITE', desc: 'Tell our AI builder about your business in a sentence or two.' },
        { num: 3, title: 'GENERATE AND PUBLISH', desc: 'Get a fully built site in seconds. Customize anything, then go live.' },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      items: [
        { title: 'LIVE IN SECONDS', desc: 'Describe your site, we build it. No setup, no learning curve.' },
        { title: 'MOBILE BY DEFAULT', desc: 'Every generator produces responsive sites that work on any device.' },
        { title: 'FREE TO START', desc: 'Generate, customize, and publish without a credit card.' },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          question: 'What is an AI site generator?',
          answer: 'An AI site generator is a tool that uses artificial intelligence to build a complete website from a short text description. You describe your business or project in a sentence or two, and the generator creates a fully designed site with layout, copy, images, and structure already in place. It is the fastest way to get a professional site online without any design or coding skills.',
        },
        {
          question: 'How is a generator different from a template?',
          answer: 'A template gives you a fixed layout that you fill in yourself. You still need to write copy, choose images, and adjust sections. A generator builds the entire site for you based on what you tell it about your business. The AI handles structure, content, and design choices so you start with a finished draft rather than an empty shell.',
        },
        {
          question: 'Are these generators free to use?',
          answer: 'Yes. You can generate a site, customize it, and publish it to a free Strikingly subdomain without entering a credit card. If you want a custom domain, advanced features, or higher usage limits, paid plans are available. But getting started and seeing your site live costs nothing.',
        },
        {
          question: 'What kinds of sites can I build?',
          answer: 'You can build business sites, portfolios, landing pages, blogs, online stores, event pages, link-in-bio pages, and more. The generator directory above organizes tools by category so you can find the right starting point for your specific goal. Each generator is tuned for a particular type of site.',
        },
        {
          question: 'Can I customize what the generator produces?',
          answer: 'Absolutely. The generator gives you a strong starting point, but every element is editable. You can change text, swap images, rearrange sections, adjust colors, and add new pages. The AI handles the heavy lifting of initial creation; you stay in full control of the final result.',
        },
        {
          question: 'Do generated sites work on mobile?',
          answer: 'Yes. Every site produced by a Strikingly generator is fully responsive by default. The layout, images, and navigation automatically adapt to phones, tablets, and desktops. You do not need to build a separate mobile version or adjust settings for different screen sizes.',
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      copyright: (year) => `\u00A9 ${year} Strikingly, Inc.`,
      columns: [
        { heading: 'Product', links: [
          { label: 'AI Site Builder', href: '/s/ai_site_builder' },
          { label: 'Templates', href: '/templates' },
          { label: 'Pricing', href: '/pricing' },
        ]},
        { heading: 'Company', links: [
          { label: 'About', href: '/about' },
          { label: 'Blog', href: '/blog' },
          { label: 'Support', href: '/support' },
        ]},
        { heading: 'Legal', links: [
          { label: 'Terms of Service', href: '/terms' },
          { label: 'Privacy Policy', href: '/privacy' },
        ]},
      ],
    },
  },
};

// Categories with slugs, descriptions, and hash anchors
export const categories = [
  { slug: 'websites', name: 'Websites', description: 'AI-built business and personal sites for any goal.' },
  { slug: 'landing-pages', name: 'Landing Pages', description: 'Single-page sites built to convert visitors fast.' },
  { slug: 'portfolios', name: 'Portfolios', description: 'Showcase your work with a clean, focused site.' },
  { slug: 'blogs', name: 'Blogs', description: 'Publish-ready blogs with built-in SEO basics.' },
  { slug: 'stores', name: 'Online Stores', description: 'Sell products online with payments built in.' },
  { slug: 'link-in-bio', name: 'Link-in-Bio', description: 'One link, all your places. Made for creators.' },
];

// Featured generators (Section 3) - 9 tiles with category tag
export const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', slug: 'ai-website-generator', category: 'Websites' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator', category: 'Portfolios' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', slug: 'ai-landing-page-maker', category: 'Landing Pages' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', slug: 'online-store-builder', category: 'Stores' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', slug: 'link-in-bio-generator', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', slug: 'one-page-website-builder', category: 'Websites' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', slug: 'wedding-website-generator', category: 'Websites' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder', category: 'Websites' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners', category: 'Blogs' },
];

// All generators organized by category (Section 5)
// Each subsection has 8-12 entries for meaningful "Show all" toggles
export const allGenerators = {
  websites: [
    { name: 'AI Website Generator', description: 'Describe your business, get a full site', slug: 'ai-website-generator' },
    { name: 'Free Website Builder', description: 'Create and publish at zero cost', slug: 'free-website-builder' },
    { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
    { name: 'Wedding Website Generator', description: 'Share your day with guests', slug: 'wedding-website-generator' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
    { name: 'Website Builder for Photographers', description: 'Photo-first layouts for your studio', slug: 'website-builder-for-photographers' },
    { name: 'Website Builder for Churches', description: 'Events, sermons, and community pages', slug: 'website-builder-for-churches' },
    { name: 'No-Code Website Builder', description: 'Drag, drop, publish. No code needed', slug: 'no-code-website-builder' },
    { name: 'Website Generator for Nonprofits', description: 'Mission-driven sites that inspire action', slug: 'website-generator-for-nonprofits' },
    { name: 'AI Website Builder for Yoga Studios', description: 'Class schedules, booking, and more', slug: 'ai-website-builder-for-yoga-studios' },
    { name: 'Beautiful Website Generator', description: 'Design-forward sites without a designer', slug: 'beautiful-website-generator' },
    { name: 'Website Builder for Real Estate', description: 'Listings, lead capture, and maps built in', slug: 'website-builder-for-real-estate' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
    { name: 'Free Landing Page Builder', description: 'Launch a landing page at no cost', slug: 'free-landing-page-builder' },
    { name: 'Landing Page Generator for Startups', description: 'Pre-launch pages with email capture', slug: 'landing-page-generator-for-startups' },
    { name: 'Landing Page Builder for Events', description: 'RSVPs, schedules, and ticket sales', slug: 'landing-page-builder-for-events' },
    { name: 'No-Code Landing Page Maker', description: 'Build and test pages without developers', slug: 'no-code-landing-page-maker' },
    { name: 'Landing Page Generator for Apps', description: 'App store links and feature highlights', slug: 'landing-page-generator-for-apps' },
    { name: 'Landing Page Builder for Coaches', description: 'Book discovery calls and share testimonials', slug: 'landing-page-builder-for-coaches' },
    { name: 'AI Landing Page Builder for SaaS', description: 'Pricing, features, and demo signups', slug: 'ai-landing-page-builder-for-saas' },
    { name: 'Landing Page Generator for Courses', description: 'Syllabus, instructor info, and enroll now', slug: 'landing-page-generator-for-courses' },
    { name: 'Free Landing Page Generator', description: 'High-converting pages, zero cost to start', slug: 'free-landing-page-generator' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
    { name: 'Portfolio Generator for Designers', description: 'Showcase UX, UI, and graphic work', slug: 'portfolio-generator-for-designers' },
    { name: 'Portfolio Generator for Photographers', description: 'Gallery layouts for every shoot', slug: 'portfolio-generator-for-photographers' },
    { name: 'Portfolio Builder for Artists', description: 'Full-bleed images and artist statements', slug: 'portfolio-builder-for-artists' },
    { name: 'AI Portfolio Generator', description: 'Describe your work, get a polished portfolio', slug: 'ai-portfolio-generator' },
    { name: 'Portfolio Generator for Writers', description: 'Published clips and writing samples', slug: 'portfolio-generator-for-writers' },
    { name: 'Portfolio Builder for Developers', description: 'Project showcases with GitHub links', slug: 'portfolio-builder-for-developers' },
    { name: 'Portfolio Generator for Models', description: 'Comp cards and lookbooks online', slug: 'portfolio-generator-for-models' },
    { name: 'Portfolio Generator for Architects', description: 'Project galleries and firm overview', slug: 'portfolio-generator-for-architects' },
    { name: 'No-Code Portfolio Builder', description: 'Beautiful portfolios, no coding required', slug: 'no-code-portfolio-builder' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
    { name: 'AI Blog Generator', description: 'Describe your topic, get a live blog', slug: 'ai-blog-generator' },
    { name: 'Free Blog Builder', description: 'Start writing and publishing at no cost', slug: 'free-blog-builder' },
    { name: 'Blog Generator for Food Writers', description: 'Recipe cards and food photography layouts', slug: 'blog-generator-for-food-writers' },
    { name: 'Blog Builder for Travel', description: 'Maps, itineraries, and travel stories', slug: 'blog-builder-for-travel' },
    { name: 'Blog Generator for Personal Journals', description: 'Minimal layouts for personal writing', slug: 'blog-generator-for-personal-journals' },
    { name: 'Blog Builder for Businesses', description: 'Thought leadership and SEO content', slug: 'blog-builder-for-businesses' },
    { name: 'No-Code Blog Generator', description: 'Publish without touching a line of code', slug: 'no-code-blog-generator' },
    { name: 'Blog Generator for Tech Writers', description: 'Code blocks and developer-focused layouts', slug: 'blog-generator-for-tech-writers' },
    { name: 'Blog Generator for Fashion', description: 'Lookbooks and style editorial layouts', slug: 'blog-generator-for-fashion' },
  ],
  stores: [
    { name: 'Online Store Builder', description: 'Start selling without writing code', slug: 'online-store-builder' },
    { name: 'AI Store Generator', description: 'Describe your products, get a shop', slug: 'ai-store-generator' },
    { name: 'Free Online Store Builder', description: 'Launch your store at no cost', slug: 'free-online-store-builder' },
    { name: 'Online Store Builder for Restaurants', description: 'Takeout orders and menu management', slug: 'online-store-builder-for-restaurants' },
    { name: 'Store Builder for Fashion Brands', description: 'Lookbooks, size guides, and checkout', slug: 'store-builder-for-fashion-brands' },
    { name: 'Store Generator for Handmade Goods', description: 'Artisan product pages with story sections', slug: 'store-generator-for-handmade-goods' },
    { name: 'Online Store Builder for Digital Products', description: 'Sell downloads, templates, and licenses', slug: 'online-store-builder-for-digital-products' },
    { name: 'No-Code Store Builder', description: 'Full ecommerce with zero development', slug: 'no-code-store-builder' },
    { name: 'Store Builder for Subscription Boxes', description: 'Recurring orders and unboxing previews', slug: 'store-builder-for-subscription-boxes' },
    { name: 'Online Store Builder for Photographers', description: 'Sell prints and book sessions online', slug: 'online-store-builder-for-photographers' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels', slug: 'link-in-bio-generator' },
    { name: 'Free Link-in-Bio Builder', description: 'A branded landing page for your links', slug: 'free-link-in-bio-builder' },
    { name: 'Link-in-Bio Generator for Creators', description: 'YouTube, TikTok, merch, and more', slug: 'link-in-bio-generator-for-creators' },
    { name: 'Link-in-Bio Builder for Musicians', description: 'Streaming links, tour dates, and merch', slug: 'link-in-bio-builder-for-musicians' },
    { name: 'AI Link-in-Bio Generator', description: 'Describe your brand, get a bio page', slug: 'ai-link-in-bio-generator' },
    { name: 'Link-in-Bio Builder for Podcasts', description: 'Episode links and subscribe buttons', slug: 'link-in-bio-builder-for-podcasts' },
    { name: 'Link-in-Bio Generator for Influencers', description: 'Sponsor links, collabs, and affiliate pages', slug: 'link-in-bio-generator-for-influencers' },
    { name: 'No-Code Link-in-Bio Builder', description: 'Custom bio pages without any code', slug: 'no-code-link-in-bio-builder' },
    { name: 'Link-in-Bio Generator for Freelancers', description: 'Portfolio, rates, and booking links', slug: 'link-in-bio-generator-for-freelancers' },
    { name: 'Link-in-Bio Builder for Small Business', description: 'Hours, menus, and contact links in one place', slug: 'link-in-bio-builder-for-small-business' },
  ],
};

// Number of cards visible before "Show all" toggle
export const INITIAL_VISIBLE_COUNT = 6;
