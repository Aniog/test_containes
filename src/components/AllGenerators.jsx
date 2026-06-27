import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';

const INITIAL_VISIBLE = 6;

const categoryThumbnails = {
  websites: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="3" y="6" width="26" height="20" rx="2" stroke="#8159BB" strokeWidth="1.2" />
      <line x1="3" y1="11" x2="29" y2="11" stroke="#8159BB" strokeWidth="0.8" opacity="0.5" />
      <rect x="6" y="14" width="8" height="5" rx="1" fill="#8159BB" opacity="0.2" />
    </svg>
  ),
  'landing-pages': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="7" y="3" width="18" height="26" rx="2" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="10" y="8" width="12" height="3" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="11" y="22" width="10" height="3" rx="1.5" fill="#7671FF" opacity="0.4" />
    </svg>
  ),
  portfolios: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="3" y="6" width="11" height="8" rx="1.5" stroke="#8159BB" strokeWidth="1" />
      <rect x="18" y="6" width="11" height="8" rx="1.5" stroke="#8159BB" strokeWidth="1" />
      <rect x="3" y="18" width="11" height="8" rx="1.5" stroke="#8159BB" strokeWidth="1" />
      <rect x="18" y="18" width="11" height="8" rx="1.5" stroke="#8159BB" strokeWidth="1" />
    </svg>
  ),
  blogs: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="5" y="5" width="22" height="22" rx="2" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="8" y="10" width="16" height="2" rx="1" fill="#8159BB" opacity="0.3" />
      <rect x="8" y="14" width="12" height="1.5" rx="0.75" fill="#8159BB" opacity="0.15" />
      <rect x="8" y="17" width="14" height="1.5" rx="0.75" fill="#8159BB" opacity="0.15" />
    </svg>
  ),
  stores: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M6 13 L6 28 L26 28 L26 13" stroke="#8159BB" strokeWidth="1.2" fill="none" />
      <path d="M3 13 L8 5 L24 5 L29 13 Z" stroke="#8159BB" strokeWidth="1.2" fill="none" />
      <rect x="13" y="20" width="6" height="8" rx="1" stroke="#8159BB" strokeWidth="1" fill="none" />
    </svg>
  ),
  'link-in-bio': (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="16" cy="9" r="4.5" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="8" y="17" width="16" height="3" rx="1.5" stroke="#8159BB" strokeWidth="1" />
      <rect x="8" y="22" width="16" height="3" rx="1.5" stroke="#8159BB" strokeWidth="1" />
      <rect x="8" y="27" width="16" height="3" rx="1.5" stroke="#8159BB" strokeWidth="1" />
    </svg>
  ),
};

const CategorySubsection = ({ category, generators, searchQuery, stringsAll, matchingSlugs }) => {
  const [expanded, setExpanded] = useState(false);
  const controlId = `section-${category.id}-cards`;
  const needsToggle = generators.length > INITIAL_VISIBLE;
  const isSearching = searchQuery.trim().length > 0;

  const hasAnyMatch = isSearching
    ? generators.some((g) => matchingSlugs.has(g.slug))
    : true;

  return (
    <div
      id={category.id}
      className="scroll-mt-[80px]"
      style={{ display: hasAnyMatch ? undefined : 'none' }}
    >
      <div className="mb-[15px]">
        <h3 className="font-heading text-[18px] md:text-[22px] text-heading-section uppercase mb-[5px]">
          {category.name}
        </h3>
        <p className="text-body-text text-[13px]">{category.description}</p>
      </div>
      <div
        id={controlId}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]"
      >
        {generators.map((gen, index) => {
          const isMatch = isSearching ? matchingSlugs.has(gen.slug) : true;
          const isCollapsed = !isSearching && !expanded && index >= INITIAL_VISIBLE;

          return (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className="flex items-start gap-[10px] bg-white border border-card-border rounded-[3px] p-[20px] card-hover-shadow focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
              style={{ display: (isCollapsed || !isMatch) ? 'none' : undefined }}
            >
              {categoryThumbnails[category.id]}
              <div className="min-w-0">
                <span className="block font-heading text-[13px] text-heading-section uppercase mb-[3px]">
                  {gen.name}
                </span>
                <span className="block text-body-text text-[13px] leading-[1.4]">
                  {gen.description}
                </span>
              </div>
            </a>
          );
        })}
      </div>
      {needsToggle && !isSearching && (
        <div className="mt-[15px]">
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={controlId}
            onClick={() => setExpanded(!expanded)}
            className="font-heading text-[12px] uppercase text-brand-purple border border-brand-purple rounded-[3px] px-[10px] py-[5px] hover:bg-brand-purple/5 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-brand-purple"
          >
            {expanded
              ? stringsAll.showLess
              : stringsAll.showAll(generators.length)}
          </button>
        </div>
      )}
    </div>
  );
};

