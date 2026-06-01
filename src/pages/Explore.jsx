import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilteredMemories } from '../data/memories';
import ExploreFilters from '../components/explore/ExploreFilters';
import MemoryGrid from '../components/explore/MemoryGrid';

export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    era: searchParams.get('era') || '',
    emotion: searchParams.get('emotion') || '',
    lifeEvent: searchParams.get('lifeEvent') || '',
    region: searchParams.get('region') || '',
    search: searchParams.get('search') || '',
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const memories = getFilteredMemories(filters);

  useEffect(() => {
    const params = {};
    Object.entries(filters).forEach(([k, v]) => { if (v) params[k] = v; });
    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-space-black pt-20">
      {/* Page header */}
      <div className="border-b border-white/10 bg-space-navy/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-space text-2xl md:text-3xl font-bold text-star-white">
                Memory Archive
              </h1>
              <p className="text-star-dim text-sm mt-1 font-mono">
                {memories.length.toLocaleString()} memories · Humanity's complete story
              </p>
            </div>
            {/* Mobile filter toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden border border-white/20 text-star-white px-4 py-2 rounded-lg text-sm font-space hover:bg-white/5 transition-colors"
            >
              {sidebarOpen ? 'Hide Filters' : 'Filters'}
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar — desktop always visible, mobile toggleable */}
          <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
            <ExploreFilters
              filters={filters}
              onChange={handleFiltersChange}
              resultCount={memories.length}
            />
          </div>

          {/* Grid */}
          <MemoryGrid memories={memories} />
        </div>
      </div>
    </div>
  );
}
