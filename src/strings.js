const strings = {
  en: {
    // Top bar
    logo: 'strikingly AI',

    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',

    // Hero
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSub: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    heroPrimaryCTA: 'START BUILDING - IT\'S FREE',
    heroSecondaryCTA: 'BROWSE GENERATORS',

    // Featured Generators
    featuredHeading: 'FEATURED GENERATORS',
    featuredSub: 'A few common starting points.',

    // Browse by Category
    browseHeading: 'BROWSE BY CATEGORY',
    browseCategories: [
      { name: 'Websites', slug: 'websites', desc: 'AI-built business and personal sites for any goal.' },
      { name: 'Landing Pages', slug: 'landing-pages', desc: 'Single-page sites built to convert visitors fast.' },
      { name: 'Portfolios', slug: 'portfolios', desc: 'Showcase your work with a clean, focused site.' },
      { name: 'Blogs', slug: 'blogs', desc: 'Publish-ready blogs with built-in SEO basics.' },
      { name: 'Online Stores', slug: 'stores', desc: 'Sell products online with payments built in.' },
      { name: 'Link-in-Bio', slug: 'link-in-bio', desc: 'One link, all your places. Made for creators.' },
    ],

    // All Generators
    allHeading: 'ALL GENERATORS',
    allSub: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchAria: 'Search generators',
    searchResultCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
    searchEmpty: 'No generators found.',
    searchClear: 'Clear search',
    searchCantFindLabel: 'Can\'t find it?',
    searchCantFindLink: 'Start with our AI builder.',
    showFewer: 'Show fewer',

    // Generator categories (Section 5)
    generatorCategories: [
      {
        name: 'Websites',
        slug: 'websites',
        desc: 'AI-built business and personal sites for any goal.',
        generators: [
          { name: 'AI Website Generator', desc: 'Describe your business, get a full site in seconds.', slug: 'ai-website-generator' },
          { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll, no clutter.', slug: 'one-page-website-builder' },
          { name: 'Wedding Website Generator', desc: 'Share your day with guests, beautifully.', slug: 'wedding-website-generator' },
          { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done.', slug: 'restaurant-website-builder' },
          { name: 'Business Website Generator', desc: 'Professional sites for startups and SMBs.', slug: 'business-website-generator' },
          { name: 'Free Website Builder for Photographers', desc: 'Show your portfolio with a stunning site.', slug: 'free-website-builder-photographers' },
          { name: 'Church Website Builder', desc: 'Sermons, events, and community in one place.', slug: 'church-website-builder' },
          { name: 'Real Estate Website Generator', desc: 'Listings, galleries, and lead capture.', slug: 'real-estate-website-generator' },
          { name: 'Nonprofit Website Builder', desc: 'Tell your story and collect donations.', slug: 'nonprofit-website-builder' },
          { name: 'Fitness Website Generator', desc: 'Classes, trainers, and schedule management.', slug: 'fitness-website-generator' },
        ],
      },
      {
        name: 'Landing Pages',
        slug: 'landing-pages',
        desc: 'Single-page sites built to convert visitors fast.',
        generators: [
          { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert.', slug: 'ai-landing-page-maker' },
          { name: 'Product Launch Landing Page', desc: 'Build hype and collect emails before launch.', slug: 'product-launch-landing-page' },
          { name: 'Event Registration Page', desc: 'RSVPs, details, and reminders in one page.', slug: 'event-registration-page' },
          { name: 'App Download Landing Page', desc: 'Drive installs with a focused download page.', slug: 'app-download-landing-page' },
          { name: 'Lead Capture Page Builder', desc: 'Collect qualified leads with optimized forms.', slug: 'lead-capture-page-builder' },
          { name: 'Sales Page Generator', desc: 'High-converting pages for your offers.', slug: 'sales-page-generator' },
          { name: 'Coming Soon Page Builder', desc: 'Tease your launch and collect early signups.', slug: 'coming-soon-page-builder' },
          { name: 'Webinar Registration Page', desc: 'Fill your next webinar with a focused page.', slug: 'webinar-registration-page' },
        ],
      },
      {
        name: 'Portfolios',
        slug: 'portfolios',
        desc: 'Showcase your work with a clean, focused site.',
        generators: [
          { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee.', slug: 'free-portfolio-generator' },
          { name: 'Portfolio Generator for Designers', desc: 'Clean layouts that let your work shine.', slug: 'portfolio-generator-designers' },
          { name: 'Photography Portfolio Builder', desc: 'Full-bleed galleries made for images.', slug: 'photography-portfolio-builder' },
          { name: 'Artist Portfolio Website', desc: 'Galleries, exhibitions, and commissions.', slug: 'artist-portfolio-website' },
          { name: 'Writer Portfolio Generator', desc: 'Articles, books, and bylines, organized.', slug: 'writer-portfolio-generator' },
          { name: 'Model Portfolio Site Builder', desc: 'Comp cards and lookbooks, online.', slug: 'model-portfolio-site-builder' },
          { name: 'Architecture Portfolio Builder', desc: 'Project showcases with plans and photos.', slug: 'architecture-portfolio-builder' },
          { name: 'Videographer Portfolio Site', desc: 'Showreels and project pages that load fast.', slug: 'videographer-portfolio-site' },
          { name: 'Makeup Artist Portfolio', desc: 'Before-and-after galleries and booking.', slug: 'makeup-artist-portfolio' },
          { name: 'Developer Portfolio Generator', desc: 'Projects, skills, and a GitHub link in one.', slug: 'developer-portfolio-generator' },
        ],
      },
      {
        name: 'Blogs',
        slug: 'blogs',
        desc: 'Publish-ready blogs with built-in SEO basics.',
        generators: [
          { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes.', slug: 'blog-generator-beginners' },
          { name: 'AI Travel Blog Builder', desc: 'Share your journeys with maps and photos.', slug: 'ai-travel-blog-builder' },
          { name: 'Food Blog Generator', desc: 'Recipes, photos, and ingredient lists built in.', slug: 'food-blog-generator' },
          { name: 'Fashion Blog Builder', desc: 'Lookbooks, trends, and affiliate-ready.', slug: 'fashion-blog-builder' },
          { name: 'Tech Blog Generator', desc: 'Code snippets, tutorials, and clean typography.', slug: 'tech-blog-generator' },
          { name: 'Personal Journal Generator', desc: 'A private or public space for your thoughts.', slug: 'personal-journal-generator' },
          { name: 'News Blog Builder', desc: 'Breaking stories, categories, and RSS.', slug: 'news-blog-builder' },
          { name: 'Parenting Blog Generator', desc: 'Share advice, milestones, and family stories.', slug: 'parenting-blog-generator' },
        ],
      },
      {
        name: 'Online Stores',
        slug: 'stores',
        desc: 'Sell products online with payments built in.',
        generators: [
          { name: 'Online Store Builder', desc: 'Start selling without writing code.', slug: 'online-store-builder' },
          { name: 'Online Store Builder for Restaurants', desc: 'Online ordering, menu, and delivery setup.', slug: 'online-store-builder-restaurants' },
          { name: 'Clothing Store Generator', desc: 'Lookbooks, size guides, and checkout.', slug: 'clothing-store-generator' },
          { name: 'Handmade Goods Store Builder', desc: 'Craft a story around every product.', slug: 'handmade-goods-store-builder' },
          { name: 'Digital Products Store', desc: 'Sell ebooks, courses, and downloads.', slug: 'digital-products-store' },
          { name: 'Subscription Box Builder', desc: 'Recurring billing and member management.', slug: 'subscription-box-builder' },
          { name: 'Jewelry Store Generator', desc: 'Elegant product pages with zoom and details.', slug: 'jewelry-store-generator' },
          { name: 'Print-on-Demand Store', desc: 'Sell custom merch without inventory.', slug: 'print-on-demand-store' },
          { name: 'Pet Supplies Store Builder', desc: 'Categories, subscriptions, and pet profiles.', slug: 'pet-supplies-store-builder' },
          { name: 'Bookshop Generator', desc: 'Author pages, reviews, and secure checkout.', slug: 'bookshop-generator' },
        ],
      },
      {
        name: 'Link-in-Bio',
        slug: 'link-in-bio',
        desc: 'One link, all your places. Made for creators.',
        generators: [
          { name: 'Link-in-Bio Generator', desc: 'One link for all your channels.', slug: 'link-in-bio-generator' },
          { name: 'Creator Link-in-Bio', desc: 'YouTube, TikTok, Instagram, all in one.', slug: 'creator-link-in-bio' },
          { name: 'Musician Link Page', desc: 'Streaming links, tour dates, and merch.', slug: 'musician-link-page' },
          { name: 'Podcaster Bio Link', desc: 'Latest episodes, newsletter, and socials.', slug: 'podcaster-bio-link' },
          { name: 'Small Business Bio Link', desc: 'Menu, booking, reviews, in one tap.', slug: 'small-business-bio-link' },
          { name: 'Coach Bio Link Builder', desc: 'Calendar booking, testimonials, and offers.', slug: 'coach-bio-link-builder' },
          { name: 'Author Bio Link Page', desc: 'Books, events, newsletter sign-up.', slug: 'author-bio-link-page' },
          { name: 'Agency Link-in-Bio', desc: 'Case studies, contact, and client results.', slug: 'agency-link-in-bio' },
        ],
      },
    ],

    // How It Works
    howHeading: 'HOW IT WORKS',
    steps: [
      { title: 'PICK A GENERATOR', desc: 'Browse by category or search to find one that fits your goal.' },
      { title: 'DESCRIBE YOUR SITE', desc: 'Tell our AI builder about your business in a sentence or two.' },
      { title: 'GENERATE AND PUBLISH', desc: 'Get a fully built site in seconds. Customize anything, then go live.' },
    ],

    // Why Strikingly
    whyHeading: 'WHY STRIKINGLY',
    benefits: [
      { title: 'LIVE IN SECONDS', desc: 'Describe your site, we build it. No setup, no learning curve.' },
      { title: 'MOBILE BY DEFAULT', desc: 'Every generator produces responsive sites that work on any device.' },
      { title: 'FREE TO START', desc: 'Generate, customize, and publish without a credit card.' },
    ],

    // FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faqs: [
      {
        q: 'What is an AI site generator?',
        a: 'An AI site generator is a tool that builds a complete website for you based on a short description of what you need. Instead of picking a template and customizing every section manually, you simply tell the generator what kind of site you want — for example, "a portfolio for my photography business" or "an online store selling handmade candles" — and the AI creates a fully structured, designed, and ready-to-publish site in seconds. Strikingly\'s generators combine AI layout, content generation, and responsive design into one step, so you skip the blank-page problem entirely.',
      },
      {
        q: 'How is a generator different from a template?',
        a: 'A template is a pre-designed layout that you fill with your own content, images, and settings. A generator goes several steps further: it writes the copy, picks the layout, arranges the sections, and applies brand-appropriate styling based on your description. Think of a template as an empty frame, and a generator as a finished painting that arrives already matched to your subject. You can still customize everything the generator produces — every text, every image, every color — but you start much closer to done.',
      },
      {
        q: 'Are these generators free to use?',
        a: 'Yes. Every generator on this page is free to try. You can describe your site, generate a complete preview, and customize it as much as you want without entering a credit card. When you\'re ready to publish with a custom domain or remove Strikingly branding, we offer affordable paid plans — but the core generation and design experience costs nothing to start.',
      },
      {
        q: 'What kinds of sites can I build?',
        a: 'You can build nearly any kind of site: business websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Within each category, there are dozens of specialized generators tuned for specific industries and use cases — restaurants, photographers, designers, coaches, podcasters, and many more. If you don\'t see a generator that matches exactly, you can always jump straight into our general AI site builder and describe what you need.',
      },
      {
        q: 'Can I customize what the generator produces?',
        a: 'Absolutely. The generator gives you a complete, publish-ready starting point, but everything is editable. You can change text, swap images, adjust colors and fonts, add or remove sections, and connect your own domain. The AI handles the heavy lifting of the first draft; you stay in control of the final result. Many users generate a site, tweak a few details, and publish within minutes.',
      },
      {
        q: 'Do generated sites work on mobile?',
        a: 'Yes. Every site built through a Strikingly generator is fully responsive out of the box. The AI produces layouts that adapt automatically to phones, tablets, and desktops. You can preview the mobile version in the editor with one click, and every design decision the generator makes respects mobile readability, touch targets, and performance. No extra steps required.',
      },
    ],

    // Closing CTA
    closingHeadline: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCTA: 'START WITH AI BUILDER',

    // Footer
    footerCopyright: '© Strikingly. All rights reserved.',
    footerColumns: [
      { heading: 'Product', links: [{ text: 'Pricing', href: '/pricing' }, { text: 'Templates', href: '/templates' }, { text: 'Blog', href: '/blog' }] },
      { heading: 'Company', links: [{ text: 'About', href: '/about' }, { text: 'Blog', href: '/blog' }, { text: 'Support', href: '/support' }] },
      { heading: 'Legal', links: [{ text: 'Terms of Service', href: '/terms' }, { text: 'Privacy Policy', href: '/privacy' }] },
      { heading: 'Resources', links: [{ text: 'Help Center', href: '/support' }, { text: 'Blog', href: '/blog' }, { text: 'Templates', href: '/templates' }] },
    ],

    // Featured generators data
    featuredGenerators: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
      { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
      { name: 'Online Store Builder', desc: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
      { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
      { name: 'Wedding Website Generator', desc: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-beginners' },
    ],
  },
};

export default strings;