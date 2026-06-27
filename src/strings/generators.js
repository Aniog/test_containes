/**
 * Generator data for the hub page.
 * All entries are statically defined so the directory is server-rendered in full.
 *
 * slug: used in /generators/{slug} links
 * category: one of the six category slugs
 * name: display name
 * description: one-line description
 * featured: true if it appears in the Featured Generators section (Section 3)
 */

export const categories = [
  {
    id: 'websites',
    name: 'WEBSITES',
    description: 'AI-built business and personal sites for any goal.',
    anchor: '#websites',
  },
  {
    id: 'landing-pages',
    name: 'LANDING PAGES',
    description: 'Single-page sites built to convert visitors fast.',
    anchor: '#landing-pages',
  },
  {
    id: 'portfolios',
    name: 'PORTFOLIOS',
    description: 'Showcase your work with a clean, focused site.',
    anchor: '#portfolios',
  },
  {
    id: 'blogs',
    name: 'BLOGS',
    description: 'Publish-ready blogs with built-in SEO basics.',
    anchor: '#blogs',
  },
  {
    id: 'stores',
    name: 'ONLINE STORES',
    description: 'Sell products online with payments built in.',
    anchor: '#stores',
  },
  {
    id: 'link-in-bio',
    name: 'LINK-IN-BIO',
    description: 'One link, all your places. Made for creators.',
    anchor: '#link-in-bio',
  },
]

