const strings = {
  en: {
    // Top bar
    logo: 'strikingly AI',

    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',

    // Hero
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSub: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    heroPrimaryCta: 'START BUILDING - IT\'S FREE',
    heroSecondaryCta: 'BROWSE GENERATORS',

    // Featured Generators
    featuredHeading: 'FEATURED GENERATORS',
    featuredSub: 'A few common starting points.',

    // Browse by Category
    browseHeading: 'BROWSE BY CATEGORY',
    categories: [
      { name: 'Websites', slug: 'websites', desc: 'AI-built business and personal sites for any goal.' },
      { name: 'Landing Pages', slug: 'landing-pages', desc: 'Single-page sites built to convert visitors fast.' },
      { name: 'Portfolios', slug: 'portfolios', desc: 'Showcase your work with a clean, focused site.' },
      { name: 'Blogs', slug: 'blogs', desc: 'Publish-ready blogs with built-in SEO basics.' },
      { name: 'Online Stores', slug: 'stores', desc: 'Sell products online with payments built in.' },
      { name: 'Link-in-Bio', slug: 'link-in-bio', desc: 'One link, all your places. Made for creators.' },
    ],

    // All Generators
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSub: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    showAll: 'Show all',
    showLess: 'Show less',
    matchCount: '{count} generators match',
    noResults: 'No generators match your search.',
    clearSearch: 'Clear search',
    cantFind: 'Can\'t find it? Start with our',
    aiBuilder: 'AI builder',

    // How It Works
    howItWorksHeading: 'HOW IT WORKS',
    steps: [
      { title: 'PICK A GENERATOR', desc: 'Browse by category or search to find one that fits your goal.' },
      { title: 'DESCRIBE YOUR SITE', desc: 'Tell our AI builder about your business in a sentence or two.' },
      { title: 'GENERATE AND PUBLISH', desc: 'Get a fully built site in seconds. Customize anything, then go live.' },
    ],

    // Why Strikingly
    whyHeading: 'WHY STRIKINGLY',
    reasons: [
      { title: 'LIVE IN SECONDS', desc: 'Describe your site, we build it. No setup, no learning curve.' },
      { title: 'MOBILE BY DEFAULT', desc: 'Every generator produces responsive sites that work on any device.' },
      { title: 'FREE TO START', desc: 'Generate, customize, and publish without a credit card.' },
    ],

    // FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faqs: [
      {
        q: 'What is an AI site generator?',
        a: 'An AI site generator is a tool that builds a complete website for you based on a short description of your business or project. Instead of dragging elements around or writing code, you tell the generator what you need — for example, "a portfolio for my photography business" — and the AI creates a full site with pages, images, and text in seconds. You can then customize anything before publishing.',
      },
      {
        q: 'How is a generator different from a template?',
        a: 'A template is a pre-designed layout that you fill in yourself — you add your own text, images, and structure. A generator actively builds the site for you, creating the pages, choosing the layout, and often generating initial copy and images that match your specific business type. Templates give you a starting point; generators give you a nearly finished site.',
      },
      {
        q: 'Are these generators free to use?',
        a: 'Yes, all of Strikingly\'s AI generators are free to start. You can generate a full site, preview it, and customize it without entering any payment information. When you\'re ready to publish your site with a custom domain or remove Strikingly branding, paid plans are available, but you can explore and build at no cost.',
      },
      {
        q: 'What kinds of sites can I build?',
        a: 'You can build nearly any kind of site: business websites, online stores, portfolios, blogs, landing pages, wedding sites, restaurant sites, link-in-bio pages, and much more. Our generators cover dozens of industries and use cases. If you don\'t see an exact match, our general AI site builder can handle it — just describe what you need.',
      },
      {
        q: 'Can I customize what the generator produces?',
        a: 'Absolutely. The generator gives you a complete starting point, but everything is customizable. You can change text, swap images, adjust colors and fonts, add or remove sections, and rearrange pages. Think of the generator as your first draft — you have full creative control before you publish.',
      },
      {
        q: 'Do generated sites work on mobile?',
        a: 'Yes. Every site built by a Strikingly generator is fully responsive by default. Your site will automatically adapt to look great on phones, tablets, and desktops without any extra work from you. We test across device sizes to make sure your visitors get a good experience wherever they are.',
      },
    ],

    // Closing CTA
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',

    // Footer
    footerColumns: [
      {
        heading: 'Product',
        links: [
          { text: 'Website Builder', href: '/' },
          { text: 'AI Site Builder', href: '/s/ai_site_builder' },
          { text: 'Templates', href: '/templates' },
          { text: 'Pricing', href: '/pricing' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { text: 'About', href: '/about' },
          { text: 'Blog', href: '/blog' },
          { text: 'Support', href: '/support' },
        ],
      },
      {
        heading: 'Resources',
        links: [
          { text: 'Help Center', href: '/support' },
          { text: 'Affiliates', href: '/affiliates' },
          { text: 'Developers', href: '/developers' },
        ],
      },
      {
        heading: 'Legal',
        links: [
          { text: 'Terms of Service', href: '/terms' },
          { text: 'Privacy Policy', href: '/privacy' },
        ],
      },
    ],
    copyright: '© {year} Strikingly. All rights reserved.',
  },
};

export default strings;
