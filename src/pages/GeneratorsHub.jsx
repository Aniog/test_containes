import { useState, useRef, useEffect } from 'react';
import {
  strings,
  AI_BUILDER_URL,
  featuredGenerators,
  categoryCards,
  allGenerators,
  howItWorks,
  whyStrikingly,
  faqItems,
  footerColumns,
} from '../data/generators';

const s = strings.en;
const INITIAL_VISIBLE = 6;

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
      <rect x="40" y="30" width="400" height="300" rx="12" stroke="#C6C9CD" strokeWidth="1.5" fill="#F4F6F8" />
      <rect x="40" y="30" width="400" height="40" rx="12" fill="#E2E4E7" />
      <circle cx="68" cy="50" r="6" fill="#C6C9CD" />
      <circle cx="88" cy="50" r="6" fill="#C6C9CD" />
      <circle cx="108" cy="50" r="6" fill="#C6C9CD" />
      <rect x="160" y="42" width="160" height="16" rx="4" fill="#C6C9CD" />
      <rect x="60" y="90" width="360" height="60" rx="6" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="80" y="105" width="120" height="12" rx="3" fill="#8159BB" opacity="0.3" />
      <rect x="80" y="123" width="200" height="8" rx="3" fill="#C6C9CD" />
      <rect x="320" y="105" width="80" height="28" rx="4" fill="url(#heroGrad)" />
      <rect x="60" y="165" width="110" height="80" rx="6" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="70" y="175" width="90" height="40" rx="3" fill="#E2E4E7" />
      <rect x="70" y="222" width="60" height="8" rx="3" fill="#C6C9CD" />
      <rect x="185" y="165" width="110" height="80" rx="6" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="195" y="175" width="90" height="40" rx="3" fill="#E2E4E7" />
      <rect x="195" y="222" width="60" height="8" rx="3" fill="#C6C9CD" />
      <rect x="310" y="165" width="110" height="80" rx="6" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="320" y="175" width="90" height="40" rx="3" fill="#E2E4E7" />
      <rect x="320" y="222" width="60" height="8" rx="3" fill="#C6C9CD" />
      <rect x="60" y="260" width="360" height="50" rx="6" fill="white" stroke="#E2E4E7" strokeWidth="1" />
      <rect x="80" y="275" width="140" height="8" rx="3" fill="#C6C9CD" />
      <rect x="80" y="290" width="100" height="8" rx="3" fill="#E2E4E7" />
      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CategoryIcon({ id }) {
  const icons = {
    websites: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="32" height="28" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="4" y="6" width="32" height="8" rx="3" fill="#8159BB" opacity="0.15" />
        <rect x="8" y="18" width="24" height="3" rx="1.5" fill="#8159BB" opacity="0.4" />
        <rect x="8" y="24" width="16" height="3" rx="1.5" fill="#8159BB" opacity="0.25" />
      </svg>
    ),
    'landing-pages': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="10" y="10" width="20" height="4" rx="2" fill="#8159BB" opacity="0.5" />
        <rect x="12" y="17" width="16" height="2.5" rx="1.25" fill="#8159BB" opacity="0.3" />
        <rect x="12" y="22" width="12" height="2.5" rx="1.25" fill="#8159BB" opacity="0.2" />
        <rect x="13" y="28" width="14" height="5" rx="2.5" fill="url(#catGrad)" />
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
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="8" y="12" width="10" height="10" rx="2" fill="#8159BB" opacity="0.3" />
        <rect x="22" y="12" width="10" height="4" rx="1.5" fill="#8159BB" opacity="0.4" />
        <rect x="22" y="19" width="7" height="3" rx="1.5" fill="#8159BB" opacity="0.2" />
        <rect x="8" y="26" width="24" height="2.5" rx="1.25" fill="#8159BB" opacity="0.15" />
      </svg>
    ),
    blogs: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="28" height="32" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="10" y="10" width="20" height="3" rx="1.5" fill="#8159BB" opacity="0.5" />
        <rect x="10" y="16" width="20" height="2" rx="1" fill="#8159BB" opacity="0.25" />
        <rect x="10" y="21" width="14" height="2" rx="1" fill="#8159BB" opacity="0.2" />
        <rect x="10" y="26" width="20" height="2" rx="1" fill="#8159BB" opacity="0.25" />
        <rect x="10" y="31" width="10" height="2" rx="1" fill="#8159BB" opacity="0.15" />
      </svg>
    ),
    stores: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M6 14h28l-3 16H9L6 14z" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <path d="M14 14l2-8h8l2 8" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <circle cx="15" cy="34" r="2" fill="#8159BB" opacity="0.5" />
        <circle cx="25" cy="34" r="2" fill="#8159BB" opacity="0.5" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="14" stroke="#8159BB" strokeWidth="1.5" fill="none" />
        <rect x="12" y="14" width="16" height="4" rx="2" fill="#8159BB" opacity="0.4" />
        <rect x="12" y="21" width="16" height="4" rx="2" fill="#8159BB" opacity="0.25" />
        <rect x="14" y="28" width="12" height="4" rx="2" fill="#8159BB" opacity="0.15" />
      </svg>
    ),
  };
  return icons[id] || icons.websites;
}

