// All generator data — inline, no API dependency

function slug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// Featured generators (Section 3) — mixed categories, so category tag is shown
export const featuredGenerators = [
  {
    name: 'AI Website Generator',
    description: 'Describe your business, get a full site.',
    category: 'Website',
  },
  {
    name: 'Free Portfolio Generator',
    description: 'For creatives, in minutes, no fee.',
    category: 'Portfolio',
  },
  {
    name: 'AI Landing Page Maker',
    description: 'One-page sites built to convert.',
    category: 'Landing Page',
  },
  {
    name: 'Online Store Builder',
    description: 'Start selling without writing code.',
    category: 'Store',
  },
  {
    name: 'Link-in-Bio Generator',
    description: 'One link for all your channels.',
    category: 'Link-in-Bio',
  },
  {
    name: 'One-Page Website Builder',
    description: 'Simple sites, single scroll.',
    category: 'Website',
  },
  {
    name: 'Wedding Website Generator',
    description: 'Share your day with guests.',
    category: 'Website',
  },
  {
    name: 'Restaurant Website Builder',
    description: 'Menu, hours, reservations, done.',
    category: 'Website',
  },
  {
    name: 'Blog Generator for Beginners',
    description: 'Publish-ready in minutes.',
    category: 'Blog',
  },
].map((g) => ({ ...g, slug: slug(g.name), href: `/generators/${slug(g.name)}` }))

// Browse-by-category cards (Section 4)
export const categories = [
  {
    id: 'websites',
    name: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
    anchor: '#websites',
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    anchor: '#landing-pages',
  },
  {
    id: 'portfolios',
    name: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    anchor: '#portfolios',
  },
  {
    id: 'blogs',
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    anchor: '#blogs',
  },
  {
    id: 'stores',
    name: 'Online Stores',
    description: 'Sell products online with payments built in.',
    anchor: '#stores',
  },
  {
    id: 'link-in-bio',
    name: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    anchor: '#link-in-bio',
  },
]

