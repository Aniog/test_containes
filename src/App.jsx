import { useEffect, useRef } from 'react'
import './App.css'

const strings = {
  en: {
    breadcrumbStrikingly: 'Strikingly',
    breadcrumbGenerators: 'AI Generators',
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSub: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    ctaStart: 'START BUILDING - IT\'S FREE',
    ctaBrowse: 'BROWSE GENERATORS',
    featuredHeading: 'FEATURED GENERATORS',
    featuredSub: 'A few common starting points.',
    browseHeading: 'BROWSE BY CATEGORY',
    allHeading: 'ALL GENERATORS',
    allSub: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    resultsMatch: 'generators match',
    noResults: 'No generators match your search.',
    clearSearch: 'Clear search',
    cantFind: 'Can\'t find it? Start with our AI builder.',
    howHeading: 'HOW IT WORKS',
    step1Title: 'PICK A GENERATOR',
    step1Body: 'Browse by category or search to find one that fits your goal.',
    step2Title: 'DESCRIBE YOUR SITE',
    step2Body: 'Tell our AI builder about your business in a sentence or two.',
    step3Title: 'GENERATE AND PUBLISH',
    step3Body: 'Get a fully built site in seconds. Customize anything, then go live.',
    whyHeading: 'WHY STRIKINGLY',
    why1Title: 'LIVE IN SECONDS',
    why1Body: 'Describe your site, we build it. No setup, no learning curve.',
    why2Title: 'MOBILE BY DEFAULT',
    why2Body: 'Every generator produces responsive sites that work on any device.',
    why3Title: 'FREE TO START',
    why3Body: 'Generate, customize, and publish without a credit card.',
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    closingHeadline: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    showAll: 'Show all',
    generators: 'generators',
  },
}

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

const categoryCards = [
  { name: 'Websites', desc: 'AI-built business and personal sites for any goal.', slug: 'websites', anchor: '#websites' },
  { name: 'Landing Pages', desc: 'Single-page sites built to convert visitors fast.', slug: 'landing-pages', anchor: '#landing-pages' },
  { name: 'Portfolios', desc: 'Showcase your work with a clean, focused site.', slug: 'portfolios', anchor: '#portfolios' },
  { name: 'Blogs', desc: 'Publish-ready blogs with built-in SEO basics.', slug: 'blogs', anchor: '#blogs' },
  { name: 'Online Stores', desc: 'Sell products online with payments built in.', slug: 'stores', anchor: '#stores' },
  { name: 'Link-in-Bio', desc: 'One link, all your places. Made for creators.', slug: 'link-in-bio', anchor: '#link-in-bio' },
]

