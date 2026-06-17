export const strings = {
  en: {
    breadcrumb: {
      root: 'Strikingly',
      current: 'AI Generators'
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      subheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
      primaryCTA: 'START BUILDING - IT\'S FREE',
      secondaryCTA: 'BROWSE GENERATORS'
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      subheading: 'A few common starting points.'
    },
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY'
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      subheading: 'Sixty-plus generators, organized by what you\'re building.',
      searchPlaceholder: 'Search generators...',
      searchLabel: 'Search generators',
      matchCount: (count) => `${count} generators match`,
      noResults: 'Can\'t find it? Start with our AI builder.',
      clearSearch: 'Clear search',
      showAll: (count) => `Show all ${count} generators`,
      showLess: 'Show less'
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        {
          title: 'PICK A GENERATOR',
          description: 'Browse by category or search to find one that fits your goal.'
        },
        {
          title: 'DESCRIBE YOUR SITE',
          description: 'Tell our AI builder about your business in a sentence or two.'
        },
        {
          title: 'GENERATE AND PUBLISH',
          description: 'Get a fully built site in seconds. Customize anything, then go live.'
        }
      ]
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      features: [
        {
          title: 'LIVE IN SECONDS',
          description: 'Describe your site, we build it. No setup, no learning curve.'
        },
        {
          title: 'MOBILE BY DEFAULT',
          description: 'Every generator produces responsive sites that work on any device.'
        },
        {
          title: 'FREE TO START',
          description: 'Generate, customize, and publish without a credit card.'
        }
      ]
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      questions: [
        {
          q: 'What is an AI site generator?',
          a: 'An AI site generator is a sophisticated tool that uses artificial intelligence to build a functional website based on your description. Instead of starting from a blank template and manually dragging elements, you simply tell the AI what your site is about, and it generates the layout, content, and design for you in seconds.'
        },
        {
          q: 'How is a generator different from a template?',
          a: 'Templates are pre-designed static structures that you must manually populate with content. A generator, on the other hand, is dynamic. It creates a custom structure and writes initial copy specifically for your business or project. While templates give you a head start, generators do the heavy lifting of building the first version of your site.'
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes, you can use any of our generators to create and customize your site for free. You only need a Strikingly account, and no credit card is required to start building. We believe everyone should have the power to create a beautiful presence online without upfront costs.'
        },
        {
          q: 'What kinds of sites can I build?',
          a: 'You can build almost any type of website, including personal portfolios, business sites, landing pages, blogs, online stores, and link-in-bio pages. Our AI builder is flexible enough to handle various industries and use cases, from local restaurants to digital artists.'
        },
        {
          q: 'Can I customize what the generator produces?',
          a: 'Absolutely. The AI generator creates the first version, but you have full control over the result. You can change colors, fonts, images, and text through our intuitive editor. Think of the generated site as a high-quality foundation that you can tailor to your exact needs.'
        },
        {
          q: 'Do generated sites work on mobile?',
          a: 'Yes, every site created with our AI generators is fully responsive by default. Your site will look great and function perfectly on desktops, tablets, and smartphones without you having to write a single line of code or adjust any mobile-specific settings manually.'
        }
      ]
    },
    closingCTA: {
      headline: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      button: 'START WITH AI BUILDER'
    },
    footer: {
      links: [
        { title: 'Product', items: [{ label: 'About', href: '/about' }, { label: 'Pricing', href: '/pricing' }, { label: 'Templates', href: '/templates' }] },
        { title: 'Resources', items: [{ label: 'Support', href: '/support' }, { label: 'Blog', href: '/blog' }] },
        { title: 'Legal', items: [{ label: 'Terms', href: '/terms' }, { label: 'Privacy', href: '/privacy' }] }
      ],
      copyright: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`
    }
  }
};
