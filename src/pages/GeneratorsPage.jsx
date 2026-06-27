import React, { useState, useEffect, useRef } from 'react';
import { strings } from '../strings';
import './GeneratorsPage.css';

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
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6"></path>
  </svg>
);

const WebsiteIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="14" x="2" y="3" rx="2"></rect>
    <path d="M8 21h8"></path>
    <path d="M12 17v4"></path>
  </svg>
);

const LandingPageIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <path d="M8 13h2"></path>
    <path d="M8 17h2"></path>
    <path d="M14 13h2"></path>
    <path d="M14 17h2"></path>
  </svg>
);

const PortfolioIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const BlogIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
    <path d="M18 14h-8"></path>
    <path d="M15 18h-5"></path>
    <path d="M10 6h8v4h-8V6Z"></path>
  </svg>
);

const StoreIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m7.5 4.27 9 5.15"></path>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
    <path d="m3.3 7 8.7 5 8.7-5"></path>
    <path d="M12 22V12"></path>
  </svg>
);

const LinkIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

const NumberIcon = ({ number }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
    <circle cx="16" cy="16" r="14" fill="#8159BB" />
    <text x="16" y="21" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Brandon Grotesque, Josefin Sans, sans-serif">{number}</text>
  </svg>
);

// Category icons mapping
const categoryIcons = {
  websites: WebsiteIcon,
  'landing-pages': LandingPageIcon,
  portfolios: PortfolioIcon,
  blogs: BlogIcon,
  stores: StoreIcon,
  'link-in-bio': LinkIcon,
};

// Category data
const categories = [
  { id: 'websites', name: 'Websites', desc: 'AI-built business and personal sites for any goal.', slug: 'websites' },
  { id: 'landing-pages', name: 'Landing Pages', desc: 'Single-page sites built to convert visitors fast.', slug: 'landing-pages' },
  { id: 'portfolios', name: 'Portfolios', desc: 'Showcase your work with a clean, focused site.', slug: 'portfolios' },
  { id: 'blogs', name: 'Blogs', desc: 'Publish-ready blogs with built-in SEO basics.', slug: 'blogs' },
  { id: 'stores', name: 'Online Stores', desc: 'Sell products online with payments built in.', slug: 'stores' },
  { id: 'link-in-bio', name: 'Link-in-Bio', desc: 'One link, all your places. Made for creators.', slug: 'link-in-bio' },
];

// Section 0: Top Bar
const TopBar = ({ s }) => (
  <header className="top-bar">
    <a href="/" className="logo" aria-label={s.logoAlt}>
      <span className="logo-text">{s.logo}</span>
    </a>
  </header>
);

// Section 1: Breadcrumb
const Breadcrumb = ({ s }) => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <ol className="breadcrumb-list">
      <li className="breadcrumb-item">
        <a href="/">{s.breadcrumbHome}</a>
        <span className="breadcrumb-separator" aria-hidden="true">&gt;</span>
      </li>
      <li className="breadcrumb-item current" aria-current="page">
        {s.breadcrumbCurrent}
      </li>
    </ol>
  </nav>
);

// Section 2: Hero
const Hero = ({ s }) => (
  <section className="hero">
    <div className="hero-bg" aria-hidden="true"></div>
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-h1">
          <span className="hero-h1-line1">{s.heroLine1}</span>
          <span className="hero-h1-line2">{s.heroLine2}</span>
        </h1>
        <p className="hero-subheadline">{s.heroSubheadline}</p>
        <div className="hero-ctas">
          <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
            {s.heroPrimaryCTA}
          </a>
          <a href="#all-generators" className="btn btn-ghost btn-large">
            {s.heroSecondaryCTA}
          </a>
        </div>
      </div>
      <div className="hero-illustration" aria-hidden="true">
        <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="40" width="320" height="220" rx="8" fill="white" stroke="#C6C9CD" strokeWidth="2"/>
          <rect x="60" y="60" width="120" height="80" rx="4" fill="#F4F6F8"/>
          <rect x="60" y="150" width="80" height="8" rx="2" fill="#E2E4E7"/>
          <rect x="60" y="166" width="60" height="6" rx="2" fill="#E2E4E7"/>
          <rect x="200" y="60" width="140" height="8" rx="2" fill="#E2E4E7"/>
          <rect x="200" y="76" width="100" height="6" rx="2" fill="#E2E4E7"/>
          <rect x="200" y="92" width="120" height="6" rx="2" fill="#E2E4E7"/>
          <rect x="200" y="150" width="140" height="50" rx="4" fill="#F4F6F8"/>
          <circle cx="320" cy="260" r="20" fill="url(#gradient1)"/>
          <path d="M310 260 L318 268 L332 252" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="gradient1" x1="300" y1="240" x2="340" y2="280" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7671FF"/>
              <stop offset="1" stopColor="#CB0C9F"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </section>
);