function SubsectionIcon({ id }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="#F4F6F8" />
      <CategoryIcon id={id} />
    </svg>
  );
}

// ─── Shared Components ────────────────────────────────────────────────────────

function SectionHeading({ children, sub }) {
  return (
    <div style={{ marginBottom: 30 }}>
      <h2 style={{ fontSize: 28, color: '#4B5056', margin: 0, letterSpacing: '0.04em' }}>{children}</h2>
      {sub && <p style={{ color: '#636972', fontSize: 14, marginTop: 8, marginBottom: 0 }}>{sub}</p>}
    </div>
  );
}

function GradientButton({ href, children, size = 'standard', style = {} }) {
  const height = size === 'large' ? 44 : 36;
  const fontSize = size === 'large' ? 14 : 13;
  return (
    <a
      href={href}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height,
        padding: '0 20px',
        background: 'linear-gradient(90deg, #7671FF, #CB0C9F)',
        color: '#ffffff',
        fontFamily: '"Josefin Sans", Poppins, sans-serif',
        fontWeight: 700,
        fontSize,
        textTransform: 'uppercase',
        borderRadius: 4,
        textDecoration: 'none',
        letterSpacing: '0.05em',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {children}
    </a>
  );
}

function GhostButton({ href, children, size = 'standard', onClick, style = {} }) {
  const height = size === 'large' ? 44 : 36;
  const fontSize = size === 'large' ? 14 : 13;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height,
    padding: '0 20px',
    background: 'transparent',
    color: '#8159BB',
    border: '1px solid #8159BB',
    fontFamily: '"Josefin Sans", Poppins, sans-serif',
    fontWeight: 700,
    fontSize,
    textTransform: 'uppercase',
    borderRadius: 4,
    textDecoration: 'none',
    letterSpacing: '0.05em',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    ...style,
  };
  if (href) return <a href={href} style={base}>{children}</a>;
  return <button type="button" onClick={onClick} style={base}>{children}</button>;
}

// ─── Section 0: TopBar ────────────────────────────────────────────────────────

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
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', height: 56, display: 'flex', alignItems: 'center' }}>
        <a href="/" aria-label="Strikingly home" style={{ display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect width="24" height="24" rx="5" fill="url(#logoGrad)" />
            <path d="M7 17l4-5-4-5h3l4 5-4 5H7zm6 0l4-5-4-5h3l4 5-4 5h-3z" fill="white" />
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7671FF" />
                <stop offset="100%" stopColor="#CB0C9F" />
              </linearGradient>
            </defs>
          </svg>
          <span style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, fontSize: 16, color: '#2E2E2F', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            strikingly <span style={{ background: 'linear-gradient(90deg,#7671FF,#CB0C9F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AI</span>
          </span>
        </a>
      </div>
    </header>
  );
}

// ─── Section 1: Breadcrumb ────────────────────────────────────────────────────

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" style={{ background: '#ffffff', borderBottom: '1px solid #E2E4E7' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '10px 20px' }}>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#636972' }}>
          <li>
            <a href="/" style={{ color: '#636972', textDecoration: 'none' }}>{s.breadcrumbHome}</a>
          </li>
          <li aria-hidden="true" style={{ color: '#8159BB', fontWeight: 700 }}>›</li>
          <li aria-current="page" style={{ color: '#4B5056' }}>{s.breadcrumbCurrent}</li>
        </ol>
      </div>
    </nav>
  );
}

