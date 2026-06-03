

const strings = {
  // Top Bar
  topBarLogo: 'strikingly AI',

  // Breadcrumb
  breadcrumbHome: 'Strikingly',
  breadcrumbCurrent: 'AI Generators',

  // Hero
  heroLine1: 'BUILD ANY KIND OF SITE',
  heroLine2: 'WITH AI, IN AN INSTANT',
  heroSubheadline:
    "Browse the right generator for what you're building, or jump straight into our AI site builder.",
  heroPrimaryCTA: "START BUILDING - IT'S FREE",
  heroSecondaryCTA: 'BROWSE GENERATORS',

  // Featured Generators
  featuredHeading: 'FEATURED GENERATORS',
  featuredSubheading: 'A few common starting points.',

  // Browse by Category
  browseHeading: 'BROWSE BY CATEGORY',
  categories: [
    {
      slug: 'websites',
      name: 'WEBSITES',
      description: 'AI-built business and personal sites for any goal.',
    },
    {
      slug: 'landing-pages',
      name: 'LANDING PAGES',
      description: 'Single-page sites built to convert visitors fast.',
    },
    {
      slug: 'portfolios',
      name: 'PORTFOLIOS',
      description: 'Showcase your work with a clean, focused site.',
    },
    {
      slug: 'blogs',
      name: 'BLOGS',
      description: 'Publish-ready blogs with built-in SEO basics.',
    },
    {
      slug: 'stores',
      name: 'ONLINE STORES',
      description: 'Sell products online with payments built in.',
    },
    {
      slug: 'link-in-bio',
      name: 'LINK-IN-BIO',
      description: 'One link, all your places. Made for creators.',
    },
  ],

  // All Generators
  allGeneratorsHeading: 'ALL GENERATORS',
  allGeneratorsSubheading:
    "Sixty-plus generators, organized by what you're building.",
  searchPlaceholder: 'Search generators...',
  searchAriaLabel: 'Search generators',
  noResults: 'No generators match your search.',
  clearSearch: 'Clear search',
  cantFind: "Can't find it? Start with our AI builder.",
  showAll: 'Show all',
  showLess: 'Show less',
  resultsCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,

  // How It Works
  howItWorksHeading: 'HOW IT WORKS',
  steps: [
    {
      title: 'PICK A GENERATOR',
      description:
        'Browse by category or search to find one that fits your goal.',
    },
    {
      title: 'DESCRIBE YOUR SITE',
      description:
        'Tell our AI builder about your business in a sentence or two.',
    },
    {
      title: 'GENERATE AND PUBLISH',
      description:
        'Get a fully built site in seconds. Customize anything, then go live.',
    },
  ],

  // Why Strikingly
  whyHeading: 'WHY STRIKINGLY',
  reasons: [
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
  faqs: [
    {
      question: 'What is an AI site generator?',
      answer:
        "An AI site generator is a tool that builds a complete website for you based on a simple description of your business or project. Instead of dragging elements around or writing code, you tell the generator what kind of site you need — a portfolio, a store, a blog — and it creates the layout, picks the right sections, and fills in starter content automatically. Strikingly's generators are built on top of our AI Site Builder, which has helped millions of users get online without touching a line of code.",
    },
    {
      question: 'How is a generator different from a template?',
      answer:
        "A template is a pre-designed layout that you fill in yourself — you still need to write the copy, choose the images, and arrange the sections. A generator goes further: it asks what your site is about and then builds the whole thing for you, including relevant starter text and a structure that matches your goal. Think of a template as an empty house you decorate, and a generator as a furnished home that's move-in ready. You can still rearrange everything afterward.",
    },
    {
      question: 'Are these generators free to use?',
      answer:
        "Yes, every generator on this page is free to use. You can generate a site, customize it, and publish it to a Strikingly subdomain without entering a credit card. If you want to connect a custom domain, remove Strikingly branding, or access advanced features like custom code and analytics, we offer affordable paid plans. But the core experience — pick a generator, describe your site, publish — is completely free.",
    },
    {
      question: 'What kinds of sites can I build?',
      answer:
        "You can build almost any kind of site with Strikingly's generators. The most common categories are business websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Within each category, we have specialized generators for specific audiences — photographers, restaurants, wedding couples, yoga instructors, and dozens more. If you don't see a generator that matches your exact need, you can always start with our general AI Site Builder and describe what you want.",
    },
    {
      question: 'Can I customize what the generator produces?',
      answer:
        "Absolutely. The generator gives you a complete starting point, but everything is editable. You can change the text, swap images, add or remove sections, adjust colors and fonts, and rearrange the layout using our visual editor. If you know how to code, you can also add custom HTML, CSS, and JavaScript. The generator saves you the blank-page problem; after that, the site is fully yours to modify.",
    },
    {
      question: 'Do generated sites work on mobile?',
      answer:
        "Yes, every site created by a Strikingly generator is fully responsive out of the box. We build all our sites on a mobile-first framework, which means your site automatically adapts to look great on phones, tablets, and desktops. You can preview the mobile view in our editor and make device-specific adjustments if needed, but in most cases the generated site will already be optimized for every screen size.",
    },
  ],

  // Closing CTA
  closingHeading: 'READY TO BUILD?',
  closingSub: 'Pick a generator above, or jump straight into our AI builder.',
  closingCTA: 'START WITH AI BUILDER',

  // Footer
  footerCopyright: '© 2026 Strikingly, Inc. All rights reserved.',
  footerLinks: [
    { text: 'About', href: '/about' },
    { text: 'Pricing', href: '/pricing' },
    { text: 'Templates', href: '/templates' },
    { text: 'Support', href: '/support' },
    { text: 'Blog', href: '/blog' },
    { text: 'Terms', href: '/terms' },
    { text: 'Privacy', href: '/privacy' },
  ],
};

export default strings;