const directoryData = {
  websites: {
    title: 'Websites',
    desc: 'AI-built business and personal sites for any goal.',
    generators: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site', slug: 'ai-website-generator' },
      { name: 'Free Website Builder for Photographers', desc: 'Stunning portfolio sites for photo pros', slug: 'free-website-builder-for-photographers' },
      { name: 'One-Page Wedding Website Builder', desc: 'Share your day with guests', slug: 'one-page-wedding-website-builder' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done', slug: 'restaurant-website-builder' },
      { name: 'AI Website Builder for Small Business', desc: 'Launch a professional site in minutes', slug: 'ai-website-builder-for-small-business' },
      { name: 'Beautiful Website Generator', desc: 'Gorgeous designs, zero design skills needed', slug: 'beautiful-website-generator' },
      { name: 'No-Code Website Builder', desc: 'Build a site without touching code', slug: 'no-code-website-builder' },
      { name: 'AI Website Generator for Startups', desc: 'From idea to live site fast', slug: 'ai-website-generator-for-startups' },
      { name: 'Free Website Builder for Artists', desc: 'Showcase your art online', slug: 'free-website-builder-for-artists' },
      { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll', slug: 'one-page-website-builder' },
      { name: 'AI Website Builder for Coaches', desc: 'Professional sites for coaches and consultants', slug: 'ai-website-builder-for-coaches' },
      { name: 'Website Builder for Real Estate', desc: 'Listings, tours, and contact forms', slug: 'website-builder-for-real-estate' },
    ],
  },
  'landing-pages': {
    title: 'Landing Pages',
    desc: 'Single-page sites built to convert visitors fast.',
    generators: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert', slug: 'ai-landing-page-maker' },
      { name: 'Free Landing Page Generator', desc: 'Launch a converting page in minutes', slug: 'free-landing-page-generator' },
      { name: 'Landing Page Builder for SaaS', desc: 'Optimized for software signups', slug: 'landing-page-builder-for-saas' },
      { name: 'AI Landing Page for Startups', desc: 'From pitch to published page', slug: 'ai-landing-page-for-startups' },
      { name: 'One-Page Landing Page Builder', desc: 'Simple, focused, high-converting', slug: 'one-page-landing-page-builder' },
      { name: 'Landing Page Generator for Products', desc: 'Showcase and sell your product', slug: 'landing-page-generator-for-products' },
      { name: 'Beautiful Landing Page Maker', desc: 'Stunning designs that convert', slug: 'beautiful-landing-page-maker' },
      { name: 'No-Code Landing Page Builder', desc: 'Build without writing code', slug: 'no-code-landing-page-builder' },
      { name: 'AI Landing Page for Apps', desc: 'Download-focused app pages', slug: 'ai-landing-page-for-apps' },
      { name: 'Landing Page Builder for Events', desc: 'Promote and sell event tickets', slug: 'landing-page-builder-for-events' },
      { name: 'Free AI Landing Page Generator', desc: 'No cost, full conversion power', slug: 'free-ai-landing-page-generator' },
      { name: 'Landing Page Generator for Courses', desc: 'Sell courses with a single page', slug: 'landing-page-generator-for-courses' },
    ],
  },
  portfolios: {
    title: 'Portfolios',
    desc: 'Showcase your work with a clean, focused site.',
    generators: [
      { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', desc: 'Showcase your design work', slug: 'portfolio-generator-for-designers' },
      { name: 'AI Portfolio Builder for Photographers', desc: 'Stunning image-focused portfolios', slug: 'ai-portfolio-builder-for-photographers' },
      { name: 'Portfolio Website Builder for Artists', desc: 'Let your art speak for itself', slug: 'portfolio-website-builder-for-artists' },
      { name: 'One-Page Portfolio Generator', desc: 'Simple, elegant, single-scroll', slug: 'one-page-portfolio-generator' },
      { name: 'Portfolio Builder for Writers', desc: 'Showcase your articles and stories', slug: 'portfolio-builder-for-writers' },
      { name: 'AI Portfolio Generator for Architects', desc: 'Visual portfolios for built work', slug: 'ai-portfolio-generator-for-architects' },
      { name: 'Free Portfolio Website Builder', desc: 'No cost, full creative control', slug: 'free-portfolio-website-builder' },
      { name: 'Portfolio Generator for Freelancers', desc: 'Land more clients with a portfolio', slug: 'portfolio-generator-for-freelancers' },
      { name: 'Beautiful Portfolio Maker', desc: 'Gorgeous templates for any creative', slug: 'beautiful-portfolio-maker' },
      { name: 'No-Code Portfolio Builder', desc: 'Build your portfolio without code', slug: 'no-code-portfolio-builder' },
      { name: 'AI Portfolio Builder for Musicians', desc: 'Share your sound and story', slug: 'ai-portfolio-builder-for-musicians' },
    ],
  },
  blogs: {
    title: 'Blogs',
    desc: 'Publish-ready blogs with built-in SEO basics.',
    generators: [
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Generator', desc: 'Write and publish with AI assistance', slug: 'ai-blog-generator' },
      { name: 'Free Blog Website Builder', desc: 'Start blogging without spending a dime', slug: 'free-blog-website-builder' },
      { name: 'Blog Builder for Writers', desc: 'Focus on writing, we handle the rest', slug: 'blog-builder-for-writers' },
      { name: 'One-Page Blog Generator', desc: 'Simple blogs, single scroll', slug: 'one-page-blog-generator' },
      { name: 'AI Blog Generator for Businesses', desc: 'Content that drives growth', slug: 'ai-blog-generator-for-businesses' },
      { name: 'Blog Website Builder for Photographers', desc: 'Visual storytelling made easy', slug: 'blog-website-builder-for-photographers' },
      { name: 'No-Code Blog Builder', desc: 'Publish without touching code', slug: 'no-code-blog-builder' },
      { name: 'Blog Generator for Entrepreneurs', desc: 'Share your expertise and insights', slug: 'blog-generator-for-entrepreneurs' },
      { name: 'Beautiful Blog Maker', desc: 'Clean, readable, beautiful designs', slug: 'beautiful-blog-maker' },
      { name: 'AI Blog Generator for News', desc: 'Fast publishing for news sites', slug: 'ai-blog-generator-for-news' },
      { name: 'Free AI Blog Generator', desc: 'No cost, full publishing power', slug: 'free-ai-blog-generator' },
    ],
  },
  stores: {
    title: 'Online Stores',
    desc: 'Sell products online with payments built in.',
    generators: [
      { name: 'Online Store Builder', desc: 'Start selling without writing code', slug: 'online-store-builder' },
      { name: 'AI Store Generator', desc: 'Launch a store in minutes with AI', slug: 'ai-store-generator' },
      { name: 'Free Online Store Builder', desc: 'Sell products without upfront costs', slug: 'free-online-store-builder' },
      { name: 'Store Builder for Restaurants', desc: 'Take orders online with ease', slug: 'store-builder-for-restaurants' },
      { name: 'Ecommerce Website Builder', desc: 'Full-featured online stores', slug: 'ecommerce-website-builder' },
      { name: 'AI Store Builder for Boutiques', desc: 'Beautiful stores for fashion brands', slug: 'ai-store-builder-for-boutiques' },
      { name: 'One-Page Store Builder', desc: 'Simple stores, single scroll', slug: 'one-page-store-builder' },
      { name: 'Store Builder for Artists', desc: 'Sell your art and prints online', slug: 'store-builder-for-artists' },
      { name: 'No-Code Store Builder', desc: 'Build a store without code', slug: 'no-code-store-builder' },
      { name: 'AI Store Generator for Handmade', desc: 'Perfect for makers and crafters', slug: 'ai-store-generator-for-handmade' },
      { name: 'Beautiful Store Maker', desc: 'Gorgeous designs that sell', slug: 'beautiful-store-maker' },
      { name: 'Store Builder for Digital Products', desc: 'Sell downloads and courses', slug: 'store-builder-for-digital-products' },
    ],
  },
  'link-in-bio': {
    title: 'Link-in-Bio',
    desc: 'One link, all your places. Made for creators.',
    generators: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels', slug: 'link-in-bio-generator' },
      { name: 'AI Link-in-Bio Builder', desc: 'Smart links that grow with you', slug: 'ai-link-in-bio-builder' },
      { name: 'Free Link-in-Bio Generator', desc: 'No cost, full customization', slug: 'free-link-in-bio-generator' },
      { name: 'Link-in-Bio for Creators', desc: 'Built for influencers and creators', slug: 'link-in-bio-for-creators' },
      { name: 'Link-in-Bio for Musicians', desc: 'Share your music, shows, and merch', slug: 'link-in-bio-for-musicians' },
      { name: 'One-Page Link-in-Bio Builder', desc: 'Simple, clean, effective', slug: 'one-page-link-in-bio-builder' },
      { name: 'AI Link-in-Bio for Brands', desc: 'Professional links for businesses', slug: 'ai-link-in-bio-for-brands' },
      { name: 'Beautiful Link-in-Bio Maker', desc: 'Gorgeous pages that match your brand', slug: 'beautiful-link-in-bio-maker' },
      { name: 'No-Code Link-in-Bio Builder', desc: 'Build your link page without code', slug: 'no-code-link-in-bio-builder' },
      { name: 'Link-in-Bio for Podcasters', desc: 'Share episodes, sponsors, and more', slug: 'link-in-bio-for-podcasters' },
      { name: 'Free AI Link-in-Bio Generator', desc: 'Smart links, no subscription', slug: 'free-ai-link-in-bio-generator' },
      { name: 'Link-in-Bio for Coaches', desc: 'Share programs, bookings, and content', slug: 'link-in-bio-for-coaches' },
    ],
  },
}

