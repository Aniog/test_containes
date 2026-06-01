import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { MEMORIES, ERAS, EMOTIONS } from '@/data/memories';
import MemoryCard from '@/components/memory/MemoryCard';
import FilterPanel from './FilterPanel';
import MemoryModal from '@/components/memory/MemoryModal';

export default function MemoryExplorer() {
  const [searchParams] = useSearchParams();
  const initialMemoryId = searchParams.get('memory');

  const [filters, setFilters] = useState({ eras: [], emotions: [], lifeEvents: [], regions: [] });
  const [search, setSearch] = useState('');
  const [selectedMemory, setSelectedMemory] = useState(
    initialMemoryId ? MEMORIES.find((m) => m.id === initialMemoryId) || null : null
  );
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return MEMORIES.filter((m) => {
      if (filters.eras.length && !filters.eras.includes(m.era)) return false;
      if (filters.emotions.length && !filters.emotions.includes(m.emotion)) return false;
      if (filters.lifeEvents.length && !filters.lifeEvents.includes(m.lifeEvent)) return false;
      if (filters.regions.length && !filters.regions.includes(m.region)) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          m.title.toLowerCase().includes(q) ||
          m.excerpt.toLowerCase().includes(q) ||
          m.location.toLowerCase().includes(q) ||
          m.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [filters, search]);

  const activeFilterCount =
    (filters.eras?.length || 0) +
    (filters.emotions?.length || 0) +
    (filters.lifeEvents?.length || 0) +
    (filters.regions?.length || 0);

  return (
    <div className="min-h-screen bg-space-black pt-20">
      {/* Page header */}
      <div className="border-b border-slate-800 bg-space-navy/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
            Memory Archive
          </h1>
          <p className="font-sans text-slate-400 text-base">
            Explore {MEMORIES.length.toLocaleString()} preserved memories from across human history
          </p>

          {/* Search bar */}
          <div className="relative mt-6 max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, location, or keyword..."
              className="w-full bg-space-midnight border border-slate-700 focus:border-nebula-blue/60 rounded-xl pl-11 pr-4 py-3 text-sm font-sans text-white placeholder-slate-500 outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Mobile filter toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <span className="font-sans text-sm text-slate-400">
            {filtered.length} memories found
          </span>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 font-sans text-sm border border-slate-700 hover:border-nebula-blue/50 text-slate-300 px-4 py-2 rounded-lg transition-colors"
          >
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-nebula-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <div className={`w-72 flex-shrink-0 ${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="sticky top-24">
              <FilterPanel filters={filters} onChange={setFilters} />
            </div>
          </div>

          {/* Memory grid */}
          <div className="flex-1 min-w-0">
            <div className="hidden md:flex items-center justify-between mb-6">
              <span className="font-sans text-sm text-slate-400">
                {filtered.length} memories found
                {activeFilterCount > 0 && (
                  <span className="ml-2 text-nebula-blue">({activeFilterCount} filter{activeFilterCount > 1 ? 's' : ''} active)</span>
                )}
              </span>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <div className="text-4xl mb-4">◎</div>
                <h3 className="font-serif text-xl text-white mb-2">No memories found</h3>
                <p className="font-sans text-slate-500 text-sm">
                  Try adjusting your filters or search terms
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((memory) => (
                  <MemoryCard
                    key={memory.id}
                    memory={memory}
                    onClick={setSelectedMemory}
                    featured={memory.featured}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Memory detail modal */}
      {selectedMemory && (
        <MemoryModal
          memory={selectedMemory}
          onClose={() => setSelectedMemory(null)}
        />
      )}
    </div>
  );
}
