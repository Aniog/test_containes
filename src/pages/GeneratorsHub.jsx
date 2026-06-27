import { useState, useRef, useEffect, useCallback } from 'react';
import {
  strings,
  featuredGenerators,
  categories,
  allGenerators,
  howItWorksSteps,
  whyItems,
  faqItems,
} from '../data/generators.js';

const s = strings.en;

// ─── SVG Illustrations ────────────────────────────────────────────────────────

function HeroIllustration() {
  return (
    <svg
      width="480"
      height="360"
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      {/* Browser chrome */}
      <rect x="40" y="40" width="400" height="280" rx="10" fill="#F4F6F8" stroke="#C6C9CD" strokeWidth="1.5" />
      <rect x="40" y="40" width="400" height="36" rx="10" fill="#E2E4E7" />
      <rect x="40" y="64" width="400" height="12" fill="#E2E4E7" />
      <circle cx="64" cy="58" r="5" fill="#CB0C9F" opacity="0.5" />
      <circle cx="80" cy="58" r="5" fill="#7671FF" opacity="0.5" />
      <circle cx="96" cy="58" r="5" fill="#8159BB" opacity="0.5" />
      {/* URL bar */}
      <rect x="120" y="50" width="240" height="16" rx="3" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1" />
      {/* Hero block */}
      <rect x="60" y="96" width="360" height="60" rx="4" fill="url(#heroGrad)" opacity="0.15" />
      <rect x="100" y="108" width="200" height="10" rx="2" fill="#8159BB" opacity="0.4" />
      <rect x="120" y="124" width="160" height="8" rx="2" fill="#636972" opacity="0.3" />
      {/* Cards row */}
      <rect x="60" y="172" width="108" height="80" rx="4" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="72" y="184" width="60" height="6" rx="2" fill="#4B5056" opacity="0.5" />
      <rect x="72" y="196" width="84" height="4" rx="2" fill="#636972" opacity="0.3" />
      <rect x="72" y="206" width="70" height="4" rx="2" fill="#636972" opacity="0.3" />
      <rect x="72" y="232" width="40" height="12" rx="2" fill="url(#heroGrad)" opacity="0.7" />

      <rect x="186" y="172" width="108" height="80" rx="4" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="198" y="184" width="60" height="6" rx="2" fill="#4B5056" opacity="0.5" />
      <rect x="198" y="196" width="84" height="4" rx="2" fill="#636972" opacity="0.3" />
      <rect x="198" y="206" width="70" height="4" rx="2" fill="#636972" opacity="0.3" />
      <rect x="198" y="232" width="40" height="12" rx="2" fill="url(#heroGrad)" opacity="0.7" />

      <rect x="312" y="172" width="108" height="80" rx="4" fill="#FFFFFF" stroke="#C6C9CD" strokeWidth="1" />
      <rect x="324" y="184" width="60" height="6" rx="2" fill="#4B5056" opacity="0.5" />
      <rect x="324" y="196" width="84" height="4" rx="2" fill="#636972" opacity="0.3" />
      <rect x="324" y="206" width="70" height="4" rx="2" fill="#636972" opacity="0.3" />
      <rect x="324" y="232" width="40" height="12" rx="2" fill="url(#heroGrad)" opacity="0.7" />

      {/* Bottom bar */}
      <rect x="60" y="268" width="360" height="32" rx="4" fill="#F4F6F8" />
      <rect x="72" y="278" width="80" height="6" rx="2" fill="#636972" opacity="0.3" />
      <rect x="340" y="276" width="68" height="10" rx="2" fill="url(#heroGrad)" opacity="0.6" />

      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CategoryIcon({ categoryId }) {
  const icons = {
    websites: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="4" y="8" width="32" height="8" rx="3" fill="#8159BB" opacity="0.15" />
        <circle cx="10" cy="12" r="2" fill="#8159BB" opacity="0.5" />
        <circle cx="16" cy="12" r="2" fill="#7671FF" opacity="0.5" />
        <rect x="10" y="22" width="20" height="2" rx="1" fill="#C6C9CD" />
        <rect x="10" y="27" width="14" height="2" rx="1" fill="#C6C9CD" />
      </svg>
    ),
    'landing-pages': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="8" y="4" width="24" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="8" y="4" width="24" height="10" rx="3" fill="#8159BB" opacity="0.15" />
        <rect x="12" y="20" width="16" height="2" rx="1" fill="#C6C9CD" />
        <rect x="12" y="25" width="12" height="2" rx="1" fill="#C6C9CD" />
        <rect x="13" y="30" width="14" height="5" rx="2" fill="url(#catGrad)" opacity="0.7" />
        <defs>
          <linearGradient id="catGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7671FF" />
            <stop offset="100%" stopColor="#CB0C9F" />
          </linearGradient>
        </defs>
      </svg>
    ),
    portfolios: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="10" width="32" height="22" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="8" y="14" width="10" height="10" rx="2" fill="#8159BB" opacity="0.2" />
        <rect x="22" y="14" width="10" height="4" rx="1" fill="#C6C9CD" />
        <rect x="22" y="21" width="7" height="3" rx="1" fill="#C6C9CD" />
        <rect x="15" y="8" width="10" height="4" rx="2" fill="#8159BB" opacity="0.3" />
      </svg>
    ),
    blogs: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="10" y="12" width="20" height="2" rx="1" fill="#8159BB" opacity="0.5" />
        <rect x="10" y="17" width="20" height="2" rx="1" fill="#C6C9CD" />
        <rect x="10" y="22" width="16" height="2" rx="1" fill="#C6C9CD" />
        <rect x="10" y="27" width="12" height="2" rx="1" fill="#C6C9CD" />
      </svg>
    ),
    stores: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M8 14h24l-2 14H10L8 14z" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <path d="M14 14V10a6 6 0 0112 0v4" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="16" cy="30" r="2" fill="#8159BB" opacity="0.4" />
        <circle cx="24" cy="30" r="2" fill="#8159BB" opacity="0.4" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="12" y="4" width="16" height="28" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="15" y="10" width="10" height="3" rx="1.5" fill="#8159BB" opacity="0.4" />
        <rect x="15" y="16" width="10" height="3" rx="1.5" fill="#7671FF" opacity="0.4" />
        <rect x="15" y="22" width="10" height="3" rx="1.5" fill="#CB0C9F" opacity="0.3" />
        <circle cx="20" cy="36" r="2" fill="#8159BB" opacity="0.4" />
      </svg>
    ),
  };
  return icons[categoryId] || icons.websites;
}

