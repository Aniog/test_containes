export const strings = {
  en: {
    meta: {
      title: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
      description:
        "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.",
    },
    topBar: {
      logo: 'strikingly AI',
    },
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      subheadline:
        "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      ctaPrimary: "START BUILDING - IT'S FREE",
      ctaSecondary: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      subheading: 'A few common starting points.',
    },
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
      categories: [
        {
          id: 'websites',
          name: 'Websites',
          description: 'AI-built business and personal sites for any goal.',
        },
        {
          id: 'landing-pages',
          name: 'Landing Pages',
          description: 'Single-page sites built to convert visitors fast.',
        },
        {
          id: 'portfolios',
          name: 'Portfolios',
          description: 'Showcase your work with a clean, focused site.',
        },
        {
          id: 'blogs',
          name: 'Blogs',
          description: 'Publish-ready blogs with built-in SEO basics.',
        },
        {
          id: 'stores',
          name: 'Online Stores',
          description: 'Sell products online with payments built in.',
        },
        {
          id: 'link-in-bio',
          name: 'Link-in-Bio',
          description: "One link, all your places. Made for creators.",
        },
      ],
    },
    directory: {
      heading: 'ALL GENERATORS',
      subheading: "Sixty-plus generators, organized by what you're building.",
      searchPlaceholder: 'Search generators...',
      searchLabel: 'Search generators',
      resultCount: (n) => `${n} generator${n === 1 ? '' : 's'} match`,
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      cantFindIt: "Can't find it? Start with our AI builder.",
      showAll: (n, category) => `Show all ${n} ${category} generators`,
      showLess: 'Show less',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
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
          body: 'Get a fully built site in seconds. Customize anything, then go live.',
        },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      claims: [
        {
          title: 'LIVE IN SECONDS',
          body: 'Describe your site, we build it. No setup, no learning curve.',
        },
        {
          title: 'MOBILE BY DEFAULT',
          body: 'Every generator produces responsive sites that work on any device.',
        },
        {
          title: 'FREE TO START',
          body: 'Generate, customize, and publish without a credit card.',
        },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      questions: [
        {
          q: 'What is an AI site generator?',
          a: 'An AI site generator is a tool that builds a complete website for you based on a short description of your business, project, or goal. You describe what you need, and the AI generates layouts, copy, images, and structure in seconds. It is the fastest way to go from idea to live site without writing code.',
        },
        {
          q: 'How is a generator different from a template?',
          a: 'A template is a pre-designed layout that you fill in manually. A generator goes further: it asks for your business description and then writes the copy, selects images, and arranges sections specifically for you. The result is a personalized site, not a cookie-cutter layout.',
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes. You can generate, customize, and publish a site without a credit card. Strikingly offers a free plan that includes hosting and a strikingly.com domain. Paid plans unlock custom domains, advanced features, and higher traffic limits.',
        },
        {
          q: 'What kinds of sites can I build?',
          a: 'You can build business websites, portfolios, blogs, online stores, landing pages, wedding sites, restaurant pages, and link-in-bio pages. Our generators cover dozens of industries and use cases, and every site is fully customizable after generation.',
        },
        {
          q: 'Can I customize what the generator produces?',
          a: 'Absolutely. After the AI builds your site, you have full control over every section, color, font, image, and page. You can add new pages, rearrange content, connect a custom domain, and integrate analytics or payments.',
        },
        {
          q: 'Do generated sites work on mobile?',
          a: 'Every site generated by Strikingly is responsive by default. It automatically adapts to phones, tablets, and desktops so your visitors get a great experience on any device.',
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      subheading: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      copyright: '\u00A9 Strikingly, Inc. All rights reserved.',
      columns: [
        {
          title: 'Product',
          links: [
            { label: 'Features', href: '/features' },
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'Careers', href: '/careers' },
          ],
        },
        {
          title: 'Support',
          links: [
            { label: 'Help Center', href: '/support' },
            { label: 'Contact', href: '/support' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Terms', href: '/terms' },
            { label: 'Privacy', href: '/privacy' },
          ],
        },
      ],
    },
  },
};

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const featuredGenerators = [
  {
    name: 'AI Website Generator',
    description: 'Describe your business, get a full site',
    category: 'Website',
  },
  {
    name: 'Free Portfolio Generator',
    description: 'For creatives, in minutes, no fee',
    category: 'Portfolio',
  },
  {
    name: 'AI Landing Page Maker',
    description: 'One-page sites built to convert',
    category: 'Landing Page',
  },
  {
    name: 'Online Store Builder',
    description: 'Start selling without writing code',
    category: 'Store',
  },
  {
    name: 'Link-in-Bio Generator',
    description: 'One link for all your channels',
    category: 'Link-in-Bio',
  },
  {
    name: 'One-Page Website Builder',
    description: 'Simple sites, single scroll',
    category: 'Website',
  },
  {
    name: 'Wedding Website Generator',
    description: 'Share your day with guests',
    category: 'Website',
  },
  {
    name: 'Restaurant Website Builder',
    description: 'Menu, hours, reservations, done',
    category: 'Website',
  },
  {
    name: 'Blog Generator for Beginners',
    description: 'Publish-ready in minutes',
    category: 'Blog',
  },
].map((g) => ({ ...g, slug: slugify(g.name) }));

