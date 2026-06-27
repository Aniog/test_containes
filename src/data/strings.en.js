const strings = {
  // Top bar
  logoAlt: 'Strikingly AI',

  // Breadcrumb
  breadcrumbHome: 'Strikingly',
  breadcrumbCurrent: 'AI Generators',

  // Hero
  heroH1Line1: 'BUILD ANY KIND OF SITE',
  heroH1Line2: 'WITH AI, IN AN INSTANT',
  heroSubheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
  heroPrimaryCTA: "START BUILDING - IT'S FREE",
  heroSecondaryCTA: 'BROWSE GENERATORS',

  // Featured Generators
  featuredHeading: 'FEATURED GENERATORS',
  featuredSubheading: 'A few common starting points.',

  // Browse by Category
  browseHeading: 'BROWSE BY CATEGORY',
  browseSubheading: 'Find the right tool for what you\'re building.',

  // All Generators
  allHeading: 'ALL GENERATORS',
  allSubheading: 'Sixty-plus generators, organized by what you\'re building.',
  searchPlaceholder: 'Search generators...',
  searchAriaLabel: 'Search generators',
  searchCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
  showAll: (n) => `Show all ${n} generators`,
  showLess: 'Show fewer',
  emptySearch: 'No generators match your search.',
  emptySearchCta: 'Clear search',
  emptySearchFallback: "Can't find it? Start with our AI builder.",

  // How It Works
  howHeading: 'HOW IT WORKS',
  steps: [
    { title: 'PICK A GENERATOR', body: 'Browse by category or search to find one that fits your goal.' },
    { title: 'DESCRIBE YOUR SITE', body: 'Tell our AI builder about your business in a sentence or two.' },
    { title: 'GENERATE AND PUBLISH', body: 'Get a fully built site in seconds. Customize anything, then go live.' },
  ],

  // Why Strikingly
  whyHeading: 'WHY STRIKINGLY',
  benefits: [
    { title: 'LIVE IN SECONDS', body: 'Describe your site, we build it. No setup, no learning curve.' },
    { title: 'MOBILE BY DEFAULT', body: 'Every generator produces responsive sites that work on any device.' },
    { title: 'FREE TO START', body: 'Generate, customize, and publish without a credit card.' },
  ],

  // FAQ
  faqHeading: 'FREQUENTLY ASKED QUESTIONS',
  faqs: [
    {
      q: 'What is an AI site generator?',
      a: 'An AI site generator is a tool that builds a complete website for you based on a description of what you need. Instead of picking a template and dragging elements around, you tell the generator what kind of site you want — a portfolio, a store, a blog — and describe your business or project in a sentence or two. Strikingly\'s AI then creates a fully structured, ready-to-publish site with text, images, and layout, all tailored to your description. You can publish it as-is or customize anything before going live.',
    },
    {
      q: 'How is a generator different from a template?',
      a: 'A template is a pre-designed layout that you fill in yourself — you bring the text, the images, and the structure. A generator does the filling for you. When you use a Strikingly generator, the AI builds a complete site from your description: it writes the copy, picks relevant images, and organizes the layout around your goal. Templates give you a starting shape; generators give you a finished site. You can still customize everything the generator produces, just like you would with a template.',
    },
    {
      q: 'Are these generators free to use?',
      a: 'Yes. All Strikingly generators are free to use. You can generate a site, customize it, and publish it on a Strikingly subdomain without entering a credit card. If you want to connect a custom domain, remove Strikingly branding, or access advanced features like custom code and analytics, paid plans start at a low monthly rate. But the core generator experience — building a site with AI — is free for everyone.',
    },
    {
      q: 'What kinds of sites can I build?',
      a: 'You can build almost any kind of site with Strikingly\'s generators. The most common types are business websites, portfolios, online stores, landing pages, blogs, and link-in-bio pages. Within each category, we have specialized generators tailored to specific use cases — restaurant websites, wedding sites, photography portfolios, and more. If you don\'t see a generator that matches your exact need, you can always start from our general AI site builder and describe what you want.',
    },
    {
      q: 'Can I customize what the generator produces?',
      a: 'Absolutely. The generator gives you a complete, polished starting point, but everything it produces is editable. You can change text, swap images, add or remove sections, adjust colors and fonts, and rearrange the layout using Strikingly\'s editor. Think of the generator as a fast way to get 80% of the work done, after which you can fine-tune every detail until the site feels exactly right.',
    },
    {
      q: 'Do generated sites work on mobile?',
      a: 'Yes. Every site built by a Strikingly generator is fully responsive and works on phones, tablets, and desktops right out of the box. We design all our layouts mobile-first, so your site will look great and be easy to navigate on any screen size. You can preview the mobile and tablet views in the editor before publishing.',
    },
  ],

  // Closing CTA
  closingHeading: 'READY TO BUILD?',
  closingSub: 'Pick a generator above, or jump straight into our AI builder.',
  closingCTA: 'START WITH AI BUILDER',

  // Footer
  footerLinks: [
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Templates', href: '/templates' },
    { label: 'Support', href: '/support' },
    { label: 'Blog', href: '/blog' },
    { label: 'Terms', href: '/terms' },
    { label: 'Privacy', href: '/privacy' },
  ],
  footerCopyright: '© 2026 Strikingly. All rights reserved.',
};

export default strings;