function WhyIcon({ index }) {
  const icons = [
    // Lightning bolt
    <svg key="0" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M18 4L8 18h8l-2 10 14-16h-8l2-8z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </svg>,
    // Mobile
    <svg key="1" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="9" y="3" width="14" height="26" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="25" r="1.5" fill="#8159BB" opacity="0.5" />
      <rect x="12" y="7" width="8" height="1.5" rx="0.75" fill="#8159BB" opacity="0.4" />
    </svg>,
    // Tag / free
    <svg key="2" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M4 4h10l14 14-10 10L4 14V4z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <circle cx="10" cy="10" r="2" fill="#8159BB" opacity="0.5" />
    </svg>,
  ];
  return icons[index] || icons[0];
}

// ─── Slug helper ──────────────────────────────────────────────────────────────
function toSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// ─── Top Bar ──────────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <header
      style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E4E7',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        className="strk-container"
        style={{ display: 'flex', alignItems: 'center', height: 56 }}
      >
        <a
          href="/"
          aria-label="Strikingly home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            textDecoration: 'none',
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="url(#logoGrad)" />
            <path d="M8 20l6-12 6 12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28">
                <stop offset="0%" stopColor="#7671FF" />
                <stop offset="100%" stopColor="#CB0C9F" />
              </linearGradient>
            </defs>
          </svg>
          <span
            className="strk-heading-font"
            style={{ fontSize: 16, color: '#2E2E2F', letterSpacing: '0.02em' }}
          >
            strikingly <span className="strk-gradient-text">AI</span>
          </span>
        </a>
      </div>
    </header>
  );
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{ borderBottom: '1px solid #E2E4E7', background: '#FFFFFF' }}
    >
      <div className="strk-container" style={{ paddingBlock: 10 }}>
        <ol
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 13,
            color: '#636972',
          }}
        >
          <li>
            <a
              href="/"
              style={{ color: '#636972', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#8159BB')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#636972')}
            >
              {s.breadcrumbHome}
            </a>
          </li>
          <li aria-hidden="true" style={{ color: '#8159BB', fontWeight: 700 }}>›</li>
          <li aria-current="page" style={{ color: '#4B5056', fontWeight: 500 }}>
            {s.breadcrumbCurrent}
          </li>
        </ol>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        background: 'radial-gradient(ellipse at 70% 50%, rgba(118,113,255,0.07) 0%, rgba(203,12,159,0.04) 60%, transparent 100%), #FFFFFF',
        paddingBlock: '70px 60px',
      }}
    >
      <div
        className="strk-container hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          alignItems: 'center',
        }}
      >
        {/* Left column */}
        <div>
          <h1
            className="strk-heading-font"
            style={{ margin: '0 0 16px', fontSize: 'clamp(28px, 4vw, 46px)', color: '#2E2E2F' }}
          >
            <span style={{ display: 'block' }}>{s.heroH1Line1}</span>
            <span className="strk-gradient-text" style={{ display: 'block' }}>{s.heroH1Line2}</span>
          </h1>
          <p
            style={{
              margin: '0 0 30px',
              fontSize: 16,
              lineHeight: 1.6,
              color: '#636972',
              maxWidth: 460,
            }}
          >
            {s.heroSubheadline}
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a
              href="/s/ai_site_builder"
              className="strk-btn strk-btn-primary strk-btn-lg"
            >
              {s.heroCTAPrimary}
            </a>
            <a
              href="#all-generators"
              className="strk-btn strk-btn-ghost strk-btn-lg"
            >
              {s.heroCTASecondary}
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="hero-illustration" style={{ display: 'flex', justifyContent: 'center' }}>
          <HeroIllustration />
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-illustration { display: none !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({ heading, subheading, centered = false }) {
  return (
    <div style={{ marginBottom: 30, textAlign: centered ? 'center' : 'start' }}>
      <h2
        className="strk-heading-font"
        style={{ margin: '0 0 8px', fontSize: 'clamp(22px, 2.5vw, 30px)', color: '#4B5056' }}
      >
        {heading}
      </h2>
      {subheading && (
        <p style={{ margin: 0, fontSize: 15, color: '#636972' }}>{subheading}</p>
      )}
    </div>
  );
}

// ─── Featured Generators ──────────────────────────────────────────────────────
function FeaturedGenerators() {
  return (
    <section
      aria-labelledby="featured-heading"
      style={{ background: '#F4F6F8', paddingBlock: 'var(--space-section)' }}
    >
      <div className="strk-container">
        <SectionHeader
          heading={s.featuredHeading}
          subheading={s.featuredSubheading}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
          className="featured-grid"
        >
          {featuredGenerators.map((gen) => (
            <article key={gen.slug}>
              <a
                href={`/generators/${gen.slug}`}
                className="strk-card"
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  height: '100%',
                }}
                aria-label={gen.name}
              >
                <div style={{ marginBottom: 8 }}>
                  <span className="strk-tag">{gen.category}</span>
                </div>
                <p
                  className="strk-heading-font"
                  style={{ margin: '0 0 6px', fontSize: 14, color: '#2E2E2F' }}
                >
                  {gen.name}
                </p>
                <p style={{ margin: 0, fontSize: 13, color: '#636972', lineHeight: 1.5 }}>
                  {gen.description}
                </p>
              </a>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .featured-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .featured-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ─── Browse by Category ───────────────────────────────────────────────────────
function BrowseByCategory() {
  return (
    <section
      aria-labelledby="browse-heading"
      style={{ background: '#FFFFFF', paddingBlock: 'var(--space-section)' }}
    >
      <div className="strk-container">
        <SectionHeader heading={s.browseCategoryHeading} />
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
          className="category-grid"
        >
          {categories.map((cat) => (
            <article key={cat.id}>
              <a
                href={`/generators${cat.anchor}`}
                className="strk-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  textDecoration: 'none',
                }}
                aria-label={`Browse ${cat.name} generators`}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <CategoryIcon categoryId={cat.id} />
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M7 10h6M10 7l3 3-3 3" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p
                    className="strk-heading-font"
                    style={{ margin: '0 0 4px', fontSize: 14, color: '#2E2E2F' }}
                  >
                    {cat.name}
                  </p>
                  <p style={{ margin: 0, fontSize: 13, color: '#636972', lineHeight: 1.5 }}>
                    {cat.description}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .category-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .category-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ─── Generator Card (directory) ───────────────────────────────────────────────
function GeneratorCard({ gen }) {
  return (
    <article>
      <a
        href={`/generators/${gen.slug}`}
        className="strk-card"
        style={{ display: 'block', textDecoration: 'none' }}
        aria-label={gen.name}
      >
        <p
          className="strk-heading-font"
          style={{ margin: '0 0 6px', fontSize: 13, color: '#2E2E2F' }}
        >
          {gen.name}
        </p>
        <p style={{ margin: 0, fontSize: 13, color: '#636972', lineHeight: 1.5 }}>
          {gen.description}
        </p>
      </a>
    </article>
  );
}

// ─── Category Subsection with Show-all toggle ─────────────────────────────────
const INITIAL_VISIBLE = 6;

function CategorySubsection({ section, searchQuery }) {
  const [expanded, setExpanded] = useState(false);
  const overflowRef = useRef(null);
  const [overflowHeight, setOverflowHeight] = useState(0);

  const query = searchQuery.trim().toLowerCase();
  const filtered = query
    ? section.generators.filter(
        (g) =>
          g.name.toLowerCase().includes(query) ||
          g.description.toLowerCase().includes(query) ||
          section.categoryLabel.toLowerCase().includes(query)
      )
    : section.generators;

  const visible = filtered.slice(0, INITIAL_VISIBLE);
  const overflow = filtered.slice(INITIAL_VISIBLE);
  const hasOverflow = overflow.length > 0 && !query;

  // Measure overflow height for smooth animation
  useEffect(() => {
    if (overflowRef.current) {
      setOverflowHeight(overflowRef.current.scrollHeight);
    }
  }, [expanded, filtered.length]);

  if (filtered.length === 0) return null;

  const toggleId = `toggle-${section.categoryId}`;
  const overflowId = `overflow-${section.categoryId}`;

  return (
    <section
      id={section.categoryId}
      aria-labelledby={`cat-heading-${section.categoryId}`}
      style={{ scrollMarginTop: 80 }}
    >
      <div style={{ marginBottom: 16 }}>
        <h3
          id={`cat-heading-${section.categoryId}`}
          className="strk-heading-font"
          style={{ margin: '0 0 4px', fontSize: 18, color: '#4B5056' }}
        >
          {section.categoryLabel}
        </h3>
        <p style={{ margin: 0, fontSize: 13, color: '#636972' }}>{section.description}</p>
      </div>

      {/* Always-visible cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}
        className="dir-grid"
      >
        {visible.map((gen) => (
          <GeneratorCard key={gen.slug} gen={gen} />
        ))}
      </div>

      {/* Overflow cards (collapsed by default with JS, always visible without JS) */}
      {hasOverflow && (
        <>
          <div
            id={overflowId}
            ref={overflowRef}
            className="strk-cards-overflow"
            style={{
              height: expanded ? overflowHeight : 0,
              marginTop: expanded ? 16 : 0,
            }}
            aria-hidden={!expanded}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 16,
              }}
              className="dir-grid"
            >
              {overflow.map((gen) => (
                <GeneratorCard key={gen.slug} gen={gen} />
              ))}
            </div>
          </div>
          <div style={{ marginTop: 16 }}>
            <button
              id={toggleId}
              aria-expanded={expanded}
              aria-controls={overflowId}
              onClick={() => setExpanded((v) => !v)}
              className="strk-btn strk-btn-ghost"
              style={{ fontSize: 12 }}
            >
              {expanded ? s.showLessBtn : s.showAllBtn(section.generators.length)}
            </button>
          </div>
        </>
      )}
    </section>
  );
}

// ─── All Generators Directory ─────────────────────────────────────────────────
function AllGenerators() {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const trimmed = query.trim().toLowerCase();

  const totalMatches = trimmed
    ? allGenerators.reduce((acc, section) => {
        return (
          acc +
          section.generators.filter(
            (g) =>
              g.name.toLowerCase().includes(trimmed) ||
              g.description.toLowerCase().includes(trimmed) ||
              section.categoryLabel.toLowerCase().includes(trimmed)
          ).length
        );
      }, 0)
    : null;

  const handleClear = useCallback(() => {
    setQuery('');
    inputRef.current?.focus();
  }, []);

  return (
    <section
      id="all-generators"
      aria-labelledby="all-gen-heading"
      style={{
        background: '#F4F6F8',
        paddingBlock: 'var(--space-section)',
        scrollMarginTop: 56,
      }}
    >
      <div className="strk-container">
        <SectionHeader
          heading={s.allGeneratorsHeading}
          subheading={s.allGeneratorsSubheading}
        />

        {/* Search */}
        <div style={{ marginBottom: 30 }}>
          <label htmlFor="gen-search" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
            Search generators
          </label>
          <div className="strk-search-wrap">
            <span className="strk-search-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="7.5" cy="7.5" r="5.5" stroke="#636972" strokeWidth="1.5" />
                <path d="M12 12l3.5 3.5" stroke="#636972" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <input
              ref={inputRef}
              id="gen-search"
              type="search"
              className="strk-search-input"
              placeholder={s.searchPlaceholder}
              aria-label="Search generators"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
          {trimmed && (
            <p style={{ marginTop: 8, fontSize: 13, color: '#636972' }}>
              {s.searchResultCount(totalMatches)}
            </p>
          )}
        </div>

        {/* No results */}
        {trimmed && totalMatches === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '40px 20px',
              background: '#FFFFFF',
              borderRadius: 4,
              border: '1px solid #E2E4E7',
            }}
          >
            <p style={{ margin: '0 0 12px', color: '#4B5056', fontWeight: 600 }}>
              {s.searchNoResults}
            </p>
            <button
              onClick={handleClear}
              className="strk-btn strk-btn-ghost"
              style={{ marginBottom: 12 }}
            >
              {s.searchClearBtn}
            </button>
            <p style={{ margin: 0, fontSize: 13, color: '#636972' }}>
              <a href="/s/ai_site_builder" style={{ color: '#8159BB', textDecoration: 'underline' }}>
                {s.searchNoResultsCTA}
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
          {allGenerators.map((section) => (
            <CategorySubsection
              key={section.categoryId}
              section={section}
              searchQuery={query}
            />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .dir-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .dir-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  return (
    <section
      aria-labelledby="how-heading"
      style={{ background: '#FFFFFF', paddingBlock: 'var(--space-section)' }}
    >
      <div className="strk-container">
        <SectionHeader heading={s.howItWorksHeading} centered />
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}
          className="how-grid"
        >
          {howItWorksSteps.map((step, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <span
                  className="strk-heading-font"
                  style={{ color: '#FFFFFF', fontSize: 16 }}
                >
                  {step.number}
                </span>
              </div>
              <p
                className="strk-heading-font"
                style={{ margin: '0 0 8px', fontSize: 14, color: '#4B5056' }}
              >
                {step.title}
              </p>
              <p style={{ margin: 0, fontSize: 14, color: '#636972', lineHeight: 1.6 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) { .how-grid { grid-template-columns: 1fr !important; gap: 30px !important; } }
      `}</style>
    </section>
  );
}

// ─── Why Strikingly ───────────────────────────────────────────────────────────
function WhyStrikingly() {
  return (
    <section
      aria-labelledby="why-heading"
      style={{ background: '#F4F6F8', paddingBlock: 'var(--space-section)' }}
    >
      <div className="strk-container">
        <SectionHeader heading={s.whyHeading} centered />
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
          className="why-grid"
        >
          {whyItems.map((item, i) => (
            <div
              key={i}
              className="strk-card"
              style={{ textAlign: 'center' }}
            >
              <div style={{ marginBottom: 14, display: 'flex', justifyContent: 'center' }}>
                <WhyIcon index={i} />
              </div>
              <p
                className="strk-heading-font"
                style={{ margin: '0 0 8px', fontSize: 14, color: '#4B5056' }}
              >
                {item.title}
              </p>
              <p style={{ margin: 0, fontSize: 14, color: '#636972', lineHeight: 1.6 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) { .why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
function FAQItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(isOpen ? 'auto' : 0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const paragraphs = item.answer.split('\n\n');

  return (
    <div style={{ borderBottom: '1px solid #E2E4E7' }}>
      <button
        aria-expanded={isOpen}
        aria-controls={`faq-content-${item.id}`}
        id={`faq-btn-${item.id}`}
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '18px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'start',
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            fontWeight: 600,
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
            borderRadius: '50%',
            border: '1px solid #C6C9CD',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.25s ease, border-color 0.2s',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            borderColor: isOpen ? '#8159BB' : '#C6C9CD',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2 6h8" stroke={isOpen ? '#8159BB' : '#636972'} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        id={`faq-content-${item.id}`}
        role="region"
        aria-labelledby={`faq-btn-${item.id}`}
        className="strk-accordion-content"
        style={{ height: typeof height === 'number' ? `${height}px` : height }}
      >
        <div ref={contentRef} style={{ paddingBottom: 18 }}>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                margin: i === 0 ? '0 0 10px' : '10px 0 0',
                fontSize: 14,
                color: '#636972',
                lineHeight: 1.7,
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const [openId, setOpenId] = useState(faqItems[0].id);

  return (
    <section
      aria-labelledby="faq-heading"
      style={{ background: '#FFFFFF', paddingBlock: 'var(--space-section)' }}
    >
      <div className="strk-container" style={{ maxWidth: 760 }}>
        <SectionHeader heading={s.faqHeading} />
        <div>
          {faqItems.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Closing CTA ──────────────────────────────────────────────────────────────
function ClosingCTA() {
  return (
    <section
      aria-label="Call to action"
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid #E2E4E7',
        paddingBlock: 'var(--space-section)',
        textAlign: 'center',
      }}
    >
      <div className="strk-container">
        <h2
          className="strk-heading-font"
          style={{ margin: '0 0 12px', fontSize: 'clamp(24px, 3vw, 36px)', color: '#2E2E2F' }}
        >
          {s.closingHeadline}
        </h2>
        <p style={{ margin: '0 0 28px', fontSize: 16, color: '#636972' }}>
          {s.closingSub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="strk-btn strk-btn-primary strk-btn-lg"
        >
          {s.closingCTA}
        </a>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const columns = [
    {
      heading: 'Product',
      links: [
        { label: 'Templates', href: '/templates' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'AI Site Builder', href: '/s/ai_site_builder' },
        { label: 'Generators', href: '/generators' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      heading: 'Support',
      links: [
        { label: 'Help Center', href: '/support' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ];

  return (
    <footer
      style={{
        background: '#2E2E2F',
        color: '#C6C9CD',
        paddingBlock: 50,
      }}
    >
      <div className="strk-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr repeat(3, 1fr)',
            gap: 30,
            marginBottom: 40,
          }}
          className="footer-grid"
        >
          {/* Logo column */}
          <div>
            <a
              href="/"
              aria-label="Strikingly home"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 12 }}
            >
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="6" fill="url(#footerLogoGrad)" />
                <path d="M8 20l6-12 6 12" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="28" y2="28">
                    <stop offset="0%" stopColor="#7671FF" />
                    <stop offset="100%" stopColor="#CB0C9F" />
                  </linearGradient>
                </defs>
              </svg>
              <span
                className="strk-heading-font"
                style={{ fontSize: 14, color: '#FFFFFF', letterSpacing: '0.02em' }}
              >
                strikingly AI
              </span>
            </a>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: '#9CA3AF', maxWidth: 220 }}>
              Build any kind of website with AI, in seconds.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <p
                className="strk-heading-font"
                style={{ margin: '0 0 14px', fontSize: 12, color: '#FFFFFF', letterSpacing: '0.06em' }}
              >
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: 13,
                        color: '#9CA3AF',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #3D3D3E', margin: '0 0 20px' }} />
        <p style={{ margin: 0, fontSize: 12, color: '#636972', textAlign: 'center' }}>
          {s.footerCopyright}
        </p>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 400px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function GeneratorsHub() {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main id="main-content">
        <Hero />
        <hr className="strk-divider" />
        <FeaturedGenerators />
        <hr className="strk-divider" />
        <BrowseByCategory />
        <hr className="strk-divider" />
        <AllGenerators />
        <hr className="strk-divider" />
        <HowItWorks />
        <hr className="strk-divider" />
        <WhyStrikingly />
        <hr className="strk-divider" />
        <FAQ />
        <hr className="strk-divider" />
        <ClosingCTA />
      </main>
      <Footer />

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 767px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-illustration { display: none !important; }
        }
      `}</style>
    </>
  );
}
