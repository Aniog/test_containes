// All user-visible strings — add strings.es, strings.ja for i18n
export const strings = {
  en: {
    meta: {
      title: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
      description:
        "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.",
    },
    topbar: { logo: 'Strikingly AI' },
    breadcrumb: { home: 'Strikingly', current: 'AI Generators' },
    hero: {
      h1Line1: 'Build Any Kind of Site',
      h1Line2: 'With AI, In An Instant',
      sub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      ctaPrimary: "Start Building — It's Free",
      ctaSecondary: 'Browse Generators',
    },
    featured: {
      heading: 'Featured Generators',
      sub: 'A few common starting points.',
    },
    browseByCategory: {
      heading: 'Browse by Category',
    },
    allGenerators: {
      heading: 'All Generators',
      sub: 'Sixty-plus generators, organized by what you\'re building.',
      searchPlaceholder: 'Search generators…',
      searchLabel: 'Search generators',
      resultCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
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
          q: 'What is an AI site generator?',
          a: "An AI site generator is a tool that builds a complete website for you based on a short description of your business or goal. Instead of dragging and dropping elements manually, you describe what you need and the AI assembles the layout, copy, and design in seconds.\n\nStrikingly's generators are tuned for specific use cases — portfolios, stores, landing pages, and more — so the output is already shaped for your purpose before you even start customizing.",
        },
        {
          q: 'How is a generator different from a template?',
          a: "A template is a static starting point: you pick a design and fill in your own content. A generator is dynamic: it takes your input and produces a site tailored to what you described, including suggested copy, structure, and imagery.\n\nThe result still looks like a professionally designed site, but it's built around your specific business rather than a generic placeholder.",
        },
        {
          q: 'Are these generators free to use?',
          a: "Yes. You can generate, preview, and customize any site on Strikingly for free. Publishing to a custom domain or unlocking advanced features requires a paid plan, but there's no cost to explore and build.\n\nNo credit card is required to get started.",
        },
        {
          q: "What kinds of sites can I build?",
          a: "Strikingly's generators cover business websites, personal portfolios, landing pages, online stores, blogs, wedding sites, restaurant sites, link-in-bio pages, and dozens of other use cases.\n\nIf you don't see a generator for your exact niche, the AI Website Generator is a good all-purpose starting point — just describe your business and it will figure out the right structure.",
        },
        {
          q: 'Can I customize what the generator produces?',
          a: "Absolutely. Every generated site opens in Strikingly's visual editor, where you can change text, swap images, reorder sections, adjust colors, and add or remove any element.\n\nThe generator gives you a strong starting point; the editor lets you make it yours.",
        },
        {
          q: 'Do generated sites work on mobile?',
          a: "Yes. Every site built with Strikingly is responsive by default. The generator produces a layout that adapts automatically to phones, tablets, and desktops without any extra work on your part.",
        },
      ],
    },
    closingCta: {
      heading: 'Ready to Build?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'Start with AI Builder',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`,
      cols: [
        {
          heading: 'Product',
          links: [
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'AI Builder', href: '/s/ai_site_builder' },
          ],
        },
        {
          heading: 'Company',
          links: [
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
          ],
        },
        {
          heading: 'Support',
          links: [
            { label: 'Help Center', href: '/support' },
          ],
        },
        {
          heading: 'Legal',
          links: [
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Privacy Policy', href: '/privacy' },
          ],
        },
      ],
    },
  },
};

