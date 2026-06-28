import { useState, useRef, useEffect, useCallback } from "react";
import { allGenerators, strings, BUILDER_URL } from "../../data/generatorsData.js";

const s = strings.en;

// Category thumbnail SVGs (one per subsection, shared across cards in that subsection)
const categoryThumbs = {
  websites: (
    <svg aria-hidden="true" focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="2" y="4" width="28" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="2" y="4" width="28" height="8" rx="3" fill="#8159BB" opacity="0.12" />
      <rect x="6" y="16" width="20" height="2" rx="1" fill="#C6C9CD" />
      <rect x="6" y="21" width="14" height="2" rx="1" fill="#C6C9CD" />
    </svg>
  ),
  "landing-pages": (
    <svg aria-hidden="true" focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="3" y="3" width="26" height="26" rx="3" stroke="#7671FF" strokeWidth="1.5" fill="none" />
      <rect x="8" y="9" width="16" height="3" rx="1.5" fill="#7671FF" opacity="0.4" />
      <rect x="10" y="15" width="12" height="2" rx="1" fill="#C6C9CD" />
      <rect x="9" y="20" width="14" height="6" rx="2" fill="url(#lp-th-grad)" />
      <defs>
        <linearGradient id="lp-th-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7671FF" />
          <stop offset="100%" stopColor="#CB0C9F" />
        </linearGradient>
      </defs>
    </svg>
  ),
  portfolios: (
    <svg aria-hidden="true" focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="2" y="6" width="12" height="10" rx="2" fill="#8159BB" opacity="0.2" stroke="#8159BB" strokeWidth="1.2" />
      <rect x="18" y="6" width="12" height="10" rx="2" fill="#7671FF" opacity="0.2" stroke="#7671FF" strokeWidth="1.2" />
      <rect x="2" y="19" width="12" height="7" rx="2" fill="#CB0C9F" opacity="0.15" stroke="#CB0C9F" strokeWidth="1.2" />
      <rect x="18" y="19" width="12" height="7" rx="2" fill="#8159BB" opacity="0.15" stroke="#8159BB" strokeWidth="1.2" />
    </svg>
  ),
  blogs: (
    <svg aria-hidden="true" focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="3" y="4" width="26" height="24" rx="3" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="7" y="10" width="18" height="3" rx="1.5" fill="#8159BB" opacity="0.5" />
      <rect x="7" y="16" width="18" height="2" rx="1" fill="#C6C9CD" />
      <rect x="7" y="20" width="12" height="2" rx="1" fill="#C6C9CD" />
    </svg>
  ),
  stores: (
    <svg aria-hidden="true" focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M5 9h22l-2 10H7L5 9z" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <path d="M5 9L4 5H2" stroke="#8159BB" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11" cy="23" r="2" fill="#8159BB" opacity="0.5" />
      <circle cx="21" cy="23" r="2" fill="#8159BB" opacity="0.5" />
    </svg>
  ),
  "link-in-bio": (
    <svg aria-hidden="true" focusable="false" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="9" y="2" width="14" height="28" rx="4" stroke="#8159BB" strokeWidth="1.5" fill="none" />
      <rect x="12" y="9" width="8" height="4" rx="2" fill="#7671FF" opacity="0.4" />
      <rect x="12" y="15" width="8" height="4" rx="2" fill="#CB0C9F" opacity="0.3" />
      <rect x="12" y="21" width="8" height="4" rx="2" fill="#8159BB" opacity="0.3" />
    </svg>
  ),
};

// Search icon
const SearchIcon = () => (
  <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="7" cy="7" r="4.5" stroke="#636972" strokeWidth="1.5" />
    <path d="M10.5 10.5l3 3" stroke="#636972" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Individual generator card (no category tag — subsection heading provides context)
function GeneratorCard({ gen }) {
  return (
    <article>
      <a
        href={`/generators/${gen.slug}`}
        className="gen-card"
        aria-label={gen.name}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          height: "100%",
        }}
      >
        <strong
          className="font-heading"
          style={{
            color: "#2E2E2F",
            fontSize: "14px",
            lineHeight: 1.3,
            display: "block",
          }}
        >
          {gen.name}
        </strong>
        <span style={{ color: "#636972", fontSize: "13px", lineHeight: 1.5 }}>
          {gen.description}
        </span>
      </a>
    </article>
  );
}

// Subsection with show-all toggle
const INITIAL_VISIBLE = 6;

