import React, { useState, useCallback, useRef, useEffect } from 'react';
import { categories, featuredGenerators, allGenerators, VISIBLE_DEFAULT } from '@/data/generators';
import strings from '@/data/strings.en.json';

/* ─── SVG Icons ─── */

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#636972" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const ChevronDownIcon = ({ expanded }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#636972" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const WebsiteIllustration = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="4" y="8" width="40" height="32" rx="3" stroke="#8159BB" strokeWidth="2" />
    <line x1="4" y1="16" x2="44" y2="16" stroke="#8159BB" strokeWidth="2" />
    <circle cx="10" cy="12" r="1.5" fill="#8159BB" /><circle cx="15" cy="12" r="1.5" fill="#8159BB" /><circle cx="20" cy="12" r="1.5" fill="#8159BB" />
    <rect x="8" y="20" width="14" height="8" rx="1" stroke="#8159BB" strokeWidth="1.5" />
    <rect x="26" y="20" width="14" height="16" rx="1" stroke="#8159BB" strokeWidth="1.5" />
    <rect x="8" y="32" width="14" height="4" rx="1" stroke="#8159BB" strokeWidth="1.5" />
  </svg>
);

const LandingPageIllustration = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="8" y="4" width="32" height="40" rx="3" stroke="#8159BB" strokeWidth="2" />
    <rect x="14" y="10" width="20" height="4" rx="1" stroke="#8159BB" strokeWidth="1.5" />
    <rect x="14" y="18" width="20" height="8" rx="1" stroke="#8159BB" strokeWidth="1.5" />
    <rect x="16" y="30" width="16" height="6" rx="2" fill="#8159BB" opacity="0.2" stroke="#8159BB" strokeWidth="1.5" />
  </svg>
);

const PortfolioIllustration = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="4" y="8" width="40" height="32" rx="3" stroke="#8159BB" strokeWidth="2" />
    <rect x="8" y="12" width="14" height="10" rx="1" stroke="#8159BB" strokeWidth="1.5" />
    <rect x="26" y="12" width="14" height="10" rx="1" stroke="#8159BB" strokeWidth="1.5" />
    <rect x="8" y="26" width="32" height="10" rx="1" stroke="#8159BB" strokeWidth="1.5" />
  </svg>
);

const BlogIllustration = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="8" y="4" width="32" height="40" rx="3" stroke="#8159BB" strokeWidth="2" />
    <line x1="14" y1="12" x2="34" y2="12" stroke="#8159BB" strokeWidth="1.5" />
    <line x1="14" y1="18" x2="34" y2="18" stroke="#8159BB" strokeWidth="1.5" />
    <line x1="14" y1="24" x2="28" y2="24" stroke="#8159BB" strokeWidth="1.5" />
    <rect x="14" y="30" width="20" height="6" rx="2" fill="#8159BB" opacity="0.2" stroke="#8159BB" strokeWidth="1.5" />
  </svg>
);

const StoreIllustration = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M8 20h32v20a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V20z" stroke="#8159BB" strokeWidth="2" />
    <path d="M4 20l4-12h32l4 12" stroke="#8159BB" strokeWidth="2" />
    <rect x="18" y="26" width="12" height="8" rx="1" stroke="#8159BB" strokeWidth="1.5" />
  </svg>
);

const LinkInBioIllustration = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="14" r="6" stroke="#8159BB" strokeWidth="2" />
    <rect x="14" y="24" width="20" height="4" rx="2" stroke="#8159BB" strokeWidth="1.5" />
    <rect x="14" y="31" width="20" height="4" rx="2" stroke="#8159BB" strokeWidth="1.5" />
    <rect x="14" y="38" width="20" height="4" rx="2" stroke="#8159BB" strokeWidth="1.5" />
  </svg>
);

const categoryIllustrations = {
  websites: WebsiteIllustration,
  'landing-pages': LandingPageIllustration,
  portfolios: PortfolioIllustration,
  blogs: BlogIllustration,
  stores: StoreIllustration,
  'link-in-bio': LinkInBioIllustration,
};

/* ─── Hero Illustration ─── */

