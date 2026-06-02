

import React, { useState, useEffect, useCallback } from 'react';
import strings from '@/lib/strings.en.js';

// Simple SVG icons for category cards (inline SVGs, aria-hidden)
const CategoryIcon = ({ type }) => {
  const icons = {
    website: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="32" height="28" rx="3" stroke="#8159BB" strokeWidth="2" />
        <path d="M4 14h32M14 6v28" stroke="#8159BB" strokeWidth="1.5" />
        <circle cx="12" cy="10" r="1.5" fill="#8159BB" />
        <circle cx="17" cy="10" r="1.5" fill="#8159BB" />
        <circle cx="22" cy="10" r="1.5" fill="#8159BB" />
      </svg>
    ),
    landing: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="32" height="28" rx="3" stroke="#8159BB" strokeWidth="2" />
        <path d="M4 12h32" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="8" y="16" width="24" height="4" rx="1" fill="#8159BB" opacity="0.2" />
        <rect x="8" y="22" width="16" height="3" rx="1" fill="#8159BB" opacity="0.15" />
        <rect x="8" y="27" width="20" height="2" rx="1" fill="#8159BB" opacity="0.1" />
      </svg>
    ),
    portfolio: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="22" y="4" width="14" height="12" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="4" y="20" width="14" height="16" rx="2" stroke="#8159BB" strokeWidth="2" />
        <rect x="22" y="20" width="14" height="16" rx="2" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    blog: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="28" height="32" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="12" y1="12" x2="28" y2="12" stroke="#8159BB" strokeWidth="1.5" opacity="0.5" />
        <line x1="12" y1="17" x2="24" y2="17" stroke="#8159BB" strokeWidth="1.5" opacity="0.5" />
        <line x1="12" y1="22" x2="26" y2="22" stroke="#8159BB" strokeWidth="1.5" opacity="0.5" />
        <line x1="12" y1="27" x2="20" y2="27" stroke="#8159BB" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
    store: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M6 14h28l-2 16H8L6 14z" stroke="#8159BB" strokeWidth="2" />
        <path d="M12 14V10a4 4 0 014-4h8a4 4 0 014 4v4" stroke="#8159BB" strokeWidth="2" />
        <circle cx="16" cy="22" r="2" fill="#8159BB" opacity="0.3" />
        <circle cx="24" cy="22" r="2" fill="#8159BB" opacity="0.3" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="14" stroke="#8159BB" strokeWidth="2" />
        <path d="M13 20h14" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 13v14" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 15l10 10M25 15L15 25" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  };
  return icons[type] || icons.website;
};

// Hero inline SVG illustration
const HeroIllustration = () => (
  <svg width="480" height="360" viewBox="0 0 480 360" fill="none" aria-hidden="true" style={{ width: '100%', maxWidth: '480px', height: 'auto' }}>
    <rect x="80" y="20" width="320" height="240" rx="8" stroke="#C6C9CD" strokeWidth="2" fill="white" />
    <rect x="80" y="20" width="320" height="40" rx="8" fill="#F4F6F8" />
    <rect x="96" y="32" width="60" height="16" rx="3" fill="#8159BB" opacity="0.3" />
    <rect x="164" y="32" width="40" height="16" rx="3" fill="#C6C9CD" opacity="0.5" />
    <rect x="212" y="32" width="40" height="16" rx="3" fill="#C6C9CD" opacity="0.5" />
    <circle cx="380" cy="40" r="14" fill="url(#hero-avatar-grad)" opacity="0.6" />
    <rect x="96" y="76" width="288" height="100" rx="6" fill="#F4F6F8" />
    <rect x="112" y="92" width="200" height="12" rx="3" fill="#C6C9CD" opacity="0.6" />
    <rect x="112" y="110" width="160" height="12" rx="3" fill="#C6C9CD" opacity="0.4" />
    <rect x="112" y="128" width="240" height="12" rx="3" fill="#C6C9CD" opacity="0.4" />
    <rect x="112" y="146" width="120" height="12" rx="3" fill="#C6C9CD" opacity="0.3" />
    <rect x="96" y="190" width="136" height="54" rx="6" fill="#F4F6F8" />
    <rect x="248" y="190" width="136" height="54" rx="6" fill="#F4F6F8" />
    <rect x="112" y="206" width="80" height="10" rx="3" fill="#C6C9CD" opacity="0.5" />
    <rect x="112" y="222" width="100" height="10" rx="3" fill="#C6C9CD" opacity="0.3" />
    <rect x="264" y="206" width="80" height="10" rx="3" fill="#C6C9CD" opacity="0.5" />
    <rect x="264" y="222" width="100" height="10" rx="3" fill="#C6C9CD" opacity="0.3" />
    <defs>
      <linearGradient id="hero-avatar-grad" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#7671FF" />
        <stop offset="1" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
  </svg>
);

