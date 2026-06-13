// All user-visible strings — add strings.es, strings.ja for i18n
export const strings = {
  en: {
    topBar: { logo: 'strikingly AI' },
    breadcrumb: { home: 'Strikingly', current: 'AI Generators' },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      sub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      primaryCTA: 'START BUILDING — IT\'S FREE',
      secondaryCTA: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      sub: 'A few common starting points.',
    },
    browse: {
      heading: 'BROWSE BY CATEGORY',
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      sub: 'Sixty-plus generators, organized by what you\'re building.',
      searchPlaceholder: 'Search generators...',
      searchLabel: 'Search generators',
      resultCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      noResultsCTA: 'Can\'t find it? Start with our AI builder.',
      showAll: (n) => `SHOW ALL ${n} GENERATORS`,
      showLess: 'SHOW LESS',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        { num: '1', title: 'PICK A GENERATOR', body: 'Browse by category or search to find one that fits your goal.' },
        { num: '2', title: 'DESCRIBE YOUR SITE', body: 'Tell our AI builder about your business in a sentence or two.' },
        { num: '3', title: 'GENERATE AND PUBLISH', body: 'Get a fully built site in seconds. Customize anything, then go live.' },
      ],
    },
    why: {
      heading: 'WHY STRIKINGLY',
      items: [
        { title: 'LIVE IN SECONDS', body: 'Describe your site, we build it. No setup, no learning curve.' },
        { title: 'MOBILE BY DEFAULT', body: 'Every generator produces responsive sites that work on any device.' },
        { title: 'FREE TO START', body: 'Generate, customize, and publish without a credit card.' },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          q: 'What is an AI site generator?',
          a: 'An AI site generator is a tool that builds a complete website for you based on a short description of your business or goal. Instead of dragging and dropping elements or writing code, you describe what you need and the AI assembles a ready-to-publish site in seconds.\n\nStrikingly\'s generators combine AI content creation with professionally designed layouts, so the result looks polished from the first moment — not like a rough draft you have to fix.',
        },
        {
          q: 'How is a generator different from a template?',
          a: 'A template is a blank design you fill in yourself. A generator is a complete workflow: it picks the right layout, writes placeholder copy tailored to your industry, and structures the site around your specific goal — all automatically.\n\nYou still have full control to edit every word and image after generation, but you start from a site that already makes sense for your use case rather than an empty canvas.',
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes. You can generate, preview, and customize any site on Strikingly without a credit card. Publishing to a Strikingly subdomain is also free. Paid plans unlock custom domains, additional storage, and advanced features like e-commerce and analytics.',
        },
        {
          q: 'What kinds of sites can I build?',
          a: 'The generators on this page cover the most common site types: business websites, portfolios, landing pages, blogs, online stores, and link-in-bio pages. Within each category there are generators targeted to specific industries and goals — from restaurant menus to photography portfolios to product launch pages.\n\nIf you don\'t see a generator that matches your exact need, the AI Site Builder can handle any brief you give it.',
        },
        {
          q: 'Can I customize what the generator produces?',
          a: 'Absolutely. Every generated site opens in Strikingly\'s visual editor, where you can change text, swap images, adjust colors, reorder sections, and add or remove blocks. The generator gives you a strong starting point; you shape it into exactly what you need.\n\nYou can also connect a custom domain, set up a contact form, add an online store, and configure SEO settings — all without writing code.',
        },
        {
          q: 'Do generated sites work on mobile?',
          a: 'Yes. Every site Strikingly generates is fully responsive by default. The layout adapts automatically to phones, tablets, and desktops, so you don\'t need to design a separate mobile version. You can preview the mobile layout at any time inside the editor before you publish.',
        },
      ],
    },
    closing: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      logo: 'strikingly AI',
      copyright: `© ${new Date().getFullYear()} Strikingly, Inc. All rights reserved.`,
      cols: [
        {
          heading: 'Product',
          links: [
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'AI Site Builder', href: '/s/ai_site_builder' },
          ],
        },
        {
          heading: 'Company',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
          ],
        },
        {
          heading: 'Support',
          links: [
            { label: 'Help Center', href: '/support' },
          ],
        },
        {
          heading: 'Legal',
          links: [
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Privacy Policy', href: '/privacy' },
          ],
        },
      ],
    },
  },
};

// ── Featured generators (9 tiles, mixed categories) ──────────
export const FEATURED_GENERATORS = [
  { name: 'AI Website Generator',        description: 'Describe your business, get a full site',    category: 'Website',      slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator',    description: 'For creatives, in minutes, no fee',           category: 'Portfolio',    slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker',       description: 'One-page sites built to convert',             category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder',        description: 'Start selling without writing code',           category: 'Store',        slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator',       description: 'One link for all your channels',              category: 'Link-in-Bio',  slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder',    description: 'Simple sites, single scroll',                 category: 'Website',      slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator',   description: 'Share your day with guests',                  category: 'Website',      slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder',  description: 'Menu, hours, reservations, done',             category: 'Website',      slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners',description: 'Publish-ready in minutes',                    category: 'Blog',         slug: 'blog-generator-for-beginners' },
];

