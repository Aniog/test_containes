import './index.css'

const strings = {
  en: {
    logo: 'Strikingly AI',
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    heroLine1: 'BUILD ANY KIND OF SITE',
    heroLine2: 'WITH AI, IN AN INSTANT',
    heroSubhead: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    ctaPrimary: 'START BUILDING - IT\'S FREE',
    ctaSecondary: 'BROWSE GENERATORS',
    featuredHeading: 'FEATURED GENERATORS',
    featuredSubheading: 'A few common starting points.',
    browseHeading: 'BROWSE BY CATEGORY',
    browseSubheading: 'Jump to the generator type that fits your goal.',
    allHeading: 'ALL GENERATORS',
    allSubheading: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchAria: 'Search generators',
    matchCount: '{count} generators match',
    noResults: 'No generators match your search.',
    clearSearch: 'Clear search',
    noResultsCta: 'Can\'t find it? Start with our AI builder.',
    showAll: 'Show all {count} generators',
    showLess: 'Show less',
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
    faq1Q: 'What is an AI site generator?',
    faq1A: 'An AI site generator is a tool that builds a complete website for you based on a short description of your business, project, or goal. Instead of choosing a template and filling in every section manually, you describe what you need and the generator produces a ready-to-use site in seconds.',
    faq2Q: 'How is a generator different from a template?',
    faq2A: 'A template is a static starting point that you customize yourself. A generator actively builds the site for you: it writes copy, chooses layouts, and arranges content based on your description. Think of a template as a blank canvas and a generator as an assistant that paints the first draft for you.',
    faq3Q: 'Are these generators free to use?',
    faq3A: 'Yes. You can generate, customize, and publish a site without entering payment details. Some advanced features or premium hosting options may require a paid plan, but the core generator experience is free to start.',
    faq4Q: 'What kinds of sites can I build?',
    faq4A: 'You can build business websites, landing pages, portfolios, blogs, online stores, and link-in-bio pages. The directory is organized by site type so you can quickly find the right generator for your goal.',
    faq5Q: 'Can I customize what the generator produces?',
    faq5A: 'Absolutely. The generator gives you a solid first version, and then you can edit text, swap images, adjust layouts, and change colors. You stay in control of the final design.',
    faq6Q: 'Do generated sites work on mobile?',
    faq6A: 'Yes. Every generator produces responsive sites that adapt to phones, tablets, and desktops. You do not need to create a separate mobile version.',
    closingHeadline: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    footerProduct: 'Product',
    footerCompany: 'Company',
    footerSupport: 'Support',
    footerLegal: 'Legal',
    footerTemplates: 'Templates',
    footerPricing: 'Pricing',
    footerAbout: 'About',
    footerBlog: 'Blog',
    footerCareers: 'Careers',
    footerSupportLink: 'Support',
    footerTerms: 'Terms',
    footerPrivacy: 'Privacy',
    footerCopyright: 'Strikingly. All rights reserved.',
  },
}

