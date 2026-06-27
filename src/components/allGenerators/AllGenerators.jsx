import React, { useState, useEffect, useRef, useCallback } from "react";
import { strings } from "../../data/strings";
import { generators, categoryMeta } from "../../data/generators";

const categoryOrder = ["websites", "landingPages", "portfolios", "blogs", "stores", "linkInBio"];
const INITIAL_VISIBLE = 6;

function CategoryThumbnail({ categoryKey }) {
  const icons = {
    websites: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="2" y1="8" x2="22" y2="8" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    landingPages: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="2" width="16" height="20" rx="2" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="7" y1="7" x2="17" y2="7" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="7" y1="11" x2="17" y2="11" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    portfolios: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="8" height="8" rx="1" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="14" y="6" width="8" height="8" rx="1" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="2" y="16" width="8" height="6" rx="1" stroke="#8159BB" strokeWidth="1.5" />
        <rect x="14" y="16" width="8" height="6" rx="1" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    blogs: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="2" width="16" height="20" rx="2" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="7" y1="7" x2="17" y2="7" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="7" y1="11" x2="17" y2="11" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="7" y1="15" x2="13" y2="15" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    stores: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 8 L7 3 L17 3 L20 8" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="2" y="8" width="20" height="14" rx="2" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="2" y1="13" x2="22" y2="13" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
    linkInBio: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="6" y="2" width="12" height="20" rx="3" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="9" y1="7" x2="15" y2="7" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="9" y1="11" x2="15" y2="11" stroke="#8159BB" strokeWidth="1.5" />
        <line x1="9" y1="15" x2="15" y2="15" stroke="#8159BB" strokeWidth="1.5" />
      </svg>
    ),
  };
  return icons[categoryKey] || null;
}

function GeneratorCard({ gen, categoryKey }) {
  return (
    <a
      href={`/generators/${gen.slug}`}
      className="gen-card"
      aria-label={gen.name}
    >
      <CategoryThumbnail categoryKey={categoryKey} />
      <span className="gen-card-name">{gen.name}</span>
      <span className="gen-card-desc">{gen.description}</span>
    </a>
  );
}

function CategorySection({ categoryKey, searchTerm }) {
  const s = strings.en;
  const cat = categoryMeta[categoryKey];
  const items = generators[categoryKey] || [];
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const matches = items.filter((gen) => {
    if (!searchTerm) return true;
    const q = searchTerm.toLowerCase();
    return (
      gen.name.toLowerCase().includes(q) ||
      gen.description.toLowerCase().includes(q) ||
      cat.name.toLowerCase().includes(q) ||
      cat.tag.toLowerCase().includes(q)
    );
  });

  const hasMatches = matches.length > 0;
  const shouldCollapse = !expanded && matches.length > INITIAL_VISIBLE;
  const visibleItems = shouldCollapse ? matches.slice(0, INITIAL_VISIBLE) : matches;

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;
    const content = contentRef.current;
    const section = sectionRef.current;

    if (shouldCollapse) {
      const targetHeight = Array.from(visibleItems).reduce((sum, el) => sum + el.offsetHeight, 0);
      content.style.height = `${targetHeight}px`;
      content.style.overflow = "hidden";
      content.style.transition = "height 0.3s ease";
    } else {
      content.style.height = "auto";
      content.style.overflow = "visible";
    }

    section.style.display = hasMatches ? "" : "none";
  }, [shouldCollapse, visibleItems, hasMatches, searchTerm]);

  const handleToggle = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  if (!hasMatches) return null;

  return (
    <div className="gen-section" id={cat.id} ref={sectionRef}>
      <h3 className="gen-section-heading">{cat.name}</h3>
      <p className="gen-section-desc">{cat.description}</p>
      <div className="gen-grid" ref={contentRef}>
        {visibleItems.map((gen) => (
          <GeneratorCard key={gen.slug} gen={gen} categoryKey={categoryKey} />
        ))}
      </div>
      {shouldCollapse && (
        <button
          className="btn-show-all"
          onClick={handleToggle}
          aria-expanded={expanded}
          aria-controls={cat.id}
        >
          {expanded ? s.showLess : s.showAll(matches.length)}
        </button>
      )}
    </div>
  );
}

export default function AllGenerators() {
  const s = strings.en;
  const [searchTerm, setSearchTerm] = useState("");
  const [matchCount, setMatchCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    let total = 0;
    categoryOrder.forEach((key) => {
      const cat = categoryMeta[key];
      const items = generators[key] || [];
      items.forEach((gen) => {
        if (!searchTerm) {
          total++;
          return;
        }
        const q = searchTerm.toLowerCase();
        if (
          gen.name.toLowerCase().includes(q) ||
          gen.description.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q) ||
          cat.tag.toLowerCase().includes(q)
        ) {
          total++;
        }
      });
    });
    setMatchCount(total);
  }, [searchTerm]);

  const handleClear = useCallback(() => {
    setSearchTerm("");
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const hasNoResults = searchTerm && matchCount === 0;

  return (
    <section className="all-generators" id="all-generators" aria-labelledby="all-generators-heading">
      <div className="container">
        <h2 id="all-generators-heading" className="section-heading">{s.allGeneratorsHeading}</h2>
        <p className="section-subheading">{s.allGeneratorsSubheading}</p>

        <div className="search-wrapper">
          <label htmlFor="search-input" className="sr-only">{s.searchLabel}</label>
          <div className="search-input-container">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="6" stroke="#636972" strokeWidth="2" />
              <line x1="13" y1="13" x2="18" y2="18" stroke="#636972" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              id="search-input"
              ref={inputRef}
              type="text"
              className="search-input"
              placeholder={s.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label={s.searchLabel}
            />
            {searchTerm && (
              <button
                className="search-clear"
                onClick={handleClear}
                aria-label={s.clearSearch}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <line x1="4" y1="4" x2="12" y2="12" stroke="#636972" strokeWidth="2" strokeLinecap="round" />
                  <line x1="12" y1="4" x2="4" y2="12" stroke="#636972" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
          {searchTerm && !hasNoResults && (
            <span className="match-count">{s.matchCount(matchCount)}</span>
          )}
        </div>

        {hasNoResults && (
          <div className="no-results" role="status">
            <h3 className="no-results-title">{s.noResultsTitle}</h3>
            <p>{s.noResultsText}</p>
            <button className="btn btn-ghost" onClick={handleClear}>{s.clearSearch}</button>
            <a href="/s/ai_site_builder" className="no-results-link">{s.noResultsCta}</a>
          </div>
        )}

        <div className="gen-sections">
          {categoryOrder.map((key) => (
            <CategorySection key={key} categoryKey={key} searchTerm={searchTerm} />
          ))}
        </div>
      </div>
    </section>
  );
}
