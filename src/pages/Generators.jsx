import { useState, useEffect, useRef, useCallback } from 'react';
import { strings } from '../strings.en';
import {
  featuredGenerators,
  categoryCards,
  allGenerators,
  getGeneratorHref,
} from '../data/generators';

/* ============================================
   Inline SVG Illustrations
   ============================================ */

const HeroIllustration = () => (
  <svg
    width="520"
    height="380"
    viewBox="0 0 520 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ maxWidth: '100%', height: 'auto' }}
  >
    {/* Browser window */}
    <rect x="40" y="40" width="440" height="300" rx="8" stroke="#8159BB" strokeWidth="2" fill="none" />
    <circle cx="70" cy="68" r="6" fill="#CB0C9F" opacity="0.6" />
    <circle cx="95" cy="68" r="6" fill="#7671FF" opacity="0.6" />
    <circle cx="120" cy="68" r="6" fill="#C6C9CD" />
    {/* Address bar */}
    <rect x="40" y="85" width="440" height="28" fill="#F4F6F8" />
    <rect x="55" y="92" width="180" height="14" rx="3" fill="#E2E4E7" />
    {/* Content blocks */}
    <rect x="55" y="130" width="120" height="80" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
    <rect x="190" y="130" width="120" height="80" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
    <rect x="325" y="130" width="120" height="80" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
    {/* Text lines */}
    <rect x="70" y="150" width="80" height="6" rx="3" fill="#C6C9CD" />
    <rect x="70" y="165" width="60" height="6" rx="3" fill="#E2E4E7" />
    <rect x="70" y="180" width="90" height="6" rx="3" fill="#E2E4E7" />
    <rect x="205" y="150" width="80" height="6" rx="3" fill="#C6C9CD" />
    <rect x="205" y="165" width="60" height="6" rx="3" fill="#E2E4E7" />
    <rect x="205" y="180" width="90" height="6" rx="3" fill="#E2E4E7" />
    <rect x="340" y="150" width="80" height="6" rx="3" fill="#C6C9CD" />
    <rect x="340" y="165" width="60" height="6" rx="3" fill="#E2E4E7" />
    <rect x="340" y="180" width="90" height="6" rx="3" fill="#E2E4E7" />
    {/* Bottom section */}
    <rect x="55" y="230" width="390" height="90" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
    <rect x="70" y="250" width="100" height="50" rx="4" fill="#E2E4E7" />
    <rect x="185" y="250" width="240" height="8" rx="4" fill="#C6C9CD" />
    <rect x="185" y="268" width="200" height="8" rx="4" fill="#E2E4E7" />
    <rect x="185" y="286" width="220" height="8" rx="4" fill="#E2E4E7" />
    {/* Decorative dots */}
    <circle cx="400" cy="300" r="4" fill="#7671FF" opacity="0.4" />
    <circle cx="420" cy="310" r="3" fill="#CB0C9F" opacity="0.4" />
    <circle cx="380" cy="315" r="5" fill="#8159BB" opacity="0.3" />
  </svg>
);