// Section 3: Featured Generators
const FeaturedGenerators = ({ s }) => (
  <section className="featured-generators">
    <div className="section-container">
      <h2 className="section-heading">{s.featuredHeading}</h2>
      <p className="section-subheading">{s.featuredSubheading}</p>
      <div className="featured-grid">
        {s.featured.map((generator, index) => (
          <a 
            key={index} 
            href={`/generators/${generator.slug}`} 
            className="card featured-card"
            aria-label={`${generator.name}: ${generator.desc}`}
          >
            <span className="card-category-tag">{generator.category}</span>
            <h3 className="card-title">{generator.name}</h3>
            <p className="card-desc">{generator.desc}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// Section 4: Browse by Category
const BrowseByCategory = ({ s }) => (
  <section className="browse-category">
    <div className="section-container">
      <h2 className="section-heading">{s.browseHeading}</h2>
      <div className="category-grid">
        {categories.map((category) => {
          const IconComponent = categoryIcons[category.id];
          return (
            <a 
              key={category.id} 
              href={`#${category.slug}`} 
              className="card category-card"
              aria-label={`${category.name}: ${category.desc}`}
            >
              <div className="category-icon">
                <IconComponent />
              </div>
              <h3 className="category-name">{category.name}</h3>
              <p className="category-desc">{category.desc}</p>
              <ArrowRightIcon />
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

// Generator Card Component
const GeneratorCard = ({ generator, showCategory = false }) => (
  <a 
    href={`/generators/${generator.slug}`} 
    className="card generator-card"
    aria-label={`${generator.name}: ${generator.desc}`}
  >
    <h3 className="card-title">{generator.name}</h3>
    <p className="card-desc">{generator.desc}</p>
  </a>
);

// Section 5: All Generators
const AllGenerators = ({ s }) => {
  const [searchQuery, setSearchQuery] = useState('');
  // Initialize with all categories showing all items
  const [showAllStates, setShowAllStates] = useState({
    'websites': true,
    'landing-pages': true,
    'portfolios': true,
    'blogs': true,
    'stores': true,
    'link-in-bio': true
  });
  const searchInputRef = useRef(null);

  const allCategories = [
    { id: 'websites', name: 'Websites', generators: s.generators.websites, desc: 'AI-built business and personal sites for any goal.' },
    { id: 'landing-pages', name: 'Landing Pages', generators: s.generators.landingPages, desc: 'Single-page sites built to convert visitors fast.' },
    { id: 'portfolios', name: 'Portfolios', generators: s.generators.portfolios, desc: 'Showcase your work with a clean, focused site.' },
    { id: 'blogs', name: 'Blogs', generators: s.generators.blogs, desc: 'Publish-ready blogs with built-in SEO basics.' },
    { id: 'stores', name: 'Online Stores', generators: s.generators.stores, desc: 'Sell products online with payments built in.' },
    { id: 'link-in-bio', name: 'Link-in-Bio', generators: s.generators.linkInBio, desc: 'One link, all your places. Made for creators.' },
  ];

  const filterGenerators = (generators, query) => {
    if (!query) return generators;
    const lowerQuery = query.toLowerCase();
    return generators.filter(g => 
      g.name.toLowerCase().includes(lowerQuery) ||
      g.desc.toLowerCase().includes(lowerQuery)
    );
  };

  const filteredCategories = allCategories.map(cat => ({
    ...cat,
    generators: filterGenerators(cat.generators, searchQuery)
  })).filter(cat => cat.generators.length > 0);

  const totalMatches = filteredCategories.reduce((sum, cat) => sum + cat.generators.length, 0);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    searchInputRef.current?.focus();
  };

  const toggleShowAll = (categoryId) => {
    setShowAllStates(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  return (
    <section id="all-generators" className="all-generators">
      <div className="section-container">
        <h2 className="section-heading">{s.allGeneratorsHeading}</h2>
        <p className="section-subheading">{s.allGeneratorsSubheading}</p>
        
        <div className="search-container">
          <div className="search-input-wrapper">
            <SearchIcon />
            <input
              ref={searchInputRef}
              type="search"
              className="search-input"
              placeholder={s.searchPlaceholder}
              aria-label={s.searchAriaLabel}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          {searchQuery && (
            <div className="search-results-info">
              <span className="result-count">
                {totalMatches} {s.resultCount.replace('{count}', totalMatches)}
              </span>
              <button className="btn-clear-search" onClick={clearSearch}>
                {s.clearSearch}
              </button>
            </div>
          )}
        </div>

        {searchQuery && totalMatches === 0 && (
          <div className="no-results">
            <p>{s.noResults}</p>
            <p>
              {s.cantFindIt} <a href="/s/ai_site_builder">{s.startWithAIBuilder}</a>
            </p>
          </div>
        )}

        <div className="generators-directory">
          {filteredCategories.map((category) => {
            const IconComponent = categoryIcons[category.id];
            const hasMore = category.generators.length > 6;
            const isShowingAll = showAllStates[category.id] || searchQuery;

            return (
              <div key={category.id} className="generator-subsection" id={category.slug}>
                <div className="subsection-header">
                  <div className="subsection-icon">
                    <IconComponent />
                  </div>
                  <div>
                    <h3 className="subsection-heading">{category.name}</h3>
                    <p className="subsection-desc">{category.desc}</p>
                  </div>
                </div>
                <div className="generator-grid" data-category={category.id} data-show-all={isShowingAll}>
                  {category.generators.map((generator, index) => (
                    <GeneratorCard key={index} generator={generator} />
                  ))}
                </div>
                {!searchQuery && hasMore && (
                  <button 
                    className="btn-show-all"
                    aria-expanded={isShowingAll}
                    aria-controls={`${category.id}-grid`}
                    onClick={() => toggleShowAll(category.id)}
                  >
                    {isShowingAll 
                      ? s.showLess.replace('{count}', category.generators.length)
                      : s.showAll.replace('{count}', category.generators.length)
                    }
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Section 6: How It Works
const HowItWorks = ({ s }) => (
  <section className="how-it-works">
    <div className="section-container">
      <h2 className="section-heading">{s.howItWorksHeading}</h2>
      <div className="steps-grid">
        <div className="step">
          <NumberIcon number="1" />
          <h3 className="step-title">{s.step1Title}</h3>
          <p className="step-desc">{s.step1Desc}</p>
        </div>
        <div className="step">
          <NumberIcon number="2" />
          <h3 className="step-title">{s.step2Title}</h3>
          <p className="step-desc">{s.step2Desc}</p>
        </div>
        <div className="step">
          <NumberIcon number="3" />
          <h3 className="step-title">{s.step3Title}</h3>
          <p className="step-desc">{s.step3Desc}</p>
        </div>
      </div>
    </div>
  </section>
);

// Section 7: Why Strikingly
const WhyStrikingly = ({ s }) => (
  <section className="why-strikingly">
    <div className="section-container">
      <h2 className="section-heading">{s.whyHeading}</h2>
      <div className="why-grid">
        <div className="why-item">
          <div className="why-icon" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <h3 className="why-title">{s.why1Title}</h3>
          <p className="why-desc">{s.why1Desc}</p>
        </div>
        <div className="why-item">
          <div className="why-icon" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M3 9h18"></path>
              <path d="M9 21V9"></path>
            </svg>
          </div>
          <h3 className="why-title">{s.why2Title}</h3>
          <p className="why-desc">{s.why2Desc}</p>
        </div>
        <div className="why-item">
          <div className="why-icon" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3 className="why-title">{s.why3Title}</h3>
          <p className="why-desc">{s.why3Desc}</p>
        </div>
      </div>
    </div>
  </section>
);

// Section 8: FAQ
const FAQ = ({ s }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { question: s.faq1Question, answer: s.faq1Answer },
    { question: s.faq2Question, answer: s.faq2Answer },
    { question: s.faq3Question, answer: s.faq3Answer },
    { question: s.faq4Question, answer: s.faq4Answer },
    { question: s.faq5Question, answer: s.faq5Answer },
    { question: s.faq6Question, answer: s.faq6Answer },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq">
      <div className="section-container">
        <h2 className="section-heading">{s.faqHeading}</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button
                className="faq-question"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDownIcon />
              </button>
              <div 
                id={`faq-answer-${index}`} 
                className="faq-answer"
                role="region"
                aria-hidden={openIndex !== index}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 9: Closing CTA
const ClosingCTA = ({ s }) => (
  <section className="closing-cta">
    <div className="section-container">
      <h2 className="closing-heading">{s.closingHeading}</h2>
      <p className="closing-sub">{s.closingSub}</p>
      <a href="/s/ai_site_builder" className="btn btn-primary btn-large btn-closing">
        {s.closingCTA}
      </a>
    </div>
  </section>
);

// Section 10: Footer
const Footer = ({ s }) => (
  <footer className="footer">
    <div className="section-container">
      <div className="footer-grid">
        <div className="footer-col">
          <span className="footer-logo">{s.logo}</span>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Product</h4>
          <ul className="footer-links">
            <li><a href="/templates">{s.footerTemplates}</a></li>
            <li><a href="/pricing">{s.footerPricing}</a></li>
            <li><a href="/support">{s.footerSupport}</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-links">
            <li><a href="/about">{s.footerAbout}</a></li>
            <li><a href="/blog">{s.footerBlog}</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Legal</h4>
          <ul className="footer-links">
            <li><a href="/terms">{s.footerTerms}</a></li>
            <li><a href="/privacy">{s.footerPrivacy}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        {s.footerCopyright}
      </div>
    </div>
  </footer>
);

// Main Page Component
const GeneratorsPage = () => {
  const s = strings.en;

  return (
    <div className="page">
      <TopBar s={s} />
      <Breadcrumb s={s} />
      <main>
        <Hero s={s} />
        <FeaturedGenerators s={s} />
        <BrowseByCategory s={s} />
        <AllGenerators s={s} />
        <HowItWorks s={s} />
        <WhyStrikingly s={s} />
        <FAQ s={s} />
        <ClosingCTA s={s} />
      </main>
      <Footer s={s} />
    </div>
  );
};

export default GeneratorsPage;