import React, { useState, useCallback, useRef } from 'react';
import strings from '../strings.en.js';

// SVG Icons as components
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M17.5 17.5L12.5 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z" stroke="#636972" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5.83337 7.5L10 11.6667L14.1667 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WebsiteIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="6" y="8" width="28" height="20" rx="2" stroke="#8159BB" strokeWidth="2"/>
    <path d="M6 14H34" stroke="#8159BB" strokeWidth="2"/>
    <circle cx="10" cy="11" r="1" fill="#8159BB"/>
    <circle cx="14" cy="11" r="1" fill="#8159BB"/>
    <circle cx="18" cy="11" r="1" fill="#8159BB"/>
    <path d="M13 20L10 24H16L13 20Z" fill="#8159BB"/>
    <path d="M20 20H27V24H20V20Z" fill="#8159BB"/>
  </svg>
);

const LandingPageIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="6" y="6" width="28" height="28" rx="2" stroke="#8159BB" strokeWidth="2"/>
    <path d="M6 12H34" stroke="#8159BB" strokeWidth="2"/>
    <rect x="10" y="16" width="8" height="6" rx="1" fill="#8159BB"/>
    <rect x="22" y="16" width="8" height="3" rx="1" fill="#8159BB"/>
    <rect x="22" y="21" width="8" height="2" rx="1" fill="#8159BB"/>
    <rect x="10" y="24" width="20" height="2" rx="1" fill="#8159BB"/>
  </svg>
);

const PortfolioIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="6" y="6" width="28" height="28" rx="2" stroke="#8159BB" strokeWidth="2"/>
    <circle cx="20" cy="16" r="5" stroke="#8159BB" strokeWidth="2"/>
    <path d="M10 30C10 25.5817 14.4772 22 20 22C25.5228 22 30 25.5817 30 30" stroke="#8159BB" strokeWidth="2"/>
  </svg>
);

const BlogIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="6" y="6" width="28" height="28" rx="2" stroke="#8159BB" strokeWidth="2"/>
    <path d="M12 14H28" stroke="#8159BB" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 20H24" stroke="#8159BB" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 26H20" stroke="#8159BB" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const StoreIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <path d="M6 12H34L32 28H8L6 12Z" stroke="#8159BB" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M14 12V8C14 6.89543 14.8954 6 16 6H24C25.1046 6 26 6.89543 26 8V12" stroke="#8159BB" strokeWidth="2"/>
    <rect x="16" y="18" width="8" height="10" rx="1" stroke="#8159BB" strokeWidth="2"/>
  </svg>
);

const LinkInBioIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <circle cx="20" cy="20" r="14" stroke="#8159BB" strokeWidth="2"/>
    <path d="M16 20H24" stroke="#8159BB" strokeWidth="2" strokeLinecap="round"/>
    <path d="M20 16V24" stroke="#8159BB" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const GeneratorThumbnailIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="8" y="8" width="32" height="32" rx="4" stroke="#8159BB" strokeWidth="2"/>
    <path d="M8 16H40" stroke="#8159BB" strokeWidth="2"/>
    <circle cx="14" cy="12" r="2" fill="#8159BB"/>
    <circle cx="20" cy="12" r="2" fill="#8159BB"/>
    <rect x="14" y="22" width="20" height="4" rx="1" fill="#8159BB"/>
    <rect x="14" y="30" width="12" height="4" rx="1" fill="#8159BB"/>
  </svg>
);