const featuredGenerators = [
  { name: 'AI Website Generator', desc: 'Describe your business, get a full site.', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee.', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert.', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', desc: 'Start selling without writing code.', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', desc: 'One link for all your channels.', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll.', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', desc: 'Share your day with guests.', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done.', category: 'Website', slug: 'restaurant-website-generator' },
  { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes.', category: 'Blog', slug: 'blog-generator-for-beginners' },
]

const categories = [
  { name: 'Websites', slug: 'websites', desc: 'AI-built business and personal sites for any goal.', icon: 'globe' },
  { name: 'Landing Pages', slug: 'landing-pages', desc: 'Single-page sites built to convert visitors fast.', icon: 'layout' },
  { name: 'Portfolios', slug: 'portfolios', desc: 'Showcase your work with a clean, focused site.', icon: 'briefcase' },
  { name: 'Blogs', slug: 'blogs', desc: 'Publish-ready blogs with built-in SEO basics.', icon: 'pen' },
  { name: 'Online Stores', slug: 'stores', desc: 'Sell products online with payments built in.', icon: 'shopping' },
  { name: 'Link-in-Bio', slug: 'link-in-bio', desc: 'One link, all your places. Made for creators.', icon: 'link' },
]

const directory = {
  websites: {
    name: 'Websites',
    desc: 'AI-built business and personal sites for any goal.',
    generators: [
      { name: 'AI Website Generator', desc: 'Describe your business, get a full site.', slug: 'ai-website-generator' },
      { name: 'Free Website Builder for Photographers', desc: 'Showcase your portfolio with image-ready layouts.', slug: 'free-website-builder-for-photographers' },
      { name: 'One-Page Wedding Website Builder', desc: 'Share your day with guests in a single scroll.', slug: 'one-page-wedding-website-builder' },
      { name: 'Restaurant Website Builder', desc: 'Menu, hours, reservations, done.', slug: 'restaurant-website-builder' },
      { name: 'AI Website Builder for Restaurants', desc: 'Built for menus, locations, and online ordering.', slug: 'ai-website-builder-for-restaurants' },
      { name: 'Beautiful Website Builder for Small Business', desc: 'Polished sites that look custom-made.', slug: 'beautiful-website-builder-for-small-business' },
      { name: 'No-Code Website Builder for Startups', desc: 'Launch fast without touching code.', slug: 'no-code-website-builder-for-startups' },
      { name: 'AI Website Builder for Yoga Instructors', desc: 'Class schedules, bios, and booking-ready pages.', slug: 'ai-website-builder-for-yoga-instructors' },
      { name: 'Free Website Builder for Wedding Couples', desc: 'Elegant templates for your big day.', slug: 'free-website-builder-for-wedding-couples' },
      { name: 'One-Page Website Builder', desc: 'Simple sites, single scroll.', slug: 'one-page-website-builder' },
      { name: 'AI Website Builder for Photographers', desc: 'Galleries, contact forms, and client proofing.', slug: 'ai-website-builder-for-photographers' },
      { name: 'Website Builder for Real Estate', desc: 'Listings, tours, and agent profiles.', slug: 'website-builder-for-real-estate' },
    ],
  },
  'landing-pages': {
    name: 'Landing Pages',
    desc: 'Single-page sites built to convert visitors fast.',
    generators: [
      { name: 'AI Landing Page Maker', desc: 'One-page sites built to convert.', slug: 'ai-landing-page-maker' },
      { name: 'Free Landing Page Builder for Startups', desc: 'Launch promos without a designer.', slug: 'free-landing-page-builder-for-startups' },
      { name: 'Landing Page Builder for Product Launches', desc: 'Built for hype, pre-orders, and waitlists.', slug: 'landing-page-builder-for-product-launches' },
      { name: 'AI Landing Page Builder for SaaS', desc: 'Feature-led pages for software products.', slug: 'ai-landing-page-builder-for-saas' },
      { name: 'Beautiful Landing Page Builder for Events', desc: 'Countdowns, schedules, and ticket CTAs.', slug: 'beautiful-landing-page-builder-for-events' },
      { name: 'One-Page Landing Page Builder', desc: 'Fast, focused, and conversion-ready.', slug: 'one-page-landing-page-builder' },
      { name: 'Landing Page Builder for Coaches', desc: 'Offer pages, testimonials, and booking links.', slug: 'landing-page-builder-for-coaches' },
      { name: 'No-Code Landing Page Builder', desc: 'Drag, drop, and publish in minutes.', slug: 'no-code-landing-page-builder' },
      { name: 'AI Landing Page Builder for Restaurants', desc: 'Menus, specials, and reservation prompts.', slug: 'ai-landing-page-builder-for-restaurants' },
      { name: 'Landing Page Builder for Photographers', desc: 'Galleries, packages, and inquiry forms.', slug: 'landing-page-builder-for-photographers' },
    ],
  },
  portfolios: {
    name: 'Portfolios',
    desc: 'Showcase your work with a clean, focused site.',
    generators: [
      { name: 'Free Portfolio Generator', desc: 'For creatives, in minutes, no fee.', slug: 'free-portfolio-generator' },
      { name: 'Portfolio Generator for Designers', desc: 'Case studies, process, and project grids.', slug: 'portfolio-generator-for-designers' },
      { name: 'AI Portfolio Builder for Photographers', desc: 'Galleries, stories, and client-ready layouts.', slug: 'ai-portfolio-builder-for-photographers' },
      { name: 'Portfolio Builder for Artists', desc: 'Show, sell, and share your work.', slug: 'portfolio-builder-for-artists' },
      { name: 'Beautiful Portfolio Builder for Writers', desc: 'Clean typography for essays and clips.', slug: 'beautiful-portfolio-builder-for-writers' },
      { name: 'One-Page Portfolio Builder', desc: 'A single scroll that tells your story.', slug: 'one-page-portfolio-builder' },
      { name: 'Portfolio Generator for Architects', desc: 'Project showcases with large imagery.', slug: 'portfolio-generator-for-architects' },
      { name: 'AI Portfolio Builder for UX Designers', desc: 'User research, flows, and visual case studies.', slug: 'ai-portfolio-builder-for-ux-designers' },
      { name: 'Portfolio Builder for Students', desc: 'Academic projects, resumes, and reflections.', slug: 'portfolio-builder-for-students' },
      { name: 'Free Portfolio Builder for Wedding Photographers', desc: 'Elegant galleries for wedding collections.', slug: 'free-portfolio-builder-for-wedding-photographers' },
    ],
  },
  blogs: {
    name: 'Blogs',
    desc: 'Publish-ready blogs with built-in SEO basics.',
    generators: [
      { name: 'Blog Generator for Beginners', desc: 'Publish-ready in minutes.', slug: 'blog-generator-for-beginners' },
      { name: 'AI Blog Generator for Small Business', desc: 'Share updates without a content team.', slug: 'ai-blog-generator-for-small-business' },
      { name: 'Free Blog Builder for Writers', desc: 'Focus on writing, not formatting.', slug: 'free-blog-builder-for-writers' },
      { name: 'Blog Builder for Photographers', desc: 'Visual stories with captions and galleries.', slug: 'blog-builder-for-photographers' },
      { name: 'Beautiful Blog Builder for Food Bloggers', desc: 'Recipe cards, step photos, and reviews.', slug: 'beautiful-blog-builder-for-food-bloggers' },
      { name: 'One-Page Blog Builder', desc: 'Minimalist posts with clean typography.', slug: 'one-page-blog-builder' },
      { name: 'AI Blog Generator for SEO', desc: 'Built-in basics to help posts get found.', slug: 'ai-blog-generator-for-seo' },
      { name: 'Blog Builder for Travel Bloggers', desc: 'Itineraries, maps, and photo journals.', slug: 'blog-builder-for-travel-bloggers' },
      { name: 'No-Code Blog Builder for Entrepreneurs', desc: 'Launch a publication without developers.', slug: 'no-code-blog-builder-for-entrepreneurs' },
      { name: 'Blog Builder for Yoga Instructors', desc: 'Class notes, wellness tips, and schedules.', slug: 'blog-builder-for-yoga-instructors' },
      { name: 'AI Blog Builder for Restaurants', desc: 'Menus, chef stories, and event posts.', slug: 'ai-blog-builder-for-restaurants' },
    ],
  },
  stores: {
    name: 'Online Stores',
    desc: 'Sell products online with payments built in.',
    generators: [
      { name: 'Online Store Builder', desc: 'Start selling without writing code.', slug: 'online-store-builder' },
      { name: 'AI Store Builder for Photographers', desc: 'Prints, licenses, and digital downloads.', slug: 'ai-store-builder-for-photographers' },
      { name: 'Free Store Builder for Small Business', desc: 'Products, carts, and checkout in minutes.', slug: 'free-store-builder-for-small-business' },
      { name: 'Store Builder for Artists', desc: 'Original work, prints, and commissions.', slug: 'store-builder-for-artists' },
      { name: 'Beautiful Store Builder for Jewelry Brands', desc: 'Product close-ups and elegant checkout.', slug: 'beautiful-store-builder-for-jewelry-brands' },
      { name: 'One-Page Store Builder', desc: 'A single scroll that sells.', slug: 'one-page-store-builder' },
      { name: 'AI Store Builder for Restaurants', desc: 'Gift cards, merch, and pre-order menus.', slug: 'ai-store-builder-for-restaurants' },
      { name: 'Store Builder for Wedding Planners', desc: 'Packages, deposits, and vendor lists.', slug: 'store-builder-for-wedding-planners' },
      { name: 'No-Code Store Builder for Creators', desc: 'Digital products, memberships, and tips.', slug: 'no-code-store-builder-for-creators' },
      { name: 'Store Builder for Fitness Coaches', desc: 'Plans, apparel, and one-on-one bookings.', slug: 'store-builder-for-fitness-coaches' },
      { name: 'AI Store Builder for Handmade Sellers', desc: 'Inventory, variants, and shipping rules.', slug: 'ai-store-builder-for-handmade-sellers' },
    ],
  },
  'link-in-bio': {
    name: 'Link-in-Bio',
    desc: 'One link, all your places. Made for creators.',
    generators: [
      { name: 'Link-in-Bio Generator', desc: 'One link for all your channels.', slug: 'link-in-bio-generator' },
      { name: 'AI Link-in-Bio for Creators', desc: 'A single page that connects every platform.', slug: 'ai-link-in-bio-for-creators' },
      { name: 'Free Link-in-Bio for Instagram', desc: 'Optimized for profiles and reels.', slug: 'free-link-in-bio-for-instagram' },
      { name: 'Beautiful Link-in-Bio for Musicians', desc: 'Tracks, shows, merch, and mailing list.', slug: 'beautiful-link-in-bio-for-musicians' },
      { name: 'Link-in-Bio Builder for Coaches', desc: 'Calendars, courses, and testimonials.', slug: 'link-in-bio-builder-for-coaches' },
      { name: 'One-Page Link-in-Bio Builder', desc: 'Minimal, fast, and easy to update.', slug: 'one-page-link-in-bio-builder' },
      { name: 'AI Link-in-Bio for Podcasters', desc: 'Episodes, sponsors, and subscribe buttons.', slug: 'ai-link-in-bio-for-podcasters' },
      { name: 'Link-in-Bio Builder for Photographers', desc: 'Galleries, prints, and booking links.', slug: 'link-in-bio-builder-for-photographers' },
      { name: 'No-Code Link-in-Bio for Small Business', desc: 'Hours, menus, and contact in one place.', slug: 'no-code-link-in-bio-for-small-business' },
      { name: 'Link-in-Bio Builder for Wedding Planners', desc: 'Registries, timelines, and vendor links.', slug: 'link-in-bio-builder-for-wedding-planners' },
    ],
  },
}

const categoryIcons = {
  globe: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="24" cy="24" rx="10" ry="20" stroke="currentColor" strokeWidth="2" />
      <path d="M4 24h40" stroke="currentColor" strokeWidth="2" />
      <path d="M10 12h28M10 36h28" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  layout: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="8" width="40" height="32" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M4 18h40" stroke="currentColor" strokeWidth="2" />
      <path d="M14 4v10M34 4v10" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  briefcase: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="14" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M18 14v-4a6 6 0 0 1 12 0v4" stroke="currentColor" strokeWidth="2" />
      <path d="M24 22v6" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  pen: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 42l4-4L38 8l4 4L10 42z" stroke="currentColor" strokeWidth="2" />
      <path d="M38 8l4-4" stroke="currentColor" strokeWidth="2" />
      <path d="M14 34l8-8" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  shopping: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 12h32l-3 20H11z" stroke="currentColor" strokeWidth="2" />
      <path d="M18 38a6 6 0 1 1 12 0" stroke="currentColor" strokeWidth="2" />
      <path d="M6 12l-2 4h2" stroke="currentColor" strokeWidth="2" />
      <path d="M44 12l2 4h-2" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  link: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M24 28a4 4 0 0 1-4-4c0-6 8-12 8-12s8 6 8 12a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="2" />
      <path d="M24 20a4 4 0 0 1 4 4c0 6-8 12-8 12s-8-6-8-12a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
}

const thumbIcon = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
)

function App() {
  const [search, setSearch] = React.useState('')
  const [expandedFaq, setExpandedFaq] = React.useState(0)
  const [showAllState, setShowAllState] = React.useState({})

  const updateShowAll = (key, value) => {
    setShowAllState((prev) => ({ ...prev, [key]: value }))
  }

  const toggleFaq = (index) => {
    setExpandedFaq((prev) => (prev === index ? -1 : index))
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const clearSearch = () => {
    setSearch('')
  }

  const matchCount = React.useMemo(() => {
    if (!search.trim()) return 0
    const q = search.trim().toLowerCase()
    let count = 0
    Object.values(directory).forEach((section) => {
      section.generators.forEach((gen) => {
        const haystack = `${gen.name} ${gen.desc} ${section.name}`.toLowerCase()
        if (haystack.includes(q)) count += 1
      })
    })
    return count
  }, [search])

  const q = search.trim().toLowerCase()

  return (
    <div>
      {/* Section 0: Top bar */}
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="/" className="topbar-logo" aria-label="Strikingly home">
            Strikingly AI
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" itemProp="item">
                <span itemProp="name">{strings.en.breadcrumbHome}</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true" className="breadcrumb-separator">/</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" aria-current="page">{strings.en.breadcrumbCurrent}</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>

      {/* Section 2: Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1 className="hero-title">
              <span className="line-1">{strings.en.heroLine1}</span>
              <span className="line-2">{strings.en.heroLine2}</span>
            </h1>
            <p className="hero-subhead">{strings.en.heroSubhead}</p>
            <div className="hero-actions">
              <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
                {strings.en.ctaPrimary}
              </a>
              <a href="#all-generators" className="btn btn-ghost btn-large">
                {strings.en.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="hero-illustration">
            <svg
              width="520"
              height="360"
              viewBox="0 0 520 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="40" y="40" width="440" height="280" rx="12" stroke="#8159BB" strokeWidth="2" />
              <rect x="60" y="70" width="120" height="8" rx="4" fill="#C6C9CD" />
              <rect x="60" y="90" width="80" height="8" rx="4" fill="#C6C9CD" />
              <rect x="60" y="120" width="400" height="160" rx="8" fill="#F4F6F8" />
              <rect x="80" y="140" width="160" height="100" rx="6" fill="#FFFFFF" stroke="#E2E4E7" strokeWidth="1" />
              <rect x="260" y="140" width="180" height="46" rx="6" fill="#FFFFFF" stroke="#E2E4E7" strokeWidth="1" />
              <rect x="260" y="196" width="180" height="44" rx="6" fill="#FFFFFF" stroke="#E2E4E7" strokeWidth="1" />
              <circle cx="460" cy="60" r="14" fill="url(#hero-grad)" />
              <defs>
                <linearGradient id="hero-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#7671FF" />
                  <stop offset="1" stopColor="#CB0C9F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="section" aria-labelledby="featured-heading">
        <div className="container">
          <h2 id="featured-heading" className="section-heading">{strings.en.featuredHeading}</h2>
          <p className="section-subheading">{strings.en.featuredSubheading}</p>
          <div className="grid-3">
            {featuredGenerators.map((item) => (
              <a key={item.slug} href={`/generators/${item.slug}`} className="card-link">
                <div className="card featured-tile">
                  <div className="name">{item.name}</div>
                  <div className="desc">{item.desc}</div>
                  <span className="tag">{item.category}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="section section-alt" aria-labelledby="browse-heading">
        <div className="container">
          <h2 id="browse-heading" className="section-heading">{strings.en.browseHeading}</h2>
          <p className="section-subheading">{strings.en.browseSubheading}</p>
          <div className="grid-3">
            {categories.map((cat) => (
              <a key={cat.slug} href={`/generators#${cat.slug}`} className="card-link">
                <div className="card category-card">
                  <div className="icon-wrap">{categoryIcons[cat.icon]}</div>
                  <div>
                    <h3>{cat.name}</h3>
                    <p>{cat.desc}</p>
                  </div>
                  <div className="arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators */}
      <section className="section directory-section" id="all-generators" aria-labelledby="all-heading">
        <div className="container">
          <h2 id="all-heading" className="section-heading">{strings.en.allHeading}</h2>
          <p className="section-subheading">{strings.en.allSubheading}</p>

          <div className="search-wrap">
            <span className="icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </span>
            <input
              type="search"
              className="search-input"
              placeholder={strings.en.searchPlaceholder}
              aria-label={strings.en.searchAria}
              value={search}
              onChange={handleSearch}
            />
          </div>
          {search.trim() && (
            <p className="search-meta" aria-live="polite">
              {matchCount === 0
                ? strings.en.noResults
                : strings.en.matchCount.replace('{count}', String(matchCount))}
            </p>
          )}
          {matchCount === 0 && search.trim() && (
            <div className="empty-state">
              <p>{strings.en.noResults}</p>
              <button type="button" className="btn btn-ghost" onClick={clearSearch}>
                {strings.en.clearSearch}
              </button>
              <p style={{ marginTop: '12px' }}>
                <a href="/s/ai_site_builder" className="btn btn-ghost">{strings.en.noResultsCta}</a>
              </p>
            </div>
          )}

          {Object.entries(directory).map(([key, section]) => {
            const visibleGenerators = q
              ? section.generators.filter((gen) => {
                  const haystack = `${gen.name} ${gen.desc} ${section.name}`.toLowerCase()
                  return haystack.includes(q)
                })
              : section.generators

            if (q && visibleGenerators.length === 0) return null

            const initialCount = 6
            const isExpanded = showAllState[key] !== false
            const displayGenerators = isExpanded ? visibleGenerators : visibleGenerators.slice(0, initialCount)
            const hasMore = visibleGenerators.length > initialCount

            return (
              <div key={key} id={key} className="directory-subsection">
                <h3>{section.name}</h3>
                <p className="subsection-desc">{section.desc}</p>
                <div className="grid-3">
                  {displayGenerators.map((gen) => (
                    <a key={gen.slug} href={`/generators/${gen.slug}`} className="card-link">
                      <div className="card directory-card">
                        <div className="thumb">{thumbIcon}</div>
                        <div className="name">{gen.name}</div>
                        <div className="desc">{gen.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
                {hasMore && (
                  <div className="show-all-wrap">
                    <button
                      type="button"
                      className="show-all-btn"
                      aria-expanded={isExpanded}
                      aria-controls={`${key}-extra`}
                      onClick={() => updateShowAll(key, !isExpanded)}
                    >
                      {isExpanded
                        ? strings.en.showLess
                        : strings.en.showAll.replace('{count}', String(visibleGenerators.length))}
                    </button>
                    <div
                      id={`${key}-extra`}
                      className={`collapsible ${isExpanded ? '' : 'collapsed'}`}
                      aria-hidden={!isExpanded}
                    >
                      <div className="inner">
                        <div className="grid-3" style={{ marginTop: '20px' }}>
                          {visibleGenerators.slice(initialCount).map((gen) => (
                            <a key={gen.slug} href={`/generators/${gen.slug}`} className="card-link">
                              <div className="card directory-card">
                                <div className="thumb">{thumbIcon}</div>
                                <div className="name">{gen.name}</div>
                                <div className="desc">{gen.desc}</div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="section section-alt" aria-labelledby="how-heading">
        <div className="container">
          <h2 id="how-heading" className="section-heading">{strings.en.howHeading}</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number" aria-hidden="true">1</div>
              <h3>{strings.en.step1Title}</h3>
              <p>{strings.en.step1Body}</p>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">2</div>
              <h3>{strings.en.step2Title}</h3>
              <p>{strings.en.step2Body}</p>
            </div>
            <div className="step">
              <div className="step-number" aria-hidden="true">3</div>
              <h3>{strings.en.step3Title}</h3>
              <p>{strings.en.step3Body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="section" aria-labelledby="why-heading">
        <div className="container">
          <h2 id="why-heading" className="section-heading">{strings.en.whyHeading}</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="icon" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>{strings.en.why1Title}</h3>
              <p>{strings.en.why1Body}</p>
            </div>
            <div className="why-item">
              <div className="icon" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <h3>{strings.en.why2Title}</h3>
              <p>{strings.en.why2Body}</p>
            </div>
            <div className="why-item">
              <div className="icon" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>{strings.en.why3Title}</h3>
              <p>{strings.en.why3Body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container faq">
          <h2 id="faq-heading" className="section-heading">{strings.en.faqHeading}</h2>
          <div>
            {[
              { q: strings.en.faq1Q, a: strings.en.faq1A },
              { q: strings.en.faq2Q, a: strings.en.faq2A },
              { q: strings.en.faq3Q, a: strings.en.faq3A },
              { q: strings.en.faq4Q, a: strings.en.faq4A },
              { q: strings.en.faq5Q, a: strings.en.faq5A },
              { q: strings.en.faq6Q, a: strings.en.faq6A },
            ].map((item, index) => {
              const isOpen = expandedFaq === index
              const panelId = `faq-panel-${index}`
              return (
                <div key={index} className="faq-item">
                  <button
                    type="button"
                    className="faq-btn"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.q}</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div id={panelId} className={`faq-panel ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
                    <div className="inner">
                      <div className="faq-body">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="closing-cta" aria-labelledby="closing-heading">
        <div className="container">
          <h2 id="closing-heading">{strings.en.closingHeadline}</h2>
          <p>{strings.en.closingSub}</p>
          <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
            {strings.en.closingCta}
          </a>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="topbar-logo" style={{ marginBlockEnd: '10px' }}>Strikingly AI</div>
              <p style={{ color: 'var(--color-body)', fontSize: '13px', maxWidth: '260px' }}>
                Build any kind of site with AI, in an instant.
              </p>
            </div>
            <div className="footer-col">
              <h4>{strings.en.footerProduct}</h4>
              <ul>
                <li><a href="/templates">Templates</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/s/ai_site_builder">AI Builder</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{strings.en.footerCompany}</h4>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/careers">Careers</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{strings.en.footerSupport}</h4>
              <ul>
                <li><a href="/support">Support</a></li>
                <li><a href="/terms">Terms</a></li>
                <li><a href="/privacy">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            {strings.en.footerCopyright}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