const HeroIllustration = () => (
  <svg width="420" height="320" viewBox="0 0 420 320" fill="none" aria-hidden="true" className="w-full max-w-[420px] h-auto">
    <rect x="40" y="20" width="340" height="240" rx="12" stroke="#8159BB" strokeWidth="2" opacity="0.3" />
    <rect x="60" y="40" width="300" height="200" rx="8" stroke="#8159BB" strokeWidth="1.5" opacity="0.5" />
    <line x1="60" y1="72" x2="360" y2="72" stroke="#8159BB" strokeWidth="1" opacity="0.3" />
    <circle cx="78" cy="56" r="5" fill="#8159BB" opacity="0.3" />
    <circle cx="94" cy="56" r="5" fill="#8159BB" opacity="0.3" />
    <circle cx="110" cy="56" r="5" fill="#8159BB" opacity="0.3" />
    <rect x="80" y="88" width="100" height="60" rx="4" stroke="#8159BB" strokeWidth="1.5" opacity="0.4" />
    <rect x="200" y="88" width="140" height="60" rx="4" stroke="#8159BB" strokeWidth="1.5" opacity="0.4" />
    <rect x="80" y="160" width="260" height="16" rx="3" stroke="#8159BB" strokeWidth="1" opacity="0.25" />
    <rect x="80" y="184" width="180" height="16" rx="3" stroke="#8159BB" strokeWidth="1" opacity="0.25" />
    <rect x="80" y="210" width="80" height="24" rx="4" fill="url(#heroGrad)" opacity="0.3" />
    <defs>
      <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7671FF" />
        <stop offset="100%" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
  </svg>
);

/* ─── Step / Why Icons ─── */

const StepIcon = ({ number }) => (
  <div className="flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg" style={{ background: 'linear-gradient(135deg, #7671FF, #CB0C9F)' }}>
    {number}
  </div>
);

const LiveIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="18" stroke="#8159BB" strokeWidth="2" />
    <path d="M16 24l5 5 11-11" stroke="#8159BB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MobileIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="14" y="4" width="20" height="40" rx="3" stroke="#8159BB" strokeWidth="2" />
    <line x1="14" y1="36" x2="34" y2="36" stroke="#8159BB" strokeWidth="1.5" />
    <circle cx="24" cy="40" r="2" fill="#8159BB" />
  </svg>
);

const FreeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="18" stroke="#8159BB" strokeWidth="2" />
    <text x="24" y="30" textAnchor="middle" fill="#8159BB" fontSize="18" fontWeight="700" fontFamily="inherit">$</text>
    <line x1="14" y1="14" x2="34" y2="34" stroke="#8159BB" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

/* ─── Slug helper ─── */

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

/* ─── Main Component ─── */

