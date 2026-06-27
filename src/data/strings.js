const strings = {
  en: {
    siteTitle: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
    brandName: 'strikingly AI',

    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',

    // Hero
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSub: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    heroCtaPrimary: 'START BUILDING \u2014 IT\u2019S FREE',
    heroCtaSecondary: 'BROWSE GENERATORS',

    // Featured
    featuredHeading: 'FEATURED GENERATORS',
    featuredSub: 'A few common starting points.',

    // Category
    categoryHeading: 'BROWSE BY CATEGORY',

    // Directory
    directoryHeading: 'ALL GENERATORS',
    directorySub: 'Sixty-plus generators, organized by what you\u2019re building.',
    searchPlaceholder: 'Search generators\u2026',
    searchAriaLabel: 'Search generators',
    matchCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match${n !== 1 ? '' : 'es'}`,
    noResultsHeading: 'No generators found',
    noResultsCta: 'Can\u2019t find it? Start with our AI builder.',
    showAll: (n) => `Show all ${n} generators`,
    collapse: (n) => `Show fewer`,

    // How It Works
    howHeading: 'HOW IT WORKS',
    howSteps: [
      { title: 'PICK A GENERATOR', desc: 'Browse by category or search to find one that fits your goal.' },
      { title: 'DESCRIBE YOUR SITE', desc: 'Tell our AI builder about your business in a sentence or two.' },
      { title: 'GENERATE AND PUBLISH', desc: 'Get a fully built site in seconds. Customize anything, then go live.' },
    ],

    // Why Strikingly
    whyHeading: 'WHY STRIKINGLY',
    whyReasons: [
      { title: 'LIVE IN SECONDS', desc: 'Describe your site, we build it. No setup, no learning curve.' },
      { title: 'MOBILE BY DEFAULT', desc: 'Every generator produces responsive sites that work on any device.' },
      { title: 'FREE TO START', desc: 'Generate, customize, and publish without a credit card.' },
    ],

    // FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faqItems: [
      {
        q: 'What is an AI site generator?',
        a: 'An AI site generator is a tool that uses artificial intelligence to create a complete website from a short text description. You describe your business, project, or idea, and the generator builds a multi-section site with layout, copy, and images\u2014all in seconds. It replaces hours of manual design and coding with a single prompt.',
      },
      {
        q: 'How is a generator different from a template?',
        a: 'A template gives you a fixed layout that you fill in yourself. A generator builds a site from scratch based on what you tell it. The result is tailored to your specific content, not a generic starting point. You still get full editing control afterward, but the initial site is unique to your description.',
      },
      {
        q: 'Are these generators free to use?',
        a: 'Yes. Every generator on this page is free to try. You can generate a site, preview it, and publish it on a Strikingly subdomain at no cost. Paid plans are available if you need a custom domain, advanced features, or higher storage limits, but the generators themselves do not require a credit card.',
      },
      {
        q: 'What kinds of sites can I build?',
        a: 'The generators cover a wide range of use cases: business sites, portfolios, landing pages, blogs, online stores, link-in-bio pages, event sites, and more. Each generator is optimized for a specific type of site, so the output is well-structured for that purpose. If you do not see a match, the general AI Website Generator handles any goal.',
      },
      {
        q: 'Can I customize what the generator produces?',
        a: 'Absolutely. After generation, you can edit every section, swap images, change fonts and colors, add new pages, and rearrange layouts. The generator gives you a polished starting point; the editor lets you fine-tune it to match your exact vision. No coding required.',
      },
      {
        q: 'Do generated sites work on mobile?',
        a: 'Yes. Every site created by a Strikingly generator is fully responsive. The layout, images, and text automatically adapt to phones, tablets, and desktops. You do not need to build a separate mobile version\u2014it just works across all screen sizes.',
      },
    ],

    // Closing CTA
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',

    // Footer
    footerProduct: 'Product',
    footerCompany: 'Company',
    footerResources: 'Resources',
    footerLegal: 'Legal',
    footerCopyright: `\u00A9 ${new Date().getFullYear()} Strikingly, Inc.`,
    footerLinks: {
      product: [
        { label: 'Pricing', href: '/pricing' },
        { label: 'Templates', href: '/templates' },
        { label: 'Features', href: '/about' },
      ],
      company: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Support', href: '/support' },
      ],
      resources: [
        { label: 'Help Center', href: '/support' },
        { label: 'Blog', href: '/blog' },
      ],
      legal: [
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
      ],
    },
  },
};

export default strings;
