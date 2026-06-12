import { useState, useRef, useEffect } from 'react';
import { allGenerators, toSlug, INITIAL_VISIBLE } from '../../data/generators.js';
import { categoryIcons } from './CategoryIcons.jsx';
import s from '../../data/strings.js';

/** Small thumbnail icon for each card in a subsection */
function SubsectionThumb({ categoryId }) {
  const Icon = categoryIcons[categoryId];
  if (!Icon) return null;
  return (
    <div
      className="flex items-center justify-center rounded"
      style={{ width: 36, height: 36, background: '#F4F6F8', flexShrink: 0 }}
    >
      <Icon size={22} />
    </div>
  );
}

/** Single generator card inside a subsection */
function GeneratorCard({ name, description, categoryId }) {
  return (
    <a
      href={`/generators/${toSlug(name)}`}
      className="generator-card flex flex-col gap-3"
      aria-label={name}
    >
      <SubsectionThumb categoryId={categoryId} />
      <div>
        <div
          style={{
            fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            color: '#2E2E2F',
            marginBottom: 4,
            lineHeight: 1.3,
          }}
        >
          {name}
        </div>
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 13,
            color: '#636972',
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>
      </div>
    </a>
  );
}

/** One category subsection with show-all toggle */
function CategorySubsection({ section, searchQuery }) {
  const [expanded, setExpanded] = useState(false);
  const overflowRef = useRef(null);

  const q = searchQuery.trim().toLowerCase();

  const matchingItems = q
    ? section.items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          section.heading.toLowerCase().includes(q)
      )
    : section.items;

  const isHidden = q && matchingItems.length === 0;
  const visibleItems = q ? matchingItems : section.items.slice(0, INITIAL_VISIBLE);
  const extraItems = q ? [] : section.items.slice(INITIAL_VISIBLE);
  const hasExtras = !q && extraItems.length > 0;

  // Animate height on expand/collapse
  useEffect(() => {
    if (!overflowRef.current) return;
    if (expanded) {
      overflowRef.current.style.maxHeight = overflowRef.current.scrollHeight + 'px';
    } else {
      overflowRef.current.style.maxHeight = '0px';
    }
  }, [expanded]);

  const toggleId = `toggle-${section.id}`;
  const overflowId = `overflow-${section.id}`;

  return (
    <section
      id={section.id}
      aria-label={section.heading}
      className={isHidden ? 'search-hidden-section' : ''}
      style={{ scrollMarginTop: 80 }}
    >
      <div className="mb-5">
        <h3
          className="m-0 mb-1"
          style={{
            fontFamily: "'Josefin Sans', 'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(16px, 2vw, 20px)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: '#4B5056',
            lineHeight: 1.2,
          }}
        >
          {section.heading}
        </h3>
        <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 13, color: '#636972', margin: 0 }}>
          {section.description}
        </p>
      </div>

      {/* Always-visible cards (first INITIAL_VISIBLE, or all matching when searching) */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {visibleItems.map((item) => (
          <GeneratorCard key={item.name} {...item} categoryId={section.id} />
        ))}
      </div>

      {/* Extra cards — hidden by default, revealed by toggle */}
      {hasExtras && (
        <>
          <div
            id={overflowId}
            ref={overflowRef}
            style={{
              overflow: 'hidden',
              maxHeight: 0,
              transition: 'max-height 0.35s ease',
            }}
          >
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
            >
              {extraItems.map((item) => (
                <GeneratorCard key={item.name} {...item} categoryId={section.id} />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <button
              id={toggleId}
              type="button"
              aria-expanded={expanded}
              aria-controls={overflowId}
              className="btn-ghost"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded
                ? s.showLess
                : s.showAll(section.items.length)}
            </button>
          </div>
        </>
      )}
    </section>
  );
}

/** Search input */
function SearchBar({ value, onChange, resultCount, hasQuery }) {
  return (
    <div className="mb-10">
      <div className="relative" style={{ maxWidth: 480 }}>
        <label htmlFor="generator-search" className="sr-only">
          Search generators
        </label>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          aria-hidden="true"
          style={{ position: 'absolute', insetInlineStart: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
        >
          <circle cx="7.5" cy="7.5" r="5.5" stroke="#636972" strokeWidth="1.6" />
          <path d="M12 12l3.5 3.5" stroke="#636972" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <input
          id="generator-search"
          type="search"
          aria-label="Search generators"
          placeholder={s.searchPlaceholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: '100%',
            paddingInlineStart: 40,
            paddingInlineEnd: 16,
            paddingTop: 10,
            paddingBottom: 10,
            border: '1px solid #C6C9CD',
            borderRadius: 4,
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 14,
            color: '#2E2E2F',
            background: '#ffffff',
            outline: 'none',
            boxSizing: 'border-box',
          }}
          onFocus={(e) => { e.target.style.borderColor = '#8159BB'; }}
          onBlur={(e) => { e.target.style.borderColor = '#C6C9CD'; }}
        />
      </div>
      {hasQuery && (
        <p
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 13,
            color: '#636972',
            marginTop: 8,
            marginBottom: 0,
          }}
          aria-live="polite"
          aria-atomic="true"
        >
          {s.searchResultCount(resultCount)}
        </p>
      )}
    </div>
  );
}

/** Empty state when no results */
function EmptyState({ onClear }) {
  return (
    <div
      className="text-center py-16"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      <p style={{ fontSize: 15, color: '#4B5056', marginBottom: 12 }}>
        {s.searchNoResults}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button type="button" className="btn-ghost" onClick={onClear}>
          {s.searchClear}
        </button>
        <a
          href="/s/ai_site_builder"
          style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: '#8159BB', textDecoration: 'underline' }}
        >
          {s.searchBuilderLink}
        </a>
      </div>
    </div>
  );
}

export default function AllGenerators() {
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();

  const totalMatches = q
    ? allGenerators.reduce((acc, section) => {
        return acc + section.items.filter(
          (item) =>
            item.name.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            section.heading.toLowerCase().includes(q)
        ).length;
      }, 0)
    : null;

  const noResults = q && totalMatches === 0;

  return (
    <section
      id="all-generators"
      className="bg-white"
      style={{ paddingTop: 60, paddingBottom: 60, scrollMarginTop: 60 }}
    >
      <div className="content-container">
        <div className="mb-8">
          <h2
            className="section-heading m-0 mb-2"
            style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}
          >
            {s.allHeading}
          </h2>
          <p style={{ fontFamily: "'Open Sans', sans-serif", fontSize: 14, color: '#636972', margin: 0 }}>
            {s.allSubheading}
          </p>
        </div>

        <SearchBar
          value={query}
          onChange={setQuery}
          resultCount={totalMatches}
          hasQuery={!!q}
        />

        {noResults ? (
          <EmptyState onClear={() => setQuery('')} />
        ) : (
          <div className="flex flex-col gap-12">
            {allGenerators.map((section) => (
              <CategorySubsection
                key={section.id}
                section={section}
                searchQuery={query}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
