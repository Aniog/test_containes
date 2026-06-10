import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, ArrowRight, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { strings, generatorsData, categorySlugs } from './strings';

// SVG Icons
const WebsiteIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="8" y="10" width="32" height="24" rx="2" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <line x1="8" y1="18" x2="40" y2="18" stroke="#8159BB" strokeWidth="2"/>
    <rect x="12" y="22" width="8" height="6" rx="1" fill="#8159BB" fillOpacity="0.2" stroke="#8159BB" strokeWidth="1.5"/>
    <rect x="24" y="22" width="12" height="2" rx="1" fill="#8159BB" fillOpacity="0.3"/>
    <rect x="24" y="26" width="8" height="2" rx="1" fill="#8159BB" fillOpacity="0.2"/>
  </svg>
);

const LandingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M24 8L40 16V36L24 44L8 36V16L24 8Z" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <path d="M24 8V44" stroke="#8159BB" strokeWidth="2"/>
    <path d="M8 16L24 24L40 16" stroke="#8159BB" strokeWidth="2"/>
    <rect x="14" y="28" width="6" height="8" fill="#8159BB" fillOpacity="0.3"/>
    <rect x="28" y="28" width="6" height="8" fill="#8159BB" fillOpacity="0.2"/>
  </svg>
);

const PortfolioIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="6" y="12" width="36" height="28" rx="2" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <circle cx="18" cy="24" r="6" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <path d="M6 36L18 28L24 32L36 22L42 26" stroke="#8159BB" strokeWidth="2"/>
  </svg>
);

const BlogIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="8" y="10" width="32" height="28" rx="2" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <line x1="14" y1="18" x2="34" y2="18" stroke="#8159BB" strokeWidth="2"/>
    <line x1="14" y1="24" x2="30" y2="24" stroke="#8159BB" strokeWidth="2"/>
    <line x1="14" y1="30" x2="26" y2="30" stroke="#8159BB" strokeWidth="2"/>
    <path d="M32 32L38 38" stroke="#8159BB" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const StoreIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M8 12H40L38 24H10L8 12Z" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <rect x="12" y="24" width="24" height="16" rx="1" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <path d="M18 24V20C18 17 24 17 24 20V24" stroke="#8159BB" strokeWidth="2"/>
    <circle cx="18" cy="30" r="2" fill="#8159BB"/>
    <circle cx="30" cy="30" r="2" fill="#8159BB"/>
  </svg>
);

const LinkIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="16" cy="24" r="8" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="24" r="8" stroke="#8159BB" strokeWidth="2" fill="none"/>
    <path d="M24 20L24 28" stroke="#8159BB" strokeWidth="2"/>
    <path d="M20 24L28 24" stroke="#8159BB" strokeWidth="2"/>
  </svg>
);

const HeroIllustration = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" aria-hidden="true" className="hero-illustration">
    {/* Browser window */}
    <rect x="50" y="30" width="300" height="200" rx="8" fill="white" stroke="#C6C9CD" strokeWidth="2"/>
    <rect x="50" y="30" width="300" height="30" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2"/>
    <circle cx="70" cy="45" r="5" fill="#8159BB" fillOpacity="0.5"/>
    <circle cx="85" cy="45" r="5" fill="#8159BB" fillOpacity="0.3"/>
    <circle cx="100" cy="45" r="5" fill="#8159BB" fillOpacity="0.2"/>
    
    {/* Content blocks */}
    <rect x="70" y="80" width="100" height="60" rx="4" fill="url(#gradient1)" fillOpacity="0.2"/>
    <rect x="190" y="80" width="140" height="20" rx="4" fill="#8159BB" fillOpacity="0.3"/>
    <rect x="190" y="110" width="140" height="10" rx="4" fill="#C6C9CD"/>
    <rect x="190" y="130" width="100" height="10" rx="4" fill="#C6C9CD"/>
    
    <rect x="70" y="155" width="80" height="55" rx="4" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1"/>
    <rect x="165" y="155" width="80" height="55" rx="4" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1"/>
    <rect x="260" y="155" width="80" height="55" rx="4" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1"/>
    
    {/* Floating elements */}
    <circle cx="320" cy="60" r="20" fill="url(#gradient1)" fillOpacity="0.15"/>
    <circle cx="80" cy="250" r="15" fill="#8159BB" fillOpacity="0.1"/>
    
    {/* AI sparkle */}
    <path d="M340 120L345 130L355 135L345 140L340 150L335 140L325 135L335 130L340 120Z" fill="url(#gradient1)" fillOpacity="0.6"/>
    
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7671FF"/>
        <stop offset="100%" stopColor="#CB0C9F"/>
      </linearGradient>
    </defs>
  </svg>
);

// Breadcrumb JSON-LD component
const BreadcrumbJsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strikingly",
        "item": "https://www.strikingly.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Generators"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// Top Bar Component