const CategoryThumb = ({ category }) => {
  const icons = {
    Websites: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="25" width="80" height="55" rx="4" stroke="#8159BB" strokeWidth="2" fill="none" />
        <circle cx="35" cy="38" r="3" fill="#CB0C9F" opacity="0.6" />
        <circle cx="48" cy="38" r="3" fill="#7671FF" opacity="0.6" />
        <circle cx="61" cy="38" r="3" fill="#C6C9CD" />
        <rect x="30" y="52" width="30" height="3" rx="1.5" fill="#C6C9CD" />
        <rect x="30" y="60" width="50" height="3" rx="1.5" fill="#E2E4E7" />
        <rect x="30" y="68" width="40" height="3" rx="1.5" fill="#E2E4E7" />
      </svg>
    ),
    'Landing Page': (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="20" width="90" height="70" rx="4" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="25" y="35" width="70" height="25" rx="3" fill="#F4F6F8" stroke="#E2E4E7" />
        <rect x="35" y="42" width="40" height="4" rx="2" fill="#C6C9CD" />
        <rect x="35" y="52" width="30" height="4" rx="2" fill="#E2E4E7" />
        <rect x="25" y="70" width="25" height="8" rx="2" fill="#7671FF" opacity="0.3" />
        <rect x="55" y="70" width="25" height="8" rx="2" fill="#CB0C9F" opacity="0.3" />
      </svg>
    ),
    Portfolio: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="35" height="35" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="65" y="20" width="35" height="35" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="20" y="65" width="35" height="35" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="65" y="65" width="35" height="35" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="28" y="28" width="19" height="19" rx="2" fill="#E2E4E7" />
        <rect x="73" y="28" width="19" height="19" rx="2" fill="#E2E4E7" />
        <rect x="28" y="73" width="19" height="19" rx="2" fill="#E2E4E7" />
        <rect x="73" y="73" width="19" height="19" rx="2" fill="#E2E4E7" />
      </svg>
    ),
    Blog: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="20" width="70" height="80" rx="4" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="35" y="35" width="50" height="4" rx="2" fill="#C6C9CD" />
        <rect x="35" y="48" width="45" height="3" rx="1.5" fill="#E2E4E7" />
        <rect x="35" y="56" width="50" height="3" rx="1.5" fill="#E2E4E7" />
        <rect x="35" y="64" width="40" height="3" rx="1.5" fill="#E2E4E7" />
        <rect x="35" y="78" width="50" height="4" rx="2" fill="#C6C9CD" />
        <rect x="35" y="88" width="35" height="3" rx="1.5" fill="#E2E4E7" />
      </svg>
    ),
    Store: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="35" width="80" height="55" rx="4" stroke="#8159BB" strokeWidth="2" fill="none" />
        <path d="M20 45 L60 25 L100 45" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="35" y="60" width="20" height="20" rx="2" fill="#F4F6F8" stroke="#E2E4E7" />
        <rect x="60" y="60" width="20" height="20" rx="2" fill="#F4F6F8" stroke="#E2E4E7" />
        <circle cx="45" cy="70" r="4" fill="#7671FF" opacity="0.4" />
        <circle cx="70" cy="70" r="4" fill="#CB0C9F" opacity="0.4" />
      </svg>
    ),
    'Link-in-Bio': (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="15" width="60" height="90" rx="8" stroke="#8159BB" strokeWidth="2" fill="none" />
        <circle cx="60" cy="40" r="12" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="40" y="62" width="40" height="4" rx="2" fill="#C6C9CD" />
        <rect x="45" y="72" width="30" height="3" rx="1.5" fill="#E2E4E7" />
        <rect x="35" y="85" width="50" height="8" rx="3" fill="#7671FF" opacity="0.3" />
      </svg>
    ),
  };

  return (
    <div className="category-thumb" aria-hidden="true">
      {icons[category] || icons.Websites}
    </div>
  );
};

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ============================================
   Sub-components
   ============================================ */

const TopBar = () => (
  <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: 'var(--color-divider)' }}>
    <div className="container" style={{ height: '56px', display: 'flex', alignItems: 'center' }}>
      <a href="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '18px',
          textTransform: 'uppercase',
          color: 'var(--color-hero-heading)',
          letterSpacing: '0.02em',
        }}>
          strikingly
        </span>
        <span style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '14px',
          textTransform: 'uppercase',
          color: 'var(--color-brand-purple)',
          background: 'var(--gradient-ai)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          AI
        </span>
      </a>
    </div>
  </header>
);

const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="container" style={{ paddingBlock: '12px' }}>
    <ol style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      fontSize: '13px',
      color: 'var(--color-body)',
    }}>
      <li>
        <a href="/" style={{ color: 'var(--color-body)', textDecoration: 'none' }}>
          {strings.breadcrumbRoot}
        </a>
      </li>
      <li aria-hidden="true" style={{ color: 'var(--color-brand-purple)' }}>/</li>
      <li aria-current="page" style={{ color: 'var(--color-heading)', fontWeight: 600 }}>
        {strings.breadcrumbCurrent}
      </li>
    </ol>
  </nav>
);

