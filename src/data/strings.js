// i18n strings — add strings.es, strings.ja etc. as parallel objects
export const strings = {
  en: {
    // Top bar
    logoText: 'strikingly AI',

    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',

    // Hero
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSubheadline:
      'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    heroPrimaryCta: 'START BUILDING — IT\'S FREE',
    heroSecondaryCta: 'BROWSE GENERATORS',

    // Section 3 — Featured
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',

    // Section 4 — Browse by Category
    browseHeading: 'BROWSE BY CATEGORY',
    browseSubheading: 'Jump to the section that fits what you\'re building.',

    // Section 5 — All Generators
    allHeading: 'ALL GENERATORS',
    allSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    searchResultCount: (n) => `${n} generator${n === 1 ? '' : 's'} match`,
    searchNoResults: 'No generators match your search.',
    searchClear: 'Clear search',
    searchNoResultsCta: 'Can\'t find it? Start with our AI builder.',
    showAll: (n) => `Show all ${n} generators`,
    showLess: 'Show less',

    // Section 6 — How It Works
    howHeading: 'HOW IT WORKS',
    steps: [
      {
        title: 'PICK A GENERATOR',
        body: 'Browse by category or search to find one that fits your goal.',
      },
      {
        title: 'DESCRIBE YOUR SITE',
        body: 'Tell our AI builder about your business in a sentence or two.',
      },
      {
        title: 'GENERATE AND PUBLISH',
        body: 'Get a fully built site in seconds. Customize anything, then go live.',
      },
    ],

    // Section 7 — Why Strikingly
    whyHeading: 'WHY STRIKINGLY',
    whyItems: [
      {
        title: 'LIVE IN SECONDS',
        body: 'Describe your site, we build it. No setup, no learning curve.',
      },
      {
        title: 'MOBILE BY DEFAULT',
        body: 'Every generator produces responsive sites that work on any device.',
      },
      {
        title: 'FREE TO START',
        body: 'Generate, customize, and publish without a credit card.',
      },
    ],

    // Section 8 — FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faqs: [
      {
        q: 'What is an AI site generator?',
        a: 'An AI site generator is a tool that builds a complete website for you based on a short description of your business or project. Instead of dragging and dropping elements or writing code, you describe what you need and the AI assembles the layout, copy, and design in seconds.\n\nStrikingly\'s generators are tuned for specific use cases — portfolios, online stores, landing pages, and more — so the output is already shaped for your goal rather than a blank canvas.',
      },
      {
        q: 'How is a generator different from a template?',
        a: 'A template is a static starting point: you pick a design and fill in your own content manually. A generator is active: it reads your input and produces a site with content, structure, and styling already tailored to what you described.\n\nThink of a template as a blank form and a generator as a form that fills itself in based on what you tell it.',
      },
      {
        q: 'Are these generators free to use?',
        a: 'Yes. You can generate, preview, and customize any site without a credit card. Strikingly offers a free plan that lets you publish a site on a Strikingly subdomain. Paid plans unlock custom domains, additional pages, and e-commerce features.',
      },
      {
        q: 'What kinds of sites can I build?',
        a: 'The generators on this page cover the most common site types: business websites, personal portfolios, landing pages, blogs, online stores, and link-in-bio pages. Within each category there are generators tuned for specific industries and goals — photographers, restaurants, wedding couples, yoga instructors, and many more.\n\nIf you don\'t see a generator for your exact use case, the AI Site Builder at the top of this page can handle any brief you give it.',
      },
      {
        q: 'Can I customize what the generator produces?',
        a: 'Absolutely. Every generated site opens in Strikingly\'s visual editor, where you can change text, swap images, adjust colors, reorder sections, and add or remove blocks. The generator gives you a strong starting point; you have full control over the final result.',
      },
      {
        q: 'Do generated sites work on mobile?',
        a: 'Yes. Every site produced by a Strikingly generator is fully responsive. The layout, typography, and images adapt automatically to phones and tablets, so you don\'t need to build a separate mobile version.',
      },
    ],

    // Section 9 — Closing CTA
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',

    // Footer
    footerTagline: 'Build beautiful websites with AI, in seconds.',
    footerCopyright: `© ${new Date().getFullYear()} Strikingly, Inc. All rights reserved.`,
    footerColumns: [
      {
        heading: 'Product',
        links: [
          { label: 'Templates', href: '/templates' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'AI Site Builder', href: '/s/ai_site_builder' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Support', href: '/support' },
        ],
      },
      {
        heading: 'Legal',
        links: [
          { label: 'Terms of Service', href: '/terms' },
          { label: 'Privacy Policy', href: '/privacy' },
        ],
      },
      {
        heading: 'Generators',
        links: [
          { label: 'All Generators', href: '/generators' },
          { label: 'Website Generator', href: '/generators/ai-website-generator' },
          { label: 'Portfolio Generator', href: '/generators/free-portfolio-generator' },
          { label: 'Landing Page Maker', href: '/generators/ai-landing-page-maker' },
        ],
      },
    ],
  },
};

export default strings.en;