export const categoryGenerators = {
  websites: {
    id: 'websites',
    name: 'Websites',
    description: 'Business and personal sites for any goal.',
    items: [
      { name: 'AI Website Generator', description: 'Describe your business, get a full site' },
      { name: 'Free Website Builder for Photographers', description: 'Gallery-focused layouts with booking integration' },
      { name: 'One-Page Wedding Website Builder', description: 'RSVP, registry, and story in one scroll' },
      { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done' },
      { name: 'No-Code Website Builder for Yoga Instructors', description: 'Classes, schedules, and payment ready' },
      { name: 'AI Business Site Generator', description: 'Professional pages with contact and services' },
      { name: 'Beautiful Website Builder for Consultants', description: 'Credibility-focused layouts that convert' },
      { name: 'Free Wedding Website Generator', description: 'Share your day with guests at no cost' },
      { name: 'One-Page Website Builder for Events', description: 'Single-scroll event pages with ticketing' },
      { name: 'AI Church Website Builder', description: 'Sermons, events, and giving built in' },
      { name: 'Restaurant Website Maker', description: 'Photos, maps, and online ordering' },
      { name: 'Website Builder for Musicians', description: 'Tour dates, music players, and merch' },
    ].map((g) => ({ ...g, slug: slugify(g.name) })),
  },
  'landing-pages': {
    id: 'landing-pages',
    name: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    items: [
      { name: 'AI Landing Page Maker', description: 'One-page sites built to convert' },
      { name: 'Free Landing Page Generator', description: 'High-converting pages without a fee' },
      { name: 'Landing Page Builder for Startups', description: 'Pitch, waitlist, and investor-ready layouts' },
      { name: 'One-Page Landing Builder for Coaches', description: 'Bookings and testimonials in one place' },
      { name: 'AI Product Launch Page Generator', description: 'Announce, tease, and capture emails' },
      { name: 'Landing Page Maker for Webinars', description: 'Registration, countdown, and replay links' },
      { name: 'Beautiful Landing Page Builder for Apps', description: 'App-store buttons and feature highlights' },
      { name: 'No-Code Landing Page for Real Estate', description: 'Listings, maps, and lead capture forms' },
      { name: 'AI Event Landing Page Generator', description: 'Tickets, agenda, and speaker bios' },
      { name: 'Landing Page Builder for Agencies', description: 'Case studies and contact forms that close' },
      { name: 'Free SaaS Landing Page Maker', description: 'Feature grids and pricing tables built in' },
      { name: 'One-Page Site Builder for Courses', description: 'Syllabus, instructor bio, and enrollment' },
    ].map((g) => ({ ...g, slug: slugify(g.name) })),
  },
  portfolios: {
    id: 'portfolios',
    name: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    items: [
      { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee' },
      { name: 'Portfolio Generator for Designers', description: 'Case studies and project grids that impress' },
      { name: 'AI Portfolio Builder for Photographers', description: 'Fullscreen galleries with client proofing' },
      { name: 'Portfolio Maker for Illustrators', description: 'Masonry grids and process breakdowns' },
      { name: 'No-Code Portfolio Builder for Architects', description: 'Project pages with plans and renders' },
      { name: 'Portfolio Generator for Developers', description: 'Code snippets, repos, and live demos' },
      { name: 'Beautiful Portfolio Builder for Makeup Artists', description: 'Before-and-after galleries and booking' },
      { name: 'AI Portfolio Maker for Videographers', description: 'Reel-first layouts with embedded video' },
      { name: 'Portfolio Site Builder for Writers', description: 'Publications, excerpts, and contact form' },
      { name: 'Free Portfolio Maker for Students', description: 'Class projects and resume in one link' },
      { name: 'Portfolio Generator for UX Researchers', description: 'Process write-ups and outcome metrics' },
      { name: 'One-Page Portfolio Builder for Freelancers', description: 'Work samples and a single CTA to hire' },
    ].map((g) => ({ ...g, slug: slugify(g.name) })),
  },
  blogs: {
    id: 'blogs',
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    items: [
      { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes' },
      { name: 'AI Blog Builder for Travel Writers', description: 'Photo stories and destination maps' },
      { name: 'Free Blog Maker for Foodies', description: 'Recipe cards and ingredient lists built in' },
      { name: 'Blog Site Generator for Tech Reviews', description: 'Comparison tables and affiliate links' },
      { name: 'No-Code Blog Builder for Coaches', description: 'Articles, newsletters, and booking widgets' },
      { name: 'AI Fashion Blog Generator', description: 'Lookbooks and shopping integrations' },
      { name: 'Blog Maker for Personal Finance', description: 'Calculators and resource libraries' },
      { name: 'Beautiful Blog Builder for Photographers', description: 'Visual-first layouts with EXIF display' },
      { name: 'Free Blog Generator for Parents', description: 'Family stories and milestone timelines' },
      { name: 'AI Wellness Blog Maker', description: 'Habit trackers and guided content sections' },
      { name: 'Blog Site Builder for Nonprofits', description: 'Impact stories and donation callouts' },
      { name: 'One-Page Blog Generator for Newsletters', description: 'Archive and subscribe in a single scroll' },
    ].map((g) => ({ ...g, slug: slugify(g.name) })),
  },
  stores: {
    id: 'stores',
    name: 'Online Stores',
    description: 'Sell products online with payments built in.',
    items: [
      { name: 'Online Store Builder', description: 'Start selling without writing code' },
      { name: 'AI Store Builder for Restaurants', description: 'Menus, ordering, and delivery integrations' },
      { name: 'Free Online Store Maker for Artists', description: 'Print and original sales with no upfront cost' },
      { name: 'Store Generator for Handmade Goods', description: 'Product stories and variant selectors' },
      { name: 'No-Code Store Builder for Coaches', description: 'Courses, sessions, and digital downloads' },
      { name: 'AI Fashion Store Generator', description: 'Lookbooks, size guides, and checkout' },
      { name: 'Online Store Maker for Bakeries', description: 'Daily menus, pre-orders, and pickup slots' },
      { name: 'Beautiful Store Builder for Jewelry', description: 'Zoom galleries and gift-message fields' },
      { name: 'Free Store Generator for Dropshippers', description: 'Import products and start selling fast' },
      { name: 'AI Plant Shop Builder', description: 'Care guides and subscription boxes' },
      { name: 'Store Site Maker for Electronics', description: 'Specs, comparisons, and warranty info' },
      { name: 'One-Page Store Builder for Single Products', description: 'High-converting single-product scroll' },
    ].map((g) => ({ ...g, slug: slugify(g.name) })),
  },
  'link-in-bio': {
    id: 'link-in-bio',
    name: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    items: [
      { name: 'Link-in-Bio Generator', description: 'One link for all your channels' },
      { name: 'AI Link-in-Bio Maker for Creators', description: 'TikTok, Instagram, and YouTube links' },
      { name: 'Free Link-in-Bio Builder for Musicians', description: 'Streaming links, merch, and tour dates' },
      { name: 'Link-in-Bio Generator for Podcasters', description: 'Episodes, platforms, and subscribe buttons' },
      { name: 'No-Code Link-in-Bio for Brands', description: 'Campaign links and UTM tracking' },
      { name: 'AI Bio Link Builder for Coaches', description: 'Bookings, testimonials, and free resources' },
      { name: 'Link-in-Bio Maker for Events', description: 'Tickets, calendar, and location links' },
      { name: 'Beautiful Link-in-Bio for Photographers', description: 'Portfolio, pricing, and contact in one link' },
      { name: 'Free Bio Link Generator for Students', description: 'Resume, projects, and social links' },
      { name: 'AI Link-in-Bio for Nonprofits', description: 'Donate, volunteer, and newsletter signups' },
      { name: 'Link-in-Bio Builder for Restaurants', description: 'Menu, reservations, and delivery apps' },
      { name: 'One-Page Bio Link Maker for Athletes', description: 'Stats, sponsors, and fan engagement' },
    ].map((g) => ({ ...g, slug: slugify(g.name) })),
  },
};
