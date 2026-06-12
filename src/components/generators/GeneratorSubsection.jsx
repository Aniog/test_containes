import { useState, useId } from 'react';
import GeneratorCard from './GeneratorCard';
import { getCategoryIcon } from './CategoryIcons';
import strings from '../../data/strings';

const s = strings.en.allGenerators;
const INITIAL_SHOW = 6;

export default function GeneratorSubsection({ id, heading, description, generators, searchQuery }) {
  const [expanded, setExpanded] = useState(false);
  const toggleId = useId();
  const extraId = useId();

  const q = searchQuery.trim().toLowerCase();
  const isSearching = q.length > 0;

  const matchesSearch = (gen) =>
    gen.name.toLowerCase().includes(q) ||
    gen.description.toLowerCase().includes(q) ||
    heading.toLowerCase().includes(q);

  const hasAnyMatch = isSearching ? generators.some(matchesSearch) : true;

  const visibleCards = generators.slice(0, INITIAL_SHOW);
  const extraCards = generators.slice(INITIAL_SHOW);
  const totalCount = generators.length;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={hasAnyMatch ? '' : 'subsection-search-hidden'}
      style={{ scrollMarginTop: 80 }}
    >
      <div className="flex items-center gap-3" style={{ marginBottom: 6 }}>
        {getCategoryIcon(id, 28)}
        <h3
          id={`${id}-heading`}
          className="font-heading"
          style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: '#4B5056', margin: 0 }}
        >
          {heading}
        </h3>
      </div>
      <p style={{ color: '#636972', fontSize: 13, marginBottom: 20, marginTop: 4 }}>
        {description}
      </p>

      {/* First INITIAL_SHOW cards — always visible */}
      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}
      >
        {visibleCards.map((gen) => (
          <GeneratorCard
            key={gen.slug}
            {...gen}
            hidden={isSearching && !matchesSearch(gen)}
          />
        ))}

        {/* Extra cards — in same grid, collapsed via wrapper when not searching */}
        {extraCards.length > 0 && (
          <>
            {isSearching
              ? extraCards.map((gen) => (
                  <GeneratorCard
                    key={gen.slug}
                    {...gen}
                    hidden={!matchesSearch(gen)}
                  />
                ))
              : extraCards.map((gen) => (
                  <div
                    key={gen.slug}
                    style={{ display: expanded ? 'block' : 'none' }}
                    aria-hidden={!expanded ? 'true' : undefined}
                  >
                    <GeneratorCard {...gen} />
                  </div>
                ))}
          </>
        )}
      </div>

      {/* Show all toggle — only when not searching and there are extra cards */}
      {!isSearching && extraCards.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <button
            id={toggleId}
            aria-expanded={expanded}
            aria-controls={extraId}
            onClick={() => setExpanded((v) => !v)}
            className="btn-ghost"
            style={{ height: 36, padding: '0 15px', fontSize: 13 }}
          >
            {expanded ? s.showLess : s.showAll(totalCount)}
          </button>
        </div>
      )}
    </section>
  );
}
