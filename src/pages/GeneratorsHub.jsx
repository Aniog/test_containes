import { useState, useRef, useEffect, useCallback } from 'react'

// ─── Strings (i18n-ready) ────────────────────────────────────────────────────
const strings = {
  en: {
    siteTitle: 'Strikingly AI',
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
    heroCta: "START BUILDING — IT'S FREE",
    heroCtaSecondary: 'BROWSE GENERATORS',
    featuredHeading: 'FEATURED GENERATORS',
    featuredSub: 'A few common starting points.',
    categoryHeading: 'BROWSE BY CATEGORY',
    categorySub: 'Jump to the section that fits what you\'re building.',
    allHeading: 'ALL GENERATORS',
    allSub: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    searchCount: (n) => `${n} generator${n !== 1 ? 's' : ''} match`,
    searchEmpty: "No generators match your search.",
    searchEmptyCta: 'Clear search',
    searchEmptyBuilder: "Can't find it? Start with our AI builder.",
    showAll: (n) => `Show all ${n} generators`,
    showLess: 'Show less',
    howHeading: 'HOW IT WORKS',
    whyHeading: 'WHY STRIKINGLY',
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    footerCopy: `© ${new Date().getFullYear()} Strikingly, Inc. All rights reserved.`,
  },
}
const t = strings.en

// ─── Data ────────────────────────────────────────────────────────────────────
const BUILDER_URL = '/s/ai_site_builder'

const featuredGenerators = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site.', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee.', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert.', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code.', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels.', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll.', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests.', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done.', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes.', category: 'Blog', slug: 'blog-generator-for-beginners' },
]

const categoryCards = [
  { id: 'websites', name: 'Websites', desc: 'AI-built business and personal sites for any goal.', anchor: '#websites' },
  { id: 'landing-pages', name: 'Landing Pages', desc: 'Single-page sites built to convert visitors fast.', anchor: '#landing-pages' },
  { id: 'portfolios', name: 'Portfolios', desc: 'Showcase your work with a clean, focused site.', anchor: '#portfolios' },
  { id: 'blogs', name: 'Blogs', desc: 'Publish-ready blogs with built-in SEO basics.', anchor: '#blogs' },
  { id: 'stores', name: 'Online Stores', desc: 'Sell products online with payments built in.', anchor: '#stores' },
  { id: 'link-in-bio', name: 'Link-in-Bio', desc: 'One link, all your places. Made for creators.', anchor: '#link-in-bio' },
]

