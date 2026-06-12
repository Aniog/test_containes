export const strings = {
  en: {
    breadcrumb: {
      home: 'Strikingly',
      current: 'AI Generators',
    },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      sub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
      ctaPrimary: "START BUILDING \u2014 IT'S FREE",
      ctaSecondary: 'BROWSE GENERATORS',
    },
    featured: {
      heading: 'FEATURED GENERATORS',
      sub: 'A few common starting points.',
    },
    browseByCategory: {
      heading: 'BROWSE BY CATEGORY',
    },
    allGenerators: {
      heading: 'ALL GENERATORS',
      sub: "Sixty-plus generators, organized by what you're building.",
      searchPlaceholder: 'Search generators...',
      matchCount: (n) => `${n} generator${n === 1 ? '' : 's'} match`,
      showAll: (n) => `Show all ${n} generators`,
      showLess: 'Show fewer',
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      noResultsCta: "Can't find it? Start with our AI builder.",
    },
    howItWorks: {
      heading: 'HOW IT WORKS',
      steps: [
        { title: 'PICK A GENERATOR', desc: 'Browse by category or search to find one that fits your goal.' },
        { title: 'DESCRIBE YOUR SITE', desc: 'Tell our AI builder about your business in a sentence or two.' },
        { title: 'GENERATE AND PUBLISH', desc: 'Get a fully built site in seconds. Customize anything, then go live.' },
      ],
    },
    whyStrikingly: {
      heading: 'WHY STRIKINGLY',
      items: [
        { title: 'LIVE IN SECONDS', desc: 'Describe your site, we build it. No setup, no learning curve.' },
        { title: 'MOBILE BY DEFAULT', desc: 'Every generator produces responsive sites that work on any device.' },
        { title: 'FREE TO START', desc: 'Generate, customize, and publish without a credit card.' },
      ],
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          q: 'What is an AI site generator?',
          a: 'An AI site generator is a tool that creates a complete website from a short description of your business or project. Instead of choosing a template and filling in blanks, you describe what you need and the AI builds the structure, copy, and design for you in seconds.',
        },
        {
          q: 'How is a generator different from a template?',
          a: 'A template is a fixed starting layout that you customize manually. A generator uses AI to produce a unique site tailored to your specific description. The result is closer to a finished product from the start, with content and structure that match your goals rather than generic placeholder text.',
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes. You can generate, preview, and customize your site without paying anything. Strikingly offers free publishing on a strikingly.com subdomain. Premium features like custom domains and advanced analytics are available on paid plans.',
        },
        {
          q: 'What kinds of sites can I build?',
          a: "Anything from a personal portfolio to an online store. Our generators cover business websites, landing pages, blogs, link-in-bio pages, event sites, restaurant pages, and many more categories. If you don't see an exact match, the general AI builder can handle almost any brief.",
        },
        {
          q: 'Can I customize what the generator produces?',
          a: "Absolutely. The generated site is a starting point. You can edit every section, swap images, change colors, add or remove blocks, and adjust the layout using Strikingly's drag-and-drop editor. Nothing is locked in.",
        },
        {
          q: 'Do generated sites work on mobile?',
          a: 'Yes. Every site produced by our generators is responsive by default. The layout adapts to phones, tablets, and desktops without any extra work on your part.',
        },
      ],
    },
    closingCta: {
      heading: 'READY TO BUILD?',
      sub: 'Pick a generator above, or jump straight into our AI builder.',
      cta: 'START WITH AI BUILDER',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`,
    },
  },
}

export const featuredGenerators = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' },
]

export const categories = [
  { name: 'Websites', slug: 'websites', anchor: '#websites', desc: 'AI-built business and personal sites for any goal.' },
  { name: 'Landing Pages', slug: 'landing-pages', anchor: '#landing-pages', desc: 'Single-page sites built to convert visitors fast.' },
  { name: 'Portfolios', slug: 'portfolios', anchor: '#portfolios', desc: 'Showcase your work with a clean, focused site.' },
  { name: 'Blogs', slug: 'blogs', anchor: '#blogs', desc: 'Publish-ready blogs with built-in SEO basics.' },
  { name: 'Online Stores', slug: 'stores', anchor: '#stores', desc: 'Sell products online with payments built in.' },
  { name: 'Link-in-Bio', slug: 'link-in-bio', anchor: '#link-in-bio', desc: 'One link, all your places. Made for creators.' },
]

export const allGenerators = {
  websites: {
    heading: 'Websites',
    desc: 'Full multi-section sites for businesses, creatives, and personal brands.',
    items: [
      { name: 'AI Website Generator', desc: 'Describe your business and get a complete site in seconds.', slug: 'ai-website-generator' },
      { name: 'One-Page Website Builder', desc: 'Simple single-scroll sites for focused messaging.', slug: 'one-page-website-builder' },
      { name: 'Free Website Builder for Photographers', desc: 'Showcase your photos with a gallery-first layout.', slug: 'free-website-builder-for-photographers' },
      { name: 'Wedding Website Generator', desc: 'Share your story, RSVP, and event details with guests.', slug: 'wedding-website-generator' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, location, and reservations in one place.', slug: 'restaurant-website-builder' },
      { name: 'AI Website Generator for Small Business', desc: 'Professional sites tailored to local and small businesses.', slug: 'ai-website-generator-for-small-business' },
      { name: 'Yoga Instructor Website Builder', desc: 'Class schedules, booking, and your teaching philosophy.', slug: 'yoga-instructor-website-builder' },
      { name: 'No-Code Website Builder', desc: 'Build without writing a single line of code.', slug: 'no-code-website-builder' },
      { name: 'Beautiful Website Generator', desc: 'Design-forward sites that look polished from the start.', slug: 'beautiful-website-generator' },
      { name: 'Freelancer Website Builder', desc: 'Show your services, rates, and past work clearly.', slug: 'freelancer-website-builder' },
    ],
  },
  'landing-pages': {
    heading: 'Landing Pages',
    desc: 'Single-page sites designed to convert visitors into leads or customers.',
    items: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert visitors fast.', slug: 'ai-landing-page-maker' },
      { name: 'Product Launch Landing Page', desc: 'Build hype and collect signups before launch day.', slug: 'product-launch-landing-page' },
      { name: 'Event Landing Page Generator', desc: 'Promote your event with a focused single page.', slug: 'event-landing-page-generator' },
      { name: 'Free Landing Page Builder', desc: 'High-converting pages without spending a dime.', slug: 'free-landing-page-builder' },
      { name: 'SaaS Landing Page Generator', desc: 'Feature highlights, pricing, and signup in one scroll.', slug: 'saas-landing-page-generator' },
      { name: 'App Download Landing Page', desc: 'Drive installs with a clean mobile-first page.', slug: 'app-download-landing-page' },
      { name: 'Webinar Registration Page Builder', desc: 'Collect registrations with a compelling event page.', slug: 'webinar-registration-page-builder' },
      { name: 'Lead Generation Landing Page', desc: 'Capture emails and phone numbers with optimized forms.', slug: 'lead-generation-landing-page' },
      { name: 'Coming Soon Page Generator', desc: 'Tease your project and build an audience early.', slug: 'coming-soon-page-generator' },
      { name: 'Nonprofit Landing Page Builder', desc: 'Tell your mission and collect donations on one page.', slug: 'nonprofit-landing-page-builder' },
    ],
  },
  portfolios: {
    heading: 'Portfolios',
    desc: 'Clean, focused sites to showcase creative and professional work.',
    items: [
      { name: 'Free Portfolio Generator', desc: 'For creatives who want a polished site fast.', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', desc: 'Grid layouts built to highlight visual work.', slug: 'portfolio-generator-for-designers' },
      { name: 'Photography Portfolio Builder', desc: 'Full-bleed galleries that let your images speak.', slug: 'photography-portfolio-builder' },
      { name: 'Developer Portfolio Generator', desc: 'Show projects, skills, and GitHub links cleanly.', slug: 'developer-portfolio-generator' },
      { name: 'Artist Portfolio Website Builder', desc: 'Exhibit paintings, sculptures, or mixed media online.', slug: 'artist-portfolio-website-builder' },
      { name: 'Architecture Portfolio Generator', desc: 'Present buildings and plans with large-format imagery.', slug: 'architecture-portfolio-generator' },
      { name: 'Student Portfolio Builder', desc: 'Stand out to employers with a professional online presence.', slug: 'student-portfolio-builder' },
      { name: 'Video Portfolio Generator', desc: 'Embed reels and clips in a cinematic layout.', slug: 'video-portfolio-generator' },
      { name: 'Writing Portfolio Builder', desc: 'Display articles, essays, and published work.', slug: 'writing-portfolio-builder' },
      { name: 'UX Portfolio Generator', desc: 'Case studies and process documentation made simple.', slug: 'ux-portfolio-generator' },
    ],
  },
  blogs: {
    heading: 'Blogs',
    desc: 'Publish-ready blogs with built-in SEO and clean reading experiences.',
    items: [
      { name: 'Blog Generator for Beginners', desc: 'Start publishing without any technical knowledge.', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Builder', desc: 'Generate posts and structure with AI assistance.', slug: 'ai-blog-builder' },
      { name: 'Personal Blog Generator', desc: 'Share your thoughts with a minimal, elegant layout.', slug: 'personal-blog-generator' },
      { name: 'Travel Blog Builder', desc: 'Document journeys with maps, photos, and stories.', slug: 'travel-blog-builder' },
      { name: 'Food Blog Generator', desc: 'Recipe cards, photography, and meal planning content.', slug: 'food-blog-generator' },
      { name: 'Tech Blog Builder', desc: 'Code snippets, tutorials, and product reviews.', slug: 'tech-blog-builder' },
      { name: 'Fashion Blog Generator', desc: 'Lookbooks, outfit posts, and style guides.', slug: 'fashion-blog-generator' },
      { name: 'Fitness Blog Builder', desc: 'Workout plans, nutrition tips, and progress tracking.', slug: 'fitness-blog-builder' },
      { name: 'Business Blog Generator', desc: 'Thought leadership and company updates.', slug: 'business-blog-generator' },
      { name: 'Free Blog Builder', desc: 'No cost to start, no code required.', slug: 'free-blog-builder' },
    ],
  },
  stores: {
    heading: 'Online Stores',
    desc: 'Sell products online with payments, inventory, and shipping built in.',
    items: [
      { name: 'Online Store Builder', desc: 'Start selling without writing code.', slug: 'online-store-builder' },
      { name: 'AI Store Generator', desc: 'Describe your products and get a store instantly.', slug: 'ai-store-generator' },
      { name: 'Free Online Store Builder', desc: 'List products and accept payments at no cost.', slug: 'free-online-store-builder' },
      { name: 'Online Store Builder for Restaurants', desc: 'Menus, ordering, and delivery in one storefront.', slug: 'online-store-builder-for-restaurants' },
      { name: 'Handmade Goods Store Builder', desc: 'Sell crafts, art, and handmade items beautifully.', slug: 'handmade-goods-store-builder' },
      { name: 'Digital Products Store Generator', desc: 'Sell ebooks, courses, and downloads instantly.', slug: 'digital-products-store-generator' },
      { name: 'Clothing Store Builder', desc: 'Fashion-forward layouts with size and color variants.', slug: 'clothing-store-builder' },
      { name: 'One-Product Store Generator', desc: 'Focused single-product pages that convert.', slug: 'one-product-store-generator' },
      { name: 'Subscription Box Store Builder', desc: 'Recurring orders and membership management.', slug: 'subscription-box-store-builder' },
      { name: 'Jewelry Store Website Builder', desc: 'Elegant product displays for fine goods.', slug: 'jewelry-store-website-builder' },
    ],
  },
  'link-in-bio': {
    heading: 'Link-in-Bio',
    desc: 'One link, all your places. Built for creators and social media.',
    items: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels.', slug: 'link-in-bio-generator' },
      { name: 'Free Link-in-Bio Builder', desc: 'No cost, no code, live in seconds.', slug: 'free-link-in-bio-builder' },
      { name: 'Link-in-Bio for Musicians', desc: 'Streaming links, tour dates, and merch in one place.', slug: 'link-in-bio-for-musicians' },
      { name: 'Link-in-Bio for Influencers', desc: 'Brand deals, content, and social links organized.', slug: 'link-in-bio-for-influencers' },
      { name: 'AI Link-in-Bio Generator', desc: 'Describe your brand and get a link page instantly.', slug: 'ai-link-in-bio-generator' },
      { name: 'Link-in-Bio for Podcasters', desc: 'Episodes, subscribe links, and show notes.', slug: 'link-in-bio-for-podcasters' },
      { name: 'Link-in-Bio for Artists', desc: 'Gallery, shop, and social links in one spot.', slug: 'link-in-bio-for-artists' },
      { name: 'Beautiful Link-in-Bio Builder', desc: 'Stand out with a designed link page, not a plain list.', slug: 'beautiful-link-in-bio-builder' },
      { name: 'Link-in-Bio for Small Business', desc: 'Hours, location, booking, and contact in one link.', slug: 'link-in-bio-for-small-business' },
      { name: 'Creator Link-in-Bio Generator', desc: 'Content, merch, and community links unified.', slug: 'creator-link-in-bio-generator' },
    ],
  },
}

export const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { label: 'Templates', href: '/templates' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'AI Site Builder', href: '/s/ai_site_builder' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Support', href: '/support' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: '/support' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
}
