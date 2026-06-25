import { useEffect, useRef, useState } from 'react';
import {
  strings,
  featuredGenerators,
  browseCategories,
  allGenerators,
  howItWorks,
  whyStrikingly,
  faqData,
  slugify,
} from './generators-data';
import './App.css';

const s = strings.en;

// SVG icons as components for inline rendering
function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function SmartphoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function CreditCardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}

function HeroIllustration() {
  return (
    <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="60" y="40" width="280" height="200" rx="8" stroke="#C6B3E0" strokeWidth="1.5" fill="none" />
      <rect x="80" y="60" width="240" height="30" rx="4" stroke="#D4C4E8" strokeWidth="1" fill="none" />
      <rect x="80" y="105" width="110" height="80" rx="4" stroke="#D4C4E8" strokeWidth="1" fill="none" />
      <rect x="205" y="105" width="115" height="35" rx="4" stroke="#D4C4E8" strokeWidth="1" fill="none" />
      <rect x="205" y="150" width="115" height="35" rx="4" stroke="#D4C4E8" strokeWidth="1" fill="none" />
      <rect x="80" y="200" width="240" height="25" rx="4" stroke="#D4C4E8" strokeWidth="1" fill="none" />
      <circle cx="330" cy="260" r="20" stroke="#C6B3E0" strokeWidth="1.5" fill="none" />
      <path d="M322 260L328 266L340 254" stroke="#C6B3E0" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="85" cy="200" r="3" fill="#C6B3E0" opacity="0.5" />
      <circle cx="100" cy="185" r="2" fill="#C6B3E0" opacity="0.3" />
      <circle cx="320" cy="75" r="2" fill="#C6B3E0" opacity="0.4" />
    </svg>
  );
}

