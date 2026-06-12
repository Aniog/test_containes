import { useState, useRef, useEffect, useCallback } from 'react';
import { strings, categories, featuredGenerators, allGenerators } from '../data/generators.js';

const s = strings.en;
const AI_BUILDER_URL = '/s/ai_site_builder';
const SHOW_LIMIT = 6; // cards shown before "Show all" toggle

// ── SVG icons (aria-hidden, decorative) ───────────────────────────────────────
const IconSearch = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const IconArrowRight = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const IconChevronDown = () => (
  <svg aria-hidden="true" className="faq-chevron" width="18" height="18" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const IconChevronUp = () => (
  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15"/>
  </svg>
);

const IconChevronDownSmall = () => (
  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

// ── Category thumbnail SVGs (one per category, shared across cards in section) ─
const thumbs = {
  websites: (
    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="2" y="6" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8"/>
      <rect x="2" y="6" width="32" height="7" rx="3" fill="#E2E4E7"/>
      <circle cx="7" cy="9.5" r="1.5" fill="#8159BB"/>
      <circle cx="12" cy="9.5" r="1.5" fill="#CB0C9F"/>
      <rect x="6" y="17" width="10" height="2" rx="1" fill="#C6C9CD"/>
      <rect x="6" y="21" width="16" height="2" rx="1" fill="#E2E4E7"/>
      <rect x="6" y="25" width="12" height="2" rx="1" fill="#E2E4E7"/>
    </svg>
  ),
  'landing-pages': (
    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="4" y="4" width="28" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8"/>
      <rect x="8" y="9" width="20" height="3" rx="1.5" fill="#8159BB"/>
      <rect x="10" y="14" width="16" height="2" rx="1" fill="#C6C9CD"/>
      <rect x="10" y="18" width="12" height="2" rx="1" fill="#E2E4E7"/>
      <rect x="11" y="23" width="14" height="5" rx="2" fill="#7671FF"/>
    </svg>
  ),
  portfolios: (
    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="2" y="8" width="14" height="20" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8"/>
      <rect x="20" y="8" width="14" height="9" rx="2" stroke="#CB0C9F" strokeWidth="1.5" fill="#F4F6F8"/>
      <rect x="20" y="19" width="14" height="9" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8"/>
      <circle cx="9" cy="16" r="3" fill="#E2E4E7"/>
      <rect x="5" y="21" width="8" height="1.5" rx="0.75" fill="#C6C9CD"/>
      <rect x="5" y="24" width="6" height="1.5" rx="0.75" fill="#E2E4E7"/>
    </svg>
  ),
  blogs: (
    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="3" y="5" width="30" height="26" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8"/>
      <rect x="7" y="10" width="22" height="3" rx="1.5" fill="#8159BB"/>
      <rect x="7" y="15" width="22" height="1.5" rx="0.75" fill="#C6C9CD"/>
      <rect x="7" y="18" width="18" height="1.5" rx="0.75" fill="#C6C9CD"/>
      <rect x="7" y="21" width="20" height="1.5" rx="0.75" fill="#E2E4E7"/>
      <rect x="7" y="24" width="14" height="1.5" rx="0.75" fill="#E2E4E7"/>
    </svg>
  ),
  stores: (
    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="3" y="14" width="30" height="18" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8"/>
      <path d="M8 14V10a10 10 0 0 1 20 0v4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <circle cx="14" cy="22" r="3" fill="#E2E4E7"/>
      <circle cx="22" cy="22" r="3" fill="#E2E4E7"/>
      <rect x="12" y="27" width="12" height="2" rx="1" fill="#C6C9CD"/>
    </svg>
  ),
  'link-in-bio': (
    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="10" y="2" width="16" height="32" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="#F4F6F8"/>
      <circle cx="18" cy="10" r="3" fill="#E2E4E7"/>
      <rect x="13" y="15" width="10" height="3" rx="1.5" fill="#8159BB"/>
      <rect x="13" y="20" width="10" height="3" rx="1.5" fill="#CB0C9F"/>
      <rect x="13" y="25" width="10" height="3" rx="1.5" fill="#7671FF"/>
    </svg>
  ),
};

// ── Why icons ──────────────────────────────────────────────────────────────────
const whyIcons = [
  // Lightning bolt
  <svg key="lightning" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none"
    stroke="#8159BB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>,
  // Mobile
  <svg key="mobile" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none"
    stroke="#8159BB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>,
  // Tag / free
  <svg key="tag" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none"
    stroke="#8159BB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
    <line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>,
];

// ── Hero illustration (inline SVG) ─────────────────────────────────────────────
const HeroIllustration = () => (
  <svg
    aria-hidden="true"
    width="480"
    height="360"
    viewBox="0 0 480 360"
    fill="none"
    style={{ width: '100%', maxWidth: 480, height: 'auto' }}
  >
    {/* Browser chrome */}
    <rect x="20" y="20" width="440" height="320" rx="12" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1.5"/>
    <rect x="20" y="20" width="440" height="44" rx="12" fill="#E2E4E7"/>
    <rect x="20" y="52" width="440" height="12" fill="#E2E4E7"/>
    <circle cx="46" cy="42" r="7" fill="#C6C9CD"/>
    <circle cx="68" cy="42" r="7" fill="#C6C9CD"/>
    <circle cx="90" cy="42" r="7" fill="#C6C9CD"/>
    <rect x="110" y="34" width="260" height="16" rx="8" fill="#fff" stroke="#C6C9CD" strokeWidth="1"/>
    {/* Hero area */}
    <rect x="40" y="80" width="400" height="80" rx="6" fill="url(#heroGrad)"/>
    <rect x="60" y="100" width="160" height="12" rx="6" fill="rgba(255,255,255,0.7)"/>
    <rect x="60" y="118" width="120" height="8" rx="4" fill="rgba(255,255,255,0.5)"/>
    <rect x="60" y="134" width="80" height="18" rx="4" fill="rgba(255,255,255,0.9)"/>
    {/* Content cards */}
    <rect x="40" y="176" width="120" height="80" rx="6" fill="#fff" stroke="#E2E4E7" strokeWidth="1"/>
    <rect x="52" y="188" width="60" height="8" rx="4" fill="#C6C9CD"/>
    <rect x="52" y="200" width="80" height="6" rx="3" fill="#E2E4E7"/>
    <rect x="52" y="210" width="70" height="6" rx="3" fill="#E2E4E7"/>
    <rect x="52" y="224" width="50" height="14" rx="3" fill="#8159BB"/>

    <rect x="180" y="176" width="120" height="80" rx="6" fill="#fff" stroke="#E2E4E7" strokeWidth="1"/>
    <rect x="192" y="188" width="60" height="8" rx="4" fill="#C6C9CD"/>
    <rect x="192" y="200" width="80" height="6" rx="3" fill="#E2E4E7"/>
    <rect x="192" y="210" width="70" height="6" rx="3" fill="#E2E4E7"/>
    <rect x="192" y="224" width="50" height="14" rx="3" fill="#7671FF"/>

    <rect x="320" y="176" width="120" height="80" rx="6" fill="#fff" stroke="#E2E4E7" strokeWidth="1"/>
    <rect x="332" y="188" width="60" height="8" rx="4" fill="#C6C9CD"/>
    <rect x="332" y="200" width="80" height="6" rx="3" fill="#E2E4E7"/>
    <rect x="332" y="210" width="70" height="6" rx="3" fill="#E2E4E7"/>
    <rect x="332" y="224" width="50" height="14" rx="3" fill="#CB0C9F"/>

    {/* Bottom bar */}
    <rect x="40" y="272" width="400" height="48" rx="6" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1"/>
    <rect x="56" y="284" width="100" height="8" rx="4" fill="#C6C9CD"/>
    <rect x="56" y="296" width="140" height="6" rx="3" fill="#E2E4E7"/>
    <rect x="340" y="282" width="80" height="24" rx="4" fill="url(#heroGrad)"/>

    <defs>
      <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7671FF"/>
        <stop offset="100%" stopColor="#CB0C9F"/>
      </linearGradient>
    </defs>
  </svg>
);

// ── TopBar ─────────────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <header className="topbar" role="banner">
      <div className="topbar-inner">
        <a href="/" className="topbar-logo" aria-label="Strikingly home">
          <span>Strikingly</span>
          <span className="topbar-logo-ai">&nbsp;AI</span>
        </a>
      </div>
    </header>
  );
}

