const strings = {
  en: {
    brand: {
      name: 'Strikingly',
      logoText: 'strikingly AI',
    },
    breadcrumb: {
      home: 'Strikingly',
      homeUrl: '/',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      subheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
      ctaPrimary: 'START BUILDING \u2014 IT\u2019S FREE',
      ctaPrimaryUrl: '/s/ai_site_builder',
      ctaSecondary: 'BROWSE GENERATORS',
      ctaSecondaryUrl: '#all-generators',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      subheading: 'A few common starting points.',
    },
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
      subheading: 'Jump to the section that fits what you need.',
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      subheading: 'Sixty-plus generators, organized by what you\'re building.',
      searchPlaceholder: 'Search generators...',
      showAllLabel: (count) => `Show all ${count} generators`,
      hideLabel: 'Show fewer',
      resultCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match${n !== 1 ? '' : 'es'}`,
      emptyHeading: 'No generators found',
      emptySubtext: 'Can\'t find it? Start with our AI builder.',
      emptyCtaUrl: '/s/ai_site_builder',
      emptyCtaText: 'START WITH AI BUILDER',
      clearSearch: 'Clear search',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        {
          number: 1,
          title: 'PICK A GENERATOR',
          description: 'Browse by category or search to find one that fits your goal.',
        },
        {
          number: 2,
          title: 'DESCRIBE YOUR SITE',
          description: 'Tell our AI builder about your business in a sentence or two.',
        },
        {
          number: 3,
          title: 'GENERATE AND PUBLISH',
          description: 'Get a fully built site in seconds. Customize anything, then go live.',
        },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      items: [
        {
          title: 'LIVE IN SECONDS',
          description: 'Describe your site, we build it. No setup, no learning curve.',
        },
        {
          title: 'MOBILE BY DEFAULT',
          description: 'Every generator produces responsive sites that work on any device.',
        },
        {
          title: 'FREE TO START',
          description: 'Generate, customize, and publish without a credit card.',
        },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          question: 'What is an AI site generator?',
          answer: 'An AI site generator is a tool that uses artificial intelligence to build a complete website for you based on a short description of your business, project, or idea. Instead of picking a template and manually editing every section, you simply describe what you need and the generator produces a finished site with layout, copy, and images tailored to your input.',
          answer2: 'Strikingly\'s AI generators are purpose-built: each one is optimized for a specific site type\u2014whether that\'s a portfolio, an online store, a blog, or a landing page\u2014so the output is more relevant than a one-size-fits-all approach.',
        },
        {
          question: 'How is a generator different from a template?',
          answer: 'A template gives you a pre-designed layout that you fill in yourself. A generator, by contrast, produces a fully populated site from scratch. You start with a description, not a blank canvas. The AI writes the text, arranges the sections, and picks visuals that match your purpose.',
          answer2: 'You can still customize everything the generator produces, but the heavy lifting of structure and content is already done for you.',
        },
        {
          question: 'Are these generators free to use?',
          answer: 'Yes. Every generator on this page is free to try. You can generate a site, preview it, and publish it on a free Strikingly subdomain without entering a credit card. If you want a custom domain, advanced analytics, or premium features, paid plans are available\u2014but getting started costs nothing.',
        },
        {
          question: 'What kinds of sites can I build?',
          answer: 'The generators cover six broad categories: general websites for businesses and personal projects, single-page landing pages built for conversions, portfolios for creatives and freelancers, blogs with built-in SEO foundations, online stores with payment processing, and link-in-bio pages for social media creators.',
          answer2: 'Within each category, you\'ll find generators tailored to specific industries and demographics\u2014restaurants, photographers, yoga instructors, wedding couples, and many more.',
        },
        {
          question: 'Can I customize what the generator produces?',
          answer: 'Absolutely. The generated site is a starting point, not a final product. You can edit every section of text, swap images, change colors and fonts, rearrange or remove sections, and add new pages. The Strikingly editor gives you full visual control without requiring any code.',
        },
        {
          question: 'Do generated sites work on mobile?',
          answer: 'Yes. Every site built with a Strikingly generator is responsive by default. The layout automatically adapts to phones, tablets, and desktops so visitors get a clean experience on any screen size. You don\'t need to build a separate mobile version.',
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      button: 'START WITH AI BUILDER',
      buttonUrl: '/s/ai_site_builder',
    },
    footer: {
      columns: [
        {
          title: 'Product',
          links: [
            { text: 'AI Site Builder', url: '/s/ai_site_builder' },
            { text: 'Templates', url: '/templates' },
            { text: 'Pricing', url: '/pricing' },
            { text: 'Features', url: '/about' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { text: 'Blog', url: '/blog' },
            { text: 'Support', url: '/support' },
            { text: 'Help Center', url: '/support' },
            { text: 'Tutorials', url: '/blog' },
          ],
        },
        {
          title: 'Company',
          links: [
            { text: 'About', url: '/about' },
            { text: 'Careers', url: '/about' },
            { text: 'Contact', url: '/support' },
            { text: 'Press', url: '/about' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { text: 'Terms of Service', url: '/terms' },
            { text: 'Privacy Policy', url: '/privacy' },
            { text: 'Cookie Policy', url: '/privacy' },
          ],
        },
      ],
      copyright: `\u00A9 ${new Date().getFullYear()} Strikingly. All rights reserved.`,
    },
  },
};

export default strings;
