import { useState, useEffect, useRef } from 'react';
import strings from './strings';
import { featuredGenerators, categories, allGenerators, faqData } from './generatorsData';

// Icon Components
const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const ImageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);

const EditIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="9" cy="21" r="1"/>
    <circle cx="20" cy="21" r="1"/>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  </svg>
);

const LinkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const iconMap = {
  globe: GlobeIcon,
  target: TargetIcon,
  image: ImageIcon,
  edit: EditIcon,
  cart: CartIcon,
  link: LinkIcon,
};

// JSON-LD for BreadcrumbList
const BreadcrumbJsonLd = () => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
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
    })
  }} />
);

// Generator Card Component
const GeneratorCard = ({ slug, name, description, showCategory = false, category = '' }) => (
  <a href={`/generators/${slug}`} className="gen-card" aria-label={name}>
    <span className="gen-card-name">{name}</span>
    <span className="gen-card-description">{description}</span>
    {showCategory && <span className="gen-card-tag">{category}</span>}
  </a>
);

// Category Card Component
const CategoryCard = ({ id, name, description }) => {
  const IconComponent = iconMap[id] || GlobeIcon;
  return (
    <a href={`#${id}`} className="category-card">
      <div className="category-icon">
        <IconComponent />
      </div>
      <span className="category-name">{name}</span>
      <span className="category-desc">{description}</span>
      <div className="category-arrow">
        <ArrowRightIcon />
      </div>
    </a>
  );
};