const TopBar = () => (
  <header className="top-bar">
    <a href="/" className="logo-link" aria-label="Strikingly home">
      <svg width="120" height="28" viewBox="0 0 120 28" fill="none" aria-hidden="true">
        <path d="M12 4L2 24H8L10 20H18L20 24H26L16 4H12ZM13 15L15.5 9L18 15H13Z" fill="#8159BB"/>
        <text x="34" y="20" fontFamily="Brandon Grotesque, Josefin Sans, sans-serif" fontSize="16" fontWeight="700" fill="#4B5056">STRIKINGLY</text>
        <text x="34" y="20" fontFamily="Brandon Grotesque, Josefin Sans, sans-serif" fontSize="16" fontWeight="700" fill="#4B5056">STRIKINGLY</text>
      </svg>
      <span className="ai-badge">AI</span>
    </a>
  </header>
);

// Breadcrumb Component
const Breadcrumb = ({ s }) => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <ol className="breadcrumb-list">
      <li className="breadcrumb-item">
        <a href="/">{s.home}</a>
      </li>
      <li className="breadcrumb-separator" aria-hidden="true">›</li>
      <li className="breadcrumb-item current">{s.generators}</li>
    </ol>
  </nav>
);

// Hero Section
const Hero = ({ s }) => (
  <section className="hero-section" aria-labelledby="hero-heading">
    <div className="container">
      <div className="hero-grid">
        <div className="hero-content">
          <h1 id="hero-heading" className="hero-h1">
            <span className="h1-line-1">{s.heroTitleLine1}</span>
            <span className="h1-line-2">{s.heroTitleLine2}</span>
          </h1>
          <p className="hero-subtitle">{s.heroSubtitle}</p>
          <div className="hero-ctas">
            <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">{s.ctaPrimary}</a>
            <a href="#all-generators" className="btn btn-ghost">{s.ctaSecondary}</a>
          </div>
        </div>
        <div className="hero-illustration-wrapper">
          <HeroIllustration />
        </div>
      </div>
    </div>
  </section>
);

