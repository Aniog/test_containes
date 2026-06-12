/** Converts a display name to a URL slug */
export const toSlug = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Featured generators — 9 tiles for Section 3 */
export const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site in seconds.', category: 'Website' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee.', category: 'Portfolio' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert visitors fast.', category: 'Landing Page' },
  { name: 'Online Store Builder', description: 'Start selling without writing a line of code.', category: 'Store' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels and content.', category: 'Link-in-Bio' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll, zero fuss.', category: 'Website' },
  { name: 'Wedding Website Generator', description: 'Share your day, RSVP, and registry in one place.', category: 'Website' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, and reservations — done.', category: 'Website' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes, no tech skills needed.', category: 'Blog' },
];

/** Browse-by-category cards — Section 4 */
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
];

/** All generators directory — Section 5 */
export const allGenerators = [
  {
    id: 'websites',
    heading: 'Websites',
    description: 'Business and personal sites for every industry and goal.',
    items: [
      { name: 'AI Website Generator', description: 'Describe your business, get a full site in seconds.' },
      { name: 'Free Website Builder for Photographers', description: 'Showcase your shots with a clean, fast site.' },
      { name: 'One-Page Wedding Website Builder', description: 'Share your story, RSVP, and registry in one place.' },
      { name: 'Small Business Website Generator', description: 'Professional site for your local or online business.' },
      { name: 'Personal Website Builder', description: 'Your name, your story, your corner of the web.' },
      { name: 'Nonprofit Website Generator', description: 'Tell your mission and collect donations online.' },
      { name: 'Yoga Instructor Website Builder', description: 'Class schedules, booking, and your teaching philosophy.' },
      { name: 'Real Estate Agent Website Generator', description: 'Listings, bio, and contact form in minutes.' },
      { name: 'Freelancer Website Builder', description: 'Win clients with a polished professional presence.' },
      { name: 'Event Website Generator', description: 'Promote your event and sell tickets online.' },
    ],
  },
  {
    id: 'landing-pages',
    heading: 'Landing Pages',
    description: 'Focused single-page sites built to drive one action.',
    items: [
      { name: 'AI Landing Page Maker', description: 'One-page sites built to convert visitors fast.' },
      { name: 'Product Launch Landing Page Generator', description: 'Build buzz and capture early sign-ups.' },
      { name: 'Lead Capture Page Builder', description: 'Grow your email list with a focused opt-in page.' },
      { name: 'Coming Soon Page Generator', description: 'Tease your launch and collect interest early.' },
      { name: 'Webinar Registration Page Builder', description: 'Fill your next online event with ease.' },
      { name: 'App Download Landing Page Generator', description: 'Drive installs with a clean app showcase page.' },
      { name: 'Free Landing Page Builder for Startups', description: 'Launch fast without a design budget.' },
      { name: 'Sales Page Generator', description: 'Long-form pages built to close the deal.' },
      { name: 'Squeeze Page Builder', description: 'Minimal pages focused on one single action.' },
    ],
  },
  {
    id: 'portfolios',
    heading: 'Portfolios',
    description: 'Clean, focused sites that let your work do the talking.',
    items: [
      { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee.' },
      { name: 'Portfolio Generator for Designers', description: 'Show your process and finished work beautifully.' },
      { name: 'Photography Portfolio Builder', description: 'Full-bleed galleries that let your images speak.' },
      { name: 'Creative Portfolio Generator', description: 'For artists, writers, and makers of all kinds.' },
      { name: 'UX Designer Portfolio Builder', description: 'Case studies and prototypes in a clean layout.' },
      { name: 'Illustrator Portfolio Generator', description: 'Grid-based showcase for your illustration work.' },
      { name: 'Architect Portfolio Builder', description: 'Project galleries with technical detail and context.' },
      { name: 'Video Portfolio Generator', description: 'Embed reels and project breakdowns in one place.' },
    ],
  },
  {
    id: 'blogs',
    heading: 'Blogs',
    description: 'Publish-ready blogs with structure, SEO, and style built in.',
    items: [
      { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes, no tech skills needed.' },
      { name: 'AI Blog Builder', description: 'Generate your first post and site structure together.' },
      { name: 'Personal Blog Generator', description: 'Share your thoughts with a clean, readable layout.' },
      { name: 'Travel Blog Builder', description: 'Document your journeys with maps, photos, and stories.' },
      { name: 'Food Blog Generator', description: 'Recipes, photos, and a newsletter sign-up built in.' },
      { name: 'Lifestyle Blog Builder', description: 'Cover fashion, wellness, and everyday inspiration.' },
      { name: 'Tech Blog Generator', description: 'Write about code, tools, and the industry you love.' },
      { name: 'Fashion Blog Builder', description: 'Editorial layouts for style, trends, and lookbooks.' },
      { name: 'Fitness Blog Generator', description: 'Workouts, nutrition tips, and coaching sign-ups.' },
    ],
  },
  {
    id: 'stores',
    heading: 'Online Stores',
    description: 'Sell products online with payments and inventory built in.',
    items: [
      { name: 'Online Store Builder', description: 'Start selling without writing a line of code.' },
      { name: 'Online Store Builder for Restaurants', description: 'Menu, ordering, and delivery in one place.' },
      { name: 'Handmade Goods Store Generator', description: 'Sell your crafts with a warm, personal storefront.' },
      { name: 'Digital Products Store Builder', description: 'Sell ebooks, presets, and downloads instantly.' },
      { name: 'Clothing Store Generator', description: 'Lookbooks, size guides, and checkout built in.' },
      { name: 'Jewelry Store Builder', description: 'Elegant product pages for your handcrafted pieces.' },
      { name: 'Art Print Store Generator', description: 'Sell limited editions and originals with ease.' },
      { name: 'Subscription Box Store Builder', description: 'Recurring billing and product curation made simple.' },
      { name: 'Local Business Online Store', description: 'Take your neighborhood shop to the web.' },
      { name: 'Dropshipping Store Generator', description: 'Launch a product store without holding inventory.' },
    ],
  },
  {
    id: 'link-in-bio',
    heading: 'Link-in-Bio',
    description: 'One link that holds everything — for creators and brands.',
    items: [
      { name: 'Link-in-Bio Generator', description: 'One link for all your channels and content.' },
      { name: 'Creator Link-in-Bio Builder', description: 'Centralize your content, merch, and social links.' },
      { name: 'Musician Link-in-Bio Generator', description: 'Music, tour dates, and merch in one tap.' },
      { name: 'Influencer Link Page Builder', description: 'Drive traffic from every platform to one place.' },
      { name: 'Artist Link-in-Bio Generator', description: 'Gallery, shop, and contact in a single link.' },
      { name: 'Podcast Link Page Builder', description: 'Episodes, subscribe links, and show notes together.' },
      { name: 'YouTube Creator Link-in-Bio', description: 'Channel, playlists, and brand deals in one page.' },
      { name: 'Fitness Coach Link Page Generator', description: 'Classes, programs, and social proof in one tap.' },
    ],
  },
];

/** Initial cards to show before "Show all" toggle (per subsection) */
export const INITIAL_VISIBLE = 6;