const faqs = [
  {
    q: 'What is an AI site generator?',
    a: 'An AI site generator is a tool that uses artificial intelligence to build a complete website based on your description. Instead of choosing templates and dragging elements into place, you simply tell the AI what kind of site you want, and it generates a fully designed, functional site in seconds.',
    a2: 'Strikingly\'s AI site builder handles everything from layout and copy to images and responsive design, so you can go from idea to a live website without writing code or learning design software.',
  },
  {
    q: 'How is a generator different from a template?',
    a: 'A template is a static starting point that you customize manually. A generator is dynamic: it builds a unique site tailored to your specific content, goals, and style preferences. With a template, you fill in the blanks. With a generator, the blanks are filled for you based on what you describe.',
    a2: 'Generators also adapt to your industry, audience, and objectives, producing layouts and copy that are relevant to your project rather than generic.',
  },
  {
    q: 'Are these generators free to use?',
    a: 'Yes. You can browse generators, describe your site, and generate a fully built website without paying anything. Strikingly does not require a credit card to start building, and you can publish your site for free.',
    a2: 'Paid plans are available if you want a custom domain, more storage, or advanced features, but the core generation and publishing experience is free.',
  },
  {
    q: 'What kinds of sites can I build?',
    a: 'Strikingly\'s generators cover a wide range of site types: business websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. Each generator is optimized for its specific goal, whether that\'s converting visitors, showcasing work, or selling products.',
    a2: 'If you have a specific use case in mind, start with the closest category and the AI will adapt the output to your needs.',
  },
  {
    q: 'Can I customize what the generator produces?',
    a: 'Absolutely. After the AI generates your site, you can edit every element: text, images, layout, colors, and sections. The generator gives you a strong starting point, but you have full control to make it yours.',
    a2: 'You can also regenerate sections or ask the AI for revisions if something doesn\'t match your vision.',
  },
  {
    q: 'Do generated sites work on mobile?',
    a: 'Yes. Every site generated by Strikingly is responsive by default, meaning it automatically adjusts to look great on phones, tablets, and desktops. You don\'t need to do anything special to make it mobile-friendly.',
    a2: 'You can preview and fine-tune the mobile view at any time using the built-in mobile editor.',
  },
]

