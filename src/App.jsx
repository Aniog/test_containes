import { useState, useEffect, useRef } from 'react';
import './App.css';
import { strings, generators, featuredGenerators, generateSlug } from './strings';

function App() {
  return (
    <div className="generators-page">
      <TopBar />
      <Breadcrumb />
      <Hero />
      <FeaturedGenerators />
      <BrowseByCategory />
      <AllGenerators />
      <HowItWorks />
      <WhyStrikingly />
      <FAQ />
      <ClosingCTA />
      <Footer />
    </div>
  );
}

// Section 0: Top Bar
function TopBar() {
  return (
    <header className="top-bar">
      <div className="top-bar-content">
        <a href="/" className="top-bar-logo" aria-label="Strikingly Home">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#8159BB"/>
            <path d="M2 17L12 22L22 17" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{strings.topBar.logo}</span>
        </a>
      </div>
    </header>
  );
}

// Section 1: Breadcrumb
function Breadcrumb() {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <a href="/">{strings.breadcrumb.home}</a>
        </li>
        <li className="breadcrumb-separator" aria-hidden="true">&gt;</li>
        <li className="breadcrumb-item current" aria-current="page">
          {strings.breadcrumb.current}
        </li>
      </ol>
    </nav>
  );
}

// Section 2: Hero
function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" aria-hidden="true"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-h1">
            <span className="hero-h1-line1">{strings.hero.h1Line1}</span>
            <span className="hero-h1-line2">{strings.hero.h1Line2}</span>
          </h1>
          <p className="hero-subheadline">{strings.hero.subheadline}</p>
          <div className="hero-ctas">
            <a href="/s/ai_site_builder" className="btn btn-primary btn-large">
              {strings.hero.primaryCta}
            </a>
            <a href="#all-generators" className="btn btn-ghost btn-large">
              {strings.hero.secondaryCta}
            </a>
          </div>
        </div>
        <div className="hero-illustration" aria-hidden="true">
          <svg width="400" height="300" viewBox="0 0 400 300" className="hero-svg">
            <defs>
              <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7671FF" />
                <stop offset="100%" stopColor="#CB0C9F" />
              </linearGradient>
            </defs>
            <rect x="40" y="40" width="320" height="220" rx="8" fill="white" stroke="#C6C9CD" strokeWidth="2"/>
            <rect x="60" y="60" width="120" height="16" rx="2" fill="#F4F6F8"/>
            <rect x="60" y="86" width="80" height="10" rx="2" fill="#E2E4E7"/>
            <rect x="60" y="106" width="280" height="80" rx="4" fill="#F4F6F8"/>
            <rect x="60" y="196" width="60" height="8" rx="2" fill="#E2E4E7"/>
            <rect x="130" y="196" width="60" height="8" rx="2" fill="#E2E4E7"/>
            <rect x="200" y="196" width="60" height="8" rx="2" fill="#E2E4E7"/>
            <circle cx="320" cy="80" r="24" fill="url(#heroGrad)" opacity="0.2"/>
            <path d="M308 80 L316 88 L332 72" stroke="url(#heroGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

