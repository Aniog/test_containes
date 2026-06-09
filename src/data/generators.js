export const strings = {
  en: {
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
      subheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
      primaryCta: 'START BUILDING - IT\'S FREE',
      secondaryCta: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      subheading: 'A few common starting points.',
    },
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
      categories: [
        { name: 'Websites', slug: 'websites', description: 'AI-built business and personal sites for any goal.' },
        { name: 'Landing Pages', slug: 'landing-pages', description: 'Single-page sites built to convert visitors fast.' },
        { name: 'Portfolios', slug: 'portfolios', description: 'Showcase your work with a clean, focused site.' },
        { name: 'Blogs', slug: 'blogs', description: 'Publish-ready blogs with built-in SEO basics.' },
        { name: 'Online Stores', slug: 'stores', description: 'Sell products online with payments built in.' },
        { name: 'Link-in-Bio', slug: 'link-in-bio', description: 'One link, all your places. Made for creators.' },
      ],
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      subheading: 'Sixty-plus generators, organized by what you\'re building.',
      searchPlaceholder: 'Search generators...',
      searchLabel: 'Search generators',
      resultCount: '{count} generators match',
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      cantFindIt: 'Can\'t find it? Start with our AI builder.',
      showAll: 'Show all {count} generators',
      showLess: 'Show less',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        { number: '1', title: 'PICK A GENERATOR', body: 'Browse by category or search to find one that fits your goal.' },
        { number: '2', title: 'DESCRIBE YOUR SITE', body: 'Tell our AI builder about your business in a sentence or two.' },
        { number: '3', title: 'GENERATE AND PUBLISH', body: 'Get a fully built site in seconds. Customize anything, then go live.' },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      claims: [
        { title: 'LIVE IN SECONDS', body: 'Describe your site, we build it. No setup, no learning curve.' },
        { title: 'MOBILE BY DEFAULT', body: 'Every generator produces responsive sites that work on any device.' },
        { title: 'FREE TO START', body: 'Generate, customize, and publish without a credit card.' },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      questions: [
        {
          q: 'What is an AI site generator?',
          a: 'An AI site generator is a tool that creates a complete, ready-to-publish website from a short description of what you need. You tell it about your business, your style, and your goals, and it produces a fully designed site with pages, sections, images, and text. You can then customize anything before publishing.',
        },
        {
          q: 'How is a generator different from a template?',
          a: 'A template is a pre-designed layout that you fill in manually. A generator goes further: it asks what you are building, then creates a unique site structure, writes copy, and selects visuals based on your input. The result is personalized to your business, not a one-size-fits-all layout.',
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes. You can generate, customize, and publish a site on a Strikingly subdomain at no cost. Paid plans unlock custom domains, advanced e-commerce features, and additional storage. There is no credit card required to start.',
        },
        {
          q: 'What kinds of sites can I build?',
          a: 'You can build business websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each generator is tuned for a specific use case, from restaurants and photographers to wedding couples and yoga instructors.',
        },
        {
          q: 'Can I customize what the generator produces?',
          a: 'Absolutely. The generator gives you a strong starting point, but every element is editable. Change text, swap images, adjust colors, add or remove sections, and rearrange the layout until it matches your vision.',
        },
        {
          q: 'Do generated sites work on mobile?',
          a: 'Yes. Every site produced by our generators is responsive by default. It automatically adapts to phones, tablets, and desktops so your visitors get a great experience on any device.',
        },
      ],
    },
    closingCta: {
      headline: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      copyright: 'Strikingly Inc. All rights reserved.',
      columns: [
        {
          title: 'Product',
          links: [
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'AI Builder', href: '/s/ai_site_builder' },
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
            { label: 'Contact Us', href: '/support' },
            { label: 'Status', href: '/status' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Cookie Policy', href: '/privacy' },
          ],
        },
      ],
    },
  },
};

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog' },
].map((g) => ({ ...g, slug: slugify(g.name) }));

