import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Search, SlidersHorizontal, X, Loader2 } from 'lucide-react';
import MemoryCard from './MemoryCard';
import MemoryModal from './MemoryModal';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ERAS = ['Ancient', 'Medieval', 'Industrial', 'Modern', 'Digital', 'Near Future'];
const EMOTIONS = ['Joy', 'Grief', 'Wonder', 'Love', 'Fear', 'Nostalgia', 'Hope', 'Longing', 'Pride', 'Serenity'];
const LIFE_EVENTS = ['Birth', 'Childhood', 'First Love', 'Marriage', 'Loss', 'Achievement', 'Migration', 'Discovery', 'Farewell', 'Reunion'];

const PAGE_SIZE = 12;

export default function MemoryExplorer() {
  const [searchParams] = useSearchParams();
  const [memories, setMemories] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    era: searchParams.get('era') || '',
    emotion: searchParams.get('emotion') || '',
    life_event: searchParams.get('life_event') || '',
    search: '',
  });

  const fetchMemories = useCallback(async (currentFilters, currentPage) => {
    setLoading(true);
    console.log('Fetching memories with filters:', currentFilters, 'page:', currentPage);
    try {
      let query = client.from('Memories').select('*').order('view_count', { ascending: false });

      if (currentFilters.era) query = query.eq('era', currentFilters.era);
      if (currentFilters.emotion) query = query.eq('emotion', currentFilters.emotion);
      if (currentFilters.life_event) query = query.eq('life_event', currentFilters.life_event);

      query = query.range(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE - 1);

      const { data: response, error } = await query;
      if (error) throw error;

      const list = response?.data?.list ?? [];
      const totalCount = response?.data?.total ?? 0;
      console.log('Fetched memories:', list.length, 'total:', totalCount);
      setMemories(list);
      setTotal(totalCount);
    } catch (err) {
      console.error('Error fetching memories:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMemories(filters, page);
  }, [filters, page, fetchMemories]);

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    setPage(0);
  };

  const clearFilters = () => {
    setFilters({ era: '', emotion: '', life_event: '', search: '' });
    setPage(0);
  };

  const activeFilterCount = [filters.era, filters.emotion, filters.life_event].filter(Boolean).length;
  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <div className="min-h-screen bg-[#050810] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-3">
            The Memory Archive
          </h1>
          <p className="text-slate-400 text-lg">
            {total > 0 ? (
              <>{total.toLocaleString()} memories preserved from across human history</>
            ) : (
              'Exploring the archive...'
            )}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search memories..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#080d1a] border border-white/10 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#e8c97a]/40 text-sm"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg border text-sm font-medium transition-all duration-200 ${
              showFilters || activeFilterCount > 0
                ? 'border-[#e8c97a]/50 bg-[#e8c97a]/10 text-[#e8c97a]'
                : 'border-white/10 bg-[#080d1a] text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#e8c97a] text-[#050810] text-xs font-bold flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-3 rounded-lg border border-white/10 bg-[#080d1a] text-slate-500 hover:text-white text-sm transition-colors"
            >
              <X className="w-4 h-4" />
              Clear
            </button>
          )}
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mb-8 p-6 bg-[#080d1a] border border-white/10 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FilterGroup
                label="Era"
                options={ERAS}
                value={filters.era}
                onChange={(v) => handleFilterChange('era', v)}
                colorClass="text-[#7dd3fc]"
              />
              <FilterGroup
                label="Emotion"
                options={EMOTIONS}
                value={filters.emotion}
                onChange={(v) => handleFilterChange('emotion', v)}
                colorClass="text-[#c084fc]"
              />
              <FilterGroup
                label="Life Event"
                options={LIFE_EVENTS}
                value={filters.life_event}
                onChange={(v) => handleFilterChange('life_event', v)}
                colorClass="text-[#fb923c]"
              />
            </div>
          </div>
        )}

        {/* Active filter chips */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {filters.era && (
              <FilterChip label={filters.era} color="cyan" onRemove={() => handleFilterChange('era', '')} />
            )}
            {filters.emotion && (
              <FilterChip label={filters.emotion} color="violet" onRemove={() => handleFilterChange('emotion', '')} />
            )}
            {filters.life_event && (
              <FilterChip label={filters.life_event} color="orange" onRemove={() => handleFilterChange('life_event', '')} />
            )}
          </div>
        )}

        {/* Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-32">
            <Loader2 className="w-8 h-8 text-[#e8c97a] animate-spin" />
          </div>
        ) : memories.length === 0 ? (
          <div className="text-center py-32">
            <div className="text-5xl mb-4">✦</div>
            <p className="text-slate-500 text-lg">No memories found for these filters.</p>
            <button onClick={clearFilters} className="mt-4 text-[#e8c97a] text-sm hover:underline">
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memories.map((memory) => (
              <MemoryCard key={memory.id} memory={memory} onClick={setSelectedMemory} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="px-5 py-2.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-sm transition-colors"
            >
              Previous
            </button>
            <span className="text-slate-500 text-sm">
              Page {page + 1} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="px-5 py-2.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-sm transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Memory Modal */}
      {selectedMemory && (
        <MemoryModal memory={selectedMemory} onClose={() => setSelectedMemory(null)} />
      )}
    </div>
  );
}

function FilterGroup({ label, options, value, onChange, colorClass }) {
  return (
    <div>
      <div className={`text-xs font-semibold uppercase tracking-widest mb-3 ${colorClass}`}>{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(value === opt ? '' : opt)}
            className={`px-3 py-1.5 rounded-full text-xs border transition-all duration-150 ${
              value === opt
                ? `${colorClass} border-current bg-current/10`
                : 'text-slate-500 border-white/10 hover:text-slate-300 hover:border-white/20'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function FilterChip({ label, color, onRemove }) {
  const colorMap = {
    cyan: 'text-[#7dd3fc] bg-[#7dd3fc]/10 border-[#7dd3fc]/30',
    violet: 'text-[#c084fc] bg-[#c084fc]/10 border-[#c084fc]/30',
    orange: 'text-[#fb923c] bg-[#fb923c]/10 border-[#fb923c]/30',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs border font-medium ${colorMap[color]}`}>
      {label}
      <button onClick={onRemove} className="hover:opacity-70">
        <X className="w-3 h-3" />
      </button>
    </span>
  );
}
