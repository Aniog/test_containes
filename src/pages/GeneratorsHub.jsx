import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  strings,
  categories,
  featuredGenerators,
  allGenerators,
  faqItems,
} from '../data/generatorsData.js';

const s = strings.en;
const AI_BUILDER_URL = '/s/ai_site_builder';
const COLLAPSE_THRESHOLD = 6;

// ── SVG Illustrations ──────────────────────────────────────────────────────────

function LogoSVG() {
  return (
    <svg width="140" height="32" viewBox="0 0 140 32" fill="none" aria-label="Strikingly AI" role="img">
      <rect width="28" height="28" rx="4" y="2" fill="url(#logoGrad)" />
      <path d="M8 16 L14 10 L20 16 L14 22 Z" fill="white" opacity="0.9" />
      <path d="M11 16 L14 13 L17 16 L14 19 Z" fill="white" />
      <text x="36" y="22" fontFamily="'Josefin Sans', sans-serif" fontWeight="700" fontSize="16" fill="#2E2E2F" letterSpacing="0.5">STRIKINGLY</text>
      <text x="108" y="22" fontFamily="'Josefin Sans', sans-serif" fontWeight="700" fontSize="11" fill="#8159BB" letterSpacing="0.5">AI</text>
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function HeroIllustration() {
  return (
    <svg
      width="480"
      height="360"
      viewBox="0 0 480 360"
      fill="none"
      aria-hidden="true"
      role="presentation"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      {/* Browser chrome */}
      <rect x="20" y="20" width="440" height="320" rx="12" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1.5" />
      <rect x="20" y="20" width="440" height="40" rx="12" fill="#E2E4E7" />
      <rect x="20" y="48" width="440" height="12" fill="#E2E4E7" />
      <circle cx="48" cy="40" r="6" fill="#CB0C9F" opacity="0.4" />
      <circle cx="68" cy="40" r="6" fill="#7671FF" opacity="0.4" />
      <circle cx="88" cy="40" r="6" fill="#8159BB" opacity="0.4" />
      <rect x="110" y="32" width="240" height="16" rx="8" fill="white" opacity="0.7" />
      {/* Hero section mockup */}
      <rect x="40" y="76" width="400" height="100" rx="6" fill="url(#heroGrad)" opacity="0.15" />
      <rect x="60" y="96" width="180" height="14" rx="4" fill="#8159BB" opacity="0.5" />
      <rect x="60" y="116" width="240" height="10" rx="3" fill="#4B5056" opacity="0.3" />
      <rect x="60" y="132" width="200" height="10" rx="3" fill="#4B5056" opacity="0.2" />
      <rect x="60" y="152" width="100" height="28" rx="4" fill="url(#heroGrad)" opacity="0.7" />
      <rect x="170" y="152" width="90" height="28" rx="4" fill="none" stroke="#8159BB" strokeWidth="1.5" opacity="0.6" />
      {/* Card row */}
      <rect x="40" y="196" width="118" height="80" rx="6" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="55" y="210" width="60" height="8" rx="3" fill="#8159BB" opacity="0.4" />
      <rect x="55" y="224" width="88" height="6" rx="2" fill="#636972" opacity="0.3" />
      <rect x="55" y="236" width="70" height="6" rx="2" fill="#636972" opacity="0.2" />
      <rect x="55" y="252" width="50" height="14" rx="3" fill="url(#heroGrad)" opacity="0.5" />

      <rect x="171" y="196" width="118" height="80" rx="6" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="186" y="210" width="60" height="8" rx="3" fill="#7671FF" opacity="0.4" />
      <rect x="186" y="224" width="88" height="6" rx="2" fill="#636972" opacity="0.3" />
      <rect x="186" y="236" width="70" height="6" rx="2" fill="#636972" opacity="0.2" />
      <rect x="186" y="252" width="50" height="14" rx="3" fill="url(#heroGrad)" opacity="0.5" />

      <rect x="302" y="196" width="118" height="80" rx="6" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="317" y="210" width="60" height="8" rx="3" fill="#CB0C9F" opacity="0.4" />
      <rect x="317" y="224" width="88" height="6" rx="2" fill="#636972" opacity="0.3" />
      <rect x="317" y="236" width="70" height="6" rx="2" fill="#636972" opacity="0.2" />
      <rect x="317" y="252" width="50" height="14" rx="3" fill="url(#heroGrad)" opacity="0.5" />

      {/* Bottom bar */}
      <rect x="40" y="296" width="400" height="24" rx="4" fill="#E2E4E7" opacity="0.5" />
      <rect x="55" y="302" width="120" height="12" rx="3" fill="#C6C9CD" opacity="0.6" />

      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="480" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7671FF" />
          <stop offset="1" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CategoryIllustration({ categoryId }) {
  const configs = {
    websites: { color: '#7671FF', path: 'M8 4h16v14H8zM10 6h12v2H10zM10 10h12v2H10zM10 14h8v2H10z' },
    'landing-pages': { color: '#CB0C9F', path: 'M12 3l8 5v10H4V8l8-5zm0 3L6 10v6h12v-6l-6-4z' },
    portfolios: { color: '#8159BB', path: 'M3 5h18v14H3zM5 7v10h14V7H5zm2 2h4v4H7zm6 0h4v2h-4zm0 3h4v2h-4z' },
    blogs: { color: '#7671FF', path: 'M4 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4zm0 4h12v2H4z' },
    stores: { color: '#CB0C9F', path: 'M6 2l-2 6h16l-2-6H6zm-2 7v11h16V9H4zm6 2h4v4h-4z' },
    'link-in-bio': { color: '#8159BB', path: 'M12 2a10 10 0 100 20A10 10 0 0012 2zm0 2a8 8 0 110 16A8 8 0 0112 4zm-1 4v8l6-4-6-4z' },
  };
  const cfg = configs[categoryId] || configs.websites;
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation">
      <path d={cfg.path} fill={cfg.color} opacity="0.85" />
    </svg>
  );
}

function SubsectionThumb({ categoryId }) {
  const colors = {
    websites: '#7671FF',
    'landing-pages': '#CB0C9F',
    portfolios: '#8159BB',
    blogs: '#7671FF',
    stores: '#CB0C9F',
    'link-in-bio': '#8159BB',
  };
  const color = colors[categoryId] || '#8159BB';
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" role="presentation">
      <rect width="32" height="32" rx="6" fill={color} opacity="0.12" />
      <rect x="6" y="8" width="20" height="3" rx="1.5" fill={color} opacity="0.7" />
      <rect x="6" y="14" width="14" height="2" rx="1" fill={color} opacity="0.5" />
      <rect x="6" y="19" width="18" height="2" rx="1" fill={color} opacity="0.4" />
      <rect x="6" y="24" width="10" height="2" rx="1" fill={color} opacity="0.3" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation">
      <path d="M9 18l6-6-6-6" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation">
      <circle cx="11" cy="11" r="7" stroke="#636972" strokeWidth="2" />
      <path d="M16.5 16.5L21 21" stroke="#636972" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function NumberCircle({ n }) {
  return (
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #7671FF, #CB0C9F)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <span style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20 }}>{n}</span>
    </div>
  );
}

function WhyIcon({ type }) {
  const icons = {
    lightning: (
      <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" fill="#8159BB" opacity="0.85" />
    ),
    mobile: (
      <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm5 17a1 1 0 100-2 1 1 0 000 2z" fill="#8159BB" opacity="0.85" />
    ),
    free: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#8159BB" opacity="0.85" />
    ),
  };
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="presentation">
      {icons[type]}
    </svg>
  );
}

// ── Section 0: Top Bar ─────────────────────────────────────────────────────────
function TopBar() {
  return (
    <header
      style={{
        background: '#ffffff',
        borderBottom: '1px solid #E2E4E7',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 60 }}>
        <a href="/" aria-label="Strikingly home">
          <LogoSVG />
        </a>
      </div>
    </header>
  );
}

// ── Section 1: Breadcrumb ──────────────────────────────────────────────────────
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" style={{ background: '#ffffff', borderBottom: '1px solid #E2E4E7' }}>
      <div className="container" style={{ paddingTop: 10, paddingBottom: 10 }}>
        <ol
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          <li>
            <a
              href="/"
              style={{
                color: '#636972',
                fontSize: 13,
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#8159BB')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#636972')}
            >
              {s.breadcrumbHome}
            </a>
          </li>
          <li aria-hidden="true" style={{ color: '#8159BB', fontSize: 13, userSelect: 'none' }}>›</li>
          <li>
            <span
              aria-current="page"
              style={{ color: '#4B5056', fontSize: 13, fontFamily: 'var(--font-body)', fontWeight: 600 }}
            >
              {s.breadcrumbCurrent}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

// ── Section 2: Hero ────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        background: 'radial-gradient(ellipse at 70% 50%, rgba(129,89,187,0.07) 0%, rgba(118,113,255,0.04) 50%, transparent 70%), #ffffff',
        paddingTop: 70,
        paddingBottom: 70,
      }}
    >
      <div
        className="container hero-two-col"
      >
        {/* Left column */}
        <div>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              lineHeight: 1.15,
              textTransform: 'uppercase',
              margin: '0 0 20px',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(28px, 4vw, 44px)',
                color: '#2E2E2F',
                letterSpacing: '0.02em',
              }}
            >
              {s.heroH1Line1}
            </span>
            <span
              className="ai-gradient-text"
              style={{
                display: 'block',
                fontSize: 'clamp(28px, 4vw, 44px)',
                letterSpacing: '0.02em',
              }}
            >
              {s.heroH1Line2}
            </span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              color: '#636972',
              lineHeight: 1.6,
              margin: '0 0 30px',
              maxWidth: 480,
            }}
          >
            {s.heroSub}
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href={AI_BUILDER_URL} className="btn-gradient btn-lg">
              {s.heroCta1}
            </a>
            <a href="#all-generators" className="btn-ghost btn-lg">
              {s.heroCta2}
            </a>
          </div>
        </div>
        {/* Right column */}
        <div className="hero-illustration-col" style={{ display: 'flex', justifyContent: 'center' }}>
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

