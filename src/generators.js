// Static data for the Generators Hub page - used for SSR and vanilla JS version
export const strings = {
  logoText: 'strikingly AI',
  breadcrumbHome: 'Strikingly',
  breadcrumbCurrent: 'AI Generators',
  heroH1Line1: 'BUILD ANY KIND OF SITE',
  heroH1Line2: 'WITH AI, IN AN INSTANT',
  heroSubheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
  heroPrimaryCTA: 'START BUILDING - IT\'S FREE',
  heroSecondaryCTA: 'BROWSE GENERATORS',
  featuredHeading: 'FEATURED GENERATORS',
  featuredSubheading: 'A few common starting points.',
  browseHeading: 'BROWSE BY CATEGORY',
  categoryWebsites: 'Websites',
  categoryWebsitesDesc: 'AI-built business and personal sites for any goal.',
  categoryLandingPages: 'Landing Pages',
  categoryLandingPagesDesc: 'Single-page sites built to convert visitors fast.',
  categoryPortfolios: 'Portfolios',
  categoryPortfoliosDesc: 'Showcase your work with a clean, focused site.',
  categoryBlogs: 'Blogs',
  categoryBlogsDesc: 'Publish-ready blogs with built-in SEO basics.',
  categoryStores: 'Online Stores',
  categoryStoresDesc: 'Sell products online with payments built in.',
  categoryLinkInBio: 'Link-in-Bio',
  categoryLinkInBioDesc: 'One link, all your places. Made for creators.',
  allGeneratorsHeading: 'ALL GENERATORS',
  allGeneratorsSubheading: 'Sixty-plus generators, organized by what you\'re building.',
  searchPlaceholder: 'Search generators...',
  searchAriaLabel: 'Search generators',
  resultsCount: (count) => `${count} generators match`,
  noResultsText: 'No generators match your search.',
  clearSearch: 'Clear search',
  cantFindIt: 'Can\'t find it?',
  startWithAI: 'Start with our AI builder.',
  showAll: (count) => `Show all ${count} generators`,
  showLess: 'Show less',
  websitesDesc: 'Full sites for businesses, organizations, and personal projects.',
  landingPagesDesc: 'High-converting single-page sites for campaigns and promotions.',
  portfoliosDesc: 'Visual showcases for designers, photographers, and creatives.',
  blogsDesc: 'Content-focused sites for writers, journalists, and thought leaders.',
  storesDesc: 'E-commerce sites for selling products, merchandise, and digital goods.',
  linkInBioDesc: 'Bio links for influencers, creators, and social media stars.',
  howItWorksHeading: 'HOW IT WORKS',
  howItWorksStep1Title: 'PICK A GENERATOR',
  howItWorksStep1Desc: 'Browse by category or search to find one that fits your goal.',
  howItWorksStep2Title: 'DESCRIBE YOUR SITE',
  howItWorksStep2Desc: 'Tell our AI builder about your business in a sentence or two.',
  howItWorksStep3Title: 'GENERATE AND PUBLISH',
  howItWorksStep3Desc: 'Get a fully built site in seconds. Customize anything, then go live.',
  whyStrikinglyHeading: 'WHY STRIKINGLY',
  whyStep1Title: 'LIVE IN SECONDS',
  whyStep1Desc: 'Describe your site, we build it. No setup, no learning curve.',
  whyStep2Title: 'MOBILE BY DEFAULT',
  whyStep2Desc: 'Every generator produces responsive sites that work on any device.',
  whyStep3Title: 'FREE TO START',
  whyStep3Desc: 'Generate, customize, and publish without a credit card.',
  faqHeading: 'FREQUENTLY ASKED QUESTIONS',
  faqQ1: 'What is an AI site generator?',
  faqA1: 'An AI site generator is a tool that uses artificial intelligence to create a website based on your description. Instead of starting from a blank page or choosing from pre-made templates, you tell the AI what kind of site you need, and it builds one for you in seconds. Strikingly\'s generators cover a wide range of site types, from portfolios to online stores.',
  faqQ2: 'How is a generator different from a template?',
  faqA2: 'A template is a pre-designed layout that you fill with your own content. A generator creates a unique site tailored to your specific needs. When you use a generator, our AI considers your industry, goals, and preferences to create something that fits you better than a one-size-fits-all template ever could.',
  faqQ3: 'Are these generators free to use?',
  faqA3: 'Yes! You can generate, preview, and customize your site for free. When you\'re ready to publish and use a custom domain, you can upgrade to one of our paid plans. There\'s no credit card required to get started.',
  faqQ4: 'What kinds of sites can I build?',
  faqA4: 'Strikingly supports a wide variety of site types including business websites, portfolios, blogs, online stores, landing pages, wedding sites, restaurant sites, event pages, and link-in-bio pages. If you don\'t see exactly what you need, our AI builder can create a custom site based on your description.',
  faqQ5: 'Can I customize what the generator produces?',
  faqA5: 'Absolutely. Every element of your generated site is customizable. You can change colors, fonts, images, text, layout, and more. The AI gives you a great starting point, but you have full control to make it your own.',
  faqQ6: 'Do generated sites work on mobile?',
  faqA6: 'Yes, every site created with Strikingly is automatically responsive and looks great on any device—desktop, tablet, or mobile. You don\'t need to do anything extra to make your site mobile-friendly.',
  closingHeading: 'READY TO BUILD?',
  closingSub: 'Pick a generator above, or jump straight into our AI builder.',
  closingCTA: 'START WITH AI BUILDER',
  footerProducts: 'Products',
  footerResources: 'Resources',
  footerCompany: 'Company',
  footerLegal: 'Legal',
  footerCopyright: '© 2026 Strikingly. All rights reserved.',
};

