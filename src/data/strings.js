export const strings = {
  en: {
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
      searchLabel: 'Search generators',
      resultCount: (count) => `${count} generators match`,
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
      items: [
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
          answer: 'An AI site generator is a tool that creates a complete website based on a short description you provide. Instead of starting from a blank page or choosing a template, you describe your business or project in a sentence or two, and the AI builds a fully designed site with real content, images, and layout. You can then customize anything before publishing.',
        },
        {
          question: 'How is a generator different from a template?',
          answer: 'A template is a pre-made design that you fill in with your own content. A generator creates a unique site from scratch based on your specific description. Templates give you a starting layout; generators give you a starting site that already reflects your business, industry, and goals. The result is more personalized and requires less manual editing.',
        },
        {
          question: 'Are these generators free to use?',
          answer: 'Yes. You can generate, customize, and publish a site without entering a credit card. Strikingly offers free plans that include hosting and a Strikingly subdomain. Premium features like custom domains, advanced analytics, and e-commerce tools are available on paid plans if you need them later.',
        },
        {
          question: 'What kinds of sites can I build?',
          answer: 'You can build business websites, portfolios, landing pages, blogs, online stores, link-in-bio pages, event sites, restaurant pages, and more. Our generators cover dozens of industries and use cases. If you don\'t see an exact match, the general AI site builder can handle virtually any type of site.',
        },
        {
          question: 'Can I customize what the generator produces?',
          answer: 'Absolutely. The generated site is a starting point, not a final product. You can edit text, swap images, rearrange sections, change colors and fonts, add new pages, and connect your own domain. The editor is visual and drag-and-drop, so no coding is required.',
        },
        {
          question: 'Do generated sites work on mobile?',
          answer: 'Yes. Every site produced by our generators is responsive by default. The layout automatically adapts to phones, tablets, and desktops. You can preview the mobile version in the editor before publishing to make sure everything looks right on smaller screens.',
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
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'AI Site Builder', href: '/s/ai_site_builder' },
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
            { label: 'Help Center', href: '/support' },
            { label: 'Blog', href: '/blog' },
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
