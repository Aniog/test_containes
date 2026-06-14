// All user-visible strings for the /generators hub page.
// Adding strings.es, strings.ja, etc. is the only change needed for new locales.

export const strings = {
  en: {
    site: {
      name: 'Strikingly',
      logoMark: 'strikingly',
      logoSuffix: 'AI',
    },
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    topBar: {
      ariaLabel: 'Strikingly home',
    },
    hero: {
      line1: 'BUILD ANY KIND OF SITE',
      line2: 'WITH AI, IN AN INSTANT',
      sub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      primaryCta: "START BUILDING - IT'S FREE",
      secondaryCta: 'BROWSE GENERATORS',
      illustrationAlt: 'Stylized line-art illustration of a website mockup',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      sub: 'A few common starting points.',
      cardLabelPrefix: 'Open generator:',
    },
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
      sub: 'Jump straight to a category of generators.',
    },
    categories: {
      websites: {
        name: 'Websites',
        description: 'AI-built business and personal sites for any goal.',
      },
      'landing-pages': {
        name: 'Landing Pages',
        description: 'Single-page sites built to convert visitors fast.',
      },
      portfolios: {
        name: 'Portfolios',
        description: 'Showcase your work with a clean, focused site.',
      },
      blogs: {
        name: 'Blogs',
        description: 'Publish-ready blogs with built-in SEO basics.',
      },
      stores: {
        name: 'Online Stores',
        description: 'Sell products online with payments built in.',
      },
      'link-in-bio': {
        name: 'Link-in-Bio',
        description: 'One link, all your places. Made for creators.',
      },
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      sub: 'Sixty-plus generators, organized by what you\u2019re building.',
      searchLabel: 'Search generators',
      searchPlaceholder: 'Search generators...',
      matchCountSingular: '1 generator matches',
      matchCountPlural: (n) => `${n} generators match`,
      emptyTitle: 'No generators match your search.',
      emptyBody: 'Try a different word, or clear the search to see everything.',
      clearSearch: 'Clear search',
      emptyBuilderLink: "Can\u2019t find it? Start with our AI builder.",
      showAll: (n) => `Show all ${n} generators`,
      showLess: 'Show fewer',
      resultCountAria: (n) => `${n} matching generators`,
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      sub: 'From idea to live site in three steps.',
      step1Title: 'PICK A GENERATOR',
      step1Body: 'Browse by category or search to find one that fits your goal.',
      step2Title: 'DESCRIBE YOUR SITE',
      step2Body: 'Tell our AI builder about your business in a sentence or two.',
      step3Title: 'GENERATE AND PUBLISH',
      step3Body: 'Get a fully built site in seconds. Customize anything, then go live.',
    },
    why: {
      heading: 'WHY STRIKINGLY',
      sub: 'Built for speed, made for everyone.',
      claim1: 'LIVE IN SECONDS',
      claim1Body: 'Describe your site, we build it. No setup, no learning curve.',
      claim2: 'MOBILE BY DEFAULT',
      claim2Body: 'Every generator produces responsive sites that work on any device.',
      claim3: 'FREE TO START',
      claim3Body: 'Generate, customize, and publish without a credit card.',
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      sub: 'Quick answers before you start.',
      items: [
        {
          q: 'What is an AI site generator?',
          a: 'An AI site generator turns a short description of your business or idea into a complete, ready-to-edit website. You choose a generator that matches what you want to build \u2014 a portfolio, a store, a blog, a one-page launch site \u2014 then answer a few prompts. Strikingly\u2019s AI assembles the layout, copy, and visuals for you, and you can tweak anything before publishing. The result is a real site you own, not a template you have to wrestle with.',
        },
        {
          q: 'How is a generator different from a template?',
          a: 'A template is a fixed design you drop your content into. A generator is a starting point that adapts to what you tell it. Two photographers using the same portfolio generator will get different layouts, sections, and copy suggestions, because the AI reacts to their description. You can still rearrange and customize anything; the generator just removes the blank-page problem.',
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes. You can generate, customize, and publish a site on Strikingly without a credit card. The free plan includes a Strikingly domain, hosting, and all the core editing tools. If you decide you want a custom domain, advanced analytics, or e-commerce features down the line, those are optional paid upgrades.',
        },
        {
          q: 'What kinds of sites can I build?',
          a: 'Everything from a single landing page to a full online store, plus portfolios, blogs, link-in-bio pages, wedding sites, restaurant menus, and more. The generators are organized by category so you can find one that matches the kind of site you actually need. If you don\u2019t see a perfect fit, the AI site builder at /s/ai_site_builder will build something custom from a free-text description.',
        },
        {
          q: 'Can I customize what the generator produces?',
          a: 'Completely. Every generator output is a regular Strikingly site, so you can edit text, swap images, rearrange sections, change colors, add a blog or store, and connect a custom domain. Think of the generator as the fastest way to a strong first draft; the editor is the same one we use for any Strikingly site.',
        },
        {
          q: 'Do generated sites work on mobile?',
          a: 'Yes. Every site Strikingly produces is responsive by default and optimized for phones, tablets, and desktops. The AI builder prioritizes a clean mobile layout, and you can preview and adjust each breakpoint in the editor before you publish.',
        },
      ],
    },
    closing: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      tagline: 'Build a beautiful website in minutes, with AI.',
      columns: [
        {
          title: 'Product',
          links: [
            { label: 'AI Site Builder', href: '/s/ai_site_builder' },
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Features', href: '/features' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'Careers', href: '/careers' },
            { label: 'Press', href: '/press' },
          ],
        },
        {
          title: 'Support',
          links: [
            { label: 'Help Center', href: '/support' },
            { label: 'Contact', href: '/support' },
            { label: 'Status', href: '/status' },
            { label: 'Community', href: '/community' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Cookie Policy', href: '/privacy' },
            { label: 'Acceptable Use', href: '/terms' },
          ],
        },
      ],
      copyright: '\u00A9 ' + new Date().getFullYear() + ' Strikingly. All rights reserved.',
    },
  },
};

export function t(locale = 'en') {
  return strings[locale] || strings.en;
}
