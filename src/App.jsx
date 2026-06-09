import React, { useState, useMemo, useEffect } from 'react';
import strings from './strings';
import { featuredGenerators, allGenerators, categorySlugs, flatGenerators } from './generatorData';

const t = strings.en;

/* ───────── TOP BAR ───────── */
function TopBar() {
  return (
    <header className="bg-white border-b border-divider sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center">
        <a href="/" className="font-heading font-bold text-xl uppercase tracking-wide text-heading-dark no-underline">
          {t.logo}
        </a>
      </div>
    </header>
  );
}

/* ───────── BREADCRUMB ───────── */
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-5 py-[10px]">
      <ol className="list-none flex items-center gap-[5px] m-0 p-0 text-[13px] text-body">
        <li><a href="/" className="text-body no-underline hover:text-brand-purple">{t.breadcrumbHome}</a></li>
        <li aria-hidden="true">&gt;</li>
        <li className="text-body">{t.breadcrumbCurrent}</li>
      </ol>
    </nav>
  );
}

/* ───────── HERO ───────── */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(129,89,187,0.06) 0%, rgba(255,255,255,0) 70%)' }}>
      <div className="max-w-[1200px] mx-auto px-5 py-[60px] md:py-[80px] flex flex-col md:flex-row items-center gap-10">
        {/* Left column */}
        <div className="flex-1 text-center md:text-start">
          <h1 className="m-0">
            <span className="block font-heading font-bold uppercase text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] text-heading-dark">
              {t.heroLine1}
            </span>
            <span className="block font-heading font-bold uppercase text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] ai-gradient-text">
              {t.heroLine2}
            </span>
          </h1>
          <p className="text-body text-[16px] leading-[1.6] mt-[20px] mb-[30px] max-w-[520px] mx-auto md:mx-0">
            {t.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-[10px] justify-center md:justify-start">
            <a
              href="/s/ai_site_builder"
              className="inline-flex items-center justify-center h-11 px-[15px] py-[9px] rounded-btn font-heading font-bold text-[14px] uppercase no-underline ai-gradient-bg hover:opacity-90 transition-opacity"
              style={{ color: '#FFFFFF' }}
            >
              {t.heroPrimaryCta}
            </a>
            <a
              href="#all-generators"
              className="inline-flex items-center justify-center h-11 px-[15px] py-[9px] rounded-btn font-heading font-bold text-[14px] uppercase no-underline border border-brand-purple text-brand-purple bg-transparent hover:bg-brand-purple hover:text-white transition-colors"
            >
              {t.heroSecondaryCta}
            </a>
          </div>
        </div>
        {/* Right column - illustration placeholder */}
        <div className="flex-1 flex justify-center" aria-hidden="true">
          <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full h-auto">
            <rect x="60" y="20" width="280" height="240" rx="8" stroke="#C6C9CD" strokeWidth="2" fill="white" />
            <rect x="76" y="36" width="120" height="8" rx="4" fill="#E2E4E7" />
            <rect x="76" y="52" width="80" height="8" rx="4" fill="#E2E4E7" />
            <rect x="76" y="72" width="248" height="2" rx="1" fill="#F4F6F8" />
            <rect x="76" y="86" width="248" height="100" rx="4" fill="#F4F6F8" />
            <rect x="76" y="196" width="248" height="2" rx="1" fill="#F4F6F8" />
            <rect x="76" y="210" width="160" height="8" rx="4" fill="#E2E4E7" />
            <rect x="76" y="226" width="220" height="6" rx="3" fill="#E2E4E7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ───────── CATEGORY TAG ───────── */
function CategoryTag({ label }) {
  return (
    <span className="inline-block font-heading font-bold text-[11px] uppercase text-brand-purple border border-brand-purple rounded-tag px-[6px] py-[2px] leading-none">
      {label}
    </span>
  );
}

/* ───────── FEATURED GENERATORS (3x3) ───────── */
function FeaturedGenerators() {
  return (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-[26px] md:text-[30px] text-heading m-0 leading-[1.2] text-center md:text-start">
          {t.featuredHeading}
        </h2>
        <p className="text-body text-[15px] mt-[10px] mb-[30px] text-center md:text-start">
          {t.featuredSub}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {featuredGenerators.map((gen) => (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="block bg-white border border-card-border rounded-card p-5 no-underline text-inherit card-hover"
            >
              <p className="font-heading font-bold text-[16px] uppercase text-heading-dark m-0 mb-[6px] leading-[1.2]">
                {gen.name}
              </p>
              <p className="text-body text-[14px] m-0 mb-[10px] leading-[1.5]">{gen.desc}</p>
              <CategoryTag label={gen.category} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── BROWSE BY CATEGORY ───────── */
function BrowseByCategory() {
  return (
    <section className="py-10 bg-light-bg">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-[26px] md:text-[30px] text-heading m-0 leading-[1.2] text-center md:text-start">
          {t.browseHeading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-[30px]">
          {t.categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/generators#${cat.slug}`}
              className="block bg-white border border-card-border rounded-card p-5 no-underline text-inherit card-hover"
            >
              {/* Category illustration placeholder */}
              <div className="w-10 h-10 rounded-card bg-light-bg mb-[15px] flex items-center justify-center" aria-hidden="true">
                <CategoryIcon slug={cat.slug} />
              </div>
              <p className="font-heading font-bold text-[16px] uppercase text-heading-dark m-0 mb-[6px] leading-[1.2]">
                {cat.name}
              </p>
              <p className="text-body text-[14px] m-0 leading-[1.5]">{cat.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Small inline category illustration */
function CategoryIcon({ slug }) {
  const paths = {
    websites: <path d="M4 6h16v12H4z" stroke="#8159BB" strokeWidth="1.5" fill="none" rx="2" />,
    'landing-pages': <path d="M4 4h16v16H4z" stroke="#8159BB" strokeWidth="1.5" fill="none" rx="2" />,
    portfolios: <><rect x="4" y="4" width="7" height="7" rx="1" stroke="#8159BB" strokeWidth="1.5" fill="none" /><rect x="13" y="4" width="7" height="7" rx="1" stroke="#8159BB" strokeWidth="1.5" fill="none" /><rect x="4" y="13" width="7" height="7" rx="1" stroke="#8159BB" strokeWidth="1.5" fill="none" /><rect x="13" y="13" width="7" height="7" rx="1" stroke="#8159BB" strokeWidth="1.5" fill="none" /></>,
    blogs: <><path d="M6 6h12v2H6zM6 10h10v2H6zM6 14h8v2H6z" fill="#8159BB" opacity="0.3" /><rect x="4" y="4" width="16" height="16" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" /></>,
    stores: <><circle cx="12" cy="9" r="2" stroke="#8159BB" strokeWidth="1.5" fill="none" /><path d="M6 20V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v11" stroke="#8159BB" strokeWidth="1.5" fill="none" /></>,
    'link-in-bio': <><circle cx="12" cy="9" r="4" stroke="#8159BB" strokeWidth="1.5" fill="none" /><path d="M7 18a5 5 0 0 1 10 0" stroke="#8159BB" strokeWidth="1.5" fill="none" /></>,
  };
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {paths[slug] || <rect x="4" y="4" width="16" height="16" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />}
    </svg>
  );
}

/* ───────── ALL GENERATORS DIRECTORY ───────── */
function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('');
  // null = not yet initialized (all visible); true = collapsed; false = expanded
  const [collapsedSections, setCollapsedSections] = useState(null);

  // On mount, progressively collapse extras
  useEffect(() => {
    const initial = {};
    categorySlugs.forEach((slug) => {
      if (allGenerators[slug].items.length > 6) {
        initial[slug] = true;
      }
    });
    setCollapsedSections(initial);
  }, []);

  const INITIAL_VISIBLE = 6;

  const toggleSection = (slug) => {
    setCollapsedSections((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  // Filter generators by search
  const filteredSections = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return null;
    return categorySlugs.map((slug) => {
      const category = allGenerators[slug];
      const matched = category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          category.heading.toLowerCase().includes(q)
      );
      return { slug, ...category, items: matched };
    }).filter((section) => section.items.length > 0);
  }, [searchQuery]);

  const visibleSections = filteredSections || categorySlugs.map((slug) => ({ slug, ...allGenerators[slug] }));
  const totalMatches = filteredSections ? filteredSections.reduce((sum, s) => sum + s.items.length, 0) : null;

  return (
    <section id="all-generators" className="py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-[26px] md:text-[30px] text-heading m-0 leading-[1.2] text-center md:text-start">
          {t.allGeneratorsHeading}
        </h2>
        <p className="text-body text-[15px] mt-[10px] mb-[30px] text-center md:text-start">
          {t.allGeneratorsSub}
        </p>

        {/* Search input */}
        <div className="mb-[30px] max-w-[480px] relative">
          <label htmlFor="generator-search" className="sr-only">{t.searchLabel}</label>
          <div className="relative">
            <svg
              className="absolute start-[12px] top-1/2 -translate-y-1/2 w-4 h-4 text-body pointer-events-none"
              aria-hidden="true"
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              id="generator-search"
              type="search"
              aria-label={t.searchLabel}
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 ps-[36px] pe-[12px] border border-card-border rounded-btn text-[14px] text-body bg-white font-body outline-none focus:border-brand-purple"
            />
          </div>
          {totalMatches !== null && (
            <p className="text-[13px] text-body mt-[8px] ms-[4px]">
              {t.matchCount.replace('{count}', totalMatches)}
            </p>
          )}
        </div>

        {/* No results */}
        {filteredSections && filteredSections.length === 0 && (
          <div className="text-center py-10">
            <p className="text-body text-[16px] mb-[15px]">{t.noResults}</p>
            <button
              onClick={() => setSearchQuery('')}
              className="inline-flex items-center justify-center h-9 px-[15px] rounded-btn font-heading font-bold text-[13px] uppercase border border-brand-purple text-brand-purple bg-transparent cursor-pointer hover:bg-brand-purple hover:text-white transition-colors"
            >
              {t.clearSearch}
            </button>
            <p className="text-[14px] text-body mt-[15px]">
              {t.cantFind} <a href="/s/ai_site_builder" className="text-brand-purple underline">{t.aiBuilder}</a>.
            </p>
          </div>
        )}

        {/* Category subsections */}
        {visibleSections.map((section) => {
          // null means JS hasn't run yet — show all
          const isCollapsed = collapsedSections !== null ? (collapsedSections[section.slug] || false) : false;
          const showToggle = section.items.length > INITIAL_VISIBLE;
          const hiddenCount = section.items.length - INITIAL_VISIBLE;
          const hiddenStart = INITIAL_VISIBLE;
          const toggleReady = collapsedSections !== null;

          return (
            <div key={section.slug} id={section.slug} className="mb-10 scroll-mt-20">
              <h3 className="font-heading font-bold uppercase text-[20px] md:text-[24px] text-heading m-0 leading-[1.2]">
                {section.heading}
              </h3>
              <p className="text-body text-[14px] mt-[5px] mb-[20px]">{section.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {section.items.map((gen, idx) => {
                  const isHidden = showToggle && toggleReady && isCollapsed && idx >= hiddenStart;
                  return (
                    <a
                      key={gen.slug}
                      href={`/generators/${gen.slug}`}
                      className={`block bg-white border border-card-border rounded-card p-5 no-underline text-inherit card-hover ${isHidden ? 'hidden' : ''}`}
                    >
                      <div className="w-full h-[100px] rounded-card bg-light-bg mb-[12px] flex items-center justify-center overflow-hidden" aria-hidden="true">
                        <CategoryThumbnail slug={section.slug} />
                      </div>
                      <p className="font-heading font-bold text-[15px] uppercase text-heading-dark m-0 mb-[5px] leading-[1.2]">
                        {gen.name}
                      </p>
                      <p className="text-body text-[13px] m-0 leading-[1.5]">{gen.desc}</p>
                    </a>
                  );
                })}
              </div>

              {showToggle && toggleReady && (
                <div className="mt-5 text-center md:text-start">
                  <button
                    onClick={() => toggleSection(section.slug)}
                    aria-expanded={!isCollapsed}
                    aria-controls={`${section.slug}-hidden`}
                    className="inline-flex items-center justify-center h-9 px-[15px] rounded-btn font-heading font-bold text-[13px] uppercase border border-brand-purple text-brand-purple bg-transparent cursor-pointer hover:bg-brand-purple hover:text-white transition-colors"
                  >
                    {isCollapsed ? `${t.showAll} ${hiddenCount} ${section.heading.toLowerCase()}` : t.showLess}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* Shared category thumbnail for directory cards */
function CategoryThumbnail({ slug }) {
  const illustrations = {
    websites: (
      <svg width="100%" height="100%" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="100" fill="#F4F6F8" />
        <rect x="40" y="15" width="220" height="70" rx="4" fill="white" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="54" y="25" width="60" height="5" rx="2.5" fill="#E2E4E7" />
        <rect x="54" y="36" width="40" height="5" rx="2.5" fill="#E2E4E7" />
        <rect x="54" y="50" width="190" height="26" rx="3" fill="#F4F6F8" />
      </svg>
    ),
    'landing-pages': (
      <svg width="100%" height="100%" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="100" fill="#F4F6F8" />
        <rect x="60" y="10" width="180" height="80" rx="4" fill="white" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="74" y="24" width="80" height="6" rx="3" fill="#E2E4E7" />
        <rect x="74" y="38" width="120" height="4" rx="2" fill="#E2E4E7" />
        <rect x="74" y="50" width="152" height="28" rx="3" fill="#F4F6F8" />
      </svg>
    ),
    portfolios: (
      <svg width="100%" height="100%" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="100" fill="#F4F6F8" />
        <rect x="30" y="15" width="70" height="70" rx="3" stroke="#C6C9CD" strokeWidth="1" fill="white" />
        <rect x="110" y="15" width="70" height="70" rx="3" stroke="#C6C9CD" strokeWidth="1" fill="white" />
        <rect x="190" y="15" width="70" height="70" rx="3" stroke="#C6C9CD" strokeWidth="1" fill="white" />
      </svg>
    ),
    blogs: (
      <svg width="100%" height="100%" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="100" fill="#F4F6F8" />
        <rect x="50" y="15" width="100" height="70" rx="3" fill="white" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="64" y="25" width="70" height="4" rx="2" fill="#E2E4E7" />
        <rect x="64" y="34" width="55" height="4" rx="2" fill="#E2E4E7" />
        <rect x="64" y="43" width="80" height="4" rx="2" fill="#E2E4E7" />
        <rect x="64" y="52" width="60" height="4" rx="2" fill="#E2E4E7" />
        <rect x="64" y="61" width="40" height="4" rx="2" fill="#E2E4E7" />
        <rect x="165" y="15" width="85" height="70" rx="3" fill="white" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="178" y="28" width="58" height="20" rx="3" fill="#F4F6F8" />
        <rect x="178" y="54" width="58" height="3" rx="1.5" fill="#E2E4E7" />
        <rect x="178" y="62" width="45" height="3" rx="1.5" fill="#E2E4E7" />
      </svg>
    ),
    stores: (
      <svg width="100%" height="100%" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="100" fill="#F4F6F8" />
        <rect x="70" y="10" width="60" height="80" rx="3" fill="white" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="82" y="24" width="36" height="36" rx="2" fill="#E2E4E7" />
        <rect x="82" y="66" width="36" height="4" rx="2" fill="#E2E4E7" />
        <rect x="82" y="75" width="24" height="4" rx="2" fill="#E2E4E7" />
        <rect x="145" y="10" width="60" height="80" rx="3" fill="white" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="157" y="24" width="36" height="36" rx="2" fill="#E2E4E7" />
        <rect x="157" y="66" width="36" height="4" rx="2" fill="#E2E4E7" />
        <rect x="157" y="75" width="20" height="4" rx="2" fill="#E2E4E7" />
        <rect x="220" y="10" width="60" height="80" rx="3" fill="white" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="232" y="24" width="36" height="36" rx="2" fill="#E2E4E7" />
        <rect x="232" y="66" width="36" height="4" rx="2" fill="#E2E4E7" />
        <rect x="232" y="75" width="28" height="4" rx="2" fill="#E2E4E7" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="100%" height="100%" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="100" fill="#F4F6F8" />
        <circle cx="150" cy="30" r="12" fill="white" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="100" y="50" width="100" height="8" rx="4" fill="white" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="100" y="64" width="100" height="8" rx="4" fill="white" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="100" y="78" width="100" height="8" rx="4" fill="white" stroke="#C6C9CD" strokeWidth="1" />
      </svg>
    ),
  };

  return illustrations[slug] || illustrations.websites;
}

/* ───────── HOW IT WORKS ───────── */
function HowItWorks() {
  return (
    <section className="py-10 bg-light-bg">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-[26px] md:text-[30px] text-heading m-0 leading-[1.2] text-center">
          {t.howItWorksHeading}
        </h2>
        <div className="flex flex-col md:flex-row gap-[30px] mt-[30px]">
          {t.steps.map((step, i) => (
            <div key={i} className="flex-1 text-center md:text-start">
              <div className="w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center mx-auto md:mx-0 mb-[15px] font-heading font-bold text-[20px]">
                {i + 1}
              </div>
              <p className="font-heading font-bold uppercase text-[16px] text-heading-dark m-0 mb-[6px] leading-[1.2]">
                {step.title}
              </p>
              <p className="text-body text-[14px] m-0 leading-[1.5]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── WHY STRIKINGLY ───────── */
function WhyStrikingly() {
  const icons = [
    <path key="0" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#8159BB" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
    <path key="1" d="M12 18V6m-5 7h10" stroke="#8159BB" strokeWidth="1.5" fill="none" strokeLinecap="round" />,
    <React.Fragment key="2"><circle cx="12" cy="12" r="9" stroke="#8159BB" strokeWidth="1.5" fill="none" /><path d="M12 7v5l3 3" stroke="#8159BB" strokeWidth="1.5" fill="none" strokeLinecap="round" /></React.Fragment>,
  ];

  return (
    <section className="py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-[26px] md:text-[30px] text-heading m-0 leading-[1.2] text-center">
          {t.whyHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-[30px]">
          {t.reasons.map((reason, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 mx-auto mb-[15px] flex items-center justify-center" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {icons[i]}
                </svg>
              </div>
              <p className="font-heading font-bold uppercase text-[16px] text-heading-dark m-0 mb-[6px] leading-[1.2]">
                {reason.title}
              </p>
              <p className="text-body text-[14px] m-0 leading-[1.5] max-w-[300px] mx-auto">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── FAQ ACCORDION ───────── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <section className="py-10 bg-light-bg">
      <div className="max-w-[800px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-[26px] md:text-[30px] text-heading m-0 leading-[1.2] text-center mb-[30px]">
          {t.faqHeading}
        </h2>
        <div className="flex flex-col gap-[10px]">
          {t.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-white border border-card-border rounded-card overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full text-start px-5 py-[15px] flex items-center justify-between bg-transparent border-none cursor-pointer font-body text-[15px] font-semibold text-heading-dark"
                >
                  <span>{faq.q}</span>
                  <svg
                    className={`w-4 h-4 ms-[10px] flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`faq-answer ${isOpen ? 'expanded' : 'collapsed'}`}
                >
                  <div className="px-5 pb-[15px] text-body text-[14px] leading-[1.6]">
                    {faq.a}
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

/* ───────── CLOSING CTA ───────── */
function ClosingCTA() {
  return (
    <section className="py-[60px] bg-white">
      <div className="max-w-[600px] mx-auto px-5 text-center">
        <h2 className="font-heading font-bold uppercase text-[28px] md:text-[32px] text-heading m-0 leading-[1.2]">
          {t.closingHeading}
        </h2>
        <p className="text-body text-[16px] mt-[15px] mb-[30px]">
          {t.closingSub}
        </p>
        <a
          href="/s/ai_site_builder"
          className="inline-flex items-center justify-center h-11 px-[15px] py-[9px] rounded-btn font-heading font-bold text-[14px] uppercase no-underline ai-gradient-bg hover:opacity-90 transition-opacity"
          style={{ color: '#FFFFFF', height: '44px', fontSize: '15px' }}
        >
          {t.closingCta}
        </a>
      </div>
    </section>
  );
}

/* ───────── FOOTER ───────── */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-light-bg border-t border-divider py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] mb-[30px]">
          {t.footerColumns.map((col, i) => (
            <div key={i}>
              <p className="font-heading font-bold uppercase text-[14px] text-heading m-0 mb-[15px]">{col.heading}</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-[8px]">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="text-[13px] text-body no-underline hover:text-brand-purple">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-divider pt-5 flex flex-col sm:flex-row items-center justify-between gap-[10px]">
          <a href="/" className="font-heading font-bold text-lg uppercase tracking-wide text-heading-dark no-underline">
            {t.logo}
          </a>
          <p className="text-[12px] text-body m-0">
            {t.copyright.replace('{year}', year)}
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ───────── MAIN APP ───────── */
export default function App() {
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
