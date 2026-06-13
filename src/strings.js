export const strings = {
  en: {
    siteTitle: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
    metaDescription: "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.",

    // Section 0 - Top bar
    logoText: 'Strikingly',
    logoSuffix: 'AI',

    // Section 1 - Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',

    // Section 2 - Hero
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSubheadline: 'Browse the right generator for what you\u2019re building, or jump straight into our AI site builder.',
    heroPrimaryCta: 'START BUILDING \u2014 IT\u2019S FREE',
    heroSecondaryCta: 'BROWSE GENERATORS',
    heroPrimaryCtaHref: '/s/ai_site_builder',

    // Section 3 - Featured Generators
    featuredTitle: 'FEATURED GENERATORS',
    featuredSubtitle: 'A few common starting points.',
    featuredGenerators: [
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

    // Section 4 - Browse by Category
    browseByCategoryTitle: 'BROWSE BY CATEGORY',
    categories: [
      { name: 'Websites', slug: 'websites', anchor: '#websites', description: 'AI-built business and personal sites for any goal.' },
      { name: 'Landing Pages', slug: 'landing-pages', anchor: '#landing-pages', description: 'Single-page sites built to convert visitors fast.' },
      { name: 'Portfolios', slug: 'portfolios', anchor: '#portfolios', description: 'Showcase your work with a clean, focused site.' },
      { name: 'Blogs', slug: 'blogs', anchor: '#blogs', description: 'Publish-ready blogs with built-in SEO basics.' },
      { name: 'Online Stores', slug: 'stores', anchor: '#stores', description: 'Sell products online with payments built in.' },
      { name: 'Link-in-Bio', slug: 'link-in-bio', anchor: '#link-in-bio', description: 'One link, all your places. Made for creators.' },
    ],

    // Section 5 - All Generators
    allGeneratorsTitle: 'ALL GENERATORS',
    allGeneratorsSubtitle: 'Sixty-plus generators, organized by what you\u2019re building.',
    searchPlaceholder: 'Search generators...',
    searchAriaLabel: 'Search generators',
    searchResultCount: (count) => `${count} generator${count !== 1 ? 's' : ''} match${count !== 1 ? '' : 'es'}`,
    emptyStateHeading: 'No generators found',
    emptyStateCta: "Can't find it? Start with our AI builder.",
    emptyStateCtaHref: '/s/ai_site_builder',
    clearSearch: 'Clear search',
    showAllGenerators: (count) => `Show all ${count} generators`,
    hideExtraGenerators: 'Show fewer',

    categorySubsections: [
      {
        id: 'websites',
        title: 'Websites',
        description: 'AI-built business and personal sites for any goal.',
        generators: [
          { name: 'AI Website Generator', description: 'Describe your business, get a full site', slug: 'ai-website-generator' },
          { name: 'Free Website Builder', description: 'Build a site at no cost, no catch', slug: 'free-website-builder' },
          { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
          { name: 'Wedding Website Generator', description: 'Share your day with guests', slug: 'wedding-website-generator' },
          { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
          { name: 'No-Code Website Builder', description: 'Launch without writing a line', slug: 'no-code-website-builder' },
          { name: 'AI Website Generator for Photographers', description: 'Showcase your photography portfolio online', slug: 'ai-website-generator-for-photographers' },
          { name: 'Website Builder for Small Business', description: 'Professional sites that grow with you', slug: 'website-builder-for-small-business' },
          { name: 'Free Website Builder for Restaurants', description: 'Menus, reservations, and hours — free', slug: 'free-website-builder-for-restaurants' },
          { name: 'One-Page Wedding Website Builder', description: 'Everything guests need, on one page', slug: 'one-page-wedding-website-builder' },
          { name: 'Website Builder for Yoga Instructors', description: 'Class schedules, booking, and bio', slug: 'website-builder-for-yoga-instructors' },
          { name: 'Beautiful Website Generator', description: 'Design-forward sites without the designer', slug: 'beautiful-website-generator' },
        ],
      },
      {
        id: 'landing-pages',
        title: 'Landing Pages',
        description: 'Single-page sites built to convert visitors fast.',
        generators: [
          { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
          { name: 'Free Landing Page Builder', description: 'High-converting pages, zero cost', slug: 'free-landing-page-builder' },
          { name: 'No-Code Landing Page Generator', description: 'Launch a landing page without code', slug: 'no-code-landing-page-generator' },
          { name: 'AI Landing Page for Startups', description: 'Pitch your product in one scroll', slug: 'ai-landing-page-for-startups' },
          { name: 'Landing Page Generator for Events', description: 'Registration pages that fill seats', slug: 'landing-page-generator-for-events' },
          { name: 'Free Landing Page for Product Launch', description: 'Announce your launch with style', slug: 'free-landing-page-for-product-launch' },
          { name: 'Landing Page Builder for Agencies', description: 'Client-ready pages in minutes', slug: 'landing-page-builder-for-agencies' },
          { name: 'One-Page Landing Page Generator', description: 'Focused, fast, and effective', slug: 'one-page-landing-page-generator' },
          { name: 'AI Landing Page for Nonprofits', description: 'Drive donations with a compelling page', slug: 'ai-landing-page-for-nonprofits' },
          { name: 'Landing Page Generator for SaaS', description: 'Convert trial signups with clarity', slug: 'landing-page-generator-for-saas' },
        ],
      },
      {
        id: 'portfolios',
        title: 'Portfolios',
        description: 'Showcase your work with a clean, focused site.',
        generators: [
          { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
          { name: 'AI Portfolio Builder', description: 'Your work, presented beautifully', slug: 'ai-portfolio-builder' },
          { name: 'Portfolio Generator for Designers', description: 'Show design work that gets hired', slug: 'portfolio-generator-for-designers' },
          { name: 'No-Code Portfolio Builder', description: 'Launch a portfolio without coding', slug: 'no-code-portfolio-builder' },
          { name: 'Portfolio Generator for Photographers', description: 'Galleries that do your work justice', slug: 'portfolio-generator-for-photographers' },
          { name: 'AI Portfolio for Freelancers', description: 'Win clients with a polished presence', slug: 'ai-portfolio-for-freelancers' },
          { name: 'Portfolio Builder for Artists', description: 'A gallery site worthy of your art', slug: 'portfolio-builder-for-artists' },
          { name: 'Free Portfolio for Students', description: 'Show what you\u2019ve learned, for free', slug: 'free-portfolio-for-students' },
          { name: 'Portfolio Generator for Writers', description: 'Clips and bylines, beautifully arranged', slug: 'portfolio-generator-for-writers' },
          { name: 'One-Page Portfolio Builder', description: 'All your best work on one page', slug: 'one-page-portfolio-builder' },
        ],
      },
      {
        id: 'blogs',
        title: 'Blogs',
        description: 'Publish-ready blogs with built-in SEO basics.',
        generators: [
          { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
          { name: 'AI Blog Builder', description: 'Write and publish with AI assist', slug: 'ai-blog-builder' },
          { name: 'Free Blog Generator', description: 'Start blogging without spending a cent', slug: 'free-blog-generator' },
          { name: 'No-Code Blog Builder', description: 'Beautiful blogs, zero coding', slug: 'no-code-blog-builder' },
          { name: 'Blog Generator for Travel Writers', description: 'Share your adventures with the world', slug: 'blog-generator-for-travel-writers' },
          { name: 'AI Blog for Food Bloggers', description: 'Recipes and stories, beautifully laid out', slug: 'ai-blog-for-food-bloggers' },
          { name: 'Blog Builder for Business', description: 'Content marketing made simple', slug: 'blog-builder-for-business' },
          { name: 'Blog Generator for Personal Journals', description: 'Your thoughts, your space', slug: 'blog-generator-for-personal-journals' },
          { name: 'SEO Blog Generator', description: 'Optimized from the first post', slug: 'seo-blog-generator' },
          { name: 'Blog Generator for Review Sites', description: 'Ratings, comparisons, and verdicts', slug: 'blog-generator-for-review-sites' },
        ],
      },
      {
        id: 'stores',
        title: 'Online Stores',
        description: 'Sell products online with payments built in.',
        generators: [
          { name: 'Online Store Builder', description: 'Start selling without writing code', slug: 'online-store-builder' },
          { name: 'AI Store Generator', description: 'Describe products, get a shop', slug: 'ai-store-generator' },
          { name: 'Free Online Store Builder', description: 'Launch your store at no cost', slug: 'free-online-store-builder' },
          { name: 'No-Code Store Builder', description: 'E-commerce without the complexity', slug: 'no-code-store-builder' },
          { name: 'Online Store Builder for Restaurants', description: 'Take orders online, fast', slug: 'online-store-builder-for-restaurants' },
          { name: 'Store Generator for Handmade Goods', description: 'Sell crafts with a charming shop', slug: 'store-generator-for-handmade-goods' },
          { name: 'AI Store for Digital Products', description: 'Sell downloads and subscriptions', slug: 'ai-store-for-digital-products' },
          { name: 'One-Page Store Builder', description: 'Simple shops, single page', slug: 'one-page-store-builder' },
          { name: 'Store Generator for Fashion Brands', description: 'Lookbooks and checkout in one place', slug: 'store-generator-for-fashion-brands' },
          { name: 'Online Store Builder for Boutiques', description: 'Boutique vibes, big commerce power', slug: 'online-store-builder-for-boutiques' },
        ],
      },
      {
        id: 'link-in-bio',
        title: 'Link-in-Bio',
        description: 'One link, all your places. Made for creators.',
        generators: [
          { name: 'Link-in-Bio Generator', description: 'One link for all your channels', slug: 'link-in-bio-generator' },
          { name: 'AI Link-in-Bio Builder', description: 'Smart links that look great', slug: 'ai-link-in-bio-builder' },
          { name: 'Free Link-in-Bio Generator', description: 'A bio link page, completely free', slug: 'free-link-in-bio-generator' },
          { name: 'No-Code Link-in-Bio Builder', description: 'Custom links, zero coding', slug: 'no-code-link-in-bio-builder' },
          { name: 'Link-in-Bio for Influencers', description: 'Your brand, one tap away', slug: 'link-in-bio-for-influencers' },
          { name: 'Link-in-Bio Generator for Musicians', description: 'Music, merch, and tour dates', slug: 'link-in-bio-generator-for-musicians' },
          { name: 'AI Link-in-Bio for Creators', description: 'All your content in one link', slug: 'ai-link-in-bio-for-creators' },
          { name: 'Link-in-Bio Builder for Podcasters', description: 'Episodes, sponsors, and subscribe links', slug: 'link-in-bio-builder-for-podcasters' },
          { name: 'One-Link Page Generator', description: 'Simple, effective, one link', slug: 'one-link-page-generator' },
          { name: 'Link-in-Bio for Coaches', description: 'Book sessions and share resources', slug: 'link-in-bio-for-coaches' },
        ],
      },
    ],

    // Section 6 - How It Works
    howItWorksTitle: 'HOW IT WORKS',
    howItWorksSteps: [
      { number: 1, title: 'PICK A GENERATOR', description: 'Browse by category or search to find one that fits your goal.' },
      { number: 2, title: 'DESCRIBE YOUR SITE', description: 'Tell our AI builder about your business in a sentence or two.' },
      { number: 3, title: 'GENERATE AND PUBLISH', description: 'Get a fully built site in seconds. Customize anything, then go live.' },
    ],

    // Section 7 - Why Strikingly
    whyStrikinglyTitle: 'WHY STRIKINGLY',
    whyStrikinglyReasons: [
      { title: 'LIVE IN SECONDS', description: 'Describe your site, we build it. No setup, no learning curve.' },
      { title: 'MOBILE BY DEFAULT', description: 'Every generator produces responsive sites that work on any device.' },
      { title: 'FREE TO START', description: 'Generate, customize, and publish without a credit card.' },
    ],

    // Section 8 - FAQ
    faqTitle: 'FREQUENTLY ASKED QUESTIONS',
    faqs: [
      {
        question: 'What is an AI site generator?',
        answer: 'An AI site generator is a tool that uses artificial intelligence to build a complete website from a short text description. You tell the generator what your site is about, and it produces a ready-to-customize layout with relevant content, images, and structure in seconds. Strikingly\u2019s generators combine large language models with proven design patterns so you get a polished result without manually dragging blocks or writing code.',
      },
      {
        question: 'How is a generator different from a template?',
        answer: 'A template gives you a fixed layout that you fill in yourself. An AI generator creates the layout and the content at the same time, tailored to the description you provide. Two people using the same generator with different descriptions will get different sites. Templates are a starting point; generators are closer to a first draft of your entire site.',
      },
      {
        question: 'Are these generators free to use?',
        answer: 'Yes. You can generate, preview, and publish a site with Strikingly\u2019s AI generators at no cost. Paid plans are available if you need a custom domain, advanced analytics, or removal of Strikingly branding, but the core generation and publishing workflow is free.',
      },
      {
        question: 'What kinds of sites can I build?',
        answer: 'Our generators cover business sites, portfolios, landing pages, blogs, online stores, link-in-bio pages, wedding sites, restaurant sites, and more. Each generator is optimized for a specific type of site, so the output includes relevant sections and layouts for that use case. Browse the directory above to find the one that matches what you need.',
      },
      {
        question: 'Can I customize what the generator produces?',
        answer: 'Absolutely. The generated site is a starting point, not a final product. After generation you can change text, swap images, rearrange sections, update colors, add new pages, and adjust any detail in Strikingly\u2019s visual editor. The AI gives you a head start; the editor lets you make it yours.',
      },
      {
        question: 'Do generated sites work on mobile?',
        answer: 'Yes. Every site created with a Strikingly generator is responsive by default. The layouts automatically adapt to phones, tablets, and desktops so your visitors get a great experience on any device. You can preview and tweak the mobile version in the editor before publishing.',
      },
    ],

    // Section 9 - Closing CTA
    closingCtaTitle: 'READY TO BUILD?',
    closingCtaSubtitle: 'Pick a generator above, or jump straight into our AI builder.',
    closingCtaButton: 'START WITH AI BUILDER',
    closingCtaHref: '/s/ai_site_builder',

    // Section 10 - Footer
    footerTagline: 'Create a beautiful website with Strikingly.',
    footerCopyright: (year) => `\u00A9 ${year} Strikingly. All rights reserved.`,
    footerLinks: {
      product: [
        { label: 'Features', href: '/about' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Templates', href: '/templates' },
        { label: 'AI Site Builder', href: '/s/ai_site_builder' },
      ],
      resources: [
        { label: 'Blog', href: '/blog' },
        { label: 'Help Center', href: '/support' },
      ],
      company: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/support' },
      ],
      legal: [
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
      ],
    },
  },
}