function GeneratorSubsection({ section, visibleIds }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("auto");

  const gens = section.generators;
  const total = gens.length;
  const hasMore = total > INITIAL_VISIBLE;

  // Measure height for CSS transition
  useEffect(() => {
    if (!contentRef.current) return;
    if (expanded) {
      setContentHeight(contentRef.current.scrollHeight + "px");
    } else {
      setContentHeight("auto");
    }
  }, [expanded]);

  const toggleId = `toggle-${section.id}`;
  const gridId = `grid-${section.id}`;

  // Determine which generators to show based on search
  const filteredGens = visibleIds
    ? gens.filter((g) => visibleIds.has(g.slug))
    : gens;

  if (filteredGens.length === 0) return null;

  const visibleGens = visibleIds
    ? filteredGens
    : expanded
    ? filteredGens
    : filteredGens.slice(0, INITIAL_VISIBLE);

  const showToggle = !visibleIds && hasMore;

  return (
    <section
      id={section.id}
      aria-labelledby={`heading-${section.id}`}
      style={{ scrollMarginTop: "80px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "6px",
        }}
      >
        <div style={{ flexShrink: 0 }}>{categoryThumbs[section.id]}</div>
        <h3
          id={`heading-${section.id}`}
          className="font-heading"
          style={{
            color: "#4B5056",
            fontSize: "clamp(17px, 2vw, 22px)",
            margin: 0,
          }}
        >
          {section.heading.toUpperCase()}
        </h3>
      </div>
      <p
        style={{
          color: "#636972",
          fontSize: "13px",
          margin: "0 0 20px",
          marginInlineStart: "44px",
        }}
      >
        {section.description}
      </p>

      {/* All cards are always in the DOM; JS only hides extras visually */}
      <div style={{ position: "relative" }}>
        {/* Baseline: all cards visible without JS */}
        <noscript>
          <div className="grid-3">
            {filteredGens.map((gen) => (
              <GeneratorCard key={gen.slug} gen={gen} />
            ))}
          </div>
        </noscript>

        {/* JS-enhanced: show initial set, rest hidden via inline style */}
        <div className="grid-3" id={gridId} aria-live="polite">
          {filteredGens.map((gen, idx) => (
            <div
              key={gen.slug}
              style={
                !visibleIds && !expanded && idx >= INITIAL_VISIBLE
                  ? { display: "none" }
                  : {}
              }
            >
              <GeneratorCard gen={gen} />
            </div>
          ))}
        </div>

        {showToggle && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button
              id={toggleId}
              aria-expanded={expanded}
              aria-controls={gridId}
              onClick={() => setExpanded((v) => !v)}
              className="ghost-btn font-heading"
              style={{
                height: "36px",
                padding: "0 20px",
                borderRadius: "4px",
                fontSize: "12px",
                letterSpacing: "0.5px",
              }}
            >
              {expanded
                ? s.showLess
                : s.showAll(total)}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default function AllGenerators() {
  const [query, setQuery] = useState("");

  // Build a flat list for search
  const allFlat = allGenerators.flatMap((sec) =>
    sec.generators.map((g) => ({ ...g, category: sec.heading, sectionId: sec.id }))
  );

  const totalCount = allFlat.length;

  // Filter logic
  const filtered = query.trim()
    ? allFlat.filter((g) => {
        const q = query.toLowerCase();
        return (
          g.name.toLowerCase().includes(q) ||
          g.description.toLowerCase().includes(q) ||
          g.category.toLowerCase().includes(q)
        );
      })
    : null;

  const matchCount = filtered ? filtered.length : totalCount;

  // Build a set of visible slugs per section when searching
  const getVisibleIds = useCallback(
    (sectionId) => {
      if (!filtered) return null;
      const ids = new Set(
        filtered.filter((g) => g.sectionId === sectionId).map((g) => g.slug)
      );
      return ids;
    },
    [filtered]
  );

  const noResults = filtered && filtered.length === 0;

  return (
    <section
      id="all-generators"
      style={{
        background: "#F4F6F8",
        paddingBlock: "60px",
        scrollMarginTop: "60px",
      }}
      aria-labelledby="all-gen-heading"
    >
      <div className="content-wrap">
        <h2
          id="all-gen-heading"
          className="font-heading"
          style={{
            color: "#4B5056",
            fontSize: "clamp(22px, 2.5vw, 30px)",
            margin: "0 0 8px",
          }}
        >
          {s.allGeneratorsHeading}
        </h2>
        <p style={{ color: "#636972", fontSize: "15px", margin: "0 0 30px" }}>
          {s.allGeneratorsSubheading}
        </p>

        {/* Search input */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="gen-search" className="sr-only">
            {s.searchPlaceholder}
          </label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "#ffffff",
              border: "1px solid #C6C9CD",
              borderRadius: "4px",
              padding: "0 14px",
              maxWidth: "480px",
              height: "44px",
            }}
          >
            <SearchIcon />
            <input
              id="gen-search"
              type="search"
              aria-label={s.searchPlaceholder}
              placeholder={s.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "#2E2E2F",
                flex: 1,
                height: "100%",
              }}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                style={{
                  background: "none",
                  border: "none",
                  padding: "0",
                  cursor: "pointer",
                  color: "#636972",
                  fontSize: "18px",
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Result count */}
        {query.trim() && (
          <p
            aria-live="polite"
            aria-atomic="true"
            style={{
              color: "#636972",
              fontSize: "13px",
              margin: "0 0 20px",
            }}
          >
            {s.searchResultCount(matchCount)}
          </p>
        )}

        {/* No results state */}
        {noResults && (
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #C6C9CD",
              borderRadius: "3px",
              padding: "30px 20px",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <p style={{ color: "#4B5056", fontSize: "15px", margin: "0 0 12px" }}>
              {s.searchEmpty}
            </p>
            <button
              onClick={() => setQuery("")}
              className="ghost-btn font-heading"
              style={{
                height: "36px",
                padding: "0 16px",
                borderRadius: "4px",
                fontSize: "12px",
                marginBottom: "12px",
              }}
            >
              {s.searchClear}
            </button>
            <p style={{ margin: "8px 0 0", fontSize: "13px", color: "#636972" }}>
              <a
                href={BUILDER_URL}
                style={{ color: "#8159BB", textDecoration: "underline" }}
              >
                {s.searchEmptyBuilderLink}
              </a>
            </p>
          </div>
        )}

        {/* Subsections */}
        {!noResults && (
          <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
            {allGenerators.map((section) => {
              const visibleIds = getVisibleIds(section.id);
              // If searching and no matches in this section, skip
              if (visibleIds && visibleIds.size === 0) return null;
              return (
                <GeneratorSubsection
                  key={section.id}
                  section={section}
                  visibleIds={visibleIds}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
