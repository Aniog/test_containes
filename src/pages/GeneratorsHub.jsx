import React, { useState, useEffect, useRef } from 'react';
import { strings } from '../strings';

// SVG Icons as components
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const WebsiteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const LandingPageIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 3h6v6" />
    <path d="M9 21H3v-6" />
    <path d="M21 3l-7 7" />
    <path d="M3 21l7-7" />
  </svg>
);

const PortfolioIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="M21 15c0-3.9-3.1-7-7-7" />
  </svg>
);

const BlogIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    <path d="M8 7h6" />
    <path d="M8 11h8" />
  </svg>
);

const StoreIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
    <path d="M3 9 5 3h14l2 6" />
    <path d="M12 12v5" />
  </svg>
);

const LinkIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const GeneratorThumbnail = ({ category }) => {
  const iconMap = {
    websites: <WebsiteIcon />,
    landingPages: <LandingPageIcon />,
    portfolios: <PortfolioIcon />,
    blogs: <BlogIcon />,
    stores: <StoreIcon />,
    linkInBio: <LinkIcon />,
  };
  return iconMap[category] || <WebsiteIcon />;
};

// Hero Illustration SVG
const HeroIllustration = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Background elements */}
    <circle cx="320" cy="60" r="40" fill="#F4F6F8" />
    <circle cx="80" cy="240" r="30" fill="#F4F6F8" />
    
    {/* Browser window */}
    <rect x="60" y="40" width="280" height="200" rx="8" fill="white" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="60" y="40" width="280" height="24" rx="8" fill="#F4F6F8" />
    <rect x="60" y="56" width="280" height="8" fill="#F4F6F8" />
    
    {/* Browser dots */}
    <circle cx="76" cy="52" r="4" fill="#FF5F56" />
    <circle cx="92" cy="52" r="4" fill="#FFBD2E" />
    <circle cx="108" cy="52" r="4" fill="#27C93F" />
    
    {/* Content blocks */}
    <rect x="80" y="80" width="80" height="60" rx="4" fill="#8159BB" fillOpacity="0.2" />
    <rect x="80" y="150" width="240" height="8" rx="2" fill="#E2E4E7" />
    <rect x="80" y="166" width="200" height="6" rx="2" fill="#E2E4E7" />
    <rect x="80" y="180" width="220" height="6" rx="2" fill="#E2E4E7" />
    <rect x="80" y="194" width="180" height="6" rx="2" fill="#E2E4E7" />
    
    {/* Sidebar */}
    <rect x="180" y="80" width="120" height="140" rx="4" fill="#8159BB" fillOpacity="0.1" />
    <rect x="190" y="90" width="100" height="8" rx="2" fill="#8159BB" fillOpacity="0.3" />
    <rect x="190" y="106" width="80" height="6" rx="2" fill="#E2E4E7" />
    <rect x="190" y="120" width="90" height="6" rx="2" fill="#E2E4E7" />
    <rect x="190" y="134" width="70" height="6" rx="2" fill="#E2E4E7" />
    <rect x="190" y="148" width="85" height="6" rx="2" fill="#E2E4E7" />
    <rect x="190" y="162" width="60" height="6" rx="2" fill="#E2E4E7" />
    <rect x="190" y="176" width="75" height="6" rx="2" fill="#E2E4E7" />
    <rect x="190" y="190" width="50" height="6" rx="2" fill="#E2E4E7" />
    
    {/* AI sparkle effects */}
    <path d="M300 100l4 8 8 4-8 4-4 8-4-8-8-4 8-4 4-8z" fill="#7671FF" fillOpacity="0.6" />
    <path d="M340 140l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" fill="#CB0C9F" fillOpacity="0.5" />
    <path d="M50 100l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6z" fill="#7671FF" fillOpacity="0.4" />
    
    {/* Floating elements */}
    <rect x="300" y="180" width="50" height="50" rx="6" fill="white" stroke="#C6C9CD" strokeWidth="1" />
    <rect x="310" y="190" width="30" height="6" rx="2" fill="#8159BB" fillOpacity="0.5" />
    <rect x="310" y="202" width="20" height="4" rx="1" fill="#E2E4E7" />
    <rect x="310" y="212" width="25" height="4" rx="1" fill="#E2E4E7" />
    
    <rect x="30" y="160" width="40" height="40" rx="6" fill="white" stroke="#C6C9CD" strokeWidth="1" />
    <circle cx="50" cy="175" r="8" fill="#8159BB" fillOpacity="0.3" />
    <rect x="38" y="190" width="24" height="4" rx="1" fill="#E2E4E7" />
  </svg>
);

