import { useState, useEffect } from 'react'
import './App.css'

// i18n strings
const strings = {
  en: {
    logo: 'Strikingly AI',
    home: 'Strikingly',
    currentPage: 'AI Generators',
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSubheadline: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    ctaPrimary: "START BUILDING - IT'S FREE",
    ctaSecondary: 'BROWSE GENERATORS',
    featuredTitle: 'FEATURED GENERATORS',
    featuredSubtitle: 'A few common starting points.',
    browseTitle: 'BROWSE BY CATEGORY',
    allGeneratorsTitle: 'ALL GENERATORS',
    allGeneratorsSubtitle: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    showAll: 'Show all',
    showLess: 'Show less',
    noResults: 'No generators match your search.',
    clearSearch: 'Clear search',
    cantFind: "Can't find it? Start with our AI builder.",
    howItWorksTitle: 'HOW IT WORKS',
    step1Title: 'PICK A GENERATOR',
    step1Desc: 'Browse by category or search to find one that fits your goal.',
    step2Title: 'DESCRIBE YOUR SITE',
    step2Desc: 'Tell our AI builder about your business in a sentence or two.',
    step3Title: 'GENERATE AND PUBLISH',
    step3Desc: 'Get a fully built site in seconds. Customize anything, then go live.',
    whyTitle: 'WHY STRIKINGLY',
    why1Title: 'LIVE IN SECONDS',
    why1Desc: 'Describe your site, we build it. No setup, no learning curve.',
    why2Title: 'MOBILE BY DEFAULT',
    why2Desc: 'Every generator produces responsive sites that work on any device.',
    why3Title: 'FREE TO START',
    why3Desc: 'Generate, customize, and publish without a credit card.',
    faqTitle: 'FREQUENTLY ASKED QUESTIONS',
    faq1Q: 'What is an AI site generator?',
    faq1A: 'An AI site generator is a tool that uses artificial intelligence to help you create a website. Instead of building from scratch or using a pre-made template, you describe what you need, and the AI creates a customized site based on your description. Strikingly\'s AI generators can create everything from personal portfolios to online stores.',
    faq2Q: 'How is a generator different from a template?',
    faq2A: 'A template is a pre-designed layout that you fill with your own content. A generator, on the other hand, creates a unique site tailored specifically to your description. While templates offer consistency, generators offer personalization—your site is built around your specific needs rather than adapted from a generic design.',
    faq3Q: 'Are these generators free to use?',
    faq3A: 'Yes! Strikingly offers free generators that let you create and publish a basic website at no cost. You can customize your site and get it live without entering a credit card. Premium features and custom domains are available for those who want to take their sites to the next level.',
    faq4Q: 'What kinds of sites can I build?',
    faq4A: 'With our AI generators, you can build almost any type of website: personal portfolios, business sites, blogs, online stores, wedding websites, restaurant pages, landing pages, and link-in-bio pages. Each generator is optimized for its specific purpose, ensuring you get a site that\'s designed to work for your goals.',
    faq5Q: 'Can I customize what the generator produces?',
    faq5A: 'Absolutely. After the AI generates your initial site, you have full control to customize everything. Change colors, fonts, images, text, and layout. Add or remove sections. The generator gives you a head start, but you\'re always in the driver\'s seat with complete editing capabilities.',
    faq6Q: 'Do generated sites work on mobile?',
    faq6A: 'Every site generated through Strikingly is automatically responsive, meaning it looks and works great on any device—phones, tablets, and desktops. In today\'s mobile-first world, having a site that adapts to all screen sizes is essential, and our generators ensure this by default.',
    closingTitle: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    footerProducts: 'Products',
    footerTemplates: 'Templates',
    footerPricing: 'Pricing',
    footerBlog: 'Blog',
    footerCompany: 'Company',
    footerAbout: 'About',
    footerCareers: 'Careers',
    footerPress: 'Press',
    footerContact: 'Contact',
    footerSupport: 'Support',
    footerHelp: 'Help Center',
    footerCommunity: 'Community',
    footerDevelopers: 'Developers',
    footerStatus: 'Status',
    footerLegal: 'Legal',
    footerTerms: 'Terms',
    footerPrivacy: 'Privacy',
    footerCookies: 'Cookies',
    footerCopyright: '© 2026 Strikingly, Inc. All rights reserved.',
  }
}

