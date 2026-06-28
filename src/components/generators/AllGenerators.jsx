import { useState, useRef, useCallback, useEffect } from 'react';
import strings from '@/data/strings.en';
import { allGenerators, VISIBLE_COUNT } from '@/data/generators';

const categoryThumbnails = {
  websites: (
    <svg aria-hidden="true" width="48" height="36" viewBox="0 0 48 36" fill="none">
      <rect x="1" y="1" width="46" height="34" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.04" />
      <rect x="1" y="1" width="46" height="8" rx="3" fill="#8159BB" fillOpacity="0.08" />
      <rect x="6" y="14" width="18" height="2" rx="1" fill="#8159BB" fillOpacity="0.25" />
      <rect x="6" y="19" width="24" height="2" rx="1" fill="#C6C9CD" />
      <rect x="6" y="24" width="20" height="2" rx="1" fill="#C6C9CD" />
    </svg>
  ),
  'landing-pages': (
    <svg aria-hidden="true" width="48" height="36" viewBox="0 0 48 36" fill="none">
      <rect x="1" y="1" width="46" height="34" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.04" />
      <rect x="10" y="6" width="28" height="3" rx="1" fill="#8159BB" fillOpacity="0.2" />
      <rect x="10" y="13" width="28" height="2" rx="1" fill="#C6C9CD" />
      <rect x="14" y="20" width="20" height="7" rx="2" fill="url(#dirLpGrad)" />
      <defs><linearGradient id="dirLpGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7671FF" /><stop offset="100%" stopColor="#CB0C9F" /></linearGradient></defs>
    </svg>
  ),
  portfolios: (
    <svg aria-hidden="true" width="48" height="36" viewBox="0 0 48 36" fill="none">
      <rect x="1" y="1" width="20" height="15" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.04" />
      <rect x="27" y="1" width="20" height="15" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.04" />
      <rect x="1" y="20" width="20" height="15" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.04" />
      <rect x="27" y="20" width="20" height="15" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.04" />
    </svg>
  ),
  blogs: (
    <svg aria-hidden="true" width="48" height="36" viewBox="0 0 48 36" fill="none">
      <rect x="1" y="1" width="46" height="34" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.04" />
      <rect x="8" y="6" width="24" height="2" rx="1" fill="#8159BB" fillOpacity="0.2" />
      <rect x="8" y="12" width="28" height="1.5" rx="0.75" fill="#C6C9CD" />
      <rect x="8" y="16" width="26" height="1.5" rx="0.75" fill="#C6C9CD" />
      <rect x="8" y="20" width="28" height="1.5" rx="0.75" fill="#C6C9CD" />
      <rect x="8" y="24" width="20" height="1.5" rx="0.75" fill="#C6C9CD" />
    </svg>
  ),
  stores: (
    <svg aria-hidden="true" width="48" height="36" viewBox="0 0 48 36" fill="none">
      <path d="M6 14L10 6H38L42 14" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.04" />
      <rect x="6" y="14" width="36" height="20" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <circle cx="18" cy="25" r="2" fill="#8159BB" fillOpacity="0.2" />
      <circle cx="30" cy="25" r="2" fill="#8159BB" fillOpacity="0.2" />
    </svg>
  ),
  'link-in-bio': (
    <svg aria-hidden="true" width="48" height="36" viewBox="0 0 48 36" fill="none">
      <circle cx="24" cy="10" r="5" stroke="#8159BB" strokeWidth="1.5" fill="#8159BB" fillOpacity="0.04" />
      <rect x="14" y="18" width="20" height="3" rx="1.5" fill="#8159BB" fillOpacity="0.15" />
      <rect x="16" y="24" width="16" height="3" rx="1.5" fill="#8159BB" fillOpacity="0.1" />
    </svg>
  ),
};

