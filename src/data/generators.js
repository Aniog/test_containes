// All user-visible strings live in strings.en for i18n readiness.
export const strings = {
  en: {
    siteTitle: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    heroCta: "START BUILDING — IT'S FREE",
    heroCtaSecondary: 'BROWSE GENERATORS',
    featuredHeading: 'FEATURED GENERATORS',
    featuredSub: 'A few common starting points.',
    categoryHeading: 'BROWSE BY CATEGORY',
    categorySub: "Jump to the section that fits what you're building.",
    allHeading: 'ALL GENERATORS',
    allSub: "Sixty-plus generators, organized by what you're building.",
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    searchResultCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
    searchEmpty: 'No generators match your search.',
    searchEmptyClear: 'Clear search',
    searchEmptyAlt: "Can't find it? Start with our AI builder.",
    showAll: (n) => `Show all ${n} generators`,
    showLess: 'Show less',
    howHeading: 'HOW IT WORKS',
    whyHeading: 'WHY STRIKINGLY',
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    footerCopyright: `© ${new Date().getFullYear()} Strikingly, Inc. All rights reserved.`,
  },
};

export const AI_BUILDER_URL = '/s/ai_site_builder';

export const featuredGenerators = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site.', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee.', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert.', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code.', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels.', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll.', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests.', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done.', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes.', category: 'Blog', slug: 'blog-generator-for-beginners' },
];

export const categoryCards = [
  { id: 'websites', name: 'Websites', desc: 'AI-built business and personal sites for any goal.', anchor: '#websites' },
  { id: 'landing-pages', name: 'Landing Pages', desc: 'Single-page sites built to convert visitors fast.', anchor: '#landing-pages' },
  { id: 'portfolios', name: 'Portfolios', desc: 'Showcase your work with a clean, focused site.', anchor: '#portfolios' },
  { id: 'blogs', name: 'Blogs', desc: 'Publish-ready blogs with built-in SEO basics.', anchor: '#blogs' },
  { id: 'stores', name: 'Online Stores', desc: 'Sell products online with payments built in.', anchor: '#stores' },
  { id: 'link-in-bio', name: 'Link-in-Bio', desc: 'One link, all your places. Made for creators.', anchor: '#link-in-bio' },
];