const allGenerators = [
  {
    id: 'websites',
    heading: 'Websites',
    desc: 'AI-built sites for every business type and goal.',
    items: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site in seconds.', slug: 'ai-website-generator' },
      { name: 'Free Website Builder for Photographers', desc: 'Showcase your photography with a stunning portfolio site.', slug: 'free-website-builder-for-photographers' },
      { name: 'One-Page Wedding Website Builder', desc: 'A beautiful single-page site for your big day.', slug: 'one-page-wedding-website-builder' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations — all in one place.', slug: 'restaurant-website-builder' },
      { name: 'Small Business Website Generator', desc: 'Professional sites for local and online businesses.', slug: 'small-business-website-generator' },
      { name: 'No-Code Website Builder for Coaches', desc: 'Build your coaching site without touching code.', slug: 'no-code-website-builder-for-coaches' },
      { name: 'AI Website Builder for Yoga Instructors', desc: 'Class schedules, booking, and your story — done.', slug: 'ai-website-builder-for-yoga-instructors' },
      { name: 'Beautiful Website Generator for Artists', desc: 'Gallery-first sites that let your work speak.', slug: 'beautiful-website-generator-for-artists' },
      { name: 'Free Website Builder for Nonprofits', desc: 'Mission-driven sites with donation-ready layouts.', slug: 'free-website-builder-for-nonprofits' },
      { name: 'AI Site Builder for Freelancers', desc: 'Pitch your services and win clients online.', slug: 'ai-site-builder-for-freelancers' },
    ],
  },
  {
    id: 'landing-pages',
    heading: 'Landing Pages',
    desc: 'Single-page sites optimized to convert visitors into leads or customers.',
    items: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert, generated in seconds.', slug: 'ai-landing-page-maker' },
      { name: 'Free Landing Page Generator', desc: 'No-cost landing pages for campaigns and launches.', slug: 'free-landing-page-generator' },
      { name: 'Product Launch Landing Page Builder', desc: 'Announce your product with a high-impact page.', slug: 'product-launch-landing-page-builder' },
      { name: 'Event Registration Landing Page Maker', desc: 'Collect sign-ups for webinars, workshops, and events.', slug: 'event-registration-landing-page-maker' },
      { name: 'Lead Generation Landing Page Generator', desc: 'Capture emails and leads with a focused page.', slug: 'lead-generation-landing-page-generator' },
      { name: 'App Download Landing Page Builder', desc: 'Drive installs with a clean, persuasive page.', slug: 'app-download-landing-page-builder' },
      { name: 'Coming Soon Page Generator', desc: 'Build anticipation before your launch.', slug: 'coming-soon-page-generator' },
      { name: 'Sales Funnel Landing Page Maker', desc: 'Guide visitors from interest to purchase.', slug: 'sales-funnel-landing-page-maker' },
      { name: 'No-Code Landing Page Builder for Startups', desc: 'Validate your idea fast without engineering.', slug: 'no-code-landing-page-builder-for-startups' },
    ],
  },
  {
    id: 'portfolios',
    heading: 'Portfolios',
    desc: 'Showcase your work with a clean, focused site that gets you hired.',
    items: [
      { name: 'Portfolio Generator for Designers', desc: 'Show your design work in a gallery-first layout.', slug: 'portfolio-generator-for-designers' },
      { name: 'Free Portfolio Generator', desc: 'For creatives of all kinds, in minutes, no fee.', slug: 'free-portfolio-generator' },
      { name: 'AI Portfolio Builder for Photographers', desc: 'Auto-layout your best shots into a stunning site.', slug: 'ai-portfolio-builder-for-photographers' },
      { name: 'Developer Portfolio Generator', desc: 'Highlight your projects, skills, and GitHub.', slug: 'developer-portfolio-generator' },
      { name: 'Illustrator Portfolio Site Builder', desc: 'Clean, image-forward sites for illustrators.', slug: 'illustrator-portfolio-site-builder' },
      { name: 'Video Portfolio Generator for Filmmakers', desc: 'Embed your reels and showcase your credits.', slug: 'video-portfolio-generator-for-filmmakers' },
      { name: 'Architecture Portfolio Builder', desc: 'Present projects with full-bleed imagery.', slug: 'architecture-portfolio-builder' },
      { name: 'Model Portfolio Website Generator', desc: 'Professional comp cards and galleries online.', slug: 'model-portfolio-website-generator' },
      { name: 'UX Portfolio Generator', desc: 'Case studies and process work, beautifully laid out.', slug: 'ux-portfolio-generator' },
    ],
  },
  {
    id: 'blogs',
    heading: 'Blogs',
    desc: 'Publish-ready blogs with built-in SEO basics and clean reading layouts.',
    items: [
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes, no experience needed.', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Builder', desc: 'Generate your blog structure and first posts with AI.', slug: 'ai-blog-builder' },
      { name: 'Personal Blog Generator', desc: 'A clean, minimal space for your writing.', slug: 'personal-blog-generator' },
      { name: 'Travel Blog Site Builder', desc: 'Share your adventures with maps and galleries.', slug: 'travel-blog-site-builder' },
      { name: 'Food Blog Generator', desc: 'Recipe-ready layouts with beautiful food photography support.', slug: 'food-blog-generator' },
      { name: 'Business Blog Builder', desc: 'Thought leadership content that builds your brand.', slug: 'business-blog-builder' },
      { name: 'Lifestyle Blog Generator', desc: 'Flexible layouts for fashion, wellness, and more.', slug: 'lifestyle-blog-generator' },
      { name: 'Tech Blog Site Builder', desc: 'Code-friendly layouts with syntax highlighting.', slug: 'tech-blog-site-builder' },
      { name: 'Parenting Blog Generator', desc: 'Warm, welcoming designs for family stories.', slug: 'parenting-blog-generator' },
      { name: 'Niche Blog Builder for Creators', desc: 'Build an audience around any topic you love.', slug: 'niche-blog-builder-for-creators' },
    ],
  },
  {
    id: 'stores',
    heading: 'Online Stores',
    desc: 'Sell products online with payments built in — no developer required.',
    items: [
      { name: 'Online Store Builder', desc: 'Start selling without writing a line of code.', slug: 'online-store-builder' },
      { name: 'Online Store Builder for Restaurants', desc: 'Take orders and sell merchandise from your site.', slug: 'online-store-builder-for-restaurants' },
      { name: 'AI E-commerce Site Generator', desc: 'Describe your store, get a full shop in seconds.', slug: 'ai-ecommerce-site-generator' },
      { name: 'Free Online Store Builder', desc: 'Launch your shop with no upfront cost.', slug: 'free-online-store-builder' },
      { name: 'Digital Products Store Generator', desc: 'Sell ebooks, courses, and downloads instantly.', slug: 'digital-products-store-generator' },
      { name: 'Handmade Goods Store Builder', desc: 'Etsy-style layouts for artisan sellers.', slug: 'handmade-goods-store-builder' },
      { name: 'Fashion Boutique Website Generator', desc: 'Lookbook-first stores for clothing brands.', slug: 'fashion-boutique-website-generator' },
      { name: 'Subscription Box Store Builder', desc: 'Recurring billing and product showcase built in.', slug: 'subscription-box-store-builder' },
      { name: 'Local Business Online Store Generator', desc: 'Bring your brick-and-mortar shop online fast.', slug: 'local-business-online-store-generator' },
      { name: 'Print-on-Demand Store Builder', desc: 'Connect your designs to fulfillment automatically.', slug: 'print-on-demand-store-builder' },
    ],
  },
  {
    id: 'link-in-bio',
    heading: 'Link-in-Bio',
    desc: 'One link, all your places — built for creators and social-first brands.',
    items: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels and content.', slug: 'link-in-bio-generator' },
      { name: 'Instagram Link-in-Bio Builder', desc: 'Turn your IG bio link into a mini-site.', slug: 'instagram-link-in-bio-builder' },
      { name: 'TikTok Link-in-Bio Generator', desc: 'Drive traffic from TikTok to all your destinations.', slug: 'tiktok-link-in-bio-generator' },
      { name: 'Creator Link Page Builder', desc: 'Showcase your content, merch, and collabs.', slug: 'creator-link-page-builder' },
      { name: 'Musician Link-in-Bio Generator', desc: 'Stream links, tour dates, and merch in one place.', slug: 'musician-link-in-bio-generator' },
      { name: 'Influencer Bio Link Builder', desc: 'Brand-matched pages for sponsored and organic content.', slug: 'influencer-bio-link-builder' },
      { name: 'Podcast Link Page Generator', desc: 'All your episodes and platforms, one clean link.', slug: 'podcast-link-page-generator' },
      { name: 'Small Business Link-in-Bio Builder', desc: 'Menu, booking, and contact — one tap away.', slug: 'small-business-link-in-bio-builder' },
    ],
  },
]

