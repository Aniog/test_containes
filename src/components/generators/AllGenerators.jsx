import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import strings from '../../data/strings';
import { categories, allGenerators, totalCount } from '../../data/generators';

const CategoryThumbSVG = ({ categorySlug }) => {
  const iconMap = {
    websites: (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="13" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25" />
        <ellipse cx="16" cy="16" rx="6" ry="13" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25" />
        <line x1="3" y1="16" x2="29" y2="16" stroke="#8159BB" strokeWidth="1.5" opacity="0.25" />
      </svg>
    ),
    'landing-pages': (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25" />
        <circle cx="16" cy="16" r="8" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25" />
        <circle cx="16" cy="16" r="2" fill="#8159BB" opacity="0.4" />
      </svg>
    ),
    portfolios: (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="10" width="24" height="16" rx="2" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25" />
        <rect x="12" y="6" width="8" height="7" rx="1.5" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25" />
      </svg>
    ),
    blogs: (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 6L22 20L16 17L10 20Z" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25" strokeLinejoin="round" />
        <circle cx="16" cy="23" r="2" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25" />
      </svg>
    ),
    stores: (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 12L5 28L27 28L26 12Z" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25" />
        <path d="M10 12C10 8 13 5 16 5C19 5 22 8 22 12" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25" />
      </svg>
    ),
    'link-in-bio': (
      <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M13 19L9 23C6 26 2 23 5 20L9 16" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25" strokeLinecap="round" />
        <path d="M19 13L23 9C26 6 23 2 20 5L16 9" stroke="#8159BB" strokeWidth="1.5" fill="none" opacity="0.25" strokeLinecap="round" />
      </svg>
    ),
  };
  return iconMap[categorySlug] || iconMap.websites;
};

const GeneratorCard = ({ gen, categorySlug }) => (
  <a
    href={`/generators/${gen.slug}`}
    className="group block bg-white border border-border rounded-card p-5 no-underline hover:border-brand-purple hover:shadow-md transition-all"
  >
    <div className="mb-3 text-brand-purple opacity-60">
      <CategoryThumbSVG categorySlug={categorySlug} />
    </div>
    <h4 className="font-heading font-bold text-sm text-heading uppercase m-0 mb-2 leading-snug">
      {gen.name}
    </h4>
    <p className="text-sm text-body m-0 leading-relaxed">
      {gen.description}
    </p>
  </a>
);

const MAX_VISIBLE = 6;

