// Centralized data for the /generators hub page.
// All copy is keyed under strings.en so adding strings.es / strings.ja
// is a one-file change.

export const strings = {
  en: {
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      sub:
        "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      ctaPrimary: "START BUILDING - IT'S FREE",
      ctaSecondary: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      sub: 'A few common starting points.',
    },
    categories: {
      heading: 'BROWSE BY CATEGORY',
      sub: 'Pick the kind of site you want to build.',
    },
    directory: {
      heading: 'ALL GENERATORS',
      sub: 'Sixty-plus generators, organized by what you\u2019re building.',
      searchPlaceholder: 'Search generators...',
      searchAriaLabel: 'Search generators',
      showAll: 'Show all',
      showLess: 'Show less',
      empty: {
        title: 'No matches found',
        body: 'Try a different keyword, or start fresh.',
        clear: 'Clear search',
        builderLink: "Can't find it? Start with our AI builder.",
      },
    },
    how: {
      heading: 'HOW IT WORKS',
      sub: 'From idea to live site in three short steps.',
      steps: [
        {
          title: 'PICK A GENERATOR',
          body: 'Browse by category or search to find one that fits your goal.',
        },
        {
          title: 'DESCRIBE YOUR SITE',
          body: 'Tell our AI builder about your business in a sentence or two.',
        },
        {
          title: 'GENERATE AND PUBLISH',
          body:
            'Get a fully built site in seconds. Customize anything, then go live.',
        },
      ],
    },
    why: {
      heading: 'WHY STRIKINGLY',
      sub: 'A site builder built for getting things live.',
      items: [
        {
          title: 'LIVE IN SECONDS',
          body: 'Describe your site, we build it. No setup, no learning curve.',
        },
        {
          title: 'MOBILE BY DEFAULT',
          body:
            'Every generator produces responsive sites that work on any device.',
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
          q: 'What is an AI site generator?',
          a:
            'An AI site generator turns a short description of your business or project into a fully built website. You tell it what you do; it picks a layout, writes starter copy, drops in placeholder images, and gives you a real, editable site in seconds. From there you can change anything, swap content, and publish when you\u2019re ready.',
        },
        {
          q: 'How is a generator different from a template?',
          a:
            'A template is a fixed starting point you fill in by hand. A generator is more like a co-pilot: it reads your description, picks a structure that fits, and writes the first draft of every section for you. You still edit and brand the result, but you don\u2019t start from a blank page.',
        },
        {
          q: 'Are these generators free to use?',
          a:
            'Yes. You can generate, customize, and preview a site without paying. A free Strikingly plan lets you publish on a Strikingly subdomain. Paid plans unlock custom domains, more pages, e-commerce features, and analytics, but generation itself is free.',
        },
        {
          q: 'What kinds of sites can I build?',
          a:
            'Anything from a one-page bio link to a multi-page small business site, a portfolio, a blog, a wedding site, a restaurant page, a landing page for a product, or a small online store. The directory above is grouped by these common goals to make finding the right starting point quick.',
        },
        {
          q: 'Can I customize what the generator produces?',
          a:
            'Always. The generator output is a real Strikingly site, not a locked preview. You can edit text, swap sections, change colors and fonts, upload your own images, add pages, or remove anything you don\u2019t need.',
        },
        {
          q: 'Do generated sites work on mobile?',
          a:
            'Yes. Every site Strikingly generates is responsive by default. The same content reflows for phones, tablets, and desktops with no extra setup.',
        },
      ],
    },
    closing: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      tagline: 'The easiest way to build a website.',
      columns: [
        {
          heading: 'PRODUCT',
          links: [
            { label: 'Pricing', href: '/pricing' },
            { label: 'Templates', href: '/templates' },
            { label: 'AI Site Builder', href: '/s/ai_site_builder' },
            { label: 'Generators', href: '/generators' },
          ],
        },
        {
          heading: 'COMPANY',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
          ],
        },
        {
          heading: 'SUPPORT',
          links: [
            { label: 'Help Center', href: '/support' },
            { label: 'Contact', href: '/support' },
          ],
        },
        {
          heading: 'LEGAL',
          links: [
            { label: 'Terms', href: '/terms' },
            { label: 'Privacy', href: '/privacy' },
          ],
        },
      ],
      copyright: '\u00A9 2026 Strikingly, Inc. All rights reserved.',
    },
  },
};