// ── Breadcrumb ─────────────────────────────────────────────────────────────────
function Breadcrumb() {
  return (
    <nav className="breadcrumb-bar" aria-label="Breadcrumb">
      <div className="breadcrumb-inner">
        <ol className="breadcrumb-list">
          <li><a href="/">{s.breadcrumb.home}</a></li>
          <li className="breadcrumb-sep" aria-hidden="true">&gt;</li>
          <li aria-current="page">{s.breadcrumb.current}</li>
        </ol>
      </div>
    </nav>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-grid">
          <div>
            <h1 id="hero-heading" style={{ margin: '0 0 0 0' }}>
              <span className="hero-h1-line1">{s.hero.h1Line1}</span>
              <span className="hero-h1-line2">{s.hero.h1Line2}</span>
            </h1>
            <p className="hero-sub">{s.hero.sub}</p>
            <div className="hero-ctas">
              <a href={AI_BUILDER_URL} className="btn btn-lg btn-gradient">
                {s.hero.ctaPrimary}
              </a>
              <a href="#all-generators" className="btn btn-lg btn-ghost">
                {s.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="hero-illustration" style={{ display: 'flex', justifyContent: 'center' }}>
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Featured Generators ────────────────────────────────────────────────────────
function FeaturedGenerators() {
  return (
    <section
      className="section"
      style={{ background: '#fff', borderTop: '1px solid var(--color-divider)' }}
      aria-labelledby="featured-heading"
    >
      <div className="container">
        <h2 id="featured-heading" className="section-heading">{s.featured.heading}</h2>
        <p className="section-subheading">{s.featured.sub}</p>
        <div className="grid-3">
          {featuredGenerators.map((g) => (
            <a
              key={g.slug}
              href={`/generators/${g.slug}`}
              className="feat-tile"
              aria-label={g.name}
            >
              <span className="feat-tile-name">{g.name}</span>
              <span className="feat-tile-desc">{g.desc}</span>
              <span className="tag" style={{ alignSelf: 'flex-start', marginTop: 4 }}>{g.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Browse by Category ─────────────────────────────────────────────────────────
function BrowseByCategory() {
  return (
    <section
      className="section"
      style={{ background: 'var(--color-bg-light)', borderTop: '1px solid var(--color-divider)' }}
      aria-labelledby="browse-heading"
    >
      <div className="container">
        <h2 id="browse-heading" className="section-heading">{s.browse.heading}</h2>
        <p className="section-subheading">{s.browse.sub}</p>
        <div className="grid-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/generators${cat.hash}`}
              className="cat-card"
              aria-label={`Browse ${cat.name} generators`}
            >
              <div style={{ marginBottom: 4 }}>{thumbs[cat.id]}</div>
              <span className="cat-card-name">{cat.name}</span>
              <span className="cat-card-desc">{cat.desc}</span>
              <span className="cat-card-arrow"><IconArrowRight /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Directory card ─────────────────────────────────────────────────────────────
function GenCard({ item, categoryId, hidden }) {
  return (
    <a
      href={`/generators/${item.slug}`}
      className={`gen-card${hidden ? ' js-hidden' : ''}`}
      aria-label={item.name}
      data-name={item.name.toLowerCase()}
      data-desc={item.desc.toLowerCase()}
      data-category={categoryId}
    >
      <div className="gen-card-thumb">{thumbs[categoryId]}</div>
      <span className="gen-card-name">{item.name}</span>
      <span className="gen-card-desc">{item.desc}</span>
    </a>
  );
}

// ── Directory subsection ───────────────────────────────────────────────────────
function DirectorySection({ section, searchQuery }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `dir-panel-${section.category}`;
  const btnId = `dir-btn-${section.category}`;

  const items = section.items;
  const total = items.length;
  const showToggle = !searchQuery && total > SHOW_LIMIT;
  const visibleItems = searchQuery
    ? items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery) ||
          item.desc.toLowerCase().includes(searchQuery) ||
          section.category.toLowerCase().includes(searchQuery)
      )
    : items;

  // When searching, show all matches; when not searching, respect toggle
  const displayItems = searchQuery
    ? visibleItems
    : expanded
    ? items
    : items.slice(0, SHOW_LIMIT);

  const hiddenItems = searchQuery
    ? []
    : expanded
    ? []
    : items.slice(SHOW_LIMIT);

  if (searchQuery && visibleItems.length === 0) return null;

  const catLabel = categories.find((c) => c.id === section.category)?.name || section.category;

  return (
    <div
      id={section.category}
      className="dir-section"
      data-category-section={section.category}
    >
      <h3 className="dir-section-heading">{catLabel}</h3>
      <p className="dir-section-desc">{section.sectionDesc}</p>
      <div className="grid-3" id={panelId}>
        {/* Always render ALL items in DOM for SEO / no-JS; JS hides extras */}
        {items.map((item, idx) => {
          const isVisible = searchQuery
            ? (item.name.toLowerCase().includes(searchQuery) ||
               item.desc.toLowerCase().includes(searchQuery) ||
               section.category.toLowerCase().includes(searchQuery))
            : (expanded || idx < SHOW_LIMIT);
          return (
            <GenCard
              key={item.slug}
              item={item}
              categoryId={section.category}
              hidden={!isVisible}
            />
          );
        })}
      </div>
      {showToggle && (
        <button
          className="show-all-btn"
          aria-expanded={expanded}
          aria-controls={panelId}
          id={btnId}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? (
            <>
              <IconChevronUp />
              {s.allGenerators.showLess}
            </>
          ) : (
            <>
              <IconChevronDownSmall />
              {s.allGenerators.showAll(total)}
            </>
          )}
        </button>
      )}
    </div>
  );
}

// ── All Generators ─────────────────────────────────────────────────────────────
function AllGenerators() {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const normalizedQuery = query.trim().toLowerCase();

  const totalMatches = normalizedQuery
    ? allGenerators.reduce((acc, section) => {
        return (
          acc +
          section.items.filter(
            (item) =>
              item.name.toLowerCase().includes(normalizedQuery) ||
              item.desc.toLowerCase().includes(normalizedQuery) ||
              section.category.toLowerCase().includes(normalizedQuery)
          ).length
        );
      }, 0)
    : null;

  const hasResults = totalMatches === null || totalMatches > 0;

  const handleClear = useCallback(() => {
    setQuery('');
    inputRef.current?.focus();
  }, []);

  return (
    <section
      id="all-generators"
      className="section"
      style={{ background: '#fff', borderTop: '1px solid var(--color-divider)' }}
      aria-labelledby="all-gen-heading"
    >
      <div className="container">
        <h2 id="all-gen-heading" className="section-heading">{s.allGenerators.heading}</h2>
        <p className="section-subheading">{s.allGenerators.sub}</p>

        {/* Search */}
        <div className="search-wrap">
          <span className="search-icon"><IconSearch /></span>
          <input
            ref={inputRef}
            type="search"
            className="search-input"
            placeholder={s.allGenerators.searchPlaceholder}
            aria-label={s.allGenerators.searchLabel}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </div>

        {/* Result count */}
        {normalizedQuery && (
          <p className="search-count" aria-live="polite" aria-atomic="true">
            {hasResults
              ? s.allGenerators.resultCount(totalMatches)
              : s.allGenerators.noResults}
          </p>
        )}

        {/* Empty state */}
        {normalizedQuery && !hasResults && (
          <div className="empty-state">
            <p>{s.allGenerators.noResults}</p>
            <button className="btn btn-ghost" onClick={handleClear} style={{ marginBottom: 12 }}>
              {s.allGenerators.clearSearch}
            </button>
            <p>
              <a href={AI_BUILDER_URL}>{s.allGenerators.noResultsCta}</a>
            </p>
          </div>
        )}

        {/* Directory subsections */}
        {allGenerators.map((section) => (
          <DirectorySection
            key={section.category}
            section={section}
            searchQuery={normalizedQuery}
          />
        ))}
      </div>
    </section>
  );
}

// ── How It Works ───────────────────────────────────────────────────────────────
function HowItWorks() {
  return (
    <section
      className="section"
      style={{ background: 'var(--color-bg-light)', borderTop: '1px solid var(--color-divider)' }}
      aria-labelledby="how-heading"
    >
      <div className="container">
        <h2 id="how-heading" className="section-heading">{s.howItWorks.heading}</h2>
        <div className="steps-grid" style={{ marginTop: 30 }}>
          {s.howItWorks.steps.map((step) => (
            <div key={step.num}>
              <div className="step-number" aria-hidden="true">{step.num}</div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 15,
                  textTransform: 'uppercase',
                  color: 'var(--color-heading)',
                  margin: '0 0 8px',
                }}
              >
                {step.title}
              </h3>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--color-body-text)', lineHeight: 1.6 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Why Strikingly ─────────────────────────────────────────────────────────────
function WhyStrikingly() {
  return (
    <section
      className="section"
      style={{ background: '#fff', borderTop: '1px solid var(--color-divider)' }}
      aria-labelledby="why-heading"
    >
      <div className="container">
        <h2 id="why-heading" className="section-heading">{s.why.heading}</h2>
        <div className="why-grid" style={{ marginTop: 30 }}>
          {s.why.items.map((item, i) => (
            <div
              key={item.title}
              className="card"
              style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
            >
              <div>{whyIcons[i]}</div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 14,
                  textTransform: 'uppercase',
                  color: 'var(--color-heading)',
                  margin: 0,
                }}
              >
                {item.title}
              </h3>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--color-body-text)', lineHeight: 1.6 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ────────────────────────────────────────────────────────────────────────
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section
      className="section"
      style={{ background: 'var(--color-bg-light)', borderTop: '1px solid var(--color-divider)' }}
      aria-labelledby="faq-heading"
    >
      <div className="container" style={{ maxWidth: 760 }}>
        <h2 id="faq-heading" className="section-heading">{s.faq.heading}</h2>
        <div style={{ marginTop: 24 }}>
          {s.faq.items.map((item, idx) => {
            const panelId = `faq-panel-${idx}`;
            const btnId = `faq-btn-${idx}`;
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="faq-item">
                <button
                  id={btnId}
                  className="faq-btn"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(idx)}
                >
                  <span>{item.q}</span>
                  <IconChevronDown />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`faq-panel${isOpen ? ' open' : ''}`}
                >
                  <div className="faq-panel-inner">
                    {item.a.map((para, pi) => (
                      <p key={pi}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Closing CTA ────────────────────────────────────────────────────────────────
function ClosingCTA() {
  return (
    <section
      className="section"
      style={{
        background: '#fff',
        borderTop: '1px solid var(--color-divider)',
        textAlign: 'center',
      }}
      aria-labelledby="closing-heading"
    >
      <div className="container" style={{ maxWidth: 600 }}>
        <h2
          id="closing-heading"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(24px, 3vw, 36px)',
            textTransform: 'uppercase',
            color: 'var(--color-heading)',
            margin: '0 0 12px',
          }}
        >
          {s.closingCta.heading}
        </h2>
        <p style={{ fontSize: 15, color: 'var(--color-body-text)', margin: '0 0 28px', lineHeight: 1.6 }}>
          {s.closingCta.sub}
        </p>
        <a href={AI_BUILDER_URL} className="btn btn-lg btn-gradient">
          {s.closingCta.cta}
        </a>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand col */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 16,
                textTransform: 'uppercase',
                color: 'var(--color-heading)',
                marginBottom: 10,
              }}
            >
              Strikingly
            </div>
            <p style={{ fontSize: 13, color: 'var(--color-body-text)', margin: 0, lineHeight: 1.6 }}>
              AI-powered website builder for everyone.
            </p>
          </div>
          {/* Product */}
          <div>
            <p className="footer-col-heading">Product</p>
            <ul className="footer-links">
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/templates">Templates</a></li>
              <li><a href="/generators">AI Generators</a></li>
              <li><a href={AI_BUILDER_URL}>AI Builder</a></li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <p className="footer-col-heading">Company</p>
            <ul className="footer-links">
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <p className="footer-col-heading">Support</p>
            <ul className="footer-links">
              <li><a href="/support">Help Center</a></li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <p className="footer-col-heading">Legal</p>
            <ul className="footer-links">
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <p className="footer-copy">{s.footer.copyright}</p>
      </div>
    </footer>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function GeneratorsHub() {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main id="main-content">
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
}
