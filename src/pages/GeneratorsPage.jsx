import React, { useState, useEffect, useRef, useCallback } from 'react';
import { strings } from '../lib/strings';
import { featuredGenerators, categories, allGenerators } from '../lib/generatorData';

const s = strings.en;

// SVG Icons
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ChevronDownIcon = ({ expanded }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CategoryIcon = ({ category }) => {
  const icons = {
    websites: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="26" height="22" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="3" y1="11" x2="29" y2="11" stroke="#8159BB" strokeWidth="2" />
        <circle cx="7" cy="8" r="1" fill="#8159BB" />
        <circle cx="11" cy="8" r="1" fill="#8159BB" />
        <circle cx="15" cy="8" r="1" fill="#8159BB" />
      </svg>
    ),
    'landing-pages': (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="24" height="26" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="4" y1="9" x2="28" y2="9" stroke="#8159BB" strokeWidth="2" />
        <rect x="8" y="13" width="16" height="3" rx="1" fill="#8159BB" opacity="0.3" />
        <rect x="8" y="19" width="10" height="2" rx="1" fill="#8159BB" opacity="0.3" />
      </svg>
    ),
    portfolios: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="12" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
        <rect x="17" y="6" width="12" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
        <rect x="3" y="18" width="12" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
        <rect x="17" y="18" width="12" height="10" rx="1" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    blogs: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="5" y="3" width="22" height="26" rx="2" stroke="#8159BB" strokeWidth="2" />
        <line x1="9" y1="9" x2="23" y2="9" stroke="#8159BB" strokeWidth="2" />
        <line x1="9" y1="14" x2="20" y2="14" stroke="#8159BB" strokeWidth="2" />
        <line x1="9" y1="19" x2="23" y2="19" stroke="#8159BB" strokeWidth="2" />
        <line x1="9" y1="24" x2="17" y2="24" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    stores: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 8h24l-2 16H6L4 8z" stroke="#8159BB" strokeWidth="2" />
        <path d="M10 8V5a6 6 0 0 1 12 0v3" stroke="#8159BB" strokeWidth="2" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="8" y="2" width="16" height="28" rx="3" stroke="#8159BB" strokeWidth="2" />
        <line x1="12" y1="8" x2="20" y2="8" stroke="#8159BB" strokeWidth="2" />
        <line x1="12" y1="13" x2="20" y2="13" stroke="#8159BB" strokeWidth="2" />
        <line x1="12" y1="18" x2="20" y2="18" stroke="#8159BB" strokeWidth="2" />
        <circle cx="16" cy="24" r="2" fill="#8159BB" />
      </svg>
    ),
  };
  return icons[category] || icons.websites;
};

const StepIcon = ({ number }) => (
  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #7671FF, #CB0C9F)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, fontSize: 18, flexShrink: 0 }}>
    {number}
  </div>
);

