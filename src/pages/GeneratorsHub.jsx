import { useEffect, useRef, useState } from 'react';
import { Search, ChevronRight, Zap, Smartphone, CheckCircle } from 'lucide-react';
import {
  featuredGenerators,
  categories,
  allGenerators,
  howItWorksSteps,
  whyStrikinglyFeatures,
  faqItems,
} from '@/data/generators.js';

/* ── Inline SVG illustrations ─────────────────────────────────────────────── */

const HeroIllustration = () => (
  <svg
    viewBox="0 0 400 300"
    width="400"
    height="300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="400" height="300" rx="8" fill="#F8F5FC" />
    <rect x="30" y="30" width="340" height="240" rx="6" fill="#ffffff" stroke="#D9CCEB" strokeWidth="1.5" />
    <rect x="50" y="50" width="80" height="12" rx="2" fill="#BFA8E0" />
    <rect x="50" y="72" width="150" height="8" rx="2" fill="#E2D6F2" />
    <rect x="50" y="86" width="120" height="8" rx="2" fill="#E2D6F2" />
    <rect x="50" y="110" width="300" height="80" rx="4" fill="#EDE6F7" stroke="#D9CCEB" strokeWidth="1" />
    <rect x="70" y="130" width="100" height="40" rx="3" fill="#D9CCEB" />
    <rect x="190" y="130" width="140" height="8" rx="2" fill="#C8B5E0" />
    <rect x="190" y="145" width="100" height="6" rx="2" fill="#E2D6F2" />
    <rect x="190" y="157" width="80" height="6" rx="2" fill="#E2D6F2" />
    <rect x="50" y="205" width="90" height="10" rx="2" fill="#C8B5E0" />
    <rect x="50" y="223" width="70" height="8" rx="2" fill="#E2D6F2" />
    <rect x="50" y="237" width="50" height="8" rx="2" fill="#E2D6F2" />
    <rect x="280" y="205" width="70" height="40" rx="3" fill="#D9CCEB" />
    <circle cx="340" cy="260" r="12" fill="#8159BB" opacity="0.15" />
    <circle cx="340" cy="260" r="6" fill="#8159BB" />
  </svg>
);

const CategoryIcon = ({ type }) => {
  const icons = {
    website: (
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none" aria-hidden="true">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="#8159BB" strokeWidth="2" />
        <line x1="6" y1="18" x2="42" y2="18" stroke="#8159BB" strokeWidth="2" />
        <circle cx="12" cy="14" r="1.5" fill="#8159BB" />
        <circle cx="17" cy="14" r="1.5" fill="#8159BB" />
        <circle cx="22" cy="14" r="1.5" fill="#8159BB" />
        <rect x="10" y="24" width="12" height="10" rx="1" fill="#EDE6F7" />
        <rect x="26" y="24" width="12" height="4" rx="1" fill="#D9CCEB" />
        <rect x="26" y="30" width="12" height="4" rx="1" fill="#D9CCEB" />
      </svg>
    ),
    landing: (
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none" aria-hidden="true">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="#8159BB" strokeWidth="2" />
        <rect x="12" y="12" width="24" height="10" rx="1" fill="#EDE6F7" />
        <rect x="12" y="26" width="16" height="4" rx="1" fill="#D9CCEB" />
        <rect x="12" y="32" width="12" height="4" rx="1" fill="#D9CCEB" />
        <rect x="30" y="30" width="6" height="10" rx="1" fill="#8159BB" opacity="0.2" />
      </svg>
    ),
    portfolio: (
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none" aria-hidden="true">
        <rect x="8" y="8" width="32" height="32" rx="3" stroke="#8159BB" strokeWidth="2" />
        <rect x="14" y="14" width="20" height="14" rx="2" fill="#EDE6F7" />
        <rect x="14" y="32" width="6" height="6" rx="1" fill="#D9CCEB" />
        <rect x="22" y="32" width="6" height="6" rx="1" fill="#D9CCEB" />
        <rect x="30" y="32" width="4" height="6" rx="1" fill="#D9CCEB" />
      </svg>
    ),
    blog: (
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none" aria-hidden="true">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="#8159BB" strokeWidth="2" />
        <rect x="12" y="12" width="24" height="4" rx="1" fill="#8159BB" opacity="0.3" />
        <rect x="12" y="20" width="20" height="2" rx="1" fill="#D9CCEB" />
        <rect x="12" y="25" width="18" height="2" rx="1" fill="#D9CCEB" />
        <rect x="12" y="30" width="16" height="2" rx="1" fill="#D9CCEB" />
        <rect x="12" y="35" width="14" height="2" rx="1" fill="#D9CCEB" />
      </svg>
    ),
    store: (
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none" aria-hidden="true">
        <rect x="8" y="14" width="32" height="26" rx="3" stroke="#8159BB" strokeWidth="2" />
        <path d="M8 18 L12 8 L36 8 L40 18" stroke="#8159BB" strokeWidth="2" fill="none" />
        <rect x="14" y="24" width="8" height="8" rx="1" fill="#EDE6F7" />
        <rect x="26" y="24" width="8" height="8" rx="1" fill="#EDE6F7" />
        <circle cx="30" cy="14" r="3" fill="#8159BB" opacity="0.3" />
      </svg>
    ),
    link: (
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="18" stroke="#8159BB" strokeWidth="2" />
        <path d="M18 24 L30 24" stroke="#8159BB" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 18 L30 24 L24 30" stroke="#8159BB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="4" fill="#8159BB" opacity="0.15" />
      </svg>
    ),
  };
  return icons[type] || icons.website;
};

