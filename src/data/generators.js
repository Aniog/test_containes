// Sample data for the /generators hub. In production this would be wired
// up to a CMS or database; for the design deliverable we ship it inline
// so the static HTML carries every entry by default.

export const categorySlugs = {
  websites: 'websites',
  'landing-pages': 'landing-pages',
  portfolios: 'portfolios',
  blogs: 'blogs',
  stores: 'stores',
  'link-in-bio': 'link-in-bio',
};

export const categoryLabels = {
  websites: 'Websites',
  'landing-pages': 'Landing Pages',
  portfolios: 'Portfolios',
  blogs: 'Blogs',
  stores: 'Online Stores',
  'link-in-bio': 'Link-in-Bio',
};

export const categoryShortDescriptions = {
  websites: 'AI-built business and personal sites for any goal.',
  'landing-pages': 'Single-page sites built to convert visitors fast.',
  portfolios: 'Showcase your work with a clean, focused site.',
  blogs: 'Publish-ready blogs with built-in SEO basics.',
  stores: 'Sell products online with payments built in.',
  'link-in-bio': 'One link, all your places. Made for creators.',
};

export const generators = [
  // ===== Websites =====
  {
    name: 'AI Website Generator',
    slug: 'ai-website-generator',
    description: 'Describe your business, get a full site.',
    category: 'websites',
    featured: true,
  },
  {
    name: 'One-Page Website Builder',
    slug: 'one-page-website-builder',
    description: 'Simple sites, single scroll.',
    category: 'websites',
    featured: true,
  },
  {
    name: 'Wedding Website Generator',
    slug: 'wedding-website-generator',
    description: 'Share your day with guests.',
    category: 'websites',
    featured: true,
  },
  {
    name: 'Restaurant Website Builder',
    slug: 'restaurant-website-builder',
    description: 'Menu, hours, reservations, done.',
    category: 'websites',
    featured: true,
  },
  {
    name: 'Free Website Builder for Photographers',
    slug: 'free-website-builder-for-photographers',
    description: 'A portfolio-ready home for your work.',
    category: 'websites',
  },
  {
    name: 'AI Website Builder for Small Business',
    slug: 'ai-website-builder-for-small-business',
    description: 'Get online today, no developer needed.',
    category: 'websites',
  },
  {
    name: 'Beautiful Website Builder for Coaches',
    slug: 'beautiful-website-builder-for-coaches',
    description: 'Win clients with a site that books calls.',
    category: 'websites',
  },
  {
    name: 'No-Code Website Builder for Consultants',
    slug: 'no-code-website-builder-for-consultants',
    description: 'A clean site for your advisory practice.',
    category: 'websites',
  },
  {
    name: 'Simple Website Builder for Therapists',
    slug: 'simple-website-builder-for-therapists',
    description: 'Calm, accessible sites for your practice.',
    category: 'websites',
  },
  {
    name: 'Modern Website Builder for Artists',
    slug: 'modern-website-builder-for-artists',
    description: 'A gallery-first home for your portfolio.',
    category: 'websites',
  },
  {
    name: 'AI Website Builder for Real Estate Agents',
    slug: 'ai-website-builder-for-real-estate-agents',
    description: 'Listings, leads, and a clean agent bio.',
    category: 'websites',
  },
  {
    name: 'Mobile-First Website Builder for Local Services',
    slug: 'mobile-first-website-builder-for-local-services',
    description: 'Calls and bookings from any phone.',
    category: 'websites',
  },

  // ===== Landing Pages =====
  {
    name: 'AI Landing Page Maker',
    slug: 'ai-landing-page-maker',
    description: 'One-page sites built to convert.',
    category: 'landing-pages',
    featured: true,
  },
  {
    name: 'Free Landing Page Builder for Startups',
    slug: 'free-landing-page-builder-for-startups',
    description: 'Ship a launch page in an afternoon.',
    category: 'landing-pages',
  },
  {
    name: 'High-Converting Landing Page Builder',
    slug: 'high-converting-landing-page-builder',
    description: 'Tested layouts that turn visits into sign-ups.',
    category: 'landing-pages',
  },
  {
    name: 'AI Landing Page Builder for Lead Generation',
    slug: 'ai-landing-page-builder-for-lead-generation',
    description: 'Capture leads from day one.',
    category: 'landing-pages',
  },
  {
    name: 'Simple Landing Page Builder for Apps',
    slug: 'simple-landing-page-builder-for-apps',
    description: 'Show your app and grow downloads.',
    category: 'landing-pages',
  },
  {
    name: 'Beautiful Landing Page Builder for Courses',
    slug: 'beautiful-landing-page-builder-for-courses',
    description: 'Sell your course with a focused sales page.',
    category: 'landing-pages',
  },
  {
    name: 'One-Page Landing Page Builder',
    slug: 'one-page-landing-page-builder',
    description: 'Tight storytelling on a single scroll.',
    category: 'landing-pages',
  },
  {
    name: 'No-Code Landing Page Builder for SaaS',
    slug: 'no-code-landing-page-builder-for-saas',
    description: 'Pricing, features, and a free trial in minutes.',
    category: 'landing-pages',
  },
  {
    name: 'AI Sales Page Builder',
    slug: 'ai-sales-page-builder',
    description: 'Long-form pages built to close.',
    category: 'landing-pages',
  },
  {
    name: 'Landing Page Builder for Events',
    slug: 'landing-page-builder-for-events',
    description: 'RSVPs, schedules, and ticket links in one page.',
    category: 'landing-pages',
  },

  // ===== Portfolios =====
  {
    name: 'Free Portfolio Generator',
    slug: 'free-portfolio-generator',
    description: 'For creatives, in minutes, no fee.',
    category: 'portfolios',
    featured: true,
  },
  {
    name: 'Portfolio Generator for Designers',
    slug: 'portfolio-generator-for-designers',
    description: 'Project-first layouts that show your craft.',
    category: 'portfolios',
  },
  {
    name: 'Portfolio Generator for Photographers',
    slug: 'portfolio-generator-for-photographers',
    description: 'Full-screen galleries with fast loading.',
    category: 'portfolios',
  },
  {
    name: 'AI Portfolio Builder for Illustrators',
    slug: 'ai-portfolio-builder-for-illustrators',
    description: 'Big artwork, clean captions, no clutter.',
    category: 'portfolios',
  },
  {
    name: 'Minimal Portfolio Builder for Writers',
    slug: 'minimal-portfolio-builder-for-writers',
    description: 'Let your words lead the page.',
    category: 'portfolios',
  },
  {
    name: 'Modern Portfolio Builder for Architects',
    slug: 'modern-portfolio-builder-for-architects',
    description: 'Project grids that match the work.',
    category: 'portfolios',
  },
  {
    name: 'One-Page Portfolio Builder',
    slug: 'one-page-portfolio-builder',
    description: 'A single scroll tells the whole story.',
    category: 'portfolios',
  },
  {
    name: 'Free Portfolio Builder for Freelancers',
    slug: 'free-portfolio-builder-for-freelancers',
    description: 'Show your work and win your next gig.',
    category: 'portfolios',
  },
  {
    name: 'Portfolio Builder for Developers',
    slug: 'portfolio-builder-for-developers',
    description: 'Highlight projects, skills, and contact info.',
    category: 'portfolios',
  },
  {
    name: 'Beautiful Portfolio Builder for Models',
    slug: 'beautiful-portfolio-builder-for-models',
    description: 'Polaroids, digitals, and a clean comp card.',
    category: 'portfolios',
  },

  // ===== Blogs =====
  {
    name: 'Blog Generator for Beginners',
    slug: 'blog-generator-for-beginners',
    description: 'Publish-ready in minutes.',
    category: 'blogs',
    featured: true,
  },
  {
    name: 'AI Blog Generator',
    slug: 'ai-blog-generator',
    description: 'Drafts, layouts, and SEO basics in one tool.',
    category: 'blogs',
  },
  {
    name: 'Free Blog Builder for Writers',
    slug: 'free-blog-builder-for-writers',
    description: 'A clean reading home for your work.',
    category: 'blogs',
  },
  {
    name: 'Personal Blog Builder',
    slug: 'personal-blog-builder',
    description: 'A journal-style site you actually update.',
    category: 'blogs',
  },
  {
    name: 'Travel Blog Builder',
    slug: 'travel-blog-builder',
    description: 'Maps, photos, and trip posts that load fast.',
    category: 'blogs',
  },
  {
    name: 'Food Blog Builder',
    slug: 'food-blog-builder',
    description: 'Recipe cards, photos, and an index page.',
    category: 'blogs',
  },
  {
    name: 'No-Code Blog Builder',
    slug: 'no-code-blog-builder',
    description: 'A writer-friendly site without HTML.',
    category: 'blogs',
  },
  {
    name: 'AI Blog Builder for Thought Leaders',
    slug: 'ai-blog-builder-for-thought-leaders',
    description: 'Long-form posts with built-in structure.',
    category: 'blogs',
  },
  {
    name: 'Minimalist Blog Builder',
    slug: 'minimalist-blog-builder',
    description: 'Type-first layouts that stay out of the way.',
    category: 'blogs',
  },
  {
    name: 'Modern Blog Builder for News',
    slug: 'modern-blog-builder-for-news',
    description: 'Article lists, tags, and a strong front page.',
    category: 'blogs',
  },

  // ===== Online Stores =====
  {
    name: 'Online Store Builder',
    slug: 'online-store-builder',
    description: 'Start selling without writing code.',
    category: 'stores',
    featured: true,
  },
  {
    name: 'Online Store Builder for Restaurants',
    slug: 'online-store-builder-for-restaurants',
    description: 'Menus, pickup, and delivery in one link.',
    category: 'stores',
  },
  {
    name: 'Free Online Store Builder',
    slug: 'free-online-store-builder',
    description: 'Open a shop without monthly fees.',
    category: 'stores',
  },
  {
    name: 'AI Store Builder for Small Business',
    slug: 'ai-store-builder-for-small-business',
    description: 'List products and start taking orders.',
    category: 'stores',
  },
  {
    name: 'Simple Online Store Builder for Crafts',
    slug: 'simple-online-store-builder-for-crafts',
    description: 'A handmade-friendly shop with checkout.',
    category: 'stores',
  },
  {
    name: 'No-Code Store Builder for Clothing',
    slug: 'no-code-store-builder-for-clothing',
    description: 'Lookbooks, sizes, and a clean cart.',
    category: 'stores',
  },
  {
    name: 'Modern Online Store Builder for Artists',
    slug: 'modern-online-store-builder-for-artists',
    description: 'Prints, originals, and limited drops.',
    category: 'stores',
  },
  {
    name: 'Online Store Builder for Coffee Shops',
    slug: 'online-store-builder-for-coffee-shops',
    description: 'Beans, merch, and subscription options.',
    category: 'stores',
  },
  {
    name: 'One-Product Online Store Builder',
    slug: 'one-product-online-store-builder',
    description: 'A single hero product, no clutter.',
    category: 'stores',
  },
  {
    name: 'AI Dropshipping Store Builder',
    slug: 'ai-dropshipping-store-builder',
    description: 'Launch a dropship shop in a weekend.',
    category: 'stores',
  },

  // ===== Link-in-Bio =====
  {
    name: 'Link-in-Bio Generator',
    slug: 'link-in-bio-generator',
    description: 'One link for all your channels.',
    category: 'link-in-bio',
    featured: true,
  },
  {
    name: 'Free Link-in-Bio for Creators',
    slug: 'free-link-in-bio-for-creators',
    description: 'A mobile-first hub for everything you do.',
    category: 'link-in-bio',
  },
  {
    name: 'AI Link-in-Bio for Influencers',
    slug: 'ai-link-in-bio-for-influencers',
    description: 'A polished page that matches your brand.',
    category: 'link-in-bio',
  },
  {
    name: 'Beautiful Link-in-Bio for Musicians',
    slug: 'beautiful-link-in-bio-for-musicians',
    description: 'Streams, merch, and tour dates in one tap.',
    category: 'link-in-bio',
  },
  {
    name: 'No-Code Link-in-Bio for Podcasters',
    slug: 'no-code-link-in-bio-for-podcasters',
    description: 'Episodes, links, and listening platforms.',
    category: 'link-in-bio',
  },
  {
    name: 'Modern Link-in-Bio for Coaches',
    slug: 'modern-link-in-bio-for-coaches',
    description: 'Bookings, programs, and a calm layout.',
    category: 'link-in-bio',
  },
  {
    name: 'Simple Link-in-Bio for YouTubers',
    slug: 'simple-link-in-bio-for-youtubers',
    description: 'Latest video, playlists, and sponsors.',
    category: 'link-in-bio',
  },
  {
    name: 'Link-in-Bio for Small Businesses',
    slug: 'link-in-bio-for-small-businesses',
    description: 'Shop, hours, and contact in one link.',
    category: 'link-in-bio',
  },
];

