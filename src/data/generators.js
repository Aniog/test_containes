// i18n-ready strings object — add strings.es, strings.ja for other locales
export const strings = {
  en: {
    meta: {
      title: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
      description:
        "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.",
      ogTitle: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
      ogDescription:
        "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds.",
      canonical: 'https://www.strikingly.com/generators',
    },
    topbar: { logoText: 'strikingly AI' },
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'Build Any Kind of Site',
      h1Line2: 'With AI, In An Instant',
      subheadline:
        "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      ctaPrimary: "Start Building — It's Free",
      ctaSecondary: 'Browse Generators',
    },
    featured: {
      heading: 'Featured Generators',
      subheading: 'A few common starting points.',
    },
    browseByCategory: {
      heading: 'Browse by Category',
    },
    allGenerators: {
      heading: 'All Generators',
      subheading: "Sixty-plus generators, organized by what you're building.",
      searchPlaceholder: 'Search generators...',
      searchLabel: 'Search generators',
      resultCount: (n) => `${n} generator${n === 1 ? '' : 's'} match`,
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      noResultsCta: "Can't find it? Start with our AI builder.",
      showAll: (n) => `Show all ${n} generators`,
      showLess: 'Show less',
    },
    howItWorks: {
      heading: 'How It Works',
      steps: [
        {
          number: '01',
          title: 'Pick a Generator',
          body: 'Browse by category or search to find one that fits your goal.',
        },
        {
          number: '02',
          title: 'Describe Your Site',
          body: 'Tell our AI builder about your business in a sentence or two.',
        },
        {
          number: '03',
          title: 'Generate and Publish',
          body: 'Get a fully built site in seconds. Customize anything, then go live.',
        },
      ],
    },
    whyStrikingly: {
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
          question: 'What is an AI site generator?',
          answer: [
            'An AI site generator is a tool that uses artificial intelligence to build a complete website for you based on a short description of your business, project, or goal. Instead of dragging and dropping elements or writing code, you simply describe what you need and the AI assembles a full site — with layout, copy, and images — in seconds.',
            "Strikingly's generators are tuned for specific use cases, so the AI already understands the structure a photographer's portfolio needs versus what a restaurant site requires. That means less editing and a better starting point.",
          ],
        },
        {
          question: 'How is a generator different from a template?',
          answer: [
            'A template is a blank design you fill in yourself. A generator is a starting point that already knows your context. When you use a Strikingly generator, the AI reads your description and populates the site with relevant copy, section order, and layout choices — not just a visual shell.',
            'You still get full control to edit every word and element after generation. The difference is that you start from something meaningful rather than from scratch.',
          ],
        },
        {
          question: 'Are these generators free to use?',
          answer: [
            'Yes. You can generate, preview, and customize your site without entering a credit card. Strikingly offers a free plan that lets you publish a site on a Strikingly subdomain.',
            'Paid plans unlock custom domains, additional pages, e-commerce features, and priority support. You can upgrade at any time from inside the builder.',
          ],
        },
        {
          question: 'What kinds of sites can I build?',
          answer: [
            'Strikingly generators cover a wide range of site types: business websites, personal portfolios, landing pages, online stores, blogs, link-in-bio pages, event sites, and more. Each generator is optimized for its category, so the AI produces a structure that fits your specific goal.',
            "If you don't see a generator for your exact use case, the AI Site Builder accepts any description and will produce a custom site for you.",
          ],
        },
        {
          question: 'Can I customize what the generator produces?',
          answer: [
            "Absolutely. Every generated site opens directly in Strikingly's visual editor, where you can change text, swap images, reorder sections, adjust colors, and add or remove any element. The generator gives you a strong starting point; you have full control from there.",
          ],
        },
        {
          question: 'Do generated sites work on mobile?',
          answer: [
            'Yes. Every site produced by a Strikingly generator is fully responsive by default. The layout automatically adapts to phones, tablets, and desktops without any extra work on your part.',
            'You can preview the mobile view inside the editor before publishing to make sure everything looks exactly the way you want.',
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
      logoText: 'strikingly AI',
      copyright: `© ${new Date().getFullYear()} Strikingly, Inc. All rights reserved.`,
      columns: [
        {
          heading: 'Product',
          links: [
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'AI Site Builder', href: '/s/ai_site_builder' },
            { label: 'Blog', href: '/blog' },
          ],
        },
        {
          heading: 'Company',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Support', href: '/support' },
          ],
        },
        {
          heading: 'Legal',
          links: [
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Privacy Policy', href: '/privacy' },
          ],
        },
        {
          heading: 'Generators',
          links: [
            { label: 'Website Generators', href: '/generators#websites' },
            { label: 'Landing Page Makers', href: '/generators#landing-pages' },
            { label: 'Portfolio Builders', href: '/generators#portfolios' },
            { label: 'Blog Generators', href: '/generators#blogs' },
            { label: 'Store Builders', href: '/generators#stores' },
            { label: 'Link-in-Bio Tools', href: '/generators#link-in-bio' },
          ],
        },
      ],
    },
  },
};

