import { useState, useRef, useEffect, useCallback } from 'react';
import s from '../../data/strings.js';
import {
  FEATURED_GENERATORS,
  ALL_GENERATORS,
  CATEGORY_META,
  CATEGORIES,
} from '../../data/generators.js';
import {
  HeroIllustration,
  WebsiteIllustration,
  LandingPageIllustration,
  PortfolioIllustration,
  BlogIllustration,
  StoreIllustration,
  LinkInBioIllustration,
  ArrowRightIcon,
  SearchIcon,
  ChevronDownIcon,
  SpeedIcon,
  MobileIcon,
  FreeIcon,
  LogoIcon,
} from '../../components/generators/Icons.jsx';

// ─── Helpers ────────────────────────────────────────────────────────────────

const AI_BUILDER_URL = '/s/ai_site_builder';

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function categoryIllustration(categoryId) {
  switch (categoryId) {
    case CATEGORIES.WEBSITES: return <WebsiteIllustration />;
    case CATEGORIES.LANDING_PAGES: return <LandingPageIllustration />;
    case CATEGORIES.PORTFOLIOS: return <PortfolioIllustration />;
    case CATEGORIES.BLOGS: return <BlogIllustration />;
    case CATEGORIES.STORES: return <StoreIllustration />;
    case CATEGORIES.LINK_IN_BIO: return <LinkInBioIllustration />;
    default: return <WebsiteIllustration />;
  }
}

// ─── Section 0: Top Bar ─────────────────────────────────────────────────────

function TopBar() {
  return (
    <div className="top-bar" role="banner">
      <div className="content-container" style={{ display: 'flex', alignItems: 'center', height: '56px' }}>
        <a href="/" aria-label="Strikingly home" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <LogoIcon />
          <span style={{
            fontFamily: "'Josefin Sans', Poppins, sans-serif",
            fontWeight: 700,
            fontSize: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#2E2E2F',
          }}>
            strikingly <span className="ai-gradient-text">AI</span>
          </span>
        </a>
      </div>
    </div>
  );
}

// ─── Section 1: Breadcrumb ───────────────────────────────────────────────────

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" style={{ borderBottom: '1px solid #E2E4E7', backgroundColor: '#ffffff' }}>
      <div className="content-container" style={{ paddingBlock: '10px' }}>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <li>
            <a
              href="/"
              style={{ color: '#636972', fontSize: '13px', textDecoration: 'none' }}
            >
              {s.breadcrumbHome}
            </a>
          </li>
          <li aria-hidden="true" style={{ color: '#C6C9CD', fontSize: '13px' }}>›</li>
          <li>
            <span style={{ color: '#4B5056', fontSize: '13px', fontWeight: 600 }} aria-current="page">
              {s.breadcrumbCurrent}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

// ─── Section 2: Hero ────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="hero-wash section-gap"
      aria-labelledby="hero-heading"
      style={{ paddingBlock: '70px 60px' }}
    >
      <div className="content-container">
        <div
          className="hero-grid"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left: text */}
          <div className="hero-text" style={{ flex: '1 1 400px', minWidth: 0 }}>
            <h1
              id="hero-heading"
              style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                lineHeight: 1.15,
                marginBottom: '20px',
                color: '#2E2E2F',
              }}
            >
              <span style={{ display: 'block', color: '#2E2E2F' }}>{s.heroH1Line1}</span>
              <span className="ai-gradient-text" style={{ display: 'block' }}>{s.heroH1Line2}</span>
            </h1>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.6,
              color: '#636972',
              marginBottom: '30px',
              maxWidth: '480px',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
            }}>
              {s.heroSubheadline}
            </p>
            <div className="btn-group" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href={AI_BUILDER_URL} className="btn btn-primary btn-lg">
                {s.heroPrimaryCta}
              </a>
              <a href="#all-generators" className="btn btn-ghost btn-lg">
                {s.heroSecondaryCta}
              </a>
            </div>
          </div>

          {/* Right: illustration */}
          <div
            className="hero-illustration"
            style={{ flex: '1 1 320px', display: 'flex', justifyContent: 'center', minWidth: 0 }}
          >
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: Featured Generators ─────────────────────────────────────────