const SectionThumbnail = ({ category }) => {
  const stroke = '#8159BB';
  return (
    <svg viewBox="0 0 64 48" width="64" height="48" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="56" height="36" rx="3" stroke={stroke} strokeWidth="1.5" fill="#EDE6F7" />
      <rect x="12" y="14" width="20" height="4" rx="1" fill={stroke} opacity="0.25" />
      <rect x="12" y="22" width="16" height="2" rx="0.5" fill={stroke} opacity="0.15" />
      <rect x="12" y="27" width="14" height="2" rx="0.5" fill={stroke} opacity="0.15" />
      <rect x="12" y="32" width="10" height="2" rx="0.5" fill={stroke} opacity="0.15" />
      <rect x="36" y="14" width="18" height="22" rx="1" fill={stroke} opacity="0.08" />
    </svg>
  );
};

const WhyIcon = ({ type }) => {
  switch (type) {
    case 'zap':
      return <Zap className="w-8 h-8 text-brand-purple" aria-hidden="true" />;
    case 'smartphone':
      return <Smartphone className="w-8 h-8 text-brand-purple" aria-hidden="true" />;
    case 'check-circle':
      return <CheckCircle className="w-8 h-8 text-brand-purple" aria-hidden="true" />;
    default:
      return null;
  }
};

/* ── Strings (i18n-ready) ─────────────────────────────────────────────────── */

const strings = {
  en: {
    logo: 'strikingly AI',
    breadcrumbHome: 'Strikingly',
    breadcrumbCurrent: 'AI Generators',
    heroH1Line1: 'BUILD ANY KIND OF SITE',
    heroH1Line2: 'WITH AI, IN AN INSTANT',
    heroSub: 'Browse the right generator for what you\'re building, or jump straight into our AI site builder.',
    ctaPrimary: 'START BUILDING - IT\'S FREE',
    ctaSecondary: 'BROWSE GENERATORS',
    featuredHeading: 'FEATURED GENERATORS',
    featuredSub: 'A few common starting points.',
    browseHeading: 'BROWSE BY CATEGORY',
    allGeneratorsHeading: 'ALL GENERATORS',
    allGeneratorsSub: 'Sixty-plus generators, organized by what you\'re building.',
    searchPlaceholder: 'Search generators...',
    searchLabel: 'Search generators',
    resultCount: 'generators match',
    noResults: 'No generators match your search.',
    clearSearch: 'Clear search',
    noResultsCta: "Can't find it? Start with our AI builder.",
    showAll: 'Show all',
    showLess: 'Show less',
    howItWorksHeading: 'HOW IT WORKS',
    whyHeading: 'WHY STRIKINGLY',
    faqHeading: 'FREQUENTLY ASKED QUESTIONS',
    closingHeading: 'READY TO BUILD?',
    closingSub: 'Pick a generator above, or jump straight into our AI builder.',
    closingCta: 'START WITH AI BUILDER',
    footer: {
      about: 'About',
      pricing: 'Pricing',
      templates: 'Templates',
      support: 'Support',
      blog: 'Blog',
      terms: 'Terms',
      privacy: 'Privacy',
      copyright: 'Strikingly Inc. All rights reserved.',
    },
  },
};

