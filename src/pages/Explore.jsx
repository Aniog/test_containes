import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MEMORIES } from '../data/memories';
import MemoryCard from '../components/explore/MemoryCard';
import ExploreFilters from '../components/explore/ExploreFilters';
import MemoryDetail from '../components/explore/MemoryDetail';

const SORT_OPTIONS = [
  { value: 'views', label: 'Most Viewed' },
  { value: 'intensity', label: 'Most Intense' },
  { value: 'recent', label: 'Most Recent' },
  { value: 'oldest', label: 'Oldest First' },
];

const Explore = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('views');

  const [filters, setFilters] = useState({
    era: searchParams.get('era') || null,
    emotion: searchParams.get('emotion') || null,
    lifeEvent: searchParams.get('lifeEvent') || null,
    region: searchParams.get('region') || null,
  });

  useEffect(() => {
    const memoryId = searchParams.get('memory');
    if (memoryId) {
      const found = MEMORIES.find(m => m.id === memoryId);
      if (found) setSelectedMemory(found);
    }
  }, [searchParams]);

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    const params = {};
    Object.entries(newFilters).forEach(([k, v]) => { if (v) params[k] = v; });
    setSearchParams(params);
  };

  const handleClearFilters = () => {
    setFilters({ era: null, emotion: null, lifeEvent: null, region: null });
    setSearchParams({});
    setSearchQuery('');
  };

  const filteredMemories = useMemo(() => {
    let result = [...MEMORIES];

    if (filters.era) result = result.filter(m => m.era === filters.era);
    if (filters.emotion) result = result.filter(m => m.emotion === filters.emotion);
    if (filters.lifeEvent) result = result.filter(m => m.lifeEvent === filters.lifeEvent);
    if (filters.region) result = result.filter(m => m.region === filters.region);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(m =>
        m.title.toLowerCase().includes(q) ||
        m.excerpt.toLowerCase().includes(q) ||
        m.tags.some(t => t.toLowerCase().includes(q)) ||
        m.contributor.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case 'views': return result.sort((a, b) => b.views - a.views);
      case 'intensity': return result.sort((a, b) => b.intensity - a.intensity);
      case 'recent': return result.sort((a, b) => b.id.localeCompare(a.id));
      case 'oldest': return result.sort((a, b) => a.id.localeCompare(b.id));
      default: return result;
    }
  }, [filters, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#050810] pt-20">
      {/* Page header */}
      <div className="border-b border-slate-800/60 bg-[#080d1a]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <p className="text-xs text-cyan-400 uppercase tracking-widest mb-2">Memory Archive</p>
          <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Explore Memories
          </h1>

          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
            <div className="relative flex-1">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm">✦</span>
              <input
                type="text"
                placeholder="Search memories, contributors, tags..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#0d1530] border border-slate-700/60 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="px-4 py-2.5 rounded-xl bg-[#0d1530] border border-slate-700/60 text-slate-300 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <ExploreFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onClear={handleClearFilters}
            resultCount={filteredMemories.length}
          />

          {/* Memory grid */}
          <div className="flex-1 min-w-0">
            {filteredMemories.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-4xl mb-4 text-slate-700">◈</div>
                <p className="text-slate-500 text-lg mb-2">No memories found</p>
                <p className="text-slate-600 text-sm">Try adjusting your filters or search query</p>
                <button
                  onClick={handleClearFilters}
                  className="mt-6 px-6 py-2.5 rounded-full border border-slate-700 text-slate-400 text-sm hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs text-slate-600 mb-5">
                  Showing <span className="text-slate-400">{filteredMemories.length}</span> of{' '}
                  <span className="text-slate-400">{MEMORIES.length}</span> sample memories
                  <span className="text-slate-700"> · </span>
                  <span className="text-cyan-600">847M+ total in archive</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredMemories.map(memory => (
                    <MemoryCard
                      key={memory.id}
                      memory={memory}
                      onClick={setSelectedMemory}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Memory detail modal */}
      {selectedMemory && (
        <MemoryDetail
          memory={selectedMemory}
          onClose={() => setSelectedMemory(null)}
        />
      )}
    </div>
  );
};

export default Explore;
