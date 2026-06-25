import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { strings, categories, allGenerators } from '@/data/strings';

const t = strings.en.allGenerators;
const VISIBLE_COUNT = 6;

const categoryThumbnails = {
  websites: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="26" height="20" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <line x1="3" y1="12" x2="29" y2="12" stroke="#8159BB" strokeWidth="1.2"/>
    </svg>
  ),
  'landing-pages': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="7" y="3" width="18" height="26" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <line x1="10" y1="10" x2="22" y2="10" stroke="#8159BB" strokeWidth="1.2" strokeLinecap="round"/>
      <rect x="12" y="18" width="8" height="4" rx="1.5" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
    </svg>
  ),
  portfolios: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="11" height="9" rx="1.5" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="18" y="6" width="11" height="9" rx="1.5" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="3" y="19" width="11" height="9" rx="1.5" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="18" y="19" width="11" height="9" rx="1.5" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
    </svg>
  ),
  blogs: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="22" height="22" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <line x1="9" y1="12" x2="23" y2="12" stroke="#8159BB" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="9" y1="17" x2="20" y2="17" stroke="#8159BB" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="9" y1="22" x2="17" y2="22" stroke="#8159BB" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  stores: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="5" y="10" width="22" height="18" rx="2" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <path d="M5 15 L16 5 L27 15" stroke="#8159BB" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'link-in-bio': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="10" r="5" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="8" y="18" width="16" height="5" rx="2.5" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
      <rect x="8" y="25" width="16" height="5" rx="2.5" stroke="#8159BB" strokeWidth="1.2" fill="none"/>
    </svg>
  ),
};

const AllGenerators = () => {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState({});

  const matchesQuery = (gen, cat) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return gen.name.toLowerCase().includes(q) || gen.description.toLowerCase().includes(q) || cat.name.toLowerCase().includes(q);
  };

  const totalMatches = query.trim()
    ? categories.reduce((sum, cat) => sum + allGenerators[cat.slug].filter((g) => matchesQuery(g, cat)).length, 0)
    : null;

  return (
    <section id="all-generators" className="py-10 bg-light-bg">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="font-heading font-bold uppercase text-heading-section text-[26px] md:text-[30px] leading-[1.2] mb-2">{t.heading}</h2>
        <p className="text-body-text mb-8">{t.sub}</p>

        <div className="relative max-w-[480px] mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-body-text pointer-events-none" aria-hidden="true" />
          <input
            type="search"
            aria-label="Search generators"
            placeholder={t.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-[44px] pl-10 pr-10 border border-card-border rounded bg-white text-heading-section text-sm font-body placeholder:text-body-text/60 focus:outline-none focus:border-brand-purple"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-0 bg-transparent border-none cursor-pointer text-body-text hover:text-heading-section"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {totalMatches !== null && totalMatches > 0 && (
          <p className="text-sm text-body-text mb-6">{totalMatches} {t.matchCount}</p>
        )}

        {totalMatches === 0 && (
          <div className="text-center py-10">
            <p className="text-body-text mb-3">{t.noResults}</p>
            <button
              onClick={() => setQuery('')}
              className="inline-flex items-center justify-center h-[36px] px-[15px] bg-transparent border border-brand-purple text-brand-purple font-heading font-bold uppercase text-xs rounded cursor-pointer hover:bg-brand-purple/5 transition-colors mr-3"
            >
              {t.clearSearch}
            </button>
            <a href="/s/ai_site_builder" className="text-brand-purple text-sm no-underline hover:underline">{t.noResultsCta}</a>
          </div>
        )}

        {categories.map((cat) => {
          const items = allGenerators[cat.slug] || [];
          const filtered = items.filter((g) => matchesQuery(g, cat));
          if (query.trim() && filtered.length === 0) return null;

          const isExpanded = expanded[cat.slug] || !!query.trim();
          const visibleItems = isExpanded ? filtered : filtered.slice(0, VISIBLE_COUNT);
          const hasMore = filtered.length > VISIBLE_COUNT;
          const sectionId = cat.slug;
          const gridId = `grid-${cat.slug}`;

          return (
            <div key={cat.slug} id={sectionId} className="mb-10 scroll-mt-[60px]">
              <h3 className="font-heading font-bold uppercase text-heading-section text-lg mb-1">{cat.name}</h3>
              <p className="text-body-text text-sm mb-5">{cat.description}</p>
              <div id={gridId} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {visibleItems.map((gen) => (
                  <a
                    key={gen.slug}
                    href={`/generators/${gen.slug}`}
                    className="flex items-start gap-3 bg-white border border-card-border rounded p-5 no-underline hover:shadow-md hover:border-brand-purple transition-all"
                  >
                    <div className="shrink-0">{categoryThumbnails[cat.slug]}</div>
                    <div className="min-w-0">
                      <h4 className="font-heading font-bold uppercase text-heading-section text-sm mb-1 leading-tight">{gen.name}</h4>
                      <p className="text-body-text text-sm m-0">{gen.description}</p>
                    </div>
                  </a>
                ))}
              </div>
              {/* Hidden cards for SSR - always in DOM */}
              {!isExpanded && hasMore && (
                <div className="hidden">
                  {filtered.slice(VISIBLE_COUNT).map((gen) => (
                    <a key={gen.slug} href={`/generators/${gen.slug}`}>{gen.name}</a>
                  ))}
                </div>
              )}
              {hasMore && !query.trim() && (
                <button
                  onClick={() => setExpanded((prev) => ({ ...prev, [cat.slug]: !prev[cat.slug] }))}
                  aria-expanded={!!expanded[cat.slug]}
                  aria-controls={gridId}
                  className="mt-4 inline-flex items-center justify-center h-[36px] px-[15px] bg-transparent border border-brand-purple text-brand-purple font-heading font-bold uppercase text-xs rounded cursor-pointer hover:bg-brand-purple/5 transition-colors"
                >
                  {expanded[cat.slug] ? t.showLess : `${t.showAll} ${filtered.length} ${t.generators}`}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AllGenerators;
