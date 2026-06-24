import React, { useState, useEffect, useRef } from 'react';
import { strings } from '../strings';

// Generator data - all visible in initial HTML
const featuredGenerators = [
  { name: 'AI Website Generator', description: 'Describe your business, get a full site', category: 'Website', slug: 'ai-website-generator' },
  { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', category: 'Portfolio', slug: 'free-portfolio-generator' },
  { name: 'AI Landing Page Maker', description: 'One-page sites built to convert', category: 'Landing Page', slug: 'ai-landing-page-maker' },
  { name: 'Online Store Builder', description: 'Start selling without writing code', category: 'Store', slug: 'online-store-builder' },
  { name: 'Link-in-Bio Generator', description: 'One link for all your channels', category: 'Link-in-Bio', slug: 'link-in-bio-generator' },
  { name: 'One-Page Website Builder', description: 'Simple sites, single scroll', category: 'Website', slug: 'one-page-website-builder' },
  { name: 'Wedding Website Generator', description: 'Share your day with guests', category: 'Website', slug: 'wedding-website-generator' },
  { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, done', category: 'Website', slug: 'restaurant-website-builder' },
  { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', category: 'Blog', slug: 'blog-generator-beginners' },
];

const categoryCards = [
  { name: 'WEBSITES', description: 'AI-built business and personal sites for any goal.', slug: 'websites', icon: 'web' },
  { name: 'LANDING PAGES', description: 'Single-page sites built to convert visitors fast.', slug: 'landing-pages', icon: 'target' },
  { name: 'PORTFOLIOS', description: 'Showcase your work with a clean, focused site.', slug: 'portfolios', icon: 'image' },
  { name: 'BLOGS', description: 'Publish-ready blogs with built-in SEO basics.', slug: 'blogs', icon: 'book' },
  { name: 'ONLINE STORES', description: 'Sell products online with payments built in.', slug: 'stores', icon: 'cart' },
  { name: 'LINK-IN-BIO', description: 'One link, all your places. Made for creators.', slug: 'link-in-bio', icon: 'link' },
];

const allGeneratorsData = {
  websites: [
    { name: 'AI Website Generator', description: 'Describe your business, get a full site in minutes', slug: 'ai-website-generator' },
    { name: 'Free Website Builder for Photographers', description: 'Beautiful photo galleries, built automatically', slug: 'website-builder-photographers' },
    { name: 'One-Page Wedding Website Builder', description: 'Share your day with guests, track RSVPs', slug: 'wedding-website-builder' },
    { name: 'Restaurant Website Builder', description: 'Menu, hours, reservations, all in one', slug: 'restaurant-website-builder' },
    { name: 'Yoga Instructor Website Generator', description: 'Class schedules, booking, and bio', slug: 'yoga-instructor-website' },
    { name: 'Free Website Builder for Small Business', description: 'Professional sites, no coding needed', slug: 'small-business-website' },
    { name: 'AI Website Builder for Real Estate', description: 'Property listings and agent profiles', slug: 'real-estate-website' },
    { name: 'No-Code Website Builder', description: 'Drag and drop, no technical skills required', slug: 'no-code-website-builder' },
    { name: 'Beautiful Website Generator', description: 'Stunning designs, AI-powered', slug: 'beautiful-website-generator' },
    { name: 'Personal Website Builder', description: 'Your digital presence, made simple', slug: 'personal-website-builder' },
  ],
  landingPages: [
    { name: 'AI Landing Page Maker', description: 'One-page sites built to convert visitors', slug: 'ai-landing-page-maker' },
    { name: 'Product Launch Landing Page', description: 'Announce your new product in style', slug: 'product-launch-landing-page' },
    { name: 'Lead Generation Landing Page', description: 'Capture leads with optimized forms', slug: 'lead-generation-landing-page' },
    { name: 'Event Registration Page', description: 'Sell tickets or collect RSVPs', slug: 'event-registration-page' },
    { name: 'Webinar Landing Page', description: 'Promote and register for online events', slug: 'webinar-landing-page' },
    { name: 'Free Landing Page Builder', description: 'Create high-converting pages for free', slug: 'free-landing-page-builder' },
    { name: 'SaaS Landing Page Generator', description: 'Showcase your software product', slug: 'saas-landing-page-generator' },
    { name: 'App Download Landing Page', description: 'Get more app installs', slug: 'app-download-landing-page' },
  ],
  portfolios: [
    { name: 'Free Portfolio Generator', description: 'For creatives, in minutes, no fee', slug: 'free-portfolio-generator' },
    { name: 'Portfolio Generator for Designers', description: 'Showcase your design work beautifully', slug: 'portfolio-generator-designers' },
    { name: 'Artist Portfolio Builder', description: 'Display artwork with elegant galleries', slug: 'artist-portfolio-builder' },
    { name: 'Photographer Portfolio Website', description: 'Stunning photo presentations', slug: 'photographer-portfolio-website' },
    { name: 'Writer Portfolio Generator', description: 'Share your articles and samples', slug: 'writer-portfolio-generator' },
    { name: 'Freelancer Portfolio Builder', description: 'Attract clients with your work', slug: 'freelancer-portfolio-builder' },
    { name: 'Architecture Portfolio Generator', description: 'Present projects professionally', slug: 'architecture-portfolio-generator' },
    { name: 'Video Producer Portfolio', description: 'Showcase reels and projects', slug: 'video-producer-portfolio' },
  ],
  blogs: [
    { name: 'Blog Generator for Beginners', description: 'Publish-ready in minutes', slug: 'blog-generator-beginners' },
    { name: 'Personal Blog Builder', description: 'Share your thoughts with the world', slug: 'personal-blog-builder' },
    { name: 'Business Blog Generator', description: 'Content marketing made easy', slug: 'business-blog-generator' },
    { name: 'Travel Blog Website Builder', description: 'Document your adventures beautifully', slug: 'travel-blog-website-builder' },
    { name: 'Food Blog Generator', description: 'Recipes, photos, and stories', slug: 'food-blog-generator' },
    { name: 'Fashion Blog Builder', description: 'Style content that shines', slug: 'fashion-blog-builder' },
    { name: 'Tech Blog Generator', description: 'Share your tech insights', slug: 'tech-blog-generator' },
    { name: 'DIY Blog Website Builder', description: 'Tutorials and project guides', slug: 'diy-blog-website-builder' },
  ],
  stores: [
    { name: 'Online Store Builder', description: 'Start selling without writing code', slug: 'online-store-builder' },
    { name: 'E-commerce Website Builder', description: 'Full-featured online shop', slug: 'ecommerce-website-builder' },
    { name: 'Store Builder for Restaurants', description: 'Menu and ordering, online', slug: 'store-builder-restaurants' },
    { name: 'Handmade Products Store', description: 'Sell crafts and artisan goods', slug: 'handmade-products-store' },
    { name: 'Digital Products Store', description: 'Sell downloads and courses', slug: 'digital-products-store' },
    { name: 'Fashion Store Builder', description: 'Clothing and accessories shop', slug: 'fashion-store-builder' },
    { name: 'Free Online Store Builder', description: 'Start selling for free', slug: 'free-online-store-builder' },
    { name: 'Small Business E-commerce', description: 'Local business, global reach', slug: 'small-business-ecommerce' },
  ],
  linkInBio: [
    { name: 'Link-in-Bio Generator', description: 'One link for all your channels', slug: 'link-in-bio-generator' },
    { name: 'Creator Link-in-Bio', description: 'All your content, one link', slug: 'creator-link-in-bio' },
    { name: 'Influencer Bio Link', description: 'Monetize your following', slug: 'influencer-bio-link' },
    { name: 'Musician Link-in-Bio', description: 'Share music, tour dates, merch', slug: 'musician-link-in-bio' },
    { name: 'Artist Link-in-Bio', description: 'Portfolio link for Instagram', slug: 'artist-link-in-bio' },
    { name: 'Free Link-in-Bio Builder', description: 'No fees, full customization', slug: 'free-link-in-bio-builder' },
    { name: 'Business Link-in-Bio', description: 'Connect with customers', slug: 'business-link-in-bio' },
    { name: 'Link-in-Bio for YouTube', description: 'Grow your channel', slug: 'link-in-bio-youtube' },
  ],
};

// SVG Icons as components
const WebIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const TargetIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const ImageIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);

const BookIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const CartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="21" r="1"/>
    <circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const LinkIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const iconMap = {
  web: WebIcon,
  target: TargetIcon,
  image: ImageIcon,
  book: BookIcon,
  cart: CartIcon,
  link: LinkIcon,
};

// Category thumbnail icons for All Generators section
const CategoryThumbIcon = ({ category }) => {
  const icons = {
    websites: WebIcon,
    'landing-pages': TargetIcon,
    portfolios: ImageIcon,
    blogs: BookIcon,
    stores: CartIcon,
    'link-in-bio': LinkIcon,
  };
  const IconComponent = icons[category] || WebIcon;
  return <IconComponent />;
};

const GeneratorsHub = () => {
  const s = strings.en;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState({});
  const [expandedFaqs, setExpandedFaqs] = useState({ 0: true });
  const [showAllCounts, setShowAllCounts] = useState({});
  const searchInputRef = useRef(null);

  // Initialize show all counts to show 6 by default
  useEffect(() => {
    const initialCounts = {};
    Object.keys(allGeneratorsData).forEach(cat => {
      initialCounts[cat] = 6;
    });
    setShowAllCounts(initialCounts);
  }, []);

  // Search functionality
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredResults({});
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = {};
    let totalMatches = 0;

    Object.keys(allGeneratorsData).forEach(category => {
      const matches = allGeneratorsData[category].filter(gen => 
        gen.name.toLowerCase().includes(query) ||
        gen.description.toLowerCase().includes(query) ||
        category.toLowerCase().includes(query)
      );
      if (matches.length > 0) {
        results[category] = matches;
        totalMatches += matches.length;
      }
    });

    setFilteredResults(results);
    
    // Update result count display
    const countElement = document.getElementById('search-result-count');
    if (countElement) {
      countElement.textContent = `${totalMatches} generators match`;
    }
  }, [searchQuery]);

  // Handle search clear
  const handleClearSearch = () => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
  };

  // Toggle FAQ accordion
  const toggleFaq = (index) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Toggle show all / show less
  const toggleShowAll = (category) => {
    setShowAllCounts(prev => ({
      ...prev,
      [category]: prev[category] >= allGeneratorsData[category].length 
        ? 6 
        : allGeneratorsData[category].length
    }));
  };

  // Render all generators for a category (used for SSR - all visible by default)
  const renderAllGenerators = (category, generators) => {
    return generators.map((generator, index) => (
      <a 
        key={index}
        href={`/generators/${generator.slug}`}
        className="generator-card"
      >
        <div className="card-thumbnail" aria-hidden="true">
          <CategoryThumbIcon category={category} />
        </div>
        <h4 className="card-name">{generator.name}</h4>
        <p className="card-description">{generator.description}</p>
      </a>
    ));
  };

  return (
    <div className="generators-hub">
      {/* Section 0: Top Bar */}
      <header className="top-bar">
        <a href="/" className="logo" aria-label="Strikingly AI Home">
          <span className="logo-text">{s.logoText}</span>
        </a>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <a href="/">{s.breadcrumbHome}</a>
          </li>
          <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
          <li className="breadcrumb-item current" aria-current="page">
            {s.breadcrumbCurrent}
          </li>
        </ol>
      </nav>

      {/* Section 2: Hero */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-title-line1">{s.heroLine1}</span>
              <span className="hero-title-line2">{s.heroLine2}</span>
            </h1>
            <p className="hero-subheadline">{s.heroSubheadline}</p>
            <div className="hero-ctas">
              <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
                {s.ctaPrimary}
              </a>
              <a href="#all-generators" className="btn btn-ghost btn-large">
                {s.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="hero-illustration">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" aria-hidden="true">
              {/* Soft purple line-art website mockup */}
              <rect x="40" y="40" width="320" height="220" rx="8" stroke="#8159BB" strokeWidth="2" fill="none"/>
              <rect x="40" y="40" width="320" height="30" rx="8" stroke="#8159BB" strokeWidth="2" fill="#F4F6F8"/>
              <circle cx="60" cy="55" r="6" stroke="#8159BB" strokeWidth="2" fill="none"/>
              <circle cx="80" cy="55" r="6" stroke="#8159BB" strokeWidth="2" fill="none"/>
              <circle cx="100" cy="55" r="6" stroke="#8159BB" strokeWidth="2" fill="none"/>
              <rect x="60" y="90" width="120" height="80" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
              <rect x="200" y="90" width="140" height="20" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
              <rect x="200" y="120" width="100" height="12" rx="2" stroke="#C6C9CD" strokeWidth="1" fill="none"/>
              <rect x="200" y="140" width="120" height="12" rx="2" stroke="#C6C9CD" strokeWidth="1" fill="none"/>
              <rect x="60" y="190" width="80" height="20" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
              <rect x="160" y="190" width="80" height="20" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
              <rect x="260" y="190" width="80" height="20" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
              {/* Decorative AI elements */}
              <circle cx="350" cy="80" r="40" stroke="url(#aiGradient)" strokeWidth="2" strokeDasharray="4 4" fill="none" opacity="0.5"/>
              <circle cx="350" cy="80" r="25" stroke="url(#aiGradient)" strokeWidth="1" fill="none" opacity="0.3"/>
              <defs>
                <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7671FF"/>
                  <stop offset="100%" stopColor="#CB0C9F"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="featured-generators">
        <div className="section-container">
          <h2 className="section-title">{s.featuredTitle}</h2>
          <p className="section-subtitle">{s.featuredSubtitle}</p>
          <div className="generators-grid featured-grid">
            {featuredGenerators.map((generator, index) => (
              <a 
                key={index} 
                href={`/generators/${generator.slug}`}
                className="generator-card featured-card"
              >
                <span className="card-category-tag">{generator.category}</span>
                <h3 className="card-name">{generator.name}</h3>
                <p className="card-description">{generator.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="browse-categories">
        <div className="section-container">
          <h2 className="section-title">{s.browseTitle}</h2>
          <div className="category-cards-grid">
            {categoryCards.map((category, index) => {
              const IconComponent = iconMap[category.icon];
              return (
                <a 
                  key={index}
                  href={`#${category.slug}`}
                  className="category-card"
                >
                  <div className="category-icon">
                    <IconComponent />
                  </div>
                  <h3 className="category-name">{category.name}</h3>
                  <p className="category-description">{category.description}</p>
                  <div className="category-arrow" aria-hidden="true">
                    <ArrowRightIcon />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: All Generators */}
      <section id="all-generators" className="all-generators">
        <div className="section-container">
          <h2 className="section-title">{s.allGeneratorsTitle}</h2>
          <p className="section-subtitle">{s.allGeneratorsSubtitle}</p>
          
          {/* Search */}
          <div className="search-container">
            <div className="search-input-wrapper">
              <span className="search-icon" aria-hidden="true">
                <SearchIcon />
              </span>
              <input
                ref={searchInputRef}
                type="search"
                className="search-input"
                placeholder={s.searchPlaceholder}
                aria-label={s.searchAriaLabel}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <span id="search-result-count" className="search-result-count"></span>
          </div>

          {/* No results state */}
          <div id="no-results" className="no-results" style={{ display: 'none' }}>
            <p>{s.noResults}</p>
            <button className="btn btn-ghost" onClick={handleClearSearch}>
              {s.clearSearch}
            </button>
            <p className="no-results-link">
              {s.cantFindIt} <a href="/s/ai_site_builder">{s.startWithBuilder}</a>
            </p>
          </div>

          {/* Category subsections - ALL generators visible by default for SSR */}
          {Object.entries(allGeneratorsData).map(([category, generators]) => {
            const displayGenerators = searchQuery.trim() 
              ? (filteredResults[category] || [])
              : generators;
            
            if (searchQuery.trim() && displayGenerators.length === 0) {
              return null;
            }

            const showCount = showAllCounts[category] || 6;
            const visibleGenerators = displayGenerators.slice(0, showCount);
            const hasMore = displayGenerators.length > showCount;

            return (
              <div 
                key={category} 
                id={category}
                className={`generator-subsection ${showAllCounts[category] >= generators.length ? 'show-all' : ''}`}
              >
                <h3 className="subsection-title">{s.categories[category]?.name || category.toUpperCase()}</h3>
                <p className="subsection-description">{s.categoryDescriptions[category]}</p>
                <div className="generators-grid">
                  {visibleGenerators.map((generator, index) => (
                    <a 
                      key={index}
                      href={`/generators/${generator.slug}`}
                      className="generator-card"
                    >
                      <div className="card-thumbnail" aria-hidden="true">
                        <CategoryThumbIcon category={category} />
                      </div>
                      <h4 className="card-name">{generator.name}</h4>
                      <p className="card-description">{generator.description}</p>
                    </a>
                  ))}
                </div>
                {!searchQuery.trim() && hasMore && (
                  <button 
                    className="show-all-btn"
                    aria-expanded={showCount >= generators.length}
                    onClick={() => toggleShowAll(category)}
                  >
                    {showCount >= generators.length 
                      ? `Show less` 
                      : `Show all ${generators.length} generators`
                    }
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="how-it-works">
        <div className="section-container">
          <h2 className="section-title">{s.howItWorksTitle}</h2>
          <div className="steps-grid">
            {s.steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number" aria-hidden="true">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="why-strikingly">
        <div className="section-container">
          <h2 className="section-title">{s.whyTitle}</h2>
          <div className="reasons-grid">
            {s.reasons.map((reason, index) => (
              <div key={index} className="reason-item">
                <div className="reason-icon" aria-hidden="true">
                  {index === 0 && <WebIcon />}
                  {index === 1 && <TargetIcon />}
                  {index === 2 && <LinkIcon />}
                </div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="faq-section">
        <div className="section-container">
          <h2 className="section-title">{s.faqTitle}</h2>
          <div className="faq-list">
            {s.faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  aria-expanded={expandedFaqs[index] || false}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {expandedFaqs[index] ? '−' : '+'}
                  </span>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  style={{ display: expandedFaqs[index] ? 'block' : 'none' }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="closing-cta">
        <div className="section-container centered">
          <h2 className="closing-title">{s.closingTitle}</h2>
          <p className="closing-subtitle">{s.closingSubtitle}</p>
          <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
            {s.closingCta}
          </a>
        </div>
      </section>

      {/* Section 10: Footer */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">Strikingly</div>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">{s.footer.product}</h4>
              <ul className="footer-links">
                {s.footer.links.product.map((link, i) => (
                  <li key={i}><a href={`/${link.toLowerCase().replace(' ', '-')}`}>{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">{s.footer.company}</h4>
              <ul className="footer-links">
                {s.footer.links.company.map((link, i) => (
                  <li key={i}><a href={`/${link.toLowerCase()}`}>{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">{s.footer.resources}</h4>
              <ul className="footer-links">
                {s.footer.links.resources.map((link, i) => (
                  <li key={i}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">{s.footer.legal}</h4>
              <ul className="footer-links">
                {s.footer.links.legal.map((link, i) => (
                  <li key={i}><a href={`/${link.toLowerCase()}`}>{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            {s.footer.copyright}
          </div>
        </div>
      </footer>

      <style>{`
        /* CSS Variables */
        :root {
          --brand-purple: #8159BB;
          --ai-gradient-start: #7671FF;
          --ai-gradient-end: #CB0C9F;
          --body-text: #636972;
          --heading-dark: #4B5056;
          --heading-hero: #2E2E2F;
          --card-border: #C6C9CD;
          --divider: #E2E4E7;
          --light-bg: #F4F6F8;
          --white: #FFFFFF;
          
          --font-heading: 'Josefin Sans', 'Poppins', sans-serif;
          --font-body: 'Open Sans', sans-serif;
        }

        /* Reset & Base */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: var(--font-body);
          font-size: 14px;
          line-height: 1.5;
          color: var(--body-text);
          background: var(--white);
        }

        /* Typography */
        h1, h2, h3, h4 {
          font-family: var(--font-heading);
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1.2;
        }

        h1 {
          font-size: 40px;
        }

        h2 {
          font-size: 28px;
          color: var(--heading-dark);
        }

        h3 {
          font-size: 18px;
        }

        /* Links */
        a {
          text-decoration: none;
          color: inherit;
        }

        /* Section Container */
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-container.centered {
          text-align: center;
        }

        .section-title {
          text-align: center;
          margin-bottom: 10px;
        }

        .section-subtitle {
          text-align: center;
          color: var(--body-text);
          margin-bottom: 40px;
        }

        /* Section spacing */
        .featured-generators,
        .browse-categories,
        .all-generators,
        .how-it-works,
        .why-strikingly,
        .faq-section {
          padding: 60px 0;
        }

        /* Section 0: Top Bar */
        .top-bar {
          background: var(--white);
          border-bottom: 1px solid var(--divider);
          padding: 16px 20px;
        }

        .logo {
          display: inline-block;
        }

        .logo-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 20px;
          color: var(--heading-dark);
        }

        /* Section 1: Breadcrumb */
        .breadcrumb {
          padding: 12px 20px;
          background: var(--white);
        }

        .breadcrumb-list {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 8px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .breadcrumb-item a {
          color: var(--brand-purple);
        }

        .breadcrumb-item.current {
          color: var(--body-text);
        }

        .breadcrumb-separator {
          color: var(--body-text);
        }

        /* Section 2: Hero */
        .hero {
          padding: 80px 20px;
          background: linear-gradient(135deg, rgba(118, 113, 255, 0.05) 0%, rgba(203, 12, 159, 0.05) 100%);
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-title {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }

        .hero-title-line1 {
          color: var(--heading-hero);
          font-size: 40px;
        }

        .hero-title-line2 {
          background: linear-gradient(90deg, var(--ai-gradient-start), var(--ai-gradient-end));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 40px;
        }

        .hero-subheadline {
          color: var(--body-text);
          font-size: 16px;
          margin-bottom: 30px;
          max-width: 480px;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-illustration {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          padding: 9px 15px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-large {
          height: 44px;
          padding: 12px 24px;
          font-size: 14px;
        }

        .btn-primary {
          background: linear-gradient(90deg, var(--ai-gradient-start), var(--ai-gradient-end));
          color: var(--white);
        }

        .btn-primary:hover {
          opacity: 0.9;
          box-shadow: 0 4px 12px rgba(118, 113, 255, 0.3);
        }

        .btn-ghost {
          background: transparent;
          border: 1px solid var(--brand-purple);
          color: var(--brand-purple);
        }

        .btn-ghost:hover {
          background: rgba(129, 91, 187, 0.1);
        }

        .btn:focus {
          outline: 2px solid var(--brand-purple);
          outline-offset: 2px;
        }

        /* Section 3: Featured Generators */
        .featured-generators {
          background: var(--light-bg);
        }

        .generators-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .generator-card {
          display: block;
          background: var(--white);
          border: 1px solid var(--card-border);
          border-radius: 3px;
          padding: 20px;
          transition: all 0.2s ease;
        }

        .generator-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border-color: var(--brand-purple);
        }

        .generator-card:focus {
          outline: 2px solid var(--brand-purple);
          outline-offset: 2px;
        }

        .card-category-tag {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 2px 6px;
          border: 1px solid var(--brand-purple);
          border-radius: 3px;
          color: var(--brand-purple);
          margin-bottom: 12px;
        }

        .card-name {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 700;
          color: var(--heading-dark);
          margin-bottom: 8px;
        }

        .card-description {
          font-size: 14px;
          color: var(--body-text);
        }

        /* Section 4: Browse by Category */
        .category-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .category-card {
          display: flex;
          flex-direction: column;
          background: var(--white);
          border: 1px solid var(--card-border);
          border-radius: 3px;
          padding: 24px;
          transition: all 0.2s ease;
          position: relative;
        }

        .category-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border-color: var(--brand-purple);
        }

        .category-card:focus {
          outline: 2px solid var(--brand-purple);
          outline-offset: 2px;
        }

        .category-icon {
          color: var(--brand-purple);
          margin-bottom: 16px;
        }

        .category-name {
          font-size: 16px;
          color: var(--heading-dark);
          margin-bottom: 8px;
        }

        .category-description {
          font-size: 14px;
          color: var(--body-text);
          margin-bottom: 16px;
        }

        .category-arrow {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--brand-purple);
        }

        /* Section 5: All Generators */
        .all-generators {
          background: var(--light-bg);
        }

        .search-container {
          max-width: 480px;
          margin: 0 auto 40px;
          position: relative;
        }

        .search-input-wrapper {
          position: relative;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--body-text);
        }

        .search-input {
          width: 100%;
          height: 44px;
          padding: 0 16px 0 48px;
          border: 1px solid var(--card-border);
          border-radius: 3px;
          font-size: 14px;
          font-family: var(--font-body);
        }

        .search-input:focus {
          outline: 2px solid var(--brand-purple);
          outline-offset: 2px;
        }

        .search-result-count {
          display: block;
          text-align: center;
          margin-top: 8px;
          font-size: 13px;
          color: var(--body-text);
        }

        .no-results {
          text-align: center;
          padding: 40px 20px;
        }

        .no-results-link {
          margin-top: 16px;
        }

        .no-results-link a {
          color: var(--brand-purple);
          text-decoration: underline;
        }

        .generator-subsection {
          margin-bottom: 50px;
        }

        .subsection-title {
          font-size: 20px;
          color: var(--heading-dark);
          margin-bottom: 8px;
        }

        .subsection-description {
          color: var(--body-text);
          margin-bottom: 20px;
        }

        .generator-card .card-thumbnail {
          width: 40px;
          height: 40px;
          color: var(--brand-purple);
          margin-bottom: 12px;
        }

        /* Show all by default - JS will progressively enhance to collapse */
        .generator-subsection .generator-card:nth-child(n+7) {
          display: none;
        }
        
        /* When JS is enabled and showAll is true, show all cards */
        .generator-subsection.show-all .generator-card:nth-child(n+7) {
          display: block;
        }

        /* When JS is disabled, show all cards */
        .no-js .generator-subsection .generator-card:nth-child(n+7) {
          display: block;
        }

        .show-all-btn {
          display: block;
          margin: 20px auto 0;
          padding: 8px 16px;
          background: transparent;
          border: 1px solid var(--brand-purple);
          border-radius: 3px;
          color: var(--brand-purple);
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .show-all-btn:hover {
          background: rgba(129, 91, 187, 0.1);
        }

        .show-all-btn:focus {
          outline: 2px solid var(--brand-purple);
          outline-offset: 2px;
        }

        /* Section 6: How It Works */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          text-align: center;
        }

        .step-number {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(90deg, var(--ai-gradient-start), var(--ai-gradient-end));
          color: var(--white);
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }

        .step-title {
          font-size: 14px;
          color: var(--heading-dark);
          margin-bottom: 8px;
        }

        .step-description {
          font-size: 14px;
          color: var(--body-text);
        }

        /* Section 7: Why Strikingly */
        .why-strikingly {
          background: var(--light-bg);
        }

        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          text-align: center;
        }

        .reason-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 16px;
          color: var(--brand-purple);
        }

        .reason-title {
          font-size: 14px;
          color: var(--heading-dark);
          margin-bottom: 8px;
        }

        .reason-description {
          font-size: 14px;
          color: var(--body-text);
        }

        /* Section 8: FAQ */
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          border-bottom: 1px solid var(--divider);
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: start;
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 700;
          color: var(--heading-dark);
        }

        .faq-question:focus {
          outline: 2px solid var(--brand-purple);
          outline-offset: 2px;
        }

        .faq-icon {
          font-size: 24px;
          color: var(--brand-purple);
        }

        .faq-answer {
          padding-bottom: 20px;
        }

        .faq-answer p {
          color: var(--body-text);
          line-height: 1.7;
        }

        /* Section 9: Closing CTA */
        .closing-cta {
          padding: 80px 20px;
          background: var(--white);
        }

        .closing-title {
          font-size: 36px;
          color: var(--heading-dark);
          margin-bottom: 16px;
        }

        .closing-subtitle {
          color: var(--body-text);
          margin-bottom: 30px;
        }

        /* Section 10: Footer */
        .footer {
          background: var(--light-bg);
          padding: 60px 0 30px;
          border-top: 1px solid var(--divider);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-logo {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 700;
          color: var(--heading-dark);
        }

        .footer-heading {
          font-size: 12px;
          color: var(--heading-dark);
          margin-bottom: 16px;
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          color: var(--body-text);
          font-size: 13px;
        }

        .footer-links a:hover {
          color: var(--brand-purple);
        }

        .footer-copyright {
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid var(--divider);
          font-size: 13px;
          color: var(--body-text);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .generators-grid,
          .category-cards-grid,
          .steps-grid,
          .reasons-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-subheadline {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-ctas {
            justify-content: center;
          }

          .hero-illustration {
            order: -1;
          }

          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          h1, .hero-title-line1, .hero-title-line2 {
            font-size: 28px;
          }

          h2 {
            font-size: 24px;
          }

          .generators-grid,
          .category-cards-grid,
          .steps-grid,
          .reasons-grid {
            grid-template-columns: 1fr;
          }

          .hero {
            padding: 40px 20px;
          }

          .hero-ctas {
            flex-direction: column;
          }

          .btn-large {
            width: 100%;
          }

          .featured-generators,
          .browse-categories,
          .all-generators,
          .how-it-works,
          .why-strikingly,
          .faq-section {
            padding: 40px 0;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .closing-title {
            font-size: 28px;
          }
        }
      `}</style>
      {/* Add no-js class for CSS-only fallback */}
      <script dangerouslySetInnerHTML={{__html: `
        document.documentElement.classList.remove('no-js');
        document.documentElement.classList.add('js');
      `}} />
    </div>
  );
};

export default GeneratorsHub;