// Top Bar Component
const TopBar = () => (
  <div className="top-bar">
    <a href="/" className="logo-link" aria-label="Strikingly AI Home">
      <span className="logo-text">strikingly AI</span>
    </a>
  </div>
);

// Breadcrumb Component
const Breadcrumb = () => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <ol className="breadcrumb-list">
      <li className="breadcrumb-item">
        <a href="/">{strings.en.breadcrumbHome}</a>
      </li>
      <li className="breadcrumb-separator" aria-hidden="true">></li>
      <li className="breadcrumb-item breadcrumb-current" aria-current="page">
        {strings.en.breadcrumbCurrent}
      </li>
    </ol>
  </nav>
);

// Hero Section
const HeroSection = () => (
  <section className="hero-section" aria-labelledby="hero-heading">
    <div className="hero-container">
      <div className="hero-content">
        <h1 id="hero-heading" className="hero-h1">
          <span className="hero-h1-line1">{strings.en.heroH1Line1}</span>
          <span className="hero-h1-line2">{strings.en.heroH1Line2}</span>
        </h1>
        <p className="hero-subheadline">{strings.en.heroSubheadline}</p>
        <div className="hero-ctas">
          <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
            {strings.en.heroPrimaryCta}
          </a>
          <a href="#all-generators" className="btn btn-ghost">
            {strings.en.heroSecondaryCta}
          </a>
        </div>
      </div>
      <div className="hero-illustration">
        <HeroIllustration />
      </div>
    </div>
  </section>
);