// Chevron icon for FAQ
const ChevronDown = ({ open }) => (
  <span className={`faq-icon${open ? ' open' : ''}`} aria-hidden="true">+</span>
);

// Search icon
const SearchIcon = () => (
  <span className="search-icon" aria-hidden="true">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </span>
);

// Arrow right icon
const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ========================
// Generator Card
// ========================
const GeneratorCard = ({ generator, showTag, categoryLabel }) => (
  <a
    href={`/generators/${generator.slug}`}
    className="card"
    style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
  >
    <div style={{ fontWeight: 700, fontSize: '14px', color: '#2E2E2F', marginBlockEnd: '5px' }}>
      {generator.name}
    </div>
    <div style={{ fontSize: '13px', color: '#636972', lineHeight: 1.4, marginBlockEnd: showTag ? '10px' : 0 }}>
      {generator.desc}
    </div>
    {showTag && categoryLabel && (
      <span className="tag">{categoryLabel}</span>
    )}
  </a>
);

// ========================
// Section Layout Helper
// ========================
const SectionHeader = ({ title, subtitle }) => (
  <div style={{ textAlign: 'center', marginBlockEnd: '30px' }}>
    <h2 className="section-title">{title}</h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </div>
);

// ========================
// Section 0: Top Bar
// ========================
const TopBar = () => (
  <header
    style={{
      background: 'var(--white)',
      borderBottom: '1px solid var(--divider)',
      paddingBlock: '10px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}
  >
    <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
      <a href="/" style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '18px', color: '#2E2E2F', textDecoration: 'none' }}>
        {strings.logo}
      </a>
    </div>
  </header>
);

// ========================
// Section 1: Breadcrumb
// ========================
const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" style={{ paddingBlock: '10px' }}>
    <div className="container">
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--body-text)' }}>
        <li><a href="/" style={{ color: 'var(--body-text)', textDecoration: 'none' }}>{strings.breadcrumbHome}</a></li>
        <li aria-hidden="true" style={{ color: '#C6C9CD' }}>&gt;</li>
        <li style={{ color: 'var(--body-text)' }}>{strings.breadcrumbCurrent}</li>
      </ol>
    </div>
  </nav>
);

// ========================
// Section 2: Hero
// ========================
const Hero = () => (
  <section style={{
    paddingBlock: '70px',
    background: 'radial-gradient(ellipse at 70% 30%, rgba(118, 113, 255, 0.04) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(203, 12, 159, 0.03) 0%, transparent 60%)',
  }}>
    <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
      <div style={{ flex: '1 1 400px', minWidth: 0 }}>
        <h1 style={{ margin: 0 }}>
          <span className="heading-font" style={{ display: 'block', fontSize: 'clamp(28px, 5vw, 44px)', color: 'var(--hero-heading)' }}>
            {strings.heroLine1}
          </span>
          <span className="ai-gradient-text heading-font" style={{ display: 'block', fontSize: 'clamp(28px, 5vw, 44px)' }}>
            {strings.heroLine2}
          </span>
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--body-text)', maxWidth: '520px', marginBlockStart: '15px', marginBlockEnd: '25px', lineHeight: 1.5 }}>
          {strings.heroSub}
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">{strings.heroPrimaryCTA}</a>
          <a href="#all-generators" className="btn btn-ghost btn-lg">{strings.heroSecondaryCTA}</a>
        </div>
      </div>
      <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', minWidth: 0 }}>
        <HeroIllustration />
      </div>
    </div>
  </section>
);

// ========================
// Section 3: Featured Generators
// ========================
const FeaturedGenerators = () => (
  <section style={{ paddingBlock: '40px' }} className="section-gap">
    <div className="container">
      <SectionHeader title={strings.featuredTitle} subtitle={strings.featuredSub} />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
      }}
      className="featured-grid">
        {strings.featuredGenerators.map((gen) => (
          <GeneratorCard key={gen.slug} generator={gen} showTag={true} categoryLabel={gen.category} />
        ))}
      </div>
    </div>
  </section>
);

