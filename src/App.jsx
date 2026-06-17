import { useState, useEffect, useRef } from 'react'
import './App.css'

// i18n strings - all user-visible text in one place
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
    heroSubheadline: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    heroCtaPrimary: 'START BUILDING - IT\'S FREE',
    heroCtaSecondary: 'BROWSE GENERATORS',
    // Featured
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',
    // Browse by category
    browseHeading: 'BROWSE BY CATEGORY',
    // All generators
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    searchResults: (count) => `${count} generator${count !== 1 ? 's' : ''} match`,
    noResults: 'No generators match your search.',
    clearSearch: 'Clear search',
    cantFindIt: 'Can\'t find it? Start with our AI builder.',
    showAll: (count) => `Show all ${count} generators`,
    showLess: 'Show less',
    // How it works
    howItWorksHeading: 'HOW IT WORKS',
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
    faq1A: 'An AI site generator is a tool that uses artificial intelligence to create a complete website from a simple description. Instead of choosing a template and manually filling in content, you tell the AI what kind of site you need, and it generates the layout, copy, and structure automatically. Strikingly\'s AI generators are designed to get you from idea to live site in minutes, with no coding or design experience required.',
    faq2Q: 'How is a generator different from a template?',
    faq2A: 'A template is a pre-designed layout that you customize yourself. You pick one that looks close to what you want, then replace placeholder text and images with your own content. A generator goes further: it creates a unique layout and writes initial copy based on your description. Think of a template as a fill-in-the-blank form, and a generator as a first draft written specifically for your business or project.',
    faq3Q: 'Are these generators free to use?',
    faq3A: 'Yes. You can generate a site, customize it, and publish it on a Strikingly subdomain without entering a credit card. If you want a custom domain, e-commerce features, or advanced analytics, paid plans are available. But the core experience, generating and launching a site, is free to start.',
    faq4Q: 'What kinds of sites can I build?',
    faq4A: 'Strikingly offers generators for a wide range of site types: business websites, portfolios, landing pages, blogs, online stores, wedding sites, restaurant sites, link-in-bio pages, and many more. Each generator is tuned to the specific needs of that site type, so you get relevant sections, layouts, and starter content right away.',
    faq5Q: 'Can I customize what the generator produces?',
    faq5A: 'Absolutely. The generator gives you a complete starting point, but every element is editable. You can change text, swap images, adjust colors and fonts, add or remove sections, and rearrange the layout. Strikingly\'s visual editor makes it easy to fine-tune your site without touching code.',
    faq6Q: 'Do generated sites work on mobile?',
    faq6A: 'Yes. Every site produced by a Strikingly generator is fully responsive by default. The layout, images, and navigation automatically adapt to phones, tablets, and desktops. You can also preview and tweak the mobile view independently to make sure everything looks perfect on every screen size.',
    // Closing CTA
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    // Footer
    footerProduct: 'Product',
    footerFeatures: 'Features',
    footerPricing: 'Pricing',
    footerTemplates: 'Templates',
    footerCompany: 'Company',
    footerAbout: 'About',
    footerBlog: 'Blog',
    footerCareers: 'Careers',
    footerSupport: 'Support',
    footerHelp: 'Help Center',
    footerContact: 'Contact Us',
    footerStatus: 'Status',
    footerLegal: 'Legal',
    footerTerms: 'Terms of Service',
    footerPrivacy: 'Privacy Policy',
    footerCookies: 'Cookie Policy',
    footerCopyright: (year) => `© ${year} Strikingly. All rights reserved.`,
  }
}

// Category definitions
const categories = [
  { id: 'websites', name: 'Websites', slug: 'websites', desc: 'AI-built business and personal sites for any goal.' },
  { id: 'landing-pages', name: 'Landing Pages', slug: 'landing-pages', desc: 'Single-page sites built to convert visitors fast.' },
  { id: 'portfolios', name: 'Portfolios', slug: 'portfolios', desc: 'Showcase your work with a clean, focused site.' },
  { id: 'blogs', name: 'Blogs', slug: 'blogs', desc: 'Publish-ready blogs with built-in SEO basics.' },
  { id: 'stores', name: 'Online Stores', slug: 'stores', desc: 'Sell products online with payments built in.' },
  { id: 'link-in-bio', name: 'Link-in-Bio', slug: 'link-in-bio', desc: 'One link, all your places. Made for creators.' },
]

// Featured generators (9 items, 3x3 grid)
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