// Utility: convert a name to a URL slug
export function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

// Featured generators (9 tiles, mixed categories — tags shown)
export const featuredGenerators = [
  {
    name: 'AI Website Generator',
    description: 'Describe your business, get a full site.',
    category: 'Website',
  },
  {
    name: 'Free Portfolio Generator',
    description: 'For creatives, in minutes, no fee.',
    category: 'Portfolio',
  },
  {
    name: 'AI Landing Page Maker',
    description: 'One-page sites built to convert.',
    category: 'Landing Page',
  },
  {
    name: 'Online Store Builder',
    description: 'Start selling without writing code.',
    category: 'Store',
  },
  {
    name: 'Link-in-Bio Generator',
    description: 'One link for all your channels.',
    category: 'Link-in-Bio',
  },
  {
    name: 'One-Page Website Builder',
    description: 'Simple sites, single scroll.',
    category: 'Website',
  },
  {
    name: 'Wedding Website Generator',
    description: 'Share your day with guests.',
    category: 'Website',
  },
  {
    name: 'Restaurant Website Builder',
    description: 'Menu, hours, reservations, done.',
    category: 'Website',
  },
  {
    name: 'Blog Generator for Beginners',
    description: 'Publish-ready in minutes.',
    category: 'Blog',
  },
];

// Browse-by-category cards (6 categories)
export const categories = [
  {
    id: 'websites',
    name: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
    href: '/generators#websites',
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    href: '/generators#landing-pages',
  },
  {
    id: 'portfolios',
    name: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    href: '/generators#portfolios',
  },
  {
    id: 'blogs',
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    href: '/generators#blogs',
  },
  {
    id: 'stores',
    name: 'Online Stores',
    description: 'Sell products online with payments built in.',
    href: '/generators#stores',
  },
  {
    id: 'link-in-bio',
    name: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    href: '/generators#link-in-bio',
  },
];

