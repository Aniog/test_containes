import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MEMORIES, ERAS, EMOTIONS, LIFE_EVENTS, REGIONS } from '../../data/memories';
import MemoryCard from '../memory/MemoryCard';

const FilterChip = ({ label, active, onClick, color }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full border text-xs font-mono transition-all duration-200 ${
      active
        ? 'border-aurora/60 bg-aurora/15 text-aurora-glow'
        : 'border-stardust/50 bg-nebula/50 text-mist hover:border-aurora/30 hover:text-starlight'
    }`}
    style={active && color ? {
      borderColor: `${color}60`,
      backgroundColor: `${color}15`,
      color: color,
    } : {}}
  >
    {label}
  </button>
);

const FilterGroup = ({ title, items, activeId, onSelect, paramKey }) => (
  <div className="mb-6">
    <h4 className="text-xs font-mono text-fog uppercase tracking-widest mb-3">{title}</h4>
    <div className="flex flex-wrap gap-2">
      <FilterChip
        label="All"
        active={!activeId}
        onClick={() => onSelect(paramKey, null)}
      />
      {items.map(item => (
        <FilterChip
          key={item.id}
          label={item.label}
          active={activeId === item.id}
          onClick={() => onSelect(paramKey, item.id)}
          color={item.color}
        />
      ))}
    </div>
  </div>
);

const ExploreGrid = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(true);

  const activeEra = searchParams.get('era');
  const activeEmotion = searchParams.get('emotion');
  const activeEvent = searchParams.get('event');
  const activeRegion = searchParams.get('region');

  const handleFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  };

  const filtered = MEMORIES.filter(m => {
    if (activeEra && m.era !== activeEra) return false;
    if (activeEmotion && m.emotion !== activeEmotion) return false;
    if (activeEvent && m.lifeEvent !== activeEvent) return false;
    if (activeRegion && m.region !== activeRegion) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        m.title.toLowerCase().includes(q) ||
        m.excerpt.toLowerCase().includes(q) ||
        m.contributor.toLowerCase().includes(q) ||
        m.location.toLowerCase().includes(q) ||
        m.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const activeFilterCount = [activeEra, activeEmotion, activeEvent, activeRegion].filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 text-fog"
            width="16" height="16" viewBox="0 0 16 16" fill="none"
          >
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search memories, contributors, locations..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-nebula border border-stardust/50 rounded-xl pl-11 pr-4 py-3 text-starlight placeholder-fog text-sm focus:outline-none focus:border-aurora/50 transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-sm text-mist hover:text-starlight transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Filters
          {activeFilterCount > 0 && (
            <span className="bg-aurora text-void text-xs px-1.5 py-0.5 rounded-full font-mono font-bold">
              {activeFilterCount}
            </span>
          )}
        </button>
        <span className="text-fog text-xs font-mono">
          {filtered.length} of {MEMORIES.length} memories shown
        </span>
      </div>

      {showFilters && (
        <div className="bg-nebula/50 border border-stardust/30 rounded-xl p-6 mb-8">
          <FilterGroup
            title="Era"
            items={ERAS}
            activeId={activeEra}
            onSelect={handleFilter}
            paramKey="era"
          />
          <FilterGroup
            title="Emotion"
            items={EMOTIONS}
            activeId={activeEmotion}
            onSelect={handleFilter}
            paramKey="emotion"
          />
          <FilterGroup
            title="Life Event"
            items={LIFE_EVENTS}
            activeId={activeEvent}
            onSelect={handleFilter}
            paramKey="event"
          />
          <FilterGroup
            title="Region"
            items={REGIONS}
            activeId={activeRegion}
            onSelect={handleFilter}
            paramKey="region"
          />
          {activeFilterCount > 0 && (
            <button
              onClick={() => setSearchParams({})}
              className="text-xs text-fog hover:text-mist font-mono transition-colors mt-2"
            >
              ✕ Clear all filters
            </button>
          )}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-24">
          <div className="text-4xl mb-4 opacity-30">◈</div>
          <p className="text-mist font-cinzel text-lg mb-2">No memories found</p>
          <p className="text-fog text-sm">Try adjusting your filters or search terms</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(memory => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreGrid;
