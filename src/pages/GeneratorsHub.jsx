import React, { useState, useEffect, useRef, useCallback } from 'react';
import { strings } from '@/data/strings';
import { featuredGenerators, allGenerators } from '@/data/generators';
import {
  getCategoryIcon,
  SearchIcon,
  ChevronRightIcon,
  PlusIcon,
  HeroIllustration,
  SpeedIcon,
  MobileIcon,
  FreeIcon,
} from '@/components/Icons';

const s = strings.en;

/* ─── Top Bar ─── */
function TopBar() {
  return (
    <header style={{ background: '#fff', borderBottom: '1px solid #E2E4E7' }}>
      <div className="content-container" style={{ height: 56, display: 'flex', alignItems: 'center' }}>
        <a href="/" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: 'var(--color-heading)', letterSpacing: '0.02em' }}>
          {s.brand}
        </a>
      </div>
    </header>
  );
}

/* ─── Breadcrumb ─── */
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="content-container" style={{ paddingTop: 16, paddingBottom: 0 }}>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontFamily: 'var(--font-body)' }}>
        <li><a href="/" style={{ color: 'var(--color-body-text)' }}>{s.breadcrumb.home}</a></li>
        <li aria-hidden="true" style={{ color: '#C6C9CD' }}>&#62;</li>
        <li aria-current="page" style={{ color: 'var(--color-heading)', fontWeight: 600 }}>{s.breadcrumb.current}</li>
      </ol>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="section-gap-lg" style={{ background: 'linear-gradient(135deg, rgba(118,113,255,0.04) 0%, rgba(203,12,159,0.04) 100%)' }}>
      <div className="content-container" style={{ display: 'flex', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 400px', minWidth: 280 }}>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.15, color: 'var(--color-hero-heading)', marginBottom: 20 }}>
            <span style={{ display: 'block' }}>{s.hero.h1Line1}</span>
            <span className="ai-gradient-text" style={{ display: 'block' }}>{s.hero.h1Line2}</span>
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--color-body-text)', maxWidth: 480, marginBottom: 30 }}>
            {s.hero.subheadline}
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="/s/ai_site_builder" className="btn btn-lg btn-primary">{s.hero.ctaPrimary}</a>
            <a href="#all-generators" className="btn btn-lg btn-ghost">{s.hero.ctaSecondary}</a>
          </div>
        </div>
        <div style={{ flex: '1 1 320px', display: 'flex', justifyContent: 'center' }}>
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Generators ─── */
function FeaturedGenerators() {
  return (
    <section className="section-gap" id="featured">
      <div className="content-container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: 'var(--color-heading)', marginBottom: 10 }}>{s.featured.heading}</h2>
          <p style={{ color: 'var(--color-body-text)', fontSize: 15 }}>{s.featured.subheading}</p>
        </div>
        <div className="grid-3">
          {featuredGenerators.map((gen) => (
            <a key={gen.slug} href={`/generators/${gen.slug}`} className="generator-card" style={{ gap: 10 }}>
              <h3 style={{ fontSize: 16, textTransform: 'none', color: 'var(--color-hero-heading)' }}>{gen.name}</h3>
              <p style={{ fontSize: 14, color: 'var(--color-body-text)', margin: 0, flex: 1 }}>{gen.description}</p>
              <span className="tag-ghost">{gen.category}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Browse by Category ─── */
function BrowseByCategory() {
  return (
    <section className="section-gap" style={{ background: 'var(--color-light-bg)' }} id="browse-by-category">
      <div className="content-container">
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: 'var(--color-heading)', marginBottom: 30, textAlign: 'center' }}>{s.categories.heading}</h2>
        <div className="grid-3">
          {s.categories.items.map((cat) => (
            <a key={cat.slug} href={`#${cat.slug}`} className="category-card" style={{ gap: 12 }}>
              <div style={{ marginBottom: 4 }}>{getCategoryIcon(cat.slug)}</div>
              <h3 style={{ fontSize: 15, color: 'var(--color-hero-heading)', marginBottom: 4 }}>{cat.name}</h3>
              <p style={{ fontSize: 14, color: 'var(--color-body-text)', margin: 0, flex: 1 }}>{cat.description}</p>
              <div style={{ display: 'flex', justifyContent: 'flex-end', color: 'var(--color-brand-purple)' }}>
                <ChevronRightIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── All Generators Directory ─── */
function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const containerRef = useRef(null);

  const categories = Object.values(allGenerators);
  const INITIAL_VISIBLE = 6;

  const totalGenerators = categories.reduce((sum, cat) => sum + cat.generators.length, 0);

  // Initialize collapsed state after mount (progressive enhancement)
  useEffect(() => {
    const initial = {};
    categories.forEach((cat) => {
      if (cat.generators.length > INITIAL_VISIBLE) {
        initial[cat.id] = false;
      }
    });
    setExpandedSections(initial);
  }, []);

  const toggleSection = useCallback((sectionId) => {
    setExpandedSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  }, []);

  const handleSearch = useCallback((e) => {
    setSearchQuery(e.target.value.toLowerCase());
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  // Compute visible generators per category
  const getVisibleGenerators = useCallback((cat) => {
    const generators = cat.generators.filter((gen) => {
      if (!searchQuery) return true;
      const q = searchQuery;
      return (
        gen.name.toLowerCase().includes(q) ||
        gen.description.toLowerCase().includes(q) ||
        cat.name.toLowerCase().includes(q)
      );
    });
    return generators;
  }, [searchQuery]);

  const getMatchCount = useCallback(() => {
    if (!searchQuery) return totalGenerators;
    let count = 0;
    categories.forEach((cat) => {
      cat.generators.forEach((gen) => {
        const q = searchQuery;
        if (
          gen.name.toLowerCase().includes(q) ||
          gen.description.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q)
        ) {
          count++;
        }
      });
    });
    return count;
  }, [searchQuery, categories, totalGenerators]);

  const matchCount = getMatchCount();

  return (
    <section className="section-gap-lg" id="all-generators">
      <div className="content-container">
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: 'var(--color-heading)', marginBottom: 10 }}>{s.directory.heading}</h2>
          <p style={{ color: 'var(--color-body-text)', fontSize: 15 }}>{s.directory.subheading}</p>
        </div>

        {/* Search */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 40, gap: 8 }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 480 }}>
            <div style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
              <SearchIcon />
            </div>
            <input
              type="text"
              className="search-input"
              placeholder={s.directory.searchPlaceholder}
              aria-label={s.directory.searchLabel}
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          {searchQuery && (
            <span style={{ fontSize: 13, color: 'var(--color-body-text)' }}>
              {s.directory.resultMatch(matchCount)}
            </span>
          )}
        </div>

        {/* Empty state */}
        {searchQuery && matchCount === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <p style={{ fontSize: 18, fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--color-heading)', marginBottom: 8, textTransform: 'uppercase' }}>
              {s.directory.emptyHeading}
            </p>
            <p style={{ color: 'var(--color-body-text)', marginBottom: 20 }}>
              {s.directory.emptySubtext}
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={clearSearch} className="btn btn-ghost" style={{ height: 36 }}>Clear search</button>
              <a href="/s/ai_site_builder" className="btn btn-primary" style={{ height: 36 }}>{s.directory.emptyCta}</a>
            </div>
          </div>
        )}

        {/* Categories */}
        <div ref={containerRef}>
          {categories.map((cat) => {
            const visibleGens = getVisibleGenerators(cat);
            if (searchQuery && visibleGens.length === 0) return null;

            const isExpanded = expandedSections[cat.id] !== false || searchQuery;
            const showToggle = cat.generators.length > INITIAL_VISIBLE && !searchQuery;
            const displayGens = searchQuery
              ? visibleGens
              : isExpanded
                ? visibleGens
                : visibleGens.slice(0, INITIAL_VISIBLE);

            return (
              <div key={cat.id} id={cat.id} style={{ marginBottom: 40 }}>
                <h3 style={{ fontSize: 20, color: 'var(--color-heading)', marginBottom: 6 }}>{cat.name}</h3>
                <p style={{ fontSize: 14, color: 'var(--color-body-text)', marginBottom: 20 }}>{cat.description}</p>

                <div className="grid-3">
                  {displayGens.map((gen) => (
                    <a key={gen.slug} href={`/generators/${gen.slug}`} className="generator-card" style={{ gap: 8 }}>
                      <div style={{ marginBottom: 4 }}>{getCategoryIcon(cat.id)}</div>
                      <h4 style={{ fontSize: 15, fontWeight: 700, fontFamily: 'var(--font-heading)', textTransform: 'none', color: 'var(--color-hero-heading)', margin: 0 }}>
                        {gen.name}
                      </h4>
                      <p style={{ fontSize: 14, color: 'var(--color-body-text)', margin: 0 }}>{gen.description}</p>
                    </a>
                  ))}
                </div>

                {/* Show all / fewer toggle */}
                {showToggle && (
                  <button
                    className="btn-show-all"
                    onClick={() => toggleSection(cat.id)}
                    aria-expanded={expandedSections[cat.id] !== false}
                    aria-controls={`grid-${cat.id}`}
                  >
                    {expandedSections[cat.id] !== false
                      ? s.directory.showLess
                      : s.directory.showAll(cat.generators.length)}
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

/* ─── How It Works ─── */
function HowItWorks() {
  return (
    <section className="section-gap" style={{ background: 'var(--color-light-bg)' }}>
      <div className="content-container">
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: 'var(--color-heading)', marginBottom: 40, textAlign: 'center' }}>
          {s.howItWorks.heading}
        </h2>
        <div className="grid-3">
          {s.howItWorks.steps.map((step) => (
            <div key={step.number} style={{ textAlign: 'center', padding: '0 10px' }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%', background: 'var(--color-brand-purple)',
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20, margin: '0 auto 16px'
              }}>
                {step.number}
              </div>
              <h3 style={{ fontSize: 15, color: 'var(--color-hero-heading)', marginBottom: 8 }}>{step.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--color-body-text)', margin: 0 }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Strikingly ─── */
function WhyStrikingly() {
  const icons = [SpeedIcon, MobileIcon, FreeIcon];
  return (
    <section className="section-gap">
      <div className="content-container">
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: 'var(--color-heading)', marginBottom: 40, textAlign: 'center' }}>
          {s.whyStrikingly.heading}
        </h2>
        <div className="grid-3">
          {s.whyStrikingly.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} style={{ textAlign: 'center', padding: '0 10px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon />
                </div>
                <h3 style={{ fontSize: 15, color: 'var(--color-hero-heading)', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--color-body-text)', margin: 0 }}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ Accordion ─── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = useCallback((index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }, []);

  return (
    <section className="section-gap" style={{ background: 'var(--color-light-bg)' }}>
      <div className="content-container" style={{ maxWidth: 800 }}>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: 'var(--color-heading)', marginBottom: 30, textAlign: 'center' }}>
          {s.faq.heading}
        </h2>
        <div>
          {s.faq.items.map((faq, i) => {
            const isOpen = openIndex === i;
            const contentId = `faq-content-${i}`;
            return (
              <div key={i}>
                <button
                  className="faq-button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span style={{ textAlign: 'start' }}>{faq.question}</span>
                  <PlusIcon />
                </button>
                <div
                  id={contentId}
                  className="faq-content"
                  data-collapsed={String(!isOpen)}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                  <div style={{ padding: '0 0 20px' }}>
                    {faq.answer.map((para, j) => (
                      <p key={j} style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--color-body-text)', margin: '0 0 12px' }}>{para}</p>
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

/* ─── Closing CTA ─── */
function ClosingCta() {
  return (
    <section className="section-gap-lg">
      <div className="content-container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', color: 'var(--color-heading)', marginBottom: 12 }}>
          {s.closingCta.heading}
        </h2>
        <p style={{ fontSize: 16, color: 'var(--color-body-text)', marginBottom: 30, maxWidth: 480, marginInline: 'auto' }}>
          {s.closingCta.sub}
        </p>
        <a href="/s/ai_site_builder" className="btn btn-lg btn-primary">
          {s.closingCta.button}
        </a>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer style={{ background: 'var(--color-light-bg)', borderTop: '1px solid var(--color-divider)', padding: '40px 0 30px' }}>
      <div className="content-container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginBottom: 30 }}>
          <div style={{ flex: '1 1 200px', minWidth: 160 }}>
            <a href="/" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, color: 'var(--color-heading)', display: 'inline-block', marginBottom: 12 }}>
              {s.brand}
            </a>
          </div>
          {s.footer.columns.map((col, i) => (
            <div key={i} style={{ flex: '1 1 140px', minWidth: 120 }}>
              <h4 style={{ fontSize: 13, color: 'var(--color-heading)', marginBottom: 12, letterSpacing: '0.04em' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} style={{ fontSize: 13, color: 'var(--color-body-text)' }}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid var(--color-divider)', paddingTop: 20, fontSize: 13, color: 'var(--color-body-text)' }}>
          {s.footer.copyright}
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function GeneratorsHub() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-white)', color: 'var(--color-body-text)' }}>
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
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