// All generators directory — 6 subsections, 8–12 entries each
export const allGeneratorSections = [
  {
    id: 'websites',
    heading: 'Websites',
    description: 'Business and personal sites for every industry and goal.',
    generators: [
      { name: 'AI Website Generator', description: 'Describe your business, get a full site in seconds.' },
      { name: 'Free Website Builder for Photographers', description: 'Showcase your work with a professional photography site.' },
      { name: 'One-Page Wedding Website Builder', description: 'Share your day with guests in a beautiful single-scroll site.' },
      { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, and contact — all in one place.' },
      { name: 'Small Business Website Generator', description: 'Get online fast with a polished, professional look.' },
      { name: 'Yoga Instructor Website Builder', description: 'Book classes, share your schedule, and grow your studio.' },
      { name: 'Freelancer Website Generator', description: 'Win clients with a polished online presence and contact form.' },
      { name: 'Real Estate Agent Website Builder', description: 'Listings, bio, and contact info in one professional site.' },
      { name: 'Nonprofit Website Generator', description: 'Tell your story, share your mission, and accept donations.' },
      { name: 'Event Website Builder', description: 'Promote your event, share the agenda, and sell tickets online.' },
      { name: 'Personal Website Generator', description: 'A clean, simple site for your name, work, and contact.' },
      { name: 'Musician Website Builder', description: 'Share your music, tour dates, and merch in one place.' },
    ],
  },
  {
    id: 'landing-pages',
    heading: 'Landing Pages',
    description: 'Single-page sites designed to convert visitors into leads or customers.',
    generators: [
      { name: 'AI Landing Page Maker', description: 'One-page sites built to convert, generated in seconds.' },
      { name: 'Product Launch Landing Page Generator', description: 'Announce your product with impact and capture early interest.' },
      { name: 'Lead Generation Landing Page Builder', description: 'Capture emails and grow your list with a focused opt-in page.' },
      { name: 'Webinar Registration Page Generator', description: 'Fill your virtual event seats fast with a clean sign-up page.' },
      { name: 'App Download Landing Page Builder', description: 'Drive installs with a focused, persuasive app landing page.' },
      { name: 'Coming Soon Page Generator', description: 'Build anticipation before you launch with a countdown page.' },
      { name: 'Sales Page Generator', description: 'Turn visitors into buyers with a persuasive long-form sales page.' },
      { name: 'Free Landing Page Builder for Coaches', description: 'Attract clients with a clean pitch page and booking link.' },
      { name: 'No-Code Landing Page Builder', description: 'Build a high-converting page without touching a line of code.' },
    ],
  },
  {
    id: 'portfolios',
    heading: 'Portfolios',
    description: 'Showcase your work with a focused, professional portfolio site.',
    generators: [
      { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee required.' },
      { name: 'Portfolio Generator for Designers', description: 'Show your visual work in a clean, grid-based layout.' },
      { name: 'Photography Portfolio Builder', description: 'Display your shots in a stunning, full-bleed gallery.' },
      { name: 'UX Designer Portfolio Generator', description: 'Case studies and process work, beautifully laid out.' },
      { name: 'Illustrator Portfolio Website Builder', description: 'Let your art take center stage with a gallery-first design.' },
      { name: 'Architect Portfolio Generator', description: 'Projects, plans, and credentials in one polished site.' },
      { name: 'Writer Portfolio Builder', description: 'Clips, bio, and contact for journalists and authors.' },
      { name: 'Video Producer Portfolio Generator', description: 'Embed reels and showcase your projects with video-first layouts.' },
      { name: 'Artist Portfolio Website Builder', description: 'Gallery-style site for fine artists and mixed-media creators.' },
      { name: 'Model Portfolio Generator', description: 'A clean, image-forward site for your comp card and bookings.' },
    ],
  },
  {
    id: 'blogs',
    heading: 'Blogs',
    description: 'Publish-ready blogs with clean layouts and built-in SEO basics.',
    generators: [
      { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes, no experience needed.' },
      { name: 'AI Blog Builder', description: 'Generate posts and layout with a single prompt.' },
      { name: 'Personal Blog Generator', description: 'Share your thoughts with a clean, readable design.' },
      { name: 'Travel Blog Builder', description: 'Document your adventures with maps, galleries, and stories.' },
      { name: 'Food Blog Generator', description: 'Recipes, photos, and reviews in a beautiful, appetizing layout.' },
      { name: 'Tech Blog Builder', description: 'Write about code and products with a developer-friendly design.' },
      { name: 'Lifestyle Blog Generator', description: 'Fashion, wellness, and culture in one polished publication.' },
      { name: 'Business Blog Builder', description: 'Thought leadership content that builds authority for your brand.' },
      { name: 'Parenting Blog Generator', description: 'Share your family stories with a warm, welcoming design.' },
    ],
  },
  {
    id: 'stores',
    heading: 'Online Stores',
    description: 'Sell products online with payments, inventory, and checkout built in.',
    generators: [
      { name: 'Online Store Builder', description: 'Start selling without writing a single line of code.' },
      { name: 'Online Store Builder for Restaurants', description: 'Sell meals, gift cards, and merch directly from your site.' },
      { name: 'Handmade Goods Store Generator', description: 'Sell your crafts with a beautiful, artisan-style shop.' },
      { name: 'Digital Products Store Builder', description: 'Sell ebooks, courses, and downloads with instant delivery.' },
      { name: 'Clothing Store Website Generator', description: 'Fashion-forward store with size guides and lookbook pages.' },
      { name: 'Photography Print Store Builder', description: 'Sell prints directly from your portfolio with a built-in shop.' },
      { name: 'Subscription Box Store Generator', description: 'Recurring orders and product pages built in from day one.' },
      { name: 'Local Business Online Store Builder', description: 'Take your brick-and-mortar shop online in minutes.' },
      { name: 'Artist Merch Store Generator', description: 'Sell prints, apparel, and originals alongside your portfolio.' },
      { name: 'Dropshipping Store Builder', description: 'Launch a store without holding inventory or shipping yourself.' },
    ],
  },
  {
    id: 'link-in-bio',
    heading: 'Link-in-Bio',
    description: 'One link that connects your audience to everything you create.',
    generators: [
      { name: 'Link-in-Bio Generator', description: 'One link for all your channels, built in seconds.' },
      { name: 'Creator Link-in-Bio Builder', description: 'Connect your audience to everything you make in one tap.' },
      { name: 'Musician Link-in-Bio Generator', description: 'Streaming links, tour dates, and merch in one place.' },
      { name: 'Influencer Link-in-Bio Builder', description: 'All your brand deals and content in one clean, tappable page.' },
      { name: 'Podcast Link-in-Bio Generator', description: 'Episodes, subscribe links, and show notes in one link.' },
      { name: 'Artist Link-in-Bio Builder', description: 'Gallery, shop, and social links for visual creators.' },
      { name: 'Coach Link-in-Bio Generator', description: 'Booking, resources, and social proof in one link.' },
      { name: 'Small Business Link-in-Bio Builder', description: 'Hours, menu, booking, and social all in one place.' },
      { name: 'Nonprofit Link-in-Bio Generator', description: 'Donation links, events, and updates in a single shareable page.' },
    ],
  },
];