// ── Section 3: Featured Generators ────────────────────────────────────────────
function FeaturedGenerators() {
  return (
    <section style={{ background: '#F4F6F8', padding: '60px 0' }}>
      <div className="container">
        <h2 className="section-heading">{s.featuredHeading}</h2>
        <p className="section-sub">{s.featuredSub}</p>
        <div className="grid-3">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="gen-card"
              aria-label={gen.name}
            >
              <div style={{ marginBottom: 10 }}>
                <span className="cat-tag">{gen.category}</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 15,
                  color: '#2E2E2F',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  marginBottom: 8,
                }}
              >
                {gen.name}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#636972', lineHeight: 1.5 }}>
                {gen.description}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 4: Browse by Category ─────────────────────────────────────────────
function BrowseByCategory() {
  return (
    <section style={{ background: '#ffffff', padding: '60px 0' }}>
      <div className="container">
        <h2 className="section-heading">{s.browseHeading}</h2>
        <p className="section-sub">{s.browseSub}</p>
        <div className="grid-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/generators#${cat.slug}`}
              className="gen-card"
              aria-label={`Browse ${cat.name}`}
              style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              <div>
                <CategoryIllustration categoryId={cat.id} />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 14,
                  color: '#2E2E2F',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {cat.name}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#636972', lineHeight: 1.5, flex: 1 }}>
                {cat.description}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <ArrowRightIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 5: All Generators ──────────────────────────────────────────────────
function GeneratorCard({ gen, categoryId }) {
  return (
    <a
      href={`/generators/${gen.slug}`}
      className="gen-card"
      aria-label={gen.name}
      style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
    >
      <div>
        <SubsectionThumb categoryId={categoryId} />
      </div>
      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 13,
          color: '#2E2E2F',
          textTransform: 'uppercase',
          letterSpacing: '0.03em',
          lineHeight: 1.3,
        }}
      >
        {gen.name}
      </div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#636972', lineHeight: 1.5 }}>
        {gen.description}
      </div>
    </a>
  );
}

