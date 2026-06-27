import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { strings } from '@/data/strings.en';
import { featuredGenerators, allGenerators, VISIBLE_COUNT } from '@/data/generators';

const CATEGORY_KEYS = ['websites', 'landing-pages', 'portfolios', 'blogs', 'stores', 'link-in-bio'];

/* ─── Inline SVG Illustrations ─── */

function WebsiteIllustration({ className = '', ...props }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="10" width="100" height="70" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <line x1="10" y1="24" x2="110" y2="24" stroke="#8159BB" strokeWidth="1.5"/>
      <circle cx="18" cy="17" r="2.5" stroke="#8159BB" strokeWidth="1"/>
      <circle cx="26" cy="17" r="2.5" stroke="#8159BB" strokeWidth="1"/>
      <circle cx="34" cy="17" r="2.5" stroke="#8159BB" strokeWidth="1"/>
      <rect x="18" y="32" width="40" height="4" rx="1" fill="#E2E4E7"/>
      <rect x="18" y="40" width="84" height="3" rx="1" fill="#E2E4E7"/>
      <rect x="18" y="47" width="70" height="3" rx="1" fill="#E2E4E7"/>
      <rect x="18" y="54" width="50" height="3" rx="1" fill="#E2E4E7"/>
      <rect x="70" y="30" width="32" height="24" rx="2" stroke="#8159BB" strokeWidth="1" fill="none"/>
      <rect x="18" y="64" width="30" height="8" rx="2" fill="#8159BB" opacity="0.2"/>
    </svg>
  );
}

function LandingPageIllustration({ className = '', ...props }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="10" width="100" height="70" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="20" y="20" width="80" height="16" rx="2" fill="#8159BB" opacity="0.1"/>
      <rect x="30" y="24" width="60" height="3" rx="1" fill="#8159BB" opacity="0.4"/>
      <rect x="40" y="30" width="40" height="3" rx="1" fill="#8159BB" opacity="0.3"/>
      <rect x="18" y="42" width="84" height="3" rx="1" fill="#E2E4E7"/>
      <rect x="18" y="49" width="70" height="3" rx="1" fill="#E2E4E7"/>
      <rect x="18" y="56" width="50" height="3" rx="1" fill="#E2E4E7"/>
      <rect x="35" y="64" width="50" height="10" rx="3" fill="#8159BB" opacity="0.2"/>
    </svg>
  );
}

function PortfolioIllustration({ className = '', ...props }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="10" width="100" height="70" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="18" y="20" width="36" height="26" rx="2" stroke="#8159BB" strokeWidth="1" fill="#8159BB" opacity="0.08"/>
      <rect x="60" y="20" width="42" height="12" rx="2" stroke="#8159BB" strokeWidth="1" fill="#8159BB" opacity="0.08"/>
      <rect x="60" y="36" width="42" height="10" rx="2" stroke="#8159BB" strokeWidth="1" fill="#8159BB" opacity="0.08"/>
      <rect x="18" y="52" width="84" height="3" rx="1" fill="#E2E4E7"/>
      <rect x="18" y="59" width="60" height="3" rx="1" fill="#E2E4E7"/>
      <rect x="18" y="66" width="40" height="3" rx="1" fill="#E2E4E7"/>
    </svg>
  );
}

function BlogIllustration({ className = '', ...props }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="10" width="100" height="70" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="18" y="20" width="50" height="4" rx="1" fill="#8159BB" opacity="0.4"/>
      <rect x="18" y="28" width="84" height="3" rx="1" fill="#E2E4E7"/>
      <rect x="18" y="35" width="70" height="3" rx="1" fill="#E2E4E7"/>
      <rect x="18" y="42" width="80" height="3" rx="1" fill="#E2E4E7"/>
      <line x1="18" y1="50" x2="102" y2="50" stroke="#E2E4E7" strokeWidth="1"/>
      <rect x="18" y="56" width="50" height="4" rx="1" fill="#8159BB" opacity="0.4"/>
      <rect x="18" y="64" width="84" height="3" rx="1" fill="#E2E4E7"/>
      <rect x="18" y="71" width="60" height="3" rx="1" fill="#E2E4E7"/>
    </svg>
  );
}

