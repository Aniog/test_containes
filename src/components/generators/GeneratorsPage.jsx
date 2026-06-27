import { useState, useEffect, useRef, useCallback } from 'react';
import strings from '../../data/strings';
import {
  generators,
  featuredGenerators,
  categories,
  getGeneratorsByCategory,
  searchGenerators,
} from '../../data/generators';
import {
  HeroIllustration,
  CategoryIcon,
  CategoryThumbnail,
  ArrowRightIcon,
  SearchIcon,
  ChevronIcon,
  HowItWorksIcon,
  WhyIcon,
  SparkleIcon,
} from './Illustrations';

const s = strings.en;
const AI_SITE_BUILDER = '/s/ai_site_builder';
const INITIAL_VISIBLE = 6; // cards shown before "Show all"

/* ═══════════════════════════════════════════════════════════════
   Section 0 – Top Bar
   ═══════════════════════════════════════════════════════════════ */
function TopBar() {
  return (
    <header style={{ background: '#FFFFFF', borderBottom: '1px solid var(--color-divider)' }}>
      <div className="content-container" style={{ display: 'flex', alignItems: 'center', height: 56 }}>
        <a href="/" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, color: 'var(--color-heading)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <SparkleIcon />
          <span>strikingly</span>
          <span className="ai-gradient-text">AI</span>
        </a>
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Section 1 – Breadcrumb
   ═══════════════════════════════════════════════════════════════ */
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="content-container" style={{ paddingTop: 20, paddingBottom: 0 }}>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontFamily: 'var(--font-body)', color: 'var(--color-body-text)' }}>
        <li><a href="/" style={{ color: 'var(--color-brand-purple)' }}>Strikingly</a></li>
        <li aria-hidden="true" style={{ color: 'var(--color-card-border)' }}>/</li>
        <li aria-current="page">AI Generators</li>
      </ol>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Section 2 – Hero
   ═══════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="content-container" style={{ paddingBlock: '60px 40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: 40, alignItems: 'center' }}
        className="hero-grid"
      >
        {/* Left column */}
        <div style={{ flex: 1, minWidth: 0, maxWidth: 560 }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: 1.15, marginBottom: 20, color: 'var(--color-hero-h1)' }}>
            <span style={{ display: 'block', color: 'var(--color-hero-h1)' }}>{s.heroLine1}</span>
            <span className="ai-gradient-text" style={{ display: 'block' }}>{s.heroLine2}</span>
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 30, color: 'var(--color-body-text)' }}>
            {s.heroSub}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <a href={AI_SITE_BUILDER} className="btn-base btn-primary btn-lg">
              {s.heroCtaPrimary}
            </a>
            <a href="#all-generators" className="btn-base btn-ghost btn-lg">
              {s.heroCtaSecondary}
            </a>
          </div>
        </div>

        {/* Right column – illustration */}
        <div style={{ flex: '0 0 auto', maxWidth: 480, width: '100%' }}>
          <HeroIllustration />
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hero-grid {
            flex-direction: row !important;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Section 3 – Featured Generators
   ═══════════════════════════════════════════════════════════════ */
function FeaturedGenerators() {
  return (
    <section className="section-block" style={{ background: 'var(--color-light-bg)' }}>
      <div className="content-container">
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', marginBottom: 8 }}>{s.featuredHeading}</h2>
        <p style={{ marginBottom: 30, fontSize: 15, color: 'var(--color-body-text)' }}>{s.featuredSub}</p>

        <div className="grid-3">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card-base"
              style={{ display: 'flex', flexDirection: 'column', gap: 10, textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
                <h3 style={{ fontSize: 16, lineHeight: 1.3, textTransform: 'none' }}>{gen.name}</h3>
                <span className="ghost-tag" style={{ flexShrink: 0 }}>{gen.categoryLabel}</span>
              </div>
              <p style={{ fontSize: 14, color: 'var(--color-body-text)', lineHeight: 1.5 }}>{gen.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Section 4 – Browse by Category
   ═══════════════════════════════════════════════════════════════ */
function BrowseByCategory() {
  return (
    <section className="section-block">
      <div className="content-container">
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', marginBottom: 30 }}>{s.categoryHeading}</h2>

        <div className="grid-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="card-base"
              style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ flexShrink: 0 }}>
                <CategoryIcon category={cat.id} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: 15, lineHeight: 1.3, marginBottom: 4 }}>{cat.name}</h3>
                <p style={{ fontSize: 13, color: 'var(--color-body-text)', lineHeight: 1.4 }}>{cat.description}</p>
              </div>
              <ArrowRightIcon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CategorySubsection – used inside All Generators
   ═══════════════════════════════════════════════════════════════ */
function CategorySubsection({ catId, catName, catDescription, items, isSearching }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = items.length > INITIAL_VISIBLE;
  const visibleItems = expanded || isSearching || !hasMore ? items : items.slice(0, INITIAL_VISIBLE);

  return (
    <div id={catId} style={{ scrollMarginTop: 80 }}>
      <h3 style={{ fontSize: 20, marginBottom: 4, marginTop: 30 }}>{catName}</h3>
      <p style={{ fontSize: 14, color: 'var(--color-body-text)', marginBottom: 20 }}>{catDescription}</p>

      {/* Always render ALL cards in DOM (for no-JS + SEO), hide extras with CSS */}
      <div className="grid-3">
        {items.map((gen, i) => {
          const isHidden = !isSearching && hasMore && !expanded && i >= INITIAL_VISIBLE;
          return (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="card-base"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                textDecoration: 'none',
                color: 'inherit',
                /* hidden cards stay in DOM but are visually collapsed when JS is active */
              }}
              data-index={i}
              data-hidden={isHidden ? 'true' : undefined}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <CategoryThumbnail category={gen.category} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.3, color: 'var(--color-heading)', margin: 0, textTransform: 'none', fontFamily: 'var(--font-heading)' }}>
                    {gen.name}
                  </h4>
                </div>
              </div>
              <p style={{ fontSize: 13, color: 'var(--color-body-text)', lineHeight: 1.4 }}>{gen.description}</p>
            </a>
          );
        })}
      </div>

      {hasMore && !isSearching && (
        <div style={{ marginTop: 16, textAlign: 'center' }}>
          <button
            type="button"
            className="btn-base btn-ghost"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={`${catId}-grid`}
          >
            {expanded ? s.collapse() : s.showAll(items.length)}
            <ChevronIcon expanded={expanded} />
          </button>
        </div>
      )}

      <style>{`
        /* Progressive enhancement: hide cards beyond INITIAL_VISIBLE when JS is active */
        [data-hidden="true"] {
          max-height: 0 !important;
          opacity: 0 !important;
          overflow: hidden !important;
          padding: 0 !important;
          margin: 0 !important;
          border: 0 !important;
          pointer-events: none;
          position: absolute;
          visibility: hidden;
        }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Section 5 – All Generators Directory
   ═══════════════════════════════════════════════════════════════ */
function AllGenerators() {
  const [query, setQuery] = useState('');
  const grouped = getGeneratorsByCategory();

  const isSearching = query.trim().length > 0;
  const matchingResults = isSearching ? searchGenerators(query) : generators;
  const matchingSlugs = new Set(matchingResults.map((g) => g.slug));

  // Determine which categories have matches
  const visibleCategories = categories.filter((cat) => {
    if (!isSearching) return true;
    return grouped[cat.id].some((g) => matchingSlugs.has(g.slug));
  });

  return (
    <section id="all-generators" className="section-block" style={{ background: 'var(--color-light-bg)' }}>
      <div className="content-container">
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', marginBottom: 8 }}>{s.directoryHeading}</h2>
        <p style={{ fontSize: 15, color: 'var(--color-body-text)', marginBottom: 24 }}>{s.directorySub}</p>

        {/* Search */}
        <div style={{ position: 'relative', marginBottom: 20, maxWidth: 480 }}>
          <SearchIcon />
          <input
            type="search"
            className="search-input"
            placeholder={s.searchPlaceholder}
            aria-label={s.searchAriaLabel}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Result count */}
        {isSearching && (
          <p style={{ fontSize: 14, color: 'var(--color-body-text)', marginBottom: 20 }}>
            {s.matchCount(matchingResults.length)}
          </p>
        )}

        {/* Categories */}
        {visibleCategories.length > 0 ? (
          visibleCategories.map((cat) => {
            const items = isSearching
              ? grouped[cat.id].filter((g) => matchingSlugs.has(g.slug))
              : grouped[cat.id];

            return (
              <CategorySubsection
                key={cat.id}
                catId={cat.id}
                catName={cat.name}
                catDescription={cat.description}
                items={items}
                isSearching={isSearching}
              />
            );
          })
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-heading)', marginBottom: 8 }}>{s.noResultsHeading}</p>
            <p style={{ fontSize: 14, color: 'var(--color-body-text)', marginBottom: 16 }}>
              {s.noResultsCta}
            </p>
            <button
              type="button"
              className="btn-base btn-ghost"
              onClick={() => setQuery('')}
              style={{ marginBottom: 10 }}
            >
              Clear search
            </button>
            <div>
              <a href={AI_SITE_BUILDER} style={{ fontSize: 14, color: 'var(--color-brand-purple)' }}>
                {s.noResultsCta}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Section 6 – How It Works
   ═══════════════════════════════════════════════════════════════ */
function HowItWorks() {
  return (
    <section className="section-block">
      <div className="content-container">
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', marginBottom: 30, textAlign: 'center' }}>{s.howHeading}</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 30 }}
          className="how-steps-grid"
        >
          {s.howSteps.map((step, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '0 10px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, #7671FF, #CB0C9F)', color: '#FFFFFF', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, marginBottom: 16 }}>
                {i + 1}
              </div>
              <h3 style={{ fontSize: 16, marginBottom: 8 }}>{step.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--color-body-text)', lineHeight: 1.5, maxWidth: 300, marginInline: 'auto' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .how-steps-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Section 7 – Why Strikingly
   ═══════════════════════════════════════════════════════════════ */
function WhyStrikingly() {
  return (
    <section className="section-block" style={{ background: 'var(--color-light-bg)' }}>
      <div className="content-container">
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', marginBottom: 30, textAlign: 'center' }}>{s.whyHeading}</h2>

        <div className="grid-3">
          {s.whyReasons.map((reason, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '0 10px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <WhyIcon index={i} />
              </div>
              <h3 style={{ fontSize: 16, marginBottom: 8 }}>{reason.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--color-body-text)', lineHeight: 1.5, maxWidth: 320, marginInline: 'auto' }}>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Section 8 – FAQ
   ═══════════════════════════════════════════════════════════════ */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="section-block">
      <div className="content-container" style={{ maxWidth: 800 }}>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', marginBottom: 30, textAlign: 'center' }}>{s.faqHeading}</h2>

        <div>
          {s.faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            const contentId = `faq-content-${i}`;

            return (
              <div key={i}>
                <button
                  className="faq-btn"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span>{item.q}</span>
                  <ChevronIcon expanded={isOpen} />
                </button>
                <div
                  id={contentId}
                  className="faq-content"
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  style={{
                    maxHeight: isOpen ? 300 : 0,
                    opacity: isOpen ? 1 : 0,
                    paddingBlock: isOpen ? '0 20px' : '0 0',
                  }}
                >
                  <div className="faq-content-inner">
                    <p style={{ fontSize: 14, color: 'var(--color-body-text)', lineHeight: 1.7 }}>{item.a}</p>
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

/* ═══════════════════════════════════════════════════════════════
   Section 9 – Closing CTA
   ═══════════════════════════════════════════════════════════════ */
function ClosingCTA() {
  return (
    <section className="section-block" style={{ textAlign: 'center' }}>
      <div className="content-container">
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', marginBottom: 10 }}>{s.closingHeading}</h2>
        <p style={{ fontSize: 16, color: 'var(--color-body-text)', marginBottom: 24 }}>{s.closingSub}</p>
        <a href={AI_SITE_BUILDER} className="btn-base btn-primary btn-lg" style={{ fontSize: 16, paddingInline: 32 }}>
          {s.closingCta}
        </a>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Section 10 – Footer
   ═══════════════════════════════════════════════════════════════ */
function Footer() {
  const linkGroups = s.footerLinks;

  return (
    <footer style={{ background: '#FFFFFF', borderTop: '1px solid var(--color-divider)', paddingBlock: '40px 30px' }}>
      <div className="content-container">
        {/* Footer grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 30, marginBottom: 30 }}
          className="footer-grid"
        >
          {/* Logo column */}
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: 'var(--color-heading)', display: 'flex', alignItems: 'center', gap: 4, marginBottom: 10 }}>
              <SparkleIcon />
              <span>strikingly</span>
              <span className="ai-gradient-text">AI</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--color-body-text)', maxWidth: 240 }}>
              AI-powered website creation. Describe your site and get online in seconds.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(linkGroups).map(([key, links]) => (
            <div key={key}>
              <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, color: 'var(--color-heading)' }}>
                {key === 'product' ? s.footerProduct :
                 key === 'company' ? s.footerCompany :
                 key === 'resources' ? s.footerResources :
                 s.footerLegal}
              </h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} style={{ fontSize: 13, color: 'var(--color-body-text)', textDecoration: 'none' }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid var(--color-divider)', paddingTop: 20, textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: 'var(--color-body-text)' }}>{s.footerCopyright}</p>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: 2fr repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Main Page Component
   ═══════════════════════════════════════════════════════════════ */
export default function GeneratorsPage() {
  return (
    <>
      {/* Skip link */}
      <a href="#all-generators" className="skip-link">Skip to generators</a>

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
