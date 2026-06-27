export const strings = {
  en: {
    breadcrumb: { home: 'Strikingly', current: 'AI Generators' },
    hero: {
      h1Line1: 'BUILD ANY KIND OF SITE',
      h1Line2: 'WITH AI, IN AN INSTANT',
      sub: 'Browse the right generator for what you\u2019re building, or jump straight into our AI site builder.',
      ctaPrimary: 'START BUILDING \u2014 IT\u2019S FREE',
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
      sub: 'Sixty-plus generators, organized by what you\u2019re building.',
      searchPlaceholder: 'Search generators...',
      matchCount: (n) => `${n} generator${n === 1 ? '' : 's'} match`,
      noResults: 'No generators match your search.',
      clearSearch: 'Clear search',
      cantFind: 'Can\u2019t find it? Start with our AI builder.',
      showAll: (n) => `Show all ${n} generators`,
      showLess: 'Show less',
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
          a: 'An AI site generator is a tool that uses artificial intelligence to create a complete website based on a short description you provide. Instead of starting from a blank page or choosing a template, you describe your business or project in a sentence or two, and the AI builds a fully designed, content-filled website in seconds. You can then customize any part of it before publishing.',
        },
        {
          q: 'How is a generator different from a template?',
          a: 'A template is a pre-designed layout that you fill in with your own content. A generator goes further\u2014it creates both the design and the content tailored to your specific description. Templates give you a starting structure; generators give you a nearly finished site. The result is more personalized and requires less manual editing to get to a publishable state.',
        },
        {
          q: 'Are these generators free to use?',
          a: 'Yes. You can generate, customize, and publish a site without entering a credit card. Strikingly offers free plans that include hosting and a Strikingly subdomain. Premium features like custom domains, advanced analytics, and e-commerce tools are available on paid plans if you need them later.',
        },
        {
          q: 'What kinds of sites can I build?',
          a: 'You can build business websites, portfolios, landing pages, blogs, online stores, link-in-bio pages, event sites, restaurant pages, and much more. Our generators cover a wide range of industries and use cases. If you don\u2019t see an exact match, the general AI site builder can handle virtually any type of site.',
        },
        {
          q: 'Can I customize what the generator produces?',
          a: 'Absolutely. The generated site is a starting point, not a locked result. You can edit text, swap images, rearrange sections, change colors, add new pages, and adjust every detail using Strikingly\u2019s visual editor. Think of the generator as giving you a strong first draft that you refine to perfection.',
        },
        {
          q: 'Do generated sites work on mobile?',
          a: 'Yes. Every site produced by our generators is fully responsive out of the box. The layouts automatically adapt to phones, tablets, and desktops. You don\u2019t need to build a separate mobile version\u2014it\u2019s handled for you from the moment the site is generated.',
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
  { id: 'websites', name: 'Websites', slug: 'websites', desc: 'AI-built business and personal sites for any goal.' },
  { id: 'landing-pages', name: 'Landing Pages', slug: 'landing-pages', desc: 'Single-page sites built to convert visitors fast.' },
  { id: 'portfolios', name: 'Portfolios', slug: 'portfolios', desc: 'Showcase your work with a clean, focused site.' },
  { id: 'blogs', name: 'Blogs', slug: 'blogs', desc: 'Publish-ready blogs with built-in SEO basics.' },
  { id: 'stores', name: 'Online Stores', slug: 'stores', desc: 'Sell products online with payments built in.' },
  { id: 'link-in-bio', name: 'Link-in-Bio', slug: 'link-in-bio', desc: 'One link, all your places. Made for creators.' },
];

export const featuredGenerators = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site', category: 'Website' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', category: 'Landing Page' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code', category: 'Store' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', category: 'Website' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests', category: 'Website' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', category: 'Website' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', category: 'Blog' },
];

export const allGenerators = {
  websites: [
    { name: 'AI Website Generator', desc: 'Describe your business and get a complete site in seconds.' },
    { name: 'One-Page Website Builder', desc: 'Simple, single-scroll sites for any purpose.' },
    { name: 'Wedding Website Generator', desc: 'Share your story, RSVP, and event details with guests.' },
    { name: 'Restaurant Website Builder', desc: 'Menu, hours, location, and reservations in one place.' },
    { name: 'Free Website Builder for Photographers', desc: 'Showcase your best shots with a gallery-first layout.' },
    { name: 'Small Business Website Generator', desc: 'Professional sites for local businesses and startups.' },
    { name: 'AI Website Builder for Consultants', desc: 'Credibility-first sites for service professionals.' },
    { name: 'Yoga Studio Website Generator', desc: 'Class schedules, instructor bios, and booking built in.' },
    { name: 'Nonprofit Website Builder', desc: 'Tell your mission and accept donations online.' },
    { name: 'Real Estate Agent Website Generator', desc: 'Listings, contact forms, and neighborhood guides.' },
    { name: 'Music Artist Website Builder', desc: 'Bio, tour dates, and streaming links in one place.' },
    { name: 'Church Website Generator', desc: 'Service times, events, and community updates.' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', desc: 'High-converting single pages built by AI.' },
    { name: 'Product Launch Landing Page', desc: 'Build hype and collect signups before launch day.' },
    { name: 'Event Landing Page Generator', desc: 'Promote events with RSVP and countdown timers.' },
    { name: 'App Download Landing Page', desc: 'Drive installs with a focused mobile-first page.' },
    { name: 'Free Landing Page Builder', desc: 'No-cost landing pages for any campaign.' },
    { name: 'Webinar Registration Page Generator', desc: 'Fill seats with a clear value prop and signup form.' },
    { name: 'SaaS Landing Page Builder', desc: 'Feature highlights, pricing, and trial signups.' },
    { name: 'Coming Soon Page Generator', desc: 'Tease your project and grow your email list.' },
    { name: 'Lead Generation Landing Page', desc: 'Capture leads with optimized forms and copy.' },
    { name: 'No-Code Landing Page Maker', desc: 'Drag-free AI pages, no technical skills needed.' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', desc: 'Showcase your work beautifully, no cost.' },
    { name: 'Portfolio Generator for Designers', desc: 'Visual-first layouts for graphic and UI designers.' },
    { name: 'Photography Portfolio Builder', desc: 'Full-bleed galleries that let your images speak.' },
    { name: 'Developer Portfolio Generator', desc: 'Projects, skills, and GitHub links in one place.' },
    { name: 'Art Portfolio Website Builder', desc: 'Clean galleries for painters, illustrators, and sculptors.' },
    { name: 'Freelancer Portfolio Generator', desc: 'Win clients with a professional online presence.' },
    { name: 'Architecture Portfolio Builder', desc: 'Project case studies with large imagery.' },
    { name: 'Video Portfolio Generator', desc: 'Embed reels and showreels in a cinematic layout.' },
    { name: 'Student Portfolio Website Builder', desc: 'Stand out to employers with your best academic work.' },
    { name: 'Writing Portfolio Generator', desc: 'Published clips, bylines, and testimonials organized.' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', desc: 'Start publishing with zero setup.' },
    { name: 'AI Blog Builder', desc: 'AI-written drafts and SEO-ready structure.' },
    { name: 'Personal Blog Generator', desc: 'Share your thoughts with a clean reading experience.' },
    { name: 'Travel Blog Website Builder', desc: 'Photo-rich posts with maps and itineraries.' },
    { name: 'Food Blog Generator', desc: 'Recipe cards, photography, and category filters.' },
    { name: 'Tech Blog Builder', desc: 'Code snippets, tutorials, and developer-friendly layouts.' },
    { name: 'Fashion Blog Generator', desc: 'Lookbooks, outfit posts, and shoppable links.' },
    { name: 'Fitness Blog Website Builder', desc: 'Workout guides, nutrition tips, and progress tracking.' },
    { name: 'Free Blog Maker', desc: 'No-cost blogging with built-in SEO basics.' },
    { name: 'Lifestyle Blog Generator', desc: 'Multi-topic blogs with beautiful category pages.' },
  ],
  stores: [
    { name: 'Online Store Builder', desc: 'Start selling products without writing code.' },
    { name: 'AI E-commerce Website Generator', desc: 'Product pages, cart, and checkout built by AI.' },
    { name: 'Dropshipping Store Builder', desc: 'Launch a store without holding inventory.' },
    { name: 'Handmade Goods Store Generator', desc: 'Sell crafts, art, and handmade products online.' },
    { name: 'Digital Products Store Builder', desc: 'Sell ebooks, courses, and downloads instantly.' },
    { name: 'Fashion Store Website Generator', desc: 'Lookbook-style shopping for clothing brands.' },
    { name: 'Online Store Builder for Restaurants', desc: 'Menus, ordering, and delivery in one storefront.' },
    { name: 'Jewelry Store Website Generator', desc: 'Elegant product displays for fine goods.' },
    { name: 'Free Online Store Maker', desc: 'Start selling at no cost with basic e-commerce.' },
    { name: 'Subscription Box Store Builder', desc: 'Recurring orders and membership management.' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', desc: 'One link for all your channels and content.' },
    { name: 'Free Link-in-Bio Page Builder', desc: 'No-cost bio links for any social platform.' },
    { name: 'Link-in-Bio for Musicians', desc: 'Streaming links, tour dates, and merch in one page.' },
    { name: 'Creator Link Page Generator', desc: 'Showcase videos, posts, and affiliate links.' },
    { name: 'Link-in-Bio for Small Business', desc: 'Hours, location, menu, and booking links.' },
    { name: 'AI Link-in-Bio Builder', desc: 'Auto-organized links based on your social profiles.' },
    { name: 'Link-in-Bio for Podcasters', desc: 'Episode links, show notes, and sponsor info.' },
    { name: 'Beautiful Link Page Generator', desc: 'Branded bio pages that match your aesthetic.' },
    { name: 'Link-in-Bio for Artists', desc: 'Gallery previews, shop links, and commission info.' },
    { name: 'No-Code Link-in-Bio Maker', desc: 'Build your link hub without any technical skills.' },
  ],
};

export function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