function CategoryIcon({ id }) {
  const icons = {
    websites: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    'landing-pages': (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    portfolios: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    blogs: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    stores: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  };
  return icons[id] || null;
}

function CategoryThumbnail() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="10" width="32" height="24" rx="3" stroke="#C6B3E0" strokeWidth="1" fill="none" />
      <line x1="8" y1="18" x2="40" y2="18" stroke="#C6B3E0" strokeWidth="1" />
      <circle cx="14" cy="14" r="1.5" fill="#C6B3E0" opacity="0.5" />
      <circle cx="19" cy="14" r="1.5" fill="#C6B3E0" opacity="0.5" />
      <circle cx="24" cy="14" r="1.5" fill="#C6B3E0" opacity="0.5" />
      <rect x="12" y="24" width="10" height="6" rx="1" stroke="#C6B3E0" strokeWidth="1" fill="none" />
      <rect x="26" y="24" width="10" height="6" rx="1" stroke="#C6B3E0" strokeWidth="1" fill="none" />
    </svg>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const searchRef = useRef(null);
  const resultCountRef = useRef(null);

  // Progressive enhancement: initialize expanded state for JS-enabled browsers
  useEffect(() => {
    const initial = {};
    allGenerators.forEach((cat) => {
      initial[cat.id] = false;
    });
    setExpandedCategories(initial);
  }, []);

  // Search filtering logic
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase().trim();
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
    if (searchRef.current) searchRef.current.value = '';
  };

  const getFilteredGenerators = (category) => {
    if (!searchQuery) return category.generators;
    return category.generators.filter(
      (g) =>
        g.name.toLowerCase().includes(searchQuery) ||
        g.description.toLowerCase().includes(searchQuery) ||
        category.name.toLowerCase().includes(searchQuery)
    );
  };

  const totalMatches = allGenerators.reduce((sum, cat) => {
    return sum + getFilteredGenerators(cat).length;
  }, 0);

  const toggleCategory = (catId) => {
    setExpandedCategories((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      {/* Section 0: Top bar */}
      <header
        style={{
          background: '#FFFFFF',
          borderBottom: '1px solid #E2E4E7',
          padding: '16px 0',
        }}
      >
        <div className="container-main">
          <a
            href="/"
            style={{
              fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: '18px',
              color: '#2E2E2F',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            {s.topBarLogo}
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ padding: '12px 0' }}>
        <div className="container-main">
          <ol
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: '#636972',
            }}
          >
            <li>
              <a href="/" style={{ color: '#636972', textDecoration: 'none' }}>
                {s.breadcrumbHome}
              </a>
            </li>
            <li aria-hidden="true">{'>'}</li>
            <li aria-current="page" style={{ color: '#636972' }}>
              {s.breadcrumbCurrent}
            </li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Section 2: Hero */}
        <section
          style={{
            background: 'radial-gradient(ellipse at 70% 50%, rgba(198,179,224,0.12) 0%, transparent 60%)',
          }}
          className="hero-padding"
        >
          <div className="container-main">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '40px',
                alignItems: 'center',
              }}
              className="md:grid-cols-2"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: 1.15 }}>
                  <span style={{ color: '#2E2E2F', display: 'block' }}>{s.heroH1Line1}</span>
                  <span className="gradient-text" style={{ display: 'block' }}>
                    {s.heroH1Line2}
                  </span>
                </h1>
                <p style={{ color: '#636972', fontSize: '16px', lineHeight: 1.5, maxWidth: '480px' }}>
                  {s.heroSubheadline}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
                  <a href="/s/ai_site_builder" className="btn-gradient" style={{ fontSize: '14px' }}>
                    {s.heroCtaPrimary}
                  </a>
                  <a href="#all-generators" className="btn-ghost" style={{ fontSize: '14px' }}>
                    {s.heroCtaSecondary}
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Generators */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-main">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 32px)', marginBottom: '8px' }}>
                {s.featuredHeading}
              </h2>
              <p style={{ color: '#636972', fontSize: '14px' }}>{s.featuredSubheading}</p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              {featuredGenerators.map((gen) => (
                <a
                  key={gen.name}
                  href={`/generators/${slugify(gen.name)}`}
                  className="card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <h3 style={{ fontSize: '16px', color: '#2E2E2F', textTransform: 'none' }}>
                    {gen.name}
                  </h3>
                  <p style={{ color: '#636972', fontSize: '14px', lineHeight: 1.5 }}>
                    {gen.description}
                  </p>
                  <span className="tag" style={{ alignSelf: 'flex-start' }}>
                    {gen.category}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Browse by Category */}
        <section className="section-padding" style={{ background: '#F4F6F8' }}>
          <div className="container-main">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 32px)' }}>{s.browseHeading}</h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '20px',
              }}
            >
              {browseCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`/generators#${cat.id}`}
                  className="card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '12px',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <CategoryIcon id={cat.id} />
                  <h3 style={{ fontSize: '16px', color: '#2E2E2F' }}>{cat.name}</h3>
                  <p style={{ color: '#636972', fontSize: '14px', lineHeight: 1.5 }}>
                    {cat.description}
                  </p>
                  <span style={{ marginTop: 'auto', color: '#8159BB', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Josefin Sans', 'Poppins', sans-serif", fontWeight: 700, fontSize: '12px', textTransform: 'uppercase' }}>
                    Browse <ArrowRightIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: All Generators directory */}
        <section id="all-generators" className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-main">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 32px)', marginBottom: '8px' }}>
                {s.allGeneratorsHeading}
              </h2>
              <p style={{ color: '#636972', fontSize: '14px' }}>{s.allGeneratorsSubheading}</p>
            </div>

            {/* Search */}
            <div style={{ maxWidth: '480px', margin: '0 auto 30px', position: 'relative' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1px solid #C6C9CD',
                  borderRadius: '4px',
                  padding: '0 14px',
                  height: '44px',
                  background: '#FFFFFF',
                }}
              >
                <SearchIcon />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder={s.searchPlaceholder}
                  aria-label={s.searchLabel}
                  onChange={handleSearch}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    fontSize: '14px',
                    fontFamily: "'Open Sans', system-ui, sans-serif",
                    color: '#2E2E2F',
                    background: 'transparent',
                  }}
                />
              </div>
              <div
                ref={resultCountRef}
                style={{
                  marginTop: '8px',
                  fontSize: '13px',
                  color: '#636972',
                  minHeight: '20px',
                }}
              >
                {searchQuery && (
                  <>
                    {totalMatches > 0
                      ? s.searchResultCount(totalMatches)
                      : s.searchNoResults}
                  </>
                )}
              </div>
            </div>

            {/* Empty state */}
            {searchQuery && totalMatches === 0 && (
              <div className="empty-state">
                <p style={{ color: '#636972', marginBottom: '16px' }}>{s.searchNoResults}</p>
                <button
                  onClick={clearSearch}
                  className="btn-ghost"
                  style={{ marginBottom: '12px' }}
                >
                  {s.searchClear}
                </button>
                <p>
                  <a href="/s/ai_site_builder" style={{ color: '#8159BB', textDecoration: 'underline' }}>
                    {s.searchTryBuilder}
                  </a>
                </p>
              </div>
            )}

            {/* Category subsections */}
            {allGenerators.map((category) => {
              const filtered = getFilteredGenerators(category);
              const hasMatches = filtered.length > 0;
              const isExpanded = expandedCategories[category.id];
              const initialVisible = 6;
              const hasMore = filtered.length > initialVisible;
              const visibleGenerators = isExpanded ? filtered : filtered.slice(0, initialVisible);

              if (searchQuery && !hasMatches) {
                return (
                  <div key={category.id} style={{ display: 'none' }} aria-hidden="true">
                    <h3>{category.name}</h3>
                    <div>
                      {category.generators.map((g) => (
                        <a key={g.name} href={`/generators/${slugify(g.name)}`}>
                          {g.name}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <div key={category.id} id={category.id} style={{ marginBottom: '40px' }}>
                  <h3
                    style={{
                      fontSize: '20px',
                      color: '#2E2E2F',
                      marginBottom: '4px',
                    }}
                  >
                    {category.name}
                  </h3>
                  <p
                    style={{
                      color: '#636972',
                      fontSize: '14px',
                      marginBottom: '20px',
                    }}
                  >
                    {category.description}
                  </p>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                      gap: '20px',
                    }}
                  >
                    {visibleGenerators.map((gen) => (
                      <a
                        key={gen.name}
                        href={`/generators/${slugify(gen.name)}`}
                        className="card"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                          textDecoration: 'none',
                          color: 'inherit',
                        }}
                      >
                        <CategoryThumbnail />
                        <h4
                          style={{
                            fontSize: '15px',
                            color: '#2E2E2F',
                            textTransform: 'none',
                            fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          {gen.name}
                        </h4>
                        <p style={{ color: '#636972', fontSize: '14px', lineHeight: 1.5 }}>
                          {gen.description}
                        </p>
                      </a>
                    ))}
                  </div>
                  {hasMore && (
                    <div style={{ marginTop: '16px', textAlign: 'center' }}>
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="btn-ghost"
                        aria-expanded={isExpanded}
                        aria-controls={`grid-${category.id}`}
                        style={{ fontSize: '13px', height: '36px' }}
                      >
                        {isExpanded
                          ? s.showLess
                          : s.showAll(filtered.length, category.name.toLowerCase())}
                      </button>
                    </div>
                  )}
                  {/* Hidden extra cards for SEO — always in DOM, visible when JS disabled or expanded */}
                  <div
                    id={`grid-${category.id}`}
                    className="generator-grid-wrapper"
                    style={{ display: isExpanded ? 'block' : 'none' }}
                    aria-hidden={!isExpanded}
                  >
                    <div className="generator-grid-inner">
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                          gap: '20px',
                          marginTop: '20px',
                        }}
                      >
                        {filtered.slice(initialVisible).map((gen) => (
                          <a
                            key={gen.name}
                            href={`/generators/${slugify(gen.name)}`}
                            className="card"
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '10px',
                              textDecoration: 'none',
                              color: 'inherit',
                            }}
                          >
                            <CategoryThumbnail />
                            <h4
                              style={{
                                fontSize: '15px',
                                color: '#2E2E2F',
                                textTransform: 'none',
                                fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                                fontWeight: 700,
                              }}
                            >
                              {gen.name}
                            </h4>
                            <p style={{ color: '#636972', fontSize: '14px', lineHeight: 1.5 }}>
                              {gen.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section className="section-padding" style={{ background: '#F4F6F8' }}>
          <div className="container-main">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 32px)' }}>{s.howItWorksHeading}</h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '30px',
              }}
            >
              {howItWorks.map((step) => (
                <div key={step.number} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#8159BB',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: '18px',
                      margin: '0 auto 16px',
                    }}
                  >
                    {step.number}
                  </div>
                  <h3 style={{ fontSize: '14px', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ color: '#636972', fontSize: '14px', lineHeight: 1.5 }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Why Strikingly */}
        <section className="section-padding" style={{ background: '#FFFFFF' }}>
          <div className="container-main">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 32px)' }}>{s.whyStrikinglyHeading}</h2>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '30px',
              }}
            >
              {whyStrikingly.map((item, idx) => {
                const icons = [<LightningIcon key="l" />, <SmartphoneIcon key="s" />, <CreditCardIcon key="c" />];
                return (
                  <div key={item.title} style={{ textAlign: 'center' }}>
                    <div style={{ color: '#8159BB', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                      {icons[idx]}
                    </div>
                    <h3 style={{ fontSize: '14px', marginBottom: '8px' }}>{item.title}</h3>
                    <p style={{ color: '#636972', fontSize: '14px', lineHeight: 1.5 }}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="section-padding" style={{ background: '#F4F6F8' }}>
          <div className="container-main">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 32px)' }}>{s.faqHeading}</h2>
            </div>
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              {faqData.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    borderBottom: '1px solid #E2E4E7',
                    background: '#FFFFFF',
                    borderRadius: idx === 0 ? '3px 3px 0 0' : idx === faqData.length - 1 ? '0 0 3px 3px' : '0',
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaqIndex === idx}
                    aria-controls={`faq-answer-${idx}`}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '16px 20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      color: '#2E2E2F',
                    }}
                  >
                    <span>{faq.question}</span>
                    <span
                      style={{
                        display: 'inline-block',
                        transition: 'transform 0.2s ease',
                        transform: openFaqIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: '#8159BB',
                        fontSize: '12px',
                      }}
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${idx}`}
                    className={`faq-content ${openFaqIndex === idx ? 'open' : ''}`}
                  >
                    <div style={{ padding: '0 20px 16px' }}>
                      <p style={{ color: '#636972', fontSize: '14px', lineHeight: 1.6 }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Closing CTA */}
        <section className="section-padding" style={{ background: '#FFFFFF', textAlign: 'center' }}>
          <div className="container-main">
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 32px)', marginBottom: '12px' }}>
              {s.closingHeading}
            </h2>
            <p style={{ color: '#636972', fontSize: '14px', marginBottom: '24px' }}>
              {s.closingSub}
            </p>
            <a href="/s/ai_site_builder" className="btn-gradient" style={{ fontSize: '14px', height: '44px' }}>
              {s.closingCta}
            </a>
          </div>
        </section>
      </main>

      {/* Section 10: Footer */}
      <footer style={{ background: '#F4F6F8', borderTop: '1px solid #E2E4E7', padding: '40px 0 20px' }}>
        <div className="container-main">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '30px',
              marginBottom: '30px',
            }}
          >
            <div>
              <h4
                style={{
                  fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  color: '#2E2E2F',
                  marginBottom: '12px',
                }}
              >
                Product
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><a href="/templates" style={{ color: '#636972', fontSize: '13px' }}>Templates</a></li>
                <li><a href="/pricing" style={{ color: '#636972', fontSize: '13px' }}>Pricing</a></li>
                <li><a href="/blog" style={{ color: '#636972', fontSize: '13px' }}>Blog</a></li>
              </ul>
            </div>
            <div>
              <h4
                style={{
                  fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  color: '#2E2E2F',
                  marginBottom: '12px',
                }}
              >
                Company
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><a href="/about" style={{ color: '#636972', fontSize: '13px' }}>About</a></li>
                <li><a href="/support" style={{ color: '#636972', fontSize: '13px' }}>Support</a></li>
              </ul>
            </div>
            <div>
              <h4
                style={{
                  fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  color: '#2E2E2F',
                  marginBottom: '12px',
                }}
              >
                Legal
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><a href="/terms" style={{ color: '#636972', fontSize: '13px' }}>Terms</a></li>
                <li><a href="/privacy" style={{ color: '#636972', fontSize: '13px' }}>Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4
                style={{
                  fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  color: '#2E2E2F',
                  marginBottom: '12px',
                }}
              >
                Build
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><a href="/s/ai_site_builder" style={{ color: '#636972', fontSize: '13px' }}>AI Site Builder</a></li>
                <li><a href="/generators" style={{ color: '#636972', fontSize: '13px' }}>Generators</a></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #E2E4E7', paddingTop: '16px', textAlign: 'center' }}>
            <p style={{ color: '#636972', fontSize: '13px' }}>{s.footerCopyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
