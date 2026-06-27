export const strings = {
  en: {
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      sub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      ctaPrimary: "START BUILDING \u2014 IT'S FREE",
      ctaSecondary: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      sub: 'A few common starting points.',
    },
    browseCategory: {
      heading: 'BROWSE BY CATEGORY',
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      sub: "Sixty-plus generators, organized by what you're building.",
      searchPlaceholder: 'Search generators...',
      matchCount: (n) => `${n} generator${n === 1 ? '' : 's'} match`,
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      cantFind: "Can't find it? Start with our AI builder.",
      showAll: (n) => `Show all ${n} generators`,
      showLess: 'Show fewer',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        { title: 'PICK A GENERATOR', desc: 'Browse by category or search to find one that fits your goal.' },
        { title: 'DESCRIBE YOUR SITE', desc: 'Tell our AI builder about your business in a sentence or two.' },
        { title: 'GENERATE AND PUBLISH', desc: 'Get a fully built site in seconds. Customize anything, then go live.' },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      items: [
        { title: 'LIVE IN SECONDS', desc: 'Describe your site, we build it. No setup, no learning curve.' },
        { title: 'MOBILE BY DEFAULT', desc: 'Every generator produces responsive sites that work on any device.' },
        { title: 'FREE TO START', desc: 'Generate, customize, and publish without a credit card.' },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          q: 'What is an AI site generator?',
          a: 'An AI site generator is a tool that creates a complete website based on a short description you provide. Instead of starting from a blank page or choosing a template, you describe your business or project in a sentence or two, and the AI builds a fully designed site with content, layout, and images tailored to your needs.',
        },
        {
          q: 'How is a generator different from a template?',
          a: "A template is a pre-made design you fill in with your own content. A generator creates a unique site from scratch based on your input. Templates give you a starting structure; generators give you a finished product that's already customized to your description. You can still edit everything after generation.",
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes. You can generate, preview, and customize your site at no cost. Publishing on a free Strikingly subdomain is also free. Premium features like custom domains, advanced analytics, and e-commerce tools are available on paid plans.',
        },
        {
          q: 'What kinds of sites can I build?',
          a: 'Anything from business websites and portfolios to online stores, blogs, landing pages, and link-in-bio pages. We have generators tailored to specific industries (restaurants, photographers, consultants) and specific goals (lead generation, event promotion, product launches).',
        },
        {
          q: 'Can I customize what the generator produces?',
          a: 'Absolutely. The generated site is a starting point. You can edit text, swap images, rearrange sections, change colors, add new pages, and connect your own domain. The editor is drag-and-drop, so no coding is needed.',
        },
        {
          q: 'Do generated sites work on mobile?',
          a: 'Yes. Every site produced by our generators is fully responsive out of the box. The layout, typography, and images automatically adapt to phones, tablets, and desktops without any extra work on your part.',
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`,
    },
  },
};
