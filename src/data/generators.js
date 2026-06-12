function slug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export const categories = [
  { id: 'websites', name: 'Websites', desc: 'AI-built business and personal sites for any goal.' },
  { id: 'landing-pages', name: 'Landing Pages', desc: 'Single-page sites built to convert visitors fast.' },
  { id: 'portfolios', name: 'Portfolios', desc: 'Showcase your work with a clean, focused site.' },
  { id: 'blogs', name: 'Blogs', desc: 'Publish-ready blogs with built-in SEO basics.' },
  { id: 'stores', name: 'Online Stores', desc: 'Sell products online with payments built in.' },
  { id: 'link-in-bio', name: 'Link-in-Bio', desc: 'One link, all your places. Made for creators.' },
]

export const featuredGenerators = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site.', category: 'Website' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee.', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert.', category: 'Landing Page' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code.', category: 'Store' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels.', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll.', category: 'Website' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests.', category: 'Website' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done.', category: 'Website' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes.', category: 'Blog' },
]

export const allGenerators = {
  websites: [
    { name: 'AI Website Generator', desc: 'Describe your business and get a complete site in seconds.' },
    { name: 'One-Page Website Builder', desc: 'Simple sites with a single scroll layout.' },
    { name: 'Wedding Website Generator', desc: 'Share your big day with guests online.' },
    { name: 'Restaurant Website Builder', desc: 'Menu, hours, and reservations in one place.' },
    { name: 'Free Website Builder for Photographers', desc: 'Showcase your photos with a stunning gallery site.' },
    { name: 'AI Website Generator for Small Business', desc: 'Professional sites for local businesses.' },
    { name: 'Church Website Builder', desc: 'Connect your congregation with events and sermons.' },
    { name: 'Yoga Instructor Website Generator', desc: 'Class schedules, booking, and your story.' },
    { name: 'Real Estate Agent Website Builder', desc: 'Listings, contact forms, and your brand.' },
    { name: 'Nonprofit Website Generator', desc: 'Share your mission and accept donations.' },
    { name: 'Music Artist Website Builder', desc: 'Bio, tour dates, and streaming links.' },
    { name: 'Consultant Website Generator', desc: 'Establish authority and book clients online.' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert visitors.' },
    { name: 'Product Launch Landing Page', desc: 'Build hype and collect signups before launch.' },
    { name: 'Event Landing Page Generator', desc: 'Promote events with RSVP and details.' },
    { name: 'App Landing Page Builder', desc: 'Showcase your mobile app with download links.' },
    { name: 'Free Landing Page Generator', desc: 'No-cost landing pages for any campaign.' },
    { name: 'SaaS Landing Page Builder', desc: 'Feature highlights, pricing, and signup.' },
    { name: 'Webinar Landing Page Generator', desc: 'Register attendees with a focused page.' },
    { name: 'Coming Soon Page Builder', desc: 'Tease your project and collect emails.' },
    { name: 'Lead Generation Landing Page', desc: 'Capture leads with optimized forms.' },
    { name: 'No-Code Landing Page Maker', desc: 'Build conversion pages without developers.' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee.' },
    { name: 'Portfolio Generator for Designers', desc: 'Show off your design work beautifully.' },
    { name: 'Photography Portfolio Builder', desc: 'Full-screen galleries that load fast.' },
    { name: 'Developer Portfolio Generator', desc: 'Projects, skills, and GitHub links.' },
    { name: 'Artist Portfolio Website Builder', desc: 'Display paintings, sculptures, and mixed media.' },
    { name: 'Freelancer Portfolio Generator', desc: 'Win clients with a professional showcase.' },
    { name: 'Architecture Portfolio Builder', desc: 'Present projects with plans and renders.' },
    { name: 'Video Portfolio Generator', desc: 'Embed reels and showreels seamlessly.' },
    { name: 'Student Portfolio Builder', desc: 'Stand out to employers with your best work.' },
    { name: 'UX Portfolio Generator', desc: 'Case studies and process documentation.' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes, no experience needed.' },
    { name: 'AI Blog Builder', desc: 'Generate posts and layouts with AI assistance.' },
    { name: 'Personal Blog Generator', desc: 'Share your thoughts with a clean, simple blog.' },
    { name: 'Travel Blog Builder', desc: 'Photo-rich posts with maps and itineraries.' },
    { name: 'Food Blog Generator', desc: 'Recipe cards, photos, and category pages.' },
    { name: 'Tech Blog Builder', desc: 'Code snippets, tutorials, and clean typography.' },
    { name: 'Fashion Blog Generator', desc: 'Lookbooks, outfit posts, and shop links.' },
    { name: 'Fitness Blog Builder', desc: 'Workout plans, nutrition tips, and progress tracking.' },
    { name: 'Free Blog Generator', desc: 'Start blogging without spending a dime.' },
    { name: 'SEO Blog Builder', desc: 'Built-in SEO tools for every post you publish.' },
  ],
  stores: [
    { name: 'Online Store Builder', desc: 'Start selling without writing code.' },
    { name: 'AI Store Generator', desc: 'Describe your products, get a full storefront.' },
    { name: 'Free Online Store Builder', desc: 'Launch your shop with zero upfront cost.' },
    { name: 'Clothing Store Generator', desc: 'Fashion-forward layouts with size guides.' },
    { name: 'Digital Products Store Builder', desc: 'Sell downloads, courses, and licenses.' },
    { name: 'Handmade Goods Store Generator', desc: 'Showcase crafts with artisan-style design.' },
    { name: 'Online Store Builder for Restaurants', desc: 'Menus, ordering, and delivery options.' },
    { name: 'Jewelry Store Generator', desc: 'Elegant product pages with zoom and detail.' },
    { name: 'Print-on-Demand Store Builder', desc: 'Connect your designs to fulfillment services.' },
    { name: 'Subscription Box Store Generator', desc: 'Recurring orders with plan management.' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', desc: 'One link for all your channels.' },
    { name: 'Free Link-in-Bio Page Builder', desc: 'No cost, unlimited links, your brand.' },
    { name: 'Creator Link Page Generator', desc: 'Social links, merch, and latest content.' },
    { name: 'Musician Link-in-Bio Builder', desc: 'Streaming, tour dates, and merch in one link.' },
    { name: 'Influencer Link Page Generator', desc: 'Sponsorships, collabs, and content links.' },
    { name: 'Artist Link-in-Bio Builder', desc: 'Gallery, shop, and commission info.' },
    { name: 'Podcast Link Page Generator', desc: 'Episodes, platforms, and guest info.' },
    { name: 'Business Link-in-Bio Builder', desc: 'Contact, services, and booking links.' },
    { name: 'Beautiful Link-in-Bio Generator', desc: 'Stunning designs that match your brand.' },
    { name: 'No-Code Link Page Builder', desc: 'Drag, drop, publish. No tech skills needed.' },
  ],
}

// Add slugs to all generators
export const featuredWithSlugs = featuredGenerators.map(g => ({
  ...g,
  slug: slug(g.name),
}))

export const allGeneratorsWithSlugs = Object.fromEntries(
  Object.entries(allGenerators).map(([catId, items]) => [
    catId,
    items.map(g => ({ ...g, slug: slug(g.name) })),
  ])
)