const t = strings.en;

/* ── Main Page Component ──────────────────────────────────────────────────── */

export default function GeneratorsHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(0);
  const [expandedSections, setExpandedSections] = useState({});
  const [jsEnabled, setJsEnabled] = useState(false);
  const sectionRefs = useRef({});
  const searchInputRef = useRef(null);

  /* Progressive enhancement: mark JS as enabled */
  useEffect(() => {
    setJsEnabled(true);
  }, []);

  /* Search filter logic */
  const getSearchMatches = () => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase().trim();
    const matches = {};
    let total = 0;
    Object.entries(allGenerators).forEach(([key, section]) => {
      const sectionMatches = section.generators.filter(
        (g) =>
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          section.name.toLowerCase().includes(q)
      );
      if (sectionMatches.length > 0) {
        matches[key] = sectionMatches;
        total += sectionMatches.length;
      }
    });
    return { matches, total };
  };

  const searchResult = getSearchMatches();
  const isSearching = searchQuery.trim().length > 0;

  /* Show-all toggle */
  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isSectionExpanded = (id) => !!expandedSections[id];
  const VISIBLE_COUNT = 6;

  return (
    <div className="min-h-screen bg-white">
      {/* ── Section 0: Top Bar ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white border-b border-subtle-divider">
        <div className="max-w-content mx-auto px-5 h-[60px] flex items-center">
          <a href="/" className="font-heading font-bold text-xl uppercase tracking-wide text-heading-gray">
            {t.logo}
          </a>
        </div>
      </header>

      {/* ── Section 1: Breadcrumb ──────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="max-w-content mx-auto px-5 py-3">
        <ol className="flex items-center gap-1 text-sm text-body-gray">
          <li>
            <a href="/" className="hover:text-brand-purple transition-colors">{t.breadcrumbHome}</a>
          </li>
          <li aria-hidden="true" className="text-card-border">
            &gt;
          </li>
          <li aria-current="page" className="text-body-gray">
            {t.breadcrumbCurrent}
          </li>
        </ol>
      </nav>

      <main>
        {/* ── Section 2: Hero ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ padding: '80px 0' }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(118, 113, 255, 0.06) 0%, rgba(203, 12, 159, 0.03) 50%, transparent 100%)',
            }}
          />
          <div className="max-w-content mx-auto px-5 relative">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="flex-1 text-center md:text-left">
                <h1>
                  <span className="block text-hero-dark">{t.heroH1Line1}</span>
                  <span className="block gradient-text">{t.heroH1Line2}</span>
                </h1>
                <p className="mt-5 text-body-gray text-base leading-relaxed max-w-lg mx-auto md:mx-0">
                  {t.heroSub}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
                  <a
                    href="/s/ai_site_builder"
                    className="btn-primary btn-primary-big w-full sm:w-auto text-center"
                  >
                    {t.ctaPrimary}
                  </a>
                  <a
                    href="#all-generators"
                    className="btn-ghost w-full sm:w-auto text-center"
                  >
                    {t.ctaSecondary}
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: Featured Generators ───────────────────────────── */}
        <section style={{ padding: '40px 0' }}>
          <div className="max-w-content mx-auto px-5">
            <h2 className="text-center">{t.featuredHeading}</h2>
            <p className="text-center mt-2 text-body-gray">{t.featuredSub}</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredGenerators.map((g) => (
                <a
                  key={g.slug}
                  href={`/generators/${g.slug}`}
                  className="card card-link group"
                >
                  <h3 className="text-base" style={{ fontFamily: '"Josefin Sans", "Poppins", sans-serif', fontWeight: 700, textTransform: 'uppercase', color: '#4B5056' }}>
                    {g.name}
                  </h3>
                  <p className="mt-2 text-sm text-body-gray leading-relaxed">
                    {g.description}
                  </p>
                  <span className="category-tag mt-3 inline-block">{g.category}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Browse by Category ────────────────────────────── */}
        <section style={{ padding: '40px 0' }}>
          <div className="max-w-content mx-auto px-5">
            <h2 className="text-center">{t.browseHeading}</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`/generators#${cat.slug}`}
                  className="card card-link group flex flex-col items-center text-center"
                >
                  <div className="mb-3">
                    <CategoryIcon type={cat.icon} />
                  </div>
                  <h3 className="text-base">{cat.name}</h3>
                  <p className="mt-2 text-sm text-body-gray leading-relaxed">
                    {cat.description}
                  </p>
                  <ChevronRight className="w-5 h-5 text-brand-purple mt-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: All Generators directory ──────────────────────── */}
        <section id="all-generators" className="bg-light-bg" style={{ padding: '40px 0' }}>
          <div className="max-w-content mx-auto px-5">
            <h2 className="text-center">{t.allGeneratorsHeading}</h2>
            <p className="text-center mt-2 text-body-gray">{t.allGeneratorsSub}</p>

            {/* Search */}
            <div className="mt-8 max-w-[480px] mx-auto relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-body-gray"
                aria-hidden="true"
              />
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                aria-label={t.searchLabel}
                className="w-full h-11 pl-10 pr-4 rounded border border-card-border bg-white text-sm text-heading-gray placeholder:text-body-gray/60 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all"
                style={{ fontFamily: '"Open Sans", sans-serif' }}
              />
            </div>

            {/* Result count */}
            {isSearching && (
              <p className="text-center mt-3 text-sm text-body-gray">
                {searchResult && searchResult.total > 0 ? (
                  <>
                    <strong>{searchResult.total}</strong> {t.resultCount}
                  </>
                ) : (
                  <>
                    {t.noResults}{' '}
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="text-brand-purple underline hover:no-underline ml-1"
                    >
                      {t.clearSearch}
                    </button>
                  </>
                )}
              </p>
            )}

            {/* No results empty state */}
            {isSearching && searchResult && searchResult.total === 0 && (
              <div className="mt-6 text-center">
                <a
                  href="/s/ai_site_builder"
                  className="inline-block text-brand-purple hover:underline text-sm"
                >
                  {t.noResultsCta}
                </a>
              </div>
            )}

            {/* Subsections */}
            <div className="mt-10 space-y-10">
              {Object.entries(allGenerators).map(([key, section]) => {
                const sectionMatchCount = searchResult?.matches?.[key]?.length ?? null;
                const shouldHideSection = isSearching && sectionMatchCount === 0;
                const visibleGenerators = isSearching
                  ? searchResult?.matches?.[key] ?? []
                  : section.generators;
                const hasOverflow = visibleGenerators.length > VISIBLE_COUNT;
                const isExpanded = isSectionExpanded(section.id);
                const shownGenerators =
                  jsEnabled && hasOverflow && !isExpanded
                    ? visibleGenerators.slice(0, VISIBLE_COUNT)
                    : visibleGenerators;

                return (
                  <div
                    key={section.id}
                    id={section.slug}
                    ref={(el) => { sectionRefs.current[section.id] = el; }}
                    className={shouldHideSection ? 'hidden' : ''}
                  >
                    <h3>{section.name}</h3>
                    <p className="mt-1 text-sm text-body-gray">{section.description}</p>

                    <div id={`section-grid-${section.id}`} className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {shownGenerators.map((g) => (
                        <a
                          key={g.slug}
                          href={`/generators/${g.slug}`}
                          className="card card-link group"
                        >
                          <div className="mb-3">
                            <SectionThumbnail category={section.id} />
                          </div>
                          <h4
                            className="text-sm leading-snug"
                            style={{ fontFamily: '"Josefin Sans", "Poppins", sans-serif', fontWeight: 700, textTransform: 'uppercase', color: '#4B5056' }}
                          >
                            {g.name}
                          </h4>
                          <p className="mt-1 text-sm text-body-gray leading-relaxed">
                            {g.description}
                          </p>
                        </a>
                      ))}
                    </div>

                    {/* Show All / Show Less toggle */}
                    {jsEnabled && hasOverflow && (
                      <div className="mt-4 text-center">
                        <button
                          type="button"
                          onClick={() => toggleSection(section.id)}
                          aria-expanded={isExpanded}
                          aria-controls={`section-grid-${section.id}`}
                          className="text-sm text-brand-purple hover:underline font-semibold"
                          style={{ fontFamily: '"Open Sans", sans-serif' }}
                        >
                          {isExpanded
                            ? `${t.showLess}`
                            : `${t.showAll} ${visibleGenerators.length} ${section.name.toLowerCase()} generators`}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Section 6: How It Works ──────────────────────────────────── */}
        <section style={{ padding: '40px 0' }}>
          <div className="max-w-content mx-auto px-5">
            <h2 className="text-center">{t.howItWorksHeading}</h2>
            <div className="mt-8 flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12">
              {howItWorksSteps.map((step) => (
                <div key={step.number} className="flex-1 text-center max-w-xs mx-auto">
                  <div className="w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center mx-auto font-heading font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-base">{step.title}</h3>
                  <p className="mt-2 text-sm text-body-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 7: Why Strikingly ──────────────────────────────────── */}
        <section className="bg-light-bg" style={{ padding: '40px 0' }}>
          <div className="max-w-content mx-auto px-5">
            <h2 className="text-center">{t.whyHeading}</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyStrikinglyFeatures.map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="flex justify-center mb-4">
                    <WhyIcon type={feature.icon} />
                  </div>
                  <h3 className="text-base">{feature.title}</h3>
                  <p className="mt-2 text-sm text-body-gray leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 8: FAQ ─────────────────────────────────────────────── */}
        <section style={{ padding: '40px 0' }}>
          <div className="max-w-content mx-auto px-5">
            <h2 className="text-center">{t.faqHeading}</h2>
            <div className="mt-8 max-w-2xl mx-auto space-y-3">
              {faqItems.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="card overflow-hidden" style={{ padding: 0 }}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                      className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:ring-inset"
                    >
                      <span
                        className="text-sm leading-snug"
                        style={{ fontFamily: '"Josefin Sans", "Poppins", sans-serif', fontWeight: 700, textTransform: 'uppercase', color: '#4B5056' }}
                      >
                        {item.question}
                      </span>
                      <span
                        className="flex-shrink-0 text-brand-purple transition-transform duration-200"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    <div
                      id={`faq-answer-${idx}`}
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: isOpen ? '500px' : '0px',
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="px-5 pb-5 text-sm text-body-gray leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Section 9: Closing CTA ───────────────────────────────────── */}
        <section style={{ padding: '60px 0' }}>
          <div className="max-w-content mx-auto px-5 text-center">
            <h2>{t.closingHeading}</h2>
            <p className="mt-3 text-body-gray text-base">{t.closingSub}</p>
            <div className="mt-8">
              <a
                href="/s/ai_site_builder"
                className="btn-primary btn-primary-big inline-flex"
              >
                {t.closingCta}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Section 10: Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-subtle-divider bg-white" style={{ padding: '40px 0 20px' }}>
        <div className="max-w-content mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-heading font-bold uppercase text-heading-gray mb-3">
                strikingly AI
              </div>
              <ul className="space-y-2 text-sm text-body-gray">
                <li><a href="/about" className="hover:text-brand-purple transition-colors">{t.footer.about}</a></li>
                <li><a href="/pricing" className="hover:text-brand-purple transition-colors">{t.footer.pricing}</a></li>
                <li><a href="/templates" className="hover:text-brand-purple transition-colors">{t.footer.templates}</a></li>
              </ul>
            </div>
            <div>
              <div className="font-heading font-bold uppercase text-heading-gray mb-3">
                Product
              </div>
              <ul className="space-y-2 text-sm text-body-gray">
                <li><a href="/s/ai_site_builder" className="hover:text-brand-purple transition-colors">AI Builder</a></li>
                <li><a href="/templates" className="hover:text-brand-purple transition-colors">{t.footer.templates}</a></li>
                <li><a href="/pricing" className="hover:text-brand-purple transition-colors">{t.footer.pricing}</a></li>
              </ul>
            </div>
            <div>
              <div className="font-heading font-bold uppercase text-heading-gray mb-3">
                Support
              </div>
              <ul className="space-y-2 text-sm text-body-gray">
                <li><a href="/support" className="hover:text-brand-purple transition-colors">{t.footer.support}</a></li>
                <li><a href="/blog" className="hover:text-brand-purple transition-colors">{t.footer.blog}</a></li>
              </ul>
            </div>
            <div>
              <div className="font-heading font-bold uppercase text-heading-gray mb-3">
                Legal
              </div>
              <ul className="space-y-2 text-sm text-body-gray">
                <li><a href="/terms" className="hover:text-brand-purple transition-colors">{t.footer.terms}</a></li>
                <li><a href="/privacy" className="hover:text-brand-purple transition-colors">{t.footer.privacy}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-subtle-divider pt-4 text-center text-xs text-body-gray/70">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
