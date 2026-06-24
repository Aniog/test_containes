import { useState, useEffect, useRef } from 'react';
import { strings } from '../strings';
import { generators, featuredGenerators, categoryCards } from '../data/generators';
import './Generators.css';

const s = strings.en;

// SVG Icons as components
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6"></path>
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
    <path d="M2 12h20"></path>
  </svg>
);

const LayoutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
    <path d="M3 9h18"></path>
    <path d="M9 21V9"></path>
  </svg>
);

const ImageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    <circle cx="9" cy="9" r="2"></circle>
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
  </svg>
);

const BookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
  </svg>
);

const ShoppingBagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
    <path d="M3 6h18"></path>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const LinkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

const categoryIcons = {
  globe: GlobeIcon,
  layout: LayoutIcon,
  image: ImageIcon,
  book: BookIcon,
  'shopping-bag': ShoppingBagIcon,
  link: LinkIcon
};

// Hero illustration - soft purple line-art website mockup
const HeroIllustration = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Background */}
    <rect x="20" y="20" width="360" height="260" rx="8" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1"/>
    
    {/* Browser bar */}
    <rect x="20" y="20" width="360" height="24" rx="8" fill="#E2E4E7"/>
    <circle cx="40" cy="32" r="4" fill="#C6C9CD"/>
    <circle cx="54" cy="32" r="4" fill="#C6C9CD"/>
    <circle cx="68" cy="32" r="4" fill="#C6C9CD"/>
    
    {/* Website content mockup */}
    <rect x="40" y="60" width="120" height="16" rx="2" fill="#8159BB" opacity="0.3"/>
    <rect x="40" y="88" width="80" height="8" rx="2" fill="#C6C9CD"/>
    <rect x="40" y="104" width="100" height="8" rx="2" fill="#C6C9CD"/>
    <rect x="40" y="120" width="60" height="8" rx="2" fill="#C6C9CD"/>
    
    {/* Hero image placeholder */}
    <rect x="180" y="60" width="180" height="100" rx="4" fill="#8159BB" opacity="0.15"/>
    <path d="M240 90 L260 110 L280 85 L300 105 L320 80" stroke="#8159BB" strokeWidth="2" fill="none" opacity="0.5"/>
    
    {/* Feature cards */}
    <rect x="40" y="150" width="100" height="60" rx="4" fill="white" stroke="#C6C9CD" strokeWidth="1"/>
    <rect x="48" y="160" width="24" height="24" rx="4" fill="#8159BB" opacity="0.2"/>
    <rect x="80" y="162" width="50" height="6" rx="2" fill="#C6C9CD"/>
    <rect x="80" y="174" width="40" height="4" rx="2" fill="#C6C9CD"/>
    
    <rect x="150" y="150" width="100" height="60" rx="4" fill="white" stroke="#C6C9CD" strokeWidth="1"/>
    <rect x="158" y="160" width="24" height="24" rx="4" fill="#8159BB" opacity="0.2"/>
    <rect x="190" y="162" width="50" height="6" rx="2" fill="#C6C9CD"/>
    <rect x="190" y="174" width="40" height="4" rx="2" fill="#C6C9CD"/>
    
    <rect x="260" y="150" width="100" height="60" rx="4" fill="white" stroke="#C6C9CD" strokeWidth="1"/>
    <rect x="268" y="160" width="24" height="24" rx="4" fill="#8159BB" opacity="0.2"/>
    <rect x="300" y="162" width="50" height="6" rx="2" fill="#C6C9CD"/>
    <rect x="300" y="174" width="40" height="4" rx="2" fill="#C6C9CD"/>
    
    {/* CTA button */}
    <rect x="40" y="230" width="140" height="32" rx="4" fill="url(#gradient)"/>
    <text x="110" y="250" fill="white" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="system-ui">GET STARTED</text>
    
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="140" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7671FF"/>
        <stop offset="1" stopColor="#CB0C9F"/>
      </linearGradient>
    </defs>
  </svg>
);

