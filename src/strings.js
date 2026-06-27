const strings = {
  en: {
    // Top bar
    logo: 'strikingly AI',

    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbGenerators: 'AI Generators',

    // Hero
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSub: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    heroPrimaryCta: "START BUILDING - IT'S FREE",
    heroSecondaryCta: 'BROWSE GENERATORS',

    // Featured Generators
    featuredHeading: 'FEATURED GENERATORS',
    featuredSub: 'A few common starting points.',

    // Browse by Category
    browseHeading: 'BROWSE BY CATEGORY',

    // All Generators
    allHeading: 'ALL GENERATORS',
    allSub: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    showAll: 'Show all',
    showLess: 'Show less',
    noResults: 'No generators match your search.',
    clearSearch: 'Clear search',
    noResultsFallback: "Can't find it? Start with our AI builder.",
    resultCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,

    // How It Works
    howHeading: 'HOW IT WORKS',
    howStep1Title: 'PICK A GENERATOR',
    howStep1Desc: 'Browse by category or search to find one that fits your goal.',
    howStep2Title: 'DESCRIBE YOUR SITE',
    howStep2Desc: 'Tell our AI builder about your business in a sentence or two.',
    howStep3Title: 'GENERATE AND PUBLISH',
    howStep3Desc: 'Get a fully built site in seconds. Customize anything, then go live.',

    // Why Strikingly
    whyHeading: 'WHY STRIKINGLY',
    why1Title: 'LIVE IN SECONDS',
    why1Desc: 'Describe your site, we build it. No setup, no learning curve.',
    why2Title: 'MOBILE BY DEFAULT',
    why2Desc: 'Every generator produces responsive sites that work on any device.',
    why3Title: 'FREE TO START',
    why3Desc: 'Generate, customize, and publish without a credit card.',

    // FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faqQ1: 'What is an AI site generator?',
    faqA1: 'An AI site generator is a tool that builds a complete website for you after you describe what you need. Instead of dragging elements around or choosing from static templates, you tell the AI about your project—your business type, your goals, your style preferences—and it produces a fully structured, ready-to-publish site. Strikingly\'s generators are tuned for specific site types so the output matches what that kind of site needs.',
    faqQ2: 'How is a generator different from a template?',
    faqA2: 'A template is a static layout you fill in yourself. A generator actively builds your site for you based on your description. With a template you start with someone else\'s design and replace their content with yours. With a generator you describe your business and the AI assembles layout, copy, and structure specifically for your needs. Generators save time and produce more personalized results.',
    faqQ3: 'Are these generators free to use?',
    faqA3: 'Yes. You can browse any generator, describe your site, and have Strikingly\'s AI build a complete site for you without entering a credit card. You only choose a paid plan when you\'re ready to connect a custom domain or unlock premium features. The entire building and preview experience is free.',
    faqQ4: 'What kinds of sites can I build?',
    faqQ4: 'You can build business websites, landing pages, online stores, portfolios, blogs, link-in-bio pages, wedding sites, restaurant sites, and many more. Our directory is organized by category so you can quickly find a generator tuned for your specific goal.',
    faqQ5: 'Can I customize what the generator produces?',
    faqA5: 'Absolutely. After the AI builds your initial site, you can customize every part of it—text, images, colors, layout, pages. The generator gives you a strong starting point. You have full creative control from there. Our editor lets you tweak anything before publishing.',
    faqQ6: 'Do generated sites work on mobile?',
    faqA6: 'Yes, every site Strikingly generates is responsive by default. Your site will automatically adapt to phones, tablets, and desktops without any extra work from you. You can preview the mobile view in our editor and make mobile-specific adjustments if you like.',

    // Closing CTA
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',

    // Footer
    footerCopyright: '© 2026 Strikingly, Inc. All rights reserved.',

    // Categories
    categories: {
      websites: {
        name: 'Websites',
        desc: 'AI-built business and personal sites for any goal.',
        subdesc: 'Complete multi-page websites for businesses, personal brands, and organizations.',
      },
      'landing-pages': {
        name: 'Landing Pages',
        desc: 'Single-page sites built to convert visitors fast.',
        subdesc: 'Conversion-optimized landing pages for products, services, and campaigns.',
      },
      portfolios: {
        name: 'Portfolios',
        desc: 'Showcase your work with a clean, focused site.',
        subdesc: 'Portfolio sites designed to put your work front and center.',
      },
      blogs: {
        name: 'Blogs',
        desc: 'Publish-ready blogs with built-in SEO basics.',
        subdesc: 'Blogs that look great and are ready for your first post.',
      },
      stores: {
        name: 'Online Stores',
        desc: 'Sell products online with payments built in.',
        subdesc: 'E-commerce stores with product listings, cart, and checkout.',
      },
      'link-in-bio': {
        name: 'Link-in-Bio',
        desc: 'One link, all your places. Made for creators.',
        subdesc: 'A single page linking to all your content, profiles, and channels.',
      },
    },
  },
};

export default strings;
