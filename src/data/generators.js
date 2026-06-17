// i18n strings - add strings.es, strings.ja etc. here for future locales
export const strings = {
  en: {
    // Top bar
    topBarLogo: 'strikingly AI',

    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',

    // Hero
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSubheadline:
      "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    heroCtaPrimary: "START BUILDING - IT'S FREE",
    heroCtaSecondary: 'BROWSE GENERATORS',

    // Featured
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',

    // Browse by Category
    browseHeading: 'BROWSE BY CATEGORY',
    categories: [
      {
        id: 'websites',
        name: 'WEBSITES',
        description: 'AI-built business and personal sites for any goal.',
      },
      {
        id: 'landing-pages',
        name: 'LANDING PAGES',
        description: 'Single-page sites built to convert visitors fast.',
      },
      {
        id: 'portfolios',
        name: 'PORTFOLIOS',
        description: 'Showcase your work with a clean, focused site.',
      },
      {
        id: 'blogs',
        name: 'BLOGS',
        description: 'Publish-ready blogs with built-in SEO basics.',
      },
      {
        id: 'stores',
        name: 'ONLINE STORES',
        description: 'Sell products online with payments built in.',
      },
      {
        id: 'link-in-bio',
        name: 'LINK-IN-BIO',
        description: 'One link, all your places. Made for creators.',
      },
    ],

    // All Generators
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading:
      'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    searchResultsCount: (count) => `${count} generator${count !== 1 ? 's' : ''} match`,
    noResultsTitle: 'No generators found',
    noResultsText: "Can't find it? Start with our AI builder.",
    noResultsCta: 'Clear search',
    noResultsBuilderLink: 'Try the AI Site Builder',
    showAll: (count) => `Show all ${count} generators`,
    showLess: 'Show less',

    // How It Works
    howItWorksHeading: 'HOW IT WORKS',
    steps: [
      {
        number: 1,
        title: 'PICK A GENERATOR',
        description:
          'Browse by category or search to find one that fits your goal.',
      },
      {
        number: 2,
        title: 'DESCRIBE YOUR SITE',
        description:
          'Tell our AI builder about your business in a sentence or two.',
      },
      {
        number: 3,
        title: 'GENERATE AND PUBLISH',
        description:
          'Get a fully built site in seconds. Customize anything, then go live.',
      },
    ],

    // Why Strikingly
    whyHeading: 'WHY STRIKINGLY',
    whyItems: [
      {
        title: 'LIVE IN SECONDS',
        description:
          'Describe your site, we build it. No setup, no learning curve.',
      },
      {
        title: 'MOBILE BY DEFAULT',
        description:
          'Every generator produces responsive sites that work on any device.',
      },
      {
        title: 'FREE TO START',
        description:
          'Generate, customize, and publish without a credit card.',
      },
    ],

    // FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faqItems: [
      {
        question: 'What is an AI site generator?',
        answer:
          'An AI site generator is a tool that uses artificial intelligence to create a complete website from a short description. Instead of picking a template and manually filling in every section, you tell the AI what your business does, what you want to achieve, and any style preferences. The generator then produces a fully structured site with pages, copy, images, and layout -- all in seconds.\n\nStrikingly\'s generators are built on top of our AI site builder, so every output is a real, publishable website, not just a wireframe or mockup.',
      },
      {
        question: 'How is a generator different from a template?',
        answer:
          'A template is a pre-designed layout that you customize by replacing placeholder text and images. You still do most of the writing, arranging, and decision-making. A generator starts from your description and builds a unique site tailored to your specific business, industry, and goals.\n\nThink of a template as a fill-in-the-blank form, and a generator as a collaborator that does the heavy lifting for you. You can still customize everything the generator produces, but you begin with a site that already reflects your needs.',
      },
      {
        question: 'Are these generators free to use?',
        answer:
          'Yes. You can generate, customize, and publish a site without entering a credit card. Strikingly\'s free plan lets you launch a fully functional site on a Strikingly subdomain. If you want a custom domain, e-commerce features, or advanced analytics, paid plans are available -- but the generator itself and the core builder are free to start.',
      },
      {
        question: 'What kinds of sites can I build?',
        answer:
          'Strikingly offers generators for a wide range of site types: business websites, portfolios, landing pages, blogs, online stores, wedding sites, restaurant sites, link-in-bio pages, and many more. Each generator is tuned to the conventions and best practices of its category, so a portfolio site looks and behaves differently from a store site.\n\nIf you don\'t see a generator that exactly matches your goal, you can still use the general AI Website Generator and describe what you need in your own words.',
      },
      {
        question: 'Can I customize what the generator produces?',
        answer:
          'Absolutely. Every generated site opens in Strikingly\'s visual editor, where you can change text, swap images, rearrange sections, adjust colors and fonts, add new pages, and integrate third-party tools. The generator gives you a strong starting point; you have full control over every detail from there.',
      },
      {
        question: 'Do generated sites work on mobile?',
        answer:
          'Yes. Every site produced by a Strikingly generator is fully responsive by default. The AI builder creates layouts that adapt to phones, tablets, and desktops automatically. You can also fine-tune the mobile view in the editor if you want pixel-perfect control over how your site looks on smaller screens.',
      },
    ],

    // Closing CTA
    closingHeading: 'READY TO BUILD?',
    closingSub:
      "Pick a generator above, or jump straight into our AI builder.",
    closingCta: 'START WITH AI BUILDER',

    // Footer
    footerCopyright: (year) => `© ${year} Strikingly. All rights reserved.`,
  },
}