export default function GeneratorsHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedFaq, setExpandedFaq] = useState(0);
  const searchInputRef = useRef(null);

  // Add js-active class for progressive enhancement
  useEffect(() => {
    document.documentElement.classList.add('js-active');
  }, []);

  const handleSearch = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    if (searchInputRef.current) searchInputRef.current.focus();
  }, []);

  const toggleSection = useCallback((categoryId) => {
    setExpandedSections(prev => ({ ...prev, [categoryId]: !prev[categoryId] }));
  }, []);

  const toggleFaq = useCallback((index) => {
    setExpandedFaq(prev => prev === index ? -1 : index);
  }, []);

  // Search filtering
  const query = searchQuery.toLowerCase().trim();
  const filteredGenerators = {};
  let totalMatches = 0;

  Object.entries(allGenerators).forEach(([key, section]) => {
    const matching = section.generators.filter(g => {
      if (!query) return true;
      return (
        g.name.toLowerCase().includes(query) ||
        g.description.toLowerCase().includes(query) ||
        section.heading.toLowerCase().includes(query)
      );
    });
    if (matching.length > 0 || !query) {
      filteredGenerators[key] = { ...section, matchingGenerators: matching };
      totalMatches += matching.length;
    }
  });

  const hasSearch = query.length > 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Section 0: Top Bar */}
      <header className="bg-white border-b border-[#E2E4E7] sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center">
          <a href="/" className="flex items-center gap-1.5 no-underline">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#8159BB" />
              <path d="M2 17l10 5 10-5" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12l10 5 10-5" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-heading font-bold text-[#2E2E2F] text-base tracking-wide uppercase">strikingly AI</span>
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-[#E2E4E7]">
        <ol className="max-w-[1200px] mx-auto px-5 py-3 flex items-center gap-2 text-sm text-[#636972] list-none p-0 m-0" style={{ counterReset: 'breadcrumb-item' }}>
          <li style={{ counterIncrement: 'breadcrumb-item' }}><a href="/" className="text-[#636972] hover:text-[#8159BB] no-underline transition-colors">{strings.breadcrumb.home}</a></li>
          <li aria-hidden="true" className="text-[#C6C9CD] select-none">&gt;</li>
          <li style={{ counterIncrement: 'breadcrumb-item' }}><span aria-current="page" className="text-[#636972]">{strings.breadcrumb.current}</span></li>
        </ol>
      </nav>

      <main>
        {/* Section 2: Hero */}
        <section className="relative overflow-hidden" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          {/* Faint purple-pink wash */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(119,113,255,0.06) 0%, rgba(203,12,159,0.03) 40%, transparent 70%)' }} aria-hidden="true" />
          <div className="max-w-[1200px] mx-auto px-5 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              {/* Left column */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="font-heading font-bold uppercase leading-tight mb-5" style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
                  <span className="block text-[#2E2E2F]">{strings.hero.h1Line1}</span>
                  <span className="block bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #7671FF, #CB0C9F)' }}>{strings.hero.h1Line2}</span>
                </h1>
                <p className="text-[#636972] text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">{strings.hero.subheadline}</p>
                <div className="flex flex-col sm:flex-row items-center gap-2.5 justify-center lg:justify-start">
                  <a
                    href="/s/ai_site_builder"
                    className="inline-flex items-center justify-center h-11 px-6 rounded font-heading font-bold text-sm uppercase text-white no-underline transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB]"
                    style={{ background: 'linear-gradient(90deg, #7671FF, #CB0C9F)' }}
                  >
                    {strings.hero.primaryCta}
                  </a>
                  <a
                    href="#all-generators"
                    className="inline-flex items-center justify-center h-11 px-6 rounded font-heading font-bold text-sm uppercase text-[#8159BB] no-underline border border-[#8159BB] bg-transparent transition-colors hover:bg-[#8159BB]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB]"
                  >
                    {strings.hero.secondaryCta}
                  </a>
                </div>
              </div>
              {/* Right column */}
              <div className="flex-shrink-0">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Generators */}
        <section className="py-10" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="font-heading font-bold text-[#4B5056] uppercase mb-2" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>{strings.featured.heading}</h2>
            <p className="text-[#636972] text-sm mb-8">{strings.featured.subheading}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredGenerators.map((gen) => (
                <a
                  key={gen.slug}
                  href={`/generators/${gen.slug}`}
                  className="block bg-white border border-[#C6C9CD] rounded-[3px] p-5 no-underline transition-all hover:border-[#8159BB] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB] group"
                >
                  <h3 className="font-heading font-bold text-[#2E2E2F] uppercase text-sm mb-1.5">{gen.name}</h3>
                  <p className="text-[#636972] text-sm mb-3">{gen.description}</p>
                  <span className="inline-block font-heading text-[11px] uppercase px-1.5 py-0.5 rounded-[3px] border border-[#8159BB] text-[#8159BB] leading-tight">{gen.category}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Browse by Category */}
        <section className="py-10 bg-[#F4F6F8]" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="font-heading font-bold text-[#4B5056] uppercase mb-8" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>{strings.browseByCategory.heading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((cat) => {
                const Illustration = categoryIllustrations[cat.slug];
                return (
                  <a
                    key={cat.id}
                    href={cat.href}
                    className="flex items-center gap-4 bg-white border border-[#C6C9CD] rounded-[3px] p-5 no-underline transition-all hover:border-[#8159BB] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB] group"
                  >
                    <div className="flex-shrink-0">
                      <Illustration />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-bold text-[#2E2E2F] uppercase text-sm mb-0.5">{cat.name}</h3>
                      <p className="text-[#636972] text-sm">{cat.description}</p>
                    </div>
                    <div className="flex-shrink-0 text-[#8159BB] group-hover:translate-x-1 transition-transform">
                      <ArrowRightIcon />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5: All Generators Directory */}
        <section id="all-generators" className="py-10" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="font-heading font-bold text-[#4B5056] uppercase mb-2" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>{strings.allGenerators.heading}</h2>
            <p className="text-[#636972] text-sm mb-6">{strings.allGenerators.subheading}</p>

            {/* Search */}
            <div className="mb-8 max-w-[480px]">
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <SearchIcon />
                </div>
                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder={strings.allGenerators.searchPlaceholder}
                  aria-label={strings.allGenerators.searchAriaLabel}
                  className="w-full h-9 pl-10 pr-4 border border-[#C6C9CD] rounded-[4px] text-sm text-[#2E2E2F] bg-white placeholder:text-[#C6C9CD] focus:outline-none focus:border-[#8159BB] focus:ring-1 focus:ring-[#8159BB]"
                />
              </div>
              {hasSearch && (
                <p className="mt-2 text-sm text-[#636972]">
                  {totalMatches > 0
                    ? strings.allGenerators.matchCount.replace('{count}', totalMatches)
                    : strings.allGenerators.noResults
                  }
                  {totalMatches === 0 && (
                    <>
                      {' '}
                      <button onClick={clearSearch} className="text-[#8159BB] underline bg-transparent border-none cursor-pointer font-inherit text-sm p-0">
                        {strings.allGenerators.clearSearch}
                      </button>
                      <span className="block mt-1">
                        <a href="/s/ai_site_builder" className="text-[#8159BB] no-underline hover:underline text-sm">{strings.allGenerators.cantFindLink}</a>
                      </span>
                    </>
                  )}
                </p>
              )}
            </div>

            {/* Category Subsections */}
            {Object.entries(filteredGenerators).map(([key, section]) => {
              const isExpanded = expandedSections[key];
              const Illustration = categoryIllustrations[key] || WebsiteIllustration;
              const hasMore = !hasSearch && section.generators.length > VISIBLE_DEFAULT;
              const sectionId = section.categoryId;
              const extraPanelId = `section-${key}-extra`;

              // Determine which generators are visible
              // All are rendered in DOM; extras are hidden via CSS when not expanded
              const visibleGens = hasSearch
                ? section.matchingGenerators
                : section.generators;
              const defaultGens = hasSearch
                ? section.matchingGenerators
                : section.generators.slice(0, VISIBLE_DEFAULT);
              const extraGens = hasSearch
                ? []
                : section.generators.slice(VISIBLE_DEFAULT);

              return (
                <div
                  key={key}
                  id={sectionId}
                  className="mb-10 scroll-mt-20"
                  style={{ display: hasSearch && section.matchingGenerators.length === 0 ? 'none' : undefined }}
                >
                  <h3 className="font-heading font-bold text-[#4B5056] uppercase text-lg mb-1">{section.heading}</h3>
                  <p className="text-[#636972] text-sm mb-5">{section.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {defaultGens.map((gen) => (
                      <a
                        key={gen.slug}
                        href={`/generators/${gen.slug}`}
                        className="block bg-white border border-[#C6C9CD] rounded-[3px] p-5 no-underline transition-all hover:border-[#8159BB] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB] group"
                      >
                        <div className="mb-3">
                          <Illustration />
                        </div>
                        <h4 className="font-heading font-bold text-[#2E2E2F] uppercase text-sm mb-1">{gen.name}</h4>
                        <p className="text-[#636972] text-sm">{gen.description}</p>
                      </a>
                    ))}
                  </div>
                  {extraGens.length > 0 && (
                    <div
                      id={extraPanelId}
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ maxHeight: isExpanded ? '2000px' : '0px', opacity: isExpanded ? 1 : 0 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
                        {extraGens.map((gen) => (
                          <a
                            key={gen.slug}
                            href={`/generators/${gen.slug}`}
                            className="block bg-white border border-[#C6C9CD] rounded-[3px] p-5 no-underline transition-all hover:border-[#8159BB] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB] group"
                          >
                            <div className="mb-3">
                              <Illustration />
                            </div>
                            <h4 className="font-heading font-bold text-[#2E2E2F] uppercase text-sm mb-1">{gen.name}</h4>
                            <p className="text-[#636972] text-sm">{gen.description}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  {hasMore && (
                    <div className="mt-4">
                      <button
                        onClick={() => toggleSection(key)}
                        aria-expanded={isExpanded ? 'true' : 'false'}
                        aria-controls={extraPanelId}
                        className="inline-flex items-center gap-1 font-heading font-bold text-[#8159BB] text-sm uppercase bg-transparent border-none cursor-pointer p-0 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB]"
                      >
                        {isExpanded
                          ? strings.allGenerators.showLess
                          : strings.allGenerators.showAll.replace('{count}', section.generators.length)
                        }
                        <ChevronDownIcon expanded={isExpanded} />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section className="py-10 bg-[#F4F6F8]" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="font-heading font-bold text-[#4B5056] uppercase mb-10 text-center" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>{strings.howItWorks.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {strings.howItWorks.steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-4">
                    <StepIcon number={i + 1} />
                  </div>
                  <h3 className="font-heading font-bold text-[#2E2E2F] uppercase text-sm mb-2">{step.title}</h3>
                  <p className="text-[#636972] text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Why Strikingly */}
        <section className="py-10" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="font-heading font-bold text-[#4B5056] uppercase mb-10 text-center" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>{strings.whyStrikingly.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {strings.whyStrikingly.items.map((item, i) => {
                const icons = [LiveIcon, MobileIcon, FreeIcon];
                const Icon = icons[i];
                return (
                  <div key={i} className="text-center">
                    <div className="flex justify-center mb-4">
                      <Icon />
                    </div>
                    <h3 className="font-heading font-bold text-[#2E2E2F] uppercase text-sm mb-2">{item.title}</h3>
                    <p className="text-[#636972] text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="py-10 bg-[#F4F6F8]" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <div className="max-w-[800px] mx-auto px-5">
            <h2 className="font-heading font-bold text-[#4B5056] uppercase mb-8 text-center" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>{strings.faq.heading}</h2>
            <div className="space-y-0">
              {strings.faq.items.map((item, i) => {
                const isOpen = expandedFaq === i;
                const panelId = `faq-panel-${i}`;
                const buttonId = `faq-button-${i}`;
                return (
                  <div key={i} className="border-b border-[#E2E4E7]">
                    <button
                      id={buttonId}
                      onClick={() => toggleFaq(i)}
                      aria-expanded={isOpen ? 'true' : 'false'}
                      aria-controls={panelId}
                      className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB] group"
                    >
                      <span className="font-heading font-bold text-[#2E2E2F] text-sm uppercase pr-4">{item.question}</span>
                      <ChevronDownIcon expanded={isOpen} />
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
                    >
                      <div className="pb-4 text-[#636972] text-sm leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 9: Closing CTA */}
        <section className="py-10" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="max-w-[1200px] mx-auto px-5 text-center">
            <h2 className="font-heading font-bold text-[#2E2E2F] uppercase mb-3" style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>{strings.closingCta.headline}</h2>
            <p className="text-[#636972] text-sm mb-8 max-w-md mx-auto">{strings.closingCta.sub}</p>
            <a
              href="/s/ai_site_builder"
              className="inline-flex items-center justify-center h-11 px-8 rounded-[4px] font-heading font-bold text-sm uppercase text-white no-underline transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB]"
              style={{ background: 'linear-gradient(90deg, #7671FF, #CB0C9F)', height: '44px' }}
            >
              {strings.closingCta.cta}
            </a>
          </div>
        </section>
      </main>

      {/* Section 10: Footer */}
      <footer className="bg-[#F4F6F8] border-t border-[#E2E4E7] py-10">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div>
              <a href="/" className="flex items-center gap-1.5 no-underline mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#8159BB" />
                  <path d="M2 17l10 5 10-5" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12l10 5 10-5" stroke="#8159BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-heading font-bold text-[#2E2E2F] text-sm tracking-wide uppercase">strikingly</span>
              </a>
            </div>
            {strings.footer.columns.map((col, i) => (
              <div key={i}>
                <h4 className="font-heading font-bold text-[#4B5056] uppercase text-xs mb-3">{col.heading}</h4>
                <ul className="list-none p-0 m-0 space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href={link.href} className="text-[#636972] text-sm no-underline hover:text-[#8159BB] transition-colors">{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-[#E2E4E7] pt-5">
            <p className="text-[#636972] text-xs">{strings.footer.copyright.replace('{year}', new Date().getFullYear())}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
