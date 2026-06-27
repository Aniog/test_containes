export const strings = {
  en: {
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      subheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
      ctaPrimary: 'START BUILDING — IT\'S FREE',
      ctaSecondary: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      subheading: 'A few common starting points.',
    },
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      subheading: 'Sixty-plus generators, organized by what you\'re building.',
      searchPlaceholder: 'Search generators...',
      matchCount: (count) => `${count} generator${count !== 1 ? 's' : ''} match`,
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      cantFind: 'Can\'t find it? Start with our AI builder.',
      showAll: (count) => `Show all ${count} generators`,
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
          answer: 'An AI site generator is a tool that creates a complete website based on a short description you provide. Instead of starting from a blank page or choosing a template, you describe your business or project in a sentence or two, and the AI builds a fully designed site with content, layout, and images tailored to your needs. You can then customize anything before publishing.',
        },
        {
          question: 'How is a generator different from a template?',
          answer: 'A template is a pre-designed layout that you fill in with your own content. A generator creates a unique site from scratch based on your specific description. Templates give you a starting structure; generators give you a finished site that\'s already personalized to your business, industry, and goals. The result is faster and more tailored than picking a template and editing every section.',
        },
        {
          question: 'Are these generators free to use?',
          answer: 'Yes. You can generate, preview, and customize your site without paying anything or entering a credit card. Strikingly offers free plans that let you publish and keep your site live. Premium features like custom domains and advanced analytics are available on paid plans if you need them later.',
        },
        {
          question: 'What kinds of sites can I build?',
          answer: 'You can build business websites, portfolios, landing pages, blogs, online stores, link-in-bio pages, event sites, restaurant pages, and more. Each generator is tuned for a specific use case, so the AI knows what sections, content, and design patterns work best for your type of site.',
        },
        {
          question: 'Can I customize what the generator produces?',
          answer: 'Absolutely. The generated site is a starting point, not a locked result. You can edit text, swap images, rearrange sections, change colors and fonts, add new pages, and connect your own domain. The editor is visual and drag-and-drop, so no coding is needed.',
        },
        {
          question: 'Do generated sites work on mobile?',
          answer: 'Yes. Every site produced by our generators is responsive by default. The layout, typography, and images automatically adapt to phones, tablets, and desktops. You can preview the mobile version in the editor before publishing to make sure everything looks right.',
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      subheading: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`,
    },
  },
};
