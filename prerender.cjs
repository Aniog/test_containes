const { readFileSync, writeFileSync, existsSync, mkdirSync } = require('fs')
const { join } = require('path')

// Inline the data directly
const strings = {
  lang: 'en',
  brand: 'Strikingly AI',
  heroH1Line1: 'BUILD ANY KIND OF SITE',
  heroH1Line2: 'WITH AI, IN AN INSTANT',
  heroSub: "Browse the right generator for what you're building, or jump straight into our AI site builder.",
  ctaStart: "START BUILDING - IT'S FREE",
  ctaBrowse: 'BROWSE GENERATORS',
  featuredHeading: 'FEATURED GENERATORS',
  featuredSub: 'A few common starting points.',
  browseCatHeading: 'BROWSE BY CATEGORY',
  allGeneratorsHeading: 'ALL GENERATORS',
  allGeneratorsSub: "Sixty-plus generators, organized by what you're building.",
  searchPlaceholder: 'Search generators...',
  searchLabel: 'Search generators',
  noResults: "Can't find it? Start with our AI builder.",
  clearSearch: 'Clear search',
  showAll: 'Show all',
  showLess: 'Show fewer',
  howItWorksHeading: 'HOW IT WORKS',
  whyHeading: 'WHY STRIKINGLY',
  faqHeading: 'FREQUENTLY ASKED QUESTIONS',
  closingHeading: 'READY TO BUILD?',
  closingSub: 'Pick a generator above, or jump straight into our AI builder.',
  closingCta: 'START WITH AI BUILDER',
  footerCopyright: '© 2026 Strikingly. All rights reserved.',
  steps: [
    { title: 'PICK A GENERATOR', desc: 'Browse by category or search to find one that fits your goal.' },
    { title: 'DESCRIBE YOUR SITE', desc: 'Tell our AI builder about your business in a sentence or two.' },
    { title: 'GENERATE AND PUBLISH', desc: 'Get a fully built site in seconds. Customize anything, then go live.' },
  ],
  benefits: [
    { title: 'LIVE IN SECONDS', desc: 'Describe your site, we build it. No setup, no learning curve.' },
    { title: 'MOBILE BY DEFAULT', desc: 'Every generator produces responsive sites that work on any device.' },
    { title: 'FREE TO START', desc: 'Generate, customize, and publish without a credit card.' },
  ],
  faqs: [
    { q: 'What is an AI site generator?', a: 'An AI site generator is a tool that builds a complete, ready-to-publish website from a short description. Instead of dragging elements around or picking templates, you describe what you need — like "a portfolio for a wedding photographer" or "an online store for handmade ceramics" — and the AI creates the site structure, design, and content for you. Strikingly\'s generators are tuned for specific industries and goals, so the output is relevant from the start.' },
    { q: 'How is a generator different from a template?', a: 'A template is a pre-designed layout you fill in manually — you pick colors, drag sections, and write every piece of text. A generator does that work for you. Describe your goal, and the AI picks the right structure, writes starter copy, and selects images that fit your industry. You can still customize everything after, but you start with a complete site rather than a blank canvas.' },
    { q: 'Are these generators free to use?', a: 'Yes. Every generator on this page is free to start. You can generate a site, preview it, customize it, and publish it without entering a credit card. Paid plans unlock additional features like custom domains, more pages, and advanced analytics, but the core generation experience costs nothing.' },
    { q: 'What kinds of sites can I build?', a: 'You can build business websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Within each category, our generators are tuned for specific use cases — restaurants, photographers, wedding couples, developers, musicians, podcasters, and dozens more. If you don\'t see a perfect match, you can jump directly into the AI Site Builder and describe exactly what you need.' },
    { q: 'Can I customize what the generator produces?', a: 'Absolutely. The generator gives you a complete starting point, but every element is editable. Change text, swap images, adjust colors, add or remove sections, and connect your own domain. Think of the generator as your first draft — it gets you 80% of the way there, and you refine the rest.' },
    { q: 'Do generated sites work on mobile?', a: 'Yes. Every site built through Strikingly\'s generators is responsive by default. Your site will automatically adapt to phones, tablets, and desktops without any extra work. The preview lets you toggle between device sizes so you can see exactly how your site looks everywhere before publishing.' },
  ],
  footerColumns: [
    { heading: 'Strikingly', links: [{ label: 'About', href: '/about' }, { label: 'Pricing', href: '/pricing' }, { label: 'Templates', href: '/templates' }] },
    { heading: 'Support', links: [{ label: 'Support', href: '/support' }, { label: 'Blog', href: '/blog' }] },
    { heading: 'Legal', links: [{ label: 'Terms', href: '/terms' }, { label: 'Privacy', href: '/privacy' }] },
    { heading: 'Generators', links: [{ label: 'Websites', href: '/generators#websites' }, { label: 'Online Stores', href: '/generators#stores' }, { label: 'Blogs', href: '/generators#blogs' }] },
  ],
}