const AllGenerators = () => {
  const { allGenerators: stringsData } = strings.en;
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllMap, setShowAllMap] = useState({});
  const [jsAvailable, setJsAvailable] = useState(false);
  const searchRef = useRef(null);

  // Mark JS as available after mount so we can progressively collapse
  useEffect(() => {
    setJsAvailable(true);
  }, []);

  // Filter generators based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return null;

    const query = searchQuery.toLowerCase().trim();
    const results = {};

    categories.forEach((cat) => {
      const generators = allGenerators[cat.slug] || [];
      const matching = generators.filter(
        (gen) =>
          gen.name.toLowerCase().includes(query) ||
          gen.description.toLowerCase().includes(query) ||
          cat.name.toLowerCase().includes(query)
      );
      if (matching.length > 0) {
        results[cat.slug] = matching;
      }
    });

    return results;
  }, [searchQuery]);

  const totalFiltered = useMemo(() => {
    if (!filteredCategories) return totalCount;
    return Object.values(filteredCategories).reduce((sum, arr) => sum + arr.length, 0);
  }, [filteredCategories]);

  const toggleShowAll = useCallback((catSlug) => {
    setShowAllMap((prev) => ({
      ...prev,
      [catSlug]: !prev[catSlug],
    }));
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const isCategoryVisible = useCallback(
    (catSlug) => {
      if (!filteredCategories) return true;
      return !!filteredCategories[catSlug];
    },
    [filteredCategories]
  );

  return (
    <section id="all-generators" className="py-10 md:py-[40px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-8">
          <h2 className="font-heading uppercase text-h2-mobile md:text-h2-desktop text-heading m-0 mb-3">
            {stringsData.heading}
          </h2>
          <p className="text-body text-body max-w-[480px] mx-auto">
            {stringsData.subheading}
          </p>
        </div>

        {/* Search */}
        <div className="max-w-[480px] mx-auto mb-10 relative">
          <div className="relative">
            <svg
              aria-hidden="true"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-body"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <line x1="11.5" y1="11.5" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              ref={searchRef}
              type="search"
              placeholder={stringsData.searchPlaceholder}
              aria-label="Search generators"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full h-[44px] pl-10 pr-4 border border-border rounded-card text-sm text-heading font-body bg-white focus:border-brand-purple focus:outline-none focus:ring-1 focus:ring-brand-purple placeholder:text-body/60"
            />
          </div>
          {searchQuery.trim() && (
            <p className="text-sm text-body mt-2 text-center">
              {stringsData.resultCount(totalFiltered)}
            </p>
          )}
        </div>

        {/* Empty state */}
        {filteredCategories && totalFiltered === 0 && (
          <div className="text-center py-10">
            <p className="text-heading font-heading font-bold uppercase text-h3 mb-2">
              {stringsData.emptyHeading}
            </p>
            <p className="text-body mb-5">{stringsData.emptySubtext}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={clearSearch}
                className="border border-brand-purple text-brand-purple bg-transparent font-heading font-bold uppercase text-sm px-[15px] py-[9px] rounded-[4px] cursor-pointer hover:bg-brand-purple hover:text-white transition-colors"
              >
                {stringsData.clearSearch}
              </button>
              <a
                href={stringsData.emptyCtaUrl}
                className="ai-gradient-bg text-white font-heading font-bold uppercase text-sm px-[15px] py-[9px] rounded-[4px] no-underline inline-flex items-center hover:opacity-90 transition-opacity"
              >
                {stringsData.emptyCtaText}
              </a>
            </div>
          </div>
        )}

        {/* Category subsections */}
        {categories.map((cat) => {
          if (!isCategoryVisible(cat.slug)) return null;

          const allGens = filteredCategories
            ? filteredCategories[cat.slug]
            : allGenerators[cat.slug] || [];
          const isSearching = !!filteredCategories;
          const isExpanded = showAllMap[cat.slug] || isSearching;
          const showToggle = !isSearching && allGens.length > MAX_VISIBLE && jsAvailable;

          // When collapsed (JS on, not searching, not expanded), only show first MAX_VISIBLE
          const shouldCollapse = showToggle && !isExpanded;
          const visibleGens = shouldCollapse ? allGens.slice(0, MAX_VISIBLE) : allGens;
          const hiddenGens = shouldCollapse ? allGens.slice(MAX_VISIBLE) : [];

          return (
            <div key={cat.id} id={cat.slug} className="mb-10 scroll-mt-20">
              <div className="mb-5">
                <h3 className="font-heading uppercase text-h3 text-heading m-0 mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-body m-0">{cat.description}</p>
              </div>

              {/* Visible grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {visibleGens.map((gen) => (
                  <GeneratorCard key={gen.slug} gen={gen} categorySlug={cat.slug} />
                ))}
              </div>

              {/* Collapsed extras (progressively hidden by JS) */}
              {hiddenGens.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 directory-grid-wrapper collapsed">
                  {hiddenGens.map((gen) => (
                    <GeneratorCard key={gen.slug} gen={gen} categorySlug={cat.slug} />
                  ))}
                </div>
              )}

              {/* Show all toggle */}
              {showToggle && (
                <button
                  type="button"
                  onClick={() => toggleShowAll(cat.slug)}
                  aria-expanded={isExpanded}
                  aria-controls={`extra-grid-${cat.slug}`}
                  className="mt-4 text-sm text-brand-purple font-heading font-bold uppercase bg-transparent border-none cursor-pointer p-0 hover:underline"
                >
                  {isExpanded
                    ? stringsData.hideLabel
                    : stringsData.showAllLabel(allGens.length)}
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