const categories = [
  { id: 'websites', name: 'Websites', desc: 'AI-built business and personal sites for any goal.', slug: 'websites' },
  { id: 'landing-pages', name: 'Landing Pages', desc: 'Single-page sites built to convert visitors fast.', slug: 'landing-pages' },
  { id: 'portfolios', name: 'Portfolios', desc: 'Showcase your work with a clean, focused site.', slug: 'portfolios' },
  { id: 'blogs', name: 'Blogs', desc: 'Publish-ready blogs with built-in SEO basics.', slug: 'blogs' },
  { id: 'stores', name: 'Online Stores', desc: 'Sell products online with payments built in.', slug: 'stores' },
  { id: 'link-in-bio', name: 'Link-in-Bio', desc: 'One link, all your places. Made for creators.', slug: 'link-in-bio' },
]

const featuredGenerators = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' },
]

const allGenerators = {
  websites: [
    { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
    { name: 'Free Website Builder for Photographers', desc: 'Professional portfolio sites, no coding', slug: 'free-website-builder-for-photographers' },
    { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
    { name: 'Wedding Website Generator', desc: 'Share your day with guests', slug: 'wedding-website-generator' },
    { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
    { name: 'Yoga Instructor Website Builder', desc: 'Attract students with a beautiful studio site', slug: 'yoga-instructor-website-builder' },
    { name: 'No-Code Website Builder', desc: 'Build any site without touching code', slug: 'no-code-website-builder' },
    { name: 'Beautiful Website Generator', desc: 'Stunning designs, AI-powered', slug: 'beautiful-website-generator' },
    { name: 'Personal Website Generator', desc: 'Your online home in minutes', slug: 'personal-website-generator' },
    { name: 'Business Website Builder', desc: 'Professional presence, no design skills needed', slug: 'business-website-builder' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
    { name: 'Free Landing Page Generator', desc: 'Launch fast, convert faster', slug: 'free-landing-page-generator' },
    { name: 'Product Launch Page Builder', desc: 'Build buzz for your next release', slug: 'product-launch-page-builder' },
    { name: 'Event Registration Page Generator', desc: 'Get signups for webinars and events', slug: 'event-registration-page-generator' },
    { name: 'Lead Capture Page Builder', desc: 'Turn visitors into leads', slug: 'lead-capture-page-builder' },
    { name: 'Coming Soon Page Generator', desc: 'Build anticipation before launch', slug: 'coming-soon-page-generator' },
    { name: 'AI-Powered Landing Page Builder', desc: 'Smart pages that adapt to your audience', slug: 'ai-powered-landing-page-builder' },
    { name: 'No-Code Landing Page Builder', desc: 'Create without developers', slug: 'no-code-landing-page-builder' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
    { name: 'Portfolio Generator for Designers', desc: 'Showcase your creative work beautifully', slug: 'portfolio-generator-for-designers' },
    { name: 'Photographer Portfolio Builder', desc: 'Let your photos do the talking', slug: 'photographer-portfolio-builder' },
    { name: 'Artist Portfolio Website Generator', desc: 'Art that speaks for itself', slug: 'artist-portfolio-website-generator' },
    { name: 'Freelancer Portfolio Builder', desc: 'Win clients with your online presence', slug: 'freelancer-portfolio-builder' },
    { name: 'Creative Portfolio Generator', desc: 'Stand out in creative industries', slug: 'creative-portfolio-generator' },
    { name: 'Student Portfolio Builder', desc: 'Perfect for class projects and internships', slug: 'student-portfolio-builder' },
    { name: 'Minimal Portfolio Generator', desc: 'Clean, focused, professional', slug: 'minimal-portfolio-generator' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
    { name: 'Personal Blog Generator', desc: 'Share your thoughts with the world', slug: 'personal-blog-generator' },
    { name: 'Business Blog Builder', desc: 'Content marketing made simple', slug: 'business-blog-builder' },
    { name: 'Travel Blog Generator', desc: 'Document your adventures beautifully', slug: 'travel-blog-generator' },
    { name: 'Food Blog Builder', desc: 'Recipes, photos, and stories', slug: 'food-blog-builder' },
    { name: 'Tech Blog Generator', desc: 'Share your expertise online', slug: 'tech-blog-generator' },
    { name: 'Fashion Blog Builder', desc: 'Style content that inspires', slug: 'fashion-blog-builder' },
    { name: 'DIY Blog Generator', desc: 'Tutorials and project guides', slug: 'diy-blog-generator' },
  ],
  stores: [
    { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
    { name: 'Online Store Builder for Restaurants', desc: 'Take orders and showcase your menu', slug: 'online-store-builder-for-restaurants' },
    { name: 'Free Online Store Builder', desc: 'Zero fees to get started', slug: 'free-online-store-builder' },
    { name: 'E-commerce Website Generator', desc: 'Full-featured online shop in minutes', slug: 'e-commerce-website-generator' },
    { name: 'Product Page Generator', desc: 'Beautiful product displays', slug: 'product-page-generator' },
    { name: 'Fashion Store Builder', desc: 'Sell clothing and accessories online', slug: 'fashion-store-builder' },
    { name: 'Art Store Generator', desc: 'Sell prints, originals, and merchandise', slug: 'art-store-generator' },
    { name: 'Digital Product Store Builder', desc: 'Sell ebooks, courses, and downloads', slug: 'digital-product-store-builder' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
    { name: 'Creator Link-in-Bio Builder', desc: 'Connect all your platforms', slug: 'creator-link-in-bio-builder' },
    { name: 'Instagram Link-in-Bio Generator', desc: 'Make the most of your bio link', slug: 'instagram-link-in-bio-generator' },
    { name: 'Musician Link-in-Bio Builder', desc: 'Share music, shows, and merch', slug: 'musician-link-in-bio-builder' },
    { name: 'Influencer Link-in-Bio Generator', desc: 'Monetize your following', slug: 'influencer-link-in-bio-generator' },
    { name: 'Artist Link-in-Bio Builder', desc: 'Link fans to everything you do', slug: 'artist-link-in-bio-builder' },
    { name: 'Free Link-in-Bio Generator', desc: 'No cost, all connections', slug: 'free-link-in-bio-generator' },
    { name: 'Link-in-Bio for Podcasters', desc: 'Share episodes and show notes', slug: 'link-in-bio-for-podcasters' },
  ],
}

const CategoryIcon = ({ category }) => {
  const icons = {
    websites: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="32" height="24" rx="2" stroke="#8159BB" strokeWidth="2" fill="none"/>
        <line x1="4" y1="14" x2="36" y2="14" stroke="#8159BB" strokeWidth="2"/>
        <circle cx="8" cy="11" r="1.5" fill="#8159BB"/>
        <circle cx="12" cy="11" r="1.5" fill="#8159BB"/>
        <circle cx="16" cy="11" r="1.5" fill="#8159BB"/>
        <rect x="10" y="18" width="8" height="6" rx="1" fill="#8159BB" opacity="0.3"/>
        <rect x="22" y="18" width="8" height="3" rx="1" fill="#8159BB" opacity="0.3"/>
        <rect x="22" y="23" width="8" height="3" rx="1" fill="#8159BB" opacity="0.3"/>
      </svg>
    ),
    'landing-pages': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="6" width="24" height="28" rx="2" stroke="#8159BB" strokeWidth="2" fill="none"/>
        <line x1="12" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="2"/>
        <line x1="12" y1="18" x2="24" y2="18" stroke="#8159BB" strokeWidth="2" opacity="0.5"/>
        <line x1="12" y1="22" x2="26" y2="22" stroke="#8159BB" strokeWidth="2" opacity="0.5"/>
        <rect x="12" y="26" width="16" height="4" rx="1" fill="#8159BB"/>
      </svg>
    ),
    portfolios: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="28" height="32" rx="2" stroke="#8159BB" strokeWidth="2" fill="none"/>
        <circle cx="20" cy="14" r="5" stroke="#8159BB" strokeWidth="2" fill="none"/>
        <path d="M10 30 Q20 22 30 30" stroke="#8159BB" strokeWidth="2" fill="none"/>
      </svg>
    ),
    blogs: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="28" height="32" rx="2" stroke="#8159BB" strokeWidth="2" fill="none"/>
        <line x1="10" y1="10" x2="30" y2="10" stroke="#8159BB" strokeWidth="2"/>
        <line x1="10" y1="16" x2="28" y2="16" stroke="#8159BB" strokeWidth="2" opacity="0.5"/>
        <line x1="10" y1="20" x2="26" y2="20" stroke="#8159BB" strokeWidth="2" opacity="0.5"/>
        <line x1="10" y1="24" x2="24" y2="24" stroke="#8159BB" strokeWidth="2" opacity="0.5"/>
        <line x1="10" y1="28" x2="20" y2="28" stroke="#8159BB" strokeWidth="2" opacity="0.5"/>
      </svg>
    ),
    stores: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="10" width="28" height="22" rx="2" stroke="#8159BB" strokeWidth="2" fill="none"/>
        <path d="M6 16 L34 16" stroke="#8159BB" strokeWidth="2"/>
        <rect x="12" y="20" width="6" height="6" rx="1" fill="#8159BB" opacity="0.3"/>
        <rect x="22" y="20" width="6" height="6" rx="1" fill="#8159BB" opacity="0.3"/>
        <rect x="12" y="28" width="16" height="2" rx="1" fill="#8159BB" opacity="0.5"/>
      </svg>
    ),
    'link-in-bio': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="14" stroke="#8159BB" strokeWidth="2" fill="none"/>
        <circle cx="14" cy="16" r="2" fill="#8159BB"/>
        <circle cx="26" cy="16" r="2" fill="#8159BB"/>
        <circle cx="20" cy="24" r="2" fill="#8159BB"/>
        <line x1="14" y1="16" x2="20" y2="24" stroke="#8159BB" strokeWidth="1.5"/>
        <line x1="26" y1="16" x2="20" y2="24" stroke="#8159BB" strokeWidth="1.5"/>
        <line x1="14" y1="16" x2="26" y2="16" stroke="#8159BB" strokeWidth="1.5"/>
      </svg>
    ),
  }
  return icons[category] || null
}

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 4 L10 8 L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <line x1="13" y1="13" x2="17" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <line x1="10" y1="4" x2="10" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const MinusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect width="32" height="32" rx="6" fill="#8159BB"/>
    <path d="M8 24V8h4l4 8 4-8h4v16h-3V14l-3.5 7h-3L11 14v10H8z" fill="white"/>
  </svg>
)

const HeroIllustration = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7671FF" stopOpacity="0.1"/>
        <stop offset="100%" stopColor="#CB0C9F" stopOpacity="0.1"/>
      </linearGradient>
    </defs>
    <rect x="50" y="30" width="300" height="220" rx="8" fill="url(#heroGrad)" stroke="#8159BB" strokeWidth="2"/>
    <rect x="70" y="50" width="260" height="30" rx="4" fill="#8159BB" opacity="0.2"/>
    <circle cx="90" cy="65" r="6" fill="#8159BB"/>
    <circle cx="110" cy="65" r="6" fill="#8159BB" opacity="0.6"/>
    <circle cx="130" cy="65" r="6" fill="#8159BB" opacity="0.3"/>
    <rect x="70" y="100" width="120" height="80" rx="4" fill="#8159BB" opacity="0.15"/>
    <rect x="200" y="100" width="130" height="35" rx="4" fill="#8159BB" opacity="0.15"/>
    <rect x="200" y="145" width="130" height="35" rx="4" fill="#8159BB" opacity="0.15"/>
    <rect x="70" y="200" width="260" height="35" rx="4" fill="#8159BB" opacity="0.3"/>
    <circle cx="320" cy="260" r="30" fill="#8159BB" opacity="0.2"/>
    <circle cx="80" cy="270" r="20" fill="#7671FF" opacity="0.2"/>
  </svg>
)

