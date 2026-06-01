import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { MEMORIES } from '../data/memories';
import MemoryCard from '../components/explore/MemoryCard';
import MemoryModal from '../components/explore/MemoryModal';
import FilterSidebar from '../components/explore/FilterSidebar';

const EMPTY_FILTERS = { era: '', emotion: '', lifeEvent: '', region: '', search: '' };

export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [filters, setFilters] = useState(() => ({
    era: searchParams.get('era') || '',
    emotion: searchParams.get('emotion') || '',
    lifeEvent: searchParams.get('lifeEvent') || '',
    region: searchParams.get('region') || '',
    search: searchParams.get('search') || '',
  }));

  // Sync filters to URL
  useEffect(() => {
    const params = {};
    Object.entries(filters).forEach(([k, v]) => { if (v) params[k] = v; });
    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  const filtered = useMemo(() => {
    return MEMORIES.filter((m) => {
      if (filters.era && m.era !== filters.era) return false;
      if (filters.emotion && m.emotion !== filters.emotion) return false;
      if (filters.lifeEvent && m.lifeEvent !== filters.lifeEvent) return false;
      if (filters.region && m.region !== filters.region) return false;
      if (filters.search) {
        const q = filters.search.toLowerCase();
        return (
          m.title.toLowerCase().includes(q) ||
          m.excerpt.toLowerCase().includes(q) ||
          m.author.toLowerCase().includes(q) ||
          m.location.toLowerCase().includes(q) ||
          m.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [filters]);

  const hasFilters = Object.values(filters).some(Boolean);

  return (
    <div className="min-h-screen bg-space-black pt-16">
      {/* Page header */}
      <div className="bg-space-navy border-b border-slate-800 py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="font-inter text-nebula-blue text-sm uppercase tracking-widest mb-2">
            The Archive
          </p>
          <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Memories
          </h1>
          <p className="font-inter text-slate-400 mb-6 max-w-xl">
            Search through 4.7 million preserved memories from across human history.
          </p>

          {/* Search bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search memories, people, places, events..."
              value={filters.search}
              onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
              className="w-full pl-11 pr-4 py-3 bg-space-midnight border border-slate-700 rounded-full text-white placeholder-slate-500 font-inter text-sm focus:outline-none focus:border-nebula-blue/60 focus:shadow-[0_0_0_3px_rgba(79,142,247,0.1)] transition-all"
            />
            {filters.search && (
              <button
                onClick={() => setFilters((f) => ({ ...f, search: '' }))}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex gap-8">
        {/* Sidebar */}
        <FilterSidebar
          filters={filters}
          onChange={setFilters}
          onClear={() => setFilters(EMPTY_FILTERS)}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-full text-slate-400 hover:text-white hover:border-slate-500 transition-colors font-inter text-sm"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasFilters && (
                  <span className="w-2 h-2 rounded-full bg-nebula-blue" />
                )}
              </button>
              <span className="font-inter text-sm text-slate-500">
                {filtered.length} {filtered.length === 1 ? 'memory' : 'memories'} found
              </span>
            </div>

            {hasFilters && (
              <button
                onClick={() => setFilters(EMPTY_FILTERS)}
                className="flex items-center gap-1.5 text-xs text-nebula-blue hover:text-blue-300 font-inter transition-colors"
              >
                <X className="w-3 h-3" />
                Clear filters
              </button>
            )}
          </div>

          {/* Active filter pills */}
          {hasFilters && (
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(filters).map(([key, val]) => {
                if (!val) return null;
                return (
                  <span
                    key={key}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-nebula-blue/15 border border-nebula-blue/30 text-nebula-blue text-xs font-inter"
                  >
                    {key}: {val}
                    <button onClick={() => setFilters((f) => ({ ...f, [key]: '' }))}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                );
              })}
            </div>
          )}

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((memory) => (
                <MemoryCard key={memory.id} memory={memory} onClick={setSelectedMemory} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="font-cinzel text-xl text-white mb-2">No memories found</h3>
              <p className="font-inter text-slate-500 mb-6">
                Try adjusting your filters or search terms.
              </p>
              <button
                onClick={() => setFilters(EMPTY_FILTERS)}
                className="px-6 py-2 border border-slate-700 text-slate-400 rounded-full hover:border-nebula-blue hover:text-nebula-blue transition-colors font-inter text-sm"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedMemory && (
        <MemoryModal memory={selectedMemory} onClose={() => setSelectedMemory(null)} />
      )}
    </div>
  );
}