export const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' },
];

export const categoryCards = [
  { name: 'Websites', description: 'AI-built business and personal sites for any goal.', id: 'websites' },
  { name: 'Landing Pages', description: 'Single-page sites built to convert visitors fast.', id: 'landing-pages' },
  { name: 'Portfolios', description: 'Showcase your work with a clean, focused site.', id: 'portfolios' },
  { name: 'Blogs', description: 'Publish-ready blogs with built-in SEO basics.', id: 'blogs' },
  { name: 'Online Stores', description: 'Sell products online with payments built in.', id: 'stores' },
  { name: 'Link-in-Bio', description: 'One link, all your places. Made for creators.', id: 'link-in-bio' },
];

export const generatorsByCategory = {
  websites: {
    title: 'Websites',
    description: 'Full sites for businesses, organizations, and personal projects.',
    generators: [
      { name: 'AI Website Generator', description: 'Describe your business, get a full site in seconds' },
      { name: 'Free Website Builder for Photographers', description: 'Beautiful portfolio sites, no coding required' },
      { name: 'One-Page Website Builder', description: 'Simple sites with a single scroll' },
      { name: 'Wedding Website Generator', description: 'Share your special day with guests' },
      { name: 'Restaurant Website Builder', description: 'Menu, hours, and reservations built in' },
      { name: 'Business Website Generator', description: 'Professional presence for any industry' },
      { name: 'Personal Website Builder', description: 'Your own corner of the web' },
      { name: 'Nonprofit Website Generator', description: 'Share your mission with the world' },
      { name: 'Event Website Builder', description: 'Promote events and sell tickets' },
      { name: 'Community Website Generator', description: 'Build connection around shared interests' },
    ]
  },
  'landing-pages': {
    title: 'Landing Pages',
    description: 'High-converting single-page sites for campaigns and promotions.',
    generators: [
      { name: 'AI Landing Page Maker', description: 'High-converting single-page sites' },
      { name: 'Product Launch Page Generator', description: 'Build buzz for your next release' },
      { name: 'Lead Capture Page Builder', description: 'Collect leads with beautiful forms' },
      { name: 'Coming Soon Page Generator', description: 'Tease your launch with style' },
      { name: 'Webinar Registration Page', description: 'Drive signups for your event' },
      { name: 'Contest Entry Page Builder', description: 'Grow your audience with giveaways' },
      { name: 'App Download Landing Page', description: 'Promote your mobile or web app' },
      { name: 'Ebook Landing Page Generator', description: 'Capture emails for your content' },
    ]
  },
  portfolios: {
    title: 'Portfolios',
    description: 'Visual showcases for designers, photographers, and creatives.',
    generators: [
      { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee' },
      { name: 'Portfolio Generator for Designers', description: 'Showcase your design work beautifully' },
      { name: 'Photography Portfolio Builder', description: 'Let your images do the talking' },
      { name: 'Artist Portfolio Generator', description: 'Present your art to the world' },
      { name: 'Writer Portfolio Builder', description: 'Display your published work' },
      { name: 'Freelancer Portfolio Generator', description: 'Win clients with your skills showcase' },
      { name: 'Architecture Portfolio Builder', description: 'Present projects with visual impact' },
      { name: 'Fashion Portfolio Generator', description: 'Style-forward portfolios for designers' },
      { name: 'Music Portfolio Builder', description: 'Share your sound and performances' },
      { name: 'Video Portfolio Generator', description: 'Reels and showreels, beautifully presented' },
    ]
  },
  blogs: {
    title: 'Blogs',
    description: 'Content-focused sites for writers, journalists, and thought leaders.',
    generators: [
      { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes' },
      { name: 'Personal Blog Builder', description: 'Share your thoughts with the world' },
      { name: 'Travel Blog Generator', description: 'Document your adventures beautifully' },
      { name: 'Food Blog Builder', description: 'Recipes and restaurant reviews, styled' },
      { name: 'Fashion Blog Generator', description: 'Style content with visual flair' },
      { name: 'Tech Blog Builder', description: 'Share insights on technology and innovation' },
      { name: 'Finance Blog Generator', description: 'Money tips and market commentary' },
      { name: 'Health and Wellness Blog', description: 'Wellness content that resonates' },
      { name: 'Parenting Blog Generator', description: 'Stories and advice for parents' },
      { name: 'DIY Blog Builder', description: 'Projects and tutorials for makers' },
    ]
  },
  stores: {
    title: 'Online Stores',
    description: 'E-commerce sites for selling products, merchandise, and digital goods.',
    generators: [
      { name: 'Online Store Builder', description: 'Start selling without writing code' },
      { name: 'Online Store Builder for Restaurants', description: 'Merch and goods for food brands' },
      { name: 'Handmade Goods Store Builder', description: 'Sell crafts and artisan products' },
      { name: 'Digital Products Store', description: 'Sell ebooks, courses, and downloads' },
      { name: 'Fashion Store Builder', description: 'Clothing and accessories, beautifully presented' },
      { name: 'Beauty Products Store', description: 'Skincare and cosmetics e-commerce' },
      { name: 'Pet Products Store Builder', description: 'Supplies for pet lovers' },
      { name: 'Sports Equipment Store', description: 'Athletic gear and apparel' },
      { name: 'Home Decor Store Builder', description: 'Furniture and accessories online' },
      { name: 'Subscription Box Builder', description: 'Recurring revenue, delivered' },
    ]
  },
  'link-in-bio': {
    title: 'Link-in-Bio',
    description: 'Bio links for influencers, creators, and social media stars.',
    generators: [
      { name: 'Link-in-Bio Generator', description: 'One link for all your channels' },
      { name: 'Instagram Link-in-Bio Builder', description: 'Optimized for social traffic' },
      { name: 'TikTok Bio Link Generator', description: 'All your content in one place' },
      { name: 'YouTuber Link-in-Bio Builder', description: 'Connect fans to all your content' },
      { name: 'Podcast Link-in-Bio Generator', description: 'Drive listeners to all episodes' },
      { name: 'Creator Link-in-Bio Builder', description: 'Monetize your audience access' },
      { name: 'Musician Link-in-Bio Generator', description: 'Music, merch, and shows in one link' },
      { name: 'Influencer Bio Link Builder', description: 'Curate your digital presence' },
      { name: 'Author Link-in-Bio Generator', description: 'Books, socials, and newsletter' },
      { name: 'Photographer Bio Link Builder', description: 'Portfolio and booking in one place' },
    ]
  }
};

export const faqData = [
  { question: 'What is an AI site generator?', answer: 'An AI site generator is a tool that uses artificial intelligence to create a website based on your description. Instead of starting from a blank page or choosing from pre-made templates, you tell the AI what kind of site you need, and it builds one for you in seconds. Strikingly\'s generators cover a wide range of site types, from portfolios to online stores.' },
  { question: 'How is a generator different from a template?', answer: 'A template is a pre-designed layout that you fill with your own content. A generator creates a unique site tailored to your specific needs. When you use a generator, our AI considers your industry, goals, and preferences to create something that fits you better than a one-size-fits-all template ever could.' },
  { question: 'Are these generators free to use?', answer: 'Yes! You can generate, preview, and customize your site for free. When you\'re ready to publish and use a custom domain, you can upgrade to one of our paid plans. There\'s no credit card required to get started.' },
  { question: 'What kinds of sites can I build?', answer: 'Strikingly supports a wide variety of site types including business websites, portfolios, blogs, online stores, landing pages, wedding sites, restaurant sites, event pages, and link-in-bio pages. If you don\'t see exactly what you need, our AI builder can create a custom site based on your description.' },
  { question: 'Can I customize what the generator produces?', answer: 'Absolutely. Every element of your generated site is customizable. You can change colors, fonts, images, text, layout, and more. The AI gives you a great starting point, but you have full control to make it your own.' },
  { question: 'Do generated sites work on mobile?', answer: 'Yes, every site created with Strikingly is automatically responsive and looks great on any device—desktop, tablet, or mobile. You don\'t need to do anything extra to make your site mobile-friendly.' },
];

export const howItWorksSteps = [
  { title: 'PICK A GENERATOR', description: 'Browse by category or search to find one that fits your goal.' },
  { title: 'DESCRIBE YOUR SITE', description: 'Tell our AI builder about your business in a sentence or two.' },
  { title: 'GENERATE AND PUBLISH', description: 'Get a fully built site in seconds. Customize anything, then go live.' },
];

export const whyItems = [
  { title: 'LIVE IN SECONDS', description: 'Describe your site, we build it. No setup, no learning curve.' },
  { title: 'MOBILE BY DEFAULT', description: 'Every generator produces responsive sites that work on any device.' },
  { title: 'FREE TO START', description: 'Generate, customize, and publish without a credit card.' },
];

export const footerLinks = {
  products: [
    { label: 'Templates', href: '/templates' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Features', href: '/features' },
    { label: 'Integrations', href: '/integrations' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Help Center', href: '/support' },
    { label: 'Community', href: '/community' },
    { label: 'Webinars', href: '/webinars' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Terms', href: '/terms' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Cookies', href: '/cookies' },
  ],
};

export const toSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');