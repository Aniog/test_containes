// All user-visible strings live in strings.en so adding strings.es / strings.ja is a one-file change.
export const strings = {
  en: {
    meta: {
      title: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
      description:
        'Browse Strikingly\'s AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.',
    },
    topbar: {
      logoText: 'Strikingly',
      logoAi: 'AI',
    },
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'Build any kind of site',
      h1Line2: 'With AI, in an instant',
      sub: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
      ctaPrimary: 'Start Building — It\'s Free',
      ctaSecondary: 'Browse Generators',
    },
    featured: {
      heading: 'Featured Generators',
      sub: 'A few common starting points.',
    },
    browse: {
      heading: 'Browse by Category',
      sub: 'Jump to the section that fits what you\'re building.',
    },
    allGenerators: {
      heading: 'All Generators',
      sub: 'Sixty-plus generators, organized by what you\'re building.',
      searchPlaceholder: 'Search generators...',
      searchLabel: 'Search generators',
      resultCount: (n) => `${n} generator${n === 1 ? '' : 's'} match`,
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      noResultsCta: 'Can\'t find it? Start with our AI builder.',
      showAll: (n) => `Show all ${n} generators`,
      showLess: 'Show less',
    },
    howItWorks: {
      heading: 'How It Works',
      steps: [
        {
          num: '1',
          title: 'Pick a Generator',
          body: 'Browse by category or search to find one that fits your goal.',
        },
        {
          num: '2',
          title: 'Describe Your Site',
          body: 'Tell our AI builder about your business in a sentence or two.',
        },
        {
          num: '3',
          title: 'Generate and Publish',
          body: 'Get a fully built site in seconds. Customize anything, then go live.',
        },
      ],
    },
    why: {
      heading: 'Why Strikingly',
      items: [
        {
          title: 'Live in Seconds',
          body: 'Describe your site, we build it. No setup, no learning curve.',
        },
        {
          title: 'Mobile by Default',
          body: 'Every generator produces responsive sites that work on any device.',
        },
        {
          title: 'Free to Start',
          body: 'Generate, customize, and publish without a credit card.',
        },
      ],
    },
    faq: {
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'What is an AI site generator?',
          a: [
            'An AI site generator is a tool that builds a complete website for you based on a short description of your business or project. Instead of dragging and dropping elements manually, you describe what you need and the AI assembles the layout, copy, and design in seconds.',
            'Strikingly\'s generators are tuned for specific use cases — portfolios, stores, landing pages, and more — so the output is already shaped for your goal rather than a blank canvas.',
          ],
        },
        {
          q: 'How is a generator different from a template?',
          a: [
            'A template gives you a pre-designed layout that you fill in yourself. A generator goes further: it reads your input, writes placeholder copy, selects relevant sections, and produces a site that already reflects your specific context.',
            'You still customize everything after generation, but you start from a site that\'s already 80% of the way there rather than an empty shell.',
          ],
        },
        {
          q: 'Are these generators free to use?',
          a: [
            'Yes. You can generate, preview, and customize your site without a credit card. Publishing to a Strikingly subdomain is also free. Paid plans unlock a custom domain, additional storage, and advanced features.',
          ],
        },
        {
          q: 'What kinds of sites can I build?',
          a: [
            'Strikingly\'s generators cover websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Within each category there are generators tuned for specific industries and goals — photographers, restaurants, yoga instructors, wedding couples, and many more.',
          ],
        },
        {
          q: 'Can I customize what the generator produces?',
          a: [
            'Absolutely. Every generated site opens in Strikingly\'s visual editor, where you can change text, swap images, reorder sections, adjust colors, and add or remove any element. The generator gives you a strong starting point; you own everything after that.',
          ],
        },
        {
          q: 'Do generated sites work on mobile?',
          a: [
            'Yes. Every site Strikingly generates is fully responsive by default. The layout adapts automatically to phones, tablets, and desktops without any extra work on your part.',
          ],
        },
      ],
    },
    closingCta: {
      heading: 'Ready to Build?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'Start with AI Builder',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Strikingly, Inc. All rights reserved.`,
    },
  },
};

// ── Slug helper ────────────────────────────────────────────────────────────────
export function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// ── Category browse cards ──────────────────────────────────────────────────────
export const categories = [
  {
    id: 'websites',
    name: 'Websites',
    desc: 'AI-built business and personal sites for any goal.',
    hash: '#websites',
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    desc: 'Single-page sites built to convert visitors fast.',
    hash: '#landing-pages',
  },
  {
    id: 'portfolios',
    name: 'Portfolios',
    desc: 'Showcase your work with a clean, focused site.',
    hash: '#portfolios',
  },
  {
    id: 'blogs',
    name: 'Blogs',
    desc: 'Publish-ready blogs with built-in SEO basics.',
    hash: '#blogs',
  },
  {
    id: 'stores',
    name: 'Online Stores',
    desc: 'Sell products online with payments built in.',
    hash: '#stores',
  },
  {
    id: 'link-in-bio',
    name: 'Link-in-Bio',
    desc: 'One link, all your places. Made for creators.',
    hash: '#link-in-bio',
  },
];

