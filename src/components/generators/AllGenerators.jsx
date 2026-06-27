import { useState, useEffect, useRef } from 'react';
import { allGenerators, strings } from '../../data/generators-data';
import { thumbMap } from './CategoryIcons';

const s = strings.en;

// Search icon SVG
function SearchIcon() {
  return (
    <svg className="strk-search-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// Individual generator card
function GenCard({ name, slug, description, isVisible }) {
  return (
    <a
      href={`/generators/${slug}`}
      className="strk-card gen-card"
      style={isVisible ? {} : { display: 'none' }}
      aria-hidden={isVisible ? undefined : 'true'}
      tabIndex={isVisible ? undefined : -1}
    >
      <div className="gen-card-name">{name}</div>
      <p className="gen-card-desc">{description}</p>
    </a>
  );
}

// One category subsection
function SubSection({ categoryName, categorySlug, description, generators, searchQuery }) {
  const [showAll, setShowAll] = useState(false);
  const [jsLoaded, setJsLoaded] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    setJsLoaded(true);
  }, []);

  const q = searchQuery.trim().toLowerCase();

  // Determine which cards match the search
  const matchedSlugs = new Set(
    q
      ? generators
          .filter(
            (g) =>
              g.name.toLowerCase().includes(q) ||
              g.description.toLowerCase().includes(q) ||
              categoryName.toLowerCase().includes(q)
          )
          .map((g) => g.slug)
      : generators.map((g) => g.slug)
  );

  const hasAnyMatch = matchedSlugs.size > 0;

  // When searching, show all matches; otherwise respect showAll toggle
  const isCardVisible = (gen, index) => {
    if (q) return matchedSlugs.has(gen.slug);
    if (!jsLoaded) return true; // no JS: show all
    return showAll || index < 8;
  };

  const showToggle = jsLoaded && !q && generators.length > 8;

  // Collapse/expand grid via max-height transition
  const gridStyle =
    jsLoaded && !showAll && !q
      ? { maxHeight: '480px', overflow: 'hidden', transition: 'max-height 0.4s ease' }
      : { maxHeight: '9999px', overflow: 'visible', transition: 'max-height 0.4s ease' };

  if (!hasAnyMatch) return null;

  return (
    <section
      id={categorySlug}
      className="strk-subsection"
      aria-label={`${categoryName} generators`}
    >
      <h3>{categoryName}</h3>
      <p className="strk-subsection-desc">{description}</p>

      <div ref={gridRef} style={gridStyle}>
        <div className="strk-grid-3">
          {generators.map((gen, index) => (
            <article key={gen.slug}>
              <GenCard
                {...gen}
                isVisible={isCardVisible(gen, index)}
              />
            </article>
          ))}
        </div>
      </div>

      {showToggle && (
        <button
          className="strk-show-all-btn"
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
          aria-controls={`grid-${categorySlug}`}
        >
          {showAll ? s.showLess : s.showAll(generators.length)}
        </button>
      )}
    </section>
  );
}

// Total visible count across all subsections
function countVisible(query) {
  const q = query.trim().toLowerCase();
  if (!q) return allGenerators.reduce((sum, cat) => sum + cat.generators.length, 0);
  return allGenerators.reduce((sum, cat) => {
    return (
      sum +
      cat.generators.filter(
        (g) =>
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          cat.categoryName.toLowerCase().includes(q)
      ).length
    );
  }, 0);
}

export default function AllGenerators() {
  const [searchQuery, setSearchQuery] = useState('');
  const total = countVisible(searchQuery);
  const q = searchQuery.trim().toLowerCase();

  const searchCountText = () => {
    if (!q) return '';
    if (total === 1) return s.searchCountSingle;
    return s.searchCountPlural(total);
  };

  return (
    <section id="all-generators" className="strk-section strk-section--light">
      <div className="strk-container">
        <h2 className="strk-section-heading">{s.allHeading}</h2>
        <p className="strk-section-sub">{s.allSub}</p>

        {/* Search input */}
        <div className="strk-search-wrap">
          <SearchIcon />
          <input
            type="search"
            className="strk-search-input"
            placeholder={s.searchPlaceholder}
            aria-label={s.searchLabel}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoComplete="off"
          />
        </div>
        <p className="strk-search-count" aria-live="polite" aria-atomic="true">
          {searchCountText()}
        </p>

        {/* Empty state */}
        {q && total === 0 && (
          <div className="strk-search-empty">
            <p>{s.searchEmpty}</p>
            <a href="/s/ai_site_builder" className="btn-gradient btn-gradient--std">
              {s.searchEmptyLink}
            </a>
          </div>
        )}

        {/* Subsections — all rendered in DOM always */}
        {allGenerators.map((cat) => (
          <SubSection
            key={cat.categorySlug}
            categoryName={cat.categoryName}
            categorySlug={cat.categorySlug}
            description={cat.description}
            generators={cat.generators}
            searchQuery={searchQuery}
          />
        ))}
      </div>
    </section>
  );
}