function CategorySubsection({ cat, generators, searchQuery }) {
  const [expanded, setExpanded] = useState(false);
  const [collapsedHeight, setCollapsedHeight] = useState(320);
  const gridRef = useRef(null);
  const rowMeasureRef = useRef(null);

  const filtered = searchQuery
    ? generators.filter(
        (g) =>
          g.name.toLowerCase().includes(searchQuery) ||
          g.description.toLowerCase().includes(searchQuery) ||
          cat.name.toLowerCase().includes(searchQuery)
      )
    : generators;

  const hasResults = filtered.length > 0;
  const needsToggle = !searchQuery && generators.length > COLLAPSE_THRESHOLD;

  // Measure actual card height after first render to set a clean collapsed height
  useEffect(() => {
    if (!gridRef.current || !needsToggle) return;
    const cards = gridRef.current.querySelectorAll('.gen-card');
    if (cards.length < COLLAPSE_THRESHOLD) return;
    // Find the bottom of the 6th card (last card in 2nd row of 3-col grid)
    const gridTop = gridRef.current.getBoundingClientRect().top;
    const card6 = cards[COLLAPSE_THRESHOLD - 1];
    if (!card6) return;
    const card6Bottom = card6.getBoundingClientRect().bottom;
    const measured = card6Bottom - gridTop;
    if (measured > 0) setCollapsedHeight(measured + 2); // +2px buffer
  }, [needsToggle, filtered.length]);

  const expandedHeight = Math.ceil(filtered.length / 3) * 200 + 200;

  if (searchQuery && !hasResults) return null;

  return (
    <section
      id={cat.slug}
      style={{ marginBottom: 50, scrollMarginTop: 80 }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 18,
          textTransform: 'uppercase',
          color: '#4B5056',
          letterSpacing: '0.05em',
          margin: '0 0 6px',
        }}
      >
        {cat.name}
      </h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#636972', margin: '0 0 20px' }}>
        {cat.description}
      </p>

      {/* All cards always in DOM; JS collapses extras via max-height after measurement */}
      <div
        id={`cards-${cat.slug}`}
        className="cards-collapsible"
        style={{
          maxHeight: needsToggle && !expanded ? `${collapsedHeight}px` : `${expandedHeight}px`,
        }}
      >
        <div className="grid-3" ref={gridRef}>
          {filtered.map((gen) => (
            <GeneratorCard key={gen.slug} gen={gen} categoryId={cat.id} />
          ))}
        </div>
      </div>

      {needsToggle && (
        <div style={{ marginTop: 16 }}>
          <button
            type="button"
            className="btn-ghost"
            aria-expanded={expanded}
            aria-controls={`cards-${cat.slug}`}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? s.showLess : s.showAll(generators.length)}
          </button>
        </div>
      )}
    </section>
  );
}

