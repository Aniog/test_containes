import { useState, useEffect, useCallback } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { fetchMemories } from '../../api/memories';
import MemoryCard from './MemoryCard';

const ERAS = ['1900s', '1920s', '1940s', '1960s', '1980s', '2000s', '2010s', '2020s', '2030s', '2040s', '2050s'];
const EMOTIONS = ['joy', 'grief', 'wonder', 'love', 'fear', 'nostalgia', 'hope', 'longing', 'pride', 'peace'];
const LIFE_EVENTS = ['birth', 'childhood', 'first love', 'marriage', 'loss', 'migration', 'discovery', 'reunion', 'farewell', 'achievement', 'ordinary moment'];
const REGIONS = ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania', 'Middle East', 'Antarctica'];

function FilterPill({ label, active, onClick, color }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 rounded-full text-xs font-medium capitalize transition-all duration-150 border"
      style={
        active
          ? { background: color || 'rgba(74,158,255,0.2)', color: '#4a9eff', borderColor: 'rgba(74,158,255,0.4)' }
          : { background: 'rgba(255,255,255,0.04)', color: '#8899b4', borderColor: 'rgba(255,255,255,0.1)' }
      }
    >
      {label}
    </button>
  );
}

function FilterSection({ title, items, active, onToggle, color }) {
  return (
    <div className="mb-5">
      <h4 className="text-xs font-semibold uppercase tracking-widest mb-2.5" style={{ color: '#4a5568' }}>
        {title}
      </h4>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <FilterPill
            key={item}
            label={item}
            active={active === item}
            onClick={() => onToggle(active === item ? null : item)}
            color={color}
          />
        ))}
      </div>
    </div>
  );
}

export default function MemoryExplorer() {
  const [memories, setMemories] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ era: null, region: null, emotion: null, life_event: null });
  const [offset, setOffset] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const LIMIT = 12;

  const load = useCallback(async (newOffset = 0, reset = false) => {
    setLoading(true);
    try {
      const { rows, total: t } = await fetchMemories({
        ...filters,
        search: search || undefined,
        limit: LIMIT,
        offset: newOffset,
      });
      setMemories((prev) => (reset || newOffset === 0 ? rows : [...prev, ...rows]));
      setTotal(t);
      setOffset(newOffset);
    } catch (err) {
      console.error('Failed to load memories:', err);
    } finally {
      setLoading(false);
    }
  }, [filters, search]);

  useEffect(() => {
    const timer = setTimeout(() => load(0, true), 300);
    return () => clearTimeout(timer);
  }, [load]);

  const setFilter = (key, val) => setFilters((f) => ({ ...f, [key]: val }));

  const activeFilterCount = Object.values(filters).filter(Boolean).length + (search ? 1 : 0);

  const clearAll = () => {
    setFilters({ era: null, region: null, emotion: null, life_event: null });
    setSearch('');
  };

  return (
    <div className="min-h-screen" style={{ background: '#050810' }}>
      {/* Header */}
      <div
        className="border-b border-white/[0.06] py-12 px-4"
        style={{ background: 'linear-gradient(180deg, #080d1a 0%, #050810 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#4a9eff' }}>
            Memory Archive
          </p>
          <h1 className="font-cinzel text-3xl md:text-5xl font-bold mb-4" style={{ color: '#e8edf5' }}>
            Explore Memories
          </h1>
          <p className="text-[#8899b4] max-w-xl mb-8">
            Browse {(4700000).toLocaleString()}+ preserved memories from every era, region, and human experience.
          </p>

          {/* Search bar */}
          <div className="flex gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#4a5568' }} />
              <input
                type="text"
                placeholder="Search memories by title…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  background: '#0d1526',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#e8edf5',
                }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(74,158,255,0.4)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              />
            </div>
            <button
              onClick={() => setShowFilters((v) => !v)}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                background: showFilters ? 'rgba(74,158,255,0.15)' : '#0d1526',
                border: `1px solid ${showFilters ? 'rgba(74,158,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
                color: showFilters ? '#4a9eff' : '#8899b4',
              }}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilterCount > 0 && (
                <span
                  className="w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold"
                  style={{ background: '#4a9eff', color: '#fff' }}
                >
                  {activeFilterCount}
                </span>
              )}
            </button>
            {activeFilterCount > 0 && (
              <button
                onClick={clearAll}
                className="flex items-center gap-1.5 px-3 py-3 rounded-xl text-sm transition-all duration-200"
                style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#ef4444' }}
              >
                <X className="w-4 h-4" />
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar filters */}
          {showFilters && (
            <aside
              className="w-64 flex-shrink-0 rounded-xl p-5 h-fit sticky top-6"
              style={{ background: '#0d1526', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <FilterSection
                title="Era"
                items={ERAS}
                active={filters.era}
                onToggle={(v) => setFilter('era', v)}
                color="rgba(167,139,250,0.2)"
              />
              <FilterSection
                title="Emotion"
                items={EMOTIONS}
                active={filters.emotion}
                onToggle={(v) => setFilter('emotion', v)}
                color="rgba(45,212,191,0.2)"
              />
              <FilterSection
                title="Life Event"
                items={LIFE_EVENTS}
                active={filters.life_event}
                onToggle={(v) => setFilter('life_event', v)}
                color="rgba(244,114,182,0.2)"
              />
              <FilterSection
                title="Region"
                items={REGIONS}
                active={filters.region}
                onToggle={(v) => setFilter('region', v)}
                color="rgba(74,158,255,0.2)"
              />
            </aside>
          )}

          {/* Main grid */}
          <div className="flex-1 min-w-0">
            {/* Results count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm" style={{ color: '#8899b4' }}>
                {loading ? 'Loading…' : `Showing ${memories.length} of ${total.toLocaleString()} memories`}
              </p>
            </div>

            {loading && memories.length === 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl h-56 animate-pulse"
                    style={{ background: '#0d1526' }}
                  />
                ))}
              </div>
            ) : memories.length === 0 ? (
              <div className="text-center py-24">
                <div className="text-5xl mb-4">✦</div>
                <p className="font-cinzel text-xl mb-2" style={{ color: '#e8edf5' }}>No memories found</p>
                <p className="text-sm" style={{ color: '#8899b4' }}>Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {memories.map((m, i) => (
                    <MemoryCard key={m.id} memory={m} index={i} />
                  ))}
                </div>

                {memories.length < total && (
                  <div className="text-center mt-10">
                    <button
                      onClick={() => load(offset + LIMIT)}
                      disabled={loading}
                      className="px-8 py-3 rounded-full text-sm font-medium transition-all duration-200"
                      style={{
                        background: 'rgba(74,158,255,0.1)',
                        border: '1px solid rgba(74,158,255,0.3)',
                        color: '#4a9eff',
                      }}
                    >
                      {loading ? 'Loading…' : 'Load More Memories'}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
