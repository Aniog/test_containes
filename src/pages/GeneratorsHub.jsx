import { useEffect, useRef, useState } from 'react';
import {
  strings,
  categories,
  featuredGenerators,
  allGeneratorsByCategory,
  faqItems,
} from '@/data/content.js';

const s = strings.en;

// Inline SVG illustrations (no external dependencies)
const HeroIllustration = () => (
  <svg
    viewBox="0 0 400 300"
    width="400"
    height="300"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-full h-auto max-w-[400px]"
  >
    <defs>
      <linearGradient id="hGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7671FF" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#CB0C9F" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="hGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7671FF" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#CB0C9F" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <rect x="40" y="30" width="320" height="240" rx="8" fill="url(#hGrad1)" stroke="#C6C9CD" strokeWidth="1.5" />
    <rect x="60" y="55" width="280" height="20" rx="4" fill="#E2E4E7" />
    <rect x="60" y="85" width="140" height="140" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
    <rect x="215" y="85" width="125" height="65" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
    <rect x="215" y="160" width="125" height="65" rx="4" fill="#F4F6F8" stroke="#E2E4E7" strokeWidth="1" />
    <circle cx="340" cy="48" r="8" fill="url(#hGrad2)" />
    <path d="M80 220 L140 220" stroke="#7671FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M80 235 L110 235" stroke="#CB0C9F" strokeWidth="2" strokeLinecap="round" />
    <path d="M280 250 L340 250" stroke="#7671FF" strokeWidth="2" strokeLinecap="round" />
    <path d="M280 265 L310 265" stroke="#CB0C9F" strokeWidth="2" strokeLinecap="round" />
    <circle cx="360" cy="200" r="15" fill="none" stroke="#7671FF" strokeWidth="1.5" strokeDasharray="4 4" />
    <circle cx="30" cy="100" r="10" fill="none" stroke="#CB0C9F" strokeWidth="1.5" strokeDasharray="3 3" />
  </svg>
);

const CategoryIcon = ({ type }) => {
  const paths = {
    websites: 'M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z',
    'landing-pages': 'M12 2l10 6v10l-10 6-10-6V8l10-6zm0 2.2L4.5 8 12 12.3 19.5 8 12 4.2zM5 9.5v6l7 4.2 7-4.2v-6l-7 4.2L5 9.5z',
    portfolios: 'M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h4v4H8V8zm6 0h2v2h-2V8zm-6 6h8v2H8v-2z',
    blogs: 'M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z',
    stores: 'M7 4h10l2 5H5l2-5zm-3 7h18v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9zm4 3a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z',
    'link-in-bio': 'M10 4a2 2 0 100 4 2 2 0 000-4zm0 6a2 2 0 100 4 2 2 0 000-4zm0 6a2 2 0 100 4 2 2 0 000-4z',
  };
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[type] || paths.websites} />
    </svg>
  );
};

const StepCircle = ({ number }) => (
  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-white font-heading font-bold text-sm" style={{ background: 'linear-gradient(135deg, #7671FF, #CB0C9F)' }}>
    {number}
  </div>
);

const WhyIcon = ({ type }) => {
  const paths = {
    rocket: 'M12 2.5c0 0-7 5-7 12.5a7 7 0 0014 0c0-7.5-7-12.5-7-12.5zm0 3a1 1 0 110 2 1 1 0 010-2zm-3 8h6M12 8v6',
    mobile: 'M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm5 18a1 1 0 100-2 1 1 0 000 2z',
    free: 'M12 1v22M1 12h22',
  };
  return (
    <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[type]} />
    </svg>
  );
};

// Flatten all generators for search
const allGeneratorsFlat = Object.values(allGeneratorsByCategory).flatMap((cat) =>
  cat.generators.map((g) => ({
    ...g,
    categoryName: cat.name,
    categoryId: cat.id,
  }))
);

