import React, { useState, useEffect } from 'react'
import './App.css'

// i18n strings - ready for additional locales
const strings = {
  en: {
    // Top bar
    logo: 'strikingly AI',
    
    // Breadcrumb
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    
    // Hero
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSubhead: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    ctaStartBuilding: 'START BUILDING - IT\'S FREE',
    ctaBrowse: 'BROWSE GENERATORS',
    
    // Featured
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubhead: 'A few common starting points.',
    
    // Browse by Category
    browseHeading: 'BROWSE BY CATEGORY',
    browseWebsites: 'Websites',
    browseWebsitesDesc: 'AI-built business and personal sites for any goal.',
    browseLanding: 'Landing Pages',
    browseLandingDesc: 'Single-page sites built to convert visitors fast.',
    browsePortfolios: 'Portfolios',
    browsePortfoliosDesc: 'Showcase your work with a clean, focused site.',
    browseBlogs: 'Blogs',
    browseBlogsDesc: 'Publish-ready blogs with built-in SEO basics.',
    browseStores: 'Online Stores',
    browseStoresDesc: 'Sell products online with payments built in.',
    browseLinkInBio: 'Link-in-Bio',
    browseLinkInBioDesc: 'One link, all your places. Made for creators.',
    
    // All Generators
    allHeading: 'ALL GENERATORS',
    allSubhead: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    resultCount: (count) => `${count} generators match`,
    emptyState: 'No generators match your search.',
    emptyStateCta: 'Can\'t find it? Start with our AI builder.',
    showAll: (count) => `Show all ${count} generators`,
    showLess: 'Show less',
    
    // Category section descriptions
    catWebsitesDesc: 'Full websites for businesses, creators, and personal projects.',
    catLandingDesc: 'Focused pages designed to capture leads and drive action.',
    catPortfoliosDesc: 'Clean showcases for creative work and professional profiles.',
    catBlogsDesc: 'Ready-to-publish blogs with simple content tools.',
    catStoresDesc: 'E-commerce sites with product listings and checkout.',
    catLinkInBioDesc: 'Compact hubs that link out to all your profiles and pages.',
    
    // How it works
    howHeading: 'HOW IT WORKS',
    step1Title: 'PICK A GENERATOR',
    step1Desc: 'Browse by category or search to find one that fits your goal.',
    step2Title: 'DESCRIBE YOUR SITE',
    step2Desc: 'Tell our AI builder about your business in a sentence or two.',
    step3Title: 'GENERATE AND PUBLISH',
    step3Desc: 'Get a fully built site in seconds. Customize anything, then go live.',
    
    // Why Strikingly
    whyHeading: 'WHY STRIKINGLY',
    why1Title: 'LIVE IN SECONDS',
    why1Desc: 'Describe your site, we build it. No setup, no learning curve.',
    why2Title: 'MOBILE BY DEFAULT',
    why2Desc: 'Every generator produces responsive sites that work on any device.',
    why3Title: 'FREE TO START',
    why3Desc: 'Generate, customize, and publish without a credit card.',
    
    // FAQ
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    faq1Q: 'What is an AI site generator?',
    faq1A: 'An AI site generator is a tool that creates a complete website based on a short description you provide. Instead of starting from a blank page or a rigid template, you describe your business or project and the AI assembles pages, layout, and content for you.',
    faq2Q: 'How is a generator different from a template?',
    faq2A: 'Templates are pre-designed layouts you fill in manually. Generators use AI to create a site tailored to your description, including suggested text and structure. You can still edit everything afterward.',
    faq3Q: 'Are these generators free to use?',
    faq3A: 'Yes. You can generate, customize, and publish a site without entering a credit card. Paid plans are available if you need additional features or a custom domain.',
    faq4Q: 'What kinds of sites can I build?',
    faq4A: 'You can build business sites, landing pages, portfolios, blogs, online stores, link-in-bio pages, and more. Each generator is tuned for a specific type of site or audience.',
    faq5Q: 'Can I customize what the generator produces?',
    faq5A: 'Absolutely. After the AI builds your site, you can edit text, swap images, rearrange sections, add pages, and change the design using the standard Strikingly editor.',
    faq6Q: 'Do generated sites work on mobile?',
    faq6A: 'Yes. Every site produced by a generator is responsive by default and will adapt to phones, tablets, and desktop screens without extra work.',
    
    // Closing CTA
    closingHeadline: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    
    // Footer
    footerAbout: 'About',
    footerPricing: 'Pricing',
    footerTemplates: 'Templates',
    footerSupport: 'Support',
    footerBlog: 'Blog',
    footerTerms: 'Terms',
    footerPrivacy: 'Privacy',
    footerCopyright: '© 2026 Strikingly, Inc. All rights reserved.',
  }
}

