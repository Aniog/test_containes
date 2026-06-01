import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ALL_MEMORIES } from '../../data/memories';
import ExploreFilters from './ExploreFilters';
import MemoryCard from './MemoryCard';

const SORT_OPTIONS = [
  { value: 'views', label: 'Most Viewed' },
  { value: 'recent', label: 'Recently Archived' },
  { value: 'oldest', label: 'Oldest Memory' },
  { value: 'newest', label: 'Newest Memory' },
];

const PAGE_SIZE = 12;

export default function ExploreGrid() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('views');
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    era: searchParams.get('era') || null,
    emotion: searchParams.get('emotion') || null,
    event: searchParams.get('event') || null,
    region: searchParams.get('region') || null,
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const params = {};
    if (filters.era) params.era = filters.era;
    if (filters.emotion) params.emotion = filters.emotion;
    if (filters.event) params.event = filters.event;
    if (filters.region) params.region = filters.region;
    setSearchParams(params);
    setPage(1);
  }, [filters, setSearchParams]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filtered = useMemo(() => {
    let result = ALL_MEMORIES;

    if (filters.era) result = result.filter((m) => m.era === filters.era);
    if (filters.emotion) result = result.filter((m) => m.emotion === filters.emotion);
    if (filters.event) result = result.filter((m) => m.lifeEvent === filters.event);
    if (filters.region) result = result.filter((m) => m.region === filters.region);

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (m) =>
          m.excerpt.toLowerCase().includes(q) ||
          m.narrator.toLowerCase().includes(q) ||
          m.regionLabel.toLowerCase().includes(q) ||
          m.eraLabel.toLowerCase().includes(q)
      );
    }

    switch (sort) {
      case 'views': return [...result].sort((a, b) => b.views - a.views);
      case 'recent': return [...result].sort((a, b) => new Date(b.archived) - new Date(a.archived));
      case 'oldest': return [...result].sort((a, b) => a.year - b.year);
      case 'newest': return [...result].sort((a, b) => b.year - a.year);
      default: return result;
    }
  }, [filters, search, sort]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Page header */}
      <div className="mb-10">
        <p className="text-xs font-mono tracking-widest text-aurora-light uppercase mb-3">◈ Memory Archive</p>
        <h1 className="font-cinzel text-3xl md:text-4xl font-light text-starlight tracking-wide mb-3">
          Explore Memories
        </h1>
        <p className="text-mist">
          {filtered.length.toLocaleString()} memories found
          {activeFilterCount > 0 && ` · ${activeFilterCount} filter${activeFilterCount > 1 ? 's' : ''} active`}
        </p>
      </div>

      {/* Search + sort bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ghost text-sm">◎</span>
          <input
            type="text"
            placeholder="Search memories, narrators, places…"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full bg-nebula border border-stardust text-starlight placeholder:text-ghost rounded-xl pl-10 pr-4 py-3 focus:border-aurora/60 focus:outline-none focus:ring-1 focus:ring-aurora/30 text-sm"
          />
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-nebula border border-stardust text-starlight rounded-xl px-4 py-3 focus:border-aurora/60 focus:outline-none text-sm min-w-40"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium transition-all duration-200 lg:hidden ${
            showFilters || activeFilterCount > 0
              ? 'bg-aurora/20 text-aurora-light border-aurora/50'
              : 'bg-nebula text-mist border-stardust hover:border-stardust/80'
          }`}
        >
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-aurora text-white text-xs flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      <div className="flex gap-8">
        {/* Sidebar filters — desktop always visible, mobile toggle */}
        <div className={`w-72 flex-shrink-0 ${showFilters ? 'block' : 'hidden'} lg:block`}>
          <ExploreFilters filters={filters} onFilterChange={handleFilterChange} />
        </div>

        {/* Memory grid */}
        <div className="flex-1 min-w-0">
          {paginated.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-4xl mb-4">◌</p>
              <p className="font-cinzel text-xl text-mist mb-2">No memories found</p>
              <p className="text-ghost text-sm">Try adjusting your filters or search terms</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
                {paginated.map((memory) => (
                  <MemoryCard key={memory.id} memory={memory} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-4 py-2 rounded-xl border border-stardust text-mist hover:border-aurora/50 hover:text-aurora-light disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm"
                  >
                    ← Prev
                  </button>
                  <div className="flex gap-1">
                    {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                      const p = i + 1;
                      return (
                        <button
                          key={p}
                          onClick={() => setPage(p)}
                          className={`w-9 h-9 rounded-xl text-sm transition-all ${
                            page === p
                              ? 'bg-aurora text-white'
                              : 'border border-stardust text-mist hover:border-aurora/50 hover:text-aurora-light'
                          }`}
                        >
                          {p}
                        </button>
                      );
                    })}
                    {totalPages > 7 && <span className="text-ghost px-2 self-center">…</span>}
                  </div>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-4 py-2 rounded-xl border border-stardust text-mist hover:border-aurora/50 hover:text-aurora-light disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm"
                  >
                    Next →
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
