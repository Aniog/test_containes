export const strings = {
  en: {
    meta: {
      title: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
      description:
        'Browse Strikingly\'s AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.',
    },
    topbar: {
      logoText: 'strikingly AI',
    },
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      subheadline:
        'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
      primaryCta: "START BUILDING — IT'S FREE",
      secondaryCta: 'BROWSE GENERATORS',
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
      searchLabel: 'Search generators',
      resultCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      noResultsCta: "Can't find it? Start with our AI builder.",
      showAll: (n) => `Show all ${n} generators`,
      showLess: 'Show less',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
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
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      items: [
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
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          question: 'What is an AI site generator?',
          answer:
            'An AI site generator is a tool that uses artificial intelligence to build a complete website for you based on a short description of your business or goal. Instead of dragging and dropping elements manually, you describe what you need and the AI assembles the layout, copy, and design in seconds.\n\nStrikingly\'s generators are tuned for specific use cases—portfolios, stores, landing pages, and more—so the output is already optimized for your type of site.',
        },
        {
          question: 'How is a generator different from a template?',
          answer:
            'A template is a blank starting point you fill in yourself. A generator takes your input—your business name, industry, or a short description—and produces a site with real content already in place. You still customize everything, but you start from something meaningful rather than a placeholder.\n\nGenerators also apply AI-driven layout decisions, so the structure is chosen to suit your goal, not just to look generic.',
        },
        {
          question: 'Are these generators free to use?',
          answer:
            'Yes. You can generate, preview, and customize any site on Strikingly without a credit card. Publishing your site on a Strikingly subdomain is also free. Paid plans unlock a custom domain, additional storage, and advanced features like e-commerce and analytics.',
        },
        {
          question: 'What kinds of sites can I build?',
          answer:
            'Strikingly\'s generators cover websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Within each category there are generators tuned for specific industries and goals—photographers, restaurants, yoga instructors, startups, creators, and many more.\n\nIf you don\'t see a generator for your exact use case, the AI Site Builder can handle any brief you give it.',
        },
        {
          question: 'Can I customize what the generator produces?',
          answer:
            'Absolutely. Every generated site opens in Strikingly\'s visual editor, where you can change text, swap images, adjust colors, reorder sections, and add or remove blocks. The generator gives you a strong starting point; you own every detail from there.',
        },
        {
          question: 'Do generated sites work on mobile?',
          answer:
            'Yes. Every site Strikingly generates is fully responsive by default. The layout adapts automatically to phones, tablets, and desktops without any extra work on your part. You can preview the mobile view in the editor before you publish.',
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      logoText: 'strikingly AI',
      copyright: `© ${new Date().getFullYear()} Strikingly, Inc. All rights reserved.`,
      columns: [
        {
          heading: 'Product',
          links: [
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'AI Builder', href: '/s/ai_site_builder' },
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
  },
};

export default strings.en;