// ── Featured generators (9 tiles, mixed categories) ───────────────────────────
export const featuredGenerators = [
  { name: 'AI Website Generator',          desc: 'Describe your business, get a full site.',       category: 'Website' },
  { name: 'Free Portfolio Generator',       desc: 'For creatives, in minutes, no fee.',             category: 'Portfolio' },
  { name: 'AI Landing Page Maker',          desc: 'One-page sites built to convert.',               category: 'Landing Page' },
  { name: 'Online Store Builder',           desc: 'Start selling without writing code.',            category: 'Store' },
  { name: 'Link-in-Bio Generator',          desc: 'One link for all your channels.',                category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder',       desc: 'Simple sites, single scroll.',                   category: 'Website' },
  { name: 'Wedding Website Generator',      desc: 'Share your day with guests.',                    category: 'Website' },
  { name: 'Restaurant Website Builder',     desc: 'Menu, hours, reservations, done.',               category: 'Website' },
  { name: 'Blog Generator for Beginners',   desc: 'Publish-ready in minutes.',                      category: 'Blog' },
].map((g) => ({ ...g, slug: toSlug(g.name) }));

// ── All generators directory ───────────────────────────────────────────────────
export const allGenerators = [
  // ── Websites ──────────────────────────────────────────────────────────────
  {
    category: 'websites',
    sectionDesc: 'AI-built business and personal sites for every industry and goal.',
    items: [
      { name: 'AI Website Generator',                    desc: 'Describe your business, get a complete site in seconds.' },
      { name: 'Free Website Builder for Photographers',  desc: 'Showcase your portfolio with a clean, image-first layout.' },
      { name: 'Small Business Website Generator',        desc: 'Professional sites for local and online businesses.' },
      { name: 'Restaurant Website Builder',              desc: 'Menu, hours, reservations, and directions — all in one.' },
      { name: 'Wedding Website Generator',               desc: 'Share your story, RSVP, and event details with guests.' },
      { name: 'Yoga Instructor Website Builder',         desc: 'Class schedules, booking, and instructor bio, ready fast.' },
      { name: 'One-Page Website Builder',                desc: 'Everything on a single scroll — simple and effective.' },
      { name: 'No-Code Website Generator',               desc: 'Build a real site without touching a line of code.' },
      { name: 'AI Business Website Maker',               desc: 'AI writes the copy and builds the layout for your brand.' },
      { name: 'Beautiful Website Generator',             desc: 'Polished, design-forward sites for any purpose.' },
      { name: 'Nonprofit Website Builder',               desc: 'Mission-driven sites with donation and volunteer sections.' },
      { name: 'Event Website Generator',                 desc: 'Promote your event with schedule, speakers, and tickets.' },
    ],
  },
  // ── Landing Pages ─────────────────────────────────────────────────────────
  {
    category: 'landing-pages',
    sectionDesc: 'Single-page sites engineered to turn visitors into leads or customers.',
    items: [
      { name: 'AI Landing Page Maker',                   desc: 'One-page sites built to convert, generated in seconds.' },
      { name: 'Free Landing Page Generator',             desc: 'High-converting pages without a monthly fee.' },
      { name: 'Product Launch Landing Page Builder',     desc: 'Build buzz and capture early sign-ups before you ship.' },
      { name: 'Lead Generation Page Generator',          desc: 'Collect emails and leads with a focused, distraction-free page.' },
      { name: 'App Download Landing Page Maker',         desc: 'Drive installs with a clean app-store-style landing page.' },
      { name: 'Webinar Registration Page Builder',       desc: 'Fill your webinar seats with a fast, persuasive sign-up page.' },
      { name: 'Coming Soon Page Generator',              desc: 'Tease your launch and collect early interest.' },
      { name: 'Sales Page Builder',                      desc: 'Long-form sales pages that walk visitors to the buy button.' },
      { name: 'Squeeze Page Generator',                  desc: 'Minimal pages focused entirely on one conversion action.' },
      { name: 'Thank You Page Builder',                  desc: 'Confirm sign-ups and guide new leads to the next step.' },
    ],
  },
  // ── Portfolios ────────────────────────────────────────────────────────────
  {
    category: 'portfolios',
    sectionDesc: 'Showcase your work with a focused, professional portfolio site.',
    items: [
      { name: 'Free Portfolio Generator',                desc: 'For creatives, in minutes, no fee required.' },
      { name: 'Portfolio Generator for Designers',       desc: 'Grid-first layouts that let your visual work speak.' },
      { name: 'Photography Portfolio Builder',           desc: 'Full-bleed galleries and client inquiry forms.' },
      { name: 'Illustrator Portfolio Generator',         desc: 'Clean, art-forward pages for illustrators and artists.' },
      { name: 'Developer Portfolio Builder',             desc: 'Highlight your projects, stack, and GitHub in one place.' },
      { name: 'Freelancer Portfolio Generator',          desc: 'Win clients with a polished, professional showcase.' },
      { name: 'Model Portfolio Website Builder',         desc: 'Comp-card style layouts for modeling and acting talent.' },
      { name: 'Architect Portfolio Generator',           desc: 'Project-focused pages for architecture and interior design.' },
      { name: 'Video Portfolio Builder',                 desc: 'Embed reels and project videos in a cinematic layout.' },
      { name: 'UX Designer Portfolio Generator',         desc: 'Case-study-ready pages for product and UX designers.' },
    ],
  },
  // ── Blogs ─────────────────────────────────────────────────────────────────
  {
    category: 'blogs',
    sectionDesc: 'Publish-ready blogs with clean reading layouts and built-in SEO basics.',
    items: [
      { name: 'Blog Generator for Beginners',            desc: 'Publish your first post in minutes, no experience needed.' },
      { name: 'AI Blog Builder',                         desc: 'AI drafts your first posts and sets up your blog structure.' },
      { name: 'Personal Blog Generator',                 desc: 'A clean, readable home for your writing and ideas.' },
      { name: 'Travel Blog Builder',                     desc: 'Map embeds, photo galleries, and destination posts.' },
      { name: 'Food Blog Generator',                     desc: 'Recipe-ready layouts with ingredient lists and photos.' },
      { name: 'Business Blog Builder',                   desc: 'Thought-leadership content that supports your brand.' },
      { name: 'Lifestyle Blog Generator',                desc: 'Warm, editorial layouts for fashion, wellness, and more.' },
      { name: 'Tech Blog Builder',                       desc: 'Code-friendly posts with syntax highlighting and clean type.' },
      { name: 'Parenting Blog Generator',                desc: 'Family-friendly layouts with photo-heavy post templates.' },
      { name: 'Niche Blog Builder',                      desc: 'Focused, topic-specific blogs that rank for long-tail terms.' },
    ],
  },
  // ── Stores ────────────────────────────────────────────────────────────────
  {
    category: 'stores',
    sectionDesc: 'Sell products online with payments, inventory, and checkout built in.',
    items: [
      { name: 'Online Store Builder',                    desc: 'Start selling without writing a single line of code.' },
      { name: 'Online Store Builder for Restaurants',    desc: 'Take orders, sell meal kits, and manage menus online.' },
      { name: 'Digital Products Store Generator',        desc: 'Sell ebooks, presets, templates, and downloads instantly.' },
      { name: 'Handmade Goods Store Builder',            desc: 'Artisan-friendly storefronts for Etsy-style sellers.' },
      { name: 'Clothing Store Website Generator',        desc: 'Fashion-forward product pages with size guides and lookbooks.' },
      { name: 'Print-on-Demand Store Builder',           desc: 'Connect your designs to fulfillment with zero inventory.' },
      { name: 'Subscription Box Store Generator',        desc: 'Recurring billing and curated product pages in one.' },
      { name: 'Local Business Online Store',             desc: 'Let your brick-and-mortar shop sell online too.' },
      { name: 'Jewelry Store Website Builder',           desc: 'Elegant product pages for fine and fashion jewelry.' },
      { name: 'Beauty Products Store Generator',         desc: 'Skincare and cosmetics storefronts with ingredient detail.' },
    ],
  },
  // ── Link-in-Bio ───────────────────────────────────────────────────────────
  {
    category: 'link-in-bio',
    sectionDesc: 'One link that holds all your channels, content, and calls to action.',
    items: [
      { name: 'Link-in-Bio Generator',                   desc: 'One link for all your channels, built in seconds.' },
      { name: 'Instagram Link-in-Bio Builder',           desc: 'Turn your Instagram bio link into a full mini-site.' },
      { name: 'TikTok Link-in-Bio Generator',            desc: 'Drive TikTok followers to your content, store, and more.' },
      { name: 'Creator Link-in-Bio Builder',             desc: 'Consolidate your content, merch, and social in one place.' },
      { name: 'Musician Link-in-Bio Generator',          desc: 'Stream links, tour dates, and merch on one page.' },
      { name: 'Influencer Bio Page Builder',             desc: 'Brand-kit-ready pages for sponsored and organic content.' },
      { name: 'Podcast Link-in-Bio Generator',           desc: 'Episode links, subscribe buttons, and show notes in one.' },
      { name: 'Coach Link-in-Bio Builder',               desc: 'Booking, testimonials, and lead capture for coaches.' },
      { name: 'Artist Link-in-Bio Generator',            desc: 'Gallery, shop, and social links for visual artists.' },
      { name: 'Small Business Bio Page Builder',         desc: 'Hours, location, menu, and contact — all from one link.' },
    ],
  },
].map((section) => ({
  ...section,
  items: section.items.map((item) => ({ ...item, slug: toSlug(item.name) })),
}));