// Logo component
const StrikinglyLogo = () => (
  <a href="/" aria-label="Strikingly Home">
    <svg width="140" height="28" viewBox="0 0 140 28" fill="none" aria-hidden="true">
      <path d="M14 4L8 24H12L13.5 19H18.5L20 24H24L18 4H14ZM14.5 15.5L16 10L17.5 15.5H14.5Z" fill="#2E2E2F"/>
      <path d="M30 8C30 6.89543 30.8954 6 32 6H36C37.1046 6 38 6.89543 38 8V20C38 21.1046 37.1046 22 36 22H32C30.8954 22 30 21.1046 30 20V8ZM34 10V18H36V10H34Z" fill="#2E2E2F"/>
      <path d="M44 6H48C49.1046 6 50 6.89543 50 8V20C50 21.1046 49.1046 22 48 22H44V6ZM46 10V18H48V10H46Z" fill="#2E2E2F"/>
      <path d="M56 6H60C61.1046 6 62 6.89543 62 8V20C62 21.1046 61.1046 22 60 22H56V6ZM58 10V18H60V10H58Z" fill="#2E2E2F"/>
      <path d="M68 6H72C73.1046 6 74 6.89543 74 8V20C74 21.1046 73.1046 22 72 22H68V6ZM70 10V18H72V10H70Z" fill="#2E2E2F"/>
      <path d="M80 6H84C85.1046 6 86 6.89543 86 8V20C86 21.1046 85.1046 22 84 22H80V6ZM82 10V18H84V10H82Z" fill="#2E2E2F"/>
      <path d="M92 6H96C97.1046 6 98 6.89543 98 8V20C98 21.1046 97.1046 22 96 22H92V6ZM94 10V18H96V10H94Z" fill="#2E2E2F"/>
      <path d="M104 6H108C109.105 6 110 6.89543 110 8V20C110 21.1046 109.105 22 108 22H104V6ZM106 10V18H108V10H106Z" fill="#2E2E2F"/>
      <path d="M116 6H120C121.105 6 122 6.89543 122 8V20C122 21.1046 121.105 22 120 22H116V6ZM118 10V18H120V10H118Z" fill="#2E2E2F"/>
      <path d="M128 6H132C133.105 6 134 6.89543 134 8V20C134 21.1046 133.105 22 132 22H128V6ZM130 10V18H132V10H130Z" fill="#2E2E2F"/>
      <text x="0" y="28" fontFamily="Arial" fontSize="10" fill="#8159BB" fontWeight="bold">AI</text>
    </svg>
  </a>
);

// Hero illustration SVG
const HeroIllustration = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7671FF" stopOpacity="0.1"/>
        <stop offset="100%" stopColor="#CB0C9F" stopOpacity="0.1"/>
      </linearGradient>
    </defs>
    <rect x="40" y="40" width="320" height="220" rx="12" fill="url(#heroGradient)" stroke="#8159BB" strokeWidth="2"/>
    <rect x="60" y="60" width="280" height="30" rx="4" fill="#F4F6F8"/>
    <circle cx="80" cy="75" r="6" fill="#8159BB"/>
    <circle cx="100" cy="75" r="6" fill="#7671FF"/>
    <circle cx="120" cy="75" r="6" fill="#CB0C9F"/>
    <rect x="60" y="100" width="120" height="80" rx="4" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1"/>
    <rect x="70" y="110" width="100" height="8" rx="2" fill="#8159BB"/>
    <rect x="70" y="125" width="80" height="4" rx="1" fill="#E2E4E7"/>
    <rect x="70" y="135" width="60" height="4" rx="1" fill="#E2E4E7"/>
    <rect x="70" y="150" width="40" height="20" rx="2" fill="#7671FF"/>
    <rect x="200" y="100" width="120" height="80" rx="4" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1"/>
    <rect x="210" y="110" width="100" height="8" rx="2" fill="#8159BB"/>
    <rect x="210" y="125" width="80" height="4" rx="1" fill="#E2E4E7"/>
    <rect x="210" y="135" width="60" height="4" rx="1" fill="#E2E4E7"/>
    <rect x="210" y="150" width="40" height="20" rx="2" fill="#CB0C9F"/>
    <rect x="60" y="195" width="280" height="50" rx="4" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1"/>
    <rect x="80" y="215" width="60" height="10" rx="2" fill="#8159BB"/>
    <rect x="160" y="215" width="60" height="10" rx="2" fill="#7671FF"/>
    <rect x="240" y="215" width="60" height="10" rx="2" fill="#CB0C9F"/>
  </svg>
);

