const strings = {
  en: {
    // Section 0 - Top bar
    siteName: 'strikingly AI',

    // Section 1 - Breadcrumb
    breadcrumb: [
      { label: 'Strikingly', url: '/' },
      { label: 'AI Generators', url: null },
    ],

    // Section 2 - Hero
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      subheadline:
        'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
      primaryCta: 'START BUILDING - IT\'S FREE',
      primaryCtaUrl: '/s/ai_site_builder',
      secondaryCta: 'BROWSE GENERATORS',
      secondaryCtaUrl: '#all-generators',
    },

    // Section 3 - Featured Generators
    featured: {
      heading: 'FEATURED GENERATORS',
      subheading: 'A few common starting points.',
      items: [
        {
          name: 'AI Website Generator',
          description: 'Describe your business, get a full site.',
          category: 'Website',
          slug: 'ai-website-generator',
        },
        {
          name: 'Free Portfolio Generator',
          description: 'For creatives, in minutes, no fee.',
          category: 'Portfolio',
          slug: 'free-portfolio-generator',
        },
        {
          name: 'AI Landing Page Maker',
          description: 'One-page sites built to convert.',
          category: 'Landing Page',
          slug: 'ai-landing-page-maker',
        },
        {
          name: 'Online Store Builder',
          description: 'Start selling without writing code.',
          category: 'Store',
          slug: 'online-store-builder',
        },
        {
          name: 'Link-in-Bio Generator',
          description: 'One link for all your channels.',
          category: 'Link-in-Bio',
          slug: 'link-in-bio-generator',
        },
        {
          name: 'One-Page Website Builder',
          description: 'Simple sites, single scroll.',
          category: 'Website',
          slug: 'one-page-website-builder',
        },
        {
          name: 'Wedding Website Generator',
          description: 'Share your day with guests.',
          category: 'Website',
          slug: 'wedding-website-generator',
        },
        {
          name: 'Restaurant Website Builder',
          description: 'Menu, hours, reservations, done.',
          category: 'Website',
          slug: 'restaurant-website-builder',
        },
        {
          name: 'Blog Generator for Beginners',
          description: 'Publish-ready in minutes.',
          category: 'Blog',
          slug: 'blog-generator-for-beginners',
        },
      ],
    },

    // Section 4 - Browse by Category
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
      description: 'Jump to a category below or scroll through the full directory.',
      categories: [
        {
          name: 'Websites',
          slug: 'websites',
          description: 'AI-built business and personal sites for any goal.',
        },
        {
          name: 'Landing Pages',
          slug: 'landing-pages',
          description: 'Single-page sites built to convert visitors fast.',
        },
        {
          name: 'Portfolios',
          slug: 'portfolios',
          description: 'Showcase your work with a clean, focused site.',
        },
        {
          name: 'Blogs',
          slug: 'blogs',
          description: 'Publish-ready blogs with built-in SEO basics.',
        },
        {
          name: 'Online Stores',
          slug: 'stores',
          description: 'Sell products online with payments built in.',
        },
        {
          name: 'Link-in-Bio',
          slug: 'link-in-bio',
          description: 'One link, all your places. Made for creators.',
        },
      ],
    },

    // Section 5 - All Generators
    allGenerators: {
      heading: 'ALL GENERATORS',
      subheading: 'Sixty-plus generators, organized by what you\'re building.',
      searchPlaceholder: 'Search generators...',
      searchLabel: 'Search generators',
      resultCount: (count) => `${count} generator${count !== 1 ? 's' : ''} match`,
      emptyState:
        'No generators match your search. Try a different term.',
      emptyStateAlt: "Can't find it? Start with our AI builder.",
      clearSearch: 'Clear search',
      showAll: (count) => `Show all ${count} generators`,
      showLess: 'Show less',
      subsections: [
        {
          id: 'websites',
          name: 'Websites',
          description: 'Full business and personal websites for any need.',
          items: [
            { name: 'AI Website Generator', description: 'Describe your business, get a full site.', slug: 'ai-website-generator' },
            { name: 'One-Page Website Builder', description: 'Simple sites, single scroll.', slug: 'one-page-website-builder' },
            { name: 'Free Website Builder for Photographers', description: 'Showcase your portfolio online for free.', slug: 'free-website-builder-for-photographers' },
            { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done.', slug: 'restaurant-website-builder' },
            { name: 'Wedding Website Generator', description: 'Share your day with guests.', slug: 'wedding-website-generator' },
            { name: 'Real Estate Website Builder', description: 'List properties and attract buyers.', slug: 'real-estate-website-builder' },
            { name: 'Fitness Coach Website Builder', description: 'Promote your classes and sell sessions.', slug: 'fitness-coach-website-builder' },
            { name: 'Yoga Instructor Website Builder', description: 'Share your schedule and philosophy.', slug: 'yoga-instructor-website-builder' },
            { name: 'Personal Brand Website Generator', description: 'Build your online presence in minutes.', slug: 'personal-brand-website-generator' },
            { name: 'Small Business Website Builder', description: 'Get your business online fast.', slug: 'small-business-website-builder' },
          ],
        },
        {
          id: 'landing-pages',
          name: 'Landing Pages',
          description: 'High-converting single-page sites for campaigns and launches.',
          items: [
            { name: 'AI Landing Page Maker', description: 'One-page sites built to convert.', slug: 'ai-landing-page-maker' },
            { name: 'Product Launch Landing Page', description: 'Generate buzz for your next launch.', slug: 'product-launch-landing-page' },
            { name: 'Event Registration Landing Page', description: 'Collect signups for your next event.', slug: 'event-registration-landing-page' },
            { name: 'Lead Generation Landing Page', description: 'Capture leads with a focused page.', slug: 'lead-generation-landing-page' },
            { name: 'App Download Landing Page', description: 'Drive installs for your mobile app.', slug: 'app-download-landing-page' },
            { name: 'Webinar Registration Page', description: 'Promote and register attendees.', slug: 'webinar-registration-page' },
            { name: 'Coming Soon Landing Page', description: 'Build anticipation before launch.', slug: 'coming-soon-landing-page' },
            { name: 'Newsletter Signup Landing Page', description: 'Grow your email list fast.', slug: 'newsletter-signup-landing-page' },
            { name: 'Freebie Landing Page Generator', description: 'Offer a free download to grow your audience.', slug: 'freebie-landing-page-generator' },
            { name: 'SaaS Landing Page Builder', description: 'Convert visitors to trial signups.', slug: 'saas-landing-page-builder' },
          ],
        },
        {
          id: 'portfolios',
          name: 'Portfolios',
          description: 'Showcase your creative work beautifully.',
          items: [
            { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee.', slug: 'free-portfolio-generator' },
            { name: 'Portfolio Generator for Designers', description: 'Show your best work in style.', slug: 'portfolio-generator-for-designers' },
            { name: 'Artist Portfolio Website', description: 'Display your art with a clean layout.', slug: 'artist-portfolio-website' },
            { name: 'Photography Portfolio Builder', description: 'Let your photos take center stage.', slug: 'photography-portfolio-builder' },
            { name: 'Architecture Portfolio Generator', description: 'Present projects with impact.', slug: 'architecture-portfolio-generator' },
            { name: 'Fashion Portfolio Website', description: 'Showcase your collections online.', slug: 'fashion-portfolio-website' },
            { name: 'UI/UX Design Portfolio', description: 'Highlight your design process and cases.', slug: 'ui-ux-design-portfolio' },
            { name: 'Model Portfolio Generator', description: 'Build your modeling portfolio fast.', slug: 'model-portfolio-generator' },
            { name: 'Illustrator Portfolio Builder', description: 'Display your illustrations elegantly.', slug: 'illustrator-portfolio-builder' },
            { name: 'Creative Agency Portfolio', description: 'Win clients with a stunning agency site.', slug: 'creative-agency-portfolio' },
          ],
        },
        {
          id: 'blogs',
          name: 'Blogs',
          description: 'Start publishing with SEO-friendly blog sites.',
          items: [
            { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes.', slug: 'blog-generator-for-beginners' },
            { name: 'Personal Blog Builder', description: 'Share your thoughts with the world.', slug: 'personal-blog-builder' },
            { name: 'Food Blog Generator', description: 'Share recipes and food stories.', slug: 'food-blog-generator' },
            { name: 'Travel Blog Website Builder', description: 'Document your adventures online.', slug: 'travel-blog-website-builder' },
            { name: 'Fashion Blog Builder', description: 'Cover trends and style tips.', slug: 'fashion-blog-builder' },
            { name: 'Lifestyle Blog Generator', description: 'Write about what you love.', slug: 'lifestyle-blog-generator' },
            { name: 'Tech Blog Builder', description: 'Write about code and technology.', slug: 'tech-blog-builder' },
            { name: 'Parenting Blog Generator', description: 'Share your parenting journey.', slug: 'parenting-blog-generator' },
            { name: 'Health and Wellness Blog', description: 'Inspire healthier living.', slug: 'health-and-wellness-blog' },
            { name: 'News Blog Generator', description: 'Cover stories that matter.', slug: 'news-blog-generator' },
          ],
        },
        {
          id: 'stores',
          name: 'Online Stores',
          description: 'Sell products and services with built-in payments.',
          items: [
            { name: 'Online Store Builder', description: 'Start selling without writing code.', slug: 'online-store-builder' },
            { name: 'Online Store Builder for Restaurants', description: 'Accept orders and reservations online.', slug: 'online-store-builder-for-restaurants' },
            { name: 'Ecommerce Store for Artists', description: 'Sell prints and originals directly.', slug: 'ecommerce-store-for-artists' },
            { name: 'Digital Products Store', description: 'Sell downloads, courses, and more.', slug: 'digital-products-store' },
            { name: 'Subscription Box Store Builder', description: 'Manage recurring subscriptions easily.', slug: 'subscription-box-store-builder' },
            { name: 'Handmade Goods Store Generator', description: 'Open a shop for your crafts.', slug: 'handmade-goods-store-generator' },
            { name: 'Coffee Shop Website Builder', description: 'Menu, orders, and location in one.', slug: 'coffee-shop-website-builder' },
            { name: 'Boutique Online Store Builder', description: 'Stand out with a beautiful storefront.', slug: 'boutique-online-store-builder' },
            { name: 'Service Provider Store Builder', description: 'Book services and collect payments.', slug: 'service-provider-store-builder' },
            { name: 'Membership Site Generator', description: 'Sell access to premium content.', slug: 'membership-site-generator' },
          ],
        },
        {
          id: 'link-in-bio',
          name: 'Link-in-Bio',
          description: 'One link for all your content. Perfect for social media profiles.',
          items: [
            { name: 'Link-in-Bio Generator', description: 'One link for all your channels.', slug: 'link-in-bio-generator' },
            { name: 'Creator Link-in-Bio Page', description: 'Share your content, store, and socials.', slug: 'creator-link-in-bio-page' },
            { name: 'Musician Link-in-Bio Generator', description: 'Share music, tour dates, and merch.', slug: 'musician-link-in-bio-generator' },
            { name: 'Influencer Link-in-Bio Builder', description: 'Drive followers to everything you do.', slug: 'influencer-link-in-bio-builder' },
            { name: 'Video Creator Link-in-Bio', description: 'Link your videos and social channels.', slug: 'video-creator-link-in-bio' },
            { name: 'Podcaster Link-in-Bio Page', description: 'Share episodes and subscribe links.', slug: 'podcaster-link-in-bio-page' },
            { name: 'Coach Link-in-Bio Generator', description: 'Connect clients to your services.', slug: 'coach-link-in-bio-generator' },
            { name: 'Writer Link-in-Bio Builder', description: 'Share your articles and newsletter.', slug: 'writer-link-in-bio-builder' },
            { name: 'Photographer Link-in-Bio', description: 'Showcase your portfolio and booking.', slug: 'photographer-link-in-bio' },
            { name: 'Nonprofit Link-in-Bio Page', description: 'Drive donations and awareness.', slug: 'nonprofit-link-in-bio-page' },
          ],
        },
      ],
    },

    // Section 6 - How It Works
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        {
          number: 1,
          title: 'PICK A GENERATOR',
          description:
            'Browse by category or search to find one that fits your goal.',
        },
        {
          number: 2,
          title: 'DESCRIBE YOUR SITE',
          description:
            'Tell our AI builder about your business in a sentence or two.',
        },
        {
          number: 3,
          title: 'GENERATE AND PUBLISH',
          description:
            'Get a fully built site in seconds. Customize anything, then go live.',
        },
      ],
    },

    // Section 7 - Why Strikingly
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      items: [
        {
          title: 'LIVE IN SECONDS',
          description:
            'Describe your site, we build it. No setup, no learning curve.',
        },
        {
          title: 'MOBILE BY DEFAULT',
          description:
            'Every generator produces responsive sites that work on any device.',
        },
        {
          title: 'FREE TO START',
          description:
            'Generate, customize, and publish without a credit card.',
        },
      ],
    },

    // Section 8 - FAQ
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      questions: [
        {
          question: 'What is an AI site generator?',
          answer:
            'An AI site generator is a tool that uses artificial intelligence to create a complete website based on a short description of your business, project, or goal. Instead of building a site from scratch or selecting and customizing a template, you simply tell the AI what you need and it generates a fully designed site in seconds. Strikingly offers dozens of AI site generators tailored to different industries and site types.',
        },
        {
          question: 'How is a generator different from a template?',
          answer:
            'A template is a static starting point that you must manually fill in and customize yourself. An AI generator creates a complete, unique site for you based on your specific description. While both give you a foundation, a generator saves you hours of setup by populating structure, content, and design choices automatically. You can still customize everything after generation.',
        },
        {
          question: 'Are these generators free to use?',
          answer:
            'Yes, every generator on this page is free to start. You can generate and preview your site without entering any payment information. When you are ready to publish, Strikingly offers free and premium plans depending on your needs, such as connecting a custom domain or accessing advanced analytics.',
        },
        {
          question: 'What kinds of sites can I build?',
          answer:
            'You can build almost any kind of site. The directory above includes generators for full websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Within each category you will find options tailored to specific professions and industries, including restaurants, photographers, artists, coaches, wedding couples, and many more.',
        },
        {
          question: 'Can I customize what the generator produces?',
          answer:
            'Absolutely. After the AI generates your site, you can edit every part of it using Strikingly\'s drag-and-drop builder. Change the layout, colors, fonts, images, and content. Add new sections, pages, or features. The generator creates the foundation, but you have full control over the final result.',
        },
        {
          question: 'Do generated sites work on mobile?',
          answer:
            'Yes. Every site produced by Strikingly\'s generators is fully responsive and works on all devices. The AI optimizes layout, navigation, and content for desktop, tablet, and mobile screens automatically, so your site looks great everywhere without extra work.',
        },
      ],
    },

    // Section 9 - Closing CTA
    closingCta: {
      heading: 'READY TO BUILD?',
      subheading:
        'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
      ctaUrl: '/s/ai_site_builder',
    },

    // Footer
    footer: {
      copyright: '© 2026 Strikingly - Made with love in Shanghai',
      columns: [
        {
          title: 'Product',
          links: [
            { label: 'Pricing', url: '/pricing' },
            { label: 'Templates', url: '/templates' },
            { label: 'AI Site Builder', url: '/s/ai_site_builder' },
            { label: 'Generators', url: '/generators' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About', url: '/about' },
            { label: 'Blog', url: '/blog' },
            { label: 'Support', url: '/support' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'Help Center', url: '/support' },
            { label: 'Community', url: '/blog' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Terms of Service', url: '/terms' },
            { label: 'Privacy Policy', url: '/privacy' },
          ],
        },
      ],
    },
  },
};

export default strings;