function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export const categories = [
  {
    id: 'websites',
    name: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
    hash: '#websites',
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    hash: '#landing-pages',
  },
  {
    id: 'portfolios',
    name: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    hash: '#portfolios',
  },
  {
    id: 'blogs',
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    hash: '#blogs',
  },
  {
    id: 'stores',
    name: 'Online Stores',
    description: 'Sell products online with payments built in.',
    hash: '#stores',
  },
  {
    id: 'link-in-bio',
    name: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    hash: '#link-in-bio',
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
    { name: 'AI Website Generator', description: 'Describe your business and get a complete site in seconds.' },
    { name: 'One-Page Website Builder', description: 'Simple sites with a single scroll layout.' },
    { name: 'Wedding Website Generator', description: 'Share your special day with guests online.' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, and reservations in one place.' },
    { name: 'Free Website Builder for Photographers', description: 'Showcase your photos with a stunning gallery site.' },
    { name: 'Yoga Instructor Website Generator', description: 'Class schedules, booking, and your story.' },
    { name: 'Freelancer Website Builder', description: 'Present your services and win new clients.' },
    { name: 'Nonprofit Website Generator', description: 'Share your mission and accept donations online.' },
    { name: 'Real Estate Agent Website Builder', description: 'Listings, contact forms, and your brand.' },
    { name: 'Music Artist Website Generator', description: 'Bio, tour dates, and streaming links in one place.' },
    { name: 'Consultant Website Builder', description: 'Establish authority and book discovery calls.' },
    { name: 'Church Website Generator', description: 'Service times, events, and community updates.' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', description: 'One-page sites built to convert visitors fast.' },
    { name: 'Product Launch Landing Page', description: 'Build hype and collect signups before launch day.' },
    { name: 'Event Landing Page Generator', description: 'Promote your event and sell tickets online.' },
    { name: 'App Landing Page Builder', description: 'Showcase your mobile app with download links.' },
    { name: 'Coming Soon Page Generator', description: 'Tease your project and grow your email list.' },
    { name: 'Webinar Landing Page Maker', description: 'Drive registrations for your next online event.' },
    { name: 'SaaS Landing Page Generator', description: 'Convert visitors into free trial signups.' },
    { name: 'Lead Generation Landing Page', description: 'Capture leads with a focused, high-converting page.' },
    { name: 'Free Landing Page Builder', description: 'No-cost landing pages for any campaign.' },
    { name: 'No-Code Landing Page Maker', description: 'Build conversion-focused pages without developers.' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee.' },
    { name: 'Portfolio Generator for Designers', description: 'Show off your design work beautifully.' },
    { name: 'Photography Portfolio Builder', description: 'Full-screen galleries that load fast.' },
    { name: 'Artist Portfolio Generator', description: 'Display paintings, sculptures, and mixed media.' },
    { name: 'UX Portfolio Website Builder', description: 'Case studies and process documentation.' },
    { name: 'Architecture Portfolio Generator', description: 'Projects, renders, and firm credentials.' },
    { name: 'Video Portfolio Builder', description: 'Embed reels and showcase your production work.' },
    { name: 'Illustration Portfolio Generator', description: 'Clean layouts for your illustration work.' },
    { name: 'Student Portfolio Builder', description: 'Stand out to employers with your best projects.' },
    { name: 'Writing Portfolio Generator', description: 'Clips, bylines, and published work in one place.' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes, no experience needed.' },
    { name: 'AI Blog Builder', description: 'Generate blog posts and layouts with AI assistance.' },
    { name: 'Personal Blog Generator', description: 'Share your thoughts with a clean, readable design.' },
    { name: 'Travel Blog Builder', description: 'Photo-rich layouts for your adventures.' },
    { name: 'Food Blog Generator', description: 'Recipe cards, photos, and a hungry audience.' },
    { name: 'Tech Blog Builder', description: 'Code snippets, tutorials, and industry insights.' },
    { name: 'Lifestyle Blog Generator', description: 'Fashion, wellness, and daily inspiration.' },
    { name: 'Business Blog Builder', description: 'Thought leadership content for your brand.' },
    { name: 'Free Blog Maker', description: 'Start blogging without spending a dime.' },
    { name: 'SEO Blog Generator', description: 'Built-in SEO basics to help your posts rank.' },
  ],
  stores: [
    { name: 'Online Store Builder', description: 'Start selling without writing code.' },
    { name: 'AI E-commerce Generator', description: 'Product pages, cart, and checkout in seconds.' },
    { name: 'Online Store Builder for Restaurants', description: 'Take orders and manage your menu online.' },
    { name: 'Handmade Goods Store Builder', description: 'Sell crafts, art, and handmade products.' },
    { name: 'Digital Products Store Generator', description: 'Sell ebooks, courses, and downloads.' },
    { name: 'Fashion Store Builder', description: 'Lookbooks, size guides, and seamless checkout.' },
    { name: 'Dropshipping Store Generator', description: 'Launch a store without holding inventory.' },
    { name: 'Subscription Box Store Builder', description: 'Recurring orders and membership management.' },
    { name: 'Free Online Store Maker', description: 'Start selling with zero upfront cost.' },
    { name: 'One-Product Store Generator', description: 'Focused stores for a single hero product.' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels.' },
    { name: 'Creator Link Page Builder', description: 'Aggregate your content across platforms.' },
    { name: 'Musician Link-in-Bio Generator', description: 'Streaming, merch, and tour dates in one link.' },
    { name: 'Influencer Link Page Maker', description: 'Brand deals, content, and social links.' },
    { name: 'Artist Link-in-Bio Builder', description: 'Gallery, shop, and commissions from one URL.' },
    { name: 'Podcast Link Page Generator', description: 'Episodes, subscribe links, and show notes.' },
    { name: 'Free Link-in-Bio Maker', description: 'No cost, no ads, just your links.' },
    { name: 'Beautiful Link-in-Bio Generator', description: 'Stunning designs that match your brand.' },
    { name: 'Business Link Page Builder', description: 'Professional link hub for your company.' },
    { name: 'No-Code Link-in-Bio Generator', description: 'Set up in seconds, no technical skills needed.' },
  ],
}

// Add slugs to all generators
export const featuredGeneratorsWithSlugs = featuredGenerators.map((g) => ({
  ...g,
  slug: slugify(g.name),
  href: `/generators/${slugify(g.name)}`,
}))

export const allGeneratorsWithSlugs = Object.fromEntries(
  Object.entries(allGenerators).map(([categoryId, generators]) => [
    categoryId,
    generators.map((g) => ({
      ...g,
      slug: slugify(g.name),
      href: `/generators/${slugify(g.name)}`,
    })),
  ])
)