export const allGeneratorsByCategory = [
  {
    id: 'websites',
    name: 'Websites',
    description: 'Business and personal sites for any goal.',
    generators: [
      { name: 'AI Website Generator', description: 'Describe your business, get a full site' },
      { name: 'Free Website Builder for Photographers', description: 'Showcase your portfolio with a clean site' },
      { name: 'One-Page Wedding Website Builder', description: 'Share your story and registry in one scroll' },
      { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done' },
      { name: 'No-Code Website Builder for Yoga Instructors', description: 'Book classes and share schedules online' },
      { name: 'AI Business Website Generator', description: 'Professional sites for service businesses' },
      { name: 'Beautiful Website Builder for Coaches', description: 'Attract clients with a polished presence' },
      { name: 'Free Website Maker for Nonprofits', description: 'Tell your story and collect donations' },
      { name: 'One-Page Website Builder for Events', description: 'RSVP, details, and location in one page' },
      { name: 'AI Website Builder for Real Estate', description: 'Listings, contact forms, and maps built in' },
      { name: 'Website Generator for Salons', description: 'Services, pricing, and booking online' },
      { name: 'No-Code Site Builder for Consultants', description: 'Credibility and leads without the code' },
    ].map((g) => ({ ...g, slug: slugify(g.name) })),
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    generators: [
      { name: 'AI Landing Page Maker', description: 'One-page sites built to convert' },
      { name: 'Free Landing Page Generator for Startups', description: 'Launch fast with a focused pitch' },
      { name: 'Product Landing Page Builder', description: 'Features, pricing, and CTA in one scroll' },
      { name: 'AI Landing Page for Apps', description: 'Screenshots, benefits, and download links' },
      { name: 'Event Landing Page Generator', description: 'Tickets, schedule, and speakers at a glance' },
      { name: 'Webinar Landing Page Builder', description: 'Registration and reminders built in' },
      { name: 'Ebook Landing Page Generator', description: 'Capture emails with a compelling offer' },
      { name: 'Course Landing Page Builder', description: 'Syllabus, instructor bio, and enrollment' },
      { name: 'SaaS Landing Page Generator', description: 'Features, testimonials, and pricing tiers' },
      { name: 'Free Landing Page for Freelancers', description: 'Pitch your services and book calls' },
    ].map((g) => ({ ...g, slug: slugify(g.name) })),
  },
  {
    id: 'portfolios',
    name: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    generators: [
      { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee' },
      { name: 'Portfolio Generator for Designers', description: 'Case studies and process, beautifully laid out' },
      { name: 'Photography Portfolio Builder', description: 'Galleries, client lists, and contact forms' },
      { name: 'AI Portfolio for Developers', description: 'Projects, skills, and GitHub links' },
      { name: 'Artist Portfolio Generator', description: 'Exhibitions, statement, and sales' },
      { name: 'Writer Portfolio Builder', description: 'Publications, bio, and contact' },
      { name: 'Musician Portfolio Generator', description: 'Tracks, shows, and press kit in one place' },
      { name: 'Architect Portfolio Builder', description: 'Projects, drawings, and firm details' },
      { name: 'Videographer Portfolio Generator', description: 'Reels, credits, and booking' },
      { name: 'Free Portfolio for Students', description: 'Class projects and resume, ready to share' },
    ].map((g) => ({ ...g, slug: slugify(g.name) })),
  },
  {
    id: 'blogs',
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    generators: [
      { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes' },
      { name: 'AI Blog Builder for Food Writers', description: 'Recipes, photos, and categories' },
      { name: 'Travel Blog Generator', description: 'Destinations, maps, and itineraries' },
      { name: 'Fashion Blog Builder', description: 'Looks, brands, and affiliate links' },
      { name: 'Tech Blog Generator', description: 'Tutorials, reviews, and code snippets' },
      { name: 'Parenting Blog Builder', description: 'Stories, tips, and community' },
      { name: 'Fitness Blog Generator', description: 'Workouts, nutrition, and progress' },
      { name: 'Finance Blog Builder', description: 'Investing, budgeting, and tools' },
      { name: 'DIY Blog Generator', description: 'Projects, supplies, and step-by-step guides' },
      { name: 'Free Personal Blog Builder', description: 'Your thoughts, beautifully formatted' },
    ].map((g) => ({ ...g, slug: slugify(g.name) })),
  },
  {
    id: 'stores',
    name: 'Online Stores',
    description: 'Sell products online with payments built in.',
    generators: [
      { name: 'Online Store Builder', description: 'Start selling without writing code' },
      { name: 'Online Store Builder for Restaurants', description: 'Menu, ordering, and delivery integration' },
      { name: 'AI Store Generator for Handmade Goods', description: 'Products, stories, and checkout' },
      { name: 'Fashion Store Builder', description: 'Collections, sizing, and lookbooks' },
      { name: 'Digital Product Store Generator', description: 'Downloads, licenses, and instant delivery' },
      { name: 'Beauty Store Builder', description: 'Skincare, tutorials, and subscriptions' },
      { name: 'Furniture Store Generator', description: 'Catalog, dimensions, and delivery' },
      { name: 'Pet Store Builder', description: 'Supplies, grooming, and auto-ship' },
      { name: 'Book Store Generator', description: 'Genres, reviews, and author pages' },
      { name: 'Free Store Builder for Side Hustles', description: 'Launch a shop with zero upfront cost' },
    ].map((g) => ({ ...g, slug: slugify(g.name) })),
  },
  {
    id: 'link-in-bio',
    name: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    generators: [
      { name: 'Link-in-Bio Generator', description: 'One link for all your channels' },
      { name: 'Creator Link Page Builder', description: 'YouTube, TikTok, merch, and tips' },
      { name: 'Musician Link-in-Bio Generator', description: 'Spotify, shows, and mailing list' },
      { name: 'Influencer Link Page Builder', description: 'Sponsored content, affiliate links, and contact' },
      { name: 'Podcast Link-in-Bio Generator', description: 'Episodes, platforms, and reviews' },
      { name: 'Artist Link Page Builder', description: 'Gallery, shop, and commission form' },
      { name: 'Coach Link-in-Bio Generator', description: 'Booking, testimonials, and free resources' },
      { name: 'Free Link Page for Small Brands', description: 'Social, shop, and press kit' },
    ].map((g) => ({ ...g, slug: slugify(g.name) })),
  },
];
