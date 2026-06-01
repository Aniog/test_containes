import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { memories } from '@/data/memories';
import MemoryCard from '@/components/explorer/MemoryCard';
import ExplorerFilters from '@/components/explorer/ExplorerFilters';
import ExplorerSearch from '@/components/explorer/ExplorerSearch';
import { Database } from 'lucide-react';

export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    era: searchParams.get('era') || null,
    emotion: searchParams.get('emotion') || null,
    lifeEvent: searchParams.get('lifeEvent') || null,
    location: searchParams.get('location') || null,
  });

  useEffect(() => {
    const params = {};
    Object.entries(filters).forEach(([k, v]) => { if (v) params[k] = v; });
    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  const handleFilterChange = (key, value) => {
    setFilters(f => ({ ...f, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({ era: null, emotion: null, lifeEvent: null, location: null });
    setQuery('');
  };

  const filtered = useMemo(() => {
    return memories.filter(m => {
      if (filters.era && m.era !== filters.era) return false;
      if (filters.emotion && m.emotion !== filters.emotion) return false;
      if (filters.lifeEvent && m.lifeEvent !== filters.lifeEvent) return false;
      if (filters.location && m.location !== filters.location) return false;
      if (query) {
        const q = query.toLowerCase();
        return (
          m.title.toLowerCase().includes(q) ||
          m.excerpt.toLowerCase().includes(q) ||
          m.contributor.toLowerCase().includes(q) ||
          m.tags.some(t => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [filters, query]);

  return (
    <div className="min-h-screen bg-cosmos-950 pt-24 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Database className="w-5 h-5 text-nebula-400" />
          <p className="font-mono text-xs text-nebula-400 uppercase tracking-widest">
            The Archive
          </p>
        </div>
        <h1 className="font-cinzel text-4xl md:text-5xl text-text-primary font-bold mb-3">
          Explore Memories
        </h1>
        <p className="text-text-secondary max-w-xl">
          Browse humanity's collected memories. Filter by era, emotion, life event, or location to find stories that resonate with you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <ExplorerFilters
            filters={filters}
            onChange={handleFilterChange}
            onClear={handleClearFilters}
          />

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <ExplorerSearch
              query={query}
              onChange={setQuery}
              resultCount={filtered.length}
              total={memories.length}
            />

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cinzel text-xl text-text-muted mb-2">No memories found</p>
                <p className="text-text-muted text-sm">Try adjusting your filters or search query.</p>
                <button
                  onClick={handleClearFilters}
                  className="mt-6 border border-nebula-500/40 text-nebula-300 rounded-full px-6 py-2.5 text-sm font-medium hover:border-nebula-400 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map(memory => (
                  <MemoryCard key={memory.id} memory={memory} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
