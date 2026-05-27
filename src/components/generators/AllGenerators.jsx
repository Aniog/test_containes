import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  categories,
  allGeneratorsByCategory,
  allGeneratorsFlat,
  t,
} from '../../data/generatorsData';
import { SearchIcon, CategoryIcon } from './Icons';

const INITIAL_VISIBLE_COUNT = 6;

const AllGenerators = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState(() => {
    const initial = {};
    categories.forEach((cat) => {
      initial[cat.id] = false;
    });
    return initial;
  });
  const [isJsEnabled, setIsJsEnabled] = useState(false);
  const searchInputRef = useRef(null);

  // Mark JS as enabled after mount so we can progressively enhance
  useEffect(() => {
    setIsJsEnabled(true);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const toggleSection = useCallback((catId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  }, []);

  const query = searchQuery.trim().toLowerCase();
  const isSearching = query.length > 0;

  // Count matching generators
  let matchCount = 0;
  if (isSearching) {
    matchCount = allGeneratorsFlat.filter((g) => {
      const catName = categories.find((c) => c.id === g.categoryId)?.name || '';
      return (
        g.name.toLowerCase().includes(query) ||
        g.description.toLowerCase().includes(query) ||
        catName.toLowerCase().includes(query)
      );
    }).length;
  }

  return (
    <section id="all-generators" className="py-10 md:py-16">
      <div className="max-w-content mx-auto px-5">
        <h2 className="section-heading text-center">{t('allGeneratorsHeading')}</h2>
        <p className="text-body-gray text-center mb-8">{t('allGeneratorsSubheading')}</p>

        {/* Search */}
        <div className="max-w-[480px] mx-auto mb-10">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-body-gray" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={t('searchPlaceholder')}
              aria-label={t('searchLabel')}
              className="w-full h-11 pl-10 pr-4 rounded border border-card-border bg-white text-sm text-heading-darker placeholder:text-body-gray focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors"
            />
          </div>
          {/* Result count - only visible when JS is enabled and searching */}
          {isJsEnabled && isSearching && (
            <p className="text-sm text-body-gray mt-2 text-center">
              {t('searchResultCount', { count: matchCount })}
            </p>
          )}
        </div>

        {/* No results state */}
        {isJsEnabled && isSearching && matchCount === 0 && (
          <div className="text-center py-10">
            <p className="text-body-gray mb-4">{t('searchNoResults')}</p>
            <button
              onClick={clearSearch}
              className="btn-ghost mr-3"
              type="button"
            >
              {t('searchClear')}
            </button>
            <a href="/s/ai_site_builder" className="btn-primary">
              {t('searchFallbackCta')}
            </a>
          </div>
        )}

        {/* Category subsections */}
        {categories.map((cat) => {
          const generators = allGeneratorsByCategory[cat.id] || [];

          // Filter generators when searching (only with JS)
          let visibleGenerators = generators;
          let hasMatches = true;

          if (isJsEnabled && isSearching) {
            visibleGenerators = generators.filter((g) => {
              return (
                g.name.toLowerCase().includes(query) ||
                g.description.toLowerCase().includes(query) ||
                cat.name.toLowerCase().includes(query)
              );
            });
            hasMatches = visibleGenerators.length > 0;
          }

          // When JS is enabled and not searching, show initial count + toggle
          const isExpanded = expandedSections[cat.id];
          const displayCount =
            !isJsEnabled || isSearching || isExpanded
              ? visibleGenerators.length
              : Math.min(INITIAL_VISIBLE_COUNT, visibleGenerators.length);

          const showToggle =
            isJsEnabled &&
            !isSearching &&
            visibleGenerators.length > INITIAL_VISIBLE_COUNT;

          // When searching with no matches in this category, hide the section
          if (isJsEnabled && isSearching && !hasMatches) {
            return null;
          }

          return (
            <div
              key={cat.id}
              id={cat.id}
              className="mb-10 scroll-mt-20"
            >
              <h3 className="font-heading text-heading-darker text-xl md:text-2xl mb-2">
                {cat.name}
              </h3>
              <p className="text-body-gray text-sm mb-5">{cat.description}</p>

              <div id={`${cat.id}-grid`} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {visibleGenerators.slice(0, displayCount).map((gen) => (
                  <a
                    key={gen.slug}
                    href={`/generators/${gen.slug}`}
                    className="card block group"
                  >
                    <div className="mb-3">
                      <CategoryIcon category={cat.id} />
                    </div>
                    <h4 className="font-heading text-heading-darker text-sm mb-2 group-hover:text-brand-purple transition-colors">
                      {gen.name}
                    </h4>
                    <p className="text-body-gray text-sm">{gen.description}</p>
                  </a>
                ))}
              </div>

              {/* Show all / Show less toggle */}
              {showToggle && (
                <div className="mt-5 text-center">
                  <button
                    type="button"
                    onClick={() => toggleSection(cat.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`${cat.id}-grid`}
                    className="btn-ghost"
                  >
                    {isExpanded
                      ? t('showLess')
                      : t('showAll', { count: visibleGenerators.length })}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AllGenerators;
