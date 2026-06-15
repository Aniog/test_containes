export const strings = {
  en: {
    hero: {
      line1: 'BUILD ANY KIND OF SITE',
      line2: 'WITH AI, IN AN INSTANT',
      sub: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
      ctaPrimary: 'START BUILDING - IT\'S FREE',
      ctaSecondary: 'BROWSE GENERATORS',
    },
    featured: {
      title: 'FEATURED GENERATORS',
      sub: 'A few common starting points.',
    },
    browseByCategory: {
      title: 'BROWSE BY CATEGORY',
    },
    allGenerators: {
      title: 'ALL GENERATORS',
      sub: 'Sixty-plus generators, organized by what you\'re building.',
      searchPlaceholder: 'Search generators...',
      matchCount: '{count} generators match',
      emptyState: 'Can\'t find it? Start with our AI builder.',
      clearSearch: 'Clear search',
    },
    howItWorks: {
      title: 'HOW IT WORKS',
      steps: [
        {
          title: 'PICK A GENERATOR',
          desc: 'Browse by category or search to find one that fits your goal.',
        },
        {
          title: 'DESCRIBE YOUR SITE',
          desc: 'Tell our AI builder about your business in a sentence or two.',
        },
        {
          title: 'GENERATE AND PUBLISH',
          desc: 'Get a fully built site in seconds. Customize anything, then go live.',
        },
      ],
    },
    whyStrikingly: {
      title: 'WHY STRIKINGLY',
      claims: [
        {
          title: 'LIVE IN SECONDS',
          desc: 'Describe your site, we build it. No setup, no learning curve.',
        },
        {
          title: 'MOBILE BY DEFAULT',
          desc: 'Every generator produces responsive sites that work on any device.',
        },
        {
          title: 'FREE TO START',
          desc: 'Generate, customize, and publish without a credit card.',
        },
      ],
    },
    faq: {
      title: 'FREQUENTLY ASKED QUESTIONS',
      questions: [
        {
          q: 'What is an AI site generator?',
          a: 'An AI site generator is a tool that uses artificial intelligence to build a complete website based on your description. Instead of starting from a blank template, you tell the AI what you need, and it handles layout, design, and initial content.',
        },
        {
          q: 'How is a generator different from a template?',
          a: 'Templates are pre-made layouts you have to fill in manually. A generator builds the site for you, choosing the right blocks and images based on your specific business or goal. It\'s much faster than manual customization.',
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes! You can use our AI generators to build and preview your site for free. You only pay if you decide to upgrade to a premium plan for advanced features or a custom domain.',
        },
        {
          q: 'What kinds of sites can I build?',
          a: 'You can build almost anything! From business websites and portfolio sites to landing pages, blogs, and online stores. Each generator is optimized for its specific goal.',
        },
        {
          q: 'Can I customize what the generator produces?',
          a: 'Absolutely. After the AI builds your site, you can use our intuitive editor to change colors, swap images, edit text, and add or remove sections. You have full control over the final result.',
        },
        {
          q: 'Do generated sites work on mobile?',
          a: 'Yes, every site built with our AI generators is fully responsive. Your website will look great and function perfectly on desktops, tablets, and mobile phones automatically.',
        },
      ],
    },
    closingCta: {
      title: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      links: [
        { name: 'About', path: '/about' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Templates', path: '/templates' },
        { name: 'Support', path: '/support' },
        { name: 'Blog', path: '/blog' },
        { name: 'Terms', path: '/terms' },
        { name: 'Privacy', path: '/privacy' },
      ],
      copyright: '© 2026 Strikingly. All rights reserved.',
    },
  },
};

export const categories = [
  {
    id: 'websites',
    name: 'Websites',
    desc: 'AI-built business and personal sites for any goal.',
    icon: '🌐',
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    desc: 'Single-page sites built to convert visitors fast.',
    icon: '🚀',
  },
  {
    id: 'portfolios',
    name: 'Portfolios',
    desc: 'Showcase your work with a clean, focused site.',
    icon: '🎨',
  },
  {
    id: 'blogs',
    name: 'Blogs',
    desc: 'Publish-ready blogs with built-in SEO basics.',
    icon: '📝',
  },
  {
    id: 'stores',
    name: 'Online Stores',
    desc: 'Sell products online with payments built in.',
    icon: '🛍️',
  },
  {
    id: 'link-in-bio',
    name: 'Link-in-Bio',
    desc: 'One link, all your places. Made for creators.',
    icon: '🔗',
  },
];

export const featuredGenerators = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site', cat: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', cat: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', cat: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code', cat: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', cat: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', cat: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests', cat: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', cat: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', cat: 'Blog', slug: 'blog-generator-for-beginners' },
];