// Category thumbnail for generator cards
const CategoryThumbnail = ({ category }) => {
  const iconMap = {
    websites: GlobeIcon,
    'landing-pages': LayoutIcon,
    portfolios: ImageIcon,
    blogs: BookIcon,
    stores: ShoppingBagIcon,
    'link-in-bio': LinkIcon
  };
  const Icon = iconMap[category] || GlobeIcon;
  return (
    <div className="category-thumbnail">
      <Icon />
    </div>
  );
};

function Generators() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [openFaq, setOpenFaq] = useState(0);
  const searchInputRef = useRef(null);

  // Initialize all sections as expanded
  useEffect(() => {
    const initialExpanded = {};
    Object.keys(generators).forEach(key => {
      initialExpanded[key] = true;
    });
    setExpandedSections(initialExpanded);
  }, []);

  // Search functionality
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults(null);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = {};
    let totalMatches = 0;

    Object.keys(generators).forEach(catKey => {
      const category = generators[catKey];
      const matches = category.generators.filter(g => 
        g.name.toLowerCase().includes(query) ||
        g.description.toLowerCase().includes(query) ||
        category.name.toLowerCase().includes(query)
      );
      
      if (matches.length > 0) {
        results[catKey] = {
          ...category,
          generators: matches
        };
        totalMatches += matches.length;
      }
    });

    setSearchResults({ categories: results, count: totalMatches });
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    searchInputRef.current?.focus();
  };

  const toggleSection = (sectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const getResultCount = () => {
    if (!searchQuery.trim()) return null;
    if (searchResults) {
      return searchResults.count;
    }
    return 0;
  };

  const resultCount = getResultCount();

  return (
    <div className="generators-page">
      {/* Section 0: Top Bar */}
      <header className="top-bar">
        <a href="/" className="logo">{s.logo}</a>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li><a href="/">{s.breadcrumbHome}</a></li>
          <li aria-current="page">{s.breadcrumbCurrent}</li>
        </ol>
      </nav>

      {/* Section 2: Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="hero-line-1">{s.heroLine1}</span>
            <span className="hero-line-2">{s.heroLine2}</span>
          </h1>
          <p className="hero-subheadline">{s.heroSubheadline}</p>
          <div className="hero-ctas">
            <a href="/s/ai_site_builder" className="btn btn-primary btn-large">{s.ctaPrimary}</a>
            <a href="#all-generators" className="btn btn-ghost">{s.ctaSecondary}</a>
          </div>
        </div>
        <div className="hero-illustration">
          <HeroIllustration />
        </div>
      </section>

      {/* Section 3: Featured Generators */}
      <section className="featured-generators">
        <h2>{s.featuredHeading}</h2>
        <p className="section-subheading">{s.featuredSubheading}</p>
        <div className="featured-grid">
          {featuredGenerators.map((generator, index) => (
            <a 
              key={index} 
              href={`/generators/${generator.slug}`}
              className="featured-card"
            >
              <span className="category-tag">{generator.category}</span>
              <h3>{generator.name}</h3>
              <p>{generator.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Section 4: Browse by Category */}
      <section className="browse-categories">
        <h2>{s.browseHeading}</h2>
        <div className="category-grid">
          {categoryCards.map((category, index) => {
            const IconComponent = categoryIcons[category.icon];
            return (
              <a 
                key={index} 
                href={`#${category.slug}`}
                className="category-card"
              >
                <div className="category-icon">
                  <IconComponent />
                </div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <ArrowRightIcon />
              </a>
            );
          })}
        </div>
      </section>

      {/* Section 5: All Generators */}
      <section id="all-generators" className="all-generators">
        <h2>{s.allGeneratorsHeading}</h2>
        <p className="section-subheading">{s.allGeneratorsSubheading}</p>
        
        {/* Search */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <SearchIcon />
            <input
              ref={searchInputRef}
              type="search"
              placeholder={s.searchPlaceholder}
              aria-label={s.searchAriaLabel}
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          {resultCount !== null && (
            <span className="result-count">
              {resultCount} generators match
            </span>
          )}
        </div>

        {/* No results state */}
        {searchQuery && searchResults && searchResults.count === 0 && (
          <div className="no-results">
            <p>{s.noResults}</p>
            <button onClick={clearSearch} className="btn btn-ghost">{s.clearSearch}</button>
            <p className="cant-find">
              {s.cantFindIt} <a href="/s/ai_site_builder">{s.startWithAI}</a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        <div className="generator-sections">
          {Object.keys(generators).map(catKey => {
            const category = generators[catKey];
            const displayGenerators = searchResults?.categories?.[catKey]?.generators || category.generators;
            const isExpanded = expandedSections[catKey];
            const hasSearch = searchQuery.trim().length > 0;
            const shouldShow = !hasSearch || (searchResults?.categories?.[catKey]);

            if (!shouldShow) return null;

            return (
              <div 
                key={catKey} 
                id={category.slug}
                className={`generator-subsection ${!isExpanded ? 'collapsed' : ''}`}
              >
                <h3>{category.name}</h3>
                <p className="subsection-description">{category.description}</p>
                <div className="generator-grid">
                  {displayGenerators.map((generator, idx) => (
                    <a 
                      key={idx}
                      href={`/generators/${generator.slug}`}
                      className="generator-card"
                    >
                      <CategoryThumbnail category={catKey} />
                      <h4>{generator.name}</h4>
                      <p>{generator.description}</p>
                    </a>
                  ))}
                </div>
                {!hasSearch && category.generators.length > 6 && (
                  <button
                    className="show-all-btn"
                    aria-expanded={isExpanded}
                    aria-controls={`subsection-${catKey}`}
                    onClick={() => toggleSection(catKey)}
                  >
                    {isExpanded 
                      ? s.showLess.replace('{count}', category.generators.length)
                      : s.showAll.replace('{count}', category.generators.length)
                    }
                    <ChevronDownIcon />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="how-it-works">
        <h2>{s.howItWorksHeading}</h2>
        <div className="steps-grid">
          {s.steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: Why Strikingly */}
      <section className="why-strikingly">
        <h2>{s.whyStrikinglyHeading}</h2>
        <div className="reasons-grid">
          {s.reasons.map((reason, index) => (
            <div key={index} className="reason">
              <div className="reason-icon">
                {index === 0 && <GlobeIcon />}
                {index === 1 && <LayoutIcon />}
                {index === 2 && <ShoppingBagIcon />}
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="faq">
        <h2>{s.faqHeading}</h2>
        <div className="faq-list">
          {s.faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <ChevronDownIcon />
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`faq-answer ${openFaq === index ? 'open' : ''}`}
                role="region"
                aria-hidden={openFaq !== index}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9: Closing CTA */}
      <section className="closing-cta">
        <h2>{s.closingHeading}</h2>
        <p>{s.closingSub}</p>
        <a href="/s/ai_site_builder" className="btn btn-primary btn-large">{s.closingCta}</a>
      </section>

      {/* Section 10: Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo">{s.logo}</span>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>{s.footer.product}</h4>
              <ul>
                {s.footer.links.product.map((link, i) => (
                  <li key={i}><a href={`/${link.toLowerCase().replace(' ', '-')}`}>{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4>{s.footer.company}</h4>
              <ul>
                {s.footer.links.company.map((link, i) => (
                  <li key={i}><a href={`/${link.toLowerCase().replace(' ', '-')}`}>{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4>{s.footer.resources}</h4>
              <ul>
                {s.footer.links.resources.map((link, i) => (
                  <li key={i}><a href={`/${link.toLowerCase().replace(' ', '-')}`}>{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h4>{s.footer.legal}</h4>
              <ul>
                {s.footer.links.legal.map((link, i) => (
                  <li key={i}><a href={`/${link.toLowerCase()}`}>{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          {s.footer.copyright}
        </div>
      </footer>
    </div>
  );
}

export default Generators;