// Featured Generators Section
const FeaturedSection = ({ s, generators }) => (
  <section className="featured-section" aria-labelledby="featured-heading">
    <div className="container">
      <header className="section-header">
        <h2 id="featured-heading" className="section-h2">{s.featuredHeading}</h2>
        <p className="section-subheading">{s.featuredSubheading}</p>
      </header>
      <div className="featured-grid">
        {generators.map((gen) => (
          <a
            key={gen.slug}
            href={`/generators/${gen.slug}`}
            className="featured-card"
            aria-label={gen.name}
          >
            <span className="category-tag">{gen.category}</span>
            <h3 className="card-name">{gen.name}</h3>
            <p className="card-description">{gen.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// Browse by Category Section
const BrowseCategory = ({ s }) => {
  const categories = [
    { key: 'websites', icon: <WebsiteIcon /> },
    { key: 'landingPages', icon: <LandingIcon /> },
    { key: 'portfolios', icon: <PortfolioIcon /> },
    { key: 'blogs', icon: <BlogIcon /> },
    { key: 'stores', icon: <StoreIcon /> },
    { key: 'linkInBio', icon: <LinkIcon /> },
  ];

  return (
    <section className="browse-section" aria-labelledby="browse-heading">
      <div className="container">
        <header className="section-header">
          <h2 id="browse-heading" className="section-h2">{s.browseHeading}</h2>
        </header>
        <div className="browse-grid">
          {categories.map(({ key, icon }) => {
            const cat = s.categories[key];
            const slug = categorySlugs[key];
            return (
              <a
                key={key}
                href={`#${slug}`}
                className="browse-card"
                aria-label={cat.name}
              >
                <div className="browse-icon">{icon}</div>
                <h3 className="browse-name">{cat.name}</h3>
                <p className="browse-description">{cat.description}</p>
                <ArrowRight className="browse-arrow" size={20} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Generator Card for All Generators section
const GeneratorCard = ({ gen }) => (
  <a
    href={`/generators/${gen.slug}`}
    className="generator-card"
    aria-label={gen.name}
  >
    <h4 className="generator-name">{gen.name}</h4>
    <p className="generator-description">{gen.description}</p>
  </a>
);

// All Generators Section with Search
const AllGeneratorsSection = ({ s }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [filteredCount, setFilteredCount] = useState(0);
  const searchInputRef = useRef(null);

  const allGenerators = Object.entries(generatorsData.categories).flatMap(([catKey, catData]) =>
    catData.generators.map(gen => ({ ...gen, categoryKey: catKey }))
  );

  const filteredGenerators = searchQuery.trim()
    ? allGenerators.filter(gen => {
        const query = searchQuery.toLowerCase();
        return (
          gen.name.toLowerCase().includes(query) ||
          gen.description.toLowerCase().includes(query) ||
          s.categories[gen.categoryKey]?.name.toLowerCase().includes(query)
        );
      })
    : allGenerators;

  useEffect(() => {
    setFilteredCount(filteredGenerators.length);
  }, [filteredGenerators]);

  const toggleCategory = useCallback((categoryKey) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  }, []);

  const clearSearch = () => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
      searchInputRef.current.focus();
    }
  };

  const categoryHasMatches = (categoryKey) => {
    if (!searchQuery.trim()) return true;
    return filteredGenerators.some(gen => gen.categoryKey === categoryKey);
  };

  return (
    <section id="all-generators" className="all-generators-section" aria-labelledby="all-generators-heading">
      <div className="container">
        <header className="section-header">
          <h2 id="all-generators-heading" className="section-h2">{s.allGeneratorsHeading}</h2>
          <p className="section-subheading">{s.allGeneratorsSubheading}</p>
        </header>

        <div className="search-wrapper">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} aria-hidden="true" />
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
            <p className="results-count" role="status" aria-live="polite">
              {s.resultsCount(filteredCount)}
            </p>
          )}
        </div>

        {searchQuery.trim() && filteredCount === 0 ? (
          <div className="no-results" role="status">
            <p>{s.noResults}</p>
            <button type="button" className="btn btn-ghost" onClick={clearSearch}>
              {s.clearSearch}
            </button>
            <p className="cant-find">
              {s.cantFind}{' '}
              <a href="/s/ai_site_builder">{s.cantFindLink}</a>
            </p>
          </div>
        ) : (
          <div className="categories-list">
            {Object.entries(generatorsData.categories).map(([catKey, catData]) => {
              const catHasMatches = categoryHasMatches(catKey);
              const slug = categorySlugs[catKey];
              const catGenerators = searchQuery.trim()
                ? filteredGenerators.filter(gen => gen.categoryKey === catKey)
                : catData.generators;

              if (!catHasMatches) return null;

              const isExpanded = expandedCategories[catKey] || !searchQuery.trim();
              const visibleGenerators = isExpanded ? catGenerators : catGenerators.slice(0, 6);
              const hasMore = catGenerators.length > 6;

              return (
                <div key={catKey} id={slug} className="category-subsection">
                  <div className="subsection-header">
                    <h3 className="subsection-h3">{s.categories[catKey].name}</h3>
                    <p className="subsection-description">{s.categories[catKey].description}</p>
                  </div>
                  <div className={`generators-grid ${isExpanded ? 'expanded' : ''}`}>
                    {visibleGenerators.map(gen => (
                      <GeneratorCard key={gen.slug} gen={gen} />
                    ))}
                  </div>
                  {!searchQuery.trim() && hasMore && (
                    <button
                      type="button"
                      className="show-all-btn"
                      aria-expanded={isExpanded}
                      aria-controls={`${slug}-grid`}
                      onClick={() => toggleCategory(catKey)}
                    >
                      {isExpanded ? s.hideExtra : `${s.showAll} ${catGenerators.length} generators`}
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorks = ({ s }) => (
  <section className="how-it-works-section" aria-labelledby="how-it-works-heading">
    <div className="container">
      <header className="section-header">
        <h2 id="how-it-works-heading" className="section-h2">{s.howItWorksHeading}</h2>
      </header>
      <div className="steps-grid">
        <div className="step">
          <div className="step-number" aria-hidden="true">1</div>
          <h3 className="step-title">{s.howItWorks.step1.title}</h3>
          <p className="step-description">{s.howItWorks.step1.description}</p>
        </div>
        <div className="step">
          <div className="step-number" aria-hidden="true">2</div>
          <h3 className="step-title">{s.howItWorks.step2.title}</h3>
          <p className="step-description">{s.howItWorks.step2.description}</p>
        </div>
        <div className="step">
          <div className="step-number" aria-hidden="true">3</div>
          <h3 className="step-title">{s.howItWorks.step3.title}</h3>
          <p className="step-description">{s.howItWorks.step3.description}</p>
        </div>
      </div>
    </div>
  </section>
);

// Why Strikingly Section
const WhyStrikingly = ({ s }) => (
  <section className="why-section" aria-labelledby="why-heading">
    <div className="container">
      <header className="section-header">
        <h2 id="why-heading" className="section-h2">{s.whyStrikinglyHeading}</h2>
      </header>
      <div className="why-grid">
        <div className="why-item">
          <div className="why-icon" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="16" stroke="#8159BB" strokeWidth="2"/>
              <path d="M14 20L18 24L26 16" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="why-title">{s.whyStrikingly.live.title}</h3>
          <p className="why-description">{s.whyStrikingly.live.description}</p>
        </div>
        <div className="why-item">
          <div className="why-icon" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="8" y="6" width="24" height="28" rx="3" stroke="#8159BB" strokeWidth="2"/>
              <line x1="14" y1="12" x2="26" y2="12" stroke="#8159BB" strokeWidth="2"/>
              <line x1="14" y1="18" x2="22" y2="18" stroke="#8159BB" strokeWidth="2"/>
            </svg>
          </div>
          <h3 className="why-title">{s.whyStrikingly.mobile.title}</h3>
          <p className="why-description">{s.whyStrikingly.mobile.description}</p>
        </div>
        <div className="why-item">
          <div className="why-icon" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 8L8 16V28L20 36L32 28V16L20 8Z" stroke="#8159BB" strokeWidth="2"/>
              <text x="16" y="24" fontSize="12" fill="#8159BB">$</text>
            </svg>
          </div>
          <h3 className="why-title">{s.whyStrikingly.free.title}</h3>
          <p className="why-description">{s.whyStrikingly.free.description}</p>
        </div>
      </div>
    </div>
  </section>
);

// FAQ Section
const FAQSection = ({ s }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    { q: s.faq.q1, a: s.faq.a1 },
    { q: s.faq.q2, a: s.faq.a2 },
    { q: s.faq.q3, a: s.faq.a3 },
    { q: s.faq.q4, a: s.faq.a4 },
    { q: s.faq.q5, a: s.faq.a5 },
    { q: s.faq.q6, a: s.faq.a6 },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="container">
        <header className="section-header">
          <h2 id="faq-heading" className="section-h2">{s.faqHeading}</h2>
        </header>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-question"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => toggle(index)}
              >
                <span>{item.q}</span>
                <ChevronDown className={`faq-icon ${openIndex === index ? 'rotated' : ''}`} size={20} aria-hidden="true" />
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                hidden={openIndex !== index}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Closing CTA Section
const ClosingCTA = ({ s }) => (
  <section className="closing-cta-section" aria-labelledby="closing-heading">
    <div className="container">
      <h2 id="closing-heading" className="closing-heading">{s.closingHeading}</h2>
      <p className="closing-subtitle">{s.closingSubtitle}</p>
      <a href="/s/ai_site_builder" className="btn btn-primary btn-lg btn-closing">
        {s.closingCta}
      </a>
    </div>
  </section>
);

// Footer Component
const Footer = ({ s }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <svg width="100" height="24" viewBox="0 0 100 24" fill="none" aria-hidden="true">
            <path d="M10 3L2 21H7L8.5 17H15L16.5 21H21.5L13.5 3H10ZM11 13L13 7.5L15 13H11Z" fill="#8159BB"/>
            <text x="28" y="16" fontFamily="Brandon Grotesque, Josefin Sans, sans-serif" fontSize="14" fontWeight="700" fill="#4B5056">STRIKINGLY</text>
          </svg>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">{s.footerColumns.product}</h4>
          <ul className="footer-links">
            {s.footerProductLinks.map(link => (
              <li key={link}><a href={`/${link.toLowerCase()}`}>{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">{s.footerColumns.company}</h4>
          <ul className="footer-links">
            {s.footerCompanyLinks.map(link => (
              <li key={link}><a href={`/${link.toLowerCase()}`}>{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">{s.footerColumns.resources}</h4>
          <ul className="footer-links">
            {s.footerResourcesLinks.map(link => (
              <li key={link}><a href={`/${link.toLowerCase().replace(' ', '-')}`}>{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">{s.footerColumns.legal}</h4>
          <ul className="footer-links">
            {s.footerLegalLinks.map(link => (
              <li key={link}><a href={`/${link.toLowerCase()}`}>{link}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{s.copyright}</p>
      </div>
    </div>
  </footer>
);

// Main Generators Page Component
const GeneratorsPage = () => {
  const s = strings.en;

  return (
    <>
      {/* JSON-LD */}
      <BreadcrumbJsonLd />

      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Top Bar */}
      <TopBar />

      {/* Main Content */}
      <main id="main-content">
        {/* Breadcrumb */}
        <Breadcrumb s={s} />

        {/* Hero */}
        <Hero s={s} />

        {/* Featured Generators */}
        <FeaturedSection s={s} generators={generatorsData.featured} />

        {/* Browse by Category */}
        <BrowseCategory s={s} />

        {/* All Generators Directory */}
        <AllGeneratorsSection s={s} />

        {/* How It Works */}
        <HowItWorks s={s} />

        {/* Why Strikingly */}
        <WhyStrikingly s={s} />

        {/* FAQ */}
        <FAQSection s={s} />

        {/* Closing CTA */}
        <ClosingCTA s={s} />
      </main>

      {/* Footer */}
      <Footer s={s} />
    </>
  );
};

export default GeneratorsPage;