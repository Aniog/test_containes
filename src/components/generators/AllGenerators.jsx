import { useState, useRef, useEffect, useId } from 'react';
import { allGenerators, categories, strings, toSlug } from '../../data/generatorsData.js';
import { CategoryIllustration, SearchIcon } from './Icons.jsx';

const s = strings.en.allGenerators;

// Flatten all generators for search
const allFlat = categories.flatMap((cat) =>
  (allGenerators[cat.id] || []).map((gen) => ({
    ...gen,
    categoryId: cat.id,
    categoryName: cat.name,
  }))
);

const INITIAL_VISIBLE = 6;

function GeneratorCard({ gen }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={`/generators/${toSlug(gen.name)}`}
      aria-label={gen.name}
      style={{
        background: '#ffffff',
        border: `1px solid ${hovered ? '#8159BB' : '#C6C9CD'}`,
        borderRadius: 3,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        textDecoration: 'none',
        color: 'inherit',
        transition: 'box-shadow 0.18s ease, border-color 0.18s ease',
        boxShadow: hovered ? '0 4px 16px rgba(129,89,187,0.12)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <strong
        style={{
          fontFamily: '"Open Sans", sans-serif',
          fontSize: 14,
          fontWeight: 600,
          color: '#2E2E2F',
          lineHeight: 1.4,
        }}
      >
        {gen.name}
      </strong>
      <span
        style={{
          fontFamily: '"Open Sans", sans-serif',
          fontSize: 13,
          color: '#636972',
          lineHeight: 1.5,
        }}
      >
        {gen.description}
      </span>
    </a>
  );
}

function CategorySubsection({ cat, visibleGens }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const btnId = useId();

  const total = visibleGens.length;
  const showToggle = total > INITIAL_VISIBLE;
  const displayed = expanded ? visibleGens : visibleGens.slice(0, INITIAL_VISIBLE);

  return (
    <section
      id={cat.slug}
      aria-labelledby={`cat-heading-${cat.slug}`}
      style={{ scrollMarginTop: 80 }}
    >
      <div style={{ marginBottom: 20 }}>
        <h3
          id={`cat-heading-${cat.slug}`}
          style={{
            margin: '0 0 6px',
            fontFamily: '"Josefin Sans", Poppins, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(18px, 2vw, 22px)',
            color: '#4B5056',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            lineHeight: 1.2,
          }}
        >
          {cat.name}
        </h3>
        <p
          style={{
            margin: 0,
            fontFamily: '"Open Sans", sans-serif',
            fontSize: 13,
            color: '#636972',
          }}
        >
          {cat.description}
        </p>
      </div>

      {/* All cards always in DOM — JS progressively collapses extras */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }}
        className="dir-grid"
      >
        {/* Always-visible cards */}
        {displayed.map((gen) => (
          <GeneratorCard key={gen.name} gen={gen} />
        ))}

        {/* Hidden extras — in DOM, hidden via CSS height transition */}
        {showToggle && !expanded && visibleGens.slice(INITIAL_VISIBLE).map((gen) => (
          <div
            key={gen.name}
            aria-hidden="true"
            style={{ display: 'none' }}
            data-hidden-card="true"
          >
            {/* Card is in DOM for SEO; hidden visually when collapsed */}
            <GeneratorCard gen={gen} />
          </div>
        ))}
      </div>

      {/* Noscript: all cards always visible */}
      <noscript>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
            marginTop: 20,
          }}
          className="dir-grid"
        >
          {visibleGens.slice(INITIAL_VISIBLE).map((gen) => (
            <GeneratorCard key={`noscript-${gen.name}`} gen={gen} />
          ))}
        </div>
      </noscript>

      {showToggle && (
        <div style={{ marginTop: 20 }}>
          <button
            id={btnId}
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={() => setExpanded((v) => !v)}
            style={{
              background: 'transparent',
              border: '1px solid #8159BB',
              borderRadius: 4,
              padding: '9px 15px',
              fontFamily: '"Josefin Sans", Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 12,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#8159BB',
              cursor: 'pointer',
            }}
          >
            {expanded ? s.showLess : s.showAll(total)}
          </button>
        </div>
      )}
    </section>
  );
}