// Category icons mapping
const categoryIcons = {
  websites: WebsiteIcon,
  landingPages: LandingPageIcon,
  portfolios: PortfolioIcon,
  blogs: BlogIcon,
  stores: StoreIcon,
  linkInBio: LinkInBioIcon,
};

// Section 0: Top Bar
const TopBar = () => (
  <header className="top-bar">
    <div className="container">
      <StrikinglyLogo />
    </div>
  </header>
);

// Section 1: Breadcrumb
const Breadcrumb = () => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <div className="container">
      <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
        <li className="breadcrumb-item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <a href="/" itemProp="item" className="breadcrumb-link">
            <span itemProp="name">{strings.breadcrumbHome}</span>
          </a>
          <meta itemProp="position" content="1"/>
        </li>
        <li className="breadcrumb-separator" aria-hidden="true" dangerouslySetInnerHTML={{ __html: '>' }}></li>
        <li className="breadcrumb-item breadcrumb-current" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <span itemProp="name" aria-current="page">{strings.breadcrumbCurrent}</span>
          <meta itemProp="position" content="2"/>
        </li>
      </ol>
    </div>
  </nav>
);

// Section 2: Hero
const Hero = () => (
  <section className="hero">
    <div className="container hero-container">
      <div className="hero-content">
        <h1 className="hero-h1">
          <span className="hero-h1-line1">{strings.heroH1Line1}</span>
          <span className="hero-h1-line2">{strings.heroH1Line2}</span>
        </h1>
        <p className="hero-subheadline">{strings.heroSubheadline}</p>
        <div className="hero-ctas">
          <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">{strings.heroPrimaryCta}</a>
          <a href="#all-generators" className="btn btn-ghost">{strings.heroSecondaryCta}</a>
        </div>
      </div>
      <div className="hero-illustration">
        <HeroIllustration />
      </div>
    </div>
  </section>
);