const TopBar = () => (
  <header className="bg-white border-b border-[#E2E4E7]">
    <div className="container h-14 flex items-center">
      <a href="/" className="flex items-center gap-2 font-heading font-bold text-[#2E2E2F]">
        <LogoIcon />
        <span>{strings.en.logo}</span>
      </a>
    </div>
  </header>
)

const Breadcrumb = () => (
  <nav className="bg-white" aria-label="Breadcrumb">
    <div className="container py-3">
      <ol className="flex items-center gap-2 text-sm text-[#636972]">
        <li>
          <a href="/">{strings.en.home}</a>
        </li>
        <li aria-hidden="true">
          <span className="mx-1">{' > '}</span>
        </li>
        <li>
          <span className="text-[#4B5056]">{strings.en.currentPage}</span>
        </li>
      </ol>
    </div>
  </nav>
)

const Hero = () => (
  <section className="section-hero bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#7671FF]/5 to-[#CB0C9F]/5 pointer-events-none"></div>
    <div className="container relative">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="mb-4">
            <span className="block text-[#2E2E2F] text-uppercase">{strings.en.heroLine1}</span>
            <span className="block ai-gradient-text text-uppercase">{strings.en.heroLine2}</span>
          </h1>
          <p className="text-[#636972] text-lg mb-8 max-w-[480px]">{strings.en.heroSubheadline}</p>
          <div className="flex flex-wrap gap-3">
            <a href="/s/ai_site_builder" className="btn btn-primary btn-big">{strings.en.ctaPrimary}</a>
            <a href="#all-generators" className="btn btn-ghost btn-big">{strings.en.ctaSecondary}</a>
          </div>
        </div>
        <div className="hidden lg:flex justify-center">
          <HeroIllustration />
        </div>
      </div>
    </div>
  </section>
)