// FAQ Accordion Component
const FaqItem = ({ question, answer, isOpen, onToggle, index }) => {
  const answerId = `faq-answer-${index}`;
  const buttonId = `faq-button-${index}`;
  
  return (
    <div className="faq-item">
      <button
        id={buttonId}
        className="faq-button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span className="faq-question">{question}</span>
        <span className={`faq-icon ${isOpen ? 'open' : ''}`}>
          <ChevronDownIcon />
        </span>
      </button>
      <div
        id={answerId}
        className={`faq-answer ${isOpen ? 'open' : ''}`}
        role="region"
        aria-labelledby={buttonId}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

// Main Component
const Generators = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [expandedCategories, setExpandedCategories] = useState({});
  
  const t = strings.en;
  
  // Show all toggle handler
  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };
  
  // Search handler
  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setFilteredResults(null);
      return;
    }
    
    const q = query.toLowerCase();
    const results = {};
    let totalMatches = 0;
    
    Object.entries(allGenerators).forEach(([categoryId, category]) => {
      const matches = category.generators.filter(g => 
        g.name.toLowerCase().includes(q) || 
        g.description.toLowerCase().includes(q) ||
        categoryId.includes(q)
      );
      
      if (matches.length > 0) {
        results[categoryId] = matches;
        totalMatches += matches.length;
      }
    });
    
    setFilteredResults({ categories: results, total: totalMatches });
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    setFilteredResults(null);
  };
  
  // Category section with show all functionality
  const renderCategorySection = (categoryId, categoryData, initialVisible = 4) => {
    const isExpanded = expandedCategories[categoryId];
    const generators = filteredResults 
      ? (filteredResults.categories[categoryId] || [])
      : categoryData.generators;
    
    if (filteredResults && !filteredResults.categories[categoryId]) {
      return null;
    }
    
    const visibleGenerators = isExpanded ? generators : generators.slice(0, initialVisible);
    const hasMore = generators.length > initialVisible;
    
    const categoryThumbnails = {
      websites: { bg: '#E8E4FF', shape: 'circle' },
      'landing-pages': { bg: '#FFE8F0', shape: 'square' },
      portfolios: { bg: '#E8F4FF', shape: 'rounded' },
      blogs: { bg: '#FFF4E8', shape: 'circle' },
      stores: { bg: '#E8FFE8', shape: 'square' },
      'link-in-bio': { bg: '#F4E8FF', shape: 'rounded' },
    };
    
    const thumbnail = categoryThumbnails[categoryId] || { bg: '#F0F0F0', shape: 'rounded' };
    
    return (
      <section key={categoryId} id={categoryId} className="generator-subsection">
        <div className="subsection-header">
          <h3>{categoryData.heading}</h3>
          <p>{categoryData.description}</p>
        </div>
        <div className="generator-grid">
          {visibleGenerators.map((gen) => (
            <a key={gen.slug} href={`/generators/${gen.slug}`} className="gen-card">
              <div className="gen-card-thumb" style={{ backgroundColor: thumbnail.bg }} />
              <span className="gen-card-name">{gen.name}</span>
              <span className="gen-card-description">{gen.description}</span>
            </a>
          ))}
        </div>
        {hasMore && !filteredResults && (
          <button
            className="show-all-btn"
            onClick={() => toggleCategory(categoryId)}
            aria-expanded={isExpanded}
            aria-controls={`${categoryId}-grid`}
          >
            {isExpanded ? t.showLess : `${t.showAll} ${generators.length} generators`}
          </button>
        )}
      </section>
    );
  };
  
  return (
    <>
      {/* Section 0: Top Bar */}
      <header className="top-bar">
        <a href="/" className="logo" aria-label="Strikingly Home">
          <span className="logo-text">{t.logoText}</span>
        </a>
      </header>
      
      {/* Section 1: Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="breadcrumb-list">
          <li><a href="/">{t.breadcrumbHome}</a></li>
          <li aria-current="page">&gt; {t.breadcrumbCurrent}</li>
        </ol>
      </nav>
      
      {/* Section 2: Hero */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-h1">
              <span className="hero-h1-line1">{t.heroH1Line1}</span>
              <span className="hero-h1-line2">{t.heroH1Line2}</span>
            </h1>
            <p className="hero-subheading">{t.heroSubheading}</p>
            <div className="hero-ctas">
              <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">{t.ctaPrimary}</a>
              <a href="#all-generators" className="btn btn-ghost">{t.ctaSecondary}</a>
            </div>
          </div>
          <div className="hero-illustration">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" aria-hidden="true">
              <rect x="50" y="40" width="300" height="200" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="2"/>
              <rect x="70" y="60" width="120" height="80" rx="4" fill="#8159BB" opacity="0.2"/>
              <rect x="200" y="60" width="130" height="30" rx="4" fill="#E2E4E7"/>
              <rect x="200" y="100" width="130" height="20" rx="4" fill="#E2E4E7"/>
              <rect x="200" y="130" width="130" height="20" rx="4" fill="#E2E4E7"/>
              <rect x="70" y="160" width="260" height="20" rx="4" fill="#E2E4E7"/>
              <rect x="70" y="190" width="260" height="30" rx="4" fill="#7671FF" opacity="0.3"/>
              <circle cx="100" cy="100" r="20" fill="#8159BB" opacity="0.4"/>
              <path d="M90 100 L100 90 L110 100 L100 110 Z" fill="#CB0C9F" opacity="0.5"/>
            </svg>
          </div>
        </div>
      </section>
      
      {/* Section 3: Featured Generators */}
      <section className="section featured">
        <div className="section-container">
          <h2 className="section-heading">{t.featuredHeading}</h2>
          <p className="section-subheading">{t.featuredSubheading}</p>
          <div className="featured-grid">
            {featuredGenerators.map((gen) => (
              <a key={gen.slug} href={`/generators/${gen.slug}`} className="featured-card">
                <span className="gen-card-name">{gen.name}</span>
                <span className="gen-card-description">{gen.description}</span>
                <span className="gen-card-tag">{gen.category}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 4: Browse by Category */}
      <section className="section browse-category">
        <div className="section-container">
          <h2 className="section-heading">{t.browseHeading}</h2>
          <div className="category-grid">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} {...cat} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 5: All Generators */}
      <section id="all-generators" className="section all-generators">
        <div className="section-container">
          <h2 className="section-heading">{t.allGeneratorsHeading}</h2>
          <p className="section-subheading">{t.allGeneratorsSubheading}</p>
          
          <div className="search-container">
            <label htmlFor="generator-search" className="sr-only">{t.searchAriaLabel}</label>
            <div className="search-input-wrapper">
              <SearchIcon />
              <input
                type="search"
                id="generator-search"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                aria-label={t.searchAriaLabel}
              />
            </div>
            {filteredResults && (
              <span className="search-results-count">{filteredResults.total} generators match</span>
            )}
          </div>
          
          {filteredResults && filteredResults.total === 0 && (
            <div className="no-results">
              <p>{t.noResults}</p>
              <button onClick={clearSearch} className="btn btn-ghost">{t.clearSearch}</button>
              <p className="no-results-link"><a href="/s/ai_site_builder">{t.cantFind}</a></p>
            </div>
          )}
          
          {!filteredResults && Object.entries(allGenerators).map(([id, data]) => 
            renderCategorySection(id, data)
          )}
          
          {filteredResults && Object.entries(allGenerators).map(([id, data]) => 
            filteredResults.categories[id] ? renderCategorySection(id, data) : null
          )}
        </div>
      </section>
      
      {/* Section 6: How It Works */}
      <section className="section how-it-works">
        <div className="section-container">
          <h2 className="section-heading">{t.howItWorksHeading}</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3 className="step-title">{t.howItWorksStep1}</h3>
              <p className="step-desc">{t.howItWorksStep1Desc}</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3 className="step-title">{t.howItWorksStep2}</h3>
              <p className="step-desc">{t.howItWorksStep2Desc}</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3 className="step-title">{t.howItWorksStep3}</h3>
              <p className="step-desc">{t.howItWorksStep3Desc}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 7: Why Strikingly */}
      <section className="section why-strikingly">
        <div className="section-container">
          <h2 className="section-heading">{t.whyHeading}</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <h3 className="why-title">LIVE IN SECONDS</h3>
              <p className="why-desc">{t.whyLiveDesc}</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h3 className="why-title">MOBILE BY DEFAULT</h3>
              <p className="why-desc">{t.whyMobileDesc}</p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="why-title">FREE TO START</h3>
              <p className="why-desc">{t.whyFreeDesc}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 8: FAQ */}
      <section className="section faq">
        <div className="section-container">
          <h2 className="section-heading">{t.faqHeading}</h2>
          <div className="faq-list">
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFaqIndex === index}
                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 9: Closing CTA */}
      <section className="section closing-cta">
        <div className="section-container">
          <h2 className="closing-heading">{t.closingHeading}</h2>
          <p className="closing-sub">{t.closingSub}</p>
          <a href="/s/ai_site_builder" className="btn btn-primary btn-xl">{t.ctaClosing}</a>
        </div>
      </section>
      
      {/* Section 10: Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="/" className="footer-logo">{t.logoText}</a>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="/templates">Templates</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="/support">Support</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/generators">Generators</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="/terms">Terms</a></li>
                <li><a href="/privacy">Privacy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://twitter.com/strikingly">Twitter</a></li>
                <li><a href="https://facebook.com/strikingly">Facebook</a></li>
                <li><a href="https://instagram.com/strikingly">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            {t.footerCopyright}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Generators;