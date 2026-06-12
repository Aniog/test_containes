export const toSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

export const featuredGenerators = [
  {
    name: 'AI Website Generator',
    description: 'Describe your business, get a full site.',
    category: 'Website',
    slug: 'ai-website-generator',
  },
  {
    name: 'Free Portfolio Generator',
    description: 'For creatives, in minutes, no fee.',
    category: 'Portfolio',
    slug: 'free-portfolio-generator',
  },
  {
    name: 'AI Landing Page Maker',
    description: 'One-page sites built to convert.',
    category: 'Landing Page',
    slug: 'ai-landing-page-maker',
  },
  {
    name: 'Online Store Builder',
    description: 'Start selling without writing code.',
    category: 'Store',
    slug: 'online-store-builder',
  },
  {
    name: 'Link-in-Bio Generator',
    description: 'One link for all your channels.',
    category: 'Link-in-Bio',
    slug: 'link-in-bio-generator',
  },
  {
    name: 'One-Page Website Builder',
    description: 'Simple sites, single scroll.',
    category: 'Website',
    slug: 'one-page-website-builder',
  },
  {
    name: 'Wedding Website Generator',
    description: 'Share your day with guests.',
    category: 'Website',
    slug: 'wedding-website-generator',
  },
  {
    name: 'Restaurant Website Builder',
    description: 'Menu, hours, reservations, done.',
    category: 'Website',
    slug: 'restaurant-website-builder',
  },
  {
    name: 'Blog Generator for Beginners',
    description: 'Publish-ready in minutes.',
    category: 'Blog',
    slug: 'blog-generator-for-beginners',
  },
];

export const browseCategories = [
  {
    id: 'websites',
    name: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
    href: '/generators#websites',
  },
  {
    id: 'landing-pages',
    name: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
    href: '/generators#landing-pages',
  },
  {
    id: 'portfolios',
    name: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
    href: '/generators#portfolios',
  },
  {
    id: 'blogs',
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
    href: '/generators#blogs',
  },
  {
    id: 'stores',
    name: 'Online Stores',
    description: 'Sell products online with payments built in.',
    href: '/generators#stores',
  },
  {
    id: 'link-in-bio',
    name: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
    href: '/generators#link-in-bio',
  },
];

