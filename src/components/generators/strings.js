// i18n strings — add strings.es, strings.ja etc. here for other locales
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

    // Section 3
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',

    // Section 4
    categoryHeading: 'BROWSE BY CATEGORY',
    categorySubheading: 'Jump to the section that fits what you\'re building.',

    // Section 5
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchResultCount: (n) => `${n} generator${n === 1 ? '' : 's'} match`,
    searchNoResults: 'No generators match your search.',
    searchClearBtn: 'Clear search',
    searchNoResultsCta: 'Can\'t find it? Start with our AI builder.',
    showAllBtn: (n) => `Show all ${n} generators`,
    showLessBtn: 'Show less',

    // Section 6
    howItWorksHeading: 'HOW IT WORKS',
    steps: [
      {
        number: '1',
        title: 'PICK A GENERATOR',
        body: 'Browse by category or search to find one that fits your goal.',
      },
      {
        number: '2',
        title: 'DESCRIBE YOUR SITE',
        body: 'Tell our AI builder about your business in a sentence or two.',
      },
      {
        number: '3',
        title: 'GENERATE AND PUBLISH',
        body: 'Get a fully built site in seconds. Customize anything, then go live.',
      },
    ],

    // Section 7
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

    // Section 8
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faqs: [
      {
        q: 'What is an AI site generator?',
        a: 'An AI site generator is a tool that builds a complete website for you based on a short description of your business or project. Instead of dragging and dropping elements manually, you describe what you need and the AI assembles the layout, copy, and design in seconds.\n\nStrikingly\'s generators go one step further by combining a focused starting point — your industry, goal, or site type — with our AI builder, so the result is tailored from the very first page.',
      },
      {
        q: 'How is a generator different from a template?',
        a: 'A template is a static design you fill in yourself. A generator is an active process: it takes your input, applies AI to understand your context, and produces a site that already reflects your business — with relevant copy, structure, and sections.\n\nYou still customize everything after generation, but you start from a site that\'s already shaped around your goal rather than a blank canvas.',
      },
      {
        q: 'Are these generators free to use?',
        a: 'Yes. You can generate, preview, and customize your site without a credit card. Strikingly offers a free plan that lets you publish a site on a Strikingly subdomain. Paid plans unlock custom domains, additional pages, and advanced features.\n\nEvery generator on this page routes to the same AI builder, so the free tier applies to all of them.',
      },
      {
        q: 'What kinds of sites can I build?',
        a: 'The generators on this page cover six broad categories: general websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Within each category there are generators targeted at specific industries (restaurants, photographers, yoga instructors) and specific goals (free, one-page, no-code).\n\nIf you don\'t see your exact use case, the AI builder accepts any description — just start there and describe what you need.',
      },
      {
        q: 'Can I customize what the generator produces?',
        a: 'Absolutely. Every generated site opens in Strikingly\'s editor, where you can change text, swap images, reorder sections, adjust colors, and add or remove any element. The generator gives you a strong starting point; the editor gives you full control.\n\nYou\'re never locked into what the AI produced.',
      },
      {
        q: 'Do generated sites work on mobile?',
        a: 'Yes. Every site built with Strikingly is responsive by default. The AI generator produces a layout that adapts to phones, tablets, and desktops without any extra work on your part.\n\nYou can preview the mobile view directly in the editor before you publish.',
      },
    ],

    // Section 9
    closingHeadline: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',

    // Footer
    footerCopyright: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`,
    footerColumns: [
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
}

export const t = strings.en