const BenefitIcon = ({ type }) => {
  const icons = {
    speed: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="#8159BB" strokeWidth="2" />
        <polyline points="16 8 16 16 22 16" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    mobile: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="8" y="3" width="16" height="26" rx="3" stroke="#8159BB" strokeWidth="2" />
        <line x1="14" y1="25" x2="18" y2="25" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    free: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" stroke="#8159BB" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  };
  return icons[type] || icons.speed;
};

// Hero illustration SVG
const HeroIllustration = () => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" aria-hidden="true" style={{ maxWidth: '100%', height: 'auto' }}>
    <rect x="40" y="30" width="320" height="220" rx="8" stroke="#8159BB" strokeWidth="2" opacity="0.3" />
    <rect x="60" y="50" width="280" height="180" rx="4" stroke="#8159BB" strokeWidth="1.5" opacity="0.2" />
    <line x1="60" y1="70" x2="340" y2="70" stroke="#8159BB" strokeWidth="1" opacity="0.15" />
    <circle cx="75" cy="60" r="4" fill="#8159BB" opacity="0.3" />
    <circle cx="90" cy="60" r="4" fill="#8159BB" opacity="0.2" />
    <circle cx="105" cy="60" r="4" fill="#8159BB" opacity="0.15" />
    <rect x="80" y="90" width="120" height="8" rx="2" fill="#8159BB" opacity="0.15" />
    <rect x="80" y="110" width="200" height="4" rx="2" fill="#8159BB" opacity="0.1" />
    <rect x="80" y="120" width="180" height="4" rx="2" fill="#8159BB" opacity="0.1" />
    <rect x="80" y="140" width="80" height="40" rx="4" fill="#8159BB" opacity="0.08" />
    <rect x="170" y="140" width="80" height="40" rx="4" fill="#8159BB" opacity="0.08" />
    <rect x="260" y="140" width="80" height="40" rx="4" fill="#8159BB" opacity="0.08" />
    <rect x="80" y="195" width="260" height="4" rx="2" fill="#8159BB" opacity="0.1" />
    <rect x="80" y="205" width="200" height="4" rx="2" fill="#8159BB" opacity="0.1" />
    <path d="M300 100 L320 80 L340 100 L320 120 Z" stroke="#8159BB" strokeWidth="1.5" opacity="0.25" />
    <path d="M310 110 L330 90 L350 110 L330 130 Z" stroke="#8159BB" strokeWidth="1" opacity="0.15" />
  </svg>
);

