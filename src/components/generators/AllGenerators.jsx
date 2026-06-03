



import React, { useState, useMemo, useRef, useEffect } from 'react';
import strings from '@/data/strings.en.js';
import { allGenerators, categoryMeta } from '@/data/generators.js';

const INITIAL_VISIBLE = 6;

const CategoryThumbnail = ({ slug }) => {
  const icons = {
    websites: (
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="44" height="28" rx="4" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="2" y="2" width="44" height="8" rx="4" fill="#F4F6F8" />
        <circle cx="10" cy="6" r="2" fill="#8159BB" opacity="0.4" />
        <circle cx="18" cy="6" r="2" fill="#8159BB" opacity="0.25" />
        <circle cx="26" cy="6" r="2" fill="#8159BB" opacity="0.15" />
      </svg>
    ),
    'landing-pages': (
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none" aria-hidden="true">
        <rect x="4" y="2" width="40" height="28" rx="4" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="12" y="8" width="24" height="6" rx="2" fill="#F4F6F8" />
        <rect x="12" y="18" width="24" height="2" rx="1" fill="#E2E4E7" />
        <rect x="12" y="23" width="16" height="2" rx="1" fill="#E2E4E7" />
      </svg>
    ),
    portfolios: (
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="20" height="12" rx="3" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="26" y="2" width="20" height="12" rx="3" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="2" y="18" width="20" height="12" rx="3" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="26" y="18" width="20" height="12" rx="3" stroke="#C6C9CD" strokeWidth="1" />
      </svg>
    ),
    blogs: (
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none" aria-hidden="true">
        <rect x="4" y="2" width="40" height="28" rx="4" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="10" y="8" width="28" height="2" rx="1" fill="#E2E4E7" />
        <rect x="10" y="13" width="28" height="2" rx="1" fill="#E2E4E7" />
        <rect x="10" y="18" width="20" height="2" rx="1" fill="#E2E4E7" />
        <rect x="10" y="23" width="14" height="2" rx="1" fill="#E2E4E7" />
      </svg>
    ),
    stores: (
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="36" height="22" rx="4" stroke="#C6C9CD" strokeWidth="1" />
        <path d="M6 12h36" stroke="#C6C9CD" strokeWidth="1" />
        <rect x="18" y="16" width="12" height="10" rx="2" fill="#F4F6F8" />
      </svg>
    ),
    'link-in-bio': (
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none" aria-hidden="true">
        <circle cx="24" cy="10" r="6" stroke="#C6C9CD" strokeWidth="1" />
        <path d="M18 22l3-6h6l3 6" stroke="#C6C9CD" strokeWidth="1" strokeLinecap="round" />
        <circle cx="24" cy="7" r="1.5" fill="#8159BB" opacity="0.3" />
      </svg>
    ),
  };
  return icons[slug] || icons.websites;
};

const AllGenerators = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const searchInputRef = useRef(null);

  const categorySlugs = Object.keys(allGenerators);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return categorySlugs.map((slug) => ({
        slug,
        generators: allGenerators[slug],
      }));
    }
    const q = searchQuery.toLowerCase().trim();
    return categorySlugs
      .map((slug) => {
        const filtered = allGenerators[slug].filter(
          (g) =>
            g.name.toLowerCase().includes(q) ||
            g.description.toLowerCase().includes(q) ||
            (categoryMeta[slug]?.name || '').toLowerCase().includes(q)
        );
        return { slug, generators: filtered };
      })
      .filter((c) => c.generators.length > 0);
  }, [searchQuery]);

  const totalVisible = useMemo(
    () => filteredCategories.reduce((sum, c) => sum + c.generators.length, 0),
    [filteredCategories]
  );

  const totalAll = useMemo(
    () => categorySlugs.reduce((sum, s) => sum + allGenerators[s].length, 0),
    []
  );

  const toggleSection = (slug) => {
    setExpandedSections((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const clearSearch = () => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <section className="section all-generators" id="all-generators">
      <div className="section-container">
        <h2 className="section-heading">{strings.allGeneratorsHeading}</h2>
        <p className="section-subheading">{strings.allGeneratorsSubheading}</p>

        <div className="search-wrapper">
          <div className="search-input-group">
            <svg
              className="search-icon"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="5.5" stroke="#636972" strokeWidth="1.5" />
              <path d="M12 12l4 4" stroke="#636972" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              ref={searchInputRef}
              type="search"
              className="search-input"
              placeholder={strings.searchPlaceholder}
              aria-label={strings.searchAriaLabel}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {searchQuery.trim() && (
            <span className="search-results-count">
              {strings.resultsCount(totalVisible)}
            </span>
          )}
        </div>

        {filteredCategories.length === 0 && (
          <div className="search-empty">
            <p className="search-empty-text">{strings.noResults}</p>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={clearSearch}
            >
              {strings.clearSearch}
            </button>
            <a href="/s/ai_site_builder" className="search-empty-link">
              {strings.cantFind}
            </a>
          </div>
        )}

        {filteredCategories.map(({ slug, generators }) => {
          const isExpanded = expandedSections[slug] || false;
          const showToggle = generators.length > INITIAL_VISIBLE;
          const visibleGenerators = isExpanded
            ? generators
            : generators.slice(0, INITIAL_VISIBLE);
          const meta = categoryMeta[slug] || { name: slug, description: '' };

          return (
            <div key={slug} className="generator-subsection" id={slug}>
              <h3 className="generator-subsection-heading">{meta.name}</h3>
              <p className="generator-subsection-desc">{meta.description}</p>
              <div className="generator-grid">
                {visibleGenerators.map((gen) => (
                  <a
                    key={gen.slug}
                    href={`/generators/${gen.slug}`}
                    className="card generator-card"
                  >
                    <div className="generator-card-thumb" aria-hidden="true">
                      <CategoryThumbnail slug={slug} />
                    </div>
                    <h4 className="generator-card-name">{gen.name}</h4>
                    <p className="generator-card-desc">{gen.description}</p>
                  </a>
                ))}
              </div>
              {showToggle && (
                <div className="generator-toggle-wrapper">
                  <button
                    type="button"
                    className="btn btn-ghost generator-toggle"
                    onClick={() => toggleSection(slug)}
                    aria-expanded={isExpanded}
                    aria-controls={`${slug}-grid`}
                  >
                    {isExpanded
                      ? strings.showLess
                      : `${strings.showAll} ${generators.length} generators`}
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




