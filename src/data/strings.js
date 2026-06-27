const strings = {
  en: {
    siteName: 'Strikingly',
    brandPrefix: 'STRIKINGLY',
    brandSuffix: 'AI',
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSubheadline:
      'Browse the right generator for what you\u2019re building, or jump straight into our AI site builder.',
    heroCtaPrimary: 'START BUILDING \u2013 IT\u2019S FREE',
    heroCtaSecondary: 'BROWSE GENERATORS',
    heroCtaPrimaryHref: '/s/ai_site_builder',
    heroCtaSecondaryHref: '#all-generators',

    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',

    categoryHeading: 'BROWSE BY CATEGORY',

    directoryHeading: 'ALL GENERATORS',
    directorySubheading:
      'Sixty-plus generators, organized by what you\u2019re building.',
    searchPlaceholder: 'Search generators\u2026',
    searchAriaLabel: 'Search generators',
    searchMatchLabel: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
    emptyStateTitle: 'No generators match your search.',
    emptyStateCta: 'Clear search',
    emptyStateAlt:
      'Can\u2019t find it? Start with our AI builder.',
    showAllLabel: (total) => `Show all ${total} generators`,
    showLessLabel: 'Show fewer',

    howItWorksHeading: 'HOW IT WORKS',
    howItWorksSteps: [
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

    whyStrikinglyHeading: 'WHY STRIKINGLY',
    whyStrikinglyItems: [
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

    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faqItems: [
      {
        question: 'What is an AI site generator?',
        answer:
          'An AI site generator is a tool that uses artificial intelligence to build a complete website from a short text description. You describe your business, goal, or project, and the generator produces a ready-to-customize site with layout, copy, and images\u2014all in seconds.\n\nUnlike traditional website builders that require you to drag and drop elements manually, an AI site generator handles the heavy lifting so you can focus on your content and message.',
      },
      {
        question: 'How is a generator different from a template?',
        answer:
          'A template is a pre-designed layout you fill in yourself. A generator creates a site tailored to what you describe. The structure, sections, copy, and visual choices are driven by your input, not a one-size-fits-all design.\n\nTemplates are great if you already have content ready. Generators are faster when you want a complete starting point built around your specific needs.',
      },
      {
        question: 'Are these generators free to use?',
        answer:
          'Yes. Every generator on this page lets you create a site at no cost. You can generate, customize, and publish without entering a credit card. If you need advanced features like a custom domain or additional pages, paid plans are available but entirely optional.',
      },
      {
        question: 'What kinds of sites can I build?',
        answer:
          'You can build business websites, landing pages, portfolios, blogs, online stores, link-in-bio pages, and more. Each category in the directory above contains generators optimized for specific use cases\u2014from restaurant menus to wedding sites to digital product shops.\n\nIf you are not sure which one fits, start with the AI Website Generator and describe what you need.',
      },
      {
        question: 'Can I customize what the generator produces?',
        answer:
          'Absolutely. The generated site is a starting point, not a final product. You can change text, swap images, adjust colors, rearrange sections, add pages, and tweak any detail in our visual editor. No coding required.\n\nMost users spend a few minutes customizing before publishing. The goal is to give you something close to done so you only need to polish, not build from scratch.',
      },
      {
        question: 'Do generated sites work on mobile?',
        answer:
          'Yes. Every site produced by our generators is fully responsive by default. That means your site looks and works great on phones, tablets, and desktops without any extra effort on your part.\n\nMobile responsiveness is built into the generation process itself\u2014it is not an afterthought or an add-on.',
      },
    ],

    closingCtaHeading: 'READY TO BUILD?',
    closingCtaSub:
      'Pick a generator above, or jump straight into our AI builder.',
    closingCtaButton: 'START WITH AI BUILDER',
    closingCtaHref: '/s/ai_site_builder',

    footerTagline: 'The website builder that gets you online in minutes.',
    footerCopyright: (year) =>
      `\u00A9 ${year} Strikingly. All rights reserved.`,
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
  },
}

export default strings