function StoreIllustration({ className = '', ...props }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="10" width="100" height="70" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <path d="M18 24 L30 18 L42 24" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <rect x="20" y="24" width="20" height="20" rx="2" stroke="#8159BB" strokeWidth="1" fill="#8159BB" opacity="0.08"/>
      <rect x="46" y="18" width="20" height="26" rx="2" stroke="#8159BB" strokeWidth="1" fill="#8159BB" opacity="0.08"/>
      <rect x="72" y="18" width="30" height="26" rx="2" stroke="#8159BB" strokeWidth="1" fill="#8159BB" opacity="0.08"/>
      <rect x="18" y="52" width="84" height="3" rx="1" fill="#E2E4E7"/>
      <rect x="18" y="59" width="60" height="3" rx="1" fill="#E2E4E7"/>
      <rect x="18" y="66" width="30" height="8" rx="2" fill="#8159BB" opacity="0.2"/>
    </svg>
  );
}

function LinkInBioIllustration({ className = '', ...props }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="10" y="10" width="100" height="70" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none"/>
      <circle cx="60" cy="28" r="10" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" opacity="0.08"/>
      <rect x="42" y="42" width="36" height="4" rx="1" fill="#8159BB" opacity="0.3"/>
      <rect x="30" y="52" width="60" height="6" rx="2" stroke="#8159BB" strokeWidth="1" fill="#8159BB" opacity="0.06"/>
      <rect x="30" y="62" width="60" height="6" rx="2" stroke="#8159BB" strokeWidth="1" fill="#8159BB" opacity="0.06"/>
    </svg>
  );
}

const categoryIllustrations = {
  websites: WebsiteIllustration,
  'landing-pages': LandingPageIllustration,
  portfolios: PortfolioIllustration,
  blogs: BlogIllustration,
  stores: StoreIllustration,
  'link-in-bio': LinkInBioIllustration,
};

/* ─── Hero Illustration ─── */