export default function GeneratorsHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({});
  const [faqOpen, setFaqOpen] = useState(() => {
    const open = {};
    faqItems.forEach((_, i) => { open[i] = i === 0; });
    return open;
  });
  const searchRef = useRef(null);
  const resultsRef = useRef(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const clearSearch = () => {
    setSearchQuery('');
    if (searchRef.current) searchRef.current.value = '';
  };

  const toggleCategory = (catId) => {
    setExpandedCategories((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  const toggleFaq = (i) => {
    setFaqOpen((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const getFilteredGenerators = (catId, generators) => {
    if (!searchQuery) return generators;
    return generators.filter(
      (g) =>
        g.name.toLowerCase().includes(searchQuery) ||
        g.description.toLowerCase().includes(searchQuery) ||
        allGeneratorsByCategory[catId].name.toLowerCase().includes(searchQuery)
    );
  };

  const filteredFlat = searchQuery
    ? allGeneratorsFlat.filter(
        (g) =>
          g.name.toLowerCase().includes(searchQuery) ||
          g.description.toLowerCase().includes(searchQuery) ||
          g.categoryName.toLowerCase().includes(searchQuery)
      )
    : [];

  const matchedCount = filteredFlat.length;

  // Determine visible categories during search
  const visibleCategoryIds = searchQuery
    ? Object.keys(allGeneratorsByCategory).filter((catId) =>
        getFilteredGenerators(catId, allGeneratorsByCategory[catId].generators).length > 0
      )
    : Object.keys(allGeneratorsByCategory);

  // Initialize expanded state for categories with many items
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Section 0: Top bar */}
      <header className="bg-white border-b border-[#E2E4E7] sticky top-0 z-50">
        <div className="content-container flex items-center h-[60px]">
          <a href="/" className="font-heading font-bold text-[18px] text-[#2E2E2F] tracking-wide uppercase">
            strikingly <span className="text-[#8159BB]">AI</span>
          </a>
        </div>
      </header>

      {/* Section 1: Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white">
        <div className="content-container py-[12px]">
          <ol className="flex items-center gap-[6px] text-[13px] text-[#636972] list-none m-0 p-0">
            <li>
              <a href="/" className="text-[#636972] hover:text-[#8159BB] underline-offset-2 hover:underline transition-colors">
                {s.breadcrumbHome}
              </a>
            </li>
            <li aria-hidden="true" className="text-[#C6C9CD]">/</li>
            <li aria-current="page" className="text-[#636972]">
              {s.breadcrumbCurrent}
            </li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Section 2: Hero */}
        <section className="relative overflow-hidden">
          {/* Subtle purple-to-pink wash */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 80% 20%, rgba(118,113,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(203,12,159,0.04) 0%, transparent 50%)',
            }}
          />
          <div className="content-container relative py-[60px] md:py-[80px]">
            <div className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[60px]">
              {/* Left column */}
              <div className="flex-1 max-w-[600px]">
                <h1 className="text-[28px] md:text-[42px] lg:text-[48px] leading-[1.2] mb-[16px]">
                  <span className="block text-[#2E2E2F] font-heading font-bold uppercase">{s.heroH1Line1}</span>
                  <span className="block gradient-text font-heading font-bold uppercase">{s.heroH1Line2}</span>
                </h1>
                <p className="text-[14px] leading-[1.6] text-[#636972] mb-[24px] max-w-[480px]">
                  {s.heroSubheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-[10px]">
                  <a
                    href="/s/ai_site_builder"
                    className="btn btn-primary btn-big"
                  >
                    {s.ctaPrimary}
                  </a>
                  <a
                    href="#all-generators"
                    className="btn btn-ghost btn-big"
                  >
                    {s.ctaSecondary}
                  </a>
                </div>
              </div>
              {/* Right column */}
              <div className="flex-shrink-0 flex justify-center md:justify-end">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Featured Generators */}
        <section className="py-[40px] md:py-[60px] bg-white">
          <div className="content-container">
            <div className="mb-[24px]">
              <h2 className="section-heading">{s.featuredHeading}</h2>
              <p className="section-subheading">{s.featuredSubheading}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {featuredGenerators.map((gen) => (
                <a
                  key={gen.slug}
                  href={`/generators/${gen.slug}`}
                  className="card group"
                >
                  <div className="mb-[10px]">
                    <span className="tag">{gen.category}</span>
                  </div>
                  <h3 className="font-heading font-bold text-[16px] text-[#2E2E2F] uppercase mb-[6px]">
                    {gen.name}
                  </h3>
                  <p className="text-[13px] text-[#636972] leading-[1.5] m-0">
                    {gen.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Browse by Category */}
        <section className="py-[40px] md:py-[60px] bg-[#F4F6F8]">
          <div className="content-container">
            <div className="mb-[24px]">
              <h2 className="section-heading">{s.browseByCategoryHeading}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`/generators#${cat.slug}`}
                  className="card group"
                >
                  <div className="mb-[12px]">
                    <CategoryIcon type={cat.id} />
                  </div>
                  <h3 className="font-heading font-bold text-[16px] text-[#2E2E2F] uppercase mb-[6px]">
                    {cat.name}
                  </h3>
                  <p className="text-[13px] text-[#636972] leading-[1.5] m-0 mb-[10px]">
                    {cat.description}
                  </p>
                  <div className="flex items-center text-[#8159BB] font-heading font-bold text-[12px] uppercase gap-[4px] mt-auto">
                    Browse
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: All Generators directory */}
        <section id="all-generators" className="py-[40px] md:py-[60px] bg-white">
          <div className="content-container">
            <div className="mb-[24px]">
              <h2 className="section-heading">{s.allGeneratorsHeading}</h2>
              <p className="section-subheading">{s.allGeneratorsSubheading}</p>
            </div>

            {/* Search */}
            <div className="mb-[24px] max-w-[480px]" ref={resultsRef}>
              <div className="relative">
                <svg
                  className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#C6C9CD]"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  ref={searchRef}
                  type="search"
                  aria-label={s.searchAriaLabel}
                  placeholder={s.searchPlaceholder}
                  onChange={handleSearch}
                  className="w-full h-[44px] pl-[40px] pr-[12px] border border-[#C6C9CD] rounded-[4px] text-[14px] text-[#2E2E2F] bg-white focus:outline-none focus:border-[#8159BB] focus:ring-1 focus:ring-[#8159BB] transition-all"
                />
              </div>
              {searchQuery && (
                <div className="mt-[8px] flex items-center gap-[8px] text-[13px] text-[#636972]">
                  <span>
                    {matchedCount} {s.searchResultsCount}
                  </span>
                  {matchedCount === 0 && (
                    <div className="mt-[8px]">
                      <p className="text-[14px] text-[#636972] mb-[8px]">{s.searchNoResults}</p>
                      <div className="flex items-center gap-[12px]">
                        <button
                          type="button"
                          onClick={clearSearch}
                          className="text-[#8159BB] font-heading font-bold text-[12px] uppercase hover:underline"
                        >
                          {s.searchClear}
                        </button>
                        <a href="/s/ai_site_builder" className="text-[#8159BB] text-[13px] hover:underline">
                          {s.searchCantFind}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Category subsections */}
            <div className="space-y-[40px]">
              {Object.values(allGeneratorsByCategory).map((cat) => {
                const filtered = getFilteredGenerators(cat.id, cat.generators);
                const isVisible = visibleCategoryIds.includes(cat.id);
                if (!isVisible) return null;

                const isExpanded = expandedCategories[cat.id];
                const initialShow = 6;
                const hasMore = filtered.length > initialShow;
                const displayGenerators = isExpanded ? filtered : filtered.slice(0, initialShow);

                return (
                  <div key={cat.id} id={cat.id}>
                    <h3 className="font-heading font-bold text-[20px] text-[#4B5056] uppercase mb-[4px]">
                      {cat.name}
                    </h3>
                    <p className="text-[13px] text-[#636972] mb-[16px]">{cat.description}</p>
                    <div
                      id={`grid-${cat.id}`}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]"
                    >
                      {displayGenerators.map((gen) => (
                        <a
                          key={gen.slug}
                          href={`/generators/${gen.slug}`}
                          className="card group"
                        >
                          <h4 className="font-heading font-bold text-[15px] text-[#2E2E2F] uppercase mb-[6px]">
                            {gen.name}
                          </h4>
                          <p className="text-[13px] text-[#636972] leading-[1.5] m-0">
                            {gen.description}
                          </p>
                        </a>
                      ))}
                    </div>
                    {hasMore && (
                      <div className="mt-[16px]">
                        <button
                          type="button"
                          onClick={() => toggleCategory(cat.id)}
                          aria-expanded={isExpanded ? 'true' : 'false'}
                          aria-controls={`grid-${cat.id}`}
                          className="text-[#8159BB] font-heading font-bold text-[12px] uppercase hover:underline focus-visible:outline-2 focus-visible:outline-[#8159BB] focus-visible:outline-offset-2 rounded-[2px]"
                        >
                          {isExpanded
                            ? s.showLess
                            : `${s.showAllPrefix} ${filtered.length} ${s.showAllSuffix}`}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 6: How It Works */}
        <section className="py-[40px] md:py-[60px] bg-[#F4F6F8]">
          <div className="content-container">
            <h2 className="section-heading text-center mb-[32px]">{s.howItWorksHeading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              {[
                { num: '1', title: s.step1Title, body: s.step1Body },
                { num: '2', title: s.step2Title, body: s.step2Body },
                { num: '3', title: s.step3Title, body: s.step3Body },
              ].map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <StepCircle number={step.num} />
                  <h3 className="font-heading font-bold text-[16px] text-[#4B5056] uppercase mt-[16px] mb-[8px]">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-[#636972] leading-[1.5] max-w-[280px] m-0">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Why Strikingly */}
        <section className="py-[40px] md:py-[60px] bg-white">
          <div className="content-container">
            <h2 className="section-heading text-center mb-[32px]">{s.whyStrikinglyHeading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              {[
                { icon: 'rocket', title: s.why1Title, body: s.why1Body },
                { icon: 'mobile', title: s.why2Title, body: s.why2Body },
                { icon: 'free', title: s.why3Title, body: s.why3Body },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center">
                  <div className="mb-[12px]">
                    <WhyIcon type={item.icon} />
                  </div>
                  <h3 className="font-heading font-bold text-[16px] text-[#4B5056] uppercase mb-[8px]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#636972] leading-[1.5] max-w-[280px] m-0">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="py-[40px] md:py-[60px] bg-[#F4F6F8]">
          <div className="content-container max-w-[800px]">
            <h2 className="section-heading text-center mb-[32px]">{s.faqHeading}</h2>
            <div className="space-y-[10px]">
              {faqItems.map((faq, i) => (
                <div key={i} className="bg-white border border-[#C6C9CD] rounded-[3px] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={faqOpen[i] ? 'true' : 'false'}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-center justify-between p-[16px_20px] text-left bg-white hover:bg-[#FAFBFC] transition-colors focus-visible:outline-2 focus-visible:outline-[#8159BB] focus-visible:outline-offset-[-2px]"
                  >
                    <span className="font-heading font-bold text-[14px] text-[#2E2E2F] uppercase pr-[12px]">
                      {faq.question}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#8159BB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0 transition-transform duration-200"
                      style={{ transform: faqOpen[i] ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: faqOpen[i] ? '500px' : '0px',
                      opacity: faqOpen[i] ? 1 : 0,
                    }}
                  >
                    <div className="px-[20px] pb-[16px]">
                      <p className="text-[14px] text-[#636972] leading-[1.6] m-0">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Closing CTA */}
        <section className="py-[60px] md:py-[80px] bg-white">
          <div className="content-container text-center">
            <h2 className="font-heading font-bold text-[28px] md:text-[36px] text-[#4B5056] uppercase mb-[8px]">
              {s.closingHeading}
            </h2>
            <p className="text-[14px] text-[#636972] mb-[24px] max-w-[480px] mx-auto">
              {s.closingSub}
            </p>
            <a
              href="/s/ai_site_builder"
              className="btn btn-primary btn-big text-[14px]"
            >
              {s.closingCta}
            </a>
          </div>
        </section>
      </main>

      {/* Section 10: Footer */}
      <footer className="bg-[#F4F6F8] border-t border-[#E2E4E7] py-[40px]">
        <div className="content-container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[20px] mb-[24px]">
            <div className="font-heading font-bold text-[16px] text-[#2E2E2F] uppercase tracking-wide">
              strikingly
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-[40px] gap-y-[8px]">
              {[
                { label: 'About', href: '/about' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Templates', href: '/templates' },
                { label: 'Support', href: '/support' },
                { label: 'Blog', href: '/blog' },
                { label: 'Terms', href: '/terms' },
                { label: 'Privacy', href: '/privacy' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-[#636972] hover:text-[#8159BB] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-[#E2E4E7] pt-[16px] text-[12px] text-[#636972]">
            {s.footerCopy}
          </div>
        </div>
      </footer>
    </div>
  );
}