function FeaturedGenerators() {
  return (
    <section
      className="section-gap"
      style={{ backgroundColor: '#F4F6F8' }}
      aria-labelledby="featured-heading"
    >
      <div className="content-container">
        <div style={{ marginBottom: '30px' }}>
          <h2 id="featured-heading" style={{ fontSize: 'clamp(22px, 3vw, 30px)', color: '#4B5056', marginBottom: '8px' }}>
            {s.featuredHeading}
          </h2>
          <p style={{ color: '#636972', fontSize: '15px', margin: 0 }}>{s.featuredSubheading}</p>
        </div>
        <div className="grid-3-2-1">
          {FEATURED_GENERATORS.map((gen) => (
            <article key={gen.slug}>
              <a
                href={`/generators/${gen.slug}`}
                className="strk-card"
                style={{ display: 'block', textDecoration: 'none' }}
                aria-label={gen.name}
              >
                <div style={{ marginBottom: '10px' }}>
                  <span className="strk-tag">{gen.category}</span>
                </div>
                <h3 style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#2E2E2F',
                  marginBottom: '6px',
                  fontFamily: "'Josefin Sans', Poppins, sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}>
                  {gen.name}
                </h3>
                <p style={{ color: '#636972', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
                  {gen.description}
                </p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: Browse by Category ──────────────────────────────────────────

function BrowseByCategory() {
  return (
    <section className="section-gap" aria-labelledby="browse-heading">
      <div className="content-container">
        <div style={{ marginBottom: '30px' }}>
          <h2 id="browse-heading" style={{ fontSize: 'clamp(22px, 3vw, 30px)', color: '#4B5056', marginBottom: '8px' }}>
            {s.browseHeading}
          </h2>
          <p style={{ color: '#636972', fontSize: '15px', margin: 0 }}>{s.browseSubheading}</p>
        </div>
        <div className="grid-3-2-1">
          {CATEGORY_META.map((cat) => (
            <article key={cat.id}>
              <a
                href={`/generators${cat.anchor}`}
                className="strk-card"
                style={{ display: 'flex', flexDirection: 'column', gap: '12px', textDecoration: 'none' }}
                aria-label={`Browse ${cat.label} generators`}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  {categoryIllustration(cat.id)}
                  <ArrowRightIcon size={18} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '14px',
                    color: '#2E2E2F',
                    marginBottom: '6px',
                    fontFamily: "'Josefin Sans', Poppins, sans-serif",
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}>
                    {cat.label}
                  </h3>
                  <p style={{ color: '#636972', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
                    {cat.description}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: All Generators ───────────────────────────────────────────────

const INITIAL_VISIBLE = 6;

function GeneratorCard({ gen }) {
  return (
    <article>
      <a
        href={`/generators/${gen.slug}`}
        className="strk-card"
        style={{ display: 'block', textDecoration: 'none' }}
        aria-label={gen.name}
      >
        <h3 style={{
          fontSize: '14px',
          fontWeight: 700,
          color: '#2E2E2F',
          marginBottom: '6px',
          fontFamily: "'Josefin Sans', Poppins, sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          lineHeight: 1.3,
        }}>
          {gen.name}
        </h3>
        <p style={{ color: '#636972', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
          {gen.description}
        </p>
      </a>
    </article>
  );
}

function CategorySubsection({ catMeta, generators, searchQuery }) {
  const [expanded, setExpanded] = useState(false);
  const gridId = `grid-${catMeta.id}`;

  const isSearching = searchQuery.trim().length > 0;
  const visibleGens = isSearching ? generators : (expanded ? generators : generators.slice(0, INITIAL_VISIBLE));
  const hasMore = !isSearching && generators.length > INITIAL_VISIBLE;

  if (generators.length === 0) return null;

  return (
    <section
      id={catMeta.id}
      aria-labelledby={`cat-heading-${catMeta.id}`}
      style={{ marginBottom: '50px' }}
    >
      <div style={{ marginBottom: '20px' }}>
        <h3
          id={`cat-heading-${catMeta.id}`}
          style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            color: '#4B5056',
            marginBottom: '6px',
            fontFamily: "'Josefin Sans', Poppins, sans-serif",
            fontWeight: 700,
            textTransform: 'uppercase',
          }}
        >
          {catMeta.label}
        </h3>
        <p style={{ color: '#636972', fontSize: '14px', margin: 0 }}>{catMeta.sectionDescription}</p>
      </div>

      <div id={gridId} className="grid-3-2-1">
        {visibleGens.map((gen) => (
          <GeneratorCard key={gen.slug} gen={gen} />
        ))}
      </div>

      {hasMore && (
        <div style={{ marginTop: '20px' }}>
          <button
            type="button"
            className="btn btn-ghost"
            aria-expanded={expanded}
            aria-controls={gridId}
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
  const inputRef = useRef(null);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredByCategory = CATEGORY_META.map((cat) => {
    const gens = ALL_GENERATORS[cat.id] || [];
    if (!normalizedQuery) return { cat, gens };
    const filtered = gens.filter(
      (g) =>
        g.name.toLowerCase().includes(normalizedQuery) ||
        g.description.toLowerCase().includes(normalizedQuery) ||
        cat.label.toLowerCase().includes(normalizedQuery)
    );
    return { cat, gens: filtered };
  });

  const totalMatches = normalizedQuery
    ? filteredByCategory.reduce((sum, { gens }) => sum + gens.length, 0)
    : null;

  const handleClear = useCallback(() => {
    setQuery('');
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <section
      id="all-generators"
      className="section-gap"
      style={{ backgroundColor: '#F4F6F8' }}
      aria-labelledby="all-generators-heading"
    >
      <div className="content-container">
        <div style={{ marginBottom: '30px' }}>
          <h2
            id="all-generators-heading"
            style={{ fontSize: 'clamp(22px, 3vw, 30px)', color: '#4B5056', marginBottom: '8px' }}
          >
            {s.allHeading}
          </h2>
          <p style={{ color: '#636972', fontSize: '15px', margin: 0 }}>{s.allSubheading}</p>
        </div>

        {/* Search */}
        <div style={{ marginBottom: '30px' }}>
          <div className="search-wrapper" style={{ maxWidth: '480px' }}>
            <label htmlFor="generator-search" className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
              {s.searchLabel}
            </label>
            <SearchIcon />
            <input
              ref={inputRef}
              id="generator-search"
              type="search"
              className="search-input"
              placeholder={s.searchPlaceholder}
              aria-label={s.searchLabel}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
          {totalMatches !== null && (
            <p style={{ marginTop: '8px', fontSize: '13px', color: '#636972' }} aria-live="polite" aria-atomic="true">
              {s.searchResultCount(totalMatches)}
            </p>
          )}
        </div>

        {/* No results */}
        {totalMatches === 0 && (
          <div
            role="status"
            style={{
              padding: '40px 20px',
              textAlign: 'center',
              border: '1px solid #E2E4E7',
              borderRadius: '3px',
              backgroundColor: '#ffffff',
              marginBottom: '30px',
            }}
          >
            <p style={{ color: '#4B5056', fontWeight: 600, marginBottom: '10px' }}>{s.searchNoResults}</p>
            <button type="button" className="btn btn-ghost" onClick={handleClear} style={{ marginBottom: '10px' }}>
              {s.searchClear}
            </button>
            <p style={{ margin: 0, fontSize: '13px', color: '#636972' }}>
              <a href={AI_BUILDER_URL} style={{ color: '#8159BB', textDecoration: 'underline' }}>
                {s.searchNoResultsCta}
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        {filteredByCategory.map(({ cat, gens }) => (
          <CategorySubsection
            key={cat.id}
            catMeta={cat}
            generators={gens}
            searchQuery={query}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Section 6: How It Works ─────────────────────────────────────────────────

function HowItWorks() {
  return (
    <section className="section-gap" aria-labelledby="how-heading">
      <div className="content-container">
        <h2
          id="how-heading"
          style={{ fontSize: 'clamp(22px, 3vw, 30px)', color: '#4B5056', marginBottom: '40px', textAlign: 'center' }}
        >
          {s.howHeading}
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '30px',
          }}
        >
          {s.steps.map((step, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}>
              <div className="step-circle" aria-hidden="true">{i + 1}</div>
              <h3 style={{
                fontSize: '14px',
                color: '#2E2E2F',
                fontFamily: "'Josefin Sans', Poppins, sans-serif",
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                margin: 0,
              }}>
                {step.title}
              </h3>
              <p style={{ color: '#636972', fontSize: '14px', margin: 0, lineHeight: 1.6, maxWidth: '260px' }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 7: Why Strikingly ───────────────────────────────────────────────

function whyIcon(index) {
  if (index === 0) return <SpeedIcon />;
  if (index === 1) return <MobileIcon />;
  return <FreeIcon />;
}

function WhyStrikingly() {
  return (
    <section
      className="section-gap"
      style={{ backgroundColor: '#F4F6F8' }}
      aria-labelledby="why-heading"
    >
      <div className="content-container">
        <h2
          id="why-heading"
          style={{ fontSize: 'clamp(22px, 3vw, 30px)', color: '#4B5056', marginBottom: '40px', textAlign: 'center' }}
        >
          {s.whyHeading}
        </h2>
        <div className="grid-3-2-1">
          {s.whyItems.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '30px 20px',
                backgroundColor: '#ffffff',
                border: '1px solid #E2E4E7',
                borderRadius: '3px',
              }}
            >
              {whyIcon(i)}
              <h3 style={{
                fontSize: '14px',
                color: '#2E2E2F',
                fontFamily: "'Josefin Sans', Poppins, sans-serif",
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                margin: 0,
              }}>
                {item.title}
              </h3>
              <p style={{ color: '#636972', fontSize: '14px', margin: 0, lineHeight: 1.6 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 8: FAQ ──────────────────────────────────────────────────────────

function FAQItem({ faq, index, isOpen, onToggle }) {
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-btn-${index}`;

  return (
    <div style={{ borderBottom: '1px solid #E2E4E7' }}>
      <h3 style={{ margin: 0 }}>
        <button
          id={btnId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
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
            textAlign: 'left',
            fontFamily: "'Josefin Sans', Poppins, sans-serif",
            fontWeight: 700,
            fontSize: '15px',
            color: '#2E2E2F',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            gap: '12px',
          }}
        >
          <span>{faq.q}</span>
          <span
            style={{
              flexShrink: 0,
              color: '#8159BB',
              transition: 'transform 0.2s ease',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              display: 'flex',
            }}
          >
            <ChevronDownIcon />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        style={{
          maxHeight: isOpen ? '600px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <div style={{ paddingBottom: '18px' }}>
          {faq.a.split('\n\n').map((para, pi) => (
            <p key={pi} style={{ color: '#636972', fontSize: '14px', lineHeight: 1.7, margin: pi > 0 ? '12px 0 0' : '0' }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section className="section-gap" aria-labelledby="faq-heading">
      <div className="content-container" style={{ maxWidth: '760px' }}>
        <h2
          id="faq-heading"
          style={{ fontSize: 'clamp(22px, 3vw, 30px)', color: '#4B5056', marginBottom: '30px' }}
        >
          {s.faqHeading}
        </h2>
        <div>
          {s.faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 9: Closing CTA ──────────────────────────────────────────────────

function ClosingCTA() {
  return (
    <section
      className="section-gap"
      style={{ backgroundColor: '#ffffff', textAlign: 'center' }}
      aria-labelledby="closing-heading"
    >
      <div className="content-container">
        <h2
          id="closing-heading"
          style={{ fontSize: 'clamp(26px, 4vw, 40px)', color: '#2E2E2F', marginBottom: '16px' }}
        >
          {s.closingHeading}
        </h2>
        <p style={{ color: '#636972', fontSize: '16px', marginBottom: '30px', maxWidth: '480px', marginInline: 'auto' }}>
          {s.closingSub}
        </p>
        <a href={AI_BUILDER_URL} className="btn btn-primary btn-lg">
          {s.closingCta}
        </a>
      </div>
    </section>
  );
}

// ─── Section 10: Footer ──────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="footer-bg" aria-label="Site footer">
      <div className="content-container" style={{ paddingBlock: '50px 30px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '30px',
            marginBottom: '40px',
          }}
        >
          {/* Brand column */}
          <div>
            <a href="/" aria-label="Strikingly home" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <LogoIcon />
              <span style={{
                fontFamily: "'Josefin Sans', Poppins, sans-serif",
                fontWeight: 700,
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#2E2E2F',
              }}>
                Strikingly
              </span>
            </a>
            <p style={{ color: '#636972', fontSize: '13px', lineHeight: 1.6, margin: 0, maxWidth: '200px' }}>
              {s.footerTagline}
            </p>
          </div>

          {/* Link columns */}
          {s.footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 style={{
                fontFamily: "'Josefin Sans', Poppins, sans-serif",
                fontWeight: 700,
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#4B5056',
                marginBottom: '12px',
              }}>
                {col.heading}
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{ color: '#636972', fontSize: '13px', textDecoration: 'none' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="strk-divider" />
        <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '20px', textAlign: 'center' }}>
          {s.footerCopyright}
        </p>
      </div>
    </footer>
  );
}

// ─── Page Assembly ───────────────────────────────────────────────────────────

export default function GeneratorsPage() {
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
    </>
  );
}