function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const searchInput = root.querySelector('#generator-search')
    const searchCount = root.querySelector('#search-count')
    const searchEmpty = root.querySelector('#search-empty')
    const clearSearchBtn = root.querySelector('#clear-search')
    const subsections = root.querySelectorAll('.directory-subsection')
    const showAllButtons = root.querySelectorAll('.show-all-btn')
    const faqButtons = root.querySelectorAll('.faq-question')

    const INITIAL_VISIBLE = 6

    const updateSearch = (query) => {
      const q = query.trim().toLowerCase()
      let totalMatches = 0

      subsections.forEach((section) => {
        const cards = section.querySelectorAll('.card-generator')
        let sectionMatches = 0

        cards.forEach((card) => {
          const name = (card.querySelector('.card-title')?.textContent || '').toLowerCase()
          const desc = (card.querySelector('.card-desc')?.textContent || '').toLowerCase()
          const category = (section.querySelector('.subsection-heading')?.textContent || '').toLowerCase()
          const match = !q || name.includes(q) || desc.includes(q) || category.includes(q)
          card.classList.toggle('visible', match)
          if (match) sectionMatches++
        })

        totalMatches += sectionMatches
        section.style.display = sectionMatches > 0 || !q ? '' : 'none'
      })

      if (searchCount) {
        searchCount.textContent = q ? `${totalMatches} ${strings.en.resultsMatch}` : ''
      }

      if (searchEmpty) {
        searchEmpty.style.display = q && totalMatches === 0 ? '' : 'none'
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => updateSearch(e.target.value))
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = ''
        updateSearch('')
      })
    }

    showAllButtons.forEach((btn) => {
      const targetId = btn.getAttribute('data-target')
      const grid = root.querySelector(`#${targetId} .subsection-grid`)
      if (!grid) return

      const total = grid.querySelectorAll('.card-generator').length
      btn.querySelector('.show-all-count')?.remove()
      const countSpan = document.createElement('span')
      countSpan.className = 'show-all-count'
      countSpan.textContent = `${total} ${strings.en.generators}`
      btn.appendChild(countSpan)

      if (total > INITIAL_VISIBLE) {
        btn.style.display = ''
        const cards = Array.from(grid.querySelectorAll('.card-generator'))
        cards.forEach((card, idx) => {
          card.classList.toggle('visible', idx < INITIAL_VISIBLE)
        })
        grid.classList.add('collapsed')
        btn.setAttribute('aria-expanded', 'false')

        btn.addEventListener('click', () => {
          const isCollapsed = grid.classList.toggle('collapsed')
          btn.setAttribute('aria-expanded', isCollapsed ? 'false' : 'true')
          btn.textContent = isCollapsed ? `${strings.en.showAll} ` : 'Show less'
          btn.appendChild(countSpan)
        })
      } else {
        btn.style.display = 'none'
      }
    })

    faqButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true'
        const answerId = btn.getAttribute('aria-controls')
        const answer = answerId ? root.querySelector(`#${answerId}`) : null
        if (answer) answer.hidden = expanded
        btn.setAttribute('aria-expanded', expanded ? 'false' : 'true')
      })
    })
  }, [])

  return (
    <div className="page" ref={containerRef}>
      {/* Section 0: Top bar */}
      <header className="top-bar">
        <div className="container">
          <a href="/" className="logo" aria-label="Strikingly AI home">
            <svg width="140" height="28" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M8.5 4.5h4v19h-4z" fill="#8159BB"/>
              <path d="M17 4.5h4.5l7 14.5V4.5h4v19h-4.5L21 9v14.5h-4z" fill="#4B5056"/>
              <text x="32" y="20" fontFamily="Josefin Sans, sans-serif" fontWeight="700" fontSize="14" fill="#4B5056" letterSpacing="1">STRIKINGLY</text>
              <text x="32" y="20" fontFamily="Josefin Sans, sans-serif" fontWeight="700" fontSize="14" fill="#8159BB" letterSpacing="1" clipPath="url(#ai-clip)">AI</text>
              <defs>
                <clipPath id="ai-clip"><rect x="32" y="6" width="16" height="14"/></clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <div className="container">
          <ol>
            <li><a href="/">{strings.en.breadcrumbStrikingly}</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{strings.en.breadcrumbGenerators}</li>
          </ol>
        </div>
      </nav>

      {/* Section 2: Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>
              <span className="hero-line1">{strings.en.heroLine1}</span>
              <span className="hero-line2">{strings.en.heroLine2}</span>
            </h1>
            <p className="hero-sub">{strings.en.heroSub}</p>
            <div className="hero-actions">
              <a href="/s/ai_site_builder" className="btn btn-primary btn-large">{strings.en.ctaStart}</a>
              <a href="#all-generators" className="btn btn-ghost btn-large">{strings.en.ctaBrowse}</a>
            </div>
          </div>
          <div className="hero-illustration" aria-hidden="true">
            <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" width="400" height="300">
              <rect x="40" y="30" width="320" height="220" rx="8" stroke="#8159BB" strokeWidth="2" fill="none"/>
              <rect x="60" y="60" width="100" height="8" rx="4" fill="#E2E4E7"/>
              <rect x="60" y="80" width="160" height="8" rx="4" fill="#E2E4E7"/>
              <rect x="60" y="110" width="280" height="100" rx="4" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1"/>
              <rect x="80" y="130" width="80" height="60" rx="4" fill="#fff" stroke="#C6C9CD" strokeWidth="1"/>
              <rect x="180" y="130" width="140" height="8" rx="4" fill="#E2E4E7"/>
              <rect x="180" y="150" width="120" height="6" rx="3" fill="#E2E4E7"/>
              <rect x="180" y="166" width="100" height="6" rx="3" fill="#E2E4E7"/>
              <rect x="180" y="182" width="60" height="6" rx="3" fill="#E2E4E7"/>
              <circle cx="340" cy="50" r="12" fill="#8159BB" opacity="0.1"/>
              <path d="M334 50l3 3 7-7" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="section">
        <div className="container">
          <h2 className="section-heading">{strings.en.featuredHeading}</h2>
          <p className="section-sub">{strings.en.featuredSub}</p>
          <div className="grid grid-3">
            {featuredGenerators.map((g) => (
              <a key={g.slug} href={`/generators/${g.slug}`} className="card card-link">
                <h3 className="card-title">{g.name}</h3>
                <p className="card-desc">{g.desc}</p>
                <span className="tag">{g.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-heading">{strings.en.browseHeading}</h2>
          <div className="grid grid-3">
            {categoryCards.map((c) => (
              <a key={c.slug} href={c.anchor} className="card card-category">
                <div className="category-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                    <rect x="8" y="8" width="32" height="32" rx="4" stroke="#8159BB" strokeWidth="2" fill="none"/>
                    <path d="M16 24h16M24 16v16" stroke="#8159BB" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="card-title">{c.name}</h3>
                <p className="card-desc">{c.desc}</p>
                <span className="card-arrow" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 4l6 6-6 6" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators */}
      <section className="section" id="all-generators">
        <div className="container">
          <h2 className="section-heading">{strings.en.allHeading}</h2>
          <p className="section-sub">{strings.en.allSub}</p>
          <div className="search-wrap">
            <label htmlFor="generator-search" className="sr-only">{strings.en.searchLabel}</label>
            <span className="search-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </span>
            <input id="generator-search" type="search" placeholder={strings.en.searchPlaceholder} className="search-input" autoComplete="off"/>
            <span id="search-count" className="search-count" aria-live="polite"></span>
          </div>
          {Object.entries(directoryData).map(([key, section]) => (
            <div key={key} id={key} className="directory-subsection" data-category={key}>
              <h3 className="subsection-heading">{section.title}</h3>
              <p className="subsection-desc">{section.desc}</p>
              <div className="grid grid-3 subsection-grid">
                {section.generators.map((g) => (
                  <a key={g.slug} href={`/generators/${g.slug}`} className="card card-generator">
                    <div className="generator-thumb" aria-hidden="true">
                      <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="60">
                        <rect x="4" y="4" width="72" height="52" rx="3" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1"/>
                        <rect x="10" y="12" width="24" height="4" rx="2" fill="#E2E4E7"/>
                        <rect x="10" y="22" width="50" height="24" rx="2" fill="#fff" stroke="#C6C9CD" strokeWidth="1"/>
                        <rect x="14" y="28" width="16" height="12" rx="1" fill="#E2E4E7"/>
                        <rect x="34" y="28" width="22" height="3" rx="1" fill="#E2E4E7"/>
                        <rect x="34" y="35" width="18" height="3" rx="1" fill="#E2E4E7"/>
                        <rect x="34" y="42" width="12" height="3" rx="1" fill="#E2E4E7"/>
                      </svg>
                    </div>
                    <h4 className="card-title">{g.name}</h4>
                    <p className="card-desc">{g.desc}</p>
                  </a>
                ))}
              </div>
              <button type="button" className="show-all-btn" aria-expanded="false" data-target={key} style={{display: 'none'}}>
                {strings.en.showAll} <span className="show-all-count">{section.generators.length} {strings.en.generators}</span>
              </button>
            </div>
          ))}
          <div id="search-empty" className="search-empty" style={{display: 'none'}}>
            <p>{strings.en.noResults}</p>
            <button type="button" id="clear-search" className="btn btn-ghost">{strings.en.clearSearch}</button>
            <p className="search-empty-alt">{strings.en.cantFind} <a href="/s/ai_site_builder">{strings.en.closingCta.toLowerCase()}</a>.</p>
          </div>
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-heading">{strings.en.howHeading}</h2>
          <div className="steps-grid">
            <div className="step">
              <span className="step-num" aria-hidden="true">1</span>
              <h3 className="step-title">{strings.en.step1Title}</h3>
              <p className="step-body">{strings.en.step1Body}</p>
            </div>
            <div className="step">
              <span className="step-num" aria-hidden="true">2</span>
              <h3 className="step-title">{strings.en.step2Title}</h3>
              <p className="step-body">{strings.en.step2Body}</p>
            </div>
            <div className="step">
              <span className="step-num" aria-hidden="true">3</span>
              <h3 className="step-title">{strings.en.step3Title}</h3>
              <p className="step-body">{strings.en.step3Body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="section">
        <div className="container">
          <h2 className="section-heading">{strings.en.whyHeading}</h2>
          <div className="grid grid-3">
            <div className="card card-why">
              <div className="why-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 className="card-title">{strings.en.why1Title}</h3>
              <p className="card-desc">{strings.en.why1Body}</p>
            </div>
            <div className="card card-why">
              <div className="why-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
              </div>
              <h3 className="card-title">{strings.en.why2Title}</h3>
              <p className="card-desc">{strings.en.why2Body}</p>
            </div>
            <div className="card card-why">
              <div className="why-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
              </div>
              <h3 className="card-title">{strings.en.why3Title}</h3>
              <p className="card-desc">{strings.en.why3Body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-heading">{strings.en.faqHeading}</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button type="button" className="faq-question" aria-expanded={i === 0 ? 'true' : 'false'} aria-controls={`faq-answer-${i}`}>
                  <span>{faq.q}</span>
                  <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <div id={`faq-answer-${i}`} className="faq-answer" hidden={i !== 0}>
                  <p>{faq.a}</p>
                  {faq.a2 && <p>{faq.a2}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="closing-cta">
        <div className="container">
          <h2 className="closing-headline">{strings.en.closingHeadline}</h2>
          <p className="closing-sub">{strings.en.closingSub}</p>
          <a href="/s/ai_site_builder" className="btn btn-primary btn-large">{strings.en.closingCta}</a>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <svg width="120" height="24" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M8.5 4.5h4v19h-4z" fill="#8159BB"/>
              <path d="M17 4.5h4.5l7 14.5V4.5h4v19h-4.5L21 9v14.5h-4z" fill="#4B5056"/>
              <text x="32" y="20" fontFamily="Josefin Sans, sans-serif" fontWeight="700" fontSize="14" fill="#4B5056" letterSpacing="1">STRIKINGLY</text>
            </svg>
            <p className="footer-note">AI-powered website builder.</p>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Product</h4>
            <ul>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/templates">Templates</a></li>
              <li><a href="/features">Features</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Legal</h4>
            <ul>
              <li><a href="/terms">Terms</a></li>
              <li><a href="/privacy">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; {new Date().getFullYear()} Strikingly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
