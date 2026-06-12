function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const categories = [
  {
    id: 'websites',
    name: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
  },
  {
    id: 'portfolios',
    name: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
  },
  {
    id: 'blogs',
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
  },
  {
    id: 'stores',
    name: 'Online Stores',
    description: 'Sell products online with payments built in.',
  },
  {
    id: 'link-in-bio',
    name: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
  },
]

export const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog' },
]

export const allGenerators = {
  websites: [
    { name: 'AI Website Generator', description: 'Describe your business and get a complete website in seconds.' },
    { name: 'One-Page Website Builder', description: 'Simple, single-scroll sites for any purpose.' },
    { name: 'Wedding Website Generator', description: 'Share your story, RSVP, and event details with guests.' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, location, and reservations in one place.' },
    { name: 'Free Website Builder for Photographers', description: 'Showcase your best shots with a clean gallery layout.' },
    { name: 'Small Business Website Generator', description: 'Professional sites for local businesses and startups.' },
    { name: 'AI Website Builder for Consultants', description: 'Credibility-first sites for service professionals.' },
    { name: 'Yoga Studio Website Generator', description: 'Class schedules, instructor bios, and booking built in.' },
    { name: 'Nonprofit Website Builder', description: 'Tell your mission and accept donations online.' },
    { name: 'Real Estate Agent Website Generator', description: 'Listings, contact forms, and neighborhood guides.' },
    { name: 'Music Artist Website Builder', description: 'Bio, tour dates, and streaming links in one place.' },
    { name: 'Church Website Generator', description: 'Service times, events, and community updates.' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', description: 'High-converting single pages built by AI.' },
    { name: 'Product Launch Landing Page', description: 'Build hype and collect signups before launch day.' },
    { name: 'Event Landing Page Generator', description: 'Promote events with RSVP and countdown timers.' },
    { name: 'Free Landing Page Builder', description: 'No-cost landing pages for any campaign.' },
    { name: 'SaaS Landing Page Generator', description: 'Feature highlights, pricing, and signup forms.' },
    { name: 'App Download Landing Page', description: 'Drive installs with a focused mobile-first page.' },
    { name: 'Webinar Registration Page Builder', description: 'Capture registrations with a clean, focused layout.' },
    { name: 'Coming Soon Page Generator', description: 'Tease your launch and grow your email list.' },
    { name: 'Lead Capture Page Builder', description: 'Simple forms that turn visitors into leads.' },
    { name: 'No-Code Landing Page Maker', description: 'Beautiful pages without touching a line of code.' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', description: 'Showcase your work beautifully, no cost to start.' },
    { name: 'Portfolio Generator for Designers', description: 'Visual-first layouts for graphic and UI designers.' },
    { name: 'Photography Portfolio Builder', description: 'Full-bleed galleries that let your images speak.' },
    { name: 'Developer Portfolio Generator', description: 'Projects, skills, and GitHub links in one place.' },
    { name: 'Freelancer Portfolio Builder', description: 'Win clients with a professional online presence.' },
    { name: 'Artist Portfolio Website Maker', description: 'Gallery-style sites for painters, sculptors, and illustrators.' },
    { name: 'Architecture Portfolio Generator', description: 'Project case studies with large-format imagery.' },
    { name: 'Video Portfolio Builder', description: 'Embed reels and showreels in a cinematic layout.' },
    { name: 'Student Portfolio Generator', description: 'Stand out to employers with your best academic work.' },
    { name: 'Writing Portfolio Builder', description: 'Clips, bylines, and published work in one clean page.' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', description: 'Start publishing with zero technical knowledge.' },
    { name: 'AI Blog Builder', description: 'Generate posts and layouts with artificial intelligence.' },
    { name: 'Personal Blog Generator', description: 'Share your thoughts with a clean, readable design.' },
    { name: 'Travel Blog Builder', description: 'Photo-rich layouts for documenting your journeys.' },
    { name: 'Food Blog Generator', description: 'Recipe cards, photography, and category pages built in.' },
    { name: 'Tech Blog Builder', description: 'Code snippets, tutorials, and clean typography.' },
    { name: 'Fashion Blog Generator', description: 'Visual-first layouts for style and lifestyle content.' },
    { name: 'Fitness Blog Builder', description: 'Workout guides, nutrition tips, and progress tracking.' },
    { name: 'Free Blog Maker', description: 'Publish-ready blogs without spending a dollar.' },
    { name: 'SEO Blog Generator', description: 'Blogs built with search engine visibility in mind.' },
  ],
  stores: [
    { name: 'Online Store Builder', description: 'Start selling products online without writing code.' },
    { name: 'AI E-commerce Generator', description: 'Product pages, cart, and checkout built by AI.' },
    { name: 'Free Online Store Maker', description: 'Launch your shop without upfront costs.' },
    { name: 'Clothing Store Builder', description: 'Fashion-forward layouts with size and color variants.' },
    { name: 'Digital Products Store Generator', description: 'Sell ebooks, courses, and downloads instantly.' },
    { name: 'Handmade Goods Store Builder', description: 'Artisan-friendly shops for crafts and handmade items.' },
    { name: 'Online Store Builder for Restaurants', description: 'Menus, ordering, and delivery in one storefront.' },
    { name: 'Jewelry Store Generator', description: 'Elegant product displays for accessories and jewelry.' },
    { name: 'Print-on-Demand Store Builder', description: 'Connect your designs to fulfillment services.' },
    { name: 'Subscription Box Store Generator', description: 'Recurring billing and product curation made simple.' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels and content.' },
    { name: 'Free Link-in-Bio Page Builder', description: 'No cost, no code, just your links in one place.' },
    { name: 'Creator Link Page Generator', description: 'Built for YouTubers, streamers, and content creators.' },
    { name: 'Artist Link-in-Bio Builder', description: 'Music, merch, and social links in one beautiful page.' },
    { name: 'Influencer Link Page Maker', description: 'Showcase brand deals, content, and affiliate links.' },
    { name: 'AI Link-in-Bio Generator', description: 'Let AI arrange your links for maximum engagement.' },
    { name: 'Podcast Link Page Builder', description: 'Episodes, platforms, and guest links all in one spot.' },
    { name: 'Business Card Link Page', description: 'A digital business card with all your contact points.' },
    { name: 'No-Code Link-in-Bio Maker', description: 'Beautiful link pages without any technical skills.' },
    { name: 'Multi-Platform Link Hub', description: 'Connect every platform you use in a single page.' },
  ],
}

// Pre-compute slugs for all generators
export const featuredGeneratorsWithSlugs = featuredGenerators.map((g) => ({
  ...g,
  slug: slugify(g.name),
}))

export const allGeneratorsWithSlugs = Object.fromEntries(
  Object.entries(allGenerators).map(([categoryId, generators]) => [
    categoryId,
    generators.map((g) => ({
      ...g,
      slug: slugify(g.name),
      categoryId,
    })),
  ])
)
