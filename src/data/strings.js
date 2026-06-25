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
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      subheading: 'Sixty-plus generators, organized by what you\'re building.',
      searchPlaceholder: 'Search generators...',
      matchCount: (count) => `${count} generators match`,
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      cantFind: 'Can\'t find it? Start with our AI builder.',
      showAll: (count) => `Show all ${count} generators`,
      showLess: 'Show less',
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        { title: 'PICK A GENERATOR', description: 'Browse by category or search to find one that fits your goal.' },
        { title: 'DESCRIBE YOUR SITE', description: 'Tell our AI builder about your business in a sentence or two.' },
        { title: 'GENERATE AND PUBLISH', description: 'Get a fully built site in seconds. Customize anything, then go live.' },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      items: [
        { title: 'LIVE IN SECONDS', description: 'Describe your site, we build it. No setup, no learning curve.' },
        { title: 'MOBILE BY DEFAULT', description: 'Every generator produces responsive sites that work on any device.' },
        { title: 'FREE TO START', description: 'Generate, customize, and publish without a credit card.' },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          question: 'What is an AI site generator?',
          answer: 'An AI site generator is a tool that creates a complete, ready-to-publish website from a short description of what you need. Instead of starting from a blank page or choosing a template, you describe your business or project in a sentence or two, and the AI builds the structure, content, and design for you. You can then customize anything before going live.',
        },
        {
          question: 'How is a generator different from a template?',
          answer: 'A template gives you a fixed layout that you fill in with your own content. A generator creates a unique site tailored to your specific description every time. The result is closer to a finished product because the AI writes copy, selects layouts, and organizes sections based on what you tell it. You spend less time replacing placeholder text and more time refining what matters.',
        },
        {
          question: 'Are these generators free to use?',
          answer: 'Yes. You can generate, preview, and customize your site without paying anything or entering a credit card. Strikingly offers free plans that let you publish and share your site. Premium features like custom domains and advanced analytics are available on paid plans if you need them later.',
        },
        {
          question: 'What kinds of sites can I build?',
          answer: 'Anything from a personal portfolio or blog to a full online store. The generators cover business websites, landing pages, portfolios, blogs, e-commerce stores, link-in-bio pages, event sites, restaurant pages, and more. If you have a specific niche in mind, browse the directory above or use the search to find a matching generator.',
        },
        {
          question: 'Can I customize what the generator produces?',
          answer: 'Absolutely. The generated site is a starting point, not a locked result. You can edit text, swap images, rearrange sections, change colors, add new pages, and connect your own domain. The editor is visual and drag-and-drop, so no coding is required.',
        },
        {
          question: 'Do generated sites work on mobile?',
          answer: 'Every site produced by our generators is responsive by default. The layouts adapt to phones, tablets, and desktops automatically. You can preview the mobile version in the editor before publishing to make sure everything looks right on smaller screens.',
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      copyright: `\u00A9 ${new Date().getFullYear()} Strikingly. All rights reserved.`,
    },
  },
};

export const categories = [
  { id: 'websites', name: 'Websites', slug: 'websites', description: 'AI-built business and personal sites for any goal.' },
  { id: 'landing-pages', name: 'Landing Pages', slug: 'landing-pages', description: 'Single-page sites built to convert visitors fast.' },
  { id: 'portfolios', name: 'Portfolios', slug: 'portfolios', description: 'Showcase your work with a clean, focused site.' },
  { id: 'blogs', name: 'Blogs', slug: 'blogs', description: 'Publish-ready blogs with built-in SEO basics.' },
  { id: 'stores', name: 'Online Stores', slug: 'stores', description: 'Sell products online with payments built in.' },
  { id: 'link-in-bio', name: 'Link-in-Bio', slug: 'link-in-bio', description: 'One link, all your places. Made for creators.' },
];

export const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' },
];