function AllGenerators() {
  const [query, setQuery] = useState('');
  const searchQuery = query.trim().toLowerCase();

  const totalMatches = searchQuery
    ? Object.entries(allGenerators).reduce((acc, [catId, gens]) => {
        const cat = categories.find((c) => c.id === catId);
        return (
          acc +
          gens.filter(
            (g) =>
              g.name.toLowerCase().includes(searchQuery) ||
              g.description.toLowerCase().includes(searchQuery) ||
              (cat && cat.name.toLowerCase().includes(searchQuery))
          ).length
        );
      }, 0)
    : null;

  const noResults = searchQuery && totalMatches === 0;

  return (
    <section id="all-generators" style={{ background: '#F4F6F8', padding: '60px 0', scrollMarginTop: 60 }}>
      <div className="container">
        <h2 className="section-heading">{s.allHeading}</h2>
        <p className="section-sub">{s.allSub}</p>

        {/* Search */}
        <div style={{ marginBottom: 40 }}>
          <label htmlFor="gen-search" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
            {s.searchLabel}
          </label>
          <div
            style={{
              position: 'relative',
              maxWidth: 480,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                position: 'absolute',
                insetInlineStart: 14,
                display: 'flex',
                alignItems: 'center',
                pointerEvents: 'none',
              }}
            >
              <SearchIcon />
            </span>
            <input
              id="gen-search"
              type="search"
              aria-label={s.searchLabel}
              placeholder={s.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: '100%',
                paddingInlineStart: 44,
                paddingInlineEnd: 16,
                paddingTop: 10,
                paddingBottom: 10,
                fontSize: 14,
                fontFamily: 'var(--font-body)',
                color: '#2E2E2F',
                background: '#ffffff',
                border: '1px solid #C6C9CD',
                borderRadius: 4,
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#8159BB')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#C6C9CD')}
            />
          </div>
          {searchQuery && !noResults && (
            <p
              style={{
                marginTop: 8,
                fontSize: 13,
                color: '#636972',
                fontFamily: 'var(--font-body)',
              }}
              aria-live="polite"
              aria-atomic="true"
            >
              {s.searchResultCount(totalMatches)}
            </p>
          )}
        </div>

        {/* No results state */}
        {noResults && (
          <div
            style={{
              padding: '40px 20px',
              textAlign: 'center',
              background: '#ffffff',
              border: '1px solid #E2E4E7',
              borderRadius: 6,
              marginBottom: 40,
            }}
            aria-live="polite"
          >
            <p style={{ fontFamily: 'var(--font-body)', color: '#636972', marginBottom: 16 }}>
              {s.searchEmpty}
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn-ghost"
                onClick={() => setQuery('')}
              >
                {s.searchClear}
              </button>
              <a href={AI_BUILDER_URL} className="btn-gradient">
                {s.searchEmptyBuilderLink}
              </a>
            </div>
          </div>
        )}

        {/* Category subsections */}
        {categories.map((cat) => (
          <CategorySubsection
            key={cat.id}
            cat={cat}
            generators={allGenerators[cat.id] || []}
            searchQuery={searchQuery}
          />
        ))}
      </div>
    </section>
  );
}

// ── Section 6: How It Works ────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { n: 1, title: s.step1Title, body: s.step1Body },
    { n: 2, title: s.step2Title, body: s.step2Body },
    { n: 3, title: s.step3Title, body: s.step3Body },
  ];
  return (
    <section style={{ background: '#ffffff', padding: '60px 0' }}>
      <div className="container">
        <h2 className="section-heading" style={{ textAlign: 'center' }}>{s.howHeading}</h2>
        <div className="how-three-col">
          {steps.map((step) => (
            <div
              key={step.n}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 16,
              }}
            >
              <NumberCircle n={step.n} />
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#4B5056',
                }}
              >
                {step.title}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#636972', lineHeight: 1.6 }}>
                {step.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 7: Why Strikingly ──────────────────────────────────────────────────
function WhyStrikingly() {
  const items = [
    { icon: 'lightning', title: s.why1Title, body: s.why1Body },
    { icon: 'mobile', title: s.why2Title, body: s.why2Body },
    { icon: 'free', title: s.why3Title, body: s.why3Body },
  ];
  return (
    <section style={{ background: '#F4F6F8', padding: '60px 0' }}>
      <div className="container">
        <h2 className="section-heading" style={{ textAlign: 'center' }}>{s.whyHeading}</h2>
        <div className="why-three-col">
          {items.map((item) => (
            <div
              key={item.icon}
              style={{
                background: '#ffffff',
                border: '1px solid #E2E4E7',
                borderRadius: 6,
                padding: 30,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <WhyIcon type={item.icon} />
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#4B5056',
                }}
              >
                {item.title}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#636972', lineHeight: 1.6 }}>
                {item.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 8: FAQ ─────────────────────────────────────────────────────────────
function FAQItem({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const answerId = `${item.id}-answer`;

  return (
    <div
      style={{
        borderBottom: '1px solid #E2E4E7',
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={answerId}
        onClick={() => setOpen((v) => !v)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '18px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          textAlign: 'start',
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: 15,
            color: '#2E2E2F',
            lineHeight: 1.4,
          }}
        >
          {item.question}
        </span>
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: 24,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#8159BB',
            fontSize: 20,
            fontWeight: 300,
            transition: 'transform 0.2s',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>
      <div
        id={answerId}
        className="faq-answer"
        style={{
          maxHeight: open ? '600px' : '0px',
          paddingBottom: open ? 18 : 0,
        }}
      >
        {item.answer.split('\n\n').map((para, i) => (
          <p
            key={i}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              color: '#636972',
              lineHeight: 1.7,
              margin: i === 0 ? 0 : '12px 0 0',
            }}
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <section style={{ background: '#ffffff', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <h2 className="section-heading">{s.faqHeading}</h2>
        <div style={{ marginTop: 30 }}>
          {faqItems.map((item, i) => (
            <FAQItem key={item.id} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 9: Closing CTA ─────────────────────────────────────────────────────
function ClosingCTA() {
  return (
    <section
      style={{
        background: '#ffffff',
        borderTop: '1px solid #E2E4E7',
        padding: '70px 0',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(24px, 3vw, 36px)',
            textTransform: 'uppercase',
            color: '#2E2E2F',
            letterSpacing: '0.03em',
            margin: '0 0 16px',
          }}
        >
          {s.closingHeadline}
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            color: '#636972',
            margin: '0 0 30px',
          }}
        >
          {s.closingSub}
        </p>
        <a href={AI_BUILDER_URL} className="btn-gradient btn-lg">
          {s.closingCta}
        </a>
      </div>
    </section>
  );
}

// ── Section 10: Footer ─────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    {
      heading: 'Product',
      links: [
        { label: 'Templates', href: '/templates' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'AI Builder', href: AI_BUILDER_URL },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Support', href: '/support' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '/about' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Terms', href: '/terms' },
        { label: 'Privacy', href: '/privacy' },
      ],
    },
  ];

  return (
    <footer style={{ background: '#2E2E2F', color: '#C6C9CD', padding: '50px 0 30px' }}>
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <svg width="120" height="28" viewBox="0 0 140 32" fill="none" aria-label="Strikingly" role="img">
                <rect width="28" height="28" rx="4" y="2" fill="url(#footerLogoGrad)" />
                <path d="M8 16 L14 10 L20 16 L14 22 Z" fill="white" opacity="0.9" />
                <path d="M11 16 L14 13 L17 16 L14 19 Z" fill="white" />
                <text x="36" y="22" fontFamily="'Josefin Sans', sans-serif" fontWeight="700" fontSize="16" fill="#ffffff" letterSpacing="0.5">STRIKINGLY</text>
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7671FF" />
                    <stop offset="1" stopColor="#CB0C9F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#9CA3AF', lineHeight: 1.6, maxWidth: 220 }}>
              Build beautiful websites with AI. No code required.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 11,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#ffffff',
                  marginBottom: 14,
                }}
              >
                {col.heading}
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 13,
                        color: '#9CA3AF',
                        textDecoration: 'none',
                        transition: 'color 0.15s',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseOut={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #4B5056', margin: '0 0 20px' }} />
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#636972', margin: 0 }}>
          {s.footerCopyright}
        </p>
      </div>
    </footer>
  );
}

// ── Responsive overrides ───────────────────────────────────────────────────────
const responsiveStyles = `
  /* Hero two-column */
  .hero-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
  }
  @media (max-width: 700px) {
    .hero-two-col {
      grid-template-columns: 1fr !important;
    }
    .hero-illustration-col {
      display: none !important;
    }
  }

  /* How It Works 3-col */
  .how-three-col {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 40px;
  }
  @media (max-width: 640px) {
    .how-three-col {
      grid-template-columns: 1fr !important;
    }
  }

  /* Why Strikingly 3-col */
  .why-three-col {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 40px;
  }
  @media (max-width: 640px) {
    .why-three-col {
      grid-template-columns: 1fr !important;
    }
  }

  /* Footer grid */
  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    gap: 30px;
    margin-bottom: 40px;
  }
  @media (max-width: 900px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr 1fr !important;
    }
  }
  @media (max-width: 560px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr !important;
    }
  }
`;

// ── Page ───────────────────────────────────────────────────────────────────────
export default function GeneratorsHub() {
  return (
    <>
      <style>{responsiveStyles}</style>
      <TopBar />
      <Breadcrumb />
      <main>
        <HeroSection />
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
}

// Alias for Hero to avoid naming conflict with the inner component
function HeroSection() {
  return <Hero />;
}
