// Internationalization strings - easy to add new languages
export const strings = {
  en: {
    // Meta
    siteName: 'Strikingly',
    
    // Breadcrumb
    home: 'Strikingly',
    generators: 'AI Generators',
    
    // Hero
    heroTitleLine1: 'BUILD ANY KIND OF SITE',
    heroTitleLine2: 'WITH AI, IN AN INSTANT',
    heroSubtitle: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    ctaPrimary: "START BUILDING - IT'S FREE",
    ctaSecondary: 'BROWSE GENERATORS',
    
    // Featured
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',
    
    // Browse by Category
    browseHeading: 'BROWSE BY CATEGORY',
    categories: {
      websites: {
        name: 'WEBSITES',
        description: 'AI-built business and personal sites for any goal.',
      },
      landingPages: {
        name: 'LANDING PAGES',
        description: 'Single-page sites built to convert visitors fast.',
      },
      portfolios: {
        name: 'PORTFOLIOS',
        description: 'Showcase your work with a clean, focused site.',
      },
      blogs: {
        name: 'BLOGS',
        description: 'Publish-ready blogs with built-in SEO basics.',
      },
      stores: {
        name: 'ONLINE STORES',
        description: 'Sell products online with payments built in.',
      },
      linkInBio: {
        name: 'LINK-IN-BIO',
        description: 'One link, all your places. Made for creators.',
      },
    },
    
    // All Generators
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    showAll: 'Show all',
    hideExtra: 'Show less',
    noResults: 'No generators match your search.',
    clearSearch: 'Clear search',
    cantFind: "Can't find it?",
    cantFindLink: 'Start with our AI builder.',
    resultsCount: (count) => `${count} generators match`,
    
    // How It Works
    howItWorksHeading: 'HOW IT WORKS',
    howItWorks: {
      step1: {
        title: 'PICK A GENERATOR',
        description: 'Browse by category or search to find one that fits your goal.',
      },
      step2: {
        title: 'DESCRIBE YOUR SITE',
        description: 'Tell our AI builder about your business in a sentence or two.',
      },
      step3: {
        title: 'GENERATE AND PUBLISH',
        description: 'Get a fully built site in seconds. Customize anything, then go live.',
      },
    },
    
    // Why Strikingly
    whyStrikinglyHeading: 'WHY STRIKINGLY',
    whyStrikingly: {
      live: {
        title: 'LIVE IN SECONDS',
        description: 'Describe your site, we build it. No setup, no learning curve.',
      },
      mobile: {
        title: 'MOBILE BY DEFAULT',
        description: 'Every generator produces responsive sites that work on any device.',
      },
      free: {
        title: 'FREE TO START',
        description: 'Generate, customize, and publish without a credit card.',
      },
    },
    
    // FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faq: {
      q1: 'What is an AI site generator?',
      a1: 'An AI site generator is a tool that uses artificial intelligence to create a website based on your description. Instead of choosing templates and building from scratch, you tell the AI what kind of site you need, and it generates a complete, functional website in seconds.',
      q2: 'How is a generator different from a template?',
      a2: 'A template is a pre-designed layout you customize yourself. A generator uses AI to create a site tailored to your specific business or goal. Generators ask you questions about what you need and produce a starting point that is more personalized than a generic template.',
      q3: 'Are these generators free to use?',
      a3: 'Yes, you can generate and preview your site for free. When you\'re ready to publish with your own domain, you can choose from our affordable paid plans. No credit card is required to get started.',
      q4: 'What kinds of sites can I build?',
      a4: 'You can build almost any type of website: business sites, portfolios, blogs, online stores, wedding sites, restaurant sites, event pages, link-in-bio pages, and more. Each generator is optimized for its specific purpose.',
      q5: 'Can I customize what the generator produces?',
      a5: 'Absolutely. The generator creates a starting point based on your description, but everything on your site is fully editable. You can change colors, fonts, images, text, layout, and more using our intuitive drag-and-drop editor.',
      q6: 'Do generated sites work on mobile?',
      a6: 'Yes. Every site generated through Strikingly is automatically responsive and looks great on phones, tablets, and desktops. Mobile optimization is built into every template and generated site.',
    },
    
    // Closing CTA
    closingHeading: 'READY TO BUILD?',
    closingSubtitle: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    
    // Footer
    footerColumns: {
      product: 'Product',
      company: 'Company',
      resources: 'Resources',
      legal: 'Legal',
    },
    footerProductLinks: ['Features', 'Templates', 'Pricing', 'Integrations'],
    footerCompanyLinks: ['About', 'Blog', 'Careers', 'Press'],
    footerResourcesLinks: ['Help Center', 'Community', 'Partners', 'API'],
    footerLegalLinks: ['Terms', 'Privacy', 'Cookies'],
    copyright: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`,
  },
};

// Generator data
export const generatorsData = {
  featured: [
    { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
    { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
    { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
    { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
    { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' },
  ],
  categories: {
    websites: {
      description: 'AI-built business and personal sites for any goal.',
      generators: [
        { name: 'AI Website Generator', description: 'Describe your business, get a full site', slug: 'ai-website-generator' },
        { name: 'Free Website Builder', description: 'No credit card required to start', slug: 'free-website-builder' },
        { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
        { name: 'Business Website Builder', description: 'Professional sites for any industry', slug: 'business-website-builder' },
        { name: 'Personal Website Generator', description: 'Your online presence in minutes', slug: 'personal-website-generator' },
        { name: 'Wedding Website Generator', description: 'Share your day with guests', slug: 'wedding-website-generator' },
        { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
        { name: 'Freelancer Website Builder', description: 'Showcase your services online', slug: 'freelancer-website-builder' },
        { name: 'No-Code Website Builder', description: 'Build without writing a single line', slug: 'no-code-website-builder' },
        { name: 'Beautiful Website Maker', description: 'Stunning sites, no design skills', slug: 'beautiful-website-maker' },
      ],
    },
    landingPages: {
      description: 'Single-page sites built to convert visitors fast.',
      generators: [
        { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
        { name: 'Landing Page Builder', description: 'High-converting single pages', slug: 'landing-page-builder' },
        { name: 'Product Launch Page Generator', description: 'Announce your product in style', slug: 'product-launch-page-generator' },
        { name: 'Event Landing Page Builder', description: 'Promote events and drive signups', slug: 'event-landing-page-builder' },
        { name: 'Lead Capture Page Generator', description: 'Collect leads without a website', slug: 'lead-capture-page-generator' },
        { name: 'Coming Soon Page Builder', description: 'Build buzz before you launch', slug: 'coming-soon-page-builder' },
        { name: 'Sales Page Generator', description: 'Persuasive pages that sell', slug: 'sales-page-generator' },
        { name: 'Webinar Landing Page Builder', description: 'Fill your webinars with signups', slug: 'webinar-landing-page-builder' },
        { name: 'App Download Landing Page', description: 'Promote your mobile app', slug: 'app-download-landing-page' },
        { name: 'Book Landing Page Generator', description: 'Landing page for your book or ebook', slug: 'book-landing-page-generator' },
      ],
    },
    portfolios: {
      description: 'Showcase your work with a clean, focused site.',
      generators: [
        { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
        { name: 'Portfolio Builder for Designers', description: 'Showcase your design work', slug: 'portfolio-builder-for-designers' },
        { name: 'Photographer Portfolio Generator', description: 'Beautiful photo galleries built fast', slug: 'photographer-portfolio-generator' },
        { name: 'Artist Portfolio Builder', description: 'Display your art online', slug: 'artist-portfolio-builder' },
        { name: 'Writer Portfolio Generator', description: 'Put your writing online', slug: 'writer-portfolio-generator' },
        { name: 'Creative Portfolio Maker', description: 'All formats, one beautiful site', slug: 'creative-portfolio-maker' },
        { name: 'Musician Portfolio Builder', description: 'Share your music and tours', slug: 'musician-portfolio-builder' },
        { name: 'Architecture Portfolio Generator', description: 'Present your projects beautifully', slug: 'architecture-portfolio-generator' },
        { name: 'Fashion Portfolio Builder', description: 'Style your work online', slug: 'fashion-portfolio-builder' },
        { name: 'Video Portfolio Generator', description: 'Showreels and video projects', slug: 'video-portfolio-generator' },
      ],
    },
    blogs: {
      description: 'Publish-ready blogs with built-in SEO basics.',
      generators: [
        { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
        { name: 'AI Blog Builder', description: 'Start writing with AI assistance', slug: 'ai-blog-builder' },
        { name: 'Personal Blog Generator', description: 'Share your thoughts online', slug: 'personal-blog-generator' },
        { name: 'Travel Blog Builder', description: 'Document your adventures', slug: 'travel-blog-builder' },
        { name: 'Food Blog Generator', description: 'Share recipes and food stories', slug: 'food-blog-generator' },
        { name: 'Fashion Blog Builder', description: 'Style tips and trends', slug: 'fashion-blog-builder' },
        { name: 'Tech Blog Generator', description: 'Write about technology', slug: 'tech-blog-generator' },
        { name: 'Business Blog Builder', description: 'Content marketing made easy', slug: 'business-blog-builder' },
        { name: 'News Blog Generator', description: 'Start your publication', slug: 'news-blog-generator' },
        { name: 'DIY Blog Builder', description: 'Crafts, projects, how-tos', slug: 'diy-blog-builder' },
      ],
    },
    stores: {
      description: 'Sell products online with payments built in.',
      generators: [
        { name: 'Online Store Builder', description: 'Start selling without writing code', slug: 'online-store-builder' },
        { name: 'Free E-commerce Builder', description: 'No listing fees to start', slug: 'free-ecommerce-builder' },
        { name: 'Dropshipping Store Generator', description: 'Start dropshipping today', slug: 'dropshipping-store-generator' },
        { name: 'Print-on-Demand Store Builder', description: 'Sell custom printed products', slug: 'print-on-demand-store-builder' },
        { name: 'Fashion Store Builder', description: 'Sell clothing and accessories', slug: 'fashion-store-builder' },
        { name: 'Art Store Generator', description: 'Sell prints and originals', slug: 'art-store-generator' },
        { name: 'Food Business Store Builder', description: 'Sell your food products', slug: 'food-business-store-builder' },
        { name: 'Subscription Box Generator', description: 'Create a subscription service', slug: 'subscription-box-generator' },
        { name: 'Digital Products Store Builder', description: 'Sell ebooks, courses, and more', slug: 'digital-products-store-builder' },
        { name: 'Handmade Goods Store Generator', description: 'For artisans and crafters', slug: 'handmade-goods-store-generator' },
      ],
    },
    linkInBio: {
      description: 'One link, all your places. Made for creators.',
      generators: [
        { name: 'Link-in-Bio Generator', description: 'One link for all your channels', slug: 'link-in-bio-generator' },
        { name: 'Free Link-in-Bio Builder', description: 'No ads, no watermarks', slug: 'free-link-in-bio-builder' },
        { name: 'Social Media Link Generator', description: 'Connect all your profiles', slug: 'social-media-link-generator' },
        { name: 'Creator Link-in-Bio Builder', description: 'For influencers and creators', slug: 'creator-link-in-bio-builder' },
        { name: 'Musician Link-in-Bio Generator', description: 'Music, tour dates, merch links', slug: 'musician-link-in-bio-generator' },
        { name: 'Artist Link-in-Bio Builder', description: 'Share your work everywhere', slug: 'artist-link-in-bio-builder' },
        { name: 'YouTuber Link-in-Bio Generator', description: 'Link all your videos and socials', slug: 'youtuber-link-in-bio-generator' },
        { name: 'Podcaster Link-in-Bio Builder', description: 'Link episodes and socials', slug: 'podcaster-link-in-bio-builder' },
        { name: 'Fitness Influencer Link-in-Bio', description: 'Connect with your community', slug: 'fitness-influencer-link-in-bio' },
        { name: 'Travel Influencer Link-in-Bio', description: 'Share your travel stories', slug: 'travel-influencer-link-in-bio' },
      ],
    },
  },
};

export const categorySlugs = {
  websites: 'websites',
  landingPages: 'landing-pages',
  portfolios: 'portfolios',
  blogs: 'blogs',
  stores: 'stores',
  linkInBio: 'link-in-bio',
};