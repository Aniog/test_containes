// Internationalization strings for Generators Hub Page
// To add a new language, create strings.{locale}.js and add the locale to strings/index.js

export const strings = {
  en: {
    // Meta
    pageTitle: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
    metaDescription: "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.",
    canonicalUrl: 'https://www.strikingly.com/generators',

    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',

    // Hero
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSubheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    heroPrimaryCta: "START BUILDING - IT'S FREE",
    heroSecondaryCta: 'BROWSE GENERATORS',

    // Featured Generators
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',

    // Browse by Category
    browseHeading: 'BROWSE BY CATEGORY',
    categories: [
      {
        name: 'Websites',
        slug: 'websites',
        description: 'AI-built business and personal sites for any goal.',
        icon: 'website'
      },
      {
        name: 'Landing Pages',
        slug: 'landing-pages',
        description: 'Single-page sites built to convert visitors fast.',
        icon: 'landing'
      },
      {
        name: 'Portfolios',
        slug: 'portfolios',
        description: 'Showcase your work with a clean, focused site.',
        icon: 'portfolio'
      },
      {
        name: 'Blogs',
        slug: 'blogs',
        description: 'Publish-ready blogs with built-in SEO basics.',
        icon: 'blog'
      },
      {
        name: 'Online Stores',
        slug: 'stores',
        description: 'Sell products online with payments built in.',
        icon: 'store'
      },
      {
        name: 'Link-in-Bio',
        slug: 'link-in-bio',
        description: 'One link, all your places. Made for creators.',
        icon: 'link'
      }
    ],

    // All Generators
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchAriaLabel: 'Search generators',
    resultsCount: (count) => `${count} generators match`,
    noResults: "Can't find what you're looking for?",
    noResultsLink: "Can't find it? Start with our AI builder.",
    showAll: (count) => `Show all ${count} generators`,
    showLess: 'Show less',
    clearSearch: 'Clear search',

    // Category subsections
    categoryDescriptions: {
      websites: 'Build complete websites for any business or personal need.',
      'landing-pages': 'Create high-converting single-page sites.',
      portfolios: 'Display your creative work beautifully.',
      blogs: 'Start publishing with built-in SEO tools.',
      stores: 'Launch an online store in minutes.',
      'link-in-bio': 'Connect all your social links in one place.'
    },

    // How It Works
    howItWorksHeading: 'HOW IT WORKS',
    howItWorksSteps: [
      {
        title: 'PICK A GENERATOR',
        description: 'Browse by category or search to find one that fits your goal.'
      },
      {
        title: 'DESCRIBE YOUR SITE',
        description: 'Tell our AI builder about your business in a sentence or two.'
      },
      {
        title: 'GENERATE AND PUBLISH',
        description: 'Get a fully built site in seconds. Customize anything, then go live.'
      }
    ],

    // Why Strikingly
    whyHeading: 'WHY STRIKINGLY',
    whyFeatures: [
      {
        title: 'LIVE IN SECONDS',
        description: 'Describe your site, we build it. No setup, no learning curve.'
      },
      {
        title: 'MOBILE BY DEFAULT',
        description: 'Every generator produces responsive sites that work on any device.'
      },
      {
        title: 'FREE TO START',
        description: 'Generate, customize, and publish without a credit card.'
      }
    ],

    // FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faqQuestions: [
      {
        question: 'What is an AI site generator?',
        answer: "An AI site generator is a tool that uses artificial intelligence to create websites automatically. Instead of starting from scratch with code or templates, you describe what you need, and the AI builds a complete, functional website based on your requirements. Strikingly's generators cover everything from personal portfolios to online stores."
      },
      {
        question: 'How is a generator different from a template?',
        answer: "Templates provide a starting point that you customize manually, while generators create unique sites based on your specific needs. A template is a fixed design you adapt; a generator produces a tailored site that matches your industry, goals, and content from the moment it's created."
      },
      {
        question: 'Are these generators free to use?',
        answer: "Yes! You can generate, preview, and publish your site without entering a credit card. Strikingly offers a free tier that lets you build and host your site at no cost. Premium features and custom domains are available for those who need them."
      },
      {
        question: 'What kinds of sites can I build?',
        answer: "Strikingly's generators can create almost any type of website: business sites, portfolios, blogs, online stores, wedding websites, restaurant pages, landing pages, and more. With over 60 specialized generators, there's likely one that matches your specific need."
      },
      {
        question: 'Can I customize what the generator produces?',
        answer: "Absolutely. The AI creates a solid foundation, but you have full control to customize everything: colors, fonts, images, text, layout, and features. Think of it as a starting point you can refine to match your exact vision."
      },
      {
        question: 'Do generated sites work on mobile?',
        answer: "Every site built with Strikingly is automatically responsive, meaning it looks and works great on smartphones, tablets, and desktops. Mobile optimization is built into the generator—you don't need to do anything extra."
      }
    ],

    // Closing CTA
    closingHeading: 'READY TO BUILD?',
    closingSubheading: "Pick a generator above, or jump straight into our AI builder.",
    closingCta: 'START WITH AI BUILDER',

    // Footer
    footerCopyright: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`,
    footerLinks: [
      {
        title: 'Product',
        links: [
          { text: 'Features', href: '/features' },
          { text: 'Pricing', href: '/pricing' },
          { text: 'Templates', href: '/templates' },
          { text: 'Integrations', href: '/integrations' }
        ]
      },
      {
        title: 'Company',
        links: [
          { text: 'About', href: '/about' },
          { text: 'Blog', href: '/blog' },
          { text: 'Careers', href: '/careers' },
          { text: 'Press', href: '/press' }
        ]
      },
      {
        title: 'Resources',
        links: [
          { text: 'Help Center', href: '/support' },
          { text: 'Community', href: '/community' },
          { text: 'Developers', href: '/developers' },
          { text: 'Status', href: '/status' }
        ]
      },
      {
        title: 'Legal',
        links: [
          { text: 'Terms', href: '/terms' },
          { text: 'Privacy', href: '/privacy' },
          { text: 'Cookies', href: '/cookies' },
          { text: 'GDPR', href: '/gdpr' }
        ]
      }
    ]
  }
};

// Featured generators data
export const featuredGenerators = [
  {
    name: 'AI Website Generator',
    description: 'Describe your business, get a full site',
    category: 'Website',
    slug: 'ai-website-generator'
  },
  {
    name: 'Free Portfolio Generator',
    description: 'For creatives, in minutes, no fee',
    category: 'Portfolio',
    slug: 'free-portfolio-generator'
  },
  {
    name: 'AI Landing Page Maker',
    description: 'One-page sites built to convert',
    category: 'Landing Page',
    slug: 'ai-landing-page-maker'
  },
  {
    name: 'Online Store Builder',
    description: 'Start selling without writing code',
    category: 'Store',
    slug: 'online-store-builder'
  },
  {
    name: 'Link-in-Bio Generator',
    description: 'One link for all your channels',
    category: 'Link-in-Bio',
    slug: 'link-in-bio-generator'
  },
  {
    name: 'One-Page Website Builder',
    description: 'Simple sites, single scroll',
    category: 'Website',
    slug: 'one-page-website-builder'
  },
  {
    name: 'Wedding Website Generator',
    description: 'Share your day with guests',
    category: 'Website',
    slug: 'wedding-website-generator'
  },
  {
    name: 'Restaurant Website Builder',
    description: 'Menu, hours, reservations, done',
    category: 'Website',
    slug: 'restaurant-website-builder'
  },
  {
    name: 'Blog Generator for Beginners',
    description: 'Publish-ready in minutes',
    category: 'Blog',
    slug: 'blog-generator-for-beginners'
  }
];

// All generators organized by category
export const allGenerators = {
  websites: [
    { name: 'AI Website Generator', description: 'Describe your business, get a full site in seconds.', slug: 'ai-website-generator' },
    { name: 'Free Website Builder for Photographers', description: 'Beautiful portfolio sites for visual artists.', slug: 'free-website-builder-for-photographers' },
    { name: 'One-Page Website Builder', description: 'Simple, elegant single-page sites.', slug: 'one-page-website-builder' },
    { name: 'Wedding Website Generator', description: 'Share your story with family and friends.', slug: 'wedding-website-generator' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, and reservations all in one.', slug: 'restaurant-website-builder' },
    { name: 'Yoga Instructor Website Builder', description: 'Attract students with a professional presence.', slug: 'yoga-instructor-website-builder' },
    { name: 'Real Estate Agent Website', description: 'Showcase listings and build client trust.', slug: 'real-estate-agent-website' },
    { name: 'Freelancer Portfolio Builder', description: 'Display your skills and win more clients.', slug: 'freelancer-portfolio-builder' },
    { name: 'Nonprofit Website Generator', description: 'Tell your story and drive donations.', slug: 'nonprofit-website-generator' },
    { name: 'Event Website Builder', description: 'Promote events and sell tickets online.', slug: 'event-website-builder' }
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', description: 'High-converting pages in under 5 minutes.', slug: 'ai-landing-page-maker' },
    { name: 'Product Launch Landing Page', description: 'Build buzz for your next big release.', slug: 'product-launch-landing-page' },
    { name: 'Lead Capture Page Generator', description: 'Collect emails with stunning forms.', slug: 'lead-capture-page-generator' },
    { name: 'Coming Soon Page Builder', description: 'Tease your launch and grow your list.', slug: 'coming-soon-page-builder' },
    { name: 'Webinar Registration Page', description: 'Fill your virtual seats effortlessly.', slug: 'webinar-registration-page' },
    { name: 'Ebook Download Landing Page', description: 'Grow your audience with gated content.', slug: 'ebook-download-landing-page' },
    { name: 'App Download Landing Page', description: 'Promote your mobile app effectively.', slug: 'app-download-landing-page' },
    { name: 'Contact Page Generator', description: 'Make it easy for prospects to reach you.', slug: 'contact-page-generator' }
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee.', slug: 'free-portfolio-generator' },
    { name: 'Portfolio Generator for Designers', description: 'Showcase visual work beautifully.', slug: 'portfolio-generator-for-designers' },
    { name: 'Artist Portfolio Builder', description: 'Paintings, sculptures, and mixed media.', slug: 'artist-portfolio-builder' },
    { name: 'Photographer Portfolio Site', description: 'Let your images do the talking.', slug: 'photographer-portfolio-site' },
    { name: 'Writer Portfolio Generator', description: 'Display articles, books, and testimonials.', slug: 'writer-portfolio-generator' },
    { name: 'Musician Portfolio Builder', description: 'Share music, videos, and tour dates.', slug: 'musician-portfolio-builder' },
    { name: 'Architect Portfolio Website', description: 'Present projects with clean layouts.', slug: 'architect-portfolio-website' },
    { name: 'Fashion Designer Portfolio', description: 'Show your collections with style.', slug: 'fashion-designer-portfolio' }
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes.', slug: 'blog-generator-for-beginners' },
    { name: 'Personal Blog Builder', description: 'Share your thoughts with the world.', slug: 'personal-blog-builder' },
    { name: 'Business Blog Generator', description: 'Drive traffic with SEO-optimized posts.', slug: 'business-blog-generator' },
    { name: 'Travel Blog Builder', description: 'Document journeys with stunning galleries.', slug: 'travel-blog-builder' },
    { name: 'Food Blog Generator', description: 'Recipes, reviews, and restaurant guides.', slug: 'food-blog-generator' },
    { name: 'Tech Blog Builder', description: 'Share insights on software and trends.', slug: 'tech-blog-builder' },
    { name: 'Fashion Blog Generator', description: 'Style tips, trends, and outfit posts.', slug: 'fashion-blog-generator' },
    { name: 'Fitness Blog Builder', description: 'Workouts, nutrition, and wellness tips.', slug: 'fitness-blog-builder' }
  ],
  stores: [
    { name: 'Online Store Builder', description: 'Start selling without writing code.', slug: 'online-store-builder' },
    { name: 'E-commerce Site for Clothing', description: 'Fashion retail with style options.', slug: 'ecommerce-site-for-clothing' },
    { name: 'Handmade Goods Store Builder', description: 'Sell crafts and artisan products.', slug: 'handmade-goods-store-builder' },
    { name: 'Digital Products Store', description: 'Sell ebooks, courses, and downloads.', slug: 'digital-products-store' },
    { name: 'Restaurant Online Ordering', description: 'Takeout and delivery made simple.', slug: 'restaurant-online-ordering' },
    { name: 'Print-on-Demand Store', description: 'Sell custom merchandise effortlessly.', slug: 'print-on-demand-store' },
    { name: 'Subscription Box Website', description: 'Build recurring revenue with ease.', slug: 'subscription-box-website' },
    { name: 'Art Store Builder', description: 'Sell prints, originals, and commissions.', slug: 'art-store-builder' }
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels.', slug: 'link-in-bio-generator' },
    { name: 'Instagram Link in Bio Builder', description: 'Drive traffic from your social posts.', slug: 'instagram-link-in-bio-builder' },
    { name: 'TikTok Bio Link Generator', description: 'Connect all your content in one place.', slug: 'tiktok-bio-link-generator' },
    { name: 'YouTube Channel Link Builder', description: 'Grow subscribers with a hub page.', slug: 'youtube-channel-link-builder' },
    { name: 'Podcast Link Page Generator', description: 'Share episodes across all platforms.', slug: 'podcast-link-page-generator' },
    { name: 'Creator Link in Bio', description: 'For influencers and content creators.', slug: 'creator-link-in-bio' },
    { name: 'Artist Link in Bio Page', description: 'Music, merch, and tour dates unified.', slug: 'artist-link-in-bio-page' },
    { name: 'Business Link in Bio', description: 'Connect customers to all your touchpoints.', slug: 'business-link-in-bio' }
  ]
};

export default strings;