// Generator data for the directory
export const generators = [
  // --- Websites ---
  {
    id: 'ai-website-generator',
    name: 'AI Website Generator',
    description: 'Describe your business, get a full site.',
    category: 'websites',
    slug: 'ai-website-generator',
  },
  {
    id: 'free-website-builder-photographers',
    name: 'Free Website Builder for Photographers',
    description: 'Portfolio-first sites for visual artists.',
    category: 'websites',
    slug: 'free-website-builder-photographers',
  },
  {
    id: 'one-page-wedding-website-builder',
    name: 'One-Page Wedding Website Builder',
    description: 'Share your day with guests in one scroll.',
    category: 'websites',
    slug: 'one-page-wedding-website-builder',
  },
  {
    id: 'restaurant-website-builder',
    name: 'Restaurant Website Builder',
    description: 'Menu, hours, reservations, done.',
    category: 'websites',
    slug: 'restaurant-website-builder',
  },
  {
    id: 'ai-business-website-generator',
    name: 'AI Business Website Generator',
    description: 'Professional sites for startups and SMBs.',
    category: 'websites',
    slug: 'ai-business-website-generator',
  },
  {
    id: 'free-website-builder-yoga-instructors',
    name: 'Free Website Builder for Yoga Instructors',
    description: 'Class schedules, bookings, and wellness blogs.',
    category: 'websites',
    slug: 'free-website-builder-yoga-instructors',
  },
  {
    id: 'no-code-website-builder',
    name: 'No-Code Website Builder',
    description: 'Build a site without writing a single line.',
    category: 'websites',
    slug: 'no-code-website-builder',
  },
  {
    id: 'beautiful-website-generator',
    name: 'Beautiful Website Generator',
    description: 'Design-forward sites that impress visitors.',
    category: 'websites',
    slug: 'beautiful-website-generator',
  },
  {
    id: 'ai-website-generator-for-coaches',
    name: 'AI Website Generator for Coaches',
    description: 'Booking pages, testimonials, and service pages.',
    category: 'websites',
    slug: 'ai-website-generator-for-coaches',
  },
  {
    id: 'free-website-builder-for-musicians',
    name: 'Free Website Builder for Musicians',
    description: 'Tour dates, music players, and merch links.',
    category: 'websites',
    slug: 'free-website-builder-for-musicians',
  },
  {
    id: 'ai-website-generator-for-real-estate',
    name: 'AI Website Generator for Real Estate',
    description: 'Listings, agent profiles, and lead capture.',
    category: 'websites',
    slug: 'ai-website-generator-for-real-estate',
  },
  {
    id: 'one-page-website-builder',
    name: 'One-Page Website Builder',
    description: 'Simple sites, single scroll.',
    category: 'websites',
    slug: 'one-page-website-builder',
  },

  // --- Landing Pages ---
  {
    id: 'ai-landing-page-maker',
    name: 'AI Landing Page Maker',
    description: 'One-page sites built to convert.',
    category: 'landing-pages',
    slug: 'ai-landing-page-maker',
  },
  {
    id: 'free-landing-page-generator',
    name: 'Free Landing Page Generator',
    description: 'Launch a campaign page in minutes.',
    category: 'landing-pages',
    slug: 'free-landing-page-generator',
  },
  {
    id: 'product-launch-landing-page',
    name: 'Product Launch Landing Page',
    description: 'Build hype with a countdown and CTA.',
    category: 'landing-pages',
    slug: 'product-launch-landing-page',
  },
  {
    id: 'webinar-landing-page-generator',
    name: 'Webinar Landing Page Generator',
    description: 'Registration forms and event details.',
    category: 'landing-pages',
    slug: 'webinar-landing-page-generator',
  },
  {
    id: 'ai-landing-page-for-saas',
    name: 'AI Landing Page for SaaS',
    description: 'Feature highlights, pricing, and sign-up.',
    category: 'landing-pages',
    slug: 'ai-landing-page-for-saas',
  },
  {
    id: 'no-code-landing-page-builder',
    name: 'No-Code Landing Page Builder',
    description: 'Drag, drop, and publish a landing page.',
    category: 'landing-pages',
    slug: 'no-code-landing-page-builder',
  },
  {
    id: 'beautiful-landing-page-generator',
    name: 'Beautiful Landing Page Generator',
    description: 'Stunning visuals that drive action.',
    category: 'landing-pages',
    slug: 'beautiful-landing-page-generator',
  },
  {
    id: 'ai-landing-page-for-agencies',
    name: 'AI Landing Page for Agencies',
    description: 'Client-facing pages with case studies.',
    category: 'landing-pages',
    slug: 'ai-landing-page-for-agencies',
  },
  {
    id: 'free-landing-page-for-apps',
    name: 'Free Landing Page for Apps',
    description: 'App store links, screenshots, and features.',
    category: 'landing-pages',
    slug: 'free-landing-page-for-apps',
  },
  {
    id: 'one-page-landing-page-builder',
    name: 'One-Page Landing Page Builder',
    description: 'Single-focus pages that convert fast.',
    category: 'landing-pages',
    slug: 'one-page-landing-page-builder',
  },

  // --- Portfolios ---
  {
    id: 'free-portfolio-generator',
    name: 'Free Portfolio Generator',
    description: 'For creatives, in minutes, no fee.',
    category: 'portfolios',
    slug: 'free-portfolio-generator',
  },
  {
    id: 'portfolio-generator-for-designers',
    name: 'Portfolio Generator for Designers',
    description: 'Showcase projects with clean grids.',
    category: 'portfolios',
    slug: 'portfolio-generator-for-designers',
  },
  {
    id: 'ai-portfolio-builder',
    name: 'AI Portfolio Builder',
    description: 'Auto-generated layouts from your work.',
    category: 'portfolios',
    slug: 'ai-portfolio-builder',
  },
  {
    id: 'photography-portfolio-generator',
    name: 'Photography Portfolio Generator',
    description: 'Full-screen galleries and lightboxes.',
    category: 'portfolios',
    slug: 'photography-portfolio-generator',
  },
  {
    id: 'portfolio-generator-for-developers',
    name: 'Portfolio Generator for Developers',
    description: 'Code snippets, GitHub links, and projects.',
    category: 'portfolios',
    slug: 'portfolio-generator-for-developers',
  },
  {
    id: 'beautiful-portfolio-generator',
    name: 'Beautiful Portfolio Generator',
    description: 'Minimal, elegant sites for creatives.',
    category: 'portfolios',
    slug: 'beautiful-portfolio-generator',
  },
  {
    id: 'no-code-portfolio-builder',
    name: 'No-Code Portfolio Builder',
    description: 'Build a portfolio without coding.',
    category: 'portfolios',
    slug: 'no-code-portfolio-builder',
  },
  {
    id: 'portfolio-generator-for-architects',
    name: 'Portfolio Generator for Architects',
    description: 'Project case studies and blueprints.',
    category: 'portfolios',
    slug: 'portfolio-generator-for-architects',
  },
  {
    id: 'free-portfolio-for-freelancers',
    name: 'Free Portfolio for Freelancers',
    description: 'Services, rates, and past work in one place.',
    category: 'portfolios',
    slug: 'free-portfolio-for-freelancers',
  },
  {
    id: 'ai-portfolio-for-writers',
    name: 'AI Portfolio for Writers',
    description: 'Published clips, bio, and contact form.',
    category: 'portfolios',
    slug: 'ai-portfolio-for-writers',
  },

  // --- Blogs ---
  {
    id: 'blog-generator-for-beginners',
    name: 'Blog Generator for Beginners',
    description: 'Publish-ready in minutes.',
    category: 'blogs',
    slug: 'blog-generator-for-beginners',
  },
  {
    id: 'ai-blog-generator',
    name: 'AI Blog Generator',
    description: 'Auto-structured posts and categories.',
    category: 'blogs',
    slug: 'ai-blog-generator',
  },
  {
    id: 'free-blog-website-builder',
    name: 'Free Blog Website Builder',
    description: 'Start a blog without spending a dime.',
    category: 'blogs',
    slug: 'free-blog-website-builder',
  },
  {
    id: 'seo-blog-generator',
    name: 'SEO Blog Generator',
    description: 'Built-in meta tags and sitemap.',
    category: 'blogs',
    slug: 'seo-blog-generator',
  },
  {
    id: 'personal-blog-generator',
    name: 'Personal Blog Generator',
    description: 'Your voice, your stories, your site.',
    category: 'blogs',
    slug: 'personal-blog-generator',
  },
  {
    id: 'no-code-blog-builder',
    name: 'No-Code Blog Builder',
    description: 'Write and publish without technical setup.',
    category: 'blogs',
    slug: 'no-code-blog-builder',
  },
  {
    id: 'beautiful-blog-generator',
    name: 'Beautiful Blog Generator',
    description: 'Typography-first blog layouts.',
    category: 'blogs',
    slug: 'beautiful-blog-generator',
  },
  {
    id: 'ai-blog-generator-for-business',
    name: 'AI Blog Generator for Business',
    description: 'Content marketing sites with lead capture.',
    category: 'blogs',
    slug: 'ai-blog-generator-for-business',
  },
  {
    id: 'travel-blog-generator',
    name: 'Travel Blog Generator',
    description: 'Photo-heavy layouts for storytellers.',
    category: 'blogs',
    slug: 'travel-blog-generator',
  },
  {
    id: 'food-blog-generator',
    name: 'Food Blog Generator',
    description: 'Recipe cards, ratings, and meal plans.',
    category: 'blogs',
    slug: 'food-blog-generator',
  },

  // --- Stores ---
  {
    id: 'online-store-builder',
    name: 'Online Store Builder',
    description: 'Start selling without writing code.',
    category: 'stores',
    slug: 'online-store-builder',
  },
  {
    id: 'ai-ecommerce-generator',
    name: 'AI Ecommerce Generator',
    description: 'Product pages, cart, and checkout in seconds.',
    category: 'stores',
    slug: 'ai-ecommerce-generator',
  },
  {
    id: 'free-online-store-builder',
    name: 'Free Online Store Builder',
    description: 'Launch a shop with zero upfront cost.',
    category: 'stores',
    slug: 'free-online-store-builder',
  },
  {
    id: 'online-store-builder-for-restaurants',
    name: 'Online Store Builder for Restaurants',
    description: 'Online ordering and delivery integration.',
    category: 'stores',
    slug: 'online-store-builder-for-restaurants',
  },
  {
    id: 'ai-store-builder-for-fashion',
    name: 'AI Store Builder for Fashion',
    description: 'Lookbooks, size guides, and quick checkout.',
    category: 'stores',
    slug: 'ai-store-builder-for-fashion',
  },
  {
    id: 'no-code-ecommerce-builder',
    name: 'No-Code Ecommerce Builder',
    description: 'Sell online without a developer.',
    category: 'stores',
    slug: 'no-code-ecommerce-builder',
  },
  {
    id: 'beautiful-online-store-generator',
    name: 'Beautiful Online Store Generator',
    description: 'Design-forward shops that sell.',
    category: 'stores',
    slug: 'beautiful-online-store-generator',
  },
  {
    id: 'ai-store-builder-for-handmade',
    name: 'AI Store Builder for Handmade',
    description: 'Artisan shops with story-driven pages.',
    category: 'stores',
    slug: 'ai-store-builder-for-handmade',
  },
  {
    id: 'one-page-store-builder',
    name: 'One-Page Store Builder',
    description: 'Single-product stores that convert.',
    category: 'stores',
    slug: 'one-page-store-builder',
  },
  {
    id: 'ai-store-builder-for-digital-products',
    name: 'AI Store Builder for Digital Products',
    description: 'Downloads, licenses, and instant delivery.',
    category: 'stores',
    slug: 'ai-store-builder-for-digital-products',
  },

  // --- Link-in-Bio ---
  {
    id: 'link-in-bio-generator',
    name: 'Link-in-Bio Generator',
    description: 'One link for all your channels.',
    category: 'link-in-bio',
    slug: 'link-in-bio-generator',
  },
  {
    id: 'free-link-in-bio-builder',
    name: 'Free Link-in-Bio Builder',
    description: 'No monthly fees, no limits.',
    category: 'link-in-bio',
    slug: 'free-link-in-bio-builder',
  },
  {
    id: 'ai-link-in-bio-generator',
    name: 'AI Link-in-Bio Generator',
    description: 'Auto-generated from your social profiles.',
    category: 'link-in-bio',
    slug: 'ai-link-in-bio-generator',
  },
  {
    id: 'link-in-bio-for-creators',
    name: 'Link-in-Bio for Creators',
    description: 'Merch, courses, and content in one place.',
    category: 'link-in-bio',
    slug: 'link-in-bio-for-creators',
  },
  {
    id: 'link-in-bio-for-musicians',
    name: 'Link-in-Bio for Musicians',
    description: 'Streaming links, tour dates, and merch.',
    category: 'link-in-bio',
    slug: 'link-in-bio-for-musicians',
  },
  {
    id: 'beautiful-link-in-bio-generator',
    name: 'Beautiful Link-in-Bio Generator',
    description: 'Custom themes that match your brand.',
    category: 'link-in-bio',
    slug: 'beautiful-link-in-bio-generator',
  },
  {
    id: 'no-code-link-in-bio-builder',
    name: 'No-Code Link-in-Bio Builder',
    description: 'Drag-and-drop your link page.',
    category: 'link-in-bio',
    slug: 'no-code-link-in-bio-builder',
  },
  {
    id: 'link-in-bio-for-podcasters',
    name: 'Link-in-Bio for Podcasters',
    description: 'Episode links, subscribe buttons, and sponsors.',
    category: 'link-in-bio',
    slug: 'link-in-bio-for-podcasters',
  },
  {
    id: 'one-page-link-in-bio-builder',
    name: 'One-Page Link-in-Bio Builder',
    description: 'Minimal, fast-loading link pages.',
    category: 'link-in-bio',
    slug: 'one-page-link-in-bio-builder',
  },
  {
    id: 'ai-link-in-bio-for-influencers',
    name: 'AI Link-in-Bio for Influencers',
    description: 'Brand deals, affiliate links, and content.',
    category: 'link-in-bio',
    slug: 'ai-link-in-bio-for-influencers',
  },
]

// Featured generators (9 tiles for the 3x3 grid)
export const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site.', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee.', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert.', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', description: 'Start selling without writing code.', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels.', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll.', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests.', category: 'Website', slug: 'one-page-wedding-website-builder' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done.', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes.', category: 'Blog', slug: 'blog-generator-for-beginners' },
]