// Section 3: Featured Generators
function FeaturedGenerators() {
  return (
    <section className="featured-generators">
      <div className="section-content">
        <h2 className="section-heading">{strings.featured.heading}</h2>
        <p className="section-subheading">{strings.featured.subheading}</p>
        <div className="featured-grid">
          {featuredGenerators.map((gen, idx) => (
            <a 
              key={idx} 
              href={`/generators/${generateSlug(gen.name)}`} 
              className="card featured-card"
            >
              <span className="card-category-tag">{gen.category}</span>
              <h3 className="card-title">{gen.name}</h3>
              <p className="card-description">{gen.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 4: Browse by Category
function BrowseByCategory() {
  const categories = [
    strings.categories.websites,
    strings.categories.landingPages,
    strings.categories.portfolios,
    strings.categories.blogs,
    strings.categories.stores,
    strings.categories.linkInBio,
  ];

  return (
    <section className="browse-categories">
      <div className="section-content">
        <h2 className="section-heading">{strings.categories.heading}</h2>
        <div className="category-grid">
          {categories.map((cat, idx) => (
            <a 
              key={idx} 
              href={`#${cat.slug}`} 
              className="card category-card"
            >
              <div className="category-icon" aria-hidden="true">
                <CategoryIcon index={idx} />
              </div>
              <h3 className="category-name">{cat.name}</h3>
              <p className="category-description">{cat.description}</p>
              <span className="category-arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryIcon({ index }) {
  const icons = [
    // Websites
    <svg key="web" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="6" width="24" height="20" rx="2" stroke="#8159BB" strokeWidth="2"/>
      <path d="M4 12H28" stroke="#8159BB" strokeWidth="2"/>
      <circle cx="10" cy="9" r="1" fill="#8159BB"/>
      <circle cx="14" cy="9" r="1" fill="#8159BB"/>
    </svg>,
    // Landing Pages
    <svg key="landing" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="4" width="20" height="24" rx="2" stroke="#8159BB" strokeWidth="2"/>
      <path d="M10 10H22" stroke="#8159BB" strokeWidth="2"/>
      <path d="M10 14H18" stroke="#8159BB" strokeWidth="2"/>
    </svg>,
    // Portfolios
    <svg key="portfolio" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="4" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2"/>
      <rect x="18" y="4" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2"/>
      <rect x="4" y="18" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2"/>
      <rect x="18" y="18" width="10" height="10" rx="1" stroke="#8159BB" strokeWidth="2"/>
    </svg>,
    // Blogs
    <svg key="blog" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="4" width="20" height="24" rx="2" stroke="#8159BB" strokeWidth="2"/>
      <path d="M10 10H22" stroke="#8159BB" strokeWidth="2"/>
      <path d="M10 14H22" stroke="#8159BB" strokeWidth="2"/>
      <path d="M10 18H16" stroke="#8159BB" strokeWidth="2"/>
    </svg>,
    // Stores
    <svg key="store" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M6 10H26L28 28H4L6 10Z" stroke="#8159BB" strokeWidth="2"/>
      <path d="M12 14H20" stroke="#8159BB" strokeWidth="2"/>
      <path d="M10 18H22" stroke="#8159BB" strokeWidth="2"/>
    </svg>,
    // Link in Bio
    <svg key="link" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="2"/>
      <path d="M12 16H20" stroke="#8159BB" strokeWidth="2"/>
      <path d="M16 12V20" stroke="#8159BB" strokeWidth="2"/>
    </svg>,
  ];
  return icons[index] || icons[0];
}

// Section 5: All Generators
function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllStates, setShowAllStates] = useState({});
  const searchInputRef = useRef(null);

  const categoryData = [
    { key: 'websites', ...strings.categories.websites },
    { key: 'landingPages', ...strings.categories.landingPages },
    { key: 'portfolios', ...strings.categories.portfolios },
    { key: 'blogs', ...strings.categories.blogs },
    { key: 'stores', ...strings.categories.stores },
    { key: 'linkInBio', ...strings.categories.linkInBio },
  ];

  const filterGenerators = (gens) => {
    if (!searchQuery.trim()) return gens;
    const q = searchQuery.toLowerCase();
    return gens.filter(g => 
      g.name.toLowerCase().includes(q) || 
      g.description.toLowerCase().includes(q) ||
      g.category.toLowerCase().includes(q)
    );
  };

  const getResultCount = () => {
    let count = 0;
    Object.values(generators).forEach(gens => {
      count += filterGenerators(gens).length;
    });
    return count;
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    searchInputRef.current?.focus();
  };

  const toggleShowAll = (categoryKey) => {
    setShowAllStates(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  const resultCount = getResultCount();

  return (
    <section id="all-generators" className="all-generators">
      <div className="section-content">
        <h2 className="section-heading">{strings.allGenerators.heading}</h2>
        <p className="section-subheading">{strings.allGenerators.subheading}</p>
        
        <div className="search-container">
          <div className="search-input-wrapper">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="6" stroke="#636972" strokeWidth="2"/>
              <path d="M13.5 13.5L17 17" stroke="#636972" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              ref={searchInputRef}
              type="search"
              className="search-input"
              placeholder={strings.allGenerators.searchPlaceholder}
              aria-label={strings.allGenerators.searchLabel}
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          {searchQuery && (
            <span className="search-result-count">
              {strings.allGenerators.resultCount.replace('{count}', resultCount)}
            </span>
          )}
        </div>

        {searchQuery && resultCount === 0 && (
          <div className="search-empty">
            <p>{strings.allGenerators.noResults}</p>
            <button className="btn btn-ghost" onClick={clearSearch}>
              {strings.allGenerators.clearSearch}
            </button>
            <p className="search-empty-link">
              {strings.allGenerators.cantFind}{' '}
              <a href="/s/ai_site_builder">{strings.allGenerators.startWithAi}</a>
            </p>
          </div>
        )}

        <div className="generators-directory">
          {categoryData.map((cat) => {
            const allGens = generators[cat.key] || [];
            const filteredGens = filterGenerators(allGens);
            const totalCount = allGens.length;
            const visibleCount = 6;
            const hasMore = totalCount > visibleCount;
            const isShowingAll = showAllStates[cat.key];
            const displayGens = (searchQuery || isShowingAll) ? filteredGens : filteredGens.slice(0, visibleCount);

            if (searchQuery && filteredGens.length === 0) return null;

            return (
              <div key={cat.key} id={cat.slug} className="generator-subsection">
                <h3 className="subsection-heading">{cat.name}</h3>
                <p className="subsection-description">{cat.description}</p>
                <div className="generator-grid">
                  {displayGens.map((gen, idx) => (
                    <a 
                      key={idx} 
                      href={`/generators/${generateSlug(gen.name)}`} 
                      className="card generator-card"
                    >
                      <div className="generator-thumbnail" aria-hidden="true">
                        <GeneratorThumbnail category={cat.key} />
                      </div>
                      <h4 className="card-title">{gen.name}</h4>
                      <p className="card-description">{gen.description}</p>
                    </a>
                  ))}
                </div>
                {hasMore && !searchQuery && (
                  <button 
                    className="show-all-btn"
                    aria-expanded={isShowingAll}
                    aria-controls={`${cat.slug}-grid`}
                    onClick={() => toggleShowAll(cat.key)}
                  >
                    {isShowingAll 
                      ? strings.allGenerators.showLess.replace('{count}', totalCount)
                      : strings.allGenerators.showAll.replace('{count}', totalCount)
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
}

function GeneratorThumbnail({ category }) {
  const colors = {
    websites: '#E8E3F3',
    landingPages: '#E3E8F3',
    portfolios: '#F3E8E3',
    blogs: '#E3F3E8',
    stores: '#F3E8F3',
    linkInBio: '#E8F3E8',
  };
  return (
    <div className="thumbnail-placeholder" style={{ backgroundColor: colors[category] || colors.websites }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#8159BB" strokeWidth="1.5"/>
        <path d="M3 9H21" stroke="#8159BB" strokeWidth="1.5"/>
      </svg>
    </div>
  );
}

// Section 6: How It Works
function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="section-content">
        <h2 className="section-heading">{strings.howItWorks.heading}</h2>
        <div className="steps-grid">
          {strings.howItWorks.steps.map((step, idx) => (
            <div key={idx} className="step-item">
              <div className="step-number" aria-hidden="true">{idx + 1}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 7: Why Strikingly
function WhyStrikingly() {
  return (
    <section className="why-strikingly">
      <div className="section-content">
        <h2 className="section-heading">{strings.whyStrikingly.heading}</h2>
        <div className="reasons-grid">
          {strings.whyStrikingly.reasons.map((reason, idx) => (
            <div key={idx} className="reason-item">
              <div className="reason-icon" aria-hidden="true">
                <ReasonIcon index={idx} />
              </div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonIcon({ index }) {
  const icons = [
    // Live in seconds
    <svg key="live" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="2"/>
      <path d="M12 16L15 19L20 13" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Mobile by default
    <svg key="mobile" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="10" y="4" width="12" height="24" rx="2" stroke="#8159BB" strokeWidth="2"/>
      <path d="M14 24H18" stroke="#8159BB" strokeWidth="2" strokeLinecap="round"/>
    </svg>,
    // Free to start
    <svg key="free" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 4V28" stroke="#8159BB" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 10C8 10 12 8 16 8C20 8 24 10 24 10C24 10 20 12 16 12C12 12 8 10 8 10Z" stroke="#8159BB" strokeWidth="2"/>
      <path d="M8 18C8 18 12 16 16 16C20 16 24 18 24 18C24 18 20 20 16 20C12 20 8 18 8 18Z" stroke="#8159BB" strokeWidth="2"/>
    </svg>,
  ];
  return icons[index] || icons[0];
}

// Section 8: FAQ
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="faq">
      <div className="section-content">
        <h2 className="section-heading">{strings.faq.heading}</h2>
        <div className="faq-list">
          {strings.faq.questions.map((item, idx) => (
            <div key={idx} className={`faq-item ${openIndex === idx ? 'open' : ''}`}>
              <button
                className="faq-question"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                onClick={() => toggleFAQ(idx)}
              >
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true">{openIndex === idx ? '−' : '+'}</span>
              </button>
              <div 
                id={`faq-answer-${idx}`} 
                className="faq-answer"
                role="region"
                aria-hidden={openIndex !== idx}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 9: Closing CTA
function ClosingCTA() {
  return (
    <section className="closing-cta">
      <div className="section-content centered">
        <h2 className="closing-headline">{strings.closingCta.headline}</h2>
        <p className="closing-sub">{strings.closingCta.sub}</p>
        <a href="/s/ai_site_builder" className="btn btn-primary btn-large btn-cta">
          {strings.closingCta.button}
        </a>
      </div>
    </section>
  );
}

// Section 10: Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#8159BB"/>
            <path d="M2 17L12 22L22 17" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Strikingly</span>
        </div>
        <div className="footer-links">
          {strings.footer.columns.map((col, idx) => (
            <div key={idx} className="footer-column">
              <h4 className="footer-column-title">{col.title}</h4>
              <ul className="footer-list">
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-copyright">
          {strings.footer.copyright}
        </div>
      </div>
    </footer>
  );
}

export default App;
