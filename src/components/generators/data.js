// All user-visible strings in one place for i18n readiness
export const strings = {
  en: {
    meta: {
      title: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
      description:
        'Browse Strikingly\'s AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.',
    },
    topBar: {
      logoText: 'strikingly AI',
    },
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'Build Any Kind of Site',
      h1Line2: 'With AI, In An Instant',
      subheadline:
        'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
      ctaPrimary: 'Start Building — It\'s Free',
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
      subheading: 'Sixty-plus generators, organized by what you\'re building.',
      searchPlaceholder: 'Search generators...',
      searchLabel: 'Search generators',
      resultCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      noResultsCta: 'Can\'t find it? Start with our AI builder.',
    },
    howItWorks: {
      heading: 'How It Works',
      steps: [
        {
          number: '1',
          title: 'Pick a Generator',
          body: 'Browse by category or search to find one that fits your goal.',
        },
        {
          number: '2',
          title: 'Describe Your Site',
          body: 'Tell our AI builder about your business in a sentence or two.',
        },
        {
          number: '3',
          title: 'Generate and Publish',
          body: 'Get a fully built site in seconds. Customize anything, then go live.',
        },
      ],
    },
    whyStrikingly: {
      heading: 'Why Strikingly',
      cells: [
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
          id: 'faq-1',
          question: 'What is an AI site generator?',
          answer: [
            'An AI site generator is a tool that builds a complete website for you based on a short description of your business or project. Instead of dragging and dropping elements or writing code, you simply tell the AI what you need and it produces a ready-to-publish site in seconds.',
            'Strikingly\'s generators combine AI content creation with professionally designed layouts, so the result looks polished from the start. You can then customize colors, text, images, and structure to make it your own.',
          ],
        },
        {
          id: 'faq-2',
          question: 'How is a generator different from a template?',
          answer: [
            'A template gives you a blank structure you fill in yourself. A generator fills in the structure for you — it writes placeholder copy, selects a layout suited to your goal, and organizes sections based on what you described.',
            'Think of a template as an empty house and a generator as a furnished one. You still get to rearrange the furniture, but you don\'t have to start from scratch.',
          ],
        },
        {
          id: 'faq-3',
          question: 'Are these generators free to use?',
          answer: [
            'Yes. You can generate, preview, and customize your site without entering a credit card. Strikingly offers a free plan that lets you publish a site on a Strikingly subdomain.',
            'Paid plans unlock custom domains, additional pages, e-commerce features, and priority support. You can upgrade at any time from inside the builder.',
          ],
        },
        {
          id: 'faq-4',
          question: 'What kinds of sites can I build?',
          answer: [
            'Strikingly\'s generators cover a wide range of use cases: business websites, personal portfolios, landing pages, online stores, blogs, wedding sites, restaurant pages, link-in-bio pages, and more.',
            'If you don\'t see a generator for your exact niche, the AI Site Builder can handle any description you give it — just describe what you need and it will produce a matching site.',
          ],
        },
        {
          id: 'faq-5',
          question: 'Can I customize what the generator produces?',
          answer: [
            'Absolutely. Every generated site opens directly in Strikingly\'s visual editor. You can change any text, swap images, reorder sections, adjust colors and fonts, and add or remove blocks — all without touching code.',
            'The generated site is a starting point, not a locked-in result. Most users spend five to fifteen minutes customizing before they publish.',
          ],
        },
        {
          id: 'faq-6',
          question: 'Do generated sites work on mobile?',
          answer: [
            'Yes. Every site Strikingly generates is fully responsive by default. The layout adapts automatically to phones, tablets, and desktops without any extra work on your part.',
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
      copyright: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`,
      columns: [
        {
          heading: 'Product',
          links: [
            { label: 'Templates', href: '/templates' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'AI Site Builder', href: '/s/ai_site_builder' },
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
}

// ─── Featured Generators (Section 3) ────────────────────────────────────────
export const featuredGenerators = [
  {
    slug: 'ai-website-generator',
    name: 'AI Website Generator',
    description: 'Describe your business, get a full site.',
    category: 'Website',
  },
  {
    slug: 'free-portfolio-generator',
    name: 'Free Portfolio Generator',
    description: 'For creatives, in minutes, no fee.',
    category: 'Portfolio',
  },
  {
    slug: 'ai-landing-page-maker',
    name: 'AI Landing Page Maker',
    description: 'One-page sites built to convert.',
    category: 'Landing Page',
  },
  {
    slug: 'online-store-builder',
    name: 'Online Store Builder',
    description: 'Start selling without writing code.',
    category: 'Store',
  },
  {
    slug: 'link-in-bio-generator',
    name: 'Link-in-Bio Generator',
    description: 'One link for all your channels.',
    category: 'Link-in-Bio',
  },
  {
    slug: 'one-page-website-builder',
    name: 'One-Page Website Builder',
    description: 'Simple sites, single scroll.',
    category: 'Website',
  },
  {
    slug: 'wedding-website-generator',
    name: 'Wedding Website Generator',
    description: 'Share your day with guests.',
    category: 'Website',
  },
  {
    slug: 'restaurant-website-builder',
    name: 'Restaurant Website Builder',
    description: 'Menu, hours, reservations, done.',
    category: 'Website',
  },
  {
    slug: 'blog-generator-for-beginners',
    name: 'Blog Generator for Beginners',
    description: 'Publish-ready in minutes.',
    category: 'Blog',
  },
]

// ─── Browse by Category (Section 4) ─────────────────────────────────────────
export const categories = [
  {
    id: 'websites',
    slug: 'websites',
    name: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
  },
  {
    id: 'landing-pages',
    slug: 'landing-pages',
    name: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
  },
  {
    id: 'portfolios',
    slug: 'portfolios',
    name: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
  },
  {
    id: 'blogs',
    slug: 'blogs',
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
  },
  {
    id: 'stores',
    slug: 'stores',
    name: 'Online Stores',
    description: 'Sell products online with payments built in.',
  },
  {
    id: 'link-in-bio',
    slug: 'link-in-bio',
    name: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
  },
]

// ─── All Generators directory (Section 5) ────────────────────────────────────
export const allGenerators = [
  {
    categoryId: 'websites',
    categoryLabel: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
    generators: [
      { slug: 'ai-website-generator', name: 'AI Website Generator', description: 'Describe your business, get a full site in seconds.' },
      { slug: 'free-website-builder-photographers', name: 'Free Website Builder for Photographers', description: 'Showcase your portfolio with a stunning photo-first layout.' },
      { slug: 'small-business-website-builder', name: 'Small Business Website Builder', description: 'Professional sites for local and online businesses.' },
      { slug: 'one-page-wedding-website-builder', name: 'One-Page Wedding Website Builder', description: 'Everything guests need on a single, beautiful page.' },
      { slug: 'restaurant-website-builder', name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, and location — all in one place.' },
      { slug: 'yoga-instructor-website-generator', name: 'Yoga Instructor Website Generator', description: 'Class schedules, booking, and your teaching philosophy.' },
      { slug: 'nonprofit-website-builder', name: 'Nonprofit Website Builder', description: 'Tell your mission story and accept donations online.' },
      { slug: 'freelancer-website-generator', name: 'Freelancer Website Generator', description: 'A clean professional site to win more clients.' },
      { slug: 'musician-website-builder', name: 'Musician Website Builder', description: 'Share your music, tour dates, and merch in one place.' },
      { slug: 'real-estate-agent-website', name: 'Real Estate Agent Website Generator', description: 'Listings, contact forms, and local market credibility.' },
    ],
  },
  {
    categoryId: 'landing-pages',
    categoryLabel: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    generators: [
      { slug: 'ai-landing-page-maker', name: 'AI Landing Page Maker', description: 'One-page sites built to convert, generated in seconds.' },
      { slug: 'product-launch-landing-page', name: 'Product Launch Landing Page', description: 'Build hype and capture early sign-ups before you ship.' },
      { slug: 'event-landing-page-generator', name: 'Event Landing Page Generator', description: 'Registrations, agenda, and speakers on one focused page.' },
      { slug: 'lead-generation-landing-page', name: 'Lead Generation Landing Page', description: 'Capture emails and leads with a high-converting layout.' },
      { slug: 'app-download-landing-page', name: 'App Download Landing Page', description: 'Drive installs with a clean, persuasive app showcase.' },
      { slug: 'webinar-registration-page', name: 'Webinar Registration Page Generator', description: 'Fill your webinar seats with a focused sign-up page.' },
      { slug: 'coming-soon-page-builder', name: 'Coming Soon Page Builder', description: 'Tease your launch and collect early interest.' },
      { slug: 'free-landing-page-builder', name: 'Free Landing Page Builder', description: 'No-cost landing pages that look like you paid for them.' },
      { slug: 'no-code-landing-page-maker', name: 'No-Code Landing Page Maker', description: 'Build and publish without writing a single line of code.' },
    ],
  },
  {
    categoryId: 'portfolios',
    categoryLabel: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    generators: [
      { slug: 'free-portfolio-generator', name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee.' },
      { slug: 'portfolio-generator-designers', name: 'Portfolio Generator for Designers', description: 'Grid layouts and case studies built for visual work.' },
      { slug: 'portfolio-generator-developers', name: 'Portfolio Generator for Developers', description: 'Projects, skills, and GitHub links in a clean format.' },
      { slug: 'photography-portfolio-builder', name: 'Photography Portfolio Builder', description: 'Full-bleed galleries that let your images do the talking.' },
      { slug: 'artist-portfolio-website', name: 'Artist Portfolio Website Generator', description: 'Showcase paintings, illustrations, or mixed media online.' },
      { slug: 'ux-designer-portfolio', name: 'UX Designer Portfolio Generator', description: 'Case studies and process work presented professionally.' },
      { slug: 'model-portfolio-website', name: 'Model Portfolio Website Builder', description: 'Comp cards and editorial shots in a sleek online format.' },
      { slug: 'writer-portfolio-generator', name: 'Writer Portfolio Generator', description: 'Clips, bylines, and a bio that gets you hired.' },
      { slug: 'video-portfolio-builder', name: 'Video Portfolio Builder', description: 'Embed reels and project videos in a polished showcase.' },
    ],
  },
  {
    categoryId: 'blogs',
    categoryLabel: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    generators: [
      { slug: 'blog-generator-for-beginners', name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes, no experience needed.' },
      { slug: 'ai-blog-builder', name: 'AI Blog Builder', description: 'AI writes your first posts and sets up your blog structure.' },
      { slug: 'personal-blog-generator', name: 'Personal Blog Generator', description: 'Share your thoughts, stories, and ideas with the world.' },
      { slug: 'travel-blog-builder', name: 'Travel Blog Builder', description: 'Maps, photo galleries, and destination posts in one place.' },
      { slug: 'food-blog-generator', name: 'Food Blog Generator', description: 'Recipes, reviews, and beautiful food photography layouts.' },
      { slug: 'business-blog-builder', name: 'Business Blog Builder', description: 'Thought leadership content that builds brand authority.' },
      { slug: 'fashion-blog-generator', name: 'Fashion Blog Generator', description: 'Lookbooks, outfit posts, and style guides made easy.' },
      { slug: 'tech-blog-builder', name: 'Tech Blog Builder', description: 'Tutorials, reviews, and opinion pieces for tech audiences.' },
      { slug: 'wellness-blog-generator', name: 'Wellness Blog Generator', description: 'Health tips, mindfulness content, and lifestyle posts.' },
      { slug: 'parenting-blog-builder', name: 'Parenting Blog Builder', description: 'Family stories and advice in a warm, readable format.' },
    ],
  },
  {
    categoryId: 'stores',
    categoryLabel: 'Online Stores',
    description: 'Sell products online with payments built in.',
    generators: [
      { slug: 'online-store-builder', name: 'Online Store Builder', description: 'Start selling without writing code.' },
      { slug: 'online-store-builder-restaurants', name: 'Online Store Builder for Restaurants', description: 'Online ordering, menus, and delivery options built in.' },
      { slug: 'handmade-goods-store-builder', name: 'Handmade Goods Store Builder', description: 'Sell crafts, art, and handmade products with ease.' },
      { slug: 'digital-products-store', name: 'Digital Products Store Generator', description: 'Sell ebooks, templates, and downloads instantly.' },
      { slug: 'clothing-store-builder', name: 'Clothing Store Builder', description: 'Fashion-forward layouts with size guides and lookbooks.' },
      { slug: 'beauty-store-generator', name: 'Beauty Store Generator', description: 'Skincare, cosmetics, and wellness products online.' },
      { slug: 'print-on-demand-store', name: 'Print-on-Demand Store Builder', description: 'Sell custom merch without holding any inventory.' },
      { slug: 'subscription-box-store', name: 'Subscription Box Store Generator', description: 'Recurring billing and curated product pages built in.' },
      { slug: 'local-business-online-store', name: 'Local Business Online Store', description: 'Take your brick-and-mortar shop online in an afternoon.' },
    ],
  },
  {
    categoryId: 'link-in-bio',
    categoryLabel: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    generators: [
      { slug: 'link-in-bio-generator', name: 'Link-in-Bio Generator', description: 'One link for all your channels.' },
      { slug: 'instagram-link-in-bio', name: 'Instagram Link-in-Bio Builder', description: 'Turn your Instagram bio link into a full content hub.' },
      { slug: 'tiktok-link-in-bio', name: 'TikTok Link-in-Bio Generator', description: 'Drive TikTok followers to your content, shop, and more.' },
      { slug: 'creator-link-page-builder', name: 'Creator Link Page Builder', description: 'All your content, merch, and social links in one place.' },
      { slug: 'musician-link-in-bio', name: 'Musician Link-in-Bio Generator', description: 'Streaming links, tour dates, and merch for artists.' },
      { slug: 'influencer-link-page', name: 'Influencer Link Page Generator', description: 'Brand deals, affiliate links, and content in one hub.' },
      { slug: 'podcast-link-in-bio', name: 'Podcast Link-in-Bio Builder', description: 'All your listening platforms and episode links together.' },
      { slug: 'coach-link-page-builder', name: 'Coach Link Page Builder', description: 'Booking, resources, and social proof for coaches.' },
      { slug: 'free-link-in-bio-builder', name: 'Free Link-in-Bio Builder', description: 'No cost, no code — your link hub live in minutes.' },
    ],
  },
]
