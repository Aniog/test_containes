export const strings = {
  en: {
    brand: 'Strikingly AI',
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      line1: 'BUILD ANY KIND OF SITE',
      line2: 'WITH AI, IN AN INSTANT',
      sub: 'Browse the right generator for what you\u2019re building, or jump straight into our AI site builder.',
      ctaPrimary: 'START BUILDING \u2013 IT\u2019S FREE',
      ctaSecondary: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      sub: 'A few common starting points.',
    },
    categories: {
      heading: 'BROWSE BY CATEGORY',
    },
    directory: {
      heading: 'ALL GENERATORS',
      sub: 'Sixty-plus generators, organized by what you\u2019re building.',
      searchPlaceholder: 'Search generators\u2026',
      resultCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match${n === 1 ? 'es' : ''}`,
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
          a: 'An AI site generator is a tool that creates a complete website for you based on a short description of your business or goal. Instead of dragging blocks or writing code, you describe what you need and the AI builds the pages, layout, and copy automatically. You can then customize anything before publishing.',
        },
        {
          q: 'How is a generator different from a template?',
          a: 'A template gives you a pre-designed layout that you fill in manually. A generator goes further: it creates the layout, writes the content, and selects imagery based on what you tell it about your site. You start much closer to a finished product and spend less time editing.',
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes. You can generate a site, preview it, and publish it to a free Strikingly subdomain at no cost. Paid plans unlock custom domains, additional pages, and advanced features, but every generator works without a credit card.',
        },
        {
          q: 'What kinds of sites can I build?',
          a: 'The generators cover business sites, portfolios, online stores, blogs, landing pages, link-in-bio pages, wedding sites, restaurant sites, and many more. Each category includes variations for specific industries and audiences, so you can find one that matches your exact needs.',
        },
        {
          q: 'Can I customize what the generator produces?',
          a: 'Absolutely. The generated site is a starting point, not a final draft. You can change any text, swap images, adjust colors and fonts, add or remove sections, and connect your own domain. The AI gives you a head start; you keep full creative control.',
        },
        {
          q: 'Do generated sites work on mobile?',
          a: 'Yes. Every site produced by a Strikingly generator is fully responsive out of the box. Pages automatically adapt to phones, tablets, and desktops, so your visitors get a great experience on any device without extra work on your part.',
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      button: 'START WITH AI BUILDER',
    },
    footer: {
      copyright: '\u00A9 2026 Strikingly, Inc.',
      columns: [
        { heading: 'Product', links: [{ label: 'Templates', href: '/templates' }, { label: 'Pricing', href: '/pricing' }, { label: 'Features', href: '/about' }] },
        { heading: 'Company', links: [{ label: 'About', href: '/about' }, { label: 'Blog', href: '/blog' }] },
        { heading: 'Resources', links: [{ label: 'Support', href: '/support' }] },
        { heading: 'Legal', links: [{ label: 'Terms', href: '/terms' }, { label: 'Privacy', href: '/privacy' }] },
      ],
    },
  },
};