export const allGenerators = [
  {
    id: 'websites',
    heading: 'Websites',
    desc: 'AI-built sites for businesses, creators, and personal projects.',
    items: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site in seconds.', slug: 'ai-website-generator' },
      { name: 'Free Website Builder for Photographers', desc: 'Showcase your portfolio with a stunning photo site.', slug: 'free-website-builder-for-photographers' },
      { name: 'One-Page Wedding Website Builder', desc: 'Everything guests need, on one beautiful page.', slug: 'one-page-wedding-website-builder' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations — all in one place.', slug: 'restaurant-website-builder' },
      { name: 'Small Business Website Generator', desc: 'Professional site for your local business, fast.', slug: 'small-business-website-generator' },
      { name: 'Yoga Instructor Website Builder', desc: 'Class schedules, booking, and your story — done.', slug: 'yoga-instructor-website-builder' },
      { name: 'No-Code Website Builder for Freelancers', desc: 'Win clients with a site that looks like you hired a designer.', slug: 'no-code-website-builder-for-freelancers' },
      { name: 'Beautiful Personal Website Generator', desc: 'A polished personal site in under five minutes.', slug: 'beautiful-personal-website-generator' },
      { name: 'Event Website Builder', desc: 'Promote your event with RSVP and details built in.', slug: 'event-website-builder' },
      { name: 'Nonprofit Website Generator', desc: 'Tell your mission story and collect donations online.', slug: 'nonprofit-website-generator' },
    ],
  },
  {
    id: 'landing-pages',
    heading: 'Landing Pages',
    desc: 'Single-page sites designed to capture leads and drive conversions.',
    items: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert, generated by AI.', slug: 'ai-landing-page-maker' },
      { name: 'Product Launch Landing Page Generator', desc: 'Build buzz and collect sign-ups before you ship.', slug: 'product-launch-landing-page-generator' },
      { name: 'Free Lead Capture Page Builder', desc: 'Grow your email list with a focused opt-in page.', slug: 'free-lead-capture-page-builder' },
      { name: 'Webinar Registration Page Generator', desc: 'Drive sign-ups for your next live event.', slug: 'webinar-registration-page-generator' },
      { name: 'App Download Landing Page Builder', desc: 'Send visitors straight to the App Store or Play Store.', slug: 'app-download-landing-page-builder' },
      { name: 'Coming Soon Page Generator', desc: 'Hold your spot online while you build the real thing.', slug: 'coming-soon-page-generator' },
      { name: 'Sales Page Builder for Coaches', desc: 'Sell your program with a persuasive one-pager.', slug: 'sales-page-builder-for-coaches' },
      { name: 'No-Code Squeeze Page Maker', desc: 'Minimal, high-converting opt-in pages without code.', slug: 'no-code-squeeze-page-maker' },
      { name: 'Real Estate Landing Page Generator', desc: 'Showcase a property and capture buyer inquiries.', slug: 'real-estate-landing-page-generator' },
    ],
  },
  {
    id: 'portfolios',
    heading: 'Portfolios',
    desc: 'Clean, focused sites that let your work do the talking.',
    items: [
      { name: 'Portfolio Generator for Designers', desc: 'Show your best work in a gallery that impresses clients.', slug: 'portfolio-generator-for-designers' },
      { name: 'Free Portfolio Generator', desc: 'For creatives of all kinds — no fee, no code.', slug: 'free-portfolio-generator' },
      { name: 'Photography Portfolio Builder', desc: 'Full-bleed images, clean layout, instant publish.', slug: 'photography-portfolio-builder' },
      { name: 'Developer Portfolio Generator', desc: 'Highlight your projects, skills, and GitHub in one place.', slug: 'developer-portfolio-generator' },
      { name: 'Illustrator Portfolio Site Builder', desc: 'A gallery-first site built for visual artists.', slug: 'illustrator-portfolio-site-builder' },
      { name: 'UX Designer Portfolio Generator', desc: 'Case studies, process work, and contact — all set.', slug: 'ux-designer-portfolio-generator' },
      { name: 'Videographer Portfolio Builder', desc: 'Embed your reels and let your footage speak.', slug: 'videographer-portfolio-builder' },
      { name: 'Model Portfolio Website Generator', desc: 'Comp card meets website — professional and fast.', slug: 'model-portfolio-website-generator' },
      { name: 'Architect Portfolio Site Builder', desc: 'Showcase projects with plans, renders, and photos.', slug: 'architect-portfolio-site-builder' },
    ],
  },
  {
    id: 'blogs',
    heading: 'Blogs',
    desc: 'Publish-ready blogs with built-in SEO basics from day one.',
    items: [
      { name: 'Blog Generator for Beginners', desc: 'Publish your first post in minutes, no experience needed.', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Site Builder', desc: 'AI writes the structure; you fill in your voice.', slug: 'ai-blog-site-builder' },
      { name: 'Travel Blog Generator', desc: 'Share your adventures with a site built for storytelling.', slug: 'travel-blog-generator' },
      { name: 'Food Blog Website Builder', desc: 'Recipes, photos, and a newsletter — all in one.', slug: 'food-blog-website-builder' },
      { name: 'Personal Blog Generator', desc: 'Your thoughts, your style, live in minutes.', slug: 'personal-blog-generator' },
      { name: 'Business Blog Builder', desc: 'Thought leadership content that ranks and converts.', slug: 'business-blog-builder' },
      { name: 'Lifestyle Blog Site Generator', desc: 'A beautiful home for your wellness, fashion, or life content.', slug: 'lifestyle-blog-site-generator' },
      { name: 'Parenting Blog Website Builder', desc: 'Share your family journey with a warm, readable site.', slug: 'parenting-blog-website-builder' },
      { name: 'Tech Blog Generator', desc: 'Clean, code-friendly layout for tutorials and reviews.', slug: 'tech-blog-generator' },
    ],
  },
  {
    id: 'stores',
    heading: 'Online Stores',
    desc: 'Sell products online with payments and inventory built in.',
    items: [
      { name: 'Online Store Builder', desc: 'Start selling without writing a single line of code.', slug: 'online-store-builder' },
      { name: 'Online Store Builder for Restaurants', desc: 'Take orders and sell merch directly from your site.', slug: 'online-store-builder-for-restaurants' },
      { name: 'Handmade Goods Store Generator', desc: 'Sell your crafts with a shop that feels as personal as your work.', slug: 'handmade-goods-store-generator' },
      { name: 'Digital Products Store Builder', desc: 'Sell ebooks, presets, or templates with instant delivery.', slug: 'digital-products-store-builder' },
      { name: 'Fashion Boutique Website Generator', desc: 'A stylish storefront for your clothing or accessories brand.', slug: 'fashion-boutique-website-generator' },
      { name: 'Free E-commerce Site Builder', desc: 'Launch your first store with no upfront cost.', slug: 'free-ecommerce-site-builder' },
      { name: 'Artist Shop Generator', desc: 'Sell prints, originals, and commissions from your own site.', slug: 'artist-shop-generator' },
      { name: 'Subscription Box Website Builder', desc: 'Recurring billing and product pages, ready to go.', slug: 'subscription-box-website-builder' },
      { name: 'Pet Products Store Generator', desc: 'A friendly, conversion-ready shop for pet lovers.', slug: 'pet-products-store-generator' },
      { name: 'Beauty Brand Website Builder', desc: 'Sell skincare, makeup, or wellness products with style.', slug: 'beauty-brand-website-builder' },
    ],
  },
  {
    id: 'link-in-bio',
    heading: 'Link-in-Bio',
    desc: 'One link that holds all your content, channels, and calls to action.',
    items: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels — built in seconds.', slug: 'link-in-bio-generator' },
      { name: 'Instagram Link-in-Bio Builder', desc: 'Turn your IG bio link into a mini hub for your audience.', slug: 'instagram-link-in-bio-builder' },
      { name: 'Creator Link Page Generator', desc: 'All your content, merch, and socials in one place.', slug: 'creator-link-page-generator' },
      { name: 'Musician Link-in-Bio Builder', desc: 'Streaming links, tour dates, and merch — one tap away.', slug: 'musician-link-in-bio-builder' },
      { name: 'Influencer Bio Link Page Maker', desc: 'A branded page that converts followers into customers.', slug: 'influencer-bio-link-page-maker' },
      { name: 'Podcast Link Page Generator', desc: 'All your episodes and platforms, one shareable link.', slug: 'podcast-link-page-generator' },
      { name: 'TikTok Bio Link Builder', desc: 'Drive TikTok traffic to your products, site, or newsletter.', slug: 'tiktok-bio-link-builder' },
      { name: 'Author Link-in-Bio Page Builder', desc: 'Books, events, newsletter, and social — all linked up.', slug: 'author-link-in-bio-page-builder' },
    ],
  },
];