const AllGenerators = ({ t, categories, generators }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const strings = t.allGenerators;

  const { matchingSlugs, totalMatches } = useMemo(() => {
    if (!searchQuery.trim()) return { matchingSlugs: new Set(), totalMatches: 0 };
    const q = searchQuery.toLowerCase().trim();
    const slugs = new Set();
    categories.forEach((cat) => {
      const catGenerators = generators[cat.id] || [];
      catGenerators.forEach((g) => {
        if (
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q)
        ) {
          slugs.add(g.slug);
        }
      });
    });
    return { matchingSlugs: slugs, totalMatches: slugs.size };
  }, [searchQuery, categories, generators]);

  const isSearching = searchQuery.trim().length > 0;

  return (
    <section id="all-generators" className="py-[40px] bg-bg-light scroll-mt-[60px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-[26px] md:text-[30px] text-heading-section text-center mb-[5px]">
          {strings.heading}
        </h2>
        <p className="text-body-text text-center mb-[30px]">
          {strings.sub}
        </p>

        {/* Search */}
        <div className="max-w-[480px] mx-auto mb-[30px]">
          <div className="relative">
            <Search
              className="absolute start-[12px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-body-text pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              aria-label="Search generators"
              placeholder={strings.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[40px] ps-[40px] pe-[40px] border border-card-border rounded-[3px] text-[14px] text-heading-dark bg-white placeholder:text-body-text/60 focus:outline-2 focus:outline-brand-purple focus:border-brand-purple"
            />
            {isSearching && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute end-[10px] top-1/2 -translate-y-1/2 p-[4px] text-body-text hover:text-heading-dark focus:outline-2 focus:outline-brand-purple rounded-[2px]"
                aria-label="Clear search"
              >
                <X className="w-[16px] h-[16px]" />
              </button>
            )}
          </div>
          {isSearching && totalMatches > 0 && (
            <p className="text-[12px] text-body-text mt-[8px]">
              {strings.matchCount(totalMatches)}
            </p>
          )}
        </div>

        {/* Empty state */}
        {isSearching && totalMatches === 0 && (
          <div className="text-center py-[40px]">
            <p className="text-body-text mb-[10px]">{strings.noResults}</p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="font-heading text-[12px] uppercase text-brand-purple border border-brand-purple rounded-[3px] px-[10px] py-[5px] hover:bg-brand-purple/5 transition-colors focus:outline-2 focus:outline-brand-purple mb-[10px]"
            >
              {strings.clearSearch}
            </button>
            <p className="text-[13px]">
              <a href="/s/ai_site_builder" className="text-brand-purple hover:underline">
                {strings.cantFind}
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        <div className="flex flex-col gap-[40px]">
          {categories.map((cat) => (
            <CategorySubsection
              key={cat.id}
              category={cat}
              generators={generators[cat.id] || []}
              searchQuery={searchQuery}
              stringsAll={strings}
              matchingSlugs={matchingSlugs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllGenerators;