// ─── Section 2: Hero ──────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      style={{
        background: 'radial-gradient(ellipse at 70% 50%, rgba(118,113,255,0.06) 0%, rgba(203,12,159,0.04) 60%, transparent 100%), #ffffff',
        padding: '70px 20px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        <div>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.15, marginBottom: 20 }}>
            <span style={{ display: 'block', color: '#2E2E2F' }}>{s.heroLine1}</span>
            <span
              style={{
                display: 'block',
                background: 'linear-gradient(90deg, #7671FF, #CB0C9F)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {s.heroLine2}
            </span>
          </h1>
          <p style={{ color: '#636972', fontSize: 16, lineHeight: 1.6, marginBottom: 30, maxWidth: 480 }}>
            {s.heroSub}
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <GradientButton href={AI_BUILDER_URL} size="large">{s.heroCta}</GradientButton>
            <GhostButton href="#all-generators" size="large">{s.heroCtaSecondary}</GhostButton>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <HeroIllustration />
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
}

// ─── Section 3: Featured Generators ──────────────────────────────────────────

function CategoryTag({ label }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: 11,
        fontFamily: '"Josefin Sans", Poppins, sans-serif',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        color: '#8159BB',
        border: '1px solid #8159BB',
        borderRadius: 3,
        padding: '2px 6px',
      }}
    >
      {label}
    </span>
  );
}