export const featuredGenerators = generators.filter((g) => g.featured);

export const categoryGenerators = Object.keys(categorySlugs).reduce(
  (acc, slug) => {
    acc[slug] = generators.filter((g) => g.category === slug);
    return acc;
  },
  {},
);

export const browseCategories = [
  {
    slug: 'websites',
    name: 'Websites',
    description: 'AI-built business and personal sites for any goal.',
  },
  {
    slug: 'landing-pages',
    name: 'Landing Pages',
    description: 'Single-page sites built to convert visitors fast.',
  },
  {
    slug: 'portfolios',
    name: 'Portfolios',
    description: 'Showcase your work with a clean, focused site.',
  },
  {
    slug: 'blogs',
    name: 'Blogs',
    description: 'Publish-ready blogs with built-in SEO basics.',
  },
  {
    slug: 'stores',
    name: 'Online Stores',
    description: 'Sell products online with payments built in.',
  },
  {
    slug: 'link-in-bio',
    name: 'Link-in-Bio',
    description: 'One link, all your places. Made for creators.',
  },
];

export const faqItems = [
  {
    q: 'What is an AI site generator?',
    a: 'An AI site generator is a tool that turns a short description of your business or project into a complete website. You answer a few questions or type a sentence, and the generator builds the pages, layout, and copy for you. From there, you can swap in your own photos, change colors, and edit text the way you would in any other site editor. Strikingly is one of the original AI-first website builders, and we host the largest free collection of industry and goal-specific generators.',
  },
  {
    q: 'How is a generator different from a template?',
    a: 'A template is a finished design that you adapt to your content. A generator is the opposite: you give it a goal or an industry, and it builds a site around your answer. With a template, the structure is fixed and you fit your work into it. With a generator, the structure adapts to you, so a wedding site and a portfolio site end up with very different pages, sections, and copy even though they were built from the same tool.',
  },
  {
    q: 'Are these generators free to use?',
    a: 'Yes. Every generator on this page is free to start. You can generate a site, customize it, and publish a Strikingly-hosted version without entering a credit card. Paid plans add a custom domain, more storage, and ecommerce features, but you only need them once your site is growing.',
  },
  {
    q: 'What kinds of sites can I build?',
    a: 'Anything that lives on a single site. The directory covers full multi-page websites, single-page landing pages, portfolios, blogs, online stores, and link-in-bio pages. Pick the generator that matches what you are building, and the result will be tuned for that goal. If you are not sure, the AI Website Generator is a good starting point because it adapts to almost any brief.',
  },
  {
    q: 'Can I customize what the generator produces?',
    a: 'Fully. The generator gives you a starting point, but every section is editable. You can change copy, swap photos, add or remove pages, switch fonts, and adjust colors. The underlying editor is the same Strikingly editor used by millions of creators, so you can keep going long after the generator has done its job.',
  },
  {
    q: 'Do generated sites work on mobile?',
    a: 'Every generator produces responsive sites by default. Layouts are designed mobile-first, which means the site looks right on a phone before it looks right on a desktop. You do not have to do anything extra to make this work. If you want to fine-tune how a section behaves on smaller screens, the editor lets you adjust each block independently.',
  },
];

export const totalGeneratorCount = generators.length;
