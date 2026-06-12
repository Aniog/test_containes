export const strings = {
  en: {
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      sub: 'Browse the right generator for what you\u2019re building, or jump straight into our AI site builder.',
      ctaPrimary: 'START BUILDING \u2014 IT\u2019S FREE',
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
      sub: 'Sixty-plus generators, organized by what you\u2019re building.',
      searchPlaceholder: 'Search generators...',
      matchCount: (n) => `${n} generator${n === 1 ? '' : 's'} match`,
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      cantFind: 'Can\u2019t find it? Start with our AI builder.',
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
          a: 'An AI site generator is a tool that creates a complete website from a short description of what you need. Instead of choosing a template and filling in content manually, you describe your business or project and the AI builds the pages, layout, and copy for you in seconds.',
        },
        {
          q: 'How is a generator different from a template?',
          a: 'A template is a fixed starting point that you customize by replacing placeholder content. A generator creates a unique site tailored to your description every time. The result is closer to a finished product from the start, with content and structure that match your specific goals.',
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes. You can generate and preview a site at no cost. Publishing your site on a custom domain or unlocking premium features requires a paid plan, but the generation step itself is completely free.',
        },
        {
          q: 'What kinds of sites can I build?',
          a: 'Anything from a business website or portfolio to a landing page, blog, online store, or link-in-bio page. Each generator is tuned for a specific type of site, so the AI knows what sections and features to include.',
        },
        {
          q: 'Can I customize what the generator produces?',
          a: 'Absolutely. After the AI generates your site, you can edit every element\u2014text, images, colors, layout, sections\u2014using Strikingly\u2019s drag-and-drop editor. Think of the generated site as a strong first draft you can refine.',
        },
        {
          q: 'Do generated sites work on mobile?',
          a: 'Yes. Every site produced by our generators is fully responsive out of the box. The layouts adapt to phones, tablets, and desktops without any extra work on your part.',
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      copyright: `\u00A9 ${new Date().getFullYear()} Strikingly. All rights reserved.`,
    },
  },
}