const FeaturedSection = () => (
  <section className="section bg-[#F4F6F8]">
    <div className="container">
      <h2 className="text-[#4B5056] text-uppercase mb-2 text-center">{strings.en.featuredTitle}</h2>
      <p className="text-[#636972] text-center mb-8">{strings.en.featuredSubtitle}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredGenerators.map((gen) => (
          <a
            key={gen.slug}
            href={`/generators/${gen.slug}`}
            className="card flex flex-col"
          >
            <span className="tag mb-3 self-start">{gen.category}</span>
            <h3 className="font-heading font-bold text-[#2E2E2F] mb-2">{gen.name}</h3>
            <p className="text-[#636972] text-sm">{gen.desc}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
)

const BrowseCategory = () => (
  <section className="section bg-white">
    <div className="container">
      <h2 className="text-[#4B5056] text-uppercase mb-8 text-center">{strings.en.browseTitle}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.slug}`}
            className="card flex flex-col items-start group"
          >
            <div className="mb-4">
              <CategoryIcon category={cat.id} />
            </div>
            <h3 className="font-heading font-bold text-[#2E2E2F] text-uppercase mb-2">{cat.name}</h3>
            <p className="text-[#636972] text-sm mb-4 flex-grow">{cat.desc}</p>
            <div className="flex items-center gap-2 text-[#8159BB] group-hover:gap-3 transition-all">
              <span className="text-sm font-semibold">Explore</span>
              <ArrowIcon />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
)

const GeneratorCard = ({ name, desc, slug }) => (
  <a href={`/generators/${slug}`} className="card flex flex-col">
    <h4 className="font-heading font-bold text-[#2E2E2F] mb-2">{name}</h4>
    <p className="text-[#636972] text-sm">{desc}</p>
  </a>
)

const CategorySubsection = ({ category, generators, searchQuery }) => {
  const [showAll, setShowAll] = useState(false)
  const initialCount = 6
  const hasMore = generators.length > initialCount
  const visibleGens = showAll ? generators : generators.slice(0, initialCount)
  
  if (searchQuery) {
    const query = searchQuery.toLowerCase()
    const matches = generators.filter(g => 
      g.name.toLowerCase().includes(query) ||
      g.desc.toLowerCase().includes(query)
    )
    if (matches.length === 0) return null
  }
  
  return (
    <div className="category-subsection" data-category={category.id}>
      <h3 id={category.slug} className="text-[#4B5056] text-uppercase mb-2">{category.name}</h3>
      <p className="text-[#636972] text-sm mb-4">{category.desc}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleGens.map((gen) => (
          <GeneratorCard key={gen.slug} {...gen} />
        ))}
      </div>
      {hasMore && !searchQuery && (
        <div className="mt-4">
          <button
            className="btn btn-ghost text-sm"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            aria-controls={`${category.slug}-cards`}
          >
            {showAll ? strings.en.showLess : `${strings.en.showAll} ${generators.length} generators`}
          </button>
        </div>
      )}
    </div>
  )
}

const AllGenerators = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [resultCount, setResultCount] = useState(0)
  
  const totalGenerators = Object.values(allGenerators).flat().length
  
  useEffect(() => {
    if (!searchQuery) {
      setResultCount(totalGenerators)
      return
    }
    const query = searchQuery.toLowerCase()
    const count = Object.values(allGenerators).flat().filter(g => 
      g.name.toLowerCase().includes(query) ||
      g.desc.toLowerCase().includes(query)
    ).length
    setResultCount(count)
  }, [searchQuery])
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }
  
  const clearSearch = () => {
    setSearchQuery('')
  }
  
  return (
    <section id="all-generators" className="section bg-[#F4F6F8]">
      <div className="container">
        <h2 className="text-[#4B5056] text-uppercase mb-2 text-center">{strings.en.allGeneratorsTitle}</h2>
        <p className="text-[#636972] text-center mb-8">{strings.en.allGeneratorsSubtitle}</p>
        
        <div className="max-w-[480px] mx-auto mb-8">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#636972]">
              <SearchIcon />
            </span>
            <input
              type="search"
              value={searchQuery}
              onChange={handleSearch}
              placeholder={strings.en.searchPlaceholder}
              aria-label={strings.en.searchPlaceholder}
              className="w-full h-11 pl-10 pr-4 border border-[#C6C9CD] rounded text-[#636972] bg-white focus:outline-none focus:border-[#8159BB]"
            />
          </div>
          {searchQuery && (
            <p className="text-sm text-[#636972] mt-2 text-center">
              {resultCount} generator{resultCount !== 1 ? 's' : ''} match{resultCount === 1 ? 'es' : ''}
            </p>
          )}
        </div>
        
        {searchQuery && resultCount === 0 && (
          <div className="text-center py-8">
            <p className="text-[#636972] mb-4">{strings.en.noResults}</p>
            <button onClick={clearSearch} className="btn btn-ghost mb-4">{strings.en.clearSearch}</button>
            <p className="text-sm">
              {strings.en.cantFind}{' '}
              <a href="/s/ai_site_builder" className="text-[#8159BB] underline">AI builder</a>.
            </p>
          </div>
        )}
        
        <div className="space-y-12">
          {categories.map((cat) => (
            <CategorySubsection
              key={cat.id}
              category={cat}
              generators={allGenerators[cat.id] || []}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const HowItWorks = () => (
  <section className="section bg-white">
    <div className="container">
      <h2 className="text-[#4B5056] text-uppercase mb-10 text-center">{strings.en.howItWorksTitle}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { num: '1', title: strings.en.step1Title, desc: strings.en.step1Desc },
          { num: '2', title: strings.en.step2Title, desc: strings.en.step2Desc },
          { num: '3', title: strings.en.step3Title, desc: strings.en.step3Desc },
        ].map((step) => (
          <div key={step.num} className="text-center">
            <div className="w-12 h-12 rounded-full ai-gradient flex items-center justify-center text-white font-heading font-bold text-xl mx-auto mb-4">
              {step.num}
            </div>
            <h3 className="font-heading font-bold text-[#2E2E2F] text-uppercase mb-2">{step.title}</h3>
            <p className="text-[#636972]">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const WhyStrikingly = () => (
  <section className="section bg-[#F4F6F8]">
    <div className="container">
      <h2 className="text-[#4B5056] text-uppercase mb-10 text-center">{strings.en.whyTitle}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            icon: (
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <circle cx="20" cy="20" r="14" stroke="#8159BB" strokeWidth="2"/>
                <path d="M14 20 L18 24 L26 16" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ),
            title: strings.en.why1Title, 
            desc: strings.en.why1Desc 
          },
          { 
            icon: (
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="2"/>
                <line x1="8" y1="12" x2="32" y2="12" stroke="#8159BB" strokeWidth="2"/>
                <rect x="12" y="16" width="16" height="16" rx="2" stroke="#8159BB" strokeWidth="2"/>
              </svg>
            ),
            title: strings.en.why2Title, 
            desc: strings.en.why2Desc 
          },
          { 
            icon: (
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <circle cx="20" cy="20" r="14" stroke="#8159BB" strokeWidth="2"/>
                <text x="20" y="25" textAnchor="middle" fill="#8159BB" fontSize="16" fontWeight="bold">$</text>
              </svg>
            ),
            title: strings.en.why3Title, 
            desc: strings.en.why3Desc 
          },
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="font-heading font-bold text-[#2E2E2F] text-uppercase mb-2">{item.title}</h3>
            <p className="text-[#636972]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const FAQItem = ({ question, answer, isOpen, onToggle, id }) => (
  <div className="border-b border-[#E2E4E7]">
    <button
      className="w-full py-4 flex items-center justify-between text-left"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${id}`}
    >
      <span className="font-heading font-bold text-[#2E2E2F] pr-4">{question}</span>
      <span className="text-[#8159BB] flex-shrink-0">
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </span>
    </button>
    <div 
      id={`faq-answer-${id}`}
      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-4' : 'max-h-0'}`}
      role="region"
    >
      <p className="text-[#636972]">{answer}</p>
    </div>
  </div>
)

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)
  
  const faqs = [
    { q: strings.en.faq1Q, a: strings.en.faq1A },
    { q: strings.en.faq2Q, a: strings.en.faq2A },
    { q: strings.en.faq3Q, a: strings.en.faq3A },
    { q: strings.en.faq4Q, a: strings.en.faq4A },
    { q: strings.en.faq5Q, a: strings.en.faq5A },
    { q: strings.en.faq6Q, a: strings.en.faq6A },
  ]
  
  return (
    <section className="section bg-white">
      <div className="container max-w-[800px]">
        <h2 className="text-[#4B5056] text-uppercase mb-8 text-center">{strings.en.faqTitle}</h2>
        <div>
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              id={idx}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const ClosingCTA = () => (
  <section className="section bg-white border-t border-[#E2E4E7]">
    <div className="container text-center">
      <h2 className="text-[#2E2E2F] text-uppercase mb-4">{strings.en.closingTitle}</h2>
      <p className="text-[#636972] mb-6 max-w-[400px] mx-auto">{strings.en.closingSub}</p>
      <a href="/s/ai_site_builder" className="btn btn-primary btn-big">
        {strings.en.closingCta}
      </a>
    </div>
  </section>
)

const Footer = () => (
  <footer className="bg-[#2E2E2F] py-12">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="font-heading font-bold text-white text-uppercase mb-4">{strings.en.footerProducts}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/templates" className="text-[#636972] hover:text-white">Templates</a></li>
            <li><a href="/pricing" className="text-[#636972] hover:text-white">Pricing</a></li>
            <li><a href="/generators" className="text-[#636972] hover:text-white">AI Generators</a></li>
            <li><a href="/blog" className="text-[#636972] hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-white text-uppercase mb-4">{strings.en.footerCompany}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="text-[#636972] hover:text-white">About</a></li>
            <li><a href="/careers" className="text-[#636972] hover:text-white">Careers</a></li>
            <li><a href="/press" className="text-[#636972] hover:text-white">Press</a></li>
            <li><a href="/contact" className="text-[#636972] hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-white text-uppercase mb-4">{strings.en.footerSupport}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/support" className="text-[#636972] hover:text-white">Help Center</a></li>
            <li><a href="/community" className="text-[#636972] hover:text-white">Community</a></li>
            <li><a href="/developers" className="text-[#636972] hover:text-white">Developers</a></li>
            <li><a href="/status" className="text-[#636972] hover:text-white">Status</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-white text-uppercase mb-4">{strings.en.footerLegal}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/terms" className="text-[#636972] hover:text-white">Terms</a></li>
            <li><a href="/privacy" className="text-[#636972] hover:text-white">Privacy</a></li>
            <li><a href="/cookies" className="text-[#636972] hover:text-white">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#4B5056] pt-8 text-center">
        <p className="text-[#636972] text-sm">{strings.en.footerCopyright}</p>
      </div>
    </div>
  </footer>
)

function App() {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main>
        <Hero />
        <FeaturedSection />
        <BrowseCategory />
        <AllGenerators />
        <HowItWorks />
        <WhyStrikingly />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
