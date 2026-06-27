export const categories = [
  {
    id: 'websites',
    name: 'Websites',
    slug: 'websites',
    description: 'AI-built business and personal sites for any goal.',
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    slug: 'landing-pages',
    description: 'Single-page sites built to convert visitors fast.',
  },
  {
    id: 'portfolios',
    name: 'Portfolios',
    slug: 'portfolios',
    description: 'Showcase your work with a clean, focused site.',
  },
  {
    id: 'blogs',
    name: 'Blogs',
    slug: 'blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
  },
  {
    id: 'stores',
    name: 'Online Stores',
    slug: 'stores',
    description: 'Sell products online with payments built in.',
  },
  {
    id: 'link-in-bio',
    name: 'Link-in-Bio',
    slug: 'link-in-bio',
    description: 'One link, all your places. Made for creators.',
  },
]

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export const generatorEntries = [
  // Websites
  {
    name: 'AI Website Generator',
    description: 'Describe your business, get a full site',
    categoryId: 'websites',
  },
  {
    name: 'Free Website Builder for Photographers',
    description: 'A visual portfolio plus booking-ready pages',
    categoryId: 'websites',
  },
  {
    name: 'One-Page Wedding Website Builder',
    description: 'Simple sites, single scroll',
    categoryId: 'websites',
  },
  {
    name: 'Restaurant Website Builder',
    description: 'Menu, hours, reservations, done',
    categoryId: 'websites',
  },
  {
    name: 'No-Code Website Builder for Yoga Instructors',
    description: 'Schedules, classes, and contact in one place',
    categoryId: 'websites',
  },
  {
    name: 'Beautiful Church Website Builder',
    description: 'Services, events, and donations made simple',
    categoryId: 'websites',
  },
  {
    name: 'AI Real Estate Website Generator',
    description: 'Listings, agent bios, and lead capture',
    categoryId: 'websites',
  },
  {
    name: 'Free Website Builder for Coaches',
    description: 'Programs, testimonials, and booking links',
    categoryId: 'websites',
  },
  {
    name: 'One-Page Musician Website Builder',
    description: 'Tracks, shows, and merch on one page',
    categoryId: 'websites',
  },
  {
    name: 'AI Law Firm Website Generator',
    description: 'Professional practice pages and intake forms',
    categoryId: 'websites',
  },

  // Landing Pages
  {
    name: 'AI Landing Page Maker',
    description: 'One-page sites built to convert',
    categoryId: 'landing-pages',
  },
  {
    name: 'Free Landing Page Generator for Apps',
    description: 'Download buttons, feature blocks, and social proof',
    categoryId: 'landing-pages',
  },
  {
    name: 'One-Page Sales Landing Page Builder',
    description: 'Headline, offer, and CTA in a single scroll',
    categoryId: 'landing-pages',
  },
  {
    name: 'AI Landing Page for Webinars',
    description: 'Registration, countdown, and replay sections',
    categoryId: 'landing-pages',
  },
  {
    name: 'No-Code Landing Page for Courses',
    description: 'Curriculum, instructor bio, and enroll button',
    categoryId: 'landing-pages',
  },
  {
    name: 'Beautiful SaaS Landing Page Generator',
    description: 'Features, pricing, and FAQ sections',
    categoryId: 'landing-pages',
  },
  {
    name: 'AI Landing Page for Events',
    description: 'Schedule, speakers, and RSVP form',
    categoryId: 'landing-pages',
  },
  {
    name: 'Free Product Launch Landing Page Builder',
    description: 'Waitlist, hero, and benefit blocks',
    categoryId: 'landing-pages',
  },

  // Portfolios
  {
    name: 'Free Portfolio Generator',
    description: 'For creatives, in minutes, no fee',
    categoryId: 'portfolios',
  },
  {
    name: 'Portfolio Generator for Designers',
    description: 'Project grids, case studies, and contact',
    categoryId: 'portfolios',
  },
  {
    name: 'AI Photographer Portfolio Builder',
    description: 'Galleries, about, and client proofing links',
    categoryId: 'portfolios',
  },
  {
    name: 'No-Code Portfolio for Illustrators',
    description: 'Full-bleed artwork and commission inquiries',
    categoryId: 'portfolios',
  },
  {
    name: 'Beautiful Architecture Portfolio Generator',
    description: 'Projects, drawings, and studio contact',
    categoryId: 'portfolios',
  },
  {
    name: 'AI UX Portfolio Maker',
    description: 'Process write-ups, screens, and resume links',
    categoryId: 'portfolios',
  },
  {
    name: 'Free Portfolio for Makeup Artists',
    description: 'Before-and-after galleries and booking',
    categoryId: 'portfolios',
  },
  {
    name: 'One-Page Portfolio Builder for Developers',
    description: 'Projects, skills, and GitHub links',
    categoryId: 'portfolios',
  },

  // Blogs
  {
    name: 'Blog Generator for Beginners',
    description: 'Publish-ready in minutes',
    categoryId: 'blogs',
  },
  {
    name: 'AI Food Blog Generator',
    description: 'Recipes, categories, and newsletter signup',
    categoryId: 'blogs',
  },
  {
    name: 'No-Code Travel Blog Builder',
    description: 'Stories, maps, and photo galleries',
    categoryId: 'blogs',
  },
  {
    name: 'Beautiful Fashion Blog Generator',
    description: 'Editorial layouts and social embeds',
    categoryId: 'blogs',
  },
  {
    name: 'AI Personal Blog Maker',
    description: 'Clean writing with built-in SEO basics',
    categoryId: 'blogs',
  },
  {
    name: 'Free Business Blog Builder',
    description: 'Thought leadership and lead capture',
    categoryId: 'blogs',
  },
  {
    name: 'One-Column Minimal Blog Generator',
    description: 'Typography-first reading experience',
    categoryId: 'blogs',
  },

  // Online Stores
  {
    name: 'Online Store Builder',
    description: 'Start selling without writing code',
    categoryId: 'stores',
  },
  {
    name: 'Online Store Builder for Restaurants',
    description: 'Menu items, ordering, and pickup flow',
    categoryId: 'stores',
  },
  {
    name: 'AI Boutique Store Generator',
    description: 'Collections, sizing, and checkout',
    categoryId: 'stores',
  },
  {
    name: 'No-Code Art Print Store Builder',
    description: 'Galleries, variants, and shipping rules',
    categoryId: 'stores',
  },
  {
    name: 'Beautiful Handmade Store Generator',
    description: 'Story-driven product pages and reviews',
    categoryId: 'stores',
  },
  {
    name: 'AI Digital Download Store Maker',
    description: 'PDFs, templates, and automated delivery',
    categoryId: 'stores',
  },
  {
    name: 'Free Jewelry Store Builder',
    description: 'Elegant galleries and secure checkout',
    categoryId: 'stores',
  },
  {
    name: 'One-Page Product Store Generator',
    description: 'A focused single-product sales page',
    categoryId: 'stores',
  },

  // Link-in-Bio
  {
    name: 'Link-in-Bio Generator',
    description: 'One link for all your channels',
    categoryId: 'link-in-bio',
  },
  {
    name: 'AI Creator Link-in-Bio Builder',
    description: 'TikTok, Instagram, and YouTube links',
    categoryId: 'link-in-bio',
  },
  {
    name: 'Free Musician Link-in-Bio Generator',
    description: 'Streaming links, tour dates, and merch',
    categoryId: 'link-in-bio',
  },
  {
    name: 'No-Code Podcast Link-in-Bio Maker',
    description: 'Latest episode, platforms, and subscribe',
    categoryId: 'link-in-bio',
  },
  {
    name: 'Beautiful Influencer Link-in-Bio Builder',
    description: 'Sponsored links and content highlights',
    categoryId: 'link-in-bio',
  },
  {
    name: 'AI Business Link-in-Bio Generator',
    description: 'Bookings, contact, and social proof',
    categoryId: 'link-in-bio',
  },
  {
    name: 'Free Nonprofit Link-in-Bio Maker',
    description: 'Donate, events, and volunteer links',
    categoryId: 'link-in-bio',
  },
]

export const generators = generatorEntries.map((entry, index) => {
  const category = categories.find((c) => c.id === entry.categoryId)
  return {
    id: `${entry.categoryId}-${index}`,
    slug: slugify(entry.name),
    categoryName: category?.name ?? '',
    ...entry,
  }
})

export const featuredGeneratorSlugs = [
  'ai-website-generator',
  'free-portfolio-generator',
  'ai-landing-page-maker',
  'online-store-builder',
  'link-in-bio-generator',
  'one-page-wedding-website-builder',
  'restaurant-website-builder',
  'blog-generator-for-beginners',
  'ai-photographer-portfolio-builder',
]

export function getFeaturedGenerators() {
  return featuredGeneratorSlugs
    .map((slug) => generators.find((g) => g.slug === slug))
    .filter(Boolean)
}

export function getGeneratorsByCategory(categoryId) {
  return generators.filter((g) => g.categoryId === categoryId)
}