// ========================
// Section 4: Browse by Category
// ========================
const BrowseByCategory = () => (
  <section style={{ paddingBlock: '40px', background: 'var(--light-bg)' }}>
    <div className="container">
      <SectionHeader title={strings.browseTitle} />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
      }}
      className="browse-grid">
        {strings.categories.map((cat) => (
          <a
            key={cat.slug}
            href={`#${cat.slug}`}
            className="card"
            style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ flexShrink: 0 }}>
              <CategoryIcon type={cat.icon} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="heading-font" style={{ fontSize: '14px', color: 'var(--headings)', marginBlockEnd: '3px' }}>
                {cat.name}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--body-text)', lineHeight: 1.4 }}>
                {cat.desc}
              </div>
            </div>
            <div style={{ flexShrink: 0 }}>
              <ArrowRight />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

// ========================
// Section 5: All Generators
// ========================
const AllGenerators = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [jsEnabled, setJsEnabled] = useState(false);

  useEffect(() => {
    setJsEnabled(true);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const toggleSection = (slug) => {
    setExpandedSections((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const getFilteredCategories = useCallback(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return strings.allGenerators;

    const filtered = {};
    Object.entries(strings.allGenerators).forEach(([slug, catData]) => {
      const matchingGenerators = catData.generators.filter((gen) =>
        gen.name.toLowerCase().includes(q) ||
        gen.desc.toLowerCase().includes(q) ||
        catData.name.toLowerCase().includes(q)
      );
      if (matchingGenerators.length > 0) {
        filtered[slug] = { ...catData, generators: matchingGenerators };
      }
    });
    return filtered;
  }, [searchQuery]);

  const filteredCategories = getFilteredCategories();
  const totalMatches = Object.values(filteredCategories).reduce(
    (sum, cat) => sum + cat.generators.length, 0
  );
  const hasSearch = searchQuery.trim().length > 0;
  const noResults = hasSearch && totalMatches === 0;

  const SHOW_INITIAL = 6;

  return (
    <section id="all-generators" style={{ paddingBlock: '40px' }} className="section-gap">
      <div className="container">
        <SectionHeader title={strings.allTitle} subtitle={strings.allSub} />

        <div className="search-wrapper" style={{ marginBlockEnd: '25px' }}>
          <SearchIcon />
          <input
            type="text"
            className="search-input"
            placeholder={strings.searchPlaceholder}
            aria-label={strings.searchLabel}
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {hasSearch && (
          <div style={{ fontSize: '13px', color: 'var(--body-text)', marginBlockEnd: '15px' }}>
            {totalMatches} {totalMatches === 1 ? 'generator matches' : 'generators match'}
          </div>
        )}

        {noResults && (
          <div className="empty-state">
            <p style={{ marginBlockEnd: '10px' }}>{strings.noResults}</p>
            <button className="btn btn-ghost" onClick={clearSearch} style={{ marginBlockEnd: '15px' }}>
              {strings.clearSearch}
            </button>
            <p style={{ fontSize: '13px' }}>
              <a href="/s/ai_site_builder" style={{ color: 'var(--brand-purple)', textDecoration: 'underline' }}>
                {strings.noResultsHint}
              </a>
            </p>
          </div>
        )}

        {!noResults && Object.entries(filteredCategories).map(([slug, catData]) => {
          const totalGens = catData.generators.length;
          const isExpanded = expandedSections[slug] || false;
          const showToggle = jsEnabled && totalGens > SHOW_INITIAL;
          const displayGens = (!jsEnabled || isExpanded || hasSearch) ? catData.generators : catData.generators.slice(0, SHOW_INITIAL);
          const hiddenCount = totalGens - SHOW_INITIAL;

          return (
            <div key={slug} id={slug} className="category-subsection">
              <h3>{catData.name}</h3>
              <div style={{ fontSize: '13px', color: 'var(--body-text)', marginBlockStart: '5px', marginBlockEnd: '15px' }}>
                {catData.desc}
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
              }}
              className="all-generators-grid">
                {displayGens.map((gen) => (
                  <GeneratorCard key={gen.slug} generator={gen} showTag={false} />
                ))}
              </div>
              {showToggle && !hasSearch && (
                <button
                  className="show-all-toggle js-enabled"
                  onClick={() => toggleSection(slug)}
                  aria-expanded={isExpanded}
                  aria-controls={`${slug}-list`}
                >
                  {isExpanded ? strings.showLess : `${strings.showAll} ${hiddenCount} ${catData.name.toLowerCase()} generators`}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

// ========================
// Section 6: How It Works
// ========================
const HowItWorks = () => (
  <section style={{ paddingBlock: '40px', background: 'var(--light-bg)' }} className="section-gap">
    <div className="container">
      <SectionHeader title={strings.howTitle} />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px',
      }}
      className="how-grid">
        {strings.howSteps.map((step, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--brand-purple)',
              color: 'var(--white)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--heading-font)',
              fontWeight: 700,
              fontSize: '20px',
              marginBlockEnd: '15px',
            }}>
              {idx + 1}
            </div>
            <div className="heading-font" style={{ fontSize: '14px', color: 'var(--headings)', marginBlockEnd: '8px' }}>
              {step.title}
            </div>
            <p style={{ fontSize: '13px', color: 'var(--body-text)', lineHeight: 1.5, margin: 0 }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ========================
// Section 7: Why Strikingly
// ========================
const WhyStrikingly = () => (
  <section style={{ paddingBlock: '40px' }} className="section-gap">
    <div className="container">
      <SectionHeader title={strings.whyTitle} />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px',
      }}
      className="why-grid">
        {strings.whyItems.map((item, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <div style={{ marginBlockEnd: '12px', color: 'var(--brand-purple)' }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" style={{ display: 'inline' }}>
                {idx === 0 && <><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" /><path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>}
                {idx === 1 && <><rect x="6" y="3" width="20" height="26" rx="3" stroke="currentColor" strokeWidth="2" /><line x1="13" y1="24" x2="19" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>}
                {idx === 2 && <><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" /><path d="M16 10v12M10 16h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>}
              </svg>
            </div>
            <div className="heading-font" style={{ fontSize: '14px', color: 'var(--headings)', marginBlockEnd: '8px' }}>
              {item.title}
            </div>
            <p style={{ fontSize: '13px', color: 'var(--body-text)', lineHeight: 1.5, margin: 0 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ========================
// Section 8: FAQ
// ========================
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section style={{ paddingBlock: '40px', background: 'var(--light-bg)' }} className="section-gap">
      <div className="container" style={{ maxWidth: '800px' }}>
        <SectionHeader title={strings.faqTitle} />
        {strings.faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFaq(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              <span>{faq.q}</span>
              <ChevronDown open={openIndex === idx} />
            </button>
            <div
              id={`faq-answer-${idx}`}
              className="faq-answer"
              role="region"
              hidden={openIndex !== idx}
            >
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ========================
// Section 9: Closing CTA
// ========================
const ClosingCTA = () => (
  <section style={{ paddingBlock: '60px', textAlign: 'center' }}>
    <div className="container">
      <div className="section-title" style={{ marginBlockEnd: '10px' }}>{strings.closingTitle}</div>
      <p style={{ fontSize: '14px', color: 'var(--body-text)', marginBlockEnd: '20px' }}>
        {strings.closingSub}
      </p>
      <a href="/s/ai_site_builder" className="btn btn-primary btn-lg">{strings.closingCTA}</a>
    </div>
  </section>
);

// ========================
// Section 10: Footer
// ========================
const Footer = () => (
  <footer style={{ background: 'var(--light-bg)', paddingBlock: '40px', borderTop: '1px solid var(--divider)' }}>
    <div className="container">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '30px',
        marginBlockEnd: '30px',
      }}
      className="footer-grid">
        {Object.entries(strings.footerLinks).map(([key, col]) => (
          <div key={key}>
            <div className="heading-font" style={{ fontSize: '12px', color: 'var(--headings)', marginBlockEnd: '10px' }}>
              {col.title}
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {col.links.map((link) => (
                <li key={link.text} style={{ marginBlockEnd: '5px' }}>
                  <a href={link.href} style={{ fontSize: '13px', color: 'var(--body-text)', textDecoration: 'none' }}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        borderTop: '1px solid var(--divider)',
        paddingBlockStart: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        fontSize: '12px',
        color: 'var(--body-text)',
      }}>
        <div style={{ fontFamily: 'var(--heading-font)', fontWeight: 700, fontSize: '14px', color: 'var(--hero-heading)' }}>
          {strings.logo}
        </div>
        <div>{strings.footerCopyright}</div>
      </div>
    </div>
  </footer>
);

// ========================
// Main GeneratorsHub Page
// ========================
const GeneratorsHub = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      <main style={{ flex: 1 }}>
        <Breadcrumb />
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
};

export default GeneratorsHub;

