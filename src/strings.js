// Internationalization strings - English
// Add new language files (strings.es.js, strings.ja.js, etc.) with the same structure

export const strings = {
  // Meta
  metaTitle: 'AI Website Generators - Build Any Site in Seconds | Strikingly',
  metaDescription: "Browse Strikingly's AI-powered website generators. Choose one for your industry, goal, or site type and create a website in seconds, no code required.",
  
  // Top Bar
  topBarLogo: 'strikingly AI',
  
  // Breadcrumb
  breadcrumbStrikingly: 'Strikingly',
  breadcrumbCurrent: 'AI Generators',
  
  // Hero
  heroTitleLine1: 'BUILD ANY KIND OF SITE',
  heroTitleLine2: 'WITH AI, IN AN INSTANT',
  heroSubtitle: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
  heroPrimaryCta: 'START BUILDING - IT\'S FREE',
  heroSecondaryCta: 'BROWSE GENERATORS',
  
  // Featured
  featuredTitle: 'FEATURED GENERATORS',
  featuredSubtitle: 'A few common starting points.',
  
  // Browse by Category
  browseTitle: 'BROWSE BY CATEGORY',
  categories: [
    {
      name: 'Websites',
      slug: 'websites',
      description: 'AI-built business and personal sites for any goal.',
      icon: 'globe'
    },
    {
      name: 'Landing Pages',
      slug: 'landing-pages',
      description: 'Single-page sites built to convert visitors fast.',
      icon: 'target'
    },
    {
      name: 'Portfolios',
      slug: 'portfolios',
      description: 'Showcase your work with a clean, focused site.',
      icon: 'image'
    },
    {
      name: 'Blogs',
      slug: 'blogs',
      description: 'Publish-ready blogs with built-in SEO basics.',
      icon: 'edit'
    },
    {
      name: 'Online Stores',
      slug: 'stores',
      description: 'Sell products online with payments built in.',
      icon: 'shoppingBag'
    },
    {
      name: 'Link-in-Bio',
      slug: 'link-in-bio',
      description: 'One link, all your places. Made for creators.',
      icon: 'link'
    }
  ],
  
  // All Generators
  allGeneratorsTitle: 'ALL GENERATORS',
  allGeneratorsSubtitle: 'Sixty-plus generators, organized by what you\'re building.',
  searchPlaceholder: 'Search generators...',
  searchAriaLabel: 'Search generators',
  resultCount: (count) => `${count} generator${count !== 1 ? 's' : ''} match`,
  noResultsTitle: 'No generators found',
  noResultsLink: "Can't find it? Start with our AI builder.",
  showAll: (count) => `Show all ${count} generators`,
  showLess: 'Show less',
  
  // Generator Subsections
  subsections: {
    websites: {
      title: 'WEBSITES',
      description: 'AI-built sites for business and personal use.',
      generators: [
        { name: 'AI Website Generator', description: 'Describe your business, get a full site in minutes.' },
        { name: 'Free Website Builder for Photographers', description: 'Portfolio-ready sites for photographers, no code needed.' },
        { name: 'One-Page Website Builder', description: 'Simple, single-scroll sites for any purpose.' },
        { name: 'Wedding Website Generator', description: 'Share your story with guests in a beautiful wedding site.' },
        { name: 'Restaurant Website Builder', description: 'Menu, hours, and reservations — all in one place.' },
        { name: 'Business Website Generator', description: 'Professional sites for businesses of any size.' },
        { name: 'Personal Website Builder', description: 'Your own corner of the web, uniquely you.' },
        { name: 'No-Code Website Builder', description: 'Build and publish without writing a single line.' },
        { name: 'Beautiful Website Generator', description: 'Stunning designs generated from your description.' },
        { name: 'Portfolio Generator for Designers', description: 'Showcase creative work with style.' }
      ]
    },
    'landing-pages': {
      title: 'LANDING PAGES',
      description: 'Single-page sites built to convert visitors fast.',
      generators: [
        { name: 'AI Landing Page Maker', description: 'One-page sites built to convert visitors.' },
        { name: 'Free Landing Page Generator', description: 'Create high-converting pages at no cost.' },
        { name: 'Product Landing Page Builder', description: 'Showcase products with compelling copy and images.' },
        { name: 'Event Landing Page Generator', description: 'Promote events with dedicated landing pages.' },
        { name: 'Lead Generation Landing Page', description: 'Capture leads with optimized signup forms.' },
        { name: 'Coming Soon Page Builder', description: 'Build buzz before your big launch.' },
        { name: 'AI-Powered Landing Page', description: 'Smart pages that adapt to your goals.' },
        { name: 'No-Code Landing Page Maker', description: 'Publish without developers or designers.' }
      ]
    },
    portfolios: {
      title: 'PORTFOLIOS',
      description: 'Showcase your work with a clean, focused site.',
      generators: [
        { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee.' },
        { name: 'Portfolio Generator for Designers', description: 'Display creative work beautifully.' },
        { name: 'Photography Portfolio Builder', description: 'Let your photos speak for themselves.' },
        { name: 'Artist Portfolio Website', description: 'Online galleries for visual artists.' },
        { name: 'Freelancer Portfolio Generator', description: 'Attract clients with a professional portfolio.' },
        { name: 'Creative Portfolio Maker', description: 'Stand out with unique portfolio designs.' },
        { name: 'Architecture Portfolio Builder', description: 'Present projects with clean, minimal design.' },
        { name: 'Illustrator Portfolio Generator', description: 'Showcase illustrations and character designs.' },
        { name: 'Video Portfolio Website', description: 'Cinematic portfolios for video professionals.' },
        { name: 'UX Designer Portfolio', description: 'Case studies and process documentation.' }
      ]
    },
    blogs: {
      title: 'BLOGS',
      description: 'Publish-ready blogs with built-in SEO basics.',
      generators: [
        { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes.' },
        { name: 'AI Blog Website Builder', description: 'Smart blogs that write and format for you.' },
        { name: 'Free Blog Site Generator', description: 'Start writing without spending a dime.' },
        { name: 'Personal Blog Builder', description: 'Share your thoughts with the world.' },
        { name: 'Travel Blog Generator', description: 'Document journeys with beautiful layouts.' },
        { name: 'Food Blog Website Builder', description: 'Recipe blogs with gorgeous photography.' },
        { name: 'Fashion Blog Generator', description: 'Style-focused blogs with visual impact.' },
        { name: 'Tech Blog Builder', description: 'Developer blogs with code highlighting.' },
        { name: 'News Blog Generator', description: 'Clean, readable layouts for news sites.' },
        { name: 'Minimal Blog Template', description: 'Distraction-free writing and reading.' }
      ]
    },
    stores: {
      title: 'ONLINE STORES',
      description: 'Sell products online with payments built in.',
      generators: [
        { name: 'Online Store Builder', description: 'Start selling without writing code.' },
        { name: 'Online Store Builder for Restaurants', description: 'Take orders and payments online easily.' },
        { name: 'Free E-commerce Website Builder', description: 'Launch your store at zero cost.' },
        { name: 'AI Store Generator', description: 'Describe your products, get a complete store.' },
        { name: 'Product Page Generator', description: 'Beautiful product pages in seconds.' },
        { name: 'Small Business Store Builder', description: 'Local shops go online effortlessly.' },
        { name: 'Fashion Store Generator', description: 'Online boutiques with style.' },
        { name: 'Art Store Website Builder', description: 'Sell prints, originals, and merchandise.' },
        { name: 'Digital Product Store', description: 'Sell ebooks, courses, and downloads.' },
        { name: 'No-Code Store Builder', description: 'Build and run your store yourself.' }
      ]
    },
    'link-in-bio': {
      title: 'LINK-IN-BIO',
      description: 'One link, all your places. Made for creators.',
      generators: [
        { name: 'Link-in-Bio Generator', description: 'One link for all your channels.' },
        { name: 'Free Link-in-Bio Builder', description: 'Create your link page at no cost.' },
        { name: 'Instagram Link-in-Bio', description: 'The perfect landing page for your IG.' },
        { name: 'TikTok Bio Link Builder', description: 'Connect all your content in one place.' },
        { name: 'YouTube Link-in-Bio', description: 'Link to videos, merch, and socials.' },
        { name: 'Creator Link Page Generator', description: 'Monetize your audience\'s attention.' },
        { name: 'Artist Link-in-Bio', description: 'Connect fans to music, shows, and merch.' },
        { name: 'Influencer Bio Link', description: 'All your links, one beautiful page.' }
      ]
    }
  },
  
  // Featured Generators
  featuredGenerators: [
    { name: 'AI Website Generator', description: 'Describe your business, get a full site.', category: 'Website', slug: 'ai-website-generator' },
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee.', category: 'Portfolio', slug: 'free-portfolio-generator' },
    { name: 'AI Landing Page Maker', description: 'One-page sites built to convert.', category: 'Landing Page', slug: 'ai-landing-page-maker' },
    { name: 'Online Store Builder', description: 'Start selling without writing code.', category: 'Store', slug: 'online-store-builder' },
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels.', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
    { name: 'One-Page Website Builder', description: 'Simple sites, single scroll.', category: 'Website', slug: 'one-page-website-builder' },
    { name: 'Wedding Website Generator', description: 'Share your day with guests.', category: 'Website', slug: 'wedding-website-generator' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done.', category: 'Website', slug: 'restaurant-website-builder' },
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes.', category: 'Blog', slug: 'blog-generator-for-beginners' }
  ],
  
  // How It Works
  howItWorksTitle: 'HOW IT WORKS',
  howItWorksSteps: [
    { title: 'PICK A GENERATOR', description: 'Browse by category or search to find one that fits your goal.' },
    { title: 'DESCRIBE YOUR SITE', description: 'Tell our AI builder about your business in a sentence or two.' },
    { title: 'GENERATE AND PUBLISH', description: 'Get a fully built site in seconds. Customize anything, then go live.' }
  ],
  
  // Why Strikingly
  whyStrikinglyTitle: 'WHY STRIKINGLY',
  whyStrikinglyFeatures: [
    { title: 'LIVE IN SECONDS', description: 'Describe your site, we build it. No setup, no learning curve.' },
    { title: 'MOBILE BY DEFAULT', description: 'Every generator produces responsive sites that work on any device.' },
    { title: 'FREE TO START', description: 'Generate, customize, and publish without a credit card.' }
  ],
  
  // FAQ
  faqTitle: 'FREQUENTLY ASKED QUESTIONS',
  faqItems: [
    {
      question: 'What is an AI site generator?',
      answer: 'An AI site generator is a tool that uses artificial intelligence to create websites based on your description. Instead of starting from scratch with a blank page, you tell the generator what kind of site you need, and it builds a complete, functional website for you in seconds. Strikingly\'s AI generator understands your goals and produces a tailored site with appropriate sections, layouts, and content.'
    },
    {
      question: 'How is a generator different from a template?',
      answer: 'A template is a pre-designed layout that you customize with your own content — you\'re working within a fixed structure. A generator creates something new based on your specific description. With Strikingly\'s generators, you get a unique site built around your particular business, industry, and goals, rather than adapting a generic template to fit your needs.'
    },
    {
      question: 'Are these generators free to use?',
      answer: 'Yes, you can generate and preview your site for free. Strikingly offers a free plan that lets you build, customize, and publish your site without entering credit card information. Premium features and custom domains are available on paid plans.'
    },
    {
      question: 'What kinds of sites can I build?',
      answer: 'Strikingly\'s generators cover a wide range of site types: business websites, portfolios, blogs, online stores, landing pages, event pages, and link-in-bio pages. Each generator is optimized for its specific purpose, with appropriate sections, features, and design patterns built in.'
    },
    {
      question: 'Can I customize what the generator produces?',
      answer: 'Absolutely. The generator creates a starting point based on your description, but everything about your site is customizable. You can change colors, fonts, images, text, layout, and more using our intuitive editor. The generator saves you the time of setting up structure and basic content, but you retain full creative control.'
    },
    {
      question: 'Do generated sites work on mobile?',
      answer: 'Yes, every site generated by Strikingly is fully responsive and looks great on any device — desktop, tablet, or mobile. Mobile optimization is built into our generators by default, so you don\'t need to do anything extra to ensure your visitors have a good experience on smaller screens.'
    }
  ],
  
  // Closing CTA
  closingCtaTitle: 'READY TO BUILD?',
  closingCtaSubtitle: 'Pick a generator above, or jump straight into our AI builder.',
  closingCtaButton: 'START WITH AI BUILDER',
  
  // Footer
  footerCopyright: `© ${new Date().getFullYear()} Strikingly. All rights reserved.`,
  footerLinks: {
    product: [
      { text: 'Templates', href: '/templates' },
      { text: 'Pricing', href: '/pricing' },
      { text: 'Features', href: '/features' },
      { text: 'Integrations', href: '/integrations' }
    ],
    company: [
      { text: 'About', href: '/about' },
      { text: 'Blog', href: '/blog' },
      { text: 'Careers', href: '/careers' },
      { text: 'Press', href: '/press' }
    ],
    support: [
      { text: 'Help Center', href: '/support' },
      { text: 'Contact Us', href: '/contact' },
      { text: 'Community', href: '/community' },
      { text: 'Status', href: '/status' }
    ],
    legal: [
      { text: 'Terms', href: '/terms' },
      { text: 'Privacy', href: '/privacy' },
      { text: 'Cookies', href: '/cookies' }
    ]
  }
};

export default strings;