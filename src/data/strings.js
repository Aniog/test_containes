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
      features: [
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
          answer: 'An AI site generator is a tool that creates a complete, ready-to-publish website from a short text description. You tell it what your business does, who your audience is, and what you need — and it produces a fully designed site with layout, copy, and images in seconds. Unlike drag-and-drop builders, there\'s no blank canvas to start from. You get a finished starting point that you can then customize however you like.',
        },
        {
          question: 'How is a generator different from a template?',
          answer: 'A template is a fixed design that you fill in with your own content. Every user who picks the same template starts with the same layout and placeholder text. A generator, by contrast, builds a unique site for every prompt. The structure, copy, and visual choices adapt to what you describe. Two bakeries using the same generator will get two different sites because their descriptions differ.',
        },
        {
          question: 'Are these generators free to use?',
          answer: 'Yes. You can generate, preview, and customize a site without entering a credit card. Strikingly offers free publishing on a strikingly.com subdomain. If you want a custom domain, SSL, or advanced features like e-commerce, those are available on paid plans — but generating and editing is always free to start.',
        },
        {
          question: 'What kinds of sites can I build?',
          answer: 'Anything from a one-page portfolio to a full online store. The generators on this page cover business websites, landing pages, portfolios, blogs, e-commerce stores, and link-in-bio pages. Within each category you\'ll find options tailored to specific industries and use cases — restaurants, photographers, consultants, wedding couples, and many more.',
        },
        {
          question: 'Can I customize what the generator produces?',
          answer: 'Absolutely. The generated site is a starting point, not a locked file. After generation you can edit any text, swap images, rearrange sections, change colors and fonts, add new pages, or connect your own domain. The Strikingly editor gives you full control over every element.',
        },
        {
          question: 'Do generated sites work on mobile?',
          answer: 'Yes. Every site produced by our generators is responsive by default. The layout, typography, and images adapt automatically to phones, tablets, and desktops. You don\'t need to build a separate mobile version — it\'s handled for you from the moment the site is generated.',
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
      columns: [
        {
          title: 'Product',
          links: [
            { label: 'AI Site Builder', href: '/s/ai_site_builder' },
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'Support', href: '/support' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'AI Generators', href: '/generators' },
            { label: 'Help Center', href: '/support' },
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
  },
}