export default function AllGenerators() {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const q = query.trim().toLowerCase();

  // Filter logic
  const filteredByCategory = categories.map((cat) => {
    const gens = allGenerators[cat.id] || [];
    if (!q) return { cat, gens };
    const matched = gens.filter(
      (g) =>
        g.name.toLowerCase().includes(q) ||
        g.description.toLowerCase().includes(q) ||
        cat.name.toLowerCase().includes(q)
    );
    return { cat, gens: matched };
  });

  const totalMatches = filteredByCategory.reduce((sum, { gens }) => sum + gens.length, 0);
  const isSearching = q.length > 0;

  return (
    <section
      id="all-generators"
      aria-labelledby="all-gen-heading"
      style={{
        background: '#F4F6F8',
        padding: '60px 20px',
        borderTop: '1px solid #E2E4E7',
      }}
    >
      <div style={{ maxWidth: 1200, marginInline: 'auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: 40 }}>
          <h2
            id="all-gen-heading"
            style={{
              margin: '0 0 10px',
              fontFamily: '"Josefin Sans", Poppins, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(22px, 2.5vw, 30px)',
              color: '#4B5056',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              lineHeight: 1.2,
            }}
          >
            {s.heading}
          </h2>
          <p
            style={{
              margin: 0,
              fontFamily: '"Open Sans", sans-serif',
              fontSize: 14,
              color: '#636972',
            }}
          >
            {s.subheading}
          </p>
        </div>

        {/* Search */}
        <div style={{ marginBottom: 40 }}>
          <div
            style={{
              position: 'relative',
              maxWidth: 480,
            }}
          >
            <span
              style={{
                position: 'absolute',
                insetInlineStart: 12,
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <SearchIcon />
            </span>
            <input
              ref={inputRef}
              type="search"
              aria-label={s.searchLabel}
              placeholder={s.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                height: 44,
                paddingInlineStart: 40,
                paddingInlineEnd: 16,
                border: '1px solid #C6C9CD',
                borderRadius: 4,
                fontFamily: '"Open Sans", sans-serif',
                fontSize: 14,
                color: '#2E2E2F',
                background: '#ffffff',
                outline: 'none',
              }}
              onFocus={(e) => { e.target.style.borderColor = '#8159BB'; }}
              onBlur={(e) => { e.target.style.borderColor = '#C6C9CD'; }}
            />
          </div>

          {isSearching && (
            <p
              aria-live="polite"
              style={{
                marginTop: 10,
                fontFamily: '"Open Sans", sans-serif',
                fontSize: 13,
                color: '#636972',
              }}
            >
              {totalMatches > 0 ? s.resultCount(totalMatches) : ''}
            </p>
          )}
        </div>

        {/* No results state */}
        {isSearching && totalMatches === 0 && (
          <div
            style={{
              padding: '40px 20px',
              textAlign: 'center',
              background: '#ffffff',
              border: '1px solid #E2E4E7',
              borderRadius: 3,
              marginBottom: 40,
            }}
          >
            <p
              style={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: 14,
                color: '#636972',
                margin: '0 0 16px',
              }}
            >
              {s.noResults}
            </p>
            <button
              onClick={() => setQuery('')}
              style={{
                background: 'transparent',
                border: '1px solid #8159BB',
                borderRadius: 4,
                padding: '9px 15px',
                fontFamily: '"Josefin Sans", Poppins, sans-serif',
                fontWeight: 700,
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#8159BB',
                cursor: 'pointer',
                marginBottom: 16,
              }}
            >
              {s.noResultsClear}
            </button>
            <p style={{ margin: 0 }}>
              <a
                href="/s/ai_site_builder"
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: 13,
                  color: '#8159BB',
                  textDecoration: 'underline',
                }}
              >
                {s.noResultsCta}
              </a>
            </p>
          </div>
        )}

        {/* Category subsections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
          {filteredByCategory.map(({ cat, gens }) => {
            if (isSearching && gens.length === 0) return null;
            return (
              <CategorySubsection key={cat.id} cat={cat} visibleGens={gens} />
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dir-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .dir-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