export const generators = [
  // ---- Websites ----
  {
    slug: 'ai-website-generator',
    name: 'AI Website Generator',
    description: 'Describe your business, get a full site.',
    category: 'websites',
    featured: true,
  },
  {
    slug: 'one-page-website-builder',
    name: 'One-Page Website Builder',
    description: 'Simple sites, single scroll.',
    category: 'websites',
    featured: true,
  },
  {
    slug: 'wedding-website-generator',
    name: 'Wedding Website Generator',
    description: 'Share your day with guests.',
    category: 'websites',
    featured: true,
  },
  {
    slug: 'restaurant-website-builder',
    name: 'Restaurant Website Builder',
    description: 'Menu, hours, reservations, done.',
    category: 'websites',
    featured: true,
  },
  {
    slug: 'free-website-builder',
    name: 'Free Website Builder',
    description: 'Build and publish a site at zero cost.',
    category: 'websites',
    featured: false,
  },
  {
    slug: 'ai-website-builder-for-small-business',
    name: 'AI Website Builder for Small Business',
    description: 'Professional sites for local shops and services.',
    category: 'websites',
    featured: false,
  },
  {
    slug: 'no-code-website-generator',
    name: 'No-Code Website Generator',
    description: 'Drag, drop, done\u2014no coding required.',
    category: 'websites',
    featured: false,
  },
  {
    slug: 'website-generator-for-photographers',
    name: 'Website Generator for Photographers',
    description: 'Galleries and booking pages built to showcase your work.',
    category: 'websites',
    featured: false,
  },
  {
    slug: 'website-builder-for-yoga-instructors',
    name: 'Website Builder for Yoga Instructors',
    description: 'Class schedules, booking, and brand pages.',
    category: 'websites',
    featured: false,
  },
  {
    slug: 'website-builder-for-restaurants',
    name: 'Website Builder for Restaurants',
    description: 'Online menus with reservations built in.',
    category: 'websites',
    featured: false,
  },
  {
    slug: 'beautiful-website-generator',
    name: 'Beautiful Website Generator',
    description: 'Design-forward layouts that look custom.',
    category: 'websites',
    featured: false,
  },
  {
    slug: 'personal-website-generator',
    name: 'Personal Website Generator',
    description: 'A simple site for your personal brand.',
    category: 'websites',
    featured: false,
  },

  // ---- Landing Pages ----
  {
    slug: 'ai-landing-page-maker',
    name: 'AI Landing Page Maker',
    description: 'One-page sites built to convert.',
    category: 'landing-pages',
    featured: true,
  },
  {
    slug: 'free-landing-page-generator',
    name: 'Free Landing Page Generator',
    description: 'High-converting pages at no cost.',
    category: 'landing-pages',
    featured: false,
  },
  {
    slug: 'no-code-landing-page-builder',
    name: 'No-Code Landing Page Builder',
    description: 'Launch pages without touching code.',
    category: 'landing-pages',
    featured: false,
  },
  {
    slug: 'landing-page-builder-for-startups',
    name: 'Landing Page Builder for Startups',
    description: 'Validate ideas fast with a focused page.',
    category: 'landing-pages',
    featured: false,
  },
  {
    slug: 'ai-landing-page-generator',
    name: 'AI Landing Page Generator',
    description: 'AI writes the copy and builds the layout.',
    category: 'landing-pages',
    featured: false,
  },
  {
    slug: 'product-launch-landing-page',
    name: 'Product Launch Landing Page',
    description: 'Announce new products with a polished page.',
    category: 'landing-pages',
    featured: false,
  },
  {
    slug: 'lead-generation-landing-page',
    name: 'Lead Generation Landing Page',
    description: 'Capture emails and sign-ups with forms.',
    category: 'landing-pages',
    featured: false,
  },
  {
    slug: 'event-landing-page-builder',
    name: 'Event Landing Page Builder',
    description: 'Promote events and collect RSVPs.',
    category: 'landing-pages',
    featured: false,
  },
  {
    slug: 'saas-landing-page-generator',
    name: 'SaaS Landing Page Generator',
    description: 'Feature sections, pricing, and CTAs for software products.',
    category: 'landing-pages',
    featured: false,
  },
  {
    slug: 'webinar-landing-page-builder',
    name: 'Webinar Landing Page Builder',
    description: 'Drive sign-ups for your next online event.',
    category: 'landing-pages',
    featured: false,
  },

  // ---- Portfolios ----
  {
    slug: 'free-portfolio-generator',
    name: 'Free Portfolio Generator',
    description: 'For creatives, in minutes, no fee.',
    category: 'portfolios',
    featured: true,
  },
  {
    slug: 'portfolio-generator-for-designers',
    name: 'Portfolio Generator for Designers',
    description: 'Showcase design work in a polished grid.',
    category: 'portfolios',
    featured: false,
  },
  {
    slug: 'portfolio-builder-for-developers',
    name: 'Portfolio Builder for Developers',
    description: 'Highlight projects and technical skills.',
    category: 'portfolios',
    featured: false,
  },
  {
    slug: 'photography-portfolio-generator',
    name: 'Photography Portfolio Generator',
    description: 'Full-bleed image galleries that load fast.',
    category: 'portfolios',
    featured: false,
  },
  {
    slug: 'ai-portfolio-generator',
    name: 'AI Portfolio Generator',
    description: 'Describe your work and let AI build your site.',
    category: 'portfolios',
    featured: false,
  },
  {
    slug: 'portfolio-generator-for-illustrators',
    name: 'Portfolio Generator for Illustrators',
    description: 'Showcase artwork with full-screen previews.',
    category: 'portfolios',
    featured: false,
  },
  {
    slug: 'freelancer-portfolio-builder',
    name: 'Freelancer Portfolio Builder',
    description: 'A site that wins clients, built in minutes.',
    category: 'portfolios',
    featured: false,
  },
  {
    slug: 'no-code-portfolio-generator',
    name: 'No-Code Portfolio Generator',
    description: 'Build a portfolio without writing a single line.',
    category: 'portfolios',
    featured: false,
  },
  {
    slug: 'resume-portfolio-website-builder',
    name: 'Resume Portfolio Website Builder',
    description: 'Combine your CV and portfolio in one site.',
    category: 'portfolios',
    featured: false,
  },
  {
    slug: 'portfolio-generator-for-architects',
    name: 'Portfolio Generator for Architects',
    description: 'Present projects with immersive layouts.',
    category: 'portfolios',
    featured: false,
  },

  // ---- Blogs ----
  {
    slug: 'blog-generator-for-beginners',
    name: 'Blog Generator for Beginners',
    description: 'Publish-ready in minutes.',
    category: 'blogs',
    featured: true,
  },
  {
    slug: 'ai-blog-generator',
    name: 'AI Blog Generator',
    description: 'AI sets up the site so you just write.',
    category: 'blogs',
    featured: false,
  },
  {
    slug: 'free-blog-generator',
    name: 'Free Blog Generator',
    description: 'Start blogging at zero cost.',
    category: 'blogs',
    featured: false,
  },
  {
    slug: 'blog-generator-for-marketers',
    name: 'Blog Generator for Marketers',
    description: 'SEO-friendly blogs that drive organic traffic.',
    category: 'blogs',
    featured: false,
  },
  {
    slug: 'no-code-blog-builder',
    name: 'No-Code Blog Builder',
    description: 'Publish articles without technical setup.',
    category: 'blogs',
    featured: false,
  },
  {
    slug: 'blog-generator-for-travelers',
    name: 'Blog Generator for Travelers',
    description: 'Share your adventures with a beautiful layout.',
    category: 'blogs',
    featured: false,
  },
  {
    slug: 'food-blog-generator',
    name: 'Food Blog Generator',
    description: 'Recipe cards, photo galleries, and built-in SEO.',
    category: 'blogs',
    featured: false,
  },
  {
    slug: 'blog-generator-for-writers',
    name: 'Blog Generator for Writers',
    description: 'Clean, distraction-free reading experience.',
    category: 'blogs',
    featured: false,
  },
  {
    slug: 'niche-blog-generator',
    name: 'Niche Blog Generator',
    description: 'Pick a topic, get a purpose-built blog.',
    category: 'blogs',
    featured: false,
  },
  {
    slug: 'ai-seo-blog-generator',
    name: 'AI SEO Blog Generator',
    description: 'AI-optimized structure for search engines.',
    category: 'blogs',
    featured: false,
  },

  // ---- Online Stores ----
  {
    slug: 'online-store-builder',
    name: 'Online Store Builder',
    description: 'Start selling without writing code.',
    category: 'stores',
    featured: true,
  },
  {
    slug: 'online-store-builder-for-restaurants',
    name: 'Online Store Builder for Restaurants',
    description: 'Take orders and manage menus online.',
    category: 'stores',
    featured: false,
  },
  {
    slug: 'free-ecommerce-website-generator',
    name: 'Free Ecommerce Website Generator',
    description: 'Launch a store with no upfront cost.',
    category: 'stores',
    featured: false,
  },
  {
    slug: 'ai-store-generator',
    name: 'AI Store Generator',
    description: 'AI builds your storefront from a product description.',
    category: 'stores',
    featured: false,
  },
  {
    slug: 'digital-product-store-builder',
    name: 'Digital Product Store Builder',
    description: 'Sell downloads, courses, and subscriptions.',
    category: 'stores',
    featured: false,
  },
  {
    slug: 'no-code-store-builder',
    name: 'No-Code Store Builder',
    description: 'Build a store without touching code or plugins.',
    category: 'stores',
    featured: false,
  },
  {
    slug: 'boutique-online-store-generator',
    name: 'Boutique Online Store Generator',
    description: 'Elegant layouts for fashion and lifestyle brands.',
    category: 'stores',
    featured: false,
  },
  {
    slug: 'online-store-builder-for-artists',
    name: 'Online Store Builder for Artists',
    description: 'Sell prints, originals, and commissions online.',
    category: 'stores',
    featured: false,
  },
  {
    slug: 'subscription-store-generator',
    name: 'Subscription Store Generator',
    description: 'Recurring revenue built into your storefront.',
    category: 'stores',
    featured: false,
  },
  {
    slug: 'online-store-for-freelancers',
    name: 'Online Store for Freelancers',
    description: 'Sell services and packages with built-in checkout.',
    category: 'stores',
    featured: false,
  },

  // ---- Link-in-Bio ----
  {
    slug: 'link-in-bio-generator',
    name: 'Link-in-Bio Generator',
    description: 'One link for all your channels.',
    category: 'link-in-bio',
    featured: true,
  },
  {
    slug: 'free-link-in-bio-page-builder',
    name: 'Free Link-in-Bio Page Builder',
    description: 'A branded link page at zero cost.',
    category: 'link-in-bio',
    featured: false,
  },
  {
    slug: 'link-in-bio-builder-for-creators',
    name: 'Link-in-Bio Builder for Creators',
    description: 'Customize your link page to match your brand.',
    category: 'link-in-bio',
    featured: false,
  },
  {
    slug: 'ai-link-in-bio-generator',
    name: 'AI Link-in-Bio Generator',
    description: 'AI creates a styled page from your social profile.',
    category: 'link-in-bio',
    featured: false,
  },
  {
    slug: 'link-in-bio-builder-for-influencers',
    name: 'Link-in-Bio Builder for Influencers',
    description: 'Monetize your audience with a branded link page.',
    category: 'link-in-bio',
    featured: false,
  },
  {
    slug: 'no-code-link-in-bio-builder',
    name: 'No-Code Link-in-Bio Builder',
    description: 'Build a link page in minutes, no coding needed.',
    category: 'link-in-bio',
    featured: false,
  },
  {
    slug: 'link-in-bio-builder-for-musicians',
    name: 'Link-in-Bio Builder for Musicians',
    description: 'Link to streaming, merch, and tour dates in one place.',
    category: 'link-in-bio',
    featured: false,
  },
  {
    slug: 'link-in-bio-page-for-podcasters',
    name: 'Link-in-Bio Page for Podcasters',
    description: 'Link to every episode, platform, and sponsor.',
    category: 'link-in-bio',
    featured: false,
  },
  {
    slug: 'personal-link-page-generator',
    name: 'Personal Link Page Generator',
    description: 'A simple page for all your important links.',
    category: 'link-in-bio',
    featured: false,
  },
  {
    slug: 'link-in-bio-for-small-businesses',
    name: 'Link-in-Bio for Small Businesses',
    description: 'Drive customers to your store, menu, or booking page.',
    category: 'link-in-bio',
    featured: false,
  },
]

export const featuredGenerators = generators.filter((g) => g.featured)

export const generatorsByCategory = categories.reduce((acc, cat) => {
  acc[cat.id] = generators.filter((g) => g.category === cat.id)
  return acc
}, {})