function FeaturedGenerators() {
  return (
    <section style={{ background: '#F4F6F8', padding: '60px 20px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading sub={s.featuredSub}>{s.featuredHeading}</SectionHeading>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
          className="featured-grid"
        >
          {featuredGenerators.map((g) => (
            <article key={g.slug}>
              <a
                href={`/generators/${g.slug}`}
                className="gen-card"
                style={{ display: 'flex', flexDirection: 'column', gap: 10, height: '100%', boxSizing: 'border-box' }}
              >
                <CategoryTag label={g.category} />
                <strong style={{ color: '#2E2E2F', fontSize: 15, fontFamily: '"Open Sans", sans-serif', fontWeight: 600, lineHeight: 1.3 }}>{g.name}</strong>
                <p style={{ color: '#636972', fontSize: 13, margin: 0, lineHeight: 1.5 }}>{g.desc}</p>
              </a>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .featured-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .featured-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ─── Section 4: Browse by Category ───────────────────────────────────────────

function BrowseByCategory() {
  return (
    <section style={{ background: '#ffffff', padding: '60px 20px', borderBottom: '1px solid #E2E4E7' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading sub={s.categorySub}>{s.categoryHeading}</SectionHeading>
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
          className="cat-grid"
        >
          {categoryCards.map((cat) => (
            <article key={cat.id}>
              <a
                href={`/generators${cat.anchor}`}
                className="gen-card"
                style={{ display: 'flex', flexDirection: 'column', gap: 12, height: '100%', boxSizing: 'border-box' }}
              >
                <CategoryIcon id={cat.id} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <strong style={{ color: '#2E2E2F', fontSize: 14, fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{cat.name}</strong>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M6 3l5 5-5 5" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p style={{ color: '#636972', fontSize: 13, margin: 0, lineHeight: 1.5 }}>{cat.desc}</p>
              </a>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .cat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .cat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ─── Section 5: All Generators ────────────────────────────────────────────────

function GeneratorCard({ item, categoryId }) {
  return (
    <article>
      <a
        href={`/generators/${item.slug}`}
        className="gen-card"
        style={{ display: 'flex', flexDirection: 'column', gap: 10, height: '100%', boxSizing: 'border-box' }}
      >
        <SubsectionIcon id={categoryId} />
        <strong style={{ color: '#2E2E2F', fontSize: 14, fontFamily: '"Open Sans", sans-serif', fontWeight: 600, lineHeight: 1.3 }}>{item.name}</strong>
        <p style={{ color: '#636972', fontSize: 13, margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
      </a>
    </article>
  );
}

function CategorySubsection({ section, query }) {
  const [expanded, setExpanded] = useState(false);
  const gridRef = useRef(null);

  const filtered = query
    ? section.items.filter(
        (it) =>
          it.name.toLowerCase().includes(query) ||
          it.desc.toLowerCase().includes(query) ||
          section.heading.toLowerCase().includes(query)
      )
    : section.items;

  const showToggle = !query && section.items.length > INITIAL_VISIBLE;
  const visibleItems = (!query && !expanded) ? filtered.slice(0, INITIAL_VISIBLE) : filtered;
  const hiddenItems = (!query && !expanded) ? filtered.slice(INITIAL_VISIBLE) : [];

  if (query && filtered.length === 0) return null;

  return (
    <section id={section.id} style={{ marginBottom: 50, scrollMarginTop: 80 }}>
      <h3 style={{ fontSize: 20, color: '#4B5056', marginBottom: 6, letterSpacing: '0.04em' }}>{section.heading}</h3>
      <p style={{ color: '#636972', fontSize: 13, marginBottom: 20, marginTop: 0 }}>{section.desc}</p>

      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
        className="dir-grid"
        ref={gridRef}
      >
        {visibleItems.map((item) => (
          <GeneratorCard key={item.slug} item={item} categoryId={section.id} />
        ))}
      </div>

      {/* Hidden items always in DOM for JS-off and SEO; visually hidden when collapsed */}
      {hiddenItems.length > 0 && (
        <div
          id={`${section.id}-extra`}
          aria-hidden={!expanded}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
            marginTop: 20,
            overflow: 'hidden',
            maxHeight: expanded ? 2000 : 0,
            transition: 'max-height 0.35s ease',
          }}
          className="dir-grid"
        >
          {hiddenItems.map((item) => (
            <GeneratorCard key={item.slug} item={item} categoryId={section.id} />
          ))}
        </div>
      )}

      {showToggle && (
        <div style={{ marginTop: 20 }}>
          <GhostButton
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            aria-controls={`${section.id}-extra`}
          >
            {expanded ? s.showLess : s.showAll(section.items.length)}
          </GhostButton>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) { .dir-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .dir-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function AllGenerators() {
  const [query, setQuery] = useState('');
  const trimmed = query.trim().toLowerCase();

  const totalMatches = trimmed
    ? allGenerators.reduce((acc, sec) => {
        return acc + sec.items.filter(
          (it) =>
            it.name.toLowerCase().includes(trimmed) ||
            it.desc.toLowerCase().includes(trimmed) ||
            sec.heading.toLowerCase().includes(trimmed)
        ).length;
      }, 0)
    : null;

  const noResults = trimmed && totalMatches === 0;

  return (
    <section id="all-generators" style={{ background: '#F4F6F8', padding: '60px 20px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading sub={s.allSub}>{s.allHeading}</SectionHeading>

        {/* Search */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ position: 'relative', maxWidth: 480 }}>
            <label htmlFor="gen-search" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
              {s.searchLabel}
            </label>
            <svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              aria-hidden="true"
              style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
            >
              <circle cx="7" cy="7" r="4.5" stroke="#636972" strokeWidth="1.5" />
              <path d="M10.5 10.5l3 3" stroke="#636972" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              id="gen-search"
              type="search"
              aria-label={s.searchLabel}
              placeholder={s.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: '100%',
                height: 44,
                paddingLeft: 38,
                paddingRight: 16,
                border: '1px solid #C6C9CD',
                borderRadius: 4,
                fontSize: 14,
                fontFamily: '"Open Sans", sans-serif',
                color: '#2E2E2F',
                background: '#ffffff',
                boxSizing: 'border-box',
                outline: 'none',
              }}
            />
          </div>
          {trimmed && !noResults && (
            <p style={{ color: '#636972', fontSize: 13, marginTop: 8 }}>
              {s.searchResultCount(totalMatches)}
            </p>
          )}
        </div>

        {/* No results state */}
        {noResults && (
          <div style={{ textAlign: 'center', padding: '40px 20px', background: '#ffffff', borderRadius: 6, border: '1px solid #E2E4E7', marginBottom: 40 }}>
            <p style={{ color: '#4B5056', fontSize: 15, marginBottom: 16 }}>{s.searchEmpty}</p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <GhostButton onClick={() => setQuery('')}>{s.searchEmptyClear}</GhostButton>
              <GradientButton href={AI_BUILDER_URL}>{s.searchEmptyAlt}</GradientButton>
            </div>
          </div>
        )}

        {/* Subsections */}
        {allGenerators.map((section) => (
          <CategorySubsection key={section.id} section={section} query={trimmed} />
        ))}
      </div>
    </section>
  );
}

// ─── Section 6: How It Works ──────────────────────────────────────────────────

function HowItWorks() {
  return (
    <section style={{ background: '#ffffff', padding: '60px 20px', borderTop: '1px solid #E2E4E7' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading>{s.howHeading}</SectionHeading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }} className="how-grid">
          {howItWorks.map((step) => (
            <div key={step.num} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7671FF, #CB0C9F)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontFamily: '"Josefin Sans", Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: 18,
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                {step.num}
              </div>
              <strong style={{ color: '#4B5056', fontSize: 14, fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{step.title}</strong>
              <p style={{ color: '#636972', fontSize: 14, margin: 0, lineHeight: 1.6 }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) { .how-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ─── Section 7: Why Strikingly ────────────────────────────────────────────────

const whyIcons = [
  // Lightning bolt
  <svg key="0" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M16 3L6 16h8l-2 9 12-13h-8l2-9z" stroke="#8159BB" strokeWidth="1.5" strokeLinejoin="round" fill="none" /></svg>,
  // Mobile
  <svg key="1" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><rect x="8" y="3" width="12" height="22" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" /><circle cx="14" cy="21" r="1" fill="#8159BB" /></svg>,
  // Tag / free
  <svg key="2" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M4 14L14 4h8v8L12 22a2 2 0 01-2.83 0L4 16.83A2 2 0 014 14z" stroke="#8159BB" strokeWidth="1.5" fill="none" /><circle cx="19" cy="9" r="1.5" fill="#8159BB" /></svg>,
];

function WhyStrikingly() {
  return (
    <section style={{ background: '#F4F6F8', padding: '60px 20px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading>{s.whyHeading}</SectionHeading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="why-grid">
          {whyStrikingly.map((item, i) => (
            <div
              key={item.title}
              style={{ background: '#ffffff', border: '1px solid #C6C9CD', borderRadius: 3, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              {whyIcons[i]}
              <strong style={{ color: '#4B5056', fontSize: 14, fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.title}</strong>
              <p style={{ color: '#636972', fontSize: 14, margin: 0, lineHeight: 1.6 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) { .why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ─── Section 8: FAQ ───────────────────────────────────────────────────────────

function FaqItem({ item, index, isOpen, onToggle }) {
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
            textAlign: 'left',
            cursor: 'pointer',
            fontFamily: '"Open Sans", sans-serif',
            fontWeight: 600,
            fontSize: 15,
            color: '#2E2E2F',
            textTransform: 'none',
            letterSpacing: 0,
            gap: 12,
          }}
        >
          <span>{item.q}</span>
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none"
            aria-hidden="true"
            style={{ flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
          >
            <path d="M3 6l5 5 5-5" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        style={{
          overflow: 'hidden',
          maxHeight: isOpen ? 600 : 0,
          transition: 'max-height 0.3s ease',
        }}
      >
        <div style={{ paddingBottom: 18 }}>
          {item.a.split('\n\n').map((para, pi) => (
            <p key={pi} style={{ color: '#636972', fontSize: 14, lineHeight: 1.7, margin: pi > 0 ? '12px 0 0' : 0 }}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section style={{ background: '#ffffff', padding: '60px 20px', borderTop: '1px solid #E2E4E7' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <SectionHeading>{s.faqHeading}</SectionHeading>
        <div>
          {faqItems.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 9: Closing CTA ───────────────────────────────────────────────────

function ClosingCTA() {
  return (
    <section style={{ background: '#ffffff', padding: '70px 20px', borderTop: '1px solid #E2E4E7', textAlign: 'center' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <h2 style={{ fontSize: 36, color: '#2E2E2F', marginBottom: 16 }}>{s.closingHeading}</h2>
        <p style={{ color: '#636972', fontSize: 16, marginBottom: 30, lineHeight: 1.6 }}>{s.closingSub}</p>
        <GradientButton href={AI_BUILDER_URL} size="large">{s.closingCta}</GradientButton>
      </div>
    </section>
  );
}

// ─── Section 10: Footer ───────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: '#2E2E2F', color: '#C6C9CD', padding: '50px 20px 30px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 30, marginBottom: 40 }} className="footer-grid">
          <div>
            <a href="/" aria-label="Strikingly home" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', marginBottom: 12 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect width="24" height="24" rx="5" fill="url(#footerLogoGrad)" />
                <path d="M7 17l4-5-4-5h3l4 5-4 5H7zm6 0l4-5-4-5h3l4 5-4 5h-3z" fill="white" />
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7671FF" />
                    <stop offset="100%" stopColor="#CB0C9F" />
                  </linearGradient>
                </defs>
              </svg>
              <span style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, fontSize: 15, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Strikingly</span>
            </a>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: '#C6C9CD', margin: 0, maxWidth: 220 }}>
              AI-powered website builder. Build any kind of site in seconds.
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p style={{ fontFamily: '"Josefin Sans", Poppins, sans-serif', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#ffffff', marginBottom: 12, marginTop: 0 }}>{col.heading}</p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} style={{ color: '#C6C9CD', fontSize: 13, textDecoration: 'none' }}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20, fontSize: 12, color: '#636972' }}>
          {s.footerCopyright}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

// ─── Page Root ────────────────────────────────────────────────────────────────

export default function GeneratorsHub() {
  return (
    <>
      <TopBar />
      <Breadcrumb />
      <main>
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