const howItWorks = [
  { num: '1', title: 'PICK A GENERATOR', body: 'Browse by category or search to find one that fits your goal.' },
  { num: '2', title: 'DESCRIBE YOUR SITE', body: 'Tell our AI builder about your business in a sentence or two.' },
  { num: '3', title: 'GENERATE AND PUBLISH', body: 'Get a fully built site in seconds. Customize anything, then go live.' },
]

const whyStrikingly = [
  { title: 'LIVE IN SECONDS', body: 'Describe your site, we build it. No setup, no learning curve.' },
  { title: 'MOBILE BY DEFAULT', body: 'Every generator produces responsive sites that work on any device.' },
  { title: 'FREE TO START', body: 'Generate, customize, and publish without a credit card.' },
]

const faqs = [
  {
    q: 'What is an AI site generator?',
    a: 'An AI site generator is a tool that builds a complete website for you based on a short description of your business or goal. Instead of choosing a template and filling in blanks, you describe what you need in plain language and the AI produces a fully structured, designed site ready to publish.\n\nStrikingly\'s generators combine AI content creation with professionally designed layouts, so the result looks polished from the first second — not like a rough draft you have to fix.',
  },
  {
    q: 'How is a generator different from a template?',
    a: 'A template is a blank design you fill in yourself. A generator is a starting point that already knows your context. When you use a Strikingly generator, the AI reads your description and populates the site with relevant copy, section structure, and imagery suggestions tailored to your industry or goal.\n\nThe result is a site that feels built for you, not a generic placeholder waiting to be replaced.',
  },
  {
    q: 'Are these generators free to use?',
    a: 'Yes — you can generate, preview, and customize your site for free. Strikingly offers a free plan that lets you publish a site on a Strikingly subdomain. Paid plans unlock custom domains, additional pages, e-commerce features, and more.\n\nNo credit card is required to get started.',
  },
  {
    q: 'What kinds of sites can I build?',
    a: 'Strikingly\'s generators cover the most common site types: business websites, personal portfolios, landing pages, blogs, online stores, and link-in-bio pages. Within each category there are generators targeted to specific industries and goals — from restaurant menus to photographer portfolios to creator link pages.\n\nIf you don\'t see a generator that matches your exact need, the AI Site Builder can handle any brief you give it.',
  },
  {
    q: 'Can I customize what the generator produces?',
    a: 'Absolutely. Every generated site opens in Strikingly\'s visual editor, where you can change text, swap images, reorder sections, adjust colors, and add or remove blocks. The generator gives you a strong starting point; you have full control over the final result.\n\nMost users find they only need to make a few tweaks before publishing.',
  },
  {
    q: 'Do generated sites work on mobile?',
    a: 'Yes. Every site produced by a Strikingly generator is fully responsive by default. The layouts adapt automatically to phones, tablets, and desktops without any extra work on your part.\n\nYou can preview the mobile view in the editor before publishing to make sure everything looks exactly right.',
  },
]

