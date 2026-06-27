const strings = {
  en: {
    siteName: 'Strikingly',
    appName: 'Strikingly AI',
    topBar: {
      logo: 'strikingly AI',
    },
    breadcrumb: {
      home: 'Strikingly',
      homeUrl: '/',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      subheadline:
        'Browse the right generator for what you\u2019re building, or jump straight into our AI site builder.',
      ctaPrimary: 'START BUILDING \u2013 IT\u2019S FREE',
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
      subheading: 'Find the right starting point for your project.',
      categories: [
        {
          slug: 'websites',
          name: 'WEBSITES',
          description: 'AI-built business and personal sites for any goal.',
          anchor: '#websites',
        },
        {
          slug: 'landing-pages',
          name: 'LANDING PAGES',
          description: 'Single-page sites built to convert visitors fast.',
          anchor: '#landing-pages',
        },
        {
          slug: 'portfolios',
          name: 'PORTFOLIOS',
          description: 'Showcase your work with a clean, focused site.',
          anchor: '#portfolios',
        },
        {
          slug: 'blogs',
          name: 'BLOGS',
          description: 'Publish-ready blogs with built-in SEO basics.',
          anchor: '#blogs',
        },
        {
          slug: 'stores',
          name: 'ONLINE STORES',
          description: 'Sell products online with payments built in.',
          anchor: '#stores',
        },
        {
          slug: 'link-in-bio',
          name: 'LINK-IN-BIO',
          description: 'One link, all your places. Made for creators.',
          anchor: '#link-in-bio',
        },
      ],
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      subheading:
        'Sixty-plus generators, organized by what you\u2019re building.',
      searchPlaceholder: 'Search generators\u2026',
      searchAriaLabel: 'Search generators',
      matchText: ' generators match',
      emptyTitle: 'No generators found',
      emptyCta: 'Clear search',
      emptyFallback: "Can\u2019t find it? Start with our AI builder.",
      emptyFallbackUrl: '/s/ai_site_builder',
      showAllPrefix: 'Show all ',
      showAllSuffix: ' generators',
      collapsePrefix: 'Show less',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        {
          number: 1,
          title: 'PICK A GENERATOR',
          description:
            'Browse by category or search to find one that fits your goal.',
        },
        {
          number: 2,
          title: 'DESCRIBE YOUR SITE',
          description:
            'Tell our AI builder about your business in a sentence or two.',
        },
        {
          number: 3,
          title: 'GENERATE AND PUBLISH',
          description:
            'Get a fully built site in seconds. Customize anything, then go live.',
        },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      items: [
        {
          icon: 'zap',
          title: 'LIVE IN SECONDS',
          description:
            'Describe your site, we build it. No setup, no learning curve.',
        },
        {
          icon: 'smartphone',
          title: 'MOBILE BY DEFAULT',
          description:
            'Every generator produces responsive sites that work on any device.',
        },
        {
          icon: 'credit-card',
          title: 'FREE TO START',
          description:
            'Generate, customize, and publish without a credit card.',
        },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          question: 'What is an AI site generator?',
          answer:
            'An AI site generator is a tool that uses artificial intelligence to build a complete website from a short description you provide. Instead of dragging and dropping blocks or writing code, you describe your business or project in a sentence or two, and the generator creates a polished, ready-to-edit site with layout, copy, and images already in place. Strikingly\u2019s AI generators are designed to get you from idea to live page in under a minute.',
        },
        {
          question: 'How is a generator different from a template?',
          answer:
            'A template is a fixed starting point\u2014you choose a design and then manually fill in your own content. A generator flips that process: you start with your content and the AI builds a design around it. The result is a site tailored to your specific business, goal, or industry rather than a one-size-fits-all layout you have to customize from scratch.',
        },
        {
          question: 'Are these generators free to use?',
          answer:
            'Yes. You can generate a site, preview it, and publish it on a free Strikingly subdomain at no cost. If you later want a custom domain, advanced features, or additional pages, paid plans are available\u2014but there is no credit card required to start, and the free plan is generous enough for most personal and small-business sites.',
        },
        {
          question: 'What kinds of sites can I build?',
          answer:
            'Strikingly\u2019s AI generators cover a wide range of use cases: business websites, landing pages, online portfolios, blogs, online stores, link-in-bio pages, wedding sites, restaurant pages, and more. Each generator is optimized for its category, so the layout, sections, and default content match the conventions visitors expect for that type of site.',
        },
        {
          question: 'Can I customize what the generator produces?',
          answer:
            'Absolutely. The generated site is a starting point, not a final product. You can change colors, fonts, images, text, and section order using Strikingly\u2019s visual editor. You can also add or remove sections, connect a custom domain, set up forms, and integrate third-party tools. The generator gives you a head start; the editor lets you make it yours.',
        },
        {
          question: 'Do generated sites work on mobile?',
          answer:
            'Yes. Every site created with a Strikingly AI generator is fully responsive out of the box. That means the layout automatically adapts to phones, tablets, and desktops without any extra work on your part. Mobile optimization is built into the generator, not something you have to configure separately.',
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      sub:
        'Pick a generator above, or jump straight into our AI builder.',
      button: 'START WITH AI BUILDER',
      buttonUrl: '/s/ai_site_builder',
    },
    footer: {
      columns: [
        {
          title: 'Product',
          links: [
            { label: 'Templates', url: '/templates' },
            { label: 'Pricing', url: '/pricing' },
            { label: 'Features', url: '/about' },
            { label: 'Blog', url: '/blog' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About', url: '/about' },
            { label: 'Careers', url: '/about' },
            { label: 'Press', url: '/about' },
            { label: 'Contact', url: '/support' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'Help Center', url: '/support' },
            { label: 'Community', url: '/support' },
            { label: 'Developers', url: '/about' },
            { label: 'Status', url: '/about' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Terms', url: '/terms' },
            { label: 'Privacy', url: '/privacy' },
          ],
        },
      ],
      copyright: '\u00a9 {year} Strikingly. All rights reserved.',
    },
    meta: {
      title:
        'AI Website Generators \u2013 Build Any Site in Seconds | Strikingly',
      description:
        'Browse Strikingly\u2019s AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.',
      ogTitle:
        'AI Website Generators \u2013 Build Any Site in Seconds | Strikingly',
      ogDescription:
        'Browse Strikingly\u2019s AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.',
      canonical: 'https://www.strikingly.com/generators',
      ogUrl: 'https://www.strikingly.com/generators',
    },
  },
}

export default strings