// All generators by category (10 per category for "Show all" toggle)
const allGeneratorsByCategory = {
  websites: [
    { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
    { name: 'Free Website Builder for Photographers', desc: 'Stunning galleries, zero setup', slug: 'free-website-builder-photographers' },
    { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
    { name: 'Wedding Website Generator', desc: 'Share your day with guests', slug: 'wedding-website-generator' },
    { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
    { name: 'AI Business Website Maker', desc: 'Professional sites in minutes', slug: 'ai-business-website-maker' },
    { name: 'No-Code Website Builder', desc: 'Build without touching code', slug: 'no-code-website-builder' },
    { name: 'Beautiful Website Generator', desc: 'Design-quality sites, instantly', slug: 'beautiful-website-generator' },
    { name: 'Free Website Builder for Yoga Instructors', desc: 'Class schedules, bookings, done', slug: 'free-website-builder-yoga' },
    { name: 'AI Personal Website Generator', desc: 'Your story, beautifully told', slug: 'ai-personal-website-generator' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
    { name: 'Free Landing Page Generator', desc: 'High-converting pages, no cost', slug: 'free-landing-page-generator' },
    { name: 'Product Launch Landing Page', desc: 'Launch day, ready to go', slug: 'product-launch-landing-page' },
    { name: 'SaaS Landing Page Builder', desc: 'Convert trial users to paid', slug: 'saas-landing-page-builder' },
    { name: 'Event Landing Page Generator', desc: 'Tickets, details, RSVPs', slug: 'event-landing-page-generator' },
    { name: 'App Download Landing Page', desc: 'Drive installs with one page', slug: 'app-download-landing-page' },
    { name: 'Lead Capture Landing Page', desc: 'Collect emails, grow your list', slug: 'lead-capture-landing-page' },
    { name: 'Webinar Landing Page Builder', desc: 'Registrations made simple', slug: 'webinar-landing-page-builder' },
    { name: 'AI Landing Page for Restaurants', desc: 'Reservations and menus, one page', slug: 'ai-landing-page-restaurants' },
    { name: 'No-Code Landing Page Creator', desc: 'Drag, drop, publish', slug: 'no-code-landing-page-creator' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
    { name: 'Portfolio Generator for Designers', desc: 'Showcase your best work', slug: 'portfolio-generator-designers' },
    { name: 'Photographer Portfolio Builder', desc: 'Galleries that sell your style', slug: 'photographer-portfolio-builder' },
    { name: 'Artist Portfolio Generator', desc: 'Your art, front and center', slug: 'artist-portfolio-generator' },
    { name: 'Freelancer Portfolio Maker', desc: 'Land clients with a strong site', slug: 'freelancer-portfolio-maker' },
    { name: 'AI Portfolio Builder for Developers', desc: 'Code projects, beautifully presented', slug: 'ai-portfolio-builder-developers' },
    { name: 'Minimal Portfolio Generator', desc: 'Clean, focused, no clutter', slug: 'minimal-portfolio-generator' },
    { name: 'Video Portfolio Builder', desc: 'Showreels and clips, organized', slug: 'video-portfolio-builder' },
    { name: 'Architecture Portfolio Generator', desc: 'Projects that speak for themselves', slug: 'architecture-portfolio-generator' },
    { name: 'Student Portfolio Maker', desc: 'Internships and jobs start here', slug: 'student-portfolio-maker' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
    { name: 'AI Blog Builder', desc: 'Write less, publish more', slug: 'ai-blog-builder' },
    { name: 'Free Blog Generator', desc: 'Start writing, no setup needed', slug: 'free-blog-generator' },
    { name: 'Travel Blog Generator', desc: 'Stories from the road, beautifully laid out', slug: 'travel-blog-generator' },
    { name: 'Food Blog Builder', desc: 'Recipes, photos, and readers', slug: 'food-blog-builder' },
    { name: 'Tech Blog Generator', desc: 'Tutorials and reviews, SEO-ready', slug: 'tech-blog-generator' },
    { name: 'Lifestyle Blog Maker', desc: 'Your voice, your audience', slug: 'lifestyle-blog-maker' },
    { name: 'Business Blog Generator', desc: 'Thought leadership, built in', slug: 'business-blog-generator' },
    { name: 'Personal Blog Builder', desc: 'Share your journey with the world', slug: 'personal-blog-builder' },
    { name: 'No-Code Blog Creator', desc: 'Focus on writing, not tech', slug: 'no-code-blog-creator' },
  ],
  stores: [
    { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
    { name: 'AI Store Builder for Restaurants', desc: 'Online ordering, built in', slug: 'ai-store-builder-restaurants' },
    { name: 'Free E-commerce Generator', desc: 'Sell products, keep more profit', slug: 'free-ecommerce-generator' },
    { name: 'Fashion Store Builder', desc: 'Lookbooks, sizes, checkout', slug: 'fashion-store-builder' },
    { name: 'Digital Product Store Generator', desc: 'Downloads, licenses, delivery', slug: 'digital-product-store-generator' },
    { name: 'Handmade Store Builder', desc: 'Crafts to customers, seamlessly', slug: 'handmade-store-builder' },
    { name: 'Subscription Store Generator', desc: 'Recurring revenue, automated', slug: 'subscription-store-generator' },
    { name: 'AI Store for Photographers', desc: 'Prints and sessions, one shop', slug: 'ai-store-photographers' },
    { name: 'No-Code Online Store', desc: 'Payments, shipping, done', slug: 'no-code-online-store' },
    { name: 'Pop-Up Store Generator', desc: 'Limited runs, maximum impact', slug: 'pop-up-store-generator' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
    { name: 'Free Link-in-Bio Builder', desc: 'All your links, one beautiful page', slug: 'free-link-in-bio-builder' },
    { name: 'Creator Link-in-Bio Maker', desc: 'Built for influencers and artists', slug: 'creator-link-in-bio-maker' },
    { name: 'Musician Link-in-Bio Generator', desc: 'Streams, merch, tour dates', slug: 'musician-link-in-bio-generator' },
    { name: 'Podcast Link-in-Bio Builder', desc: 'Episodes, sponsors, subscribe', slug: 'podcast-link-in-bio-builder' },
    { name: 'AI Link-in-Bio for Coaches', desc: 'Bookings, content, contact', slug: 'ai-link-in-bio-coaches' },
    { name: 'Minimal Link-in-Bio Generator', desc: 'Clean, fast, no distractions', slug: 'minimal-link-in-bio-generator' },
    { name: 'Business Link-in-Bio Maker', desc: 'Social proof, services, contact', slug: 'business-link-in-bio-maker' },
    { name: 'No-Code Link-in-Bio Creator', desc: 'Set it up in under a minute', slug: 'no-code-link-in-bio-creator' },
    { name: 'Custom Link-in-Bio Builder', desc: 'Your brand, your links, your way', slug: 'custom-link-in-bio-builder' },
  ],
}

// Category icon SVGs (inline, decorative)
function CategoryIcon({ category }) {
  const icons = {
    websites: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="24" height="18" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="4" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="2" />
        <circle cx="8" cy="9" r="1" fill="#8159BB" />
        <circle cx="12" cy="9" r="1" fill="#8159BB" />
        <circle cx="16" cy="9" r="1" fill="#8159BB" />
        <line x1="12" y1="24" x2="20" y2="24" stroke="#8159BB" strokeWidth="2" />
        <line x1="16" y1="24" x2="16" y2="28" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    'landing-pages': (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="10" x2="22" y2="10" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="14" x2="18" y2="14" stroke="#8159BB" strokeWidth="2" />
        <rect x="10" y="18" width="12" height="4" rx="1" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    portfolios: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
        <rect x="18" y="8" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
        <rect x="4" y="22" width="10" height="6" rx="1" stroke="#8159BB" strokeWidth="2" />
        <rect x="18" y="22" width="10" height="6" rx="1" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    blogs: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="10" x2="22" y2="10" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="14" x2="22" y2="14" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="18" x2="18" y2="18" stroke="#8159BB" strokeWidth="2" />
        <line x1="10" y1="22" x2="22" y2="22" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    stores: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 10h20l-2 14H8L6 10z" stroke="#8159BB" strokeWidth="2" />
        <path d="M10 10V8a6 6 0 0112 0v2" stroke="#8159BB" strokeWidth="2" />
        <line x1="12" y1="16" x2="12" y2="20" stroke="#8159BB" strokeWidth="2" />
        <line x1="20" y1="16" x2="20" y2="20" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="10" y="4" width="12" height="24" rx="3" stroke="#8159BB" strokeWidth="2" />
        <line x1="14" y1="10" x2="18" y2="10" stroke="#8159BB" strokeWidth="2" />
        <line x1="14" y1="14" x2="18" y2="14" stroke="#8159BB" strokeWidth="2" />
        <line x1="14" y1="18" x2="18" y2="18" stroke="#8159BB" strokeWidth="2" />
        <line x1="14" y1="22" x2="18" y2="22" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
  }
  return icons[category] || icons.websites
}

// Step icon SVGs
function StepIcon({ number }) {
  return (
    <div className="step-icon" aria-hidden="true">
      <span>{number}</span>
    </div>
  )
}

// Why icon SVGs
function WhyIcon({ type }) {
  const icons = {
    speed: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="2" />
        <polyline points="16,8 16,16 22,20" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    mobile: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="10" y="4" width="12" height="24" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="14" y1="24" x2="18" y2="24" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    free: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
  }
  return icons[type] || icons.speed
}

// Hero illustration SVG
function HeroIllustration() {
  return (
    <svg width="400" height="300" viewBox="0 0 400 300" fill="none" aria-hidden="true" className="hero-illustration">
      <rect x="40" y="40" width="320" height="220" rx="8" stroke="#8159BB" strokeWidth="1.5" opacity="0.3" />
      <rect x="60" y="60" width="280" height="20" rx="4" fill="#8159BB" opacity="0.1" />
      <circle cx="75" cy="70" r="4" fill="#8159BB" opacity="0.3" />
      <circle cx="90" cy="70" r="4" fill="#8159BB" opacity="0.3" />
      <circle cx="105" cy="70" r="4" fill="#8159BB" opacity="0.3" />
      <rect x="60" y="100" width="120" height="80" rx="4" stroke="#8159BB" strokeWidth="1" opacity="0.2" />
      <rect x="200" y="100" width="140" height="12" rx="2" fill="#8159BB" opacity="0.15" />
      <rect x="200" y="120" width="100" height="8" rx="2" fill="#8159BB" opacity="0.1" />
      <rect x="200" y="136" width="120" height="8" rx="2" fill="#8159BB" opacity="0.1" />
      <rect x="200" y="152" width="80" height="8" rx="2" fill="#8159BB" opacity="0.1" />
      <rect x="60" y="200" width="280" height="40" rx="4" stroke="#8159BB" strokeWidth="1" opacity="0.2" />
      <rect x="80" y="215" width="60" height="10" rx="2" fill="#8159BB" opacity="0.15" />
      <rect x="160" y="215" width="60" height="10" rx="2" fill="#8159BB" opacity="0.15" />
      <rect x="240" y="215" width="60" height="10" rx="2" fill="#8159BB" opacity="0.15" />
      <line x1="200" y1="260" x2="200" y2="280" stroke="#8159BB" strokeWidth="1.5" opacity="0.3" />
      <rect x="160" y="280" width="80" height="8" rx="4" fill="#8159BB" opacity="0.2" />
    </svg>
  )
}

// Search icon SVG
function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="#636972" strokeWidth="2" />
      <line x1="13.5" y1="13.5" x2="18" y2="18" stroke="#636972" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Arrow icon SVG
function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7 4l6 6-6 6" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// FAQ accordion item
function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="faq-item">
      <button
        className="faq-question"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.slice(0, 20).replace(/\s+/g, '-').toLowerCase()}`}
        onClick={onToggle}
      >
        <span>{question}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className={`faq-chevron ${isOpen ? 'open' : ''}`}
        >
          <path d="M5 8l5 5 5-5" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        id={`faq-answer-${question.slice(0, 20).replace(/\s+/g, '-').toLowerCase()}`}
        className="faq-answer"
        role="region"
        aria-hidden={!isOpen}
        style={{ maxHeight: isOpen ? '500px' : '0', opacity: isOpen ? 1 : 0 }}
      >
        <p>{answer}</p>
      </div>
    </div>
  )
}

// Generator card for featured grid (with category tag)
function FeaturedCard({ generator }) {
  return (
    <a
      href={`/generators/${generator.slug}`}
      className="featured-card"
      aria-label={`${generator.name} - ${generator.desc}`}
    >
      <h3 className="featured-card-name">{generator.name}</h3>
      <p className="featured-card-desc">{generator.desc}</p>
      <span className="category-tag">{generator.category}</span>
    </a>
  )
}

// Generator card for directory (no category tag - subsection provides context)
function DirectoryCard({ generator }) {
  return (
    <a
      href={`/generators/${generator.slug}`}
      className="directory-card"
      aria-label={generator.name}
    >
      <h4 className="directory-card-name">{generator.name}</h4>
      <p className="directory-card-desc">{generator.desc}</p>
    </a>
  )
}

// Category subsection with "Show all" toggle
function CategorySection({ category, generators, s }) {
  const [expanded, setExpanded] = useState(false)
  const sectionRef = useRef(null)
  const initialCount = 6
  const visibleGenerators = expanded ? generators : generators.slice(0, initialCount)
  const hasMore = generators.length > initialCount

  return (
    <section
      id={category.slug}
      className="category-section"
      ref={sectionRef}
    >
      <h3 className="category-heading">{category.name}</h3>
      <p className="category-desc">{category.desc}</p>
      <div className="directory-grid">
        {visibleGenerators.map((gen) => (
          <DirectoryCard key={gen.slug} generator={gen} />
        ))}
      </div>
      {hasMore && (
        <button
          className="show-all-btn"
          aria-expanded={expanded}
          aria-controls={`category-${category.slug}-grid`}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? s.showLess : s.showAll(generators.length)}
        </button>
      )}
    </section>
  )
}

// Main App component
function App() {
  const s = strings.en
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaq, setOpenFaq] = useState(0)
  const searchInputRef = useRef(null)

  // Filter generators based on search
  const filteredCategories = categories.map((cat) => {
    const gens = allGeneratorsByCategory[cat.id] || []
    if (!searchQuery.trim()) {
      return { ...cat, generators: gens, visible: true }
    }
    const q = searchQuery.toLowerCase()
    const matched = gens.filter(
      (g) =>
        g.name.toLowerCase().includes(q) ||
        g.desc.toLowerCase().includes(q) ||
        cat.name.toLowerCase().includes(q)
    )
    return { ...cat, generators: matched, visible: matched.length > 0 }
  }).filter((c) => c.visible)

  const totalMatchCount = filteredCategories.reduce((sum, c) => sum + c.generators.length, 0)

  // Handle FAQ toggle
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index)
  }

  // Handle clear search
  const clearSearch = () => {
    setSearchQuery('')
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  // Scroll to all generators on mount if hash present
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <div className="page">
      {/* Section 0: Top bar */}
      <header className="top-bar">
        <div className="container">
          <a href="/" className="logo" aria-label="Strikingly Home">
            {s.logo}
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li className="breadcrumb-item">
              <a href="/">{s.breadcrumbHome}</a>
            </li>
            <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
            <li className="breadcrumb-item breadcrumb-current" aria-current="page">
              {s.breadcrumbCurrent}
            </li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Section 2: Hero */}
        <section className="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <h1 className="hero-h1">
                <span className="hero-h1-line1">{s.heroH1Line1}</span>
                <span className="hero-h1-line2">{s.heroH1Line2}</span>
              </h1>
              <p className="hero-subheadline">{s.heroSubheadline}</p>
              <div className="hero-ctas">
                <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
                  {s.heroCtaPrimary}
                </a>
                <a href="#all-generators" className="btn btn-ghost">
                  {s.heroCtaSecondary}
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <HeroIllustration />
            </div>
          </div>
        </section>

        {/* Section 3: Featured Generators */}
        <section className="featured">
          <div className="container">
            <h2 className="section-heading">{s.featuredHeading}</h2>
            <p className="section-subheading">{s.featuredSubheading}</p>
            <div className="featured-grid">
              {featuredGenerators.map((gen) => (
                <FeaturedCard key={gen.slug} generator={gen} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Browse by Category */}
        <section className="browse-categories">
          <div className="container">
            <h2 className="section-heading">{s.browseHeading}</h2>
            <div className="category-cards-grid">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.slug}`}
                  className="category-card"
                  aria-label={`${cat.name} - ${cat.desc}`}
                >
                  <CategoryIcon category={cat.id} />
                  <h3 className="category-card-name">{cat.name}</h3>
                  <p className="category-card-desc">{cat.desc}</p>
                  <ArrowIcon />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: All Generators */}
        <section id="all-generators" className="all-generators">
          <div className="container">
            <h2 className="section-heading">{s.allGeneratorsHeading}</h2>
            <p className="section-subheading">{s.allGeneratorsSubheading}</p>

            {/* Search */}
            <div className="search-wrapper">
              <div className="search-input-wrapper">
                <SearchIcon />
                <input
                  ref={searchInputRef}
                  type="search"
                  className="search-input"
                  placeholder={s.searchPlaceholder}
                  aria-label={s.searchLabel}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {searchQuery.trim() && (
                <div className="search-results-info">
                  <span>{s.searchResults(totalMatchCount)}</span>
                  {totalMatchCount === 0 && (
                    <div className="search-empty-state">
                      <p>{s.noResults}</p>
                      <button className="btn btn-ghost btn-small" onClick={clearSearch}>
                        {s.clearSearch}
                      </button>
                      <p className="search-empty-cta">
                        <a href="/s/ai_site_builder">{s.cantFindIt}</a>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Category subsections */}
            {filteredCategories.map((cat) => (
              <CategorySection
                key={cat.id}
                category={cat}
                generators={cat.generators}
                s={s}
              />
            ))}
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section className="how-it-works">
          <div className="container">
            <h2 className="section-heading">{s.howItWorksHeading}</h2>
            <div className="steps-grid">
              <div className="step">
                <StepIcon number={1} />
                <h3 className="step-title">{s.step1Title}</h3>
                <p className="step-desc">{s.step1Desc}</p>
              </div>
              <div className="step">
                <StepIcon number={2} />
                <h3 className="step-title">{s.step2Title}</h3>
                <p className="step-desc">{s.step2Desc}</p>
              </div>
              <div className="step">
                <StepIcon number={3} />
                <h3 className="step-title">{s.step3Title}</h3>
                <p className="step-desc">{s.step3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Why Strikingly */}
        <section className="why-strikingly">
          <div className="container">
            <h2 className="section-heading">{s.whyHeading}</h2>
            <div className="why-grid">
              <div className="why-card">
                <WhyIcon type="speed" />
                <h3 className="why-title">{s.why1Title}</h3>
                <p className="why-desc">{s.why1Desc}</p>
              </div>
              <div className="why-card">
                <WhyIcon type="mobile" />
                <h3 className="why-title">{s.why2Title}</h3>
                <p className="why-desc">{s.why2Desc}</p>
              </div>
              <div className="why-card">
                <WhyIcon type="free" />
                <h3 className="why-title">{s.why3Title}</h3>
                <p className="why-desc">{s.why3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="faq">
          <div className="container">
            <h2 className="section-heading">{s.faqHeading}</h2>
            <div className="faq-list">
              <FaqItem
                question={s.faq1Q}
                answer={s.faq1A}
                isOpen={openFaq === 0}
                onToggle={() => toggleFaq(0)}
              />
              <FaqItem
                question={s.faq2Q}
                answer={s.faq2A}
                isOpen={openFaq === 1}
                onToggle={() => toggleFaq(1)}
              />
              <FaqItem
                question={s.faq3Q}
                answer={s.faq3A}
                isOpen={openFaq === 2}
                onToggle={() => toggleFaq(2)}
              />
              <FaqItem
                question={s.faq4Q}
                answer={s.faq4A}
                isOpen={openFaq === 3}
                onToggle={() => toggleFaq(3)}
              />
              <FaqItem
                question={s.faq5Q}
                answer={s.faq5A}
                isOpen={openFaq === 4}
                onToggle={() => toggleFaq(4)}
              />
              <FaqItem
                question={s.faq6Q}
                answer={s.faq6A}
                isOpen={openFaq === 5}
                onToggle={() => toggleFaq(5)}
              />
            </div>
          </div>
        </section>

        {/* Section 9: Closing CTA */}
        <section className="closing-cta">
          <div className="container">
            <h2 className="closing-heading">{s.closingHeading}</h2>
            <p className="closing-sub">{s.closingSub}</p>
            <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
              {s.closingCta}
            </a>
          </div>
        </section>
      </main>

      {/* Section 10: Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <a href="/" className="footer-logo" aria-label="Strikingly Home">
                {s.logo}
              </a>
            </div>
            <div className="footer-col">
              <h4>{s.footerProduct}</h4>
              <ul>
                <li><a href="/pricing">{s.footerPricing}</a></li>
                <li><a href="/templates">{s.footerTemplates}</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{s.footerCompany}</h4>
              <ul>
                <li><a href="/about">{s.footerAbout}</a></li>
                <li><a href="/blog">{s.footerBlog}</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{s.footerSupport}</h4>
              <ul>
                <li><a href="/support">{s.footerHelp}</a></li>
                <li><a href="/support">{s.footerContact}</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{s.footerLegal}</h4>
              <ul>
                <li><a href="/terms">{s.footerTerms}</a></li>
                <li><a href="/privacy">{s.footerPrivacy}</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{s.footerCopyright(new Date().getFullYear())}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
