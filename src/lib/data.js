export const strings = {
  en: {
    siteTitle: 'strikingly AI',
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSubheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    ctaStartBuilding: 'START BUILDING - IT\'S FREE',
    ctaBrowse: 'BROWSE GENERATORS',
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',
    browseCategoryHeading: 'BROWSE BY CATEGORY',
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    noResults: 'Can\'t find it? Start with our AI builder.',
    resultCount: (count) => `${count} generators match`,
    howItWorksHeading: 'HOW IT WORKS',
    whyStrikinglyHeading: 'WHY STRIKINGLY',
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    readyToBuildHeading: 'READY TO BUILD?',
    readyToBuildSub: 'Pick a generator above, or jump straight into our AI builder.',
    ctaFooter: 'START WITH AI BUILDER',
    categories: {
      websites: {
        id: 'websites',
        title: 'Websites',
        desc: 'AI-built business and personal sites for any goal.'
      },
      'landing-pages': {
        id: 'landing-pages',
        title: 'Landing Pages',
        desc: 'Single-page sites built to convert visitors fast.'
      },
      portfolios: {
        id: 'portfolios',
        title: 'Portfolios',
        desc: 'Showcase your work with a clean, focused site.'
      },
      blogs: {
        id: 'blogs',
        title: 'Blogs',
        desc: 'Publish-ready blogs with built-in SEO basics.'
      },
      stores: {
        id: 'stores',
        title: 'Online Stores',
        desc: 'Sell products online with payments built in.'
      },
      'link-in-bio': {
        id: 'link-in-bio',
        title: 'Link-in-Bio',
        desc: 'One link, all your places. Made for creators.'
      }
    },
    howItWorksSteps: [
      {
        title: 'PICK A GENERATOR',
        desc: 'Browse by category or search to find one that fits your goal.'
      },
      {
        title: 'DESCRIBE YOUR SITE',
        desc: 'Tell our AI builder about your business in a sentence or two.'
      },
      {
        title: 'GENERATE AND PUBLISH',
        desc: 'Get a fully built site in seconds. Customize anything, then go live.'
      }
    ],
    whyStrikinglyClaims: [
      {
        title: 'LIVE IN SECONDS',
        desc: 'Describe your site, we build it. No setup, no learning curve.'
      },
      {
        title: 'MOBILE BY DEFAULT',
        desc: 'Every generator produces responsive sites that work on any device.'
      },
      {
        title: 'FREE TO START',
        desc: 'Generate, customize, and publish without a credit card.'
      }
    ],
    faqs: [
      {
        q: 'What is an AI site generator?',
        a: '<p>An AI site generator is a tool that uses artificial intelligence to automatically create a professional website based on your description. Instead of starting with a blank canvas, you tell the AI what your site is about, and it handles the layout, design, and initial content for you.</p>'
      },
      {
        q: 'How is a generator different from a template?',
        a: '<p>Templates are pre-made layouts where you manually replace placeholder content. A generator creates a unique starting point specifically for your business or project. It chooses colors, images, and copy that fit your goal, saving you hours of setup time.</p>'
      },
      {
        q: 'Are these generators free to use?',
        a: '<p>Yes, you can use any of our AI generators to build and customize your site for free. You only pay if you decide to upgrade for premium features like a custom domain or advanced store capabilities.</p>'
      },
      {
        q: 'What kinds of sites can I build?',
        a: '<p>You can build almost anything! From business websites and portfolios to online stores, blogs, and landing pages. Our AI is trained to handle a wide variety of industries and goals.</p>'
      },
      {
        q: 'Can I customize what the generator produces?',
        a: '<p>Absolutely. Once the AI generates your site, you have full control. You can edit text, swap images, add new sections, and change the entire look and feel using our simple drag-and-drop editor.</p>'
      },
      {
        q: 'Do generated sites work on mobile?',
        a: '<p>Yes, every site created with our AI generators is mobile-responsive by default. Your site will look great and function perfectly on smartphones, tablets, and desktops.</p>'
      }
    ]
  }
}

export const featuredGenerators = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site', cat: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', cat: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', cat: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code', cat: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', cat: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', cat: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests', cat: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', cat: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', cat: 'Blog', slug: 'blog-generator-for-beginners' }
]

const categoriesList = ['websites', 'landing-pages', 'portfolios', 'blogs', 'stores', 'link-in-bio']

export const allGenerators = categoriesList.reduce((acc, cat) => {
  acc[cat] = Array.from({ length: 10 }).map((_, i) => ({
    name: `${cat.replace('-', ' ')} Example ${i + 1}`,
    desc: `Plausible description for ${cat} ${i + 1}`,
    slug: `${cat}-${i + 1}`
  }))
  return acc
}, {})

// Replace some sample data for websites as requested
allGenerators['websites'] = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests', slug: 'wedding-website-generator' },
  { name: 'Photography Portfolio Site', desc: 'Showcase your best shots in style', slug: 'photography-portfolio-site' },
  { name: 'AI Coffee Shop Site', desc: 'A perfect blend of design and function', slug: 'ai-coffee-shop-site' },
  { name: 'Real Estate Website Maker', desc: 'Listings and leads, ready to go', slug: 'real-estate-website-maker' },
  { name: 'Personal Brand Builder', desc: 'Your professional home on the web', slug: 'personal-brand-builder' },
  { name: 'Local Gym Website', desc: 'Memberships and classes made easy', slug: 'local-gym-website' },
  { name: 'Hotel Website Generator', desc: 'Bookings and galleries at your service', slug: 'hotel-website-generator' },
  { name: 'Non-Profit Website Hub', desc: 'Drive donations and share your mission', slug: 'non-profit-website-hub' }
]