export const allGeneratorSections = [
  {
    id: 'websites',
    heading: 'Websites',
    description: 'Business and personal sites for every industry and goal.',
    generators: [
      { name: 'AI Website Generator', description: 'Describe your business, get a full site.', slug: 'ai-website-generator' },
      { name: 'Free Website Builder for Photographers', description: 'Showcase your portfolio for free.', slug: 'free-website-builder-for-photographers' },
      { name: 'One-Page Wedding Website Builder', description: 'Simple, elegant, and shareable.', slug: 'one-page-wedding-website-builder' },
      { name: 'Small Business Website Generator', description: 'Professional sites for local businesses.', slug: 'small-business-website-generator' },
      { name: 'No-Code Website Builder', description: 'Build without touching a line of code.', slug: 'no-code-website-builder' },
      { name: 'Beautiful Website Generator', description: 'Stunning designs, zero effort required.', slug: 'beautiful-website-generator' },
      { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done.', slug: 'restaurant-website-builder' },
      { name: 'Yoga Instructor Website Generator', description: 'Book classes and grow your practice online.', slug: 'yoga-instructor-website-generator' },
      { name: 'Freelancer Website Builder', description: 'Win clients with a professional online presence.', slug: 'freelancer-website-builder' },
      { name: 'Real Estate Agent Website Generator', description: 'Listings, bio, and contact in one place.', slug: 'real-estate-agent-website-generator' },
      { name: 'Nonprofit Website Generator', description: 'Tell your story and drive donations.', slug: 'nonprofit-website-generator' },
      { name: 'Event Website Builder', description: 'Promote any event with a dedicated site.', slug: 'event-website-builder' },
    ],
  },
  {
    id: 'landing-pages',
    heading: 'Landing Pages',
    description: 'Focused single-page sites designed to convert visitors into customers.',
    generators: [
      { name: 'AI Landing Page Maker', description: 'One-page sites built to convert.', slug: 'ai-landing-page-maker' },
      { name: 'Product Launch Landing Page Generator', description: 'Announce your launch with impact.', slug: 'product-launch-landing-page-generator' },
      { name: 'Event Landing Page Builder', description: 'Drive registrations for any event.', slug: 'event-landing-page-builder' },
      { name: 'Lead Generation Landing Page Maker', description: 'Capture emails and grow your list.', slug: 'lead-generation-landing-page-maker' },
      { name: 'App Download Landing Page Generator', description: 'Get more installs with a focused page.', slug: 'app-download-landing-page-generator' },
      { name: 'Webinar Registration Page Builder', description: 'Fill your next online event fast.', slug: 'webinar-registration-page-builder' },
      { name: 'Coming Soon Page Generator', description: 'Build anticipation before you launch.', slug: 'coming-soon-page-generator' },
      { name: 'Free Landing Page Builder', description: 'No-cost pages that convert visitors.', slug: 'free-landing-page-builder' },
      { name: 'SaaS Trial Landing Page Generator', description: 'Convert visitors into free trial users.', slug: 'saas-trial-landing-page-generator' },
      { name: 'Consulting Services Landing Page', description: 'Showcase your expertise and book calls.', slug: 'consulting-services-landing-page' },
    ],
  },
  {
    id: 'portfolios',
    heading: 'Portfolios',
    description: 'Clean, focused sites that let your work speak for itself.',
    generators: [
      { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee.', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', description: 'Show your work, win clients.', slug: 'portfolio-generator-for-designers' },
      { name: 'Photography Portfolio Builder', description: 'Beautiful galleries for photographers.', slug: 'photography-portfolio-builder' },
      { name: 'Artist Portfolio Website Generator', description: 'Showcase your art to the world.', slug: 'artist-portfolio-website-generator' },
      { name: 'UX Designer Portfolio Maker', description: 'Case studies and process, beautifully laid out.', slug: 'ux-designer-portfolio-maker' },
      { name: 'Illustrator Portfolio Generator', description: 'Display your illustrations professionally.', slug: 'illustrator-portfolio-generator' },
      { name: 'Architect Portfolio Builder', description: 'Projects and plans in a clean layout.', slug: 'architect-portfolio-builder' },
      { name: 'Videographer Portfolio Website', description: 'Embed reels and showcase your work.', slug: 'videographer-portfolio-website' },
      { name: 'Model Portfolio Generator', description: 'Clean, striking pages for talent.', slug: 'model-portfolio-generator' },
      { name: 'Writer Portfolio Generator', description: 'Clips, bio, and contact for writers.', slug: 'writer-portfolio-generator' },
    ],
  },
  {
    id: 'blogs',
    heading: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics and clean layouts.',
    generators: [
      { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes.', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Website Builder', description: 'Let AI draft your first posts too.', slug: 'ai-blog-website-builder' },
      { name: 'Travel Blog Generator', description: 'Share your adventures with the world.', slug: 'travel-blog-generator' },
      { name: 'Food Blog Website Builder', description: 'Recipes, photos, and stories in one place.', slug: 'food-blog-website-builder' },
      { name: 'Personal Blog Generator', description: 'Your voice, your space, online.', slug: 'personal-blog-generator' },
      { name: 'Business Blog Builder', description: 'Thought leadership for your brand.', slug: 'business-blog-builder' },
      { name: 'Lifestyle Blog Generator', description: 'Fashion, wellness, and everything in between.', slug: 'lifestyle-blog-generator' },
      { name: 'Niche Blog Website Maker', description: 'Build authority in any topic fast.', slug: 'niche-blog-website-maker' },
      { name: 'Tech Blog Generator', description: 'Share tutorials and insights with developers.', slug: 'tech-blog-generator' },
      { name: 'Parenting Blog Website Builder', description: 'Connect with other parents online.', slug: 'parenting-blog-website-builder' },
    ],
  },
  {
    id: 'stores',
    heading: 'Online Stores',
    description: 'Sell products online with payments built in — no code required.',
    generators: [
      { name: 'Online Store Builder', description: 'Start selling without writing code.', slug: 'online-store-builder' },
      { name: 'Online Store Builder for Restaurants', description: 'Sell meals and gift cards online.', slug: 'online-store-builder-for-restaurants' },
      { name: 'Handmade Goods Store Generator', description: 'Sell your crafts with a beautiful shop.', slug: 'handmade-goods-store-generator' },
      { name: 'Digital Products Store Builder', description: 'Sell ebooks, courses, and downloads.', slug: 'digital-products-store-builder' },
      { name: 'Clothing Store Website Generator', description: 'Fashion-forward online boutique.', slug: 'clothing-store-website-generator' },
      { name: 'Photography Store Builder', description: 'Sell prints and digital downloads.', slug: 'photography-store-builder' },
      { name: 'Subscription Box Store Generator', description: 'Launch your subscription business.', slug: 'subscription-box-store-generator' },
      { name: 'Local Business Online Store', description: 'Take your brick-and-mortar store online.', slug: 'local-business-online-store' },
      { name: 'Artist Shop Generator', description: 'Sell original art and prints.', slug: 'artist-shop-generator' },
      { name: 'Dropshipping Store Builder', description: 'Launch a store without holding inventory.', slug: 'dropshipping-store-builder' },
    ],
  },
  {
    id: 'link-in-bio',
    heading: 'Link-in-Bio',
    description: 'One link that holds everything — built for creators and social-first brands.',
    generators: [
      { name: 'Link-in-Bio Generator', description: 'One link for all your channels.', slug: 'link-in-bio-generator' },
      { name: 'Instagram Link-in-Bio Builder', description: 'Turn your bio link into a hub.', slug: 'instagram-link-in-bio-builder' },
      { name: 'Creator Link Page Generator', description: 'All your content, one clean page.', slug: 'creator-link-page-generator' },
      { name: 'Musician Link-in-Bio Maker', description: 'Music, merch, and tour dates in one link.', slug: 'musician-link-in-bio-maker' },
      { name: 'Influencer Bio Link Builder', description: 'Grow your audience across every platform.', slug: 'influencer-bio-link-builder' },
      { name: 'Podcast Link Page Generator', description: 'Episodes, subscribe links, and more.', slug: 'podcast-link-page-generator' },
      { name: 'Artist Link-in-Bio Builder', description: 'Gallery, shop, and social in one place.', slug: 'artist-link-in-bio-builder' },
      { name: 'Coach Link Page Maker', description: 'Book sessions and share resources in one link.', slug: 'coach-link-page-maker' },
      { name: 'Fitness Trainer Link Page Generator', description: 'Workouts, booking, and social in one link.', slug: 'fitness-trainer-link-page-generator' },
      { name: 'Author Link-in-Bio Builder', description: 'Books, events, and newsletter in one place.', slug: 'author-link-in-bio-builder' },
    ],
  },
];