// Helper to slugify a generator name into /generators/{slug}.
export const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

// Featured tiles (Section 3) - mixed categories, so each tile carries a tag.
export const featured = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site', category: 'Website' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', category: 'Landing Page' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code', category: 'Store' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', category: 'Website' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests', category: 'Website' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', category: 'Website' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', category: 'Blog' },
];

// Section 4 category cards (jump anchors).
export const categoryCards = [
  { id: 'websites', name: 'Websites', desc: 'AI-built business and personal sites for any goal.' },
  { id: 'landing-pages', name: 'Landing Pages', desc: 'Single-page sites built to convert visitors fast.' },
  { id: 'portfolios', name: 'Portfolios', desc: 'Showcase your work with a clean, focused site.' },
  { id: 'blogs', name: 'Blogs', desc: 'Publish-ready blogs with built-in SEO basics.' },
  { id: 'stores', name: 'Online Stores', desc: 'Sell products online with payments built in.' },
  { id: 'link-in-bio', name: 'Link-in-Bio', desc: 'One link, all your places. Made for creators.' },
];

// Section 5 directory subsections. 8-12 items each.
export const directory = [
  {
    id: 'websites',
    name: 'Websites',
    desc: 'Full multi-section sites for businesses, professionals, and personal brands.',
    items: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site' },
      { name: 'Free Website Builder for Photographers', desc: 'Show your shoots in a clean gallery layout' },
      { name: 'AI Website Generator for Small Business', desc: 'Pages, pricing, and contact in one go' },
      { name: 'Wedding Website Generator', desc: 'Share your day, RSVPs included' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done' },
      { name: 'Yoga Instructor Website Generator', desc: 'Class schedule, bookings, and bio' },
      { name: 'Personal Website Generator', desc: 'A simple home for your name online' },
      { name: 'Real Estate Agent Website Builder', desc: 'Listings and lead form on one page' },
      { name: 'Beautiful Website Generator', desc: 'Polished design, no design skills needed' },
      { name: 'No-Code Website Builder for Creators', desc: 'Launch without writing a line of code' },
      { name: 'Church Website Generator', desc: 'Service times, sermons, and giving' },
      { name: 'Nonprofit Website Builder', desc: 'Mission, programs, and donations' },
    ],
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    desc: 'Single-page sites built around one offer or one moment.',
    items: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert' },
      { name: 'Product Launch Landing Page Generator', desc: 'Tease, capture emails, and ship' },
      { name: 'Free Landing Page Builder for Coaches', desc: 'Bookings and testimonials on one page' },
      { name: 'Event Landing Page Generator', desc: 'Date, venue, RSVP, all in one scroll' },
      { name: 'Lead Generation Landing Page Builder', desc: 'Forms tuned to capture leads fast' },
      { name: 'Newsletter Landing Page Generator', desc: 'Grow your list with a focused page' },
      { name: 'Beta Sign-Up Landing Page Builder', desc: 'Collect early users for your product' },
      { name: 'Webinar Landing Page Generator', desc: 'Drive registrations to your next session' },
      { name: 'App Download Landing Page Maker', desc: 'Showcase your app and link to stores' },
      { name: 'Course Landing Page Generator', desc: 'Outline, pricing, and enrollment in one page' },
    ],
  },
  {
    id: 'portfolios',
    name: 'Portfolios',
    desc: 'Clean, focused sites for showing work.',
    items: [
      { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee' },
      { name: 'Portfolio Generator for Designers', desc: 'Case studies and projects, beautifully laid out' },
      { name: 'Photography Portfolio Builder', desc: 'Big images, light layout, fast load' },
      { name: 'Illustrator Portfolio Generator', desc: 'Series and one-offs in a clean grid' },
      { name: 'Writer Portfolio Builder', desc: 'Clips, bylines, and a short bio' },
      { name: 'UX Designer Portfolio Generator', desc: 'Case studies built around process' },
      { name: 'Architect Portfolio Builder', desc: 'Projects, plans, and renderings' },
      { name: 'Developer Portfolio Generator', desc: 'Projects, GitHub links, and a short about' },
      { name: 'Filmmaker Portfolio Builder', desc: 'Reels, projects, and credits' },
      { name: 'Model Portfolio Generator', desc: 'Polaroids, comp card, and contact' },
    ],
  },
  {
    id: 'blogs',
    name: 'Blogs',
    desc: 'Publish-ready blogs with the basics handled.',
    items: [
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes' },
      { name: 'Free Travel Blog Builder', desc: 'Posts, photos, and a clean home page' },
      { name: 'Food Blog Generator', desc: 'Recipes, photos, and a printable card' },
      { name: 'Personal Blog Generator', desc: 'A simple place for your writing' },
      { name: 'AI Blog Site Generator', desc: 'Outline and draft a starter blog instantly' },
      { name: 'Tech Blog Generator', desc: 'Long reads, code snippets, and a clean feed' },
      { name: 'Fashion Blog Builder', desc: 'Lookbook-style posts and tags' },
      { name: 'Parenting Blog Generator', desc: 'Stories, guides, and a friendly home page' },
      { name: 'Newsletter-Style Blog Builder', desc: 'Issue-by-issue archive plus sign-up' },
      { name: 'No-Code Blog Generator', desc: 'Get writing without setup' },
    ],
  },
  {
    id: 'stores',
    name: 'Online Stores',
    desc: 'Storefronts with payments and product pages built in.',
    items: [
      { name: 'Online Store Builder', desc: 'Start selling without writing code' },
      { name: 'AI Store Generator for Small Business', desc: 'Catalog and checkout in minutes' },
      { name: 'Online Store Builder for Restaurants', desc: 'Order-ahead and pickup in one place' },
      { name: 'Free Store Builder for Artists', desc: 'Sell prints and originals' },
      { name: 'Etsy-Style Shop Generator', desc: 'Handmade goods with a personal storefront' },
      { name: 'Bakery Online Store Builder', desc: 'Menu, ordering, and pickup windows' },
      { name: 'Print-on-Demand Store Generator', desc: 'Designs, products, and checkout' },
      { name: 'Subscription Box Store Builder', desc: 'Monthly plans and signup flow' },
      { name: 'Coffee Shop Store Generator', desc: 'Beans, brews, and online ordering' },
      { name: 'Apparel Store Builder', desc: 'Lookbook and shop in one site' },
    ],
  },
  {
    id: 'link-in-bio',
    name: 'Link-in-Bio',
    desc: 'One short page that points to everywhere else you live online.',
    items: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels' },
      { name: 'Free Link-in-Bio Maker for Creators', desc: 'A clean stack of links, your way' },
      { name: 'Link-in-Bio Generator for Musicians', desc: 'Streams, shows, and merch in one tap' },
      { name: 'Bio Link Page Builder for Influencers', desc: 'Brand-safe and easy to update' },
      { name: 'Beautiful Link-in-Bio Page Generator', desc: 'Polished layout with photo and tagline' },
      { name: 'Podcast Link-in-Bio Generator', desc: 'All listening platforms in one page' },
      { name: 'Author Link-in-Bio Builder', desc: 'Books, retailers, and reviews' },
      { name: 'Coach Link-in-Bio Page', desc: 'Booking, free intro call, and socials' },
      { name: 'YouTuber Link-in-Bio Generator', desc: 'Latest video, channel, and merch' },
      { name: 'AI Link-in-Bio Generator', desc: 'Tell us your handles, get a polished page' },
    ],
  },
];

// How many cards stay visible by default in each subsection before "Show all".
export const COLLAPSED_VISIBLE_COUNT = 6;