const t = strings.en

// Sample data for Featured Generators (9 items, mixed categories)
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

// Browse by Category cards
const categoryCards = [
  { id: 'websites', name: t.browseWebsites, desc: t.browseWebsitesDesc, icon: 'globe' },
  { id: 'landing-pages', name: t.browseLanding, desc: t.browseLandingDesc, icon: 'target' },
  { id: 'portfolios', name: t.browsePortfolios, desc: t.browsePortfoliosDesc, icon: 'image' },
  { id: 'blogs', name: t.browseBlogs, desc: t.browseBlogsDesc, icon: 'edit' },
  { id: 'stores', name: t.browseStores, desc: t.browseStoresDesc, icon: 'shopping' },
  { id: 'link-in-bio', name: t.browseLinkInBio, desc: t.browseLinkInBioDesc, icon: 'link' },
]

// All Generators data - 8-12 per category
const allGeneratorsData = {
  websites: {
    id: 'websites',
    heading: t.browseWebsites,
    desc: t.catWebsitesDesc,
    items: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
      { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
      { name: 'Wedding Website Generator', desc: 'Share your day with guests', slug: 'wedding-website-generator' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
      { name: 'Free Website Builder for Photographers', desc: 'Showcase your work without code', slug: 'free-website-builder-for-photographers' },
      { name: 'AI Website for Yoga Instructors', desc: 'Classes, pricing, and booking in one', slug: 'ai-website-for-yoga-instructors' },
      { name: 'No-Code Website Builder', desc: 'Launch a site in minutes, no tech skills', slug: 'no-code-website-builder' },
      { name: 'Beautiful Business Website Generator', desc: 'Professional look, zero design work', slug: 'beautiful-business-website-generator' },
      { name: 'Personal Website Builder', desc: 'Your story, your way, online fast', slug: 'personal-website-builder' },
      { name: 'AI Website for Coaches', desc: 'Programs, testimonials, and sign-ups', slug: 'ai-website-for-coaches' },
    ]
  },
  'landing-pages': {
    id: 'landing-pages',
    heading: t.browseLanding,
    desc: t.catLandingDesc,
    items: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
      { name: 'Product Launch Landing Page', desc: 'Announce and sell your new product', slug: 'product-launch-landing-page' },
      { name: 'Event Registration Page Builder', desc: 'Collect sign-ups for your next event', slug: 'event-registration-page-builder' },
      { name: 'Lead Capture Landing Page', desc: 'Turn visitors into subscribers fast', slug: 'lead-capture-landing-page' },
      { name: 'Free Landing Page Generator', desc: 'High-converting pages, no cost to start', slug: 'free-landing-page-generator' },
      { name: 'AI Landing Page for SaaS', desc: 'Explain your product, drive trials', slug: 'ai-landing-page-for-saas' },
      { name: 'One-Page Sales Funnel', desc: 'Simple path from visitor to buyer', slug: 'one-page-sales-funnel' },
      { name: 'Campaign Landing Page Builder', desc: 'Promote offers with focused pages', slug: 'campaign-landing-page-builder' },
      { name: 'AI Landing Page for Consultants', desc: 'Position your services, win clients', slug: 'ai-landing-page-for-consultants' },
      { name: 'Waitlist Landing Page', desc: 'Build anticipation before you launch', slug: 'waitlist-landing-page' },
    ]
  },
  portfolios: {
    id: 'portfolios',
    heading: t.browsePortfolios,
    desc: t.catPortfoliosDesc,
    items: [
      { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', desc: 'Showcase projects with style', slug: 'portfolio-generator-for-designers' },
      { name: 'AI Portfolio for Photographers', desc: 'Galleries that look pro, built fast', slug: 'ai-portfolio-for-photographers' },
      { name: 'Artist Portfolio Builder', desc: 'Present your work, tell your story', slug: 'artist-portfolio-builder' },
      { name: 'Developer Portfolio Generator', desc: 'Code projects, clean and clear', slug: 'developer-portfolio-generator' },
      { name: 'Freelancer Portfolio Maker', desc: 'One site for all your client work', slug: 'freelancer-portfolio-maker' },
      { name: 'AI Portfolio for Illustrators', desc: 'Visual-first, easy to update', slug: 'ai-portfolio-for-illustrators' },
      { name: 'Architecture Portfolio Builder', desc: 'Projects and process, beautifully shown', slug: 'architecture-portfolio-builder' },
      { name: 'Writer Portfolio Generator', desc: 'Clips, bio, and contact in one place', slug: 'writer-portfolio-generator' },
      { name: 'No-Code Portfolio Site', desc: 'Launch a portfolio without code', slug: 'no-code-portfolio-site' },
    ]
  },
  blogs: {
    id: 'blogs',
    heading: t.browseBlogs,
    desc: t.catBlogsDesc,
    items: [
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Builder for Food Writers', desc: 'Recipes, stories, and photos together', slug: 'ai-blog-builder-for-food-writers' },
      { name: 'Travel Blog Generator', desc: 'Journals, guides, and itineraries', slug: 'travel-blog-generator' },
      { name: 'Personal Blog Builder', desc: 'Your voice, your topics, your site', slug: 'personal-blog-builder' },
      { name: 'AI Blog for Coaches', desc: 'Share insights, grow your audience', slug: 'ai-blog-for-coaches' },
      { name: 'Free Blog Generator', desc: 'Start writing, no hosting hassle', slug: 'free-blog-generator' },
      { name: 'Tech Blog Builder', desc: 'Tutorials, reviews, and updates', slug: 'tech-blog-builder' },
      { name: 'Lifestyle Blog Generator', desc: 'Stories, tips, and inspiration', slug: 'lifestyle-blog-generator' },
      { name: 'AI Blog for Small Businesses', desc: 'News, updates, and thought leadership', slug: 'ai-blog-for-small-businesses' },
      { name: 'Newsletter-Style Blog Maker', desc: 'Posts that feel like emails', slug: 'newsletter-style-blog-maker' },
    ]
  },
  stores: {
    id: 'stores',
    heading: t.browseStores,
    desc: t.catStoresDesc,
    items: [
      { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
      { name: 'Online Store Builder for Restaurants', desc: 'Take orders, show menus, get paid', slug: 'online-store-builder-for-restaurants' },
      { name: 'AI Store for Handmade Goods', desc: 'Sell crafts with beautiful pages', slug: 'ai-store-for-handmade-goods' },
      { name: 'Free Online Store Generator', desc: 'Launch a shop, no monthly fees to start', slug: 'free-online-store-generator' },
      { name: 'AI Store for Fashion Brands', desc: 'Collections, sizes, and checkout', slug: 'ai-store-for-fashion-brands' },
      { name: 'Digital Products Store Builder', desc: 'Sell downloads, courses, and files', slug: 'digital-products-store-builder' },
      { name: 'AI Store for Jewelry Makers', desc: 'Showcase pieces, sell directly', slug: 'ai-store-for-jewelry-makers' },
      { name: 'Marketplace-Style Store', desc: 'Multiple sellers, one storefront', slug: 'marketplace-style-store' },
      { name: 'Subscription Box Store Builder', desc: 'Recurring orders made simple', slug: 'subscription-box-store-builder' },
      { name: 'AI Store for Local Makers', desc: 'Local pickup and shipping options', slug: 'ai-store-for-local-makers' },
    ]
  },
  'link-in-bio': {
    id: 'link-in-bio',
    heading: t.browseLinkInBio,
    desc: t.catLinkInBioDesc,
    items: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
      { name: 'AI Link-in-Bio for Creators', desc: 'Link everything in one clean page', slug: 'ai-link-in-bio-for-creators' },
      { name: 'Free Link-in-Bio Builder', desc: 'No cost, instant setup', slug: 'free-link-in-bio-builder' },
      { name: 'Link-in-Bio for Musicians', desc: 'Streams, merch, shows, and more', slug: 'link-in-bio-for-musicians' },
      { name: 'AI Link-in-Bio for Influencers', desc: 'Sponsors, products, and profiles', slug: 'ai-link-in-bio-for-influencers' },
      { name: 'Link-in-Bio for Small Businesses', desc: 'Hours, menu, booking, socials', slug: 'link-in-bio-for-small-businesses' },
      { name: 'Simple Link Page Generator', desc: 'Minimal design, maximum clarity', slug: 'simple-link-page-generator' },
      { name: 'AI Link-in-Bio for Podcasters', desc: 'Episodes, guests, and support links', slug: 'ai-link-in-bio-for-podcasters' },
      { name: 'Link-in-Bio for Nonprofits', desc: 'Donate, volunteer, and learn more', slug: 'link-in-bio-for-nonprofits' },
      { name: 'Branded Link-in-Bio Maker', desc: 'Your colors, your logo, your links', slug: 'branded-link-in-bio-maker' },
    ]
  }
}

// Category icons as inline SVGs
const CategoryIcon = ({ type, className = '' }) => {
  const icons = {
    globe: (
      <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    target: (
      <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    image: (
      <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    edit: (
      <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    shopping: (
      <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    link: (
      <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  }
  return icons[type] || icons.globe
}

// Small thumbnail icon for directory cards (shared per category)
const CardThumbIcon = ({ type, className = '' }) => {
  const icons = {
    websites: (
      <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    'landing-pages': (
      <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    portfolios: (
      <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    blogs: (
      <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    stores: (
      <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    'link-in-bio': (
      <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  }
  return icons[type] || icons.websites
}

// FAQ data
const faqItems = [
  { q: t.faq1Q, a: t.faq1A },
  { q: t.faq2Q, a: t.faq2A },
  { q: t.faq3Q, a: t.faq3A },
  { q: t.faq4Q, a: t.faq4A },
  { q: t.faq5Q, a: t.faq5A },
  { q: t.faq6Q, a: t.faq6A },
]

// Helper to create slug from name (for links)
const slugify = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

// Main App Component
function App() {
  // Search state
  const [searchQuery, setSearchQuery] = useState('')
  
  // Show all state per category (progressive enhancement)
  const [showAll, setShowAll] = useState({})
  
  // FAQ open state (first one open by default)
  const [openFaqs, setOpenFaqs] = useState({ 0: true })

  // Get all generators as flat list for search
  const allGeneratorsFlat = React.useMemo(() => {
    const flat = []
    Object.keys(allGeneratorsData).forEach(catKey => {
      const cat = allGeneratorsData[catKey]
      cat.items.forEach(item => {
        flat.push({
          ...item,
          category: cat.heading,
          categoryKey: catKey
        })
      })
    })
    return flat
  }, [])

  // Filter generators based on search
  const filteredGenerators = React.useMemo(() => {
    if (!searchQuery.trim()) {
      return allGeneratorsData
    }
    
    const q = searchQuery.toLowerCase().trim()
    const result = {}
    
    Object.keys(allGeneratorsData).forEach(catKey => {
      const cat = allGeneratorsData[catKey]
      const matching = cat.items.filter(item => 
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        cat.heading.toLowerCase().includes(q)
      )
      if (matching.length > 0) {
        result[catKey] = { ...cat, items: matching }
      }
    })
    
    return result
  }, [searchQuery])

  // Count visible generators
  const visibleCount = React.useMemo(() => {
    return Object.values(filteredGenerators).reduce((sum, cat) => sum + cat.items.length, 0)
  }, [filteredGenerators])

  // Toggle show all for a category
  const toggleShowAll = (catKey) => {
    setShowAll(prev => ({
      ...prev,
      [catKey]: !prev[catKey]
    }))
  }

  // Toggle FAQ
  const toggleFaq = (index) => {
    setOpenFaqs(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  // Clear search
  const clearSearch = () => {
    setSearchQuery('')
  }

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  // Get visible items for a category (with show all logic)
  const getVisibleItems = (catKey, items) => {
    const isShowingAll = showAll[catKey]
    // Show first 6 by default, all if toggled
    if (isShowingAll) return items
    return items.slice(0, 6)
  }

  // Check if category has more items to show
  const hasMoreItems = (items) => items.length > 6

  // Render category icon for browse cards
  const renderCategoryIcon = (iconType) => {
    return <CategoryIcon type={iconType} className="category-icon" />
  }

  return (
    <div className="min-h-screen bg-white text-[#636972]">
      {/* Section 0: Top Bar */}
      <header className="top-bar">
        <div className="container">
          <a href="/" className="logo" aria-label="Strikingly AI home">
            {t.logo}
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container">
        <div className="breadcrumb">
          <ol className="flex items-center">
            <li>
              <a href="/">{t.breadcrumbHome}</a>
            </li>
            <li>
              <span className="breadcrumb-separator" aria-hidden="true">/</span>
              <span aria-current="page">{t.breadcrumbCurrent}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Section 2: Hero */}
      <section className="hero-section hero-wash">
        <div className="container">
          <div className="hero-grid">
            {/* Left column */}
            <div>
              <h1>
                <span className="hero-h1-line1 block">{t.heroH1Line1}</span>
                <span className="hero-h1-line2 block">{t.heroH1Line2}</span>
              </h1>
              <p className="hero-subhead">{t.heroSubhead}</p>
              <div className="hero-ctas">
                <a 
                  href="/s/ai_site_builder" 
                  className="btn btn-primary btn-large"
                >
                  {t.ctaStartBuilding}
                </a>
                <a 
                  href="#all-generators" 
                  className="btn btn-secondary btn-large"
                >
                  {t.ctaBrowse}
                </a>
              </div>
            </div>
            
            {/* Right column - inline SVG illustration */}
            <div className="hero-illustration flex justify-center md:justify-end">
              <svg 
                className="illustration" 
                width="420" 
                height="280" 
                viewBox="0 0 420 280" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Soft purple line-art website mockup */}
                <rect x="40" y="20" width="340" height="240" rx="8" stroke="#8159BB" strokeWidth="2" fill="none" opacity="0.15" />
                <rect x="60" y="40" width="300" height="40" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
                <rect x="60" y="95" width="140" height="80" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
                <rect x="220" y="95" width="140" height="35" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
                <rect x="220" y="140" width="140" height="35" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
                <rect x="60" y="190" width="300" height="30" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
                {/* Decorative lines */}
                <line x1="80" y1="60" x2="200" y2="60" stroke="#8159BB" strokeWidth="1" opacity="0.4" />
                <line x1="80" y1="70" x2="240" y2="70" stroke="#8159BB" strokeWidth="1" opacity="0.4" />
                <circle cx="340" cy="60" r="6" stroke="#8159BB" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="section" style={{ backgroundColor: '#F4F6F8' }}>
        <div className="container">
          <h2 className="mb-2">{t.featuredHeading}</h2>
          <p className="text-sm text-[#636972] mb-6">{t.featuredSubhead}</p>
          
          <div className="grid-3">
            {featuredGenerators.map((gen, index) => (
              <a 
                key={index} 
                href={`/generators/${gen.slug}`}
                className="card featured-card"
              >
                <div className="featured-name">{gen.name}</div>
                <div className="featured-desc">{gen.desc}</div>
                <span className="tag">{gen.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="section">
        <div className="container">
          <h2 className="mb-6">{t.browseHeading}</h2>
          
          <div className="grid-3">
            {categoryCards.map((cat, index) => (
              <a 
                key={index} 
                href={`#${cat.id}`}
                className="card category-card"
              >
                {renderCategoryIcon(cat.icon)}
                <div className="category-name">{cat.name}</div>
                <div className="category-desc">{cat.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators Directory */}
      <section id="all-generators" className="section" style={{ backgroundColor: '#F4F6F8' }}>
        <div className="container">
          <h2 className="mb-2">{t.allHeading}</h2>
          <p className="text-sm text-[#636972] mb-6">{t.allSubhead}</p>
          
          {/* Search input */}
          <div className="mb-4">
            <label htmlFor="generator-search" className="sr-only">{t.searchLabel}</label>
            <div className="search-wrapper">
              <svg 
                className="search-icon" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                id="generator-search"
                type="text"
                className="search-input"
                placeholder={t.searchPlaceholder}
                aria-label={t.searchLabel}
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <div className="result-count">
              {t.resultCount(visibleCount)}
            </div>
          </div>

          {/* Empty state */}
          {Object.keys(filteredGenerators).length === 0 && (
            <div className="empty-state">
              <p className="empty-state-text">{t.emptyState}</p>
              <a href="/s/ai_site_builder" className="empty-state-link">{t.emptyStateCta}</a>
              <button 
                onClick={clearSearch} 
                className="btn btn-secondary ml-4"
                style={{ height: '32px', padding: '6px 12px', fontSize: '12px' }}
              >
                Clear search
              </button>
            </div>
          )}

          {/* Category subsections */}
          {Object.keys(filteredGenerators).map((catKey) => {
            const cat = filteredGenerators[catKey]
            const visibleItems = getVisibleItems(catKey, cat.items)
            const isExpanded = showAll[catKey] || false
            const canToggle = hasMoreItems(cat.items)
            
            return (
              <div key={catKey} id={cat.id} className="mb-8">
                <h3 className="mb-1">{cat.heading}</h3>
                <p className="text-sm text-[#636972] mb-4">{cat.desc}</p>
                
                <div className="grid-3">
                  {visibleItems.map((item, idx) => (
                    <a 
                      key={idx} 
                      href={`/generators/${item.slug}`}
                      className="card gen-card"
                    >
                      <div className="gen-card-thumb">
                        <CardThumbIcon type={catKey} />
                      </div>
                      <div className="gen-card-name">{item.name}</div>
                      <div className="gen-card-desc">{item.desc}</div>
                    </a>
                  ))}
                </div>

                {/* Show all toggle - progressive enhancement */}
                {canToggle && (
                  <button
                    className="show-all-btn"
                    onClick={() => toggleShowAll(catKey)}
                    aria-expanded={isExpanded}
                    aria-controls={`cat-${catKey}-list`}
                  >
                    {isExpanded ? t.showLess : t.showAll(cat.items.length)}
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="section">
        <div className="container">
          <h2 className="mb-8 text-center">{t.howHeading}</h2>
          
          <div className="grid-3">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-title">{t.step1Title}</div>
              <p className="step-desc">{t.step1Desc}</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-title">{t.step2Title}</div>
              <p className="step-desc">{t.step2Desc}</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-title">{t.step3Title}</div>
              <p className="step-desc">{t.step3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="section" style={{ backgroundColor: '#F4F6F8' }}>
        <div className="container">
          <h2 className="mb-8 text-center">{t.whyHeading}</h2>
          
          <div className="grid-3">
            <div className="why-item">
              <svg className="why-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div className="why-title">{t.why1Title}</div>
              <p className="why-desc">{t.why1Desc}</p>
            </div>
            <div className="why-item">
              <svg className="why-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12" y2="18" />
              </svg>
              <div className="why-title">{t.why2Title}</div>
              <p className="why-desc">{t.why2Desc}</p>
            </div>
            <div className="why-item">
              <svg className="why-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <div className="why-title">{t.why3Title}</div>
              <p className="why-desc">{t.why3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="section">
        <div className="container">
          <h2 className="mb-6">{t.faqHeading}</h2>
          
          <div className="max-w-3xl">
            {faqItems.map((item, index) => {
              const isOpen = openFaqs[index] || false
              return (
                <div key={index} className="border-b border-[#E2E4E7]">
                  <button
                    className="faq-button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{item.q}</span>
                    <span aria-hidden="true" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                      ↓
                    </span>
                  </button>
                  <div 
                    id={`faq-answer-${index}`}
                    className="faq-content"
                    aria-hidden={!isOpen}
                  >
                    <div className="faq-answer">{item.a}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="closing-cta">
        <div className="container">
          <h2 className="closing-headline">{t.closingHeadline}</h2>
          <p className="closing-sub">{t.closingSub}</p>
          <a 
            href="/s/ai_site_builder" 
            className="btn btn-primary btn-large inline-flex"
          >
            {t.closingCta}
          </a>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="footer">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <div className="footer-logo">Strikingly</div>
            </div>
            <div>
              <div className="footer-col-title">{t.footerAbout}</div>
              <a href="/about" className="footer-link">{t.footerAbout}</a>
              <a href="/blog" className="footer-link">{t.footerBlog}</a>
            </div>
            <div>
              <div className="footer-col-title">{t.footerPricing}</div>
              <a href="/pricing" className="footer-link">{t.footerPricing}</a>
              <a href="/templates" className="footer-link">{t.footerTemplates}</a>
            </div>
            <div>
              <div className="footer-col-title">{t.footerSupport}</div>
              <a href="/support" className="footer-link">{t.footerSupport}</a>
              <a href="/blog" className="footer-link">{t.footerBlog}</a>
            </div>
            <div>
              <div className="footer-col-title">Legal</div>
              <a href="/terms" className="footer-link">{t.footerTerms}</a>
              <a href="/privacy" className="footer-link">{t.footerPrivacy}</a>
            </div>
          </div>
          <div className="footer-bottom">
            {t.footerCopyright}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