const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'Templates', href: '/templates' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'AI Site Builder', href: '/s/ai_site_builder' },
      { label: 'Generators', href: '/generators' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Help Center', href: '/support' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
]

// ─── SVG Illustrations ────────────────────────────────────────────────────────
function LogoSVG() {
  return (
    <svg width="140" height="28" viewBox="0 0 140 28" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="4" fill="url(#logoGrad)" />
      <path d="M8 20L14 8L20 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 16H17.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
      <text x="36" y="20" fontFamily="'Josefin Sans', sans-serif" fontWeight="700" fontSize="14" fill="#2E2E2F" letterSpacing="0.5">strikingly</text>
      <text x="104" y="20" fontFamily="'Josefin Sans', sans-serif" fontWeight="700" fontSize="14" fill="url(#textGrad)" letterSpacing="0.5">AI</text>
      <defs>
        <linearGradient id="textGrad" x1="104" y1="0" x2="124" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function HeroIllustration() {
  return (
    <svg width="480" height="360" viewBox="0 0 480 360" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[480px]">
      {/* Browser chrome */}
      <rect x="40" y="40" width="400" height="280" rx="12" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1.5" />
      <rect x="40" y="40" width="400" height="36" rx="12" fill="#E2E4E7" />
      <rect x="40" y="64" width="400" height="12" fill="#E2E4E7" />
      <circle cx="64" cy="58" r="5" fill="#CB0C9F" opacity="0.5" />
      <circle cx="80" cy="58" r="5" fill="#7671FF" opacity="0.5" />
      <circle cx="96" cy="58" r="5" fill="#8159BB" opacity="0.5" />
      <rect x="116" y="50" width="200" height="16" rx="8" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      {/* Hero section mockup */}
      <rect x="60" y="96" width="360" height="80" rx="6" fill="url(#heroGrad)" opacity="0.15" />
      <rect x="80" y="112" width="160" height="12" rx="3" fill="#8159BB" opacity="0.4" />
      <rect x="80" y="130" width="120" height="8" rx="3" fill="#636972" opacity="0.3" />
      <rect x="80" y="148" width="80" height="20" rx="4" fill="url(#heroGrad)" opacity="0.7" />
      {/* Cards row */}
      <rect x="60" y="192" width="108" height="100" rx="6" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="72" y="204" width="84" height="44" rx="4" fill="#F4F6F8" />
      <rect x="72" y="254" width="60" height="8" rx="2" fill="#4B5056" opacity="0.5" />
      <rect x="72" y="268" width="84" height="6" rx="2" fill="#636972" opacity="0.3" />
      <rect x="186" y="192" width="108" height="100" rx="6" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="198" y="204" width="84" height="44" rx="4" fill="#F4F6F8" />
      <rect x="198" y="254" width="60" height="8" rx="2" fill="#4B5056" opacity="0.5" />
      <rect x="198" y="268" width="84" height="6" rx="2" fill="#636972" opacity="0.3" />
      <rect x="312" y="192" width="108" height="100" rx="6" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="324" y="204" width="84" height="44" rx="4" fill="#F4F6F8" />
      <rect x="324" y="254" width="60" height="8" rx="2" fill="#4B5056" opacity="0.5" />
      <rect x="324" y="268" width="84" height="6" rx="2" fill="#636972" opacity="0.3" />
      {/* Sparkle accents */}
      <path d="M420 90 L424 82 L428 90 L424 98 Z" fill="#7671FF" opacity="0.6" />
      <path d="M52 170 L55 164 L58 170 L55 176 Z" fill="#CB0C9F" opacity="0.5" />
      <circle cx="430" cy="180" r="4" fill="#8159BB" opacity="0.4" />
      <circle cx="50" cy="100" r="3" fill="#7671FF" opacity="0.4" />
      <defs>
        <linearGradient id="heroGrad" x1="60" y1="96" x2="420" y2="176" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function CategoryIcon({ id }) {
  const icons = {
    websites: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="4" y="8" width="32" height="8" rx="3" fill="#8159BB" opacity="0.15" />
        <rect x="8" y="20" width="14" height="8" rx="2" fill="#8159BB" opacity="0.2" />
        <rect x="24" y="20" width="8" height="8" rx="2" fill="#8159BB" opacity="0.2" />
      </svg>
    ),
    'landing-pages': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="6" width="24" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="12" y="12" width="16" height="4" rx="2" fill="#8159BB" opacity="0.4" />
        <rect x="12" y="20" width="16" height="2" rx="1" fill="#8159BB" opacity="0.25" />
        <rect x="12" y="24" width="10" height="2" rx="1" fill="#8159BB" opacity="0.25" />
        <rect x="14" y="28" width="12" height="4" rx="2" fill="url(#catGrad)" />
        <defs><linearGradient id="catGrad" x1="14" y1="28" x2="26" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#7671FF" /><stop offset="1" stopColor="#CB0C9F" /></linearGradient></defs>
      </svg>
    ),
    portfolios: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="10" width="32" height="22" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="8" y="14" width="10" height="10" rx="2" fill="#8159BB" opacity="0.25" />
        <rect x="20" y="14" width="12" height="4" rx="2" fill="#8159BB" opacity="0.2" />
        <rect x="20" y="20" width="8" height="4" rx="2" fill="#8159BB" opacity="0.15" />
        <rect x="14" y="8" width="12" height="4" rx="2" fill="#8159BB" opacity="0.3" />
      </svg>
    ),
    blogs: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="10" y="12" width="20" height="3" rx="1.5" fill="#8159BB" opacity="0.5" />
        <rect x="10" y="18" width="20" height="2" rx="1" fill="#8159BB" opacity="0.25" />
        <rect x="10" y="22" width="16" height="2" rx="1" fill="#8159BB" opacity="0.25" />
        <rect x="10" y="26" width="18" height="2" rx="1" fill="#8159BB" opacity="0.2" />
      </svg>
    ),
    stores: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M8 14h24l-2 14H10L8 14Z" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <path d="M6 10h28" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="15" cy="32" r="2" fill="#8159BB" opacity="0.5" />
        <circle cx="25" cy="32" r="2" fill="#8159BB" opacity="0.5" />
        <path d="M16 14v-4a4 4 0 018 0v4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="12" y="4" width="16" height="28" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="15" y="10" width="10" height="3" rx="1.5" fill="#8159BB" opacity="0.4" />
        <rect x="15" y="16" width="10" height="3" rx="1.5" fill="#8159BB" opacity="0.3" />
        <rect x="15" y="22" width="10" height="3" rx="1.5" fill="#8159BB" opacity="0.2" />
        <circle cx="20" cy="36" r="2" fill="#8159BB" opacity="0.5" />
      </svg>
    ),
  }
  return icons[id] || null
}

