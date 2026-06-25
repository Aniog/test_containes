const strings = {
  en: {
    siteTitle: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
    breadcrumb: { home: 'Strikingly', current: 'AI Generators' },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      sub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      ctaPrimary: "START BUILDING — IT'S FREE",
      ctaSecondary: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      sub: 'A few common starting points.',
    },
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      sub: "Sixty-plus generators, organized by what you're building.",
      searchPlaceholder: 'Search generators...',
      showAll: 'SHOW ALL',
      showLess: 'SHOW LESS',
      generators: 'GENERATORS',
      matchCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
      noResults: "No generators match your search.",
      noResultsCta: "Can't find it? Start with our AI builder.",
      clearSearch: 'Clear search',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        { title: 'PICK A GENERATOR', body: 'Browse by category or search to find one that fits your goal.' },
        { title: 'DESCRIBE YOUR SITE', body: 'Tell our AI builder about your business in a sentence or two.' },
        { title: 'GENERATE AND PUBLISH', body: 'Get a fully built site in seconds. Customize anything, then go live.' },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      items: [
        { title: 'LIVE IN SECONDS', body: 'Describe your site, we build it. No setup, no learning curve.' },
        { title: 'MOBILE BY DEFAULT', body: 'Every generator produces responsive sites that work on any device.' },
        { title: 'FREE TO START', body: 'Generate, customize, and publish without a credit card.' },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          q: 'WHAT IS AN AI SITE GENERATOR?',
          a: 'An AI site generator is a tool that creates a complete website based on a short description you provide. Instead of choosing a template and filling in content manually, you describe your business or project in a sentence or two, and the AI builds a fully designed site with layout, copy, and images tailored to your needs. It combines the speed of a template with the customization of a bespoke design.',
        },
        {
          q: 'HOW IS A GENERATOR DIFFERENT FROM A TEMPLATE?',
          a: 'A template is a fixed starting point that you modify by replacing placeholder content. A generator creates something new each time based on your input. Two people using the same generator will get different sites because the AI adapts to what each person describes. You still get a professional structure, but the content, tone, and layout choices are personalized from the start.',
        },
        {
          q: 'ARE THESE GENERATORS FREE TO USE?',
          a: 'Yes. You can generate, preview, and customize your site without paying anything or entering a credit card. Strikingly offers free plans that include hosting and a Strikingly subdomain. Premium features like custom domains, advanced analytics, and e-commerce tools are available on paid plans if you need them later.',
        },
        {
          q: 'WHAT KINDS OF SITES CAN I BUILD?',
          a: "Anything from a personal portfolio or blog to a business website, online store, landing page, or link-in-bio page. Our generators cover dozens of industries and use cases including restaurants, photographers, consultants, wedding couples, fitness coaches, and more. If you don't see a generator for your exact niche, the general AI site builder can handle virtually any description.",
        },
        {
          q: 'CAN I CUSTOMIZE WHAT THE GENERATOR PRODUCES?',
          a: 'Absolutely. The generated site is a starting point, not a final product. After generation, you can edit every element: change text, swap images, rearrange sections, adjust colors and fonts, add new pages, or connect integrations. The editor is visual and drag-and-drop, so no coding is required.',
        },
        {
          q: 'DO GENERATED SITES WORK ON MOBILE?',
          a: 'Yes. Every site produced by our generators is responsive by default. The AI builds with mobile layouts in mind from the start, so your site looks great on phones, tablets, and desktops without any extra work on your part.',
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      product: { title: 'PRODUCT', links: [{ label: 'Templates', href: '/templates' }, { label: 'Pricing', href: '/pricing' }, { label: 'AI Site Builder', href: '/s/ai_site_builder' }] },
      company: { title: 'COMPANY', links: [{ label: 'About', href: '/about' }, { label: 'Blog', href: '/blog' }, { label: 'Support', href: '/support' }] },
      resources: { title: 'RESOURCES', links: [{ label: 'Help Center', href: '/support' }, { label: 'Blog', href: '/blog' }] },
      legal: { title: 'LEGAL', links: [{ label: 'Terms of Service', href: '/terms' }, { label: 'Privacy Policy', href: '/privacy' }] },
      copyright: '© 2026 Strikingly. All rights reserved.',
    },
  },
};

export default strings;