export const howItWorks = [
  { num: '1', title: 'PICK A GENERATOR', body: 'Browse by category or search to find one that fits your goal.' },
  { num: '2', title: 'DESCRIBE YOUR SITE', body: 'Tell our AI builder about your business in a sentence or two.' },
  { num: '3', title: 'GENERATE AND PUBLISH', body: 'Get a fully built site in seconds. Customize anything, then go live.' },
];

export const whyStrikingly = [
  { title: 'LIVE IN SECONDS', body: 'Describe your site, we build it. No setup, no learning curve.' },
  { title: 'MOBILE BY DEFAULT', body: 'Every generator produces responsive sites that work on any device.' },
  { title: 'FREE TO START', body: 'Generate, customize, and publish without a credit card.' },
];

export const faqItems = [
  {
    q: 'What is an AI site generator?',
    a: "An AI site generator is a tool that builds a complete website for you based on a short description of your business or project. Instead of dragging and dropping elements or writing code, you describe what you need and the AI assembles a full site — pages, layout, copy, and images — in seconds.\n\nStrikingly's generators are tuned for specific use cases (portfolios, stores, landing pages, and more) so the output is relevant to your goal right away.",
  },
  {
    q: 'How is a generator different from a template?',
    a: "A template is a blank starting point you fill in yourself. A generator takes your input — your business name, your industry, a sentence about what you do — and produces a site that's already populated with relevant content and structure.\n\nThe result still looks like a professionally designed site, but it's tailored to you rather than generic.",
  },
  {
    q: 'Are these generators free to use?',
    a: 'Yes. You can generate, preview, and customize any site on Strikingly without a credit card. Publishing your site on a Strikingly subdomain is also free. Paid plans unlock a custom domain, additional pages, and e-commerce features.',
  },
  {
    q: 'What kinds of sites can I build?',
    a: "Strikingly's generators cover websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Within each category there are generators tuned for specific industries and goals — photographers, restaurants, coaches, musicians, and many more.\n\nIf you don't see a generator for your exact use case, the general AI Website Generator is a good starting point.",
  },
  {
    q: 'Can I customize what the generator produces?',
    a: "Absolutely. Every generated site opens in Strikingly's visual editor, where you can change text, swap images, reorder sections, adjust colors, and add or remove blocks. The generator gives you a strong starting point; you have full control over the final result.",
  },
  {
    q: 'Do generated sites work on mobile?',
    a: 'Yes. Every site Strikingly generates is fully responsive by default. The layout, typography, and images adapt automatically to phones and tablets. You can preview the mobile view in the editor before you publish.',
  },
];

export const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'Templates', href: '/templates' },
      { label: 'Pricing', href: '/pricing' },
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
      { label: 'AI Website Generator', href: '/generators/ai-website-generator' },
      { label: 'Portfolio Generator', href: '/generators/free-portfolio-generator' },
      { label: 'Landing Page Maker', href: '/generators/ai-landing-page-maker' },
      { label: 'Online Store Builder', href: '/generators/online-store-builder' },
    ],
  },
];