export const allGenerators = {
  websites: [
    { name: 'AI Website Generator', description: 'Describe your business and get a complete website in seconds.', slug: 'ai-website-generator' },
    { name: 'Free Website Builder for Photographers', description: 'Showcase your portfolio with a stunning photography site.', slug: 'free-website-builder-for-photographers' },
    { name: 'One-Page Wedding Website Builder', description: 'Share your love story, venue details, and RSVP in one scroll.', slug: 'one-page-wedding-website-builder' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, location, and reservations all in one place.', slug: 'restaurant-website-builder' },
    { name: 'AI Website Generator for Small Business', description: 'Professional sites for local shops, services, and startups.', slug: 'ai-website-generator-for-small-business' },
    { name: 'Free Website Builder for Musicians', description: 'Share your music, tour dates, and merch with fans.', slug: 'free-website-builder-for-musicians' },
    { name: 'Yoga Instructor Website Generator', description: 'Class schedules, booking, and your teaching philosophy online.', slug: 'yoga-instructor-website-generator' },
    { name: 'No-Code Website Builder', description: 'Build a professional site without writing a single line of code.', slug: 'no-code-website-builder' },
    { name: 'Beautiful Website Generator', description: 'Stunning designs generated from a simple description.', slug: 'beautiful-website-generator' },
    { name: 'One-Page Website Builder', description: 'Everything your visitors need on a single, scrollable page.', slug: 'one-page-website-builder' },
    { name: 'Freelancer Website Generator', description: 'Showcase your services, rates, and past work to clients.', slug: 'freelancer-website-generator' },
    { name: 'Nonprofit Website Builder', description: 'Share your mission, accept donations, and recruit volunteers.', slug: 'nonprofit-website-builder' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', description: 'High-converting single pages built by AI in seconds.', slug: 'ai-landing-page-maker' },
    { name: 'Product Launch Landing Page', description: 'Build hype and collect signups before your launch day.', slug: 'product-launch-landing-page' },
    { name: 'Free Landing Page Generator', description: 'No cost, no code, just a page that converts.', slug: 'free-landing-page-generator' },
    { name: 'Event Landing Page Builder', description: 'Promote your event with a focused, single-page site.', slug: 'event-landing-page-builder' },
    { name: 'SaaS Landing Page Generator', description: 'Feature highlights, pricing, and signup in one scroll.', slug: 'saas-landing-page-generator' },
    { name: 'App Download Landing Page', description: 'Drive installs with a clean, mobile-first landing page.', slug: 'app-download-landing-page' },
    { name: 'Webinar Registration Page Builder', description: 'Collect registrations with a compelling event page.', slug: 'webinar-registration-page-builder' },
    { name: 'Lead Generation Landing Page', description: 'Capture leads with optimized forms and clear CTAs.', slug: 'lead-generation-landing-page' },
    { name: 'Coming Soon Page Generator', description: 'Build anticipation with a countdown and email capture.', slug: 'coming-soon-page-generator' },
    { name: 'Real Estate Landing Page Builder', description: 'Showcase properties with stunning visuals and contact forms.', slug: 'real-estate-landing-page-builder' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', description: 'A clean showcase for your best work, ready in minutes.', slug: 'free-portfolio-generator' },
    { name: 'Portfolio Generator for Designers', description: 'Visual-first layouts built for creative professionals.', slug: 'portfolio-generator-for-designers' },
    { name: 'Photography Portfolio Builder', description: 'Gallery-focused sites that let your images speak.', slug: 'photography-portfolio-builder' },
    { name: 'AI Portfolio Website Maker', description: 'Describe your work and get a polished portfolio instantly.', slug: 'ai-portfolio-website-maker' },
    { name: 'Developer Portfolio Generator', description: 'Showcase projects, skills, and GitHub links in one place.', slug: 'developer-portfolio-generator' },
    { name: 'Artist Portfolio Builder', description: 'Display paintings, sculptures, and mixed media beautifully.', slug: 'artist-portfolio-builder' },
    { name: 'Architecture Portfolio Generator', description: 'Present your projects with large images and clean layouts.', slug: 'architecture-portfolio-generator' },
    { name: 'Video Portfolio Builder', description: 'Embed reels and showreels in a cinematic layout.', slug: 'video-portfolio-builder' },
    { name: 'Student Portfolio Generator', description: 'Stand out to employers with a professional online presence.', slug: 'student-portfolio-generator' },
    { name: 'Illustration Portfolio Maker', description: 'Colorful, grid-based layouts for illustrators and cartoonists.', slug: 'illustration-portfolio-maker' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', description: 'Start publishing with zero setup and built-in SEO.', slug: 'blog-generator-for-beginners' },
    { name: 'AI Blog Website Builder', description: 'Generate a blog structure with categories and sample posts.', slug: 'ai-blog-website-builder' },
    { name: 'Free Blog Generator', description: 'No cost to start, no code to write, just publish.', slug: 'free-blog-generator' },
    { name: 'Personal Blog Builder', description: 'Share your thoughts, stories, and experiences online.', slug: 'personal-blog-builder' },
    { name: 'Travel Blog Generator', description: 'Document your adventures with maps, photos, and stories.', slug: 'travel-blog-generator' },
    { name: 'Food Blog Builder', description: 'Recipe cards, food photography, and cooking tips in one site.', slug: 'food-blog-builder' },
    { name: 'Tech Blog Generator', description: 'Write about code, gadgets, and industry trends.', slug: 'tech-blog-generator' },
    { name: 'Lifestyle Blog Builder', description: 'Fashion, wellness, and daily inspiration in a beautiful layout.', slug: 'lifestyle-blog-builder' },
    { name: 'Business Blog Generator', description: 'Thought leadership and company updates for your brand.', slug: 'business-blog-generator' },
    { name: 'Podcast Blog Builder', description: 'Episode pages, show notes, and embedded audio players.', slug: 'podcast-blog-builder' },
  ],
  stores: [
    { name: 'Online Store Builder', description: 'Start selling products online with payments built in.', slug: 'online-store-builder' },
    { name: 'Free E-commerce Website Generator', description: 'Launch your store without upfront costs or code.', slug: 'free-ecommerce-website-generator' },
    { name: 'AI Store Builder', description: 'Describe your products and get a ready-to-sell storefront.', slug: 'ai-store-builder' },
    { name: 'Online Store Builder for Restaurants', description: 'Take orders online with a menu-driven storefront.', slug: 'online-store-builder-for-restaurants' },
    { name: 'Handmade Goods Store Generator', description: 'Sell crafts, art, and handmade products beautifully.', slug: 'handmade-goods-store-generator' },
    { name: 'Digital Products Store Builder', description: 'Sell ebooks, courses, and downloads with instant delivery.', slug: 'digital-products-store-builder' },
    { name: 'Fashion Store Generator', description: 'Lookbooks, size guides, and shopping carts for clothing brands.', slug: 'fashion-store-generator' },
    { name: 'Dropshipping Store Builder', description: 'Launch a store without holding inventory.', slug: 'dropshipping-store-builder' },
    { name: 'Subscription Box Store Generator', description: 'Recurring orders and membership management built in.', slug: 'subscription-box-store-generator' },
    { name: 'Print-on-Demand Store Builder', description: 'Custom merchandise with no upfront inventory costs.', slug: 'print-on-demand-store-builder' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels, made for creators.', slug: 'link-in-bio-generator' },
    { name: 'Free Link-in-Bio Page Builder', description: 'Organize all your links in one beautiful page.', slug: 'free-link-in-bio-page-builder' },
    { name: 'AI Link-in-Bio Maker', description: 'Generate a branded link page from your social profiles.', slug: 'ai-link-in-bio-maker' },
    { name: 'Creator Link Page Generator', description: 'Share your content, merch, and socials in one tap.', slug: 'creator-link-page-generator' },
    { name: 'Influencer Link-in-Bio Builder', description: 'Branded link pages with analytics and custom styling.', slug: 'influencer-link-in-bio-builder' },
    { name: 'Musician Link-in-Bio Generator', description: 'Streaming links, tour dates, and merch in one place.', slug: 'musician-link-in-bio-generator' },
    { name: 'Artist Link Page Builder', description: 'Gallery previews, shop links, and commission info together.', slug: 'artist-link-page-builder' },
    { name: 'Business Link-in-Bio Generator', description: 'Professional link pages for brands and companies.', slug: 'business-link-in-bio-generator' },
    { name: 'Podcast Link-in-Bio Builder', description: 'Episode links, platforms, and show info in one page.', slug: 'podcast-link-in-bio-builder' },
    { name: 'Fitness Coach Link Page', description: 'Programs, booking, and social links for trainers.', slug: 'fitness-coach-link-page' },
  ],
};