// ── Browse-by-category cards (6 jump anchors) ────────────────
export const CATEGORY_CARDS = [
  { name: 'Websites',      slug: 'websites',      description: 'AI-built business and personal sites for any goal.' },
  { name: 'Landing Pages', slug: 'landing-pages', description: 'Single-page sites built to convert visitors fast.' },
  { name: 'Portfolios',    slug: 'portfolios',    description: 'Showcase your work with a clean, focused site.' },
  { name: 'Blogs',         slug: 'blogs',         description: 'Publish-ready blogs with built-in SEO basics.' },
  { name: 'Online Stores', slug: 'stores',        description: 'Sell products online with payments built in.' },
  { name: 'Link-in-Bio',   slug: 'link-in-bio',   description: 'One link, all your places. Made for creators.' },
];

// ── All generators directory (6 subsections) ─────────────────
export const ALL_GENERATORS = [
  {
    id: 'websites',
    heading: 'Websites',
    description: 'AI-built sites for every business, goal, and industry.',
    generators: [
      { name: 'AI Website Generator',                    description: 'Describe your business, get a full site in seconds',              slug: 'ai-website-generator' },
      { name: 'Free Website Builder for Photographers',  description: 'Showcase your work with a professional photography site',         slug: 'free-website-builder-for-photographers' },
      { name: 'One-Page Wedding Website Builder',        description: 'Share your day with guests in minutes',                           slug: 'one-page-wedding-website-builder' },
      { name: 'Restaurant Website Builder',              description: 'Menu, hours, reservations, and more in one place',                slug: 'restaurant-website-builder' },
      { name: 'Small Business Website Generator',        description: 'Get online fast with a site built for your business',             slug: 'small-business-website-generator' },
      { name: 'Yoga Instructor Website Builder',         description: 'Book classes and share your schedule online',                     slug: 'yoga-instructor-website-builder' },
      { name: 'Real Estate Agent Website Generator',     description: 'Listings, bio, and contact in one professional site',             slug: 'real-estate-agent-website-generator' },
      { name: 'Nonprofit Website Builder',               description: 'Tell your story and accept donations online',                     slug: 'nonprofit-website-builder' },
      { name: 'Freelancer Website Generator',            description: 'Win clients with a site that shows your work',                    slug: 'freelancer-website-generator' },
      { name: 'Event Website Builder',                   description: 'Promote your event and sell tickets online',                      slug: 'event-website-builder' },
    ],
  },
  {
    id: 'landing-pages',
    heading: 'Landing Pages',
    description: 'High-converting single pages for every campaign and goal.',
    generators: [
      { name: 'AI Landing Page Maker',                   description: 'One-page sites built to convert visitors fast',                   slug: 'ai-landing-page-maker' },
      { name: 'Product Launch Landing Page Generator',   description: 'Announce your product with a high-converting page',               slug: 'product-launch-landing-page-generator' },
      { name: 'Lead Generation Landing Page Builder',    description: 'Capture emails and grow your list with ease',                     slug: 'lead-generation-landing-page-builder' },
      { name: 'App Download Landing Page Generator',     description: 'Drive installs with a focused mobile-first page',                 slug: 'app-download-landing-page-generator' },
      { name: 'Webinar Registration Page Builder',       description: 'Fill your webinar with a dedicated sign-up page',                 slug: 'webinar-registration-page-builder' },
      { name: 'Coming Soon Page Generator',              description: 'Build anticipation before you launch',                            slug: 'coming-soon-page-generator' },
      { name: 'Sales Page Builder',                      description: 'Turn visitors into buyers with a persuasive page',                slug: 'sales-page-builder' },
      { name: 'Free Landing Page Generator',             description: 'No-code pages that convert, at no cost',                         slug: 'free-landing-page-generator' },
    ],
  },
  {
    id: 'portfolios',
    heading: 'Portfolios',
    description: 'Clean, focused portfolio sites for every creative discipline.',
    generators: [
      { name: 'Free Portfolio Generator',                description: 'For creatives, in minutes, no fee required',                     slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers',       description: 'Show your visual work in a clean, modern gallery',                slug: 'portfolio-generator-for-designers' },
      { name: 'Photography Portfolio Builder',           description: 'Display your shots in a stunning online gallery',                 slug: 'photography-portfolio-builder' },
      { name: 'Artist Portfolio Website Generator',      description: 'Share your art with the world in a beautiful site',              slug: 'artist-portfolio-website-generator' },
      { name: 'UX Designer Portfolio Builder',           description: 'Case studies and process work, beautifully laid out',            slug: 'ux-designer-portfolio-builder' },
      { name: 'Illustrator Portfolio Generator',         description: 'A visual-first site for your illustration work',                 slug: 'illustrator-portfolio-generator' },
      { name: 'Architect Portfolio Website Builder',     description: 'Projects and plans in a professional layout',                    slug: 'architect-portfolio-website-builder' },
      { name: 'Video Portfolio Generator',               description: 'Embed your reels and showcase your video work',                  slug: 'video-portfolio-generator' },
      { name: 'Model Portfolio Website Builder',         description: 'A clean, image-forward site for your modeling work',             slug: 'model-portfolio-website-builder' },
    ],
  },
  {
    id: 'blogs',
    heading: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO for every niche.',
    generators: [
      { name: 'Blog Generator for Beginners',            description: 'Publish-ready in minutes, no experience needed',                 slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Builder',                         description: 'Generate your first post and site at the same time',             slug: 'ai-blog-builder' },
      { name: 'Personal Blog Generator',                 description: 'Share your thoughts with a clean, readable site',                slug: 'personal-blog-generator' },
      { name: 'Travel Blog Builder',                     description: 'Document your adventures with a beautiful travel site',          slug: 'travel-blog-builder' },
      { name: 'Food Blog Generator',                     description: 'Recipes, photos, and stories in one place',                     slug: 'food-blog-generator' },
      { name: 'Tech Blog Builder',                       description: 'Share tutorials and opinions with a developer-friendly site',    slug: 'tech-blog-builder' },
      { name: 'Lifestyle Blog Generator',                description: 'A versatile blog for fashion, wellness, and more',              slug: 'lifestyle-blog-generator' },
      { name: 'Business Blog Builder',                   description: 'Establish thought leadership with a professional blog',          slug: 'business-blog-builder' },
      { name: 'Niche Blog Generator',                    description: 'Build authority in any topic with a focused blog',              slug: 'niche-blog-generator' },
    ],
  },
  {
    id: 'stores',
    heading: 'Online Stores',
    description: 'Sell anything online with payments and inventory built in.',
    generators: [
      { name: 'Online Store Builder',                    description: 'Start selling without writing a line of code',                   slug: 'online-store-builder' },
      { name: 'Online Store Builder for Restaurants',    description: 'Sell meals, gift cards, and catering online',                    slug: 'online-store-builder-for-restaurants' },
      { name: 'Handmade Goods Store Generator',          description: 'Sell your crafts with a beautiful, branded shop',               slug: 'handmade-goods-store-generator' },
      { name: 'Digital Products Store Builder',          description: 'Sell ebooks, courses, and downloads instantly',                  slug: 'digital-products-store-builder' },
      { name: 'Clothing Store Website Generator',        description: 'Launch your fashion brand online in minutes',                    slug: 'clothing-store-website-generator' },
      { name: 'Print-on-Demand Store Builder',           description: 'Sell custom merch without holding inventory',                    slug: 'print-on-demand-store-builder' },
      { name: 'Local Business Online Store',             description: 'Take your brick-and-mortar shop online',                        slug: 'local-business-online-store' },
      { name: 'Subscription Box Store Generator',        description: 'Sell recurring boxes with built-in billing',                    slug: 'subscription-box-store-generator' },
      { name: 'Artist Shop Builder',                     description: 'Sell prints and originals directly to your fans',               slug: 'artist-shop-builder' },
    ],
  },
  {
    id: 'link-in-bio',
    heading: 'Link-in-Bio',
    description: 'One link, all your places. Built for creators and brands.',
    generators: [
      { name: 'Link-in-Bio Generator',                   description: 'One link for all your channels and content',                    slug: 'link-in-bio-generator' },
      { name: 'Instagram Link-in-Bio Builder',           description: 'Turn your Instagram bio link into a mini-site',                 slug: 'instagram-link-in-bio-builder' },
      { name: 'Creator Link Page Generator',             description: 'One page for all your content, links, and offers',              slug: 'creator-link-page-generator' },
      { name: 'Musician Link-in-Bio Builder',            description: 'Share your music, merch, and tour dates in one link',           slug: 'musician-link-in-bio-builder' },
      { name: 'Influencer Link Page Generator',          description: 'Connect your audience to everything you create',                slug: 'influencer-link-page-generator' },
      { name: 'Podcast Link-in-Bio Builder',             description: 'One link to your episodes, socials, and merch',                 slug: 'podcast-link-in-bio-builder' },
      { name: 'TikTok Link-in-Bio Generator',            description: 'Drive traffic from TikTok to all your destinations',            slug: 'tiktok-link-in-bio-generator' },
      { name: 'YouTube Creator Link Page',               description: 'One hub for your channel, merch, and community',               slug: 'youtube-creator-link-page' },
    ],
  },
];