export const allGenerators = {
  websites: [
    { name: 'AI Website Generator', desc: 'Full business site in seconds', slug: 'ai-website-generator' },
    { name: 'Free Website Builder for Photographers', desc: 'Showcase your shots beautifully', slug: 'website-photographers' },
    { name: 'Small Business AI Website', desc: 'Get your business online today', slug: 'small-business-ai' },
    { name: 'One-Page Wedding Website Builder', desc: 'Share your event details', slug: 'wedding-website' },
    { name: 'Restaurant Website Builder', desc: 'Menus and reservations made easy', slug: 'restaurant-website' },
    { name: 'Creative Agency Site Maker', desc: 'Build your agency presence', slug: 'agency-site' },
    { name: 'Personal Brand Website Gen', desc: 'Market yourself with AI', slug: 'personal-brand' },
    { name: 'Real Estate Website Builder', desc: 'Listings and contact forms ready', slug: 'real-estate' },
    { name: 'Yoga Studio Website Maker', desc: 'Classes and schedules online', slug: 'yoga-studio' },
    { name: 'Beauty Salon Website Gen', desc: 'Booking and services focus', slug: 'beauty-salon' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', desc: 'High-converting single pages', slug: 'ai-landing-page-maker' },
    { name: 'Product Launch Landing Page', desc: 'Buzz for your new product', slug: 'product-launch' },
    { name: 'SaaS Landing Page Generator', desc: 'Lead gen for software companies', slug: 'saas-landing' },
    { name: 'App Promo Page Builder', desc: 'Get more mobile app downloads', slug: 'app-promo' },
    { name: 'Event Registration Landing Page', desc: 'Sell tickets and track RSVPs', slug: 'event-reg' },
    { name: 'Ebook Sales Page Gen', desc: 'Convert visitors into readers', slug: 'ebook-sales' },
    { name: 'Consulting Landing Page Builder', desc: 'Showcase expertise and book calls', slug: 'consulting-landing' },
    { name: 'Coming Soon Page Maker', desc: 'Build a waitlist before launch', slug: 'coming-soon' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', desc: 'For designers and artists', slug: 'free-portfolio-generator' },
    { name: 'Writer Portfolio Builder', desc: 'Focus on your best text', slug: 'writer-portfolio' },
    { name: 'Developer Portfolio Gen', desc: 'Showcase your code and projects', slug: 'dev-portfolio' },
    { name: 'Student Portfolio Maker', desc: 'Start your career right', slug: 'student-portfolio' },
    { name: 'Architecture Portfolio Builder', desc: 'Visual focus for your designs', slug: 'arch-portfolio' },
    { name: 'UX Designer Portfolio Maker', desc: 'Case studies made simple', slug: 'ux-portfolio' },
    { name: 'Marketing Portfolio Gen', desc: 'Results-driven project showcase', slug: 'marketing-portfolio' },
    { name: 'Artist Portfolio Builder', desc: 'A clean gallery for your art', slug: 'artist-portfolio' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', desc: 'Quick start for new bloggers', slug: 'blog-generator-for-beginners' },
    { name: 'Tech Blog Maker', desc: 'Articles for the digital world', slug: 'tech-blog' },
    { name: 'Travel Blog Generator', desc: 'Share your global adventures', slug: 'travel-blog' },
    { name: 'Food Blog Builder', desc: 'Recipes and reviews focus', slug: 'food-blog' },
    { name: 'Lifestyle Blog Maker', desc: 'Daily insights and updates', slug: 'lifestyle-blog' },
    { name: 'Corporate Blog Gen', desc: 'Thought leadership for teams', slug: 'corp-blog' },
    { name: 'Review Blog Builder', desc: 'Ratings and comparison lists', slug: 'review-blog' },
    { name: 'Personal Journal Generator', desc: 'Simple text-focused blogging', slug: 'journal-blog' },
  ],
  stores: [
    { name: 'Online Store Builder', desc: 'Start selling instantly', slug: 'online-store-builder' },
    { name: 'Fashion Boutique StoreMaker', desc: 'Sell clothing and accessories', slug: 'fashion-boutique' },
    { name: 'Digital Product Store Gen', desc: 'Sell downloads and license keys', slug: 'digital-product' },
    { name: 'Art Print Shop Maker', desc: 'E-commerce for creators', slug: 'art-shop' },
    { name: 'Gadget Store Builder', desc: 'Tech products focus', slug: 'gadget-store' },
    { name: 'Subscription Box Store Gen', desc: 'Recurring orders made easy', slug: 'sub-box' },
    { name: 'Dropshipping Store Maker', desc: 'Scale your online biz', slug: 'dropshipping' },
    { name: 'Local Business Store Gen', desc: 'Sell to your neighborhood', slug: 'local-store' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', desc: 'Simple hub for all your socials', slug: 'link-in-bio-generator' },
    { name: 'Instagram Link-in-Bio Builder', desc: 'Visual grid for your feed', slug: 'insta-link' },
    { name: 'TikTok Bio Page Generator', desc: 'Quick links for video viewers', slug: 'tiktok-link' },
    { name: 'YouTube Creator Link Hub', desc: 'Latest videos and merch', slug: 'youtube-link' },
    { name: 'Musician Bio Page Maker', desc: 'Listen links and tour dates', slug: 'music-link' },
    { name: 'Freelancer Bio Page Gen', desc: 'Services and contact focus', slug: 'freelance-link' },
    { name: 'Podcast Bio Hub Builder', desc: 'Episode links and reviews', slug: 'pod-link' },
    { name: 'Gamer Link-in-Bio Maker', desc: 'Twitch, Discord, and more', slug: 'gamer-link' },
  ],
};
