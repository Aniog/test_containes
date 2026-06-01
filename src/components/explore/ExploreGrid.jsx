import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { MEMORIES, ERAS, EMOTIONS, LIFE_EVENTS, REGIONS, getEmotionColor, getEraColor } from '../../data/memories';
import MemoryCard from '../memory/MemoryCard';

export default function ExploreGrid() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const activeEra = searchParams.get('era') || '';
  const activeEmotion = searchParams.get('emotion') || '';
  const activeLifeEvent = searchParams.get('lifeEvent') || '';
  const activeRegion = searchParams.get('region') || '';

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (next.get(key) === value) next.delete(key);
    else next.set(key, value);
    setSearchParams(next);
  };

  const clearFilters = () => setSearchParams({});

  const hasFilters = activeEra || activeEmotion || activeLifeEvent || activeRegion || search;

  const filtered = useMemo(() => {
    return MEMORIES.filter(m => {
      if (activeEra && m.era !== activeEra) return false;
      if (activeEmotion && m.emotion !== activeEmotion) return false;
      if (activeLifeEvent && m.lifeEvent !== activeLifeEvent) return false;
      if (activeRegion && m.region !== activeRegion) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          m.title.toLowerCase().includes(q) ||
          m.excerpt.toLowerCase().includes(q) ||
          m.location.toLowerCase().includes(q) ||
          m.contributor.toLowerCase().includes(q) ||
          m.tags.some(t => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [activeEra, activeEmotion, activeLifeEvent, activeRegion, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Search bar */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search memories, locations, contributors..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-space-800/80 border border-slate-700/50 text-slate-200 placeholder-slate-600 font-mono text-sm focus:outline-none focus:border-nebula-500/60 transition-colors"
          />
        </div>
        <button
          onClick={() => setFiltersOpen(v => !v)}
          className={`flex items-center gap-2 px-4 py-3 rounded-xl border font-mono text-sm transition-all duration-200 ${
            filtersOpen
              ? 'bg-nebula-600/20 border-nebula-500/60 text-nebula-400'
              : 'bg-space-800/80 border-slate-700/50 text-slate-400 hover:border-slate-600'
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="hidden sm:inline">Filters</span>
          {hasFilters && (
            <span className="w-2 h-2 rounded-full bg-nebula-500" />
          )}
        </button>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1.5 px-4 py-3 rounded-xl border border-slate-700/50 bg-space-800/80 text-slate-500 hover:text-slate-300 font-mono text-sm transition-colors"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Clear</span>
          </button>
        )}
      </div>

      {/* Filter panels */}
      {filtersOpen && (
        <div className="mb-8 p-6 rounded-2xl bg-space-800/60 border border-slate-700/40 backdrop-blur-sm space-y-6">
          {/* Era */}
          <div>
            <p className="font-mono text-xs text-gold-400 uppercase tracking-widest mb-3">Era</p>
            <div className="flex flex-wrap gap-2">
              {ERAS.map(era => (
                <button
                  key={era.id}
                  onClick={() => setFilter('era', era.id)}
                  className="px-3 py-1.5 rounded-lg border font-mono text-xs transition-all duration-200"
                  style={
                    activeEra === era.id
                      ? { color: era.color, borderColor: `${era.color}60`, backgroundColor: `${era.color}15` }
                      : { color: '#64748b', borderColor: '#334155', backgroundColor: 'transparent' }
                  }
                >
                  {era.label}
                </button>
              ))}
            </div>
          </div>

          {/* Emotion */}
          <div>
            <p className="font-mono text-xs text-nebula-400 uppercase tracking-widest mb-3">Emotion</p>
            <div className="flex flex-wrap gap-2">
              {EMOTIONS.map(emotion => (
                <button
                  key={emotion.id}
                  onClick={() => setFilter('emotion', emotion.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono text-xs transition-all duration-200"
                  style={
                    activeEmotion === emotion.id
                      ? { color: emotion.color, borderColor: `${emotion.color}60`, backgroundColor: `${emotion.color}15` }
                      : { color: '#64748b', borderColor: '#334155', backgroundColor: 'transparent' }
                  }
                >
                  <span>{emotion.icon}</span>
                  {emotion.label}
                </button>
              ))}
            </div>
          </div>

          {/* Life Event */}
          <div>
            <p className="font-mono text-xs text-star-400 uppercase tracking-widest mb-3">Life Event</p>
            <div className="flex flex-wrap gap-2">
              {LIFE_EVENTS.map(event => (
                <button
                  key={event.id}
                  onClick={() => setFilter('lifeEvent', event.id)}
                  className={`px-3 py-1.5 rounded-lg border font-mono text-xs transition-all duration-200 ${
                    activeLifeEvent === event.id
                      ? 'text-star-400 border-star-500/60 bg-star-500/10'
                      : 'text-slate-500 border-slate-700 hover:border-slate-600 hover:text-slate-400'
                  }`}
                >
                  {event.label}
                </button>
              ))}
            </div>
          </div>

          {/* Region */}
          <div>
            <p className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-3">Region</p>
            <div className="flex flex-wrap gap-2">
              {REGIONS.map(region => (
                <button
                  key={region}
                  onClick={() => setFilter('region', region)}
                  className={`px-3 py-1.5 rounded-lg border font-mono text-xs transition-all duration-200 ${
                    activeRegion === region
                      ? 'text-slate-200 border-slate-500 bg-slate-700/40'
                      : 'text-slate-500 border-slate-700 hover:border-slate-600 hover:text-slate-400'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Active filter chips */}
      {hasFilters && !filtersOpen && (
        <div className="flex flex-wrap gap-2 mb-6">
          {activeEra && (
            <FilterChip
              label={ERAS.find(e => e.id === activeEra)?.label}
              color={getEraColor(activeEra)}
              onRemove={() => setFilter('era', activeEra)}
            />
          )}
          {activeEmotion && (
            <FilterChip
              label={EMOTIONS.find(e => e.id === activeEmotion)?.label}
              color={getEmotionColor(activeEmotion)}
              onRemove={() => setFilter('emotion', activeEmotion)}
            />
          )}
          {activeLifeEvent && (
            <FilterChip
              label={LIFE_EVENTS.find(e => e.id === activeLifeEvent)?.label}
              color="#38bdf8"
              onRemove={() => setFilter('lifeEvent', activeLifeEvent)}
            />
          )}
          {activeRegion && (
            <FilterChip
              label={activeRegion}
              color="#94a3b8"
              onRemove={() => setFilter('region', activeRegion)}
            />
          )}
        </div>
      )}

      {/* Results count */}
      <div className="flex items-center justify-between mb-6">
        <p className="font-mono text-xs text-slate-500 uppercase tracking-widest">
          {filtered.length} {filtered.length === 1 ? 'memory' : 'memories'} found
        </p>
        <p className="font-mono text-xs text-slate-600">
          Showing sample from 847M+ archive
        </p>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((memory, i) => (
            <MemoryCard key={memory.id} memory={memory} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <div className="text-4xl mb-4 opacity-30">◎</div>
          <p className="font-cinzel text-xl text-slate-500 mb-2">No memories found</p>
          <p className="text-slate-600 text-sm">Try adjusting your filters or search terms</p>
          <button
            onClick={clearFilters}
            className="mt-6 px-6 py-2 rounded-lg border border-nebula-600/40 text-nebula-400 font-mono text-sm hover:bg-nebula-600/10 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}

function FilterChip({ label, color, onRemove }) {
  return (
    <span
      className="flex items-center gap-1.5 px-3 py-1 rounded-full border font-mono text-xs"
      style={{ color, borderColor: `${color}50`, backgroundColor: `${color}10` }}
    >
      {label}
      <button onClick={onRemove} className="hover:opacity-70 transition-opacity">
        <X className="w-3 h-3" />
      </button>
    </span>
  );
}
