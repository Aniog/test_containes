// All user-visible strings — add strings.es, strings.ja for i18n
export const strings = {
  en: {
    topbar: { logoText: 'strikingly AI' },
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
    byCategory: {
      heading: 'BROWSE BY CATEGORY',
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      sub: "Sixty-plus generators, organized by what you're building.",
      searchPlaceholder: 'Search generators...',
      searchLabel: 'Search generators',
      resultCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
      noResults: 'No generators match your search.',
      noResultsClear: 'Clear search',
      noResultsCta: "Can't find it? Start with our AI builder.",
      showAll: (n) => `Show all ${n} generators`,
      showLess: 'Show less',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        {
          num: '1',
          title: 'PICK A GENERATOR',
          body: 'Browse by category or search to find one that fits your goal.',
        },
        {
          num: '2',
          title: 'DESCRIBE YOUR SITE',
          body: 'Tell our AI builder about your business in a sentence or two.',
        },
        {
          num: '3',
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
          iconKey: 'live',
        },
        {
          title: 'MOBILE BY DEFAULT',
          body: 'Every generator produces responsive sites that work on any device.',
          iconKey: 'mobile',
        },
        {
          title: 'FREE TO START',
          body: 'Generate, customize, and publish without a credit card.',
          iconKey: 'free',
        },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          q: 'What is an AI site generator?',
          a: "An AI site generator is a tool that builds a complete website for you based on a short description of your business or project. Instead of dragging and dropping elements manually, you describe what you need and the AI assembles the layout, copy, and design in seconds.\n\nStrikingly's generators are tuned for specific use cases — portfolios, stores, landing pages, and more — so the output is already shaped for your goal before you even start customizing.",
        },
        {
          q: 'How is a generator different from a template?',
          a: "A template is a static starting point: you pick a design and fill in your own content. A generator is dynamic: it reads your input and produces a site with content, structure, and design choices already tailored to what you described.\n\nThe practical difference is speed. With a template you still have a blank canvas to fill. With a generator you have a working first draft in seconds.",
        },
        {
          q: 'Are these generators free to use?',
          a: "Yes. You can generate, preview, and customize any site without a credit card. Publishing to a custom domain requires a paid plan, but the generation step itself is always free.\n\nStrikingly's free plan lets you publish on a Strikingly subdomain so you can share your site right away.",
        },
        {
          q: 'What kinds of sites can I build?',
          a: "The generators on this page cover six broad categories: general websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Within each category there are generators tuned for specific industries and goals — photographers, restaurants, yoga instructors, wedding couples, and many more.\n\nIf you don't see a generator that matches your exact need, the AI Site Builder at the top of the page can handle any brief you give it.",
        },
        {
          q: 'Can I customize what the generator produces?',
          a: "Absolutely. Every generated site opens in Strikingly's visual editor, where you can change text, swap images, adjust colors, reorder sections, and add or remove blocks. The generator gives you a strong starting point; you own everything after that.\n\nYou can also connect a custom domain, set up a store, and configure SEO settings — all from the same editor.",
        },
        {
          q: 'Do generated sites work on mobile?',
          a: "Yes. Every site Strikingly generates is fully responsive by default. The layout adapts automatically to phones, tablets, and desktops without any extra work on your part.\n\nYou can preview the mobile view in the editor before publishing to make sure everything looks exactly the way you want.",
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`,
    },
  },
};

// Slug helper
export const toSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

// Featured generators (Section 3) — 9 tiles, mixed categories
export const featuredGenerators = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site.', category: 'Website' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee.', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert.', category: 'Landing Page' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code.', category: 'Store' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels.', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll.', category: 'Website' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests.', category: 'Website' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done.', category: 'Website' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes.', category: 'Blog' },
];

// Browse by Category cards (Section 4)
export const categoryCards = [
  {
    slug: 'websites',
    name: 'Websites',
    desc: 'AI-built business and personal sites for any goal.',
    anchor: '#websites',
  },
  {
    slug: 'landing-pages',
    name: 'Landing Pages',
    desc: 'Single-page sites built to convert visitors fast.',
    anchor: '#landing-pages',
  },
  {
    slug: 'portfolios',
    name: 'Portfolios',
    desc: 'Showcase your work with a clean, focused site.',
    anchor: '#portfolios',
  },
  {
    slug: 'blogs',
    name: 'Blogs',
    desc: 'Publish-ready blogs with built-in SEO basics.',
    anchor: '#blogs',
  },
  {
    slug: 'stores',
    name: 'Online Stores',
    desc: 'Sell products online with payments built in.',
    anchor: '#stores',
  },
  {
    slug: 'link-in-bio',
    name: 'Link-in-Bio',
    desc: 'One link, all your places. Made for creators.',
    anchor: '#link-in-bio',
  },
];

// All Generators directory (Section 5)
export const allGenerators = [
  {
    id: 'websites',
    heading: 'Websites',
    desc: 'AI-built websites for every business type and goal.',
    generators: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a complete site in seconds.' },
      { name: 'Free Website Builder for Photographers', desc: 'Showcase your portfolio with a clean, image-first layout.' },
      { name: 'Small Business Website Generator', desc: 'Professional sites for local and independent businesses.' },
      { name: 'One-Page Wedding Website Builder', desc: 'Everything guests need, on a single beautiful page.' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, location, and reservations — all in one place.' },
      { name: 'Yoga Instructor Website Generator', desc: 'Class schedules, booking, and your teaching philosophy.' },
      { name: 'Real Estate Agent Website Builder', desc: 'Listings, contact forms, and a professional bio.' },
      { name: 'Nonprofit Website Generator', desc: 'Tell your mission story and collect donations online.' },
      { name: 'Freelancer Website Builder', desc: 'Services, rates, and a contact form — ready in minutes.' },
      { name: 'Event Website Generator', desc: 'Promote any event with a dedicated, shareable site.' },
    ],
  },
  {
    id: 'landing-pages',
    heading: 'Landing Pages',
    desc: 'Single-page sites engineered to convert visitors into customers.',
    generators: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert, generated from your brief.' },
      { name: 'Product Launch Landing Page', desc: 'Build hype and capture early sign-ups before you ship.' },
      { name: 'Free Lead Generation Page Builder', desc: 'Collect emails and leads without a full website.' },
      { name: 'Webinar Registration Page Generator', desc: 'Drive sign-ups for your next live or recorded session.' },
      { name: 'App Download Landing Page', desc: 'Showcase your app and link to the App Store and Google Play.' },
      { name: 'Coming Soon Page Builder', desc: 'Hold your spot online while you finish building.' },
      { name: 'Sales Page Generator', desc: 'Long-form persuasive pages for courses, coaching, and offers.' },
      { name: 'Event Registration Landing Page', desc: 'Sell tickets or collect RSVPs for any event.' },
      { name: 'Waitlist Page Builder', desc: 'Gauge demand and build a list before launch day.' },
    ],
  },
  {
    id: 'portfolios',
    heading: 'Portfolios',
    desc: 'Clean, focused sites that let your work do the talking.',
    generators: [
      { name: 'Portfolio Generator for Designers', desc: 'Case studies, project grids, and a contact form.' },
      { name: 'Free Portfolio Generator', desc: 'For creatives of all kinds — no fee, no code.' },
      { name: 'Photography Portfolio Builder', desc: 'Full-bleed galleries and a minimal, image-first layout.' },
      { name: 'Illustrator Portfolio Generator', desc: 'Showcase illustrations with a clean, art-forward design.' },
      { name: 'Developer Portfolio Builder', desc: 'Projects, GitHub links, and a skills section.' },
      { name: 'UX Designer Portfolio Generator', desc: 'Case studies, process walkthroughs, and deliverables.' },
      { name: 'Videographer Portfolio Builder', desc: 'Embed reels and project videos in a cinematic layout.' },
      { name: 'Writer Portfolio Generator', desc: 'Clips, bylines, and a bio that gets you hired.' },
      { name: 'Architect Portfolio Builder', desc: 'Project renders, floor plans, and firm credentials.' },
      { name: 'Model Portfolio Generator', desc: 'Comp card style layout with high-res image galleries.' },
    ],
  },
  {
    id: 'blogs',
    heading: 'Blogs',
    desc: 'Publish-ready blogs with structure, SEO basics, and a clean reading experience.',
    generators: [
      { name: 'Blog Generator for Beginners', desc: 'Publish your first post in minutes, no experience needed.' },
      { name: 'AI Blog Builder', desc: 'Generate a full blog structure from a topic or niche.' },
      { name: 'Personal Blog Generator', desc: 'A home for your thoughts, stories, and ideas.' },
      { name: 'Travel Blog Builder', desc: 'Destination posts, photo galleries, and trip itineraries.' },
      { name: 'Food Blog Generator', desc: 'Recipes, reviews, and a layout built for hungry readers.' },
      { name: 'Fitness Blog Builder', desc: 'Workout guides, nutrition tips, and progress stories.' },
      { name: 'Business Blog Generator', desc: 'Thought leadership and content marketing for your brand.' },
      { name: 'Parenting Blog Builder', desc: 'Share your family journey with a warm, personal layout.' },
      { name: 'Tech Blog Generator', desc: 'Tutorials, reviews, and opinion pieces for tech audiences.' },
    ],
  },
  {
    id: 'stores',
    heading: 'Online Stores',
    desc: 'Sell products online with payments, inventory, and shipping built in.',
    generators: [
      { name: 'Online Store Builder', desc: 'Start selling without writing a single line of code.' },
      { name: 'Online Store Builder for Restaurants', desc: 'Sell meal kits, merch, or gift cards alongside your menu.' },
      { name: 'Handmade Goods Store Generator', desc: 'Etsy-style storefronts for independent makers.' },
      { name: 'Digital Products Store Builder', desc: 'Sell ebooks, presets, templates, and downloads.' },
      { name: 'Clothing Boutique Store Generator', desc: 'Fashion-forward layouts with size guides and lookbooks.' },
      { name: 'Beauty Products Store Builder', desc: 'Skincare, cosmetics, and wellness products, beautifully presented.' },
      { name: 'Print-on-Demand Store Generator', desc: 'Connect your designs to a fulfillment partner and start selling.' },
      { name: 'Subscription Box Store Builder', desc: 'Recurring billing and curated product pages.' },
      { name: 'Local Bakery Online Store', desc: 'Pre-orders, custom cakes, and pickup scheduling.' },
      { name: 'Art Print Store Generator', desc: 'Sell limited editions and originals with a gallery-quality layout.' },
    ],
  },
  {
    id: 'link-in-bio',
    heading: 'Link-in-Bio',
    desc: 'One link that holds all your content, channels, and calls to action.',
    generators: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels — built in under a minute.' },
      { name: 'Creator Link-in-Bio Builder', desc: 'For YouTubers, podcasters, and content creators.' },
      { name: 'Musician Link-in-Bio Generator', desc: 'Streaming links, tour dates, and merch in one place.' },
      { name: 'Influencer Link-in-Bio Builder', desc: 'Brand deals, affiliate links, and social profiles.' },
      { name: 'Coach Link-in-Bio Generator', desc: 'Booking links, free resources, and your offer stack.' },
      { name: 'Artist Link-in-Bio Builder', desc: 'Gallery, shop, and social links for visual artists.' },
      { name: 'Podcast Link-in-Bio Generator', desc: 'Episode links, subscribe buttons, and show notes.' },
      { name: 'Small Business Link-in-Bio Builder', desc: 'Hours, menu, booking, and contact — all from one link.' },
    ],
  },
];