function CategorySubsection({ section, searchQuery, expandedSections, toggleExpand }) {
  const { categoryId, heading, description, generators } = section;
  const isExpanded = expandedSections[categoryId] ?? false;
  const gridRef = useRef(null);
  const [measuredHeight, setMeasuredHeight] = useState(null);

  const filtered = searchQuery
    ? generators.filter((g) => {
        const q = searchQuery.toLowerCase();
        return (
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          heading.toLowerCase().includes(q)
        );
      })
    : generators;

  const hasMore = !searchQuery && generators.length > VISIBLE_COUNT;

  // All generators are always in the DOM for SEO and JS-off.
  // Collapsed cards are visually hidden via CSS class, not removed from DOM.
  const isCollapsed = hasMore && !isExpanded;

  useEffect(() => {
    if (gridRef.current) {
      setMeasuredHeight(gridRef.current.scrollHeight);
    }
  }, [generators.length, isExpanded, searchQuery]);

  if (searchQuery && filtered.length === 0) return null;

  const gridId = `grid-${categoryId}`;
  const toggleId = `toggle-${categoryId}`;

  // Build a set of slugs that should be visible
  const visibleSlugs = searchQuery
    ? new Set(filtered.map((g) => g.slug))
    : (isCollapsed ? new Set(generators.slice(0, VISIBLE_COUNT).map((g) => g.slug)) : null);

  return (
    <div id={categoryId} className="scroll-mt-[20px] mb-[30px]">
      <h3
        className="text-[20px] md:text-[24px] mb-[5px]"
        style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', color: '#4B5056' }}
      >
        {heading}
      </h3>
      <p className="text-[13px] mb-[15px]" style={{ color: '#636972' }}>{description}</p>
      <div
        id={gridId}
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]"
        role="region"
        aria-labelledby={toggleId}
      >
        {generators.map((gen) => {
          const isHidden = searchQuery
            ? !visibleSlugs.has(gen.slug)
            : (isCollapsed && !visibleSlugs.has(gen.slug));

          return (
            <a
              key={gen.slug}
              href={`/generators/${gen.slug}`}
              className={`gen-card block no-underline${isHidden ? ' gen-card-hidden' : ''}`}
            >
              <div className="mb-[10px]">
                {categoryThumbnails[categoryId]}
              </div>
              <h4
                className="text-[14px] mb-[5px]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', color: '#2E2E2F' }}
              >
                {gen.name}
              </h4>
              <p className="text-[13px]" style={{ color: '#636972' }}>{gen.description}</p>
            </a>
          );
        })}
      </div>
      {hasMore && (
        <button
          id={toggleId}
          type="button"
          className="ghost-btn mt-[15px]"
          aria-expanded={isExpanded}
          aria-controls={gridId}
          onClick={() => toggleExpand(categoryId)}
        >
          {isExpanded
            ? strings.allGenerators.showLess
            : strings.allGenerators.showAll.replace('{count}', generators.length)}
        </button>
      )}
    </div>
  );
}

export default function AllGenerators() {
  const s = strings.allGenerators;
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleExpand = useCallback((categoryId) => {
    setExpandedSections((prev) => ({ ...prev, [categoryId]: !prev[categoryId] }));
  }, []);

  const allSections = Object.values(allGenerators);

  const totalMatches = searchQuery
    ? allSections.reduce((sum, section) => {
        const q = searchQuery.toLowerCase();
        return sum + section.generators.filter((g) =>
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          section.heading.toLowerCase().includes(q)
        ).length;
      }, 0)
    : 0;

  const hasAnyMatch = searchQuery ? totalMatches > 0 : true;

  return (
    <section id="all-generators" className="w-full bg-white py-[40px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2
          className="text-[26px] md:text-[32px] mb-[5px]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, textTransform: 'uppercase', color: '#4B5056' }}
        >
          {s.heading}
        </h2>
        <p className="text-[14px] mb-[20px]" style={{ color: '#636972' }}>{s.subheading}</p>

        {/* Search input */}
        <div className="mb-[30px]">
          <div className="relative max-w-[480px]">
            <svg
              aria-hidden="true"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#636972]"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              aria-label={s.searchAriaLabel}
              placeholder={s.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[40px] pl-[36px] pr-3 border border-[#C6C9CD] rounded-[3px] text-[14px] bg-white"
              style={{ fontFamily: 'var(--font-body)', color: '#2E2E2F' }}
            />
          </div>
          {searchQuery && (
            <p className="mt-[10px] text-[13px]" style={{ color: '#636972' }}>
              {hasAnyMatch
                ? s.resultCount
                    .replace('{count}', totalMatches)
                    .replace('{plural}', totalMatches === 1 ? '' : 's')
                : s.noResults}
            </p>
          )}
          {searchQuery && !hasAnyMatch && (
            <div className="mt-[15px]">
              <button
                type="button"
                className="ghost-btn mr-[10px]"
                onClick={() => setSearchQuery('')}
              >
                {s.clearSearch}
              </button>
              <a href="/s/ai_site_builder" className="text-[13px] underline" style={{ color: '#8159BB' }}>
                {s.cantFindLink}
              </a>
            </div>
          )}
        </div>

        {/* Category subsections */}
        {allSections.map((section) => (
          <CategorySubsection
            key={section.categoryId}
            section={section}
            searchQuery={searchQuery}
            expandedSections={expandedSections}
            toggleExpand={toggleExpand}
          />
        ))}
      </div>
    </section>
  );
}