// Featured Generators Section
const FeaturedSection = () => (
  <section className="featured-section" aria-labelledby="featured-heading">
    <div className="section-container">
      <h2 id="featured-heading" className="section-heading">{strings.en.featuredHeading}</h2>
      <p className="section-subheading">{strings.en.featuredSubheading}</p>
      <div className="card-grid card-grid-3">
        {strings.en.featured.map((item, index) => (
          <a key={index} href={`/generators/${item.slug}`} className="card generator-card">
            <span className="category-tag">{item.category}</span>
            <h3 className="card-title">{item.name}</h3>
            <p className="card-description">{item.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// Browse by Category Section
const BrowseCategorySection = () => {
  const categories = [
    { id: 'websites', name: strings.en.categoryWebsites, desc: strings.en.categoryWebsitesDesc, icon: <WebsiteIcon /> },
    { id: 'landing-pages', name: strings.en.categoryLandingPages, desc: strings.en.categoryLandingPagesDesc, icon: <LandingPageIcon /> },
    { id: 'portfolios', name: strings.en.categoryPortfolios, desc: strings.en.categoryPortfoliosDesc, icon: <PortfolioIcon /> },
    { id: 'blogs', name: strings.en.categoryBlogs, desc: strings.en.categoryBlogsDesc, icon: <BlogIcon /> },
    { id: 'stores', name: strings.en.categoryStores, desc: strings.en.categoryStoresDesc, icon: <StoreIcon /> },
    { id: 'link-in-bio', name: strings.en.categoryLinkInBio, desc: strings.en.categoryLinkInBioDesc, icon: <LinkIcon /> },
  ];

  return (
    <section className="browse-section" aria-labelledby="browse-heading">
      <div className="section-container">
        <h2 id="browse-heading" className="section-heading">{strings.en.browseHeading}</h2>
        <div className="card-grid card-grid-3">
          {categories.map((cat) => (
            <a key={cat.id} href={`#${cat.id}`} className="card category-card">
              <div className="category-icon">{cat.icon}</div>
              <h3 className="category-name">{cat.name}</h3>
              <p className="category-desc">{cat.desc}</p>
              <div className="category-arrow">
                <ArrowRightIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Generator Card Component
const GeneratorCard = ({ item, category }) => (
  <a href={`/generators/${item.slug}`} className="card generator-card">
    <div className="generator-thumbnail">
      <GeneratorThumbnail category={category} />
    </div>
    <h4 className="card-title">{item.name}</h4>
    <p className="card-description">{item.description}</p>
  </a>
);

// All Generators Section
const AllGeneratorsSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [filteredCounts, setFilteredCounts] = useState({});
  const searchInputRef = useRef(null);

  const categories = Object.keys(strings.en.generators);
  const INITIAL_VISIBLE_COUNT = 6;

  useEffect(() => {
    // Initialize expanded state for all categories
    const initialExpanded = {};
    const initialCounts = {};
    categories.forEach(cat => {
      initialExpanded[cat] = false;
      initialCounts[cat] = strings.en.generators[cat].items.length;
    });
    setExpandedCategories(initialExpanded);
    setFilteredCounts(initialCounts);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (!query) {
      // Reset all visibility
      const counts = {};
      categories.forEach(cat => {
        counts[cat] = strings.en.generators[cat].items.length;
      });
      setFilteredCounts(counts);
      return;
    }

    // Filter and count matches per category
    const counts = {};
    categories.forEach(cat => {
      const matches = strings.en.generators[cat].items.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        strings.en.generators[cat].heading.toLowerCase().includes(query)
      );
      counts[cat] = matches.length;
    });
    setFilteredCounts(counts);
  };

  const clearSearch = () => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
    const counts = {};
    categories.forEach(cat => {
      counts[cat] = strings.en.generators[cat].items.length;
    });
    setFilteredCounts(counts);
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const totalMatches = Object.values(filteredCounts).reduce((sum, count) => sum + count, 0);
  const hasSearch = searchQuery.length > 0;

  return (
    <section id="all-generators" className="all-generators-section" aria-labelledby="all-generators-heading">
      <div className="section-container">
        <h2 id="all-generators-heading" className="section-heading">{strings.en.allGeneratorsHeading}</h2>
        <p className="section-subheading">{strings.en.allGeneratorsSubheading}</p>
        
        {/* Search */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <SearchIcon />
            <input
              ref={searchInputRef}
              type="search"
              className="search-input"
              placeholder={strings.en.searchPlaceholder}
              aria-label={strings.en.searchAriaLabel}
              onChange={handleSearch}
            />
          </div>
          {hasSearch && (
            <span className="search-result-count">
              {totalMatches} {strings.en.generatorsMatch}
            </span>
          )}
        </div>

        {/* No Results State */}
        {hasSearch && totalMatches === 0 && (
          <div className="no-results">
            <p>{strings.en.noResults}</p>
            <button onClick={clearSearch} className="btn btn-ghost">{strings.en.clearSearch}</button>
            <p className="no-results-link">
              {strings.en.cantFindIt} <a href="/s/ai_site_builder">{strings.en.startWithAi}</a>
            </p>
          </div>
        )}

        {/* Category Subsections */}
        {categories.map(categoryKey => {
          const category = strings.en.generators[categoryKey];
          const items = category.items;
          const totalCount = items.length;
          const matchCount = filteredCounts[categoryKey];
          const isExpanded = expandedCategories[categoryKey];
          const shouldShow = !hasSearch || matchCount > 0;
          const visibleItems = isExpanded ? items : items.slice(0, INITIAL_VISIBLE_COUNT);
          const hasMore = items.length > INITIAL_VISIBLE_COUNT;

          if (!shouldShow) return null;

          return (
            <div key={categoryKey} id={categoryKey} className="category-subsection">
              <div className="subsection-header">
                <h3 className="subsection-heading">{category.heading}</h3>
                <p className="subsection-description">{category.description}</p>
              </div>
              <div className="card-grid card-grid-3">
                {visibleItems.map((item, index) => (
                  <GeneratorCard key={index} item={item} category={categoryKey} />
                ))}
              </div>
              {hasMore && !hasSearch && (
                <div className="show-all-container">
                  <button
                    className="btn btn-ghost show-all-btn"
                    aria-expanded={isExpanded}
                    aria-controls={`${categoryKey}-grid`}
                    onClick={() => toggleCategory(categoryKey)}
                  >
                    {isExpanded ? strings.en.hideAll : `${strings.en.showAll} ${totalCount} generators`}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    { num: '1', title: strings.en.howItWorksStep1Title, desc: strings.en.howItWorksStep1Desc },
    { num: '2', title: strings.en.howItWorksStep2Title, desc: strings.en.howItWorksStep2Desc },
    { num: '3', title: strings.en.howItWorksStep3Title, desc: strings.en.howItWorksStep3Desc },
  ];

  return (
    <section className="how-it-works-section" aria-labelledby="how-it-works-heading">
      <div className="section-container">
        <h2 id="how-it-works-heading" className="section-heading">{strings.en.howItWorksHeading}</h2>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.num} className="step-card">
              <div className="step-number">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Strikingly Section
const WhyStrikinglySection = () => {
  const reasons = [
    { icon: '⚡', title: strings.en.whyStep1Title, desc: strings.en.whyStep1Desc },
    { icon: '📱', title: strings.en.whyStep2Title, desc: strings.en.whyStep2Desc },
    { icon: '💳', title: strings.en.whyStep3Title, desc: strings.en.whyStep3Desc },
  ];

  return (
    <section className="why-section" aria-labelledby="why-heading">
      <div className="section-container">
        <h2 id="why-heading" className="section-heading">{strings.en.whyStrikinglyHeading}</h2>
        <div className="card-grid card-grid-3">
          {reasons.map((reason, index) => (
            <div key={index} className="card why-card">
              <div className="why-icon" aria-hidden="true">{reason.icon}</div>
              <h3 className="why-title">{reason.title}</h3>
              <p className="why-desc">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: strings.en.faqQ1, a: strings.en.faqA1 },
    { q: strings.en.faqQ2, a: strings.en.faqA2 },
    { q: strings.en.faqQ3, a: strings.en.faqA3 },
    { q: strings.en.faqQ4, a: strings.en.faqA4 },
    { q: strings.en.faqQ5, a: strings.en.faqA5 },
    { q: strings.en.faqQ6, a: strings.en.faqA6 },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="section-container">
        <h2 id="faq-heading" className="section-heading">{strings.en.faqHeading}</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'faq-open' : ''}`}>
              <button
                className="faq-question"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => toggleFaq(index)}
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

// Closing CTA Section
const ClosingCtaSection = () => (
  <section className="closing-cta-section" aria-labelledby="closing-heading">
    <div className="section-container">
      <h2 id="closing-heading" className="closing-heading">{strings.en.closingHeading}</h2>
      <p className="closing-sub">{strings.en.closingSub}</p>
      <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
        {strings.en.closingCta}
      </a>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-brand">
        <a href="/" className="footer-logo">{strings.en.logo}</a>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>{strings.en.footerProducts}</h4>
          <ul>
            {strings.en.footerProductsLinks.map((link, index) => (
              <li key={index}><a href={`/${link.toLowerCase().replace(/ /g, '-')}`}>{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h4>{strings.en.footerCompany}</h4>
          <ul>
            {strings.en.footerCompanyLinks.map((link, index) => (
              <li key={index}><a href={`/${link.toLowerCase()}`}>{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h4>{strings.en.footerResources}</h4>
          <ul>
            {strings.en.footerResourcesLinks.map((link, index) => (
              <li key={index}><a href={`/${link.toLowerCase().replace(/ /g, '-')}`}>{link}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h4>{strings.en.footerLegal}</h4>
          <ul>
            {strings.en.footerLegalLinks.map((link, index) => (
              <li key={index}><a href={`/${link.toLowerCase().replace(/ /g, '-')}`}>{link}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>{strings.en.footerCopyright}</p>
      </div>
    </div>
  </footer>
);

// Main GeneratorsHub Component
const GeneratorsHub = () => {
  return (
    <div className="generators-hub">
      <TopBar />
      <Breadcrumb />
      <main>
        <HeroSection />
        <FeaturedSection />
        <BrowseCategorySection />
        <AllGeneratorsSection />
        <HowItWorksSection />
        <WhyStrikinglySection />
        <FaqSection />
        <ClosingCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default GeneratorsHub;