// All generators directory (Section 5) — 8–12 per category
export const allGenerators = [
  {
    categoryId: 'websites',
    categoryLabel: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
    items: [
      { name: 'AI Website Generator', description: 'Describe your business, get a full site in seconds.' },
      { name: 'Free Website Builder', description: 'Launch a professional site at no cost.' },
      { name: 'One-Page Website Builder', description: 'Simple sites, single scroll, zero clutter.' },
      { name: 'Business Website Generator', description: 'Credibility-first sites for small businesses.' },
      { name: 'Personal Website Builder', description: 'Your name, your story, your corner of the web.' },
      { name: 'Wedding Website Generator', description: 'Share your day, RSVP, and event details with guests.' },
      { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations — all in one place.' },
      { name: 'Yoga Instructor Website Builder', description: 'Class schedules, booking, and your teaching philosophy.' },
      { name: 'Photographer Website Generator', description: 'Gallery-first sites built for visual storytelling.' },
      { name: 'Nonprofit Website Builder', description: 'Mission-driven sites that inspire action and donations.' },
      { name: 'Event Website Generator', description: 'Promote any event with a focused, shareable page.' },
      { name: 'No-Code Website Builder', description: 'Build a real site without touching a line of code.' },
    ],
  },
  {
    categoryId: 'landing-pages',
    categoryLabel: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    items: [
      { name: 'AI Landing Page Maker', description: 'One-page sites built to convert from the first visit.' },
      { name: 'Free Landing Page Generator', description: 'High-converting pages without a monthly fee.' },
      { name: 'Product Launch Landing Page', description: 'Build buzz and capture leads before you ship.' },
      { name: 'Lead Generation Landing Page', description: 'Collect emails and contacts with a focused page.' },
      { name: 'App Download Landing Page', description: 'Drive installs with a clean, persuasive page.' },
      { name: 'Webinar Registration Page Builder', description: 'Fill your next webinar with a dedicated sign-up page.' },
      { name: 'Coming Soon Page Generator', description: 'Tease your launch and collect early interest.' },
      { name: 'Sales Page Builder', description: 'Long-form pages designed to close the deal.' },
      { name: 'Waitlist Landing Page', description: 'Build anticipation and grow your list before launch.' },
      { name: 'Consulting Landing Page Generator', description: 'Showcase your expertise and book discovery calls.' },
    ],
  },
  {
    categoryId: 'portfolios',
    categoryLabel: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    items: [
      { name: 'Free Portfolio Generator', description: 'Showcase your work in minutes, no fee required.' },
      { name: 'Portfolio Generator for Designers', description: 'Visual-first layouts built for creative professionals.' },
      { name: 'Portfolio Generator for Photographers', description: 'Full-bleed galleries that let your images lead.' },
      { name: 'Portfolio Generator for Writers', description: 'Clean reading layouts for articles, essays, and clips.' },
      { name: 'Portfolio Generator for Developers', description: 'Projects, skills, and GitHub links in one place.' },
      { name: 'Portfolio Generator for Artists', description: 'Gallery-style sites for painters, illustrators, and makers.' },
      { name: 'Portfolio Generator for Architects', description: 'Project showcases with large imagery and case studies.' },
      { name: 'Portfolio Generator for Videographers', description: 'Embed reels and project work in a polished layout.' },
      { name: 'Student Portfolio Generator', description: 'Stand out in applications with a professional online presence.' },
      { name: 'Freelancer Portfolio Builder', description: 'Win more clients with a site that shows your best work.' },
    ],
  },
  {
    categoryId: 'blogs',
    categoryLabel: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    items: [
      { name: 'Blog Generator for Beginners', description: 'Publish your first post in minutes, no experience needed.' },
      { name: 'AI Blog Generator', description: 'AI-assisted structure so you can focus on writing.' },
      { name: 'Personal Blog Builder', description: 'A clean, readable home for your thoughts and stories.' },
      { name: 'Travel Blog Generator', description: 'Share destinations, itineraries, and travel tips.' },
      { name: 'Food Blog Generator', description: 'Recipes, reviews, and food photography in one place.' },
      { name: 'Business Blog Generator', description: 'Thought leadership content that builds brand authority.' },
      { name: 'Lifestyle Blog Builder', description: 'Flexible layouts for fashion, wellness, and everyday life.' },
      { name: 'Tech Blog Generator', description: 'Tutorials, opinions, and deep dives for tech audiences.' },
      { name: 'Parenting Blog Builder', description: 'Share your family journey with a warm, welcoming design.' },
      { name: 'Fitness Blog Generator', description: 'Workouts, nutrition tips, and progress stories.' },
    ],
  },
  {
    categoryId: 'stores',
    categoryLabel: 'Online Stores',
    description: 'Sell products online with payments built in.',
    items: [
      { name: 'Online Store Builder', description: 'Start selling products online without writing code.' },
      { name: 'Online Store Builder for Restaurants', description: 'Take orders and sell meal kits directly from your site.' },
      { name: 'Online Store Builder for Artists', description: 'Sell prints, originals, and digital downloads.' },
      { name: 'Online Store Builder for Photographers', description: 'Sell prints and licenses straight from your portfolio.' },
      { name: 'Digital Products Store Builder', description: 'Sell ebooks, templates, and downloads with instant delivery.' },
      { name: 'Handmade Goods Store Builder', description: 'A boutique storefront for craft sellers and makers.' },
      { name: 'Clothing Store Website Generator', description: 'Fashion-forward layouts with product galleries and sizing.' },
      { name: 'Subscription Box Store Builder', description: 'Recurring billing and product showcase in one site.' },
      { name: 'Local Business Online Store', description: 'Bring your brick-and-mortar shop online fast.' },
      { name: 'Free Online Store Builder', description: 'Launch your first store without upfront costs.' },
    ],
  },
  {
    categoryId: 'link-in-bio',
    categoryLabel: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    items: [
      { name: 'Link-in-Bio Generator', description: 'One link that connects all your channels and content.' },
      { name: 'Link-in-Bio for Instagram', description: 'Turn your Instagram bio link into a full content hub.' },
      { name: 'Link-in-Bio for TikTok Creators', description: 'Drive followers from TikTok to everything you make.' },
      { name: 'Link-in-Bio for Musicians', description: 'Stream links, tour dates, and merch in one place.' },
      { name: 'Link-in-Bio for Podcasters', description: 'All your episodes, platforms, and show notes in one link.' },
      { name: 'Link-in-Bio for Coaches', description: 'Booking, resources, and social proof on a single page.' },
      { name: 'Link-in-Bio for YouTubers', description: 'Latest videos, channel links, and sponsor deals together.' },
      { name: 'Link-in-Bio for Influencers', description: 'Brand deals, affiliate links, and content in one hub.' },
      { name: 'Link-in-Bio for Small Businesses', description: 'Menu, hours, booking, and social — all from one link.' },
      { name: 'Beautiful Link-in-Bio Builder', description: 'Polished, on-brand pages that make a great first impression.' },
    ],
  },
].map((cat) => ({
  ...cat,
  items: cat.items.map((item) => ({
    ...item,
    slug: slug(item.name),
    href: `/generators/${slug(item.name)}`,
  })),
}))