function WhyIcon({ index }) {
  const icons = [
    // Lightning bolt
    <svg key="0" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M18 4L8 18h8l-2 10 14-16h-8l2-8z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </svg>,
    // Mobile
    <svg key="1" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="9" y="3" width="14" height="26" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="25" r="1.5" fill="#8159BB" opacity="0.5" />
      <rect x="12" y="7" width="8" height="2" rx="1" fill="#8159BB" opacity="0.3" />
    </svg>,
    // Star / free
    <svg key="2" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 4l3 8h8l-6.5 5 2.5 8L16 20l-7 5 2.5-8L5 12h8z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </svg>,
  ]
  return icons[index] || null
}

// ─── Utility: slugify ─────────────────────────────────────────────────────────
function toSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function TopBar() {
  return (
    <header className="bg-white border-b border-[#E2E4E7] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center">
        <a href="/" aria-label="Strikingly AI — Home">
          <LogoSVG />
        </a>
      </div>
    </header>
  )
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-[#E2E4E7]">
      <div className="max-w-[1200px] mx-auto px-5 py-2">
        <ol className="flex items-center gap-2 text-[13px] text-[#636972] font-body list-none m-0 p-0">
          <li>
            <a href="/" className="hover:text-[#8159BB] transition-colors">Strikingly</a>
          </li>
          <li aria-hidden="true" className="text-[#C6C9CD]">›</li>
          <li aria-current="page" className="text-[#4B5056]">AI Generators</li>
        </ol>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ paddingTop: '64px', paddingBottom: '64px' }}
    >
      {/* Faint hero wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 80% 50%, rgba(118,113,255,0.06) 0%, rgba(203,12,159,0.04) 60%, transparent 100%)',
        }}
      />
      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Left */}
          <div className="flex-1 text-center md:text-start">
            <h1 className="font-heading text-[28px] sm:text-[36px] md:text-[44px] leading-[1.15] mb-4">
              <span className="block text-[#2E2E2F]">{t.heroLine1}</span>
              <span className="block ai-gradient-text">{t.heroLine2}</span>
            </h1>
            <p className="text-[#636972] text-[15px] leading-relaxed mb-8 max-w-[480px] mx-auto md:mx-0">
              {t.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
              <a
                href={BUILDER_URL}
                className="ai-gradient-btn inline-flex items-center justify-center font-heading text-[13px] text-white uppercase tracking-wide px-[20px] h-[44px] rounded-[4px] transition-opacity"
              >
                {t.heroCta}
              </a>
              <a
                href="#all-generators"
                className="inline-flex items-center justify-center font-heading text-[13px] text-[#8159BB] uppercase tracking-wide px-[20px] h-[44px] rounded-[4px] border border-[#8159BB] bg-transparent hover:bg-[#8159BB]/5 transition-colors"
              >
                {t.heroCtaSecondary}
              </a>
            </div>
          </div>
          {/* Right */}
          <div className="flex-1 flex justify-center md:justify-end">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedGenerators() {
  return (
    <section className="bg-[#F4F6F8] py-[60px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading text-[26px] md:text-[30px] text-[#4B5056] mb-2">{t.featuredHeading}</h2>
        <p className="text-[#636972] text-[14px] mb-8">{t.featuredSub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {featuredGenerators.map((gen) => (
            <article key={gen.slug}>
              <a
                href={`/generators/${gen.slug}`}
                className="generator-card block bg-white border border-[#C6C9CD] rounded-[3px] p-5 h-full transition-all"
                aria-label={gen.name}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="font-heading text-[14px] text-[#2E2E2F] leading-snug">{gen.name}</span>
                  <span className="shrink-0 font-heading text-[11px] text-[#8159BB] border border-[#8159BB] rounded-[3px] px-[6px] py-[2px] uppercase whitespace-nowrap">
                    {gen.category}
                  </span>
                </div>
                <p className="text-[#636972] text-[13px] leading-relaxed m-0">{gen.desc}</p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function BrowseByCategory() {
  return (
    <section className="bg-white py-[60px] border-b border-[#E2E4E7]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading text-[26px] md:text-[30px] text-[#4B5056] mb-2">{t.categoryHeading}</h2>
        <p className="text-[#636972] text-[14px] mb-8">{t.categorySub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {categoryCards.map((cat) => (
            <a
              key={cat.id}
              href={`/generators${cat.anchor}`}
              className="generator-card flex items-start gap-4 bg-white border border-[#C6C9CD] rounded-[3px] p-5 transition-all group"
              aria-label={`Browse ${cat.name} generators`}
            >
              <div className="shrink-0 mt-1">
                <CategoryIcon id={cat.id} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-heading text-[14px] text-[#2E2E2F] mb-1">{cat.name.toUpperCase()}</div>
                <p className="text-[#636972] text-[13px] leading-relaxed m-0">{cat.desc}</p>
              </div>
              <svg className="shrink-0 mt-1 text-[#8159BB] opacity-60 group-hover:opacity-100 transition-opacity" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function GeneratorCard({ item }) {
  return (
    <article>
      <a
        href={`/generators/${item.slug}`}
        className="generator-card block bg-white border border-[#C6C9CD] rounded-[3px] p-5 h-full transition-all"
        aria-label={item.name}
      >
        <div className="font-heading text-[13px] text-[#2E2E2F] mb-2 leading-snug">{item.name}</div>
        <p className="text-[#636972] text-[13px] leading-relaxed m-0">{item.desc}</p>
      </a>
    </article>
  )
}

const INITIAL_SHOW = 6

function CategorySection({ section, searchQuery }) {
  const [expanded, setExpanded] = useState(false)
  const gridRef = useRef(null)

  const filtered = searchQuery
    ? section.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery) ||
          item.desc.toLowerCase().includes(searchQuery) ||
          section.heading.toLowerCase().includes(searchQuery)
      )
    : section.items

  const hasMatches = filtered.length > 0
  const showToggle = !searchQuery && section.items.length > INITIAL_SHOW
  const visibleItems = searchQuery ? filtered : expanded ? section.items : section.items.slice(0, INITIAL_SHOW)
  const hiddenCount = section.items.length - INITIAL_SHOW

  const toggleId = `toggle-${section.id}`
  const gridId = `grid-${section.id}`

  if (searchQuery && !hasMatches) return null

  return (
    <section id={section.id} className="scroll-mt-20">
      <h3 className="font-heading text-[20px] md:text-[22px] text-[#4B5056] mb-1">{section.heading.toUpperCase()}</h3>
      <p className="text-[#636972] text-[13px] mb-5">{section.desc}</p>
      <div
        id={gridId}
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {visibleItems.map((item) => (
          <GeneratorCard key={item.slug} item={item} />
        ))}
      </div>
      {/* Hidden items for no-JS / SEO — always in DOM */}
      {!expanded && !searchQuery && section.items.slice(INITIAL_SHOW).map((item) => (
        <article key={item.slug} className="hidden js-hidden-card">
          <a
            href={`/generators/${item.slug}`}
            className="generator-card block bg-white border border-[#C6C9CD] rounded-[3px] p-5 h-full transition-all"
            aria-label={item.name}
          >
            <div className="font-heading text-[13px] text-[#2E2E2F] mb-2 leading-snug">{item.name}</div>
            <p className="text-[#636972] text-[13px] leading-relaxed m-0">{item.desc}</p>
          </a>
        </article>
      ))}
      {showToggle && (
        <div className="mt-5">
          <button
            id={toggleId}
            aria-expanded={expanded}
            aria-controls={gridId}
            onClick={() => setExpanded((v) => !v)}
            className="font-heading text-[12px] text-[#8159BB] border border-[#8159BB] rounded-[4px] px-[15px] h-[36px] uppercase tracking-wide bg-transparent hover:bg-[#8159BB]/5 transition-colors"
          >
            {expanded ? t.showLess : t.showAll(hiddenCount)}
          </button>
        </div>
      )}
    </section>
  )
}

function AllGenerators() {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  const normalizedQuery = query.trim().toLowerCase()

  const totalMatches = normalizedQuery
    ? allGenerators.reduce((acc, section) => {
        return acc + section.items.filter(
          (item) =>
            item.name.toLowerCase().includes(normalizedQuery) ||
            item.desc.toLowerCase().includes(normalizedQuery) ||
            section.heading.toLowerCase().includes(normalizedQuery)
        ).length
      }, 0)
    : null

  const hasAnyMatch = totalMatches === null || totalMatches > 0

  const clearSearch = useCallback(() => {
    setQuery('')
    inputRef.current?.focus()
  }, [])

  return (
    <section id="all-generators" className="bg-[#F4F6F8] py-[60px] scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading text-[26px] md:text-[30px] text-[#4B5056] mb-2">{t.allHeading}</h2>
        <p className="text-[#636972] text-[14px] mb-8">{t.allSub}</p>

        {/* Search */}
        <div className="mb-8">
          <label htmlFor="generator-search" className="sr-only">{t.searchLabel}</label>
          <div className="relative max-w-[480px]">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#636972] pointer-events-none"
              width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
            >
              <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              id="generator-search"
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchLabel}
              className="w-full h-[44px] pl-10 pr-4 border border-[#C6C9CD] rounded-[4px] bg-white text-[14px] text-[#2E2E2F] placeholder-[#636972] focus:outline-none focus:border-[#8159BB] focus:ring-1 focus:ring-[#8159BB] transition-colors font-body"
            />
          </div>
          {normalizedQuery && (
            <p className="mt-2 text-[13px] text-[#636972]" aria-live="polite" aria-atomic="true">
              {t.searchCount(totalMatches)}
            </p>
          )}
        </div>

        {/* Empty state */}
        {normalizedQuery && !hasAnyMatch && (
          <div className="text-center py-12">
            <p className="text-[#636972] text-[14px] mb-4">{t.searchEmpty}</p>
            <button
              onClick={clearSearch}
              className="font-heading text-[12px] text-[#8159BB] border border-[#8159BB] rounded-[4px] px-[15px] h-[36px] uppercase tracking-wide bg-transparent hover:bg-[#8159BB]/5 transition-colors mr-4"
            >
              {t.searchEmptyCta}
            </button>
            <a
              href={BUILDER_URL}
              className="text-[13px] text-[#8159BB] underline hover:no-underline"
            >
              {t.searchEmptyBuilder}
            </a>
          </div>
        )}

        {/* Category sections */}
        <div className="flex flex-col gap-[50px]">
          {allGenerators.map((section) => (
            <CategorySection
              key={section.id}
              section={section}
              searchQuery={normalizedQuery}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="bg-white py-[60px] border-t border-[#E2E4E7]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading text-[26px] md:text-[30px] text-[#4B5056] mb-10 text-center">{t.howHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center md:items-start md:text-start">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-heading text-[16px] text-white mb-4 shrink-0"
                style={{ background: 'linear-gradient(135deg, #7671FF, #CB0C9F)' }}
                aria-hidden="true"
              >
                {step.num}
              </div>
              <h3 className="font-heading text-[14px] text-[#2E2E2F] mb-2">{step.title}</h3>
              <p className="text-[#636972] text-[14px] leading-relaxed m-0">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyStrikingly() {
  return (
    <section className="bg-[#F4F6F8] py-[60px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading text-[26px] md:text-[30px] text-[#4B5056] mb-10 text-center">{t.whyHeading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyStrikingly.map((item, i) => (
            <div key={item.title} className="flex flex-col items-center text-center md:items-start md:text-start">
              <div className="mb-4">
                <WhyIcon index={i} />
              </div>
              <h3 className="font-heading text-[14px] text-[#2E2E2F] mb-2">{item.title}</h3>
              <p className="text-[#636972] text-[14px] leading-relaxed m-0">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i))

  return (
    <section className="bg-white py-[60px] border-t border-[#E2E4E7]">
      <div className="max-w-[720px] mx-auto px-5">
        <h2 className="font-heading text-[26px] md:text-[30px] text-[#4B5056] mb-8 text-center">{t.faqHeading}</h2>
        <div className="flex flex-col divide-y divide-[#E2E4E7]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            const panelId = `faq-panel-${i}`
            const btnId = `faq-btn-${i}`
            return (
              <div key={i}>
                <button
                  id={btnId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 py-4 text-start bg-transparent border-0 cursor-pointer group"
                >
                  <span className="font-heading text-[14px] text-[#2E2E2F] leading-snug">{faq.q.toUpperCase()}</span>
                  <svg
                    className={`shrink-0 text-[#8159BB] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                  >
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                  className="pb-4"
                >
                  {faq.a.split('\n\n').map((para, pi) => (
                    <p key={pi} className="text-[#636972] text-[14px] leading-relaxed mt-0 mb-3 last:mb-0">{para}</p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ClosingCTA() {
  return (
    <section className="bg-white py-[60px] border-t border-[#E2E4E7]">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <h2 className="font-heading text-[28px] md:text-[36px] text-[#2E2E2F] mb-3">{t.closingHeading}</h2>
        <p className="text-[#636972] text-[15px] mb-8 max-w-[480px] mx-auto">{t.closingSub}</p>
        <a
          href={BUILDER_URL}
          className="ai-gradient-btn inline-flex items-center justify-center font-heading text-[13px] text-white uppercase tracking-wide px-[24px] h-[44px] rounded-[4px] transition-opacity"
        >
          {t.closingCta}
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#F4F6F8] border-t border-[#E2E4E7] pt-[50px] pb-[30px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" aria-label="Strikingly AI — Home" className="inline-block mb-4">
              <LogoSVG />
            </a>
            <p className="text-[#636972] text-[13px] leading-relaxed">
              AI-powered website builder for everyone.
            </p>
          </div>
          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <div className="font-heading text-[12px] text-[#4B5056] mb-3">{col.heading.toUpperCase()}</div>
              <ul className="list-none m-0 p-0 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#636972] text-[13px] hover:text-[#8159BB] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#E2E4E7] pt-5 text-center">
          <p className="text-[#636972] text-[12px] m-0">{t.footerCopy}</p>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function GeneratorsHub() {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main>
        <Hero />
        <FeaturedGenerators />
        <BrowseByCategory />
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
