const strings = {
  topBar: {
    logoText: 'strikingly AI',
  },
  breadcrumb: {
    home: 'Strikingly',
    current: 'AI Generators',
  },
  hero: {
    h1Line1: 'BUILD ANY KIND OF SITE',
    h1Line2: 'WITH AI, IN AN INSTANT',
    subheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    primaryCta: 'START BUILDING - IT\'S FREE',
    secondaryCta: 'BROWSE GENERATORS',
  },
  featured: {
    heading: 'FEATURED GENERATORS',
    subheading: 'A few common starting points.',
  },
  browseByCategory: {
    heading: 'BROWSE BY CATEGORY',
    categories: [
      { name: 'WEBSITES', slug: 'websites', description: 'AI-built business and personal sites for any goal.' },
      { name: 'LANDING PAGES', slug: 'landing-pages', description: 'Single-page sites built to convert visitors fast.' },
      { name: 'PORTFOLIOS', slug: 'portfolios', description: 'Showcase your work with a clean, focused site.' },
      { name: 'BLOGS', slug: 'blogs', description: 'Publish-ready blogs with built-in SEO basics.' },
      { name: 'ONLINE STORES', slug: 'stores', description: 'Sell products online with payments built in.' },
      { name: 'LINK-IN-BIO', slug: 'link-in-bio', description: 'One link, all your places. Made for creators.' },
    ],
  },
  allGenerators: {
    heading: 'ALL GENERATORS',
    subheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchAriaLabel: 'Search generators',
    matchCount: '{count} generators match',
    noResults: 'No generators match your search.',
    clearSearch: 'Clear search',
    cantFindLink: 'Can\'t find it? Start with our AI builder.',
    showAll: 'Show all {count} generators',
    showLess: 'Show less',
  },
  howItWorks: {
    heading: 'HOW IT WORKS',
    steps: [
      { title: 'PICK A GENERATOR', description: 'Browse by category or search to find one that fits your goal.' },
      { title: 'DESCRIBE YOUR SITE', description: 'Tell our AI builder about your business in a sentence or two.' },
      { title: 'GENERATE AND PUBLISH', description: 'Get a fully built site in seconds. Customize anything, then go live.' },
    ],
  },
  whyStrikingly: {
    heading: 'WHY STRIKINGLY',
    items: [
      { title: 'LIVE IN SECONDS', description: 'Describe your site, we build it. No setup, no learning curve.' },
      { title: 'MOBILE BY DEFAULT', description: 'Every generator produces responsive sites that work on any device.' },
      { title: 'FREE TO START', description: 'Generate, customize, and publish without a credit card.' },
    ],
  },
  faq: {
    heading: 'FREQUENTLY ASKED QUESTIONS',
    items: [
      {
        question: 'What is an AI site generator?',
        answer: 'An AI site generator uses artificial intelligence to create a complete website based on a short description of your business or project. Instead of picking a template and filling in blanks, you describe what you need and the AI builds the structure, content, and design for you in seconds.',
      },
      {
        question: 'How is a generator different from a template?',
        answer: 'A template is a fixed layout you customize manually. A generator creates a unique site tailored to your description — the AI writes copy, selects images, and arranges sections based on your input. You can still customize everything afterward, but you start with something purpose-built rather than generic.',
      },
      {
        question: 'Are these generators free to use?',
        answer: 'Yes. You can generate, preview, and customize your site without paying anything. When you\'re ready to connect a custom domain or access advanced features, paid plans are available.',
      },
      {
        question: 'What kinds of sites can I build?',
        answer: 'Strikingly\'s generators cover business websites, portfolios, landing pages, blogs, online stores, and link-in-bio pages. Within each category you\'ll find generators tailored to specific industries and goals — from restaurants and wedding sites to photographer portfolios and creator hubs.',
      },
      {
        question: 'Can I customize what the generator produces?',
        answer: 'Absolutely. The AI gives you a fully structured starting point, and you can edit every section, swap images, change colors, add or remove pages, and fine-tune the content. The generator saves you the blank-canvas problem; it doesn\'t lock you into anything.',
      },
      {
        question: 'Do generated sites work on mobile?',
        answer: 'Yes. Every site produced by Strikingly\'s generators is responsive by default, meaning it adapts to phones, tablets, and desktops automatically. You can also preview and adjust the mobile layout at any time.',
      },
    ],
  },
  closingCta: {
    headline: 'READY TO BUILD?',
    sub: 'Pick a generator above, or jump straight into our AI builder.',
    cta: 'START WITH AI BUILDER',
  },
  footer: {
    copyright: '© {year} Strikingly, Inc. All rights reserved.',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Templates', href: '/templates' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'AI Site Builder', href: '/s/ai_site_builder' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Blog', href: '/blog' },
          { label: 'Support', href: '/support' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Terms of Service', href: '/terms' },
          { label: 'Privacy Policy', href: '/privacy' },
        ],
      },
    ],
  },
};

export default strings;
