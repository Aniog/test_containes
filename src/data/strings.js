export const strings = {
  en: {
    topBar: {
      logo: 'strikingly AI',
    },
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      subheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
      ctaPrimary: 'START BUILDING - IT\'S FREE',
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
      matchCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      cantFind: 'Can\'t find it? Start with our AI builder.',
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
          question: 'What is an AI site generator?',
          answer: 'An AI site generator is a tool that uses artificial intelligence to create a complete website based on a short description you provide. Instead of starting from a blank page or choosing a template, you describe what your site is for and the AI builds the structure, layout, and content for you in seconds. You can then customize anything before publishing.',
        },
        {
          question: 'How is a generator different from a template?',
          answer: 'A template is a fixed starting design that you fill in with your own content. Every user of that template starts with the same layout. A generator, on the other hand, creates a unique site tailored to your specific description. The AI considers your industry, goals, and content needs to produce something custom rather than generic.',
        },
        {
          question: 'Are these generators free to use?',
          answer: 'Yes, you can generate and preview your site completely free. Strikingly offers a free plan that lets you publish a basic site at no cost. Premium features like custom domains, additional pages, and e-commerce tools are available on paid plans, but you can start building and see results without entering a credit card.',
        },
        {
          question: 'What kinds of sites can I build?',
          answer: 'You can build virtually any type of website: business sites, portfolios, online stores, blogs, landing pages, event pages, restaurant sites, personal pages, link-in-bio pages, and more. Our generators are organized by category and industry so you can find the right starting point for your specific needs.',
        },
        {
          question: 'Can I customize what the generator produces?',
          answer: 'Absolutely. The generated site is a starting point, not a final product. After generation, you have full control to edit text, swap images, rearrange sections, change colors and fonts, add new pages, and integrate tools like forms, stores, or analytics. Think of the generator as giving you a strong first draft that you refine.',
        },
        {
          question: 'Do generated sites work on mobile?',
          answer: 'Yes, every site produced by our generators is fully responsive by default. The layouts automatically adapt to phones, tablets, and desktops. You don\'t need to build a separate mobile version. The AI considers mobile usability during generation so your site looks great on any screen size from day one.',
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
      columns: [
        {
          title: 'Product',
          links: [
            { text: 'Templates', href: '/templates' },
            { text: 'Pricing', href: '/pricing' },
            { text: 'AI Site Builder', href: '/s/ai_site_builder' },
          ],
        },
        {
          title: 'Company',
          links: [
            { text: 'About', href: '/about' },
            { text: 'Blog', href: '/blog' },
            { text: 'Support', href: '/support' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { text: 'Help Center', href: '/support' },
            { text: 'Blog', href: '/blog' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { text: 'Terms of Service', href: '/terms' },
            { text: 'Privacy Policy', href: '/privacy' },
          ],
        },
      ],
    },
  },
}
