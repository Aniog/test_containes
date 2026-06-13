import { useState, useEffect, useRef, useCallback } from 'react';
import {
  strings,
  featuredGenerators,
  categories,
  allGeneratorsByCategory,
} from '@/data/generatorData.js';

const t = strings.en;

const INITIAL_VISIBLE = 6;

const CATEGORY_KEYS = ['websites', 'landing-pages', 'portfolios', 'blogs', 'stores', 'link-in-bio'];

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

/* ── Inline SVGs ── */

const LogoSVG = () => (
  <svg width="134" height="24" viewBox="0 0 134 24" fill="none" aria-hidden="true">
    <text x="0" y="18" fontFamily="var(--font-heading)" fontSize="18" fontWeight="700" fill="#2E2E2F" letterSpacing="1">strikingly</text>
    <text x="108" y="18" fontFamily="var(--font-heading)" fontSize="18" fontWeight="700" fill="#8159BB" letterSpacing="1">AI</text>
  </svg>
);

const HeroIllustration = () => (
  <svg width="400" height="280" viewBox="0 0 400 280" fill="none" aria-hidden="true" style={{ maxWidth: '100%', height: 'auto' }}>
    <defs>
      <linearGradient id="heroGrad" x1="0" y1="0" x2="400" y2="280" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#7671FF" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#CB0C9F" stopOpacity="0.15" />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="360" height="240" rx="8" stroke="#8159BB" strokeWidth="2" fill="url(#heroGrad)" />
    <rect x="40" y="44" width="120" height="16" rx="4" fill="#8159BB" fillOpacity="0.3" />
    <rect x="40" y="72" width="200" height="8" rx="4" fill="#8159BB" fillOpacity="0.2" />
    <rect x="40" y="88" width="160" height="8" rx="4" fill="#8159BB" fillOpacity="0.2" />
    <rect x="40" y="108" width="320" height="120" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
    <rect x="56" y="124" width="80" height="80" rx="4" fill="#8159BB" fillOpacity="0.15" />
    <rect x="152" y="124" width="80" height="8" rx="4" fill="#8159BB" fillOpacity="0.25" />
    <rect x="152" y="140" width="120" height="6" rx="3" fill="#8159BB" fillOpacity="0.15" />
    <rect x="152" y="154" width="100" height="6" rx="3" fill="#8159BB" fillOpacity="0.15" />
    <rect x="152" y="168" width="80" height="6" rx="3" fill="#8159BB" fillOpacity="0.15" />
    <circle cx="340" cy="60" r="16" stroke="#8159BB" strokeWidth="1.5" fill="none" />
    <path d="M330 60l7 7 14-14" stroke="#8159BB" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CategoryIcon = ({ type }) => {
  const icons = {
    websites: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="36" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <line x1="6" y1="16" x2="42" y2="16" stroke="#8159BB" strokeWidth="2" />
        <circle cx="12" cy="12" r="1.5" fill="#8159BB" />
        <circle cx="16" cy="12" r="1.5" fill="#8159BB" />
        <circle cx="20" cy="12" r="1.5" fill="#8159BB" />
        <rect x="10" y="22" width="12" height="14" rx="2" fill="#8159BB" fillOpacity="0.15" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="26" y="22" width="12" height="6" rx="2" fill="#8159BB" fillOpacity="0.15" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="26" y="32" width="12" height="4" rx="2" fill="#8159BB" fillOpacity="0.15" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    'landing-pages': (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="12" y="10" width="24" height="8" rx="2" fill="#8159BB" fillOpacity="0.15" />
        <rect x="12" y="22" width="24" height="4" rx="2" fill="#8159BB" fillOpacity="0.15" />
        <rect x="12" y="30" width="14" height="4" rx="2" fill="#8159BB" fillOpacity="0.15" />
        <rect x="12" y="36" width="10" height="4" rx="2" fill="#8159BB" fillOpacity="0.15" />
        <path d="M34 30l4 4 8-8" stroke="#8159BB" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    portfolios: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="8" width="32" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="12" y="12" width="12" height="14" rx="2" fill="#8159BB" fillOpacity="0.15" />
        <rect x="12" y="30" width="12" height="6" rx="2" fill="#8159BB" fillOpacity="0.15" />
        <rect x="28" y="12" width="8" height="8" rx="2" fill="#8159BB" fillOpacity="0.15" />
        <rect x="28" y="24" width="8" height="12" rx="2" fill="#8159BB" fillOpacity="0.15" />
      </svg>
    ),
    blogs: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <line x1="14" y1="14" x2="34" y2="14" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="20" x2="30" y2="20" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="26" x2="28" y2="26" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="32" x2="26" y2="32" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
        <circle cx="34" cy="32" r="4" fill="#8159BB" fillOpacity="0.2" />
      </svg>
    ),
    stores: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="6" y="16" width="36" height="26" rx="3" stroke="#8159BB" strokeWidth="2" fill="none" />
        <path d="M6 20l4-10h28l4 10" stroke="#8159BB" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="14" y="28" width="20" height="10" rx="2" fill="#8159BB" fillOpacity="0.15" />
        <path d="M20 24h8" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="14" r="8" stroke="#8159BB" strokeWidth="2" fill="none" />
        <circle cx="24" cy="14" r="3" fill="#8159BB" fillOpacity="0.3" />
        <path d="M12 38c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke="#8159BB" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="18" y="28" width="12" height="2" rx="1" fill="#8159BB" fillOpacity="0.2" />
      </svg>
    ),
  };
  return icons[type] || null;
};

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ChevronDownIcon = ({ expanded }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}>
    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StepNumber = ({ num }) => (
  <div style={{
    width: 36,
    height: 36,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #7671FF, #CB0C9F)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    fontSize: 16,
    flexShrink: 0,
  }}>
    {num}
  </div>
);

const WhyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="2" fill="none" />
    <path d="M11 16l4 4 6-8" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Component ── */

export default function GeneratorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedFaq, setExpandedFaq] = useState(0);
  const searchRef = useRef(null);
  const categoryRefs = useRef({});
  const categoryListRefs = useRef({});

  // Remove no-js class on mount
  useEffect(() => {
    document.documentElement.classList.remove('no-js');
  }, []);

  // Initialize category expanded states: first INITIAL_VISIBLE visible, rest hidden
  useEffect(() => {
    const initial = {};
    CATEGORY_KEYS.forEach((key) => {
      const total = allGeneratorsByCategory[key]?.generators.length || 0;
      initial[key] = total <= INITIAL_VISIBLE;
    });
    setExpandedCategories(initial);
  }, []);

  // Compute visible categories and matching cards
  const getFiltered = useCallback(() => {
    if (!searchQuery.trim()) {
      return { visibleKeys: CATEGORY_KEYS, matches: {} };
    }
    const q = searchQuery.toLowerCase().trim();
    const matches = {};
    const visibleKeys = [];
    CATEGORY_KEYS.forEach((key) => {
      const cat = allGeneratorsByCategory[key];
      const matching = cat.generators.filter((g) =>
        g.name.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        cat.name.toLowerCase().includes(q)
      );
      if (matching.length > 0) {
        matches[key] = matching;
        visibleKeys.push(key);
      }
    });
    return { visibleKeys, matches };
  }, [searchQuery]);

  const { visibleKeys, matches } = getFiltered();
  const totalMatches = searchQuery.trim()
    ? Object.values(matches).reduce((sum, arr) => sum + arr.length, 0)
    : CATEGORY_KEYS.reduce((sum, k) => sum + (allGeneratorsByCategory[k]?.generators.length || 0), 0);

  const toggleCategory = (key) => {
    setExpandedCategories((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleFaq = (index) => {
    setExpandedFaq((prev) => (prev === index ? -1 : index));
  };

  const faqData = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
    { q: t.faq5Q, a: t.faq5A },
    { q: t.faq6Q, a: t.faq6A },
  ];

  const footerLinks = {
    [t.footerProduct]: ['/templates', '/pricing'],
    [t.footerResources]: ['/support', '/blog'],
    [t.footerCompany]: ['/about'],
    [t.footerLegal]: ['/terms', '/privacy'],
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>

      {/* ── Section 0: Top Bar ── */}
      <header style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E4E7',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center' }}>
          <a href="/" aria-label="Strikingly AI home" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <LogoSVG />
          </a>
        </div>
      </header>

      {/* ── Section 1: Breadcrumb ── */}
      <nav aria-label="Breadcrumb" style={{ maxWidth: 1200, margin: '0 auto', padding: '12px 24px' }}>
        <ol style={{ display: 'flex', alignItems: 'center', gap: 8, listStyle: 'none', margin: 0, padding: 0, fontSize: 12, color: '#636972' }}>
          <li>
            <a href="/" style={{ color: '#636972' }}>{t.breadcrumbHome}</a>
          </li>
          <li aria-hidden="true" style={{ color: '#C6C9CD' }}>/</li>
          <li style={{ color: '#636972' }} aria-current="page">{t.breadcrumbCurrent}</li>
        </ol>
      </nav>

      <main>
        {/* ── Section 2: Hero ── */}
        <section style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '60px 24px 80px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 40,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* faint purple-to-pink wash */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 70% 50%, rgba(118,113,255,0.06) 0%, rgba(203,12,159,0.04) 50%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{ flex: '1 1 420px', position: 'relative', zIndex: 1 }}>
            <h1 style={{ marginBottom: 16 }}>
              <span style={{ display: 'block', color: '#2E2E2F', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', fontSize: 40, lineHeight: 1.2 }}>{t.heroLine1}</span>
              <span className="ai-gradient-text" style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', fontSize: 40, lineHeight: 1.2 }}>{t.heroLine2}</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.5, color: '#636972', maxWidth: 480, marginBottom: 24 }}>{t.heroSubheadline}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <a
                href="/s/ai_site_builder"
                className="ai-gradient-bg"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 44,
                  padding: '0 24px',
                  borderRadius: 4,
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                {t.ctaPrimary}
              </a>
              <a
                href="#all-generators"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 44,
                  padding: '0 20px',
                  borderRadius: 4,
                  border: '1px solid #8159BB',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  color: '#8159BB',
                  textDecoration: 'none',
                }}
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>
          <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
            <HeroIllustration />
          </div>
        </section>

        {/* ── Section 3: Featured Generators ── */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 8 }}>{t.featuredHeading}</h2>
          <p style={{ textAlign: 'center', color: '#636972', fontSize: 14, marginBottom: 32 }}>{t.featuredSubheading}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {featuredGenerators.map((gen) => (
              <a
                key={gen.slug}
                href={`/generators/${gen.slug}`}
                className="generator-card"
                style={{
                  display: 'block',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #C6C9CD',
                  borderRadius: 3,
                  padding: 20,
                  textDecoration: 'none',
                }}
              >
                <strong style={{ display: 'block', fontSize: 16, marginBottom: 6, color: '#2E2E2F', fontWeight: 700 }}>{gen.name}</strong>
                <p style={{ fontSize: 13, color: '#636972', marginBottom: 12 }}>{gen.description}</p>
                <span style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#8159BB',
                  border: '1px solid #8159BB',
                  borderRadius: 3,
                  padding: '2px 6px',
                }}>
                  {gen.category}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ── Section 4: Browse by Category ── */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 32 }}>{t.browseHeading}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={cat.slug}
                className="generator-card"
                style={{
                  display: 'block',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #C6C9CD',
                  borderRadius: 3,
                  padding: 20,
                  textDecoration: 'none',
                }}
              >
                <div style={{ marginBottom: 12 }}>
                  <CategoryIcon type={cat.id} />
                </div>
                <strong style={{ display: 'block', fontSize: 16, marginBottom: 6, color: '#2E2E2F', fontWeight: 700 }}>{cat.name}</strong>
                <p style={{ fontSize: 13, color: '#636972', marginBottom: 12 }}>{cat.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#8159BB', fontFamily: 'var(--font-heading)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase' }}>
                  <span>Explore</span>
                  <ArrowRightIcon />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Section 5: All Generators Directory ── */}
        <section id="all-generators" style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 8 }}>{t.allGeneratorsHeading}</h2>
          <p style={{ textAlign: 'center', color: '#636972', fontSize: 14, marginBottom: 24 }}>{t.allGeneratorsSubheading}</p>

          {/* Search */}
          <div style={{ maxWidth: 480, margin: '0 auto 16px', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#C6C9CD', pointerEvents: 'none' }}>
              <SearchIcon />
            </div>
            <input
              ref={searchRef}
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchLabel}
              style={{
                width: '100%',
                height: 44,
                padding: '0 16px 0 40px',
                borderRadius: 4,
                border: '1px solid #C6C9CD',
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                color: '#2E2E2F',
                backgroundColor: '#FFFFFF',
                outline: 'none',
              }}
            />
          </div>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#636972', marginBottom: 24, minHeight: 20 }}>
            {searchQuery.trim() ? t.searchResults(totalMatches) : ''}
          </p>

          {/* No results state */}
          {searchQuery.trim() && visibleKeys.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: '#4B5056', marginBottom: 8 }}>{t.noResultsTitle}</p>
              <p style={{ fontSize: 14, color: '#636972', marginBottom: 16 }}>{t.noResultsBody}</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    height: 36,
                    padding: '0 16px',
                    borderRadius: 4,
                    border: '1px solid #8159BB',
                    background: 'transparent',
                    color: '#8159BB',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 12,
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  {t.clearSearch}
                </button>
                <a
                  href="/s/ai_site_builder"
                  className="ai-gradient-bg"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    height: 36,
                    padding: '0 16px',
                    borderRadius: 4,
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: 12,
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  {t.closingCta}
                </a>
              </div>
            </div>
          )}

          {/* Category subsections */}
          {CATEGORY_KEYS.map((key) => {
            const cat = allGeneratorsByCategory[key];
            const isVisible = visibleKeys.includes(key);
            if (!isVisible) return null;

            const generators = searchQuery.trim() ? (matches[key] || []) : cat.generators;
            const isExpanded = expandedCategories[key] !== false;
            const visibleCount = isExpanded ? generators.length : Math.min(INITIAL_VISIBLE, generators.length);
            const hasMore = generators.length > INITIAL_VISIBLE;

            return (
              <div key={key} id={key} style={{ marginBottom: 40 }}>
                <h3 style={{ marginBottom: 4, color: '#4B5056' }}>{cat.name}</h3>
                <p style={{ fontSize: 13, color: '#636972', marginBottom: 16 }}>{cat.description}</p>
                <div
                  ref={(el) => { categoryListRefs.current[key] = el; }}
                  className="generator-list"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: 20,
                    maxHeight: isExpanded ? generators.length * 120 + 'px' : INITIAL_VISIBLE * 120 + 'px',
                  }}
                >
                  {generators.map((gen, idx) => (
                    <a
                      key={gen.slug}
                      href={`/generators/${gen.slug}`}
                      className="generator-card"
                      style={{
                        display: 'block',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #C6C9CD',
                        borderRadius: 3,
                        padding: 20,
                        textDecoration: 'none',
                      }}
                    >
                      <strong style={{ display: 'block', fontSize: 15, marginBottom: 6, color: '#2E2E2F', fontWeight: 700 }}>{gen.name}</strong>
                      <p style={{ fontSize: 13, color: '#636972' }}>{gen.description}</p>
                    </a>
                  ))}
                </div>
                {hasMore && (
                  <button
                    onClick={() => toggleCategory(key)}
                    aria-expanded={isExpanded}
                    aria-controls={`category-list-${key}`}
                    className="show-all-btn"
                    style={{
                      marginTop: 16,
                      height: 36,
                      padding: '0 16px',
                      borderRadius: 4,
                      border: '1px solid #8159BB',
                      background: 'transparent',
                      color: '#8159BB',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: 12,
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                    }}
                  >
                    {isExpanded ? t.showLess : t.showAll(generators.length)}
                  </button>
                )}
              </div>
            );
          })}
        </section>

        {/* ── Section 6: How It Works ── */}
        <section style={{ backgroundColor: '#F4F6F8', padding: '60px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: 40 }}>{t.howHeading}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
              {[
                { num: 1, title: t.step1Title, body: t.step1Body },
                { num: 2, title: t.step2Title, body: t.step2Body },
                { num: 3, title: t.step3Title, body: t.step3Body },
              ].map((step) => (
                <div key={step.num} style={{ flex: '1 1 280px', maxWidth: 340, display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <StepNumber num={step.num} />
                  <div>
                    <strong style={{ display: 'block', fontSize: 16, marginBottom: 6, color: '#4B5056', fontWeight: 700 }}>{step.title}</strong>
                    <p style={{ fontSize: 14, color: '#636972', lineHeight: 1.5 }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 7: Why Strikingly ── */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 40 }}>{t.whyHeading}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
            {[
              { title: t.why1Title, body: t.why1Body },
              { title: t.why2Title, body: t.why2Body },
              { title: t.why3Title, body: t.why3Body },
            ].map((item, idx) => (
              <div key={idx} style={{ flex: '1 1 280px', maxWidth: 340, textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                  <WhyIcon />
                </div>
                <strong style={{ display: 'block', fontSize: 16, marginBottom: 8, color: '#4B5056', fontWeight: 700 }}>{item.title}</strong>
                <p style={{ fontSize: 14, color: '#636972', lineHeight: 1.5 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 8: FAQ ── */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px 60px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 32 }}>{t.faqHeading}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {faqData.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div key={idx} style={{ border: '1px solid #E2E4E7', borderRadius: 3, overflow: 'hidden' }}>
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 20px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#2E2E2F',
                    }}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon" style={{ flexShrink: 0, color: '#8159BB' }}>
                      <ChevronDownIcon expanded={isOpen} />
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${idx}`}
                    className="faq-answer"
                    style={{
                      maxHeight: isOpen ? 500 : 0,
                      opacity: isOpen ? 1 : 0,
                      padding: isOpen ? '0 20px 16px' : '0 20px',
                    }}
                  >
                    <p style={{ fontSize: 14, color: '#636972', lineHeight: 1.6 }}>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Section 9: Closing CTA ── */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: 8 }}>{t.closingHeading}</h2>
          <p style={{ fontSize: 14, color: '#636972', marginBottom: 24 }}>{t.closingSub}</p>
          <a
            href="/s/ai_site_builder"
            className="ai-gradient-bg"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 44,
              padding: '0 28px',
              borderRadius: 4,
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 14,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textDecoration: 'none',
            }}
          >
            {t.closingCta}
          </a>
        </section>
      </main>

      {/* ── Section 10: Footer ── */}
      <footer style={{ backgroundColor: '#F4F6F8', borderTop: '1px solid #E2E4E7', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginBottom: 32 }}>
            <div style={{ flex: '1 1 200px' }}>
              <LogoSVG />
            </div>
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} style={{ flex: '1 1 140px' }}>
                <h4 style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: '#4B5056', marginBottom: 12 }}>{title}</h4>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {links.map((link) => (
                    <li key={link}>
                      <a href={link} style={{ fontSize: 13, color: '#636972' }}>{link.replace('/', '').charAt(0).toUpperCase() + link.slice(2)}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid #E2E4E7', paddingTop: 20, textAlign: 'center' }}>
            <p style={{ fontSize: 12, color: '#636972' }}>&copy; {new Date().getFullYear()} {t.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