// ── Featured generators (Section 3) ───────────────────────────────────────────
export const featuredGenerators = [
  { name: 'AI Website Generator', slug: 'ai-website-generator', desc: 'Describe your business, get a full site.', category: 'Website' },
  { name: 'Free Portfolio Generator', slug: 'free-portfolio-generator', desc: 'For creatives, in minutes, no fee.', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', slug: 'ai-landing-page-maker', desc: 'One-page sites built to convert.', category: 'Landing Page' },
  { name: 'Online Store Builder', slug: 'online-store-builder', desc: 'Start selling without writing code.', category: 'Store' },
  { name: 'Link-in-Bio Generator', slug: 'link-in-bio-generator', desc: 'One link for all your channels.', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', slug: 'one-page-website-builder', desc: 'Simple sites, single scroll.', category: 'Website' },
  { name: 'Wedding Website Generator', slug: 'wedding-website-generator', desc: 'Share your day with guests.', category: 'Website' },
  { name: 'Restaurant Website Builder', slug: 'restaurant-website-builder', desc: 'Menu, hours, reservations, done.', category: 'Website' },
  { name: 'Blog Generator for Beginners', slug: 'blog-generator-for-beginners', desc: 'Publish-ready in minutes.', category: 'Blog' },
];

// ── Browse-by-category cards (Section 4) ──────────────────────────────────────
export const categories = [
  { id: 'websites', label: 'Websites', desc: 'AI-built business and personal sites for any goal.', hash: '#websites' },
  { id: 'landing-pages', label: 'Landing Pages', desc: 'Single-page sites built to convert visitors fast.', hash: '#landing-pages' },
  { id: 'portfolios', label: 'Portfolios', desc: 'Showcase your work with a clean, focused site.', hash: '#portfolios' },
  { id: 'blogs', label: 'Blogs', desc: 'Publish-ready blogs with built-in SEO basics.', hash: '#blogs' },
  { id: 'stores', label: 'Online Stores', desc: 'Sell products online with payments built in.', hash: '#stores' },
  { id: 'link-in-bio', label: 'Link-in-Bio', desc: 'One link, all your places. Made for creators.', hash: '#link-in-bio' },
];

// ── All generators directory (Section 5) ──────────────────────────────────────
export const allGenerators = [
  {
    categoryId: 'websites',
    categoryLabel: 'Websites',
    desc: 'AI-built business and personal sites for any goal.',
    generators: [
      { name: 'AI Website Generator', slug: 'ai-website-generator', desc: 'Describe your business, get a complete site in seconds.' },
      { name: 'Free Website Builder for Photographers', slug: 'free-website-builder-for-photographers', desc: 'Showcase your portfolio with a clean, image-first layout.' },
      { name: 'One-Page Wedding Website Builder', slug: 'one-page-wedding-website-builder', desc: 'Share your date, venue, and RSVP in one beautiful scroll.' },
      { name: 'No-Code Business Website Maker', slug: 'no-code-business-website-maker', desc: 'Professional business site without touching a line of code.' },
      { name: 'AI Website Builder for Yoga Instructors', slug: 'ai-website-builder-for-yoga-instructors', desc: 'Class schedules, booking, and your story — all in one place.' },
      { name: 'Restaurant Website Builder', slug: 'restaurant-website-builder', desc: 'Menu, hours, reservations, and directions, done.' },
      { name: 'Beautiful Personal Website Generator', slug: 'beautiful-personal-website-generator', desc: 'A polished personal site that reflects who you are.' },
      { name: 'Small Business Website Creator', slug: 'small-business-website-creator', desc: 'Get your local business online fast with AI-generated copy.' },
      { name: 'Wedding Website Generator', slug: 'wedding-website-generator', desc: 'Everything guests need, from the ceremony to the after-party.' },
      { name: 'AI Website Builder for Coaches', slug: 'ai-website-builder-for-coaches', desc: 'Attract clients with a site that explains your method and results.' },
      { name: 'Nonprofit Website Generator', slug: 'nonprofit-website-generator', desc: 'Tell your mission story and collect donations online.' },
      { name: 'Event Website Builder', slug: 'event-website-builder', desc: 'Promote your event, sell tickets, and share the schedule.' },
    ],
  },
  {
    categoryId: 'landing-pages',
    categoryLabel: 'Landing Pages',
    desc: 'Single-page sites built to convert visitors fast.',
    generators: [
      { name: 'AI Landing Page Maker', slug: 'ai-landing-page-maker', desc: 'One-page sites built to convert, generated in seconds.' },
      { name: 'Product Launch Landing Page Generator', slug: 'product-launch-landing-page-generator', desc: 'Build hype and capture early sign-ups before you ship.' },
      { name: 'Free Lead Capture Page Builder', slug: 'free-lead-capture-page-builder', desc: 'Collect emails and leads without a monthly fee.' },
      { name: 'Webinar Registration Page Maker', slug: 'webinar-registration-page-maker', desc: 'Drive sign-ups for your next live or recorded session.' },
      { name: 'App Download Landing Page Generator', slug: 'app-download-landing-page-generator', desc: 'Showcase your app and funnel visitors to the App Store or Play Store.' },
      { name: 'Coming Soon Page Builder', slug: 'coming-soon-page-builder', desc: 'Hold your spot online and collect interest before launch.' },
      { name: 'Sales Page Generator', slug: 'sales-page-generator', desc: 'Long-form sales pages with persuasive structure, built by AI.' },
      { name: 'Squeeze Page Maker', slug: 'squeeze-page-maker', desc: 'Minimal, focused pages designed to maximize email opt-ins.' },
      { name: 'Thank You Page Generator', slug: 'thank-you-page-generator', desc: 'Confirm conversions and guide visitors to the next step.' },
      { name: 'Waitlist Landing Page Builder', slug: 'waitlist-landing-page-builder', desc: 'Build anticipation and a list before your product is ready.' },
    ],
  },
  {
    categoryId: 'portfolios',
    categoryLabel: 'Portfolios',
    desc: 'Showcase your work with a clean, focused site.',
    generators: [
      { name: 'Free Portfolio Generator', slug: 'free-portfolio-generator', desc: 'For creatives, in minutes, no fee required.' },
      { name: 'Portfolio Generator for Designers', slug: 'portfolio-generator-for-designers', desc: 'Let your visual work speak with a minimal, image-forward layout.' },
      { name: 'Photography Portfolio Website Builder', slug: 'photography-portfolio-website-builder', desc: 'Full-bleed galleries and clean typography for photographers.' },
      { name: 'Freelancer Portfolio Site Generator', slug: 'freelancer-portfolio-site-generator', desc: 'Win more clients with a site that shows your best work.' },
      { name: 'Artist Portfolio Website Maker', slug: 'artist-portfolio-website-maker', desc: 'Gallery-style layouts for painters, illustrators, and sculptors.' },
      { name: 'UX Designer Portfolio Generator', slug: 'ux-designer-portfolio-generator', desc: 'Case studies, process shots, and a contact form, all in one.' },
      { name: 'Video Portfolio Website Builder', slug: 'video-portfolio-website-builder', desc: 'Embed your reels and showcase your production work.' },
      { name: 'Architect Portfolio Site Generator', slug: 'architect-portfolio-site-generator', desc: 'Present projects with plans, renders, and photography.' },
      { name: 'Model Portfolio Website Maker', slug: 'model-portfolio-website-maker', desc: 'Clean comp-card style layouts for modeling portfolios.' },
    ],
  },
  {
    categoryId: 'blogs',
    categoryLabel: 'Blogs',
    desc: 'Publish-ready blogs with built-in SEO basics.',
    generators: [
      { name: 'Blog Generator for Beginners', slug: 'blog-generator-for-beginners', desc: 'Publish-ready in minutes, no experience needed.' },
      { name: 'AI Blog Website Builder', slug: 'ai-blog-website-builder', desc: 'AI picks the layout and structure so you can focus on writing.' },
      { name: 'Personal Blog Site Generator', slug: 'personal-blog-site-generator', desc: 'A clean, readable home for your thoughts and stories.' },
      { name: 'Food Blog Website Maker', slug: 'food-blog-website-maker', desc: 'Recipe-friendly layouts with beautiful food photography support.' },
      { name: 'Travel Blog Generator', slug: 'travel-blog-generator', desc: 'Map embeds, photo galleries, and destination-focused design.' },
      { name: 'Business Blog Builder', slug: 'business-blog-builder', desc: 'Thought leadership content that builds trust with your audience.' },
      { name: 'Lifestyle Blog Website Creator', slug: 'lifestyle-blog-website-creator', desc: 'Warm, editorial layouts for fashion, wellness, and culture.' },
      { name: 'Tech Blog Generator', slug: 'tech-blog-generator', desc: 'Code-friendly formatting and a clean reading experience.' },
      { name: 'Parenting Blog Site Builder', slug: 'parenting-blog-site-builder', desc: 'Friendly, approachable design for family and parenting content.' },
      { name: 'Niche Blog Website Generator', slug: 'niche-blog-website-generator', desc: 'Describe your topic and get a blog shaped around it.' },
    ],
  },
  {
    categoryId: 'stores',
    categoryLabel: 'Online Stores',
    desc: 'Sell products online with payments built in.',
    generators: [
      { name: 'Online Store Builder', slug: 'online-store-builder', desc: 'Start selling without writing a line of code.' },
      { name: 'Online Store Builder for Restaurants', slug: 'online-store-builder-for-restaurants', desc: 'Take orders and sell meal kits directly from your site.' },
      { name: 'Digital Products Store Generator', slug: 'digital-products-store-generator', desc: 'Sell ebooks, templates, and downloads with instant delivery.' },
      { name: 'Handmade Goods Store Builder', slug: 'handmade-goods-store-builder', desc: 'Artisan-friendly layouts that highlight craft and story.' },
      { name: 'Fashion Boutique Website Generator', slug: 'fashion-boutique-website-generator', desc: 'Editorial product pages for clothing and accessories.' },
      { name: 'Print-on-Demand Store Builder', slug: 'print-on-demand-store-builder', desc: 'Connect your designs to a print-on-demand fulfillment service.' },
      { name: 'Subscription Box Store Generator', slug: 'subscription-box-store-generator', desc: 'Recurring billing and unboxing-focused product pages.' },
      { name: 'Local Bakery Online Store Builder', slug: 'local-bakery-online-store-builder', desc: 'Take pre-orders and sell baked goods online.' },
      { name: 'Fitness Products Store Generator', slug: 'fitness-products-store-generator', desc: 'Sell gear, supplements, and programs from one storefront.' },
      { name: 'Art Print Store Builder', slug: 'art-print-store-builder', desc: 'Gallery-quality product pages for prints and originals.' },
    ],
  },
  {
    categoryId: 'link-in-bio',
    categoryLabel: 'Link-in-Bio',
    desc: 'One link, all your places. Made for creators.',
    generators: [
      { name: 'Link-in-Bio Generator', slug: 'link-in-bio-generator', desc: 'One link for all your channels, built in seconds.' },
      { name: 'Instagram Link-in-Bio Builder', slug: 'instagram-link-in-bio-builder', desc: 'Turn your Instagram bio link into a full content hub.' },
      { name: 'Creator Link Page Generator', slug: 'creator-link-page-generator', desc: 'Showcase your content, merch, and social profiles in one place.' },
      { name: 'Musician Link-in-Bio Site Builder', slug: 'musician-link-in-bio-site-builder', desc: 'Stream links, tour dates, and merch — all from one URL.' },
      { name: 'Influencer Bio Link Page Maker', slug: 'influencer-bio-link-page-maker', desc: 'Brand-matched link pages for influencers and content creators.' },
      { name: 'Podcast Link Page Generator', slug: 'podcast-link-page-generator', desc: 'Direct listeners to every platform you publish on.' },
      { name: 'TikTok Bio Link Builder', slug: 'tiktok-bio-link-builder', desc: 'Convert TikTok viewers into followers, subscribers, and buyers.' },
      { name: 'Author Bio Link Page Generator', slug: 'author-bio-link-page-generator', desc: 'Books, newsletter, events, and social — one clean page.' },
      { name: 'Fitness Coach Link-in-Bio Builder', slug: 'fitness-coach-link-in-bio-builder', desc: 'Programs, booking, and social proof in a single link.' },
    ],
  },
];