const Hero = () => (
  <section className="section-hero" style={{ position: 'relative', overflow: 'hidden' }}>
    <div className="hero-wash" aria-hidden="true" />
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '40px',
        alignItems: 'center',
      }}>
        {/* Text column */}
        <div>
          <h1 style={{ marginBottom: '20px' }}>
            <span style={{ display: 'block', color: 'var(--color-hero-heading)' }}>{strings.heroLine1}</span>
            <span className="ai-gradient-text" style={{ display: 'block' }}>{strings.heroLine2}</span>
          </h1>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: 'var(--color-body)',
            maxWidth: '520px',
            marginBottom: '32px',
          }}>
            {strings.heroSubheadline}
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
          }}>
            <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">
              {strings.ctaPrimary}
            </a>
            <a href="#all-generators" className="btn btn-ghost btn-lg">
              {strings.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Illustration column */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <HeroIllustration />
        </div>
      </div>
    </div>

    {/* Mobile: illustration below text */}
    <style>{`
      @media (max-width: 767px) {
        .section-hero > .container > div {
          grid-template-columns: 1fr !important;
        }
        .section-hero > .container > div > div:last-child {
          order: -1;
        }
      }
    `}</style>
  </section>
);

const FeaturedGenerators = () => (
  <section className="section" style={{ background: 'var(--color-bg-light)' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2>{strings.featuredHeading}</h2>
        <p style={{
          fontSize: '15px',
          color: 'var(--color-body)',
          marginTop: '8px',
        }}>
          {strings.featuredSubheading}
        </p>
      </div>
      <div className="grid-3">
        {featuredGenerators.map((gen) => (
          <a
            key={gen.slug}
            href={getGeneratorHref(gen.slug)}
            className="card-link"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="card">
              <h3 style={{
                fontSize: '16px',
                marginBottom: '6px',
                color: 'var(--color-hero-heading)',
              }}>
                {gen.name}
              </h3>
              <p style={{
                fontSize: '13px',
                color: 'var(--color-body)',
                marginBottom: '12px',
                lineHeight: 1.4,
              }}>
                {gen.description}
              </p>
              <span className="tag">{gen.category}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const BrowseByCategory = () => (
  <section className="section">
    <div className="container">
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>{strings.browseHeading}</h2>
      <div className="grid-6">
        {categoryCards.map((cat) => (
          <a
            key={cat.slug}
            href={cat.href}
            className="card-link"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <CategoryThumb category={cat.name} />
              <div>
                <h3 style={{
                  fontSize: '16px',
                  marginBottom: '6px',
                  color: 'var(--color-hero-heading)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  {cat.name}
                  <ArrowRightIcon />
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--color-body)',
                  lineHeight: 1.4,
                }}>
                  {cat.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const AllGenerators = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [resultCount, setResultCount] = useState(0);
  const [hasResults, setHasResults] = useState(true);
  const searchInputRef = useRef(null);
  const gridRefs = useRef({});

  const categoryKeys = Object.keys(allGenerators);

  const filterGenerators = useCallback((query) => {
    const q = query.toLowerCase().trim();
    let total = 0;

    categoryKeys.forEach((key) => {
      const section = allGenerators[key];
      const filtered = section.generators.filter((gen) => {
        const searchText = `${gen.name} ${gen.description} ${section.title}`.toLowerCase();
        return !q || searchText.includes(q);
      });

      total += filtered.length;

      const gridEl = gridRefs.current[key];
      if (gridEl) {
        filtered.forEach((gen) => {
          const card = gridEl.querySelector(`[data-gen-slug="${gen.slug}"]`);
          if (card) {
            card.style.display = q && !searchText.includes(q) ? 'none' : '';
          }
        });
      }
    });

    setResultCount(total);
    setHasResults(total > 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      filterGenerators(searchQuery);
    }, 150);
    return () => clearTimeout(timer);
  }, [searchQuery, filterGenerators]);

  const handleClearSearch = () => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.value = '';
    }
    filterGenerators('');
  };

  const handleShowAll = (key) => {
    const gridEl = gridRefs.current[key];
    if (gridEl) {
      gridEl.classList.remove('generator-grid-collapsed');
      gridEl.classList.add('generator-grid-expanded');
    }
  };

  useEffect(() => {
    // Initialize collapsed state for grids with >6 items
    categoryKeys.forEach((key) => {
      const gridEl = gridRefs.current[key];
      if (gridEl && allGenerators[key].generators.length > 6) {
        gridEl.classList.add('generator-grid-collapsed');
      }
    });
  }, []);

  return (
    <section id="all-generators" className="section" style={{ background: 'var(--color-bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2>{strings.allGeneratorsHeading}</h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--color-body)',
            marginTop: '8px',
          }}>
            {strings.allGeneratorsSubheading}
          </p>
        </div>

        {/* Search */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '40px',
        }}>
          <div className="search-input-wrapper">
            <SearchIcon />
            <input
              ref={searchInputRef}
              type="search"
              className="search-input"
              placeholder={strings.searchPlaceholder}
              aria-label={strings.searchAriaLabel}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {searchQuery && (
            <p style={{
              fontSize: '13px',
              color: 'var(--color-body)',
              textAlign: 'center',
            }}>
              {hasResults
                ? strings.searchResultCount.replace('{count}', resultCount)
                : strings.searchNoResults}
            </p>
          )}
          {searchQuery && !hasResults && (
            <div style={{ textAlign: 'center', marginTop: '8px' }}>
              <button
                type="button"
                onClick={handleClearSearch}
                className="btn btn-ghost"
                style={{ marginBottom: '8px' }}
              >
                {strings.searchClearButton}
              </button>
              <br />
              <a
                href="/s/ai_site_builder"
                style={{
                  fontSize: '13px',
                  color: 'var(--color-brand-purple)',
                  textDecoration: 'underline',
                }}
              >
                {strings.searchNoResultsLink}
              </a>
            </div>
          )}
        </div>

        {/* Category subsections */}
        {categoryKeys.map((key) => {
          const section = allGenerators[key];
          return (
            <div key={key} id={section.id} style={{ marginBottom: '48px', scrollMarginTop: '80px' }}>
              <h3 style={{ marginBottom: '8px' }}>{section.title}</h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--color-body)',
                marginBottom: '20px',
              }}>
                {section.description}
              </p>
              <div
                ref={(el) => { gridRefs.current[key] = el; }}
                className="grid-3 generator-grid-collapsed"
              >
                {section.generators.map((gen) => (
                  <a
                    key={gen.slug}
                    href={getGeneratorHref(gen.slug)}
                    data-gen-slug={gen.slug}
                    className="card-link"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className="card">
                      <div className="category-thumb" style={{ marginBottom: '12px' }}>
                        <CategoryThumb category={section.title} />
                      </div>
                      <h4 style={{
                        fontSize: '15px',
                        marginBottom: '4px',
                        color: 'var(--color-hero-heading)',
                      }}>
                        {gen.name}
                      </h4>
                      <p style={{
                        fontSize: '13px',
                        color: 'var(--color-body)',
                        lineHeight: 1.4,
                      }}>
                        {gen.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              {section.generators.length > 6 && (
                <button
                  type="button"
                  className="btn btn-ghost show-all-btn"
                  onClick={() => handleShowAll(key)}
                  aria-expanded="false"
                  aria-controls={`grid-${key}`}
                >
                  {strings.showAllButton.replace('{count}', section.generators.length)}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const HowItWorks = () => (
  <section className="section">
    <div className="container">
      <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>{strings.howItWorksHeading}</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '32px',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {[
          { num: '1', title: strings.step1Title, body: strings.step1Body },
          { num: '2', title: strings.step2Title, body: strings.step2Body },
          { num: '3', title: strings.step3Title, body: strings.step3Body },
        ].map((step) => (
          <div key={step.num} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px',
            textAlign: 'left',
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'var(--gradient-ai)',
              color: 'var(--color-white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '18px',
              flexShrink: 0,
            }}>
              {step.num}
            </div>
            <div>
              <h3 style={{ marginBottom: '6px', fontSize: '16px' }}>{step.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-body)', lineHeight: 1.5 }}>{step.body}</p>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media (min-width: 768px) {
          .section > .container > div:last-child {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </div>
  </section>
);

const WhyStrikingly = () => (
  <section className="section" style={{ background: 'var(--color-bg-light)' }}>
    <div className="container">
      <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>{strings.whyHeading}</h2>
      <div className="grid-3">
        {[
          { title: strings.why1Title, body: strings.why1Body, icon: '⚡' },
          { title: strings.why2Title, body: strings.why2Body, icon: '📱' },
          { title: strings.why3Title, body: strings.why3Body, icon: '🆓' },
        ].map((item) => (
          <div key={item.title} className="card" style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '28px',
              marginBottom: '12px',
              lineHeight: 1,
            }} aria-hidden="true">
              {item.icon}
            </div>
            <h3 style={{ marginBottom: '8px', fontSize: '15px' }}>{item.title}</h3>
            <p style={{ fontSize: '13px', color: 'var(--color-body)', lineHeight: 1.5 }}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: strings.faq1Q, a: strings.faq1A },
    { q: strings.faq2Q, a: strings.faq2A },
    { q: strings.faq3Q, a: strings.faq3A },
    { q: strings.faq4Q, a: strings.faq4A },
    { q: strings.faq5Q, a: strings.faq5A },
    { q: strings.faq6Q, a: strings.faq6A },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>{strings.faqHeading}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  border: '1px solid var(--color-card-border)',
                  borderRadius: 'var(--card-radius)',
                  background: 'var(--color-white)',
                  overflow: 'hidden',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--color-hero-heading)',
                    textAlign: 'left',
                    gap: '12px',
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronIcon />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  aria-hidden={!isOpen}
                  style={{
                    padding: isOpen ? '0 20px 16px' : '0 20px',
                  }}
                >
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-body)',
                    lineHeight: 1.6,
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ClosingCTA = () => (
  <section className="section" style={{ background: 'var(--color-white)', borderTop: '1px solid var(--color-divider)' }}>
    <div className="container" style={{
      textAlign: 'center',
      maxWidth: '600px',
    }}>
      <h2 style={{ marginBottom: '12px' }}>{strings.closingHeading}</h2>
      <p style={{
        fontSize: '15px',
        color: 'var(--color-body)',
        marginBottom: '28px',
        lineHeight: 1.5,
      }}>
        {strings.closingSub}
      </p>
      <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">
        {strings.closingCta}
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{
    background: 'var(--color-bg-light)',
    borderTop: '1px solid var(--color-divider)',
    paddingBlock: '48px 24px',
  }}>
    <div className="container">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '32px',
        marginBottom: '32px',
      }}>
        {/* Brand column */}
        <div>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '16px',
            textTransform: 'uppercase',
            color: 'var(--color-hero-heading)',
          }}>
            strikingly AI
          </span>
        </div>

        {/* Link columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}>
          <div>
            <p style={{
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              color: 'var(--color-heading)',
              marginBottom: '10px',
              fontFamily: 'var(--font-heading)',
            }}>
              Product
            </p>
            <ul style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}>
              <li><a href="/pricing" style={{ fontSize: '13px', color: 'var(--color-body)', textDecoration: 'none' }}>{strings.footerPricing}</a></li>
              <li><a href="/templates" style={{ fontSize: '13px', color: 'var(--color-body)', textDecoration: 'none' }}>{strings.footerTemplates}</a></li>
            </ul>
          </div>
          <div>
            <p style={{
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              color: 'var(--color-heading)',
              marginBottom: '10px',
              fontFamily: 'var(--font-heading)',
            }}>
              Company
            </p>
            <ul style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}>
              <li><a href="/about" style={{ fontSize: '13px', color: 'var(--color-body)', textDecoration: 'none' }}>{strings.footerAbout}</a></li>
              <li><a href="/blog" style={{ fontSize: '13px', color: 'var(--color-body)', textDecoration: 'none' }}>{strings.footerBlog}</a></li>
              <li><a href="/support" style={{ fontSize: '13px', color: 'var(--color-body)', textDecoration: 'none' }}>{strings.footerSupport}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid var(--color-divider)',
        paddingTop: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <p style={{ fontSize: '12px', color: 'var(--color-body)' }}>
          {strings.footerCopyright.replace('{year}', '2026')}
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="/terms" style={{ fontSize: '12px', color: 'var(--color-body)', textDecoration: 'none' }}>{strings.footerTerms}</a>
          <a href="/privacy" style={{ fontSize: '12px', color: 'var(--color-body)', textDecoration: 'none' }}>{strings.footerPrivacy}</a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 2fr !important;
          }
          footer > div > div:last-child > div {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </div>
  </footer>
);

/* ============================================
   Main Page Component
   ============================================ */

export default function Generators() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      <Breadcrumb />
      <main style={{ flex: 1 }}>
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
    </div>
  );
}