// Logo SVG
const Logo = () => (
  <svg width="120" height="24" viewBox="0 0 120 24" fill="none" aria-hidden="true">
    <text x="0" y="18" fontFamily="'Josefin Sans', sans-serif" fontWeight="700" fontSize="16" fill="#2E2E2F">strikingly</text>
    <text x="82" y="18" fontFamily="'Josefin Sans', sans-serif" fontWeight="700" fontSize="16" className="ai-gradient" style={{ background: 'linear-gradient(135deg, #7671FF, #CB0C9F)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</text>
  </svg>
);

// Generator Card for directory sections
const GeneratorCard = ({ generator, categorySlug }) => (
  <a href={`/generators/${generator.slug}`} className="generator-card" style={{ display: 'block' }} aria-label={generator.name}>
    <div style={{ marginBottom: 10 }}>
      <CategoryIcon category={categorySlug} />
    </div>
    <h4 style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#2E2E2F', marginBottom: 5, textTransform: 'none' }}>{generator.name}</h4>
    <p style={{ fontSize: 13, color: '#636972', margin: 0 }}>{generator.description}</p>
  </a>
);

// Featured Generator Tile
const FeaturedTile = ({ generator }) => (
  <a href={`/generators/${generator.slug}`} className="generator-card" style={{ display: 'block' }} aria-label={generator.name}>
    <h4 style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#2E2E2F', marginBottom: 5, textTransform: 'none' }}>{generator.name}</h4>
    <p style={{ fontSize: 13, color: '#636972', margin: '0 0 8px 0' }}>{generator.description}</p>
    <span className="category-tag">{generator.category}</span>
  </a>
);

// Category Card
const CategoryCard = ({ category }) => (
  <a href={`#${category.slug}`} className="generator-card" style={{ display: 'block', textAlign: 'center' }}>
    <div style={{ marginBottom: 12, display: 'flex', justifyContent: 'center' }}>
      <CategoryIcon category={category.slug} />
    </div>
    <h4 style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#2E2E2F', marginBottom: 8 }}>{category.name}</h4>
    <p style={{ fontSize: 13, color: '#636972', margin: '0 0 12px 0' }}>{category.description}</p>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <ArrowRightIcon />
    </div>
  </a>
);

// FAQ Item
const FaqItem = ({ question, answer, isOpen, onToggle, id }) => (
  <div className="faq-item">
    <button
      className="faq-button"
      aria-expanded={isOpen}
      aria-controls={`faq-content-${id}`}
      onClick={onToggle}
    >
      <span>{question}</span>
      <ChevronDownIcon expanded={isOpen} />
    </button>
    <div
      id={`faq-content-${id}`}
      className={`faq-content ${isOpen ? 'expanded' : ''}`}
      role="region"
      aria-labelledby={`faq-button-${id}`}
    >
      <div className="faq-content-inner">
        {answer.split('\n\n').map((paragraph, i) => (
          <p key={i} style={{ marginBottom: i < answer.split('\n\n').length - 1 ? 12 : 0 }}>{paragraph}</p>
        ))}
      </div>
    </div>
  </div>
);

// Directory Subsection with Show All toggle
const DirectorySubsection = ({ category, generators, searchQuery }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const INITIAL_COUNT = 6;

  const matchesSearch = useCallback((gen) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      gen.name.toLowerCase().includes(q) ||
      gen.description.toLowerCase().includes(q) ||
      category.name.toLowerCase().includes(q)
    );
  }, [searchQuery, category.name]);

  const matchingGenerators = generators.filter(matchesSearch);

  if (matchingGenerators.length === 0) return null;

  const shouldCollapse = matchingGenerators.length > INITIAL_COUNT && !isExpanded;
  const visibleGenerators = shouldCollapse ? matchingGenerators.slice(0, INITIAL_COUNT) : matchingGenerators;
  const hiddenGenerators = shouldCollapse ? matchingGenerators.slice(INITIAL_COUNT) : [];

  return (
    <section id={category.slug} style={{ marginBottom: 30 }}>
      <h3 style={{ fontSize: 20, marginBottom: 5 }}>{category.name}</h3>
      <p style={{ fontSize: 14, color: '#636972', marginBottom: 16, marginTop: 0 }}>{category.description}</p>
      <div className="grid-3" style={{ marginBottom: shouldCollapse ? 10 : 0 }}>
        {visibleGenerators.map((gen) => (
          <GeneratorCard key={gen.slug} generator={gen} categorySlug={category.slug} />
        ))}
      </div>
      {shouldCollapse && (
        <div ref={contentRef} className={`collapsible-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
          <div className="grid-3" style={{ marginTop: 10 }}>
            {hiddenGenerators.map((gen) => (
              <GeneratorCard key={gen.slug} generator={gen} categorySlug={category.slug} />
            ))}
          </div>
        </div>
      )}
      {matchingGenerators.length > INITIAL_COUNT && (
        <button
          className="btn-ghost"
          style={{ marginTop: 10, height: 32, fontSize: 12, padding: '6px 12px' }}
          aria-expanded={isExpanded}
          aria-controls={`${category.slug}-hidden-generators`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? s.showLess : s.showAll(matchingGenerators.length)}
        </button>
      )}
      {/* Hidden cards remain in DOM for SEO */}
      {shouldCollapse && (
        <div id={`${category.slug}-hidden-generators`} style={{ display: 'none' }}>
          {hiddenGenerators.map((gen) => (
            <a key={`hidden-${gen.slug}`} href={`/generators/${gen.slug}`} aria-hidden="true" tabIndex="-1">{gen.name}</a>
          ))}
        </div>
      )}
    </section>
  );
};

export default function GeneratorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const searchTimeoutRef = useRef(null);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsSearching(true);
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = setTimeout(() => setIsSearching(false), 150);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  // Count total matching generators
  const totalMatching = Object.values(allGenerators).flat().filter((gen) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return gen.name.toLowerCase().includes(q) || gen.description.toLowerCase().includes(q);
  }).length;

  // Check if any category has matches
  const categoryHasMatches = (categorySlug) => {
    const generators = allGenerators[categorySlug] || [];
    return generators.some((gen) => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return gen.name.toLowerCase().includes(q) || gen.description.toLowerCase().includes(q);
    });
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      {/* Section 0: Top bar */}
      <header style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E4E7', padding: '12px 0' }}>
        <div className="container">
          <a href="/" aria-label="Strikingly Home">
            <Logo />
          </a>
        </div>
      </header>

      <main>
        {/* Section 1: Breadcrumb */}
        <nav aria-label="Breadcrumb" className="container" style={{ padding: '12px 20px' }}>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
            <li>
              <a href="/" style={{ color: '#8159BB' }}>{s.breadcrumbHome}</a>
            </li>
            <li style={{ color: '#C6C9CD' }} aria-hidden="true">/</li>
            <li style={{ color: '#636972' }}>{s.breadcrumbCurrent}</li>
          </ol>
        </nav>

        {/* Section 2: Hero */}
        <section className="section-hero" style={{ background: 'linear-gradient(180deg, rgba(118,113,255,0.03) 0%, rgba(203,12,159,0.02) 100%)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
              <div>
                <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 16 }}>
                  <span style={{ color: '#2E2E2F', display: 'block' }}>{s.heroH1Line1}</span>
                  <span className="ai-gradient" style={{ display: 'block' }}>{s.heroH1Line2}</span>
                </h1>
                <p style={{ fontSize: 16, color: '#636972', marginBottom: 24, maxWidth: 480, lineHeight: 1.5 }}>{s.heroSubheadline}</p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <a href="/s/ai_site_builder" className="btn-primary btn-primary-large">{s.heroCtaPrimary}</a>
                  <a href="#all-generators" className="btn-ghost">{s.heroCtaSecondary}</a>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Generators */}
        <section className="section">
          <div className="container">
            <h2 style={{ fontSize: 26, marginBottom: 8 }}>{s.featuredHeading}</h2>
            <p style={{ fontSize: 14, color: '#636972', marginBottom: 24, marginTop: 0 }}>{s.featuredSubheading}</p>
            <div className="grid-3">
              {featuredGenerators.map((gen) => (
                <FeaturedTile key={gen.slug} generator={gen} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Browse by Category */}
        <section className="section" style={{ borderTop: '1px solid #E2E4E7' }}>
          <div className="container">
            <h2 style={{ fontSize: 26, marginBottom: 24 }}>{s.browseHeading}</h2>
            <div className="grid-3">
              {categories.map((cat) => (
                <CategoryCard key={cat.slug} category={cat} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: All Generators */}
        <section id="all-generators" className="section" style={{ borderTop: '1px solid #E2E4E7' }}>
          <div className="container">
            <h2 style={{ fontSize: 26, marginBottom: 8 }}>{s.allGeneratorsHeading}</h2>
            <p style={{ fontSize: 14, color: '#636972', marginBottom: 24, marginTop: 0 }}>{s.allGeneratorsSubheading}</p>

            {/* Search */}
            <div style={{ marginBottom: 30 }}>
              <div className="search-input-wrapper">
                <SearchIcon />
                <input
                  type="search"
                  className="search-input"
                  placeholder={s.searchPlaceholder}
                  aria-label={s.searchLabel}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              {searchQuery && (
                <p style={{ fontSize: 13, color: '#636972', marginTop: 8, marginBottom: 0 }}>
                  {s.matchCount(totalMatching)}
                </p>
              )}
            </div>

            {/* No results */}
            {searchQuery && totalMatching === 0 && (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <h3 style={{ fontSize: 18, marginBottom: 8, textTransform: 'none' }}>{s.noResultsTitle}</h3>
                <p style={{ fontSize: 14, color: '#636972', marginBottom: 16 }}>{s.noResultsDescription}</p>
                <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button className="btn-ghost" onClick={clearSearch}>{s.noResultsCta}</button>
                  <a href="/s/ai_site_builder" className="btn-primary">{s.noResultsLink}</a>
                </div>
              </div>
            )}

            {/* Category subsections */}
            {categories.map((cat) => {
              if (searchQuery && !categoryHasMatches(cat.slug)) return null;
              return (
                <DirectorySubsection
                  key={cat.slug}
                  category={cat}
                  generators={allGenerators[cat.slug] || []}
                  searchQuery={searchQuery}
                />
              );
            })}
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section className="section" style={{ borderTop: '1px solid #E2E4E7' }}>
          <div className="container">
            <h2 style={{ fontSize: 26, marginBottom: 30, textAlign: 'center' }}>{s.howItWorksHeading}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
              {s.steps.map((step, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                    <StepIcon number={i + 1} />
                  </div>
                  <h3 style={{ fontSize: 16, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: '#636972', margin: 0 }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Why Strikingly */}
        <section className="section" style={{ borderTop: '1px solid #E2E4E7' }}>
          <div className="container">
            <h2 style={{ fontSize: 26, marginBottom: 30, textAlign: 'center' }}>{s.whyStrikinglyHeading}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 30 }}>
              {s.benefits.map((benefit, i) => {
                const iconTypes = ['speed', 'mobile', 'free'];
                return (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                      <BenefitIcon type={iconTypes[i]} />
                    </div>
                    <h3 style={{ fontSize: 16, marginBottom: 8 }}>{benefit.title}</h3>
                    <p style={{ fontSize: 14, color: '#636972', margin: 0 }}>{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="section" style={{ borderTop: '1px solid #E2E4E7' }}>
          <div className="container" style={{ maxWidth: 720 }}>
            <h2 style={{ fontSize: 26, marginBottom: 24, textAlign: 'center' }}>{s.faqHeading}</h2>
            {s.faqs.map((faq, i) => (
              <FaqItem
                key={i}
                id={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </section>

        {/* Section 9: Closing CTA */}
        <section className="section" style={{ borderTop: '1px solid #E2E4E7', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: 26, marginBottom: 12 }}>{s.closingHeading}</h2>
            <p style={{ fontSize: 16, color: '#636972', marginBottom: 24, marginTop: 0 }}>{s.closingSub}</p>
            <a href="/s/ai_site_builder" className="btn-primary btn-primary-large">{s.closingCta}</a>
          </div>
        </section>
      </main>

      {/* Section 10: Footer */}
      <footer style={{ borderTop: '1px solid #E2E4E7', padding: '40px 0 20px', background: '#F4F6F8' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30, marginBottom: 30 }}>
            <div>
              <h4 style={{ fontSize: 13, marginBottom: 12, color: '#2E2E2F' }}>{s.footerProduct}</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: 8 }}><a href="/pricing" style={{ fontSize: 13, color: '#636972' }}>{s.footerPricing}</a></li>
                <li style={{ marginBottom: 8 }}><a href="/templates" style={{ fontSize: 13, color: '#636972' }}>{s.footerTemplates}</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: 13, marginBottom: 12, color: '#2E2E2F' }}>{s.footerResources}</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: 8 }}><a href="/blog" style={{ fontSize: 13, color: '#636972' }}>{s.footerBlog}</a></li>
                <li style={{ marginBottom: 8 }}><a href="/support" style={{ fontSize: 13, color: '#636972' }}>{s.footerSupport}</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: 13, marginBottom: 12, color: '#2E2E2F' }}>{s.footerAbout}</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: 8 }}><a href="/about" style={{ fontSize: 13, color: '#636972' }}>About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: 13, marginBottom: 12, color: '#2E2E2F' }}>{s.footerLegal}</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: 8 }}><a href="/terms" style={{ fontSize: 13, color: '#636972' }}>{s.footerTerms}</a></li>
                <li style={{ marginBottom: 8 }}><a href="/privacy" style={{ fontSize: 13, color: '#636972' }}>{s.footerPrivacy}</a></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #E2E4E7', paddingTop: 16, textAlign: 'center' }}>
            <p style={{ fontSize: 12, color: '#636972', margin: 0 }}>{s.footerCopyright(new Date().getFullYear())}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
