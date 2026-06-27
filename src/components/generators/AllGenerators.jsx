import { useState, useMemo } from 'react';

const INITIAL_VISIBLE = 6;

const categoryThumbnails = {
  websites: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="26" height="20" rx="3" stroke="#8159BB" strokeWidth="1.2"/>
      <line x1="3" y1="12" x2="29" y2="12" stroke="#8159BB" strokeWidth="1.2"/>
    </svg>
  ),
  'landing-pages': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="7" y="3" width="18" height="26" rx="3" stroke="#8159BB" strokeWidth="1.2"/>
      <rect x="10" y="8" width="12" height="3" rx="1" fill="#8159BB" opacity="0.3"/>
    </svg>
  ),
  portfolios: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="12" height="12" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
      <rect x="17" y="3" width="12" height="12" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
      <rect x="3" y="17" width="12" height="12" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
      <rect x="17" y="17" width="12" height="12" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
    </svg>
  ),
  blogs: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="22" height="22" rx="3" stroke="#8159BB" strokeWidth="1.2"/>
      <line x1="10" y1="12" x2="22" y2="12" stroke="#8159BB" strokeWidth="1.2" opacity="0.5"/>
      <line x1="10" y1="17" x2="22" y2="17" stroke="#8159BB" strokeWidth="1.2" opacity="0.4"/>
    </svg>
  ),
  stores: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M5 13l3-8h16l3 8" stroke="#8159BB" strokeWidth="1.2"/>
      <rect x="5" y="13" width="22" height="14" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
    </svg>
  ),
  'link-in-bio': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="10" r="5" stroke="#8159BB" strokeWidth="1.2"/>
      <rect x="8" y="18" width="16" height="4" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
      <rect x="8" y="24" width="16" height="4" rx="2" stroke="#8159BB" strokeWidth="1.2"/>
    </svg>
  ),
};

export default function AllGenerators({ t, categories, generators }) {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState({});

  const isSearching = query.trim().length > 0;

  const matchedSlugs = useMemo(() => {
    if (!isSearching) return null;
    const q = query.toLowerCase().trim();
    const matched = new Set();
    for (const cat of categories) {
      const items = generators[cat.id] || [];
      for (const g of items) {
        if (
          g.name.toLowerCase().includes(q) ||
          g.desc.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q)
        ) {
          matched.add(g.slug);
        }
      }
    }
    return matched;
  }, [query, generators, categories, isSearching]);

  const totalMatches = useMemo(() => {
    if (!matchedSlugs) return 0;
    return matchedSlugs.size;
  }, [matchedSlugs]);

  const toggleExpand = (catId) => {
    setExpanded((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  const hasResults = !isSearching || totalMatches > 0;

  return (
    <section id="all-generators" className="py-[40px] bg-bg-light">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-2">{t.heading}</h2>
        <p className="text-body-text text-center mb-8">{t.sub}</p>

        {/* Search */}
        <div className="max-w-[480px] mx-auto mb-8">
          <div className="relative">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="absolute start-3 top-1/2 -translate-y-1/2 text-body-text" aria-hidden="true">
              <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="11.5" y1="11.5" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="search"
              aria-label="Search generators"
              placeholder={t.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-[44px] ps-10 pe-4 rounded-[4px] border border-card-border bg-white text-heading-section text-[14px] placeholder:text-body-text/60 focus:outline-2 focus:outline-brand-purple focus:border-brand-purple transition-colors"
            />
          </div>
          {isSearching && hasResults && (
            <p className="text-[13px] text-body-text mt-2">{t.matchCount(totalMatches)}</p>
          )}
        </div>

        {/* No results */}
        {isSearching && !hasResults && (
          <div className="text-center py-10">
            <p className="text-body-text mb-4">{t.noResults}</p>
            <button
              type="button"
              onClick={() => setQuery('')}
              className="inline-flex items-center justify-center h-[36px] px-[15px] rounded-[4px] border border-brand-purple text-brand-purple font-heading font-bold text-[14px] uppercase hover:bg-brand-purple/5 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
            >
              {t.clearSearch}
            </button>
            <p className="text-body-text mt-4">
              <a href="/s/ai_site_builder" className="text-brand-purple hover:underline">{t.cantFind}</a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        {categories.map((cat) => {
          const items = generators[cat.id] || [];
          if (items.length === 0) return null;

          const isExpanded = expanded[cat.id] || isSearching;
          const hasMore = items.length > INITIAL_VISIBLE;

          // Check if this category has any matches during search
          const categoryHasMatches = !isSearching || items.some((g) => matchedSlugs.has(g.slug));
          if (isSearching && !categoryHasMatches) return null;

          return (
            <section key={cat.id} id={cat.id} className="mb-10 scroll-mt-[80px]">
              <h3 className="text-[20px] md:text-[22px] text-heading-section mb-1">{cat.name}</h3>
              <p className="text-body-text text-[13px] mb-5">{cat.desc}</p>

              <div id={`${cat.id}-grid`} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((gen, idx) => {
                  // Determine visibility
                  const isHiddenByCollapse = !isExpanded && idx >= INITIAL_VISIBLE;
                  const isHiddenBySearch = isSearching && !matchedSlugs.has(gen.slug);
                  const isHidden = isHiddenByCollapse || isHiddenBySearch;

                  return (
                    <a
                      key={gen.slug}
                      href={`/generators/${gen.slug}`}
                      className={`group flex items-start gap-3 bg-white border border-card-border rounded-[3px] p-5 transition-shadow hover:shadow-md hover:border-brand-purple focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple ${isHidden ? 'hidden' : ''}`}
                      aria-hidden={isHidden ? 'true' : undefined}
                      tabIndex={isHidden ? -1 : undefined}
                    >
                      <div className="shrink-0 mt-[2px]">{categoryThumbnails[cat.id]}</div>
                      <div className="min-w-0">
                        <h4 className="font-heading font-bold text-[14px] text-heading-section uppercase mb-1 leading-tight">
                          {gen.name}
                        </h4>
                        <p className="text-body-text text-[13px] leading-snug">{gen.desc}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {hasMore && !isSearching && (
                <div className="mt-4">
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`${cat.id}-grid`}
                    onClick={() => toggleExpand(cat.id)}
                    className="inline-flex items-center gap-1 h-[36px] px-[15px] rounded-[4px] border border-brand-purple text-brand-purple font-heading font-bold text-[12px] uppercase hover:bg-brand-purple/5 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
                  >
                    {isExpanded ? t.showLess : t.showAll(items.length)}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} aria-hidden="true">
                      <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </section>
  );
}