const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-for-beginners' },
]

const categories = [
  { name: 'WEBSITES', slug: 'websites', description: 'AI-built business and personal sites for any goal.' },
  { name: 'LANDING PAGES', slug: 'landing-pages', description: 'Single-page sites built to convert visitors fast.' },
  { name: 'PORTFOLIOS', slug: 'portfolios', description: 'Showcase your work with a clean, focused site.' },
  { name: 'BLOGS', slug: 'blogs', description: 'Publish-ready blogs with built-in SEO basics.' },
  { name: 'ONLINE STORES', slug: 'stores', description: 'Sell products online with payments built in.' },
  { name: 'LINK-IN-BIO', slug: 'link-in-bio', description: 'One link, all your places. Made for creators.' },
]

const allGenerators = {
  websites: [
    { name: 'AI Website Generator', description: 'Describe your business, get a full site', slug: 'ai-website-generator' },
    { name: 'Free Website Builder', description: 'Build a complete site at no cost', slug: 'free-website-builder' },
    { name: 'Website Builder for Photographers', description: 'Portfolio sites that showcase your best work', slug: 'website-builder-for-photographers' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
    { name: 'Wedding Website Generator', description: 'Share your day with guests', slug: 'wedding-website-generator' },
    { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
    { name: 'Business Website Builder', description: 'Professional sites for any business', slug: 'business-website-builder' },
    { name: 'Personal Website Generator', description: 'Your online home, built by AI', slug: 'personal-website-generator' },
    { name: 'AI Website Builder for Small Business', description: 'Get found online with an AI-built site', slug: 'ai-website-builder-for-small-business' },
    { name: 'Website Builder for Yoga Instructors', description: 'Class schedules, bookings, and wellness content', slug: 'website-builder-for-yoga-instructors' },
    { name: 'Nonprofit Website Generator', description: 'Mission, donations, and volunteer pages', slug: 'nonprofit-website-generator' },
    { name: 'Real Estate Website Builder', description: 'Listings, tours, and agent profiles', slug: 'real-estate-website-builder' },
  ],
  'landing-pages': [
    { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
    { name: 'Free Landing Page Builder', description: 'Create high-converting pages for free', slug: 'free-landing-page-builder' },
    { name: 'Product Launch Landing Page', description: 'Build hype before your launch day', slug: 'product-launch-landing-page' },
    { name: 'Event Landing Page Generator', description: 'Registration and details in one scroll', slug: 'event-landing-page-generator' },
    { name: 'Lead Gen Landing Page Builder', description: 'Capture emails and grow your list', slug: 'lead-gen-landing-page-builder' },
    { name: 'Sales Landing Page Generator', description: 'One page that closes the deal', slug: 'sales-landing-page-generator' },
    { name: 'App Landing Page Builder', description: 'Showcase your app and drive downloads', slug: 'app-landing-page-builder' },
    { name: 'Coming Soon Page Generator', description: 'A teaser page while you build', slug: 'coming-soon-page-generator' },
    { name: 'Course Landing Page Builder', description: 'Sell your online course with one page', slug: 'course-landing-page-builder' },
    { name: 'Webinar Landing Page Generator', description: 'Registration pages that fill seats', slug: 'webinar-landing-page-generator' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
    { name: 'Portfolio Generator for Designers', description: 'Clean layouts that let your work speak', slug: 'portfolio-generator-for-designers' },
    { name: 'Photography Portfolio Builder', description: 'Full-screen galleries for your images', slug: 'photography-portfolio-builder' },
    { name: 'Writing Portfolio Generator', description: 'Showcase articles, essays, and clips', slug: 'writing-portfolio-generator' },
    { name: 'Developer Portfolio Builder', description: 'Projects, skills, and GitHub links', slug: 'developer-portfolio-builder' },
    { name: 'Model Portfolio Website', description: 'A lookbook site built in minutes', slug: 'model-portfolio-website' },
    { name: 'Architecture Portfolio Generator', description: 'Project pages with large visuals', slug: 'architecture-portfolio-generator' },
    { name: 'Makeup Artist Portfolio', description: 'Before-and-after galleries included', slug: 'makeup-artist-portfolio' },
    { name: 'Videography Portfolio Builder', description: 'Show reels and project breakdowns', slug: 'videography-portfolio-builder' },
    { name: 'Art Portfolio Website', description: 'Galleries and exhibition pages', slug: 'art-portfolio-website' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
    { name: 'AI Blog Builder', description: 'Start with AI-written posts and SEO', slug: 'ai-blog-builder' },
    { name: 'Travel Blog Generator', description: 'Maps, galleries, and story layouts', slug: 'travel-blog-generator' },
    { name: 'Food Blog Builder', description: 'Recipe cards and photo-rich layouts', slug: 'food-blog-builder' },
    { name: 'Personal Blog Generator', description: 'A journal-style site for your thoughts', slug: 'personal-blog-generator' },
    { name: 'Lifestyle Blog Website', description: 'Fashion, wellness, and daily inspiration', slug: 'lifestyle-blog-website' },
    { name: 'News Blog Builder', description: 'Article-first layouts for timely content', slug: 'news-blog-builder' },
    { name: 'Tech Blog Generator', description: 'Code snippets and tutorial layouts', slug: 'tech-blog-generator' },
  ],
  stores: [
    { name: 'Online Store Builder', description: 'Start selling without writing code', slug: 'online-store-builder' },
    { name: 'Ecommerce Website Generator', description: 'A full store, generated by AI', slug: 'ecommerce-website-generator' },
    { name: 'Online Store Builder for Restaurants', description: 'Online ordering and menu management', slug: 'store-builder-for-restaurants' },
    { name: 'Clothing Store Website', description: 'Lookbooks, sizes, and checkout ready', slug: 'clothing-store-website' },
    { name: 'Handmade Goods Store Builder', description: 'Sell crafts and artisanal products', slug: 'handmade-goods-store-builder' },
    { name: 'Digital Products Store', description: 'Sell downloads, courses, and templates', slug: 'digital-products-store' },
    { name: 'Jewelry Store Builder', description: 'Highlight collections with elegant layouts', slug: 'jewelry-store-builder' },
    { name: 'Beauty Products Store', description: 'Skincare and cosmetics, ready to sell', slug: 'beauty-products-store' },
    { name: 'Home Decor Store Generator', description: 'Room-by-room shopping experiences', slug: 'home-decor-store-generator' },
    { name: 'Furniture Store Website', description: 'Catalogs, room views, and checkout', slug: 'furniture-store-website' },
  ],
  'link-in-bio': [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels', slug: 'link-in-bio-generator' },
    { name: 'Instagram Link-in-Bio', description: 'A polished hub for your Instagram followers', slug: 'instagram-link-in-bio' },
    { name: 'TikTok Creator Link Page', description: 'All your content, one tap away', slug: 'tiktok-creator-link-page' },
    { name: 'YouTuber Link Page', description: 'Videos, merch, and social links', slug: 'youtuber-link-page' },
    { name: 'Musician Link-in-Bio', description: 'Streaming links, tour dates, and more', slug: 'musician-link-in-bio' },
    { name: 'Podcaster Link Page', description: 'Episodes, platforms, and newsletter signup', slug: 'podcaster-link-page' },
    { name: 'Freelancer Link Hub', description: 'Portfolio, bookings, and rates in one place', slug: 'freelancer-link-hub' },
    { name: 'Creator Link Page Builder', description: 'A branded page for all your platforms', slug: 'creator-link-page-builder' },
    { name: 'Agency Link-in-Bio', description: 'Case studies, team, and contact links', slug: 'agency-link-in-bio' },
    { name: 'Artist Link-in-Bio', description: 'Music, merch, and tour dates in one link', slug: 'artist-link-in-bio' },
  ],
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function faqIcon() {
  return '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 4.5L6 8.5L10 4.5" stroke="#636972" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
}

function chevronRight() {
  return '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 4L10 8L6 12" stroke="#8159BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
}

function searchIcon() {
  return '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="4.5" stroke="#9CA3AF" stroke-width="1.5"/><path d="M10.5 10.5L14 14" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round"/></svg>'
}

function zapIcon() {
  return '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M11 2L3 11H9L8 18L17 9H11L12 2H11Z" stroke="#8159BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
}

function globeIcon() {
  return '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="7.5" stroke="#8159BB" stroke-width="1.5"/><ellipse cx="10" cy="10" rx="3.5" ry="7.5" stroke="#8159BB" stroke-width="1.5"/><path d="M3 10H17" stroke="#8159BB" stroke-width="1.5"/></svg>'
}

function walletIcon() {
  return '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="2" y="5" width="16" height="11" rx="1.5" stroke="#8159BB" stroke-width="1.5"/><path d="M14 10.5H14.01" stroke="#8159BB" stroke-width="1.5" stroke-linecap="round"/><path d="M2 8H18" stroke="#8159BB" stroke-width="1.5"/></svg>'
}

function categoryIcon(slug) {
  const icons = {
    websites: '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="3" y="3" width="22" height="22" rx="2" stroke="#8159BB" stroke-width="1.5"/><path d="M3 11H25" stroke="#8159BB" stroke-width="1.5"/><circle cx="8" cy="7" r="1" fill="#8159BB"/></svg>',
    'landing-pages': '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="3" y="4" width="22" height="20" rx="2" stroke="#8159BB" stroke-width="1.5"/><path d="M9 14L12 17L19 10" stroke="#8159BB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    portfolios: '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="4" y="6" width="8" height="8" rx="1" stroke="#8159BB" stroke-width="1.5"/><rect x="16" y="6" width="8" height="8" rx="1" stroke="#8159BB" stroke-width="1.5"/><rect x="4" y="16" width="8" height="8" rx="1" stroke="#8159BB" stroke-width="1.5"/><rect x="16" y="16" width="8" height="8" rx="1" stroke="#8159BB" stroke-width="1.5"/></svg>',
    blogs: '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M5 4H15L21 10V24H5V4Z" stroke="#8159BB" stroke-width="1.5"/><path d="M15 4V10H21" stroke="#8159BB" stroke-width="1.5"/><path d="M9 15H15" stroke="#8159BB" stroke-width="1.5" stroke-linecap="round"/><path d="M9 19H19" stroke="#8159BB" stroke-width="1.5" stroke-linecap="round"/></svg>',
    stores: '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M4 7L5.5 13H22.5L24 7H4Z" stroke="#8159BB" stroke-width="1.5"/><circle cx="9" cy="16" r="2" stroke="#8159BB" stroke-width="1.5"/><circle cx="19" cy="16" r="2" stroke="#8159BB" stroke-width="1.5"/></svg>',
    'link-in-bio': '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M11 14H17" stroke="#8159BB" stroke-width="1.5" stroke-linecap="round"/><path d="M14 11V17" stroke="#8159BB" stroke-width="1.5" stroke-linecap="round"/><circle cx="14" cy="14" r="9" stroke="#8159BB" stroke-width="1.5"/></svg>',
  }
  return icons[slug] || icons.websites
}

function heroIllustration() {
  return '<svg width="400" height="280" viewBox="0 0 400 280" fill="none" aria-hidden="true" role="img"><rect x="60" y="10" width="280" height="260" rx="6" fill="#F4F6F8" stroke="#C6C9CD" stroke-width="1"/><rect x="60" y="10" width="280" height="30" rx="6" fill="#8159BB" fill-opacity="0.12"/><circle cx="80" cy="25" r="4" fill="#8159BB" fill-opacity="0.3"/><circle cx="92" cy="25" r="4" fill="#8159BB" fill-opacity="0.3"/><circle cx="104" cy="25" r="4" fill="#8159BB" fill-opacity="0.3"/><rect x="70" y="55" width="180" height="12" rx="3" fill="#C6C9CD"/><rect x="70" y="75" width="260" height="8" rx="3" fill="#E2E4E7"/><rect x="70" y="90" width="240" height="8" rx="3" fill="#E2E4E7"/><rect x="70" y="115" width="260" height="100" rx="4" fill="#E2E4E7"/><rect x="70" y="230" width="80" height="24" rx="4" fill="url(#grad)"/><defs><linearGradient id="grad" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#7671FF"/><stop offset="1" stop-color="#CB0C9F"/></linearGradient></defs></svg>'
}

function renderFeaturedCard(gen) {
  return `<a href="/generators/${gen.slug}" class="generator-card flex flex-col gap-[8px] group">
    <div class="flex items-start justify-between gap-[8px]">
      <span class="font-heading font-bold text-[14px] text-[#4B5056] uppercase leading-[1.2]">${esc(gen.name)}</span>
      <span class="category-tag shrink-0">${esc(gen.category)}</span>
    </div>
    <p class="text-[#636972] text-[13px] leading-[1.5] m-0">${esc(gen.description)}</p>
  </a>`
}

function renderCategoryCard(cat) {
  return `<a href="/generators#${cat.slug}" class="generator-card flex items-start gap-[14px] group">
    <span class="shrink-0 mt-[2px]" aria-hidden="true">${categoryIcon(cat.slug)}</span>
    <div class="flex-1 min-w-0">
      <span class="font-heading font-bold text-[14px] text-[#4B5056] uppercase leading-[1.2]">${esc(cat.name)}</span>
      <p class="text-[#636972] text-[13px] leading-[1.5] m-0 mt-[4px]">${esc(cat.description)}</p>
    </div>
    <span class="shrink-0 mt-[2px]" aria-hidden="true">${chevronRight()}</span>
  </a>`
}

function renderAllGeneratorCard(gen, catSlug) {
  return `<a href="/generators/${gen.slug}" class="generator-card flex flex-col gap-[8px] group">
    <span aria-hidden="true" class="w-full h-[60px] bg-[#F4F6F8] rounded-[2px] flex items-center justify-center">${categoryIcon(catSlug)}</span>
    <span class="font-heading font-bold text-[14px] text-[#4B5056] uppercase leading-[1.2]">${esc(gen.name)}</span>
    <p class="text-[#636972] text-[13px] leading-[1.5] m-0">${esc(gen.description)}</p>
  </a>`
}

function renderBenefit(b, idx) {
  const icons = [zapIcon, globeIcon, walletIcon]
  return `<div class="flex flex-col items-center text-center gap-[10px]">
    <span aria-hidden="true">${icons[idx]()}</span>
    <h3 class="font-heading font-bold text-[15px] text-[#4B5056] uppercase leading-[1.2] m-0">${esc(b.title)}</h3>
    <p class="text-[#636972] text-[14px] leading-[1.5] m-0 max-w-[280px]">${esc(b.desc)}</p>
  </div>`
}

function renderStep(step, idx) {
  return `<div class="flex flex-col items-center text-center gap-[8px]">
    <span class="w-[40px] h-[40px] rounded-full bg-[#8159BB] text-white flex items-center justify-center font-heading font-bold text-[16px]" aria-hidden="true">${idx + 1}</span>
    <h3 class="font-heading font-bold text-[15px] text-[#4B5056] uppercase leading-[1.2] m-0">${esc(step.title)}</h3>
    <p class="text-[#636972] text-[14px] leading-[1.5] m-0 max-w-[300px]">${esc(step.desc)}</p>
  </div>`
}

function renderFaq(faq, idx) {
  const isOpen = idx === 0
  return `<div class="faq-item border-b border-[#E2E4E7]">
    <button class="faq-accordion-btn" aria-expanded="${isOpen}" aria-controls="faq-panel-${idx}">
      <span class="font-heading font-bold text-[14px] text-[#4B5056] uppercase leading-[1.2]">${esc(faq.q)}</span>
      <span class="faq-icon ${isOpen ? 'faq-icon-open' : ''}" aria-hidden="true">${faqIcon()}</span>
    </button>
    <div id="faq-panel-${idx}" role="region" class="faq-panel ${isOpen ? 'faq-panel-open' : ''}">
      <div class="faq-panel-inner">
        <p class="text-[#636972] text-[14px] leading-[1.6] m-0">${esc(faq.a)}</p>
      </div>
    </div>
  </div>`
}

const html = `<!-- Static prerender: all content visible without JavaScript -->
<div class="generators-page">
  <header class="bg-white border-b border-[#E2E4E7]">
    <div class="content-container flex items-center h-[52px]">
      <a href="/" class="no-underline">
        <span class="font-heading font-bold text-[18px] tracking-[0.04em] uppercase text-[#2E2E2F]">${esc(strings.brand)}</span>
      </a>
    </div>
  </header>
  <nav aria-label="Breadcrumb" class="content-container py-[10px]">
    <ol class="flex items-center gap-[6px] text-[12px] text-[#636972] list-none m-0 p-0">
      <li class="flex items-center"><a href="/" class="text-[#636972] hover:text-[#2E2E2F] no-underline">Strikingly</a></li>
      <li aria-hidden="true" class="text-[#C6C9CD]">&gt;</li>
      <li class="text-[#2E2E2F]">AI Generators</li>
    </ol>
  </nav>
  <main>
    <section class="hero-gradient-wash">
      <div class="content-container py-[60px] md:py-[80px]">
        <div class="flex flex-col md:flex-row items-center gap-[40px] md:gap-[60px]">
          <div class="flex-1">
            <h1 class="m-0 mb-[16px]">
              <span class="block font-heading font-bold text-[32px] md:text-[44px] text-[#2E2E2F] uppercase leading-[1.2]">${esc(strings.heroH1Line1)}</span>
              <span class="block font-heading font-bold text-[32px] md:text-[44px] uppercase leading-[1.2] ai-gradient-text">${esc(strings.heroH1Line2)}</span>
            </h1>
            <p class="text-[#636972] text-[15px] leading-[1.6] max-w-[480px] mb-[24px]">${esc(strings.heroSub)}</p>
            <div class="flex flex-col sm:flex-row gap-[10px]">
              <a href="/s/ai_site_builder" class="btn btn-gradient-big">${esc(strings.ctaStart)}</a>
              <a href="#all-generators" class="btn btn-ghost">${esc(strings.ctaBrowse)}</a>
            </div>
          </div>
          <div class="hidden md:block shrink-0">${heroIllustration()}</div>
        </div>
      </div>
    </section>
    <section class="section bg-[#F4F6F8] py-[50px]">
      <div class="content-container">
        <h2 class="section-heading">${esc(strings.featuredHeading)}</h2>
        <p class="section-sub">${esc(strings.featuredSub)}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          ${featuredGenerators.map(g => renderFeaturedCard(g)).join('')}
        </div>
      </div>
    </section>
    <section class="section py-[50px]">
      <div class="content-container">
        <h2 class="section-heading">${esc(strings.browseCatHeading)}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          ${categories.map(c => renderCategoryCard(c)).join('')}
        </div>
      </div>
    </section>
    <section id="all-generators" class="section bg-[#F4F6F8] py-[50px]">
      <div class="content-container">
        <h2 class="section-heading">${esc(strings.allGeneratorsHeading)}</h2>
        <p class="section-sub">${esc(strings.allGeneratorsSub)}</p>
        <div class="search-input-wrapper mb-[30px] js-search-wrapper">
          <span aria-hidden="true" class="shrink-0 ml-[12px]">${searchIcon()}</span>
          <input type="search" aria-label="${esc(strings.searchLabel)}" placeholder="${esc(strings.searchPlaceholder)}" class="search-input" />
        </div>
        ${Object.entries(allGenerators).map(([catSlug, gens]) => {
          const cat = categories.find(c => c.slug === catSlug)
          const catName = cat ? cat.name : catSlug.replace(/-/g, ' ')
          const catDesc = cat ? cat.description : ''
          const hasToggle = gens.length > 9
          return `<div id="${catSlug}" class="mb-[40px] scroll-mt-[70px]">
            <h3 class="font-heading font-bold text-[18px] md:text-[20px] text-[#4B5056] uppercase leading-[1.2] mb-[6px]">${esc(catName)}</h3>
            <p class="text-[#636972] text-[13px] mb-[20px]">${esc(catDesc)}</p>
            <div id="cat-grid-${catSlug}" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]"${hasToggle ? ' data-collapsible="true"' : ''}>
              ${gens.map((g, idx) => renderAllGeneratorCard(g, catSlug)).join('')}
            </div>
            ${hasToggle ? `<div class="text-center mt-[20px]"><button class="btn btn-ghost js-toggle-btn" aria-expanded="false" aria-controls="cat-grid-${catSlug}" data-show-text="Show all ${gens.length} generators" data-hide-text="Show fewer">Show all ${gens.length} generators</button></div>` : ''}
          </div>`
        }).join('')}
      </div>
    </section>
    <section class="section py-[50px]">
      <div class="content-container">
        <h2 class="section-heading">${esc(strings.howItWorksHeading)}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-[30px]">
          ${strings.steps.map((s, i) => renderStep(s, i)).join('')}
        </div>
      </div>
    </section>
    <section class="section bg-[#F4F6F8] py-[50px]">
      <div class="content-container">
        <h2 class="section-heading">${esc(strings.whyHeading)}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-[30px]">
          ${strings.benefits.map((b, i) => renderBenefit(b, i)).join('')}
        </div>
      </div>
    </section>
    <section class="section py-[50px]">
      <div class="content-container" style="max-width:720px">
        <h2 class="section-heading">${esc(strings.faqHeading)}</h2>
        <div class="mt-[30px]">
          ${strings.faqs.map((f, i) => renderFaq(f, i)).join('')}
        </div>
      </div>
    </section>
    <section class="section py-[60px]">
      <div class="content-container text-center">
        <h2 class="section-heading">${esc(strings.closingHeading)}</h2>
        <p class="section-sub">${esc(strings.closingSub)}</p>
        <a href="/s/ai_site_builder" class="btn btn-gradient-big mt-[20px] inline-flex">${esc(strings.closingCta)}</a>
      </div>
    </section>
  </main>
  <footer class="bg-[#F4F6F8] border-t border-[#E2E4E7] py-[40px]">
    <div class="content-container">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-[30px]">
        ${strings.footerColumns.map(col => `<div>
          <h4 class="font-heading font-bold text-[13px] text-[#4B5056] uppercase leading-[1.2] mb-[12px]">${esc(col.heading)}</h4>
          <ul class="list-none m-0 p-0 flex flex-col gap-[6px]">
            ${col.links.map(l => `<li><a href="${esc(l.href)}" class="text-[#636972] text-[13px] hover:text-[#2E2E2F] no-underline">${esc(l.label)}</a></li>`).join('')}
          </ul>
        </div>`).join('')}
      </div>
      <div class="mt-[30px] pt-[20px] border-t border-[#E2E4E7]">
        <p class="text-[#9CA3AF] text-[12px] m-0">${esc(strings.footerCopyright)}</p>
      </div>
    </div>
  </footer>
</div>`

function prerender() {
  const distDir = join(__dirname, 'dist')
  const indexPath = join(distDir, 'index.html')

  if (!existsSync(indexPath)) {
    console.log('No dist/index.html found, skipping prerender')
    return
  }

  const template = readFileSync(indexPath, 'utf-8')
  const result = template.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  )

  writeFileSync(indexPath, result)
  console.log('Prerender: injected static HTML into dist/index.html')
}

try {
  prerender()
} catch (err) {
  console.error('Prerender failed:', err.message)
  console.log('Falling back to client-only rendering')
}