function HeroIllustration() {
  return (
    <svg aria-hidden="true" width="480" height="360" viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[480px] h-auto">
      <rect x="40" y="30" width="400" height="280" rx="8" stroke="#8159BB" strokeWidth="2" fill="none" opacity="0.3"/>
      <rect x="40" y="30" width="400" height="40" rx="8" fill="#8159BB" opacity="0.06"/>
      <circle cx="62" cy="50" r="6" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <circle cx="80" cy="50" r="6" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <circle cx="98" cy="50" r="6" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <rect x="60" y="90" width="160" height="8" rx="2" fill="#8159BB" opacity="0.15"/>
      <rect x="60" y="108" width="360" height="6" rx="2" fill="#E2E4E7"/>
      <rect x="60" y="122" width="300" height="6" rx="2" fill="#E2E4E7"/>
      <rect x="60" y="136" width="220" height="6" rx="2" fill="#E2E4E7"/>
      <rect x="260" y="86" width="160" height="80" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" opacity="0.04"/>
      <rect x="60" y="160" width="360" height="1" fill="#E2E4E7"/>
      <rect x="60" y="180" width="100" height="80" rx="4" stroke="#8159BB" strokeWidth="1" fill="#8159BB" opacity="0.04"/>
      <rect x="170" y="180" width="100" height="80" rx="4" stroke="#8159BB" strokeWidth="1" fill="#8159BB" opacity="0.04"/>
      <rect x="280" y="180" width="140" height="80" rx="4" stroke="#8159BB" strokeWidth="1" fill="#8159BB" opacity="0.04"/>
      <rect x="60" y="276" width="80" height="20" rx="4" fill="url(#heroGrad)" opacity="0.3"/>
      <defs>
        <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7671FF"/>
          <stop offset="100%" stopColor="#CB0C9F"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Category Icons for Browse by Category ─── */

function CategoryIcon({ category, className = '' }) {
  const Illustration = categoryIllustrations[category];
  if (Illustration) return <Illustration className={className} width="80" height="60" />;
  return null;
}

/* ─── Step Number Circle ─── */

function StepCircle({ number }) {
  return (
    <div className="w-10 h-10 rounded-full ai-gradient-bg flex items-center justify-center shrink-0">
      <span className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>{number}</span>
    </div>
  );
}

/* ─── Why Strikingly Icons ─── */

function LightningIcon() {
  return (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 4L8 22h10l-2 14 14-18H20l2-14z" stroke="#8159BB" strokeWidth="2" fill="none"/>
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="4" width="16" height="32" rx="3" stroke="#8159BB" strokeWidth="2" fill="none"/>
      <line x1="12" y1="10" x2="28" y2="10" stroke="#8159BB" strokeWidth="1.5"/>
      <line x1="12" y1="30" x2="28" y2="30" stroke="#8159BB" strokeWidth="1.5"/>
      <circle cx="20" cy="34" r="1.5" fill="#8159BB"/>
    </svg>
  );
}

function FreeIcon() {
  return (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14" stroke="#8159BB" strokeWidth="2" fill="none"/>
      <text x="20" y="25" textAnchor="middle" fill="#8159BB" fontSize="14" fontWeight="700" fontFamily="var(--font-heading)">$</text>
      <line x1="10" y1="12" x2="30" y2="12" stroke="#8159BB" strokeWidth="1.5"/>
    </svg>
  );
}

const whyIcons = [LightningIcon, MobileIcon, FreeIcon];

/* ─── Main Component ─── */

export default function GeneratorsHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedFaq, setExpandedFaq] = useState(0);
  const [jsReady, setJsReady] = useState(false);
  const sectionRefs = useRef({});

  // Mark JS as ready after mount - enables progressive enhancement
  useEffect(() => {
    setJsReady(true);
    const initial = {};
    CATEGORY_KEYS.forEach(key => {
      initial[key] = false;
    });
    setExpandedSections(initial);
  }, []);

  // Search filtering
  const getFilteredGenerators = useCallback((categoryKey) => {
    const generators = allGenerators[categoryKey] || [];
    if (!searchQuery.trim()) return generators;
    const q = searchQuery.toLowerCase().trim();
    return generators.filter(g =>
      g.name.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q) ||
      categoryKey.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const totalMatches = CATEGORY_KEYS.reduce((sum, key) => sum + getFilteredGenerators(key).length, 0);

  const hasSearch = searchQuery.trim().length > 0;

  // Toggle section expansion
  const toggleSection = (key) => {
    setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Toggle FAQ
  const toggleFaq = (index) => {
    setExpandedFaq(prev => prev === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Section 0: Top Bar */}
      <header className="w-full border-b border-divider bg-white">
        <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center">
          <a href="/" className="text-heading font-bold text-lg tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            {strings.topBar.logoText}
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-3">
        <ol className="flex items-center gap-2 text-sm text-body list-none p-0 m-0">
          <li className="flex items-center gap-2">
            <a href="/" className="text-body hover:text-brand-purple transition-colors">{strings.breadcrumb.home}</a>
            <span aria-hidden="true" className="text-brand-purple">&gt;</span>
          </li>
          <li aria-current="page" className="text-body">{strings.breadcrumb.current}</li>
        </ol>
      </nav>

      <main>
        {/* Section 2: Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7671FF]/[0.03] to-[#CB0C9F]/[0.03] pointer-events-none" aria-hidden="true"/>
          <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20 relative">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="flex-1 text-center md:text-left">
                <h1 className="mb-5">
                  <span className="block text-hero-heading text-3xl md:text-[40px] lg:text-[48px] leading-tight" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {strings.hero.headingLine1}
                  </span>
                  <span className="block ai-gradient-text text-3xl md:text-[40px] lg:text-[48px] leading-tight" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {strings.hero.headingLine2}
                  </span>
                </h1>
                <p className="text-body text-base mb-8 max-w-lg mx-auto md:mx-0">
                  {strings.hero.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5 justify-center md:justify-start">
                  <a
                    href="/s/ai_site_builder"
                    className="ai-gradient-bg text-white text-sm font-bold uppercase px-4 py-3 rounded-[4px] text-center hover:opacity-90 transition-opacity"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, minHeight: '44px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    {strings.hero.primaryCta}
                  </a>
                  <a
                    href="#all-generators"
                    className="border border-brand-purple text-brand-purple text-sm font-bold uppercase px-4 py-3 rounded-[4px] text-center hover:bg-brand-purple/5 transition-colors"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, minHeight: '36px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    {strings.hero.secondaryCta}
                  </a>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Generators */}
        <section className="py-10 md:py-12">
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="text-heading text-2xl md:text-[28px] mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              {strings.featured.heading}
            </h2>
            <p className="text-body mb-8">{strings.featured.subheading}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredGenerators.map(gen => (
                <a
                  key={gen.slug}
                  href={`/generators/${gen.slug}`}
                  className="gen-card block bg-white border border-card-border rounded-[3px] p-5"
                >
                  <h3 className="text-heading text-sm font-bold mb-1.5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {gen.name}
                  </h3>
                  <p className="text-body text-sm mb-3">{gen.description}</p>
                  <span className="inline-block text-[11px] uppercase border border-brand-purple text-brand-purple rounded-[3px] px-1.5 py-0.5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                    {gen.category}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Browse by Category */}
        <section className="py-10 md:py-12 bg-light-bg">
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="text-heading text-2xl md:text-[28px] mb-8" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              {strings.categories.heading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {strings.categories.items.map((cat) => (
                <a
                  key={cat.slug}
                  href={`/generators#${cat.slug}`}
                  className="gen-card flex items-start gap-4 bg-white border border-card-border rounded-[3px] p-5 group"
                >
                  <div className="shrink-0">
                    <CategoryIcon category={cat.slug} className="w-20 h-14" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-heading text-sm font-bold mb-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                      {cat.name}
                    </h3>
                    <p className="text-body text-sm">{cat.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand-purple shrink-0 mt-1 group-hover:translate-x-1 transition-transform" aria-hidden="true"/>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: All Generators Directory */}
        <section id="all-generators" className="py-10 md:py-12" ref={el => { sectionRefs.current['all-generators'] = el; }}>
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="text-heading text-2xl md:text-[28px] mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              {strings.directory.heading}
            </h2>
            <p className="text-body mb-6">{strings.directory.subheading}</p>

            {/* Search */}
            <div className="mb-8 max-w-[480px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-body" aria-hidden="true"/>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder={strings.directory.searchPlaceholder}
                  aria-label={strings.directory.searchAriaLabel}
                  className="w-full pl-10 pr-4 py-2.5 border border-card-border rounded-[4px] text-sm text-heading bg-white focus:border-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>
              {hasSearch && (
                <p className="mt-2 text-sm text-body">
                  {totalMatches} {totalMatches === 1 ? 'generator' : 'generators'} match
                </p>
              )}
            </div>

            {/* No results */}
            {hasSearch && totalMatches === 0 && (
              <div className="text-center py-10">
                <p className="text-body mb-4">{strings.directory.noResults}</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="border border-brand-purple text-brand-purple text-sm font-bold uppercase px-4 py-2 rounded-[4px] hover:bg-brand-purple/5 transition-colors mr-4"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                >
                  {strings.directory.clearSearch}
                </button>
                <a href="/s/ai_site_builder" className="text-brand-purple text-sm underline hover:no-underline">
                  {strings.directory.cantFindLink}
                </a>
              </div>
            )}

            {/* Category Subsections */}
            {CATEGORY_KEYS.map(key => {
              const filtered = getFilteredGenerators(key);
              if (hasSearch && filtered.length === 0) return null;

              const subsection = strings.directory.subsections[key];
              const isExpanded = expandedSections[key] ?? false;
              const hasMore = filtered.length > VISIBLE_COUNT;
              const Illustration = categoryIllustrations[key];

              // Progressive enhancement: with JS, show only VISIBLE_COUNT cards when collapsed
              // Without JS, all cards are visible (jsReady=false shows all)
              const visibleCards = (jsReady && !hasSearch && !isExpanded && hasMore)
                ? filtered.slice(0, VISIBLE_COUNT)
                : filtered;

              return (
                <div
                  key={key}
                  id={key}
                  className="mb-10 scroll-mt-20"
                  ref={el => { sectionRefs.current[key] = el; }}
                >
                  <h3 className="text-heading text-lg md:text-xl mb-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {subsection.heading}
                  </h3>
                  <p className="text-body text-sm mb-5">{subsection.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filtered.map(gen => {
                      const isHiddenByToggle = jsReady && !hasSearch && !isExpanded && hasMore && filtered.indexOf(gen) >= VISIBLE_COUNT;
                      return (
                        <a
                          key={gen.slug}
                          href={`/generators/${gen.slug}`}
                          className="gen-card block bg-white border border-card-border rounded-[3px] p-5"
                          style={isHiddenByToggle ? { display: 'none' } : undefined}
                        >
                          {Illustration && (
                            <div className="mb-3">
                              <Illustration width="60" height="45" className="w-[60px] h-[45px]" />
                            </div>
                          )}
                          <h4 className="text-heading text-sm font-bold mb-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                            {gen.name}
                          </h4>
                          <p className="text-body text-sm">{gen.description}</p>
                        </a>
                      );
                    })}
                  </div>

                  {/* Show all / Show less toggle - only visible with JS */}
                  {!hasSearch && hasMore && jsReady && (
                    <button
                      onClick={() => toggleSection(key)}
                      aria-expanded={isExpanded}
                      aria-controls={`section-${key}`}
                      className="mt-4 text-brand-purple text-sm font-bold uppercase hover:underline"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 700 }}
                    >
                      {isExpanded
                        ? strings.directory.showLess
                        : strings.directory.showAll.replace('{count}', filtered.length)
                      }
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section className="py-10 md:py-12 bg-light-bg">
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="text-heading text-2xl md:text-[28px] mb-8 text-center" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              {strings.howItWorks.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strings.howItWorks.steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <StepCircle number={i + 1} />
                  <h3 className="text-heading text-sm font-bold mt-4 mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {step.title}
                  </h3>
                  <p className="text-body text-sm max-w-xs">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Why Strikingly */}
        <section className="py-10 md:py-12">
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="text-heading text-2xl md:text-[28px] mb-8 text-center" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              {strings.whyStrikingly.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strings.whyStrikingly.items.map((item, i) => {
                const Icon = whyIcons[i];
                return (
                  <div key={i} className="flex flex-col items-center text-center">
                    <Icon />
                    <h3 className="text-heading text-sm font-bold mt-4 mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                      {item.title}
                    </h3>
                    <p className="text-body text-sm max-w-xs">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="py-10 md:py-12 bg-light-bg">
          <div className="max-w-[800px] mx-auto px-5">
            <h2 className="text-heading text-2xl md:text-[28px] mb-8 text-center" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              {strings.faq.heading}
            </h2>
            <div className="space-y-0">
              {strings.faq.items.map((item, i) => {
                const isOpen = expandedFaq === i;
                return (
                  <div key={i} className="border-b border-divider">
                    <button
                      id={`faq-question-${i}`}
                      onClick={() => toggleFaq(i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      className="w-full flex items-center justify-between py-4 text-left hover:text-brand-purple transition-colors"
                    >
                      <span className="text-heading text-sm font-bold pr-4" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                        {item.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 shrink-0 text-brand-purple" aria-hidden="true"/>
                      ) : (
                        <ChevronDown className="w-5 h-5 shrink-0 text-body" aria-hidden="true"/>
                      )}
                    </button>
                    <div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
                    >
                      <p className="text-body text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 9: Closing CTA */}
        <section className="py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-5 text-center">
            <h2 className="text-heading text-2xl md:text-[32px] mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
              {strings.closingCta.heading}
            </h2>
            <p className="text-body mb-8 max-w-md mx-auto">{strings.closingCta.subheadline}</p>
            <a
              href="/s/ai_site_builder"
              className="ai-gradient-bg text-white text-sm font-bold uppercase px-6 py-3 rounded-[4px] inline-block hover:opacity-90 transition-opacity"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, minHeight: '44px', lineHeight: '44px' }}
            >
              {strings.closingCta.cta}
            </a>
          </div>
        </section>
      </main>

      {/* Section 10: Footer */}
      <footer className="border-t border-divider py-10 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <span className="text-heading font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                {strings.footer.logoText}
              </span>
            </div>
            {strings.footer.columns.map((col, i) => (
              <div key={i}>
                <h4 className="text-heading text-xs font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {col.title}
                </h4>
                <ul className="space-y-2 list-none p-0 m-0">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href={link.href} className="text-body text-sm hover:text-brand-purple transition-colors">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-body text-xs border-t border-divider pt-6">
            {strings.footer.copyright.replace('{year}', new Date().getFullYear())}
          </p>
        </div>
      </footer>
    </div>
  );
}