// Section 3: Featured Generators
const FeaturedGenerators = () => (
  <section className="featured-generators">
    <div className="container">
      <h2 className="section-heading">{strings.featuredHeading}</h2>
      <p className="section-subheading">{strings.featuredSubheading}</p>
      <div className="generators-grid generators-grid-3">
        {strings.featuredGenerators.map((generator) => (
          <a
            key={generator.slug}
            href={`/generators/${generator.slug}`}
            className="generator-card generator-card-featured"
          >
            <h4 className="generator-card-name">{generator.name}</h4>
            <p className="generator-card-description">{generator.description}</p>
            <span className="category-tag">{generator.category}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// Section 4: Browse by Category
const BrowseByCategory = () => (
  <section className="browse-by-category">
    <div className="container">
      <h2 className="section-heading">{strings.browseHeading}</h2>
      <div className="category-grid category-grid-3">
        {Object.entries(strings.categories).map(([key, category]) => {
          const IconComponent = categoryIcons[key];
          return (
            <a
              key={key}
              href={category.anchor}
              className="category-card"
            >
              <div className="category-card-icon">
                <IconComponent />
              </div>
              <h3 className="category-card-name">{category.name}</h3>
              <p className="category-card-description">{category.description}</p>
              <ArrowRightIcon />
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

// Section 5: All Generators Directory
const GeneratorCard = ({ generator, showThumbnail = false }) => (
  <a
    href={`/generators/${generator.slug}`}
    className="generator-card"
  >
    {showThumbnail && (
      <div className="generator-card-thumbnail">
        <GeneratorThumbnailIcon />
      </div>
    )}
    <h4 className="generator-card-name">{generator.name}</h4>
    <p className="generator-card-description">{generator.description}</p>
  </a>
);

const GeneratorSubsection = ({ categoryKey, category, generators, initialVisible = 6 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const needsToggle = generators.length > initialVisible;
  const visibleGenerators = isExpanded ? generators : generators.slice(0, initialVisible);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="generator-subsection" id={category.slug}>
      <h3 className="subsection-heading">{category.name}</h3>
      <p className="subsection-description">{category.description}</p>
      <div className="generators-grid generators-grid-3">
        {visibleGenerators.map((generator) => (
          <GeneratorCard key={generator.slug} generator={generator} showThumbnail />
        ))}
      </div>
      {needsToggle && (
        <button
          className="show-all-btn"
          onClick={toggleExpand}
          aria-expanded={isExpanded}
          aria-controls={`subsection-${categoryKey}`}
        >
          {isExpanded ? 'Show less' : `${strings.showAllLabel} ${generators.length} ${strings.showAllSuffix}`}
        </button>
      )}
    </div>
  );
};

const AllGenerators = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState(null);
  const searchRef = useRef(null);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredResults(null);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = {};
    let totalMatches = 0;

    Object.entries(strings.allGenerators).forEach(([categoryKey, generators]) => {
      const matches = generators.filter(gen => 
        gen.name.toLowerCase().includes(lowerQuery) ||
        gen.description.toLowerCase().includes(lowerQuery) ||
        strings.categories[categoryKey].name.toLowerCase().includes(lowerQuery)
      );
      if (matches.length > 0) {
        results[categoryKey] = matches;
        totalMatches += matches.length;
      }
    });

    setFilteredResults({ categories: results, total: totalMatches });
  }, []);

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredResults(null);
    if (searchRef.current) {
      searchRef.current.value = '';
    }
  };

  const resultCount = filteredResults ? filteredResults.total : 0;
  const hasResults = filteredResults && resultCount > 0;
  const noResults = filteredResults && resultCount === 0;

  return (
    <section className="all-generators" id="all-generators">
      <div className="container">
        <h2 className="section-heading">{strings.allGeneratorsHeading}</h2>
        <p className="section-subheading">{strings.allGeneratorsSubheading}</p>
        
        <div className="search-container">
          <div className="search-input-wrapper">
            <SearchIcon />
            <input
              ref={searchRef}
              type="search"
              className="search-input"
              placeholder={strings.searchPlaceholder}
              aria-label={strings.searchAriaLabel}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          {filteredResults && (
            <span className="search-result-count">
              {resultCount} {resultCount === 1 ? strings.resultCountSingular : strings.resultCountPlural}
            </span>
          )}
        </div>

        {noResults && (
          <div className="no-results">
            <p>{strings.noResultsMessage}</p>
            <button className="btn btn-ghost" onClick={clearSearch}>{strings.clearSearch}</button>
            <p className="no-results-link">
              {strings.noResultsLink} <a href="/s/ai_site_builder">AI builder</a>
            </p>
          </div>
        )}

        <div className="generator-subsections">
          {Object.entries(strings.categories).map(([key, category]) => {
            const generators = strings.allGenerators[key] || [];
            if (filteredResults && !filteredResults.categories[key]) {
              return null;
            }
            const displayGenerators = filteredResults?.categories[key] || generators;
            return (
              <GeneratorSubsection
                key={key}
                categoryKey={key}
                category={category}
                generators={displayGenerators}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Section 6: How It Works
const HowItWorks = () => (
  <section className="how-it-works">
    <div className="container">
      <h2 className="section-heading">{strings.howItWorksHeading}</h2>
      <div className="steps-grid">
        <div className="step">
          <div className="step-number">1</div>
          <h3 className="step-title">{strings.howItWorksStep1Title}</h3>
          <p className="step-description">{strings.howItWorksStep1Desc}</p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3 className="step-title">{strings.howItWorksStep2Title}</h3>
          <p className="step-description">{strings.howItWorksStep2Desc}</p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3 className="step-title">{strings.howItWorksStep3Title}</h3>
          <p className="step-description">{strings.howItWorksStep3Desc}</p>
        </div>
      </div>
    </div>
  </section>
);

// Section 7: Why Strikingly
const WhyStrikingly = () => (
  <section className="why-strikingly">
    <div className="container">
      <h2 className="section-heading">{strings.whyStrikinglyHeading}</h2>
      <div className="features-grid">
        <div className="feature">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="20" r="16" stroke="#8159BB" strokeWidth="2"/>
              <path d="M14 20L18 24L26 16" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="feature-title">{strings.whyStep1Title}</h3>
          <p className="feature-description">{strings.whyStep1Desc}</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <rect x="8" y="6" width="24" height="28" rx="3" stroke="#8159BB" strokeWidth="2"/>
              <rect x="12" y="10" width="16" height="12" rx="1" stroke="#8159BB" strokeWidth="2"/>
              <rect x="12" y="26" width="16" height="4" rx="1" stroke="#8159BB" strokeWidth="2"/>
            </svg>
          </div>
          <h3 className="feature-title">{strings.whyStep2Title}</h3>
          <p className="feature-description">{strings.whyStep2Desc}</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path d="M20 6L8 12V20C8 27.732 13.388 34.508 20 36C26.612 34.508 32 27.732 32 20V12L20 6Z" stroke="#8159BB" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M14 20L18 24L26 16" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="feature-title">{strings.whyStep3Title}</h3>
          <p className="feature-description">{strings.whyStep3Desc}</p>
        </div>
      </div>
    </div>
  </section>
);

// Section 8: FAQ
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: strings.faqQ1, a: strings.faqA1 },
    { q: strings.faqQ2, a: strings.faqA2 },
    { q: strings.faqQ3, a: strings.faqA3 },
    { q: strings.faqQ4, a: strings.faqA4 },
    { q: strings.faqQ5, a: strings.faqA5 },
    { q: strings.faqQ6, a: strings.faqA6 },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-heading">{strings.faqHeading}</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.q}</span>
                <ChevronDownIcon />
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                hidden={openIndex !== index}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 9: Closing CTA
const ClosingCTA = () => (
  <section className="closing-cta">
    <div className="container">
      <h2 className="closing-heading">{strings.closingHeading}</h2>
      <p className="closing-sub">{strings.closingSub}</p>
      <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">{strings.closingCta}</a>
    </div>
  </section>
);

// Section 10: Footer
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-col">
          <StrikinglyLogo />
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">{strings.footerLinks.product}</h4>
          <ul className="footer-links">
            <li><a href="/templates">{strings.footerLinks.templates}</a></li>
            <li><a href="/features">{strings.footerLinks.features}</a></li>
            <li><a href="/pricing">{strings.footerLinks.pricing}</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">{strings.footerLinks.company}</h4>
          <ul className="footer-links">
            <li><a href="/about">{strings.footerLinks.about}</a></li>
            <li><a href="/blog">{strings.footerLinks.blog}</a></li>
            <li><a href="/careers">{strings.footerLinks.careers}</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">{strings.footerLinks.support}</h4>
          <ul className="footer-links">
            <li><a href="/support">{strings.footerLinks.helpCenter}</a></li>
            <li><a href="/contact">{strings.footerLinks.contact}</a></li>
            <li><a href="/community">{strings.footerLinks.community}</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">{strings.footerLinks.legal}</h4>
          <ul className="footer-links">
            <li><a href="/terms">{strings.footerLinks.terms}</a></li>
            <li><a href="/privacy">{strings.footerLinks.privacy}</a></li>
            <li><a href="/cookies">{strings.footerLinks.cookies}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{strings.footerCopyright}</p>
      </div>
    </div>
  </footer>
);

// Main Page Component
const GeneratorsPage = () => {
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
  );
};

export default GeneratorsPage;
