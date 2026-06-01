import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Grid, List, X } from 'lucide-react'
import { memories, getEmotionById, getEraById } from '../data/memories'
import FilterBar from '../components/explore/FilterBar'
import MemoryCard from '../components/explore/MemoryCard'
import MemoryDetail from '../components/explore/MemoryDetail'

const INITIAL_FILTERS = {
  era: null,
  emotion: null,
  lifeEvent: null,
  region: null,
}

export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState(() => {
    const initial = { ...INITIAL_FILTERS }
    if (searchParams.get('era')) initial.era = searchParams.get('era')
    if (searchParams.get('emotion')) initial.emotion = searchParams.get('emotion')
    if (searchParams.get('lifeEvent')) initial.lifeEvent = searchParams.get('lifeEvent')
    if (searchParams.get('region')) initial.region = searchParams.get('region')
    return initial
  })
  const [search, setSearch] = useState('')
  const [selectedMemory, setSelectedMemory] = useState(null)
  const [showFilters, setShowFilters] = useState(false)

  // Handle direct memory link
  useEffect(() => {
    const memId = searchParams.get('memory')
    if (memId) {
      const mem = memories.find(m => m.id === memId)
      if (mem) setSelectedMemory(mem)
    }
  }, [])

  const filtered = useMemo(() => {
    return memories.filter(mem => {
      if (filters.era && mem.era !== filters.era) return false
      if (filters.emotion && mem.emotion !== filters.emotion) return false
      if (filters.lifeEvent && mem.lifeEvent !== filters.lifeEvent) return false
      if (filters.region && mem.region !== filters.region) return false
      if (search) {
        const q = search.toLowerCase()
        return (
          mem.title.toLowerCase().includes(q) ||
          mem.excerpt.toLowerCase().includes(q) ||
          mem.location.toLowerCase().includes(q) ||
          mem.contributor?.toLowerCase().includes(q) ||
          mem.tags?.some(t => t.toLowerCase().includes(q))
        )
      }
      return true
    })
  }, [filters, search])

  const activeFilterCount = Object.values(filters).filter(Boolean).length

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters)
    const params = {}
    Object.entries(newFilters).forEach(([k, v]) => { if (v) params[k] = v })
    setSearchParams(params)
  }

  const activeFilterLabels = useMemo(() => {
    const labels = []
    if (filters.era) {
      const era = memories.find(m => m.era === filters.era)
      labels.push({ key: 'era', label: filters.era })
    }
    if (filters.emotion) {
      const em = getEmotionById(filters.emotion)
      labels.push({ key: 'emotion', label: em?.label || filters.emotion })
    }
    if (filters.lifeEvent) labels.push({ key: 'lifeEvent', label: filters.lifeEvent })
    if (filters.region) labels.push({ key: 'region', label: filters.region })
    return labels
  }, [filters])

  return (
    <div className="min-h-screen pt-20 pb-16 star-bg">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="mb-2">
          <p className="text-xs font-mono text-nebula-400 tracking-widest uppercase mb-3">
            The Archive
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
            Explore Memories
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Searching across{' '}
            <span className="text-nebula-300 font-mono">4,782,341</span> preserved memories
            from every era, region, and emotion of human experience.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search memories, places, people, emotions..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-cosmos/80 border border-nebula-900/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-nebula-500/50 focus:ring-1 focus:ring-nebula-500/30 text-sm backdrop-blur-sm transition-all duration-200"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Active filters */}
        {activeFilterLabels.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {activeFilterLabels.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => handleFiltersChange({ ...filters, [key]: null })}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-nebula-900/50 border border-nebula-500/30 text-nebula-300 text-xs font-medium hover:bg-nebula-900/70 transition-colors"
              >
                {label}
                <X className="w-3 h-3" />
              </button>
            ))}
            <button
              onClick={() => handleFiltersChange(INITIAL_FILTERS)}
              className="px-3 py-1.5 rounded-full text-slate-500 hover:text-slate-300 text-xs transition-colors"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24">
              <FilterBar filters={filters} onChange={handleFiltersChange} />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Results header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-400 text-sm">
                <span className="text-white font-semibold">{filtered.length}</span>{' '}
                {filtered.length === 1 ? 'memory' : 'memories'} found
                {(activeFilterCount > 0 || search) && ' (filtered)'}
              </p>

              {/* Mobile filter toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-3 py-2 rounded-lg bg-cosmos/80 border border-nebula-900/50 text-slate-300 text-sm"
              >
                Filters
                {activeFilterCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-nebula-600 text-white text-xs flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile filters */}
            {showFilters && (
              <div className="lg:hidden mb-6">
                <FilterBar filters={filters} onChange={handleFiltersChange} />
              </div>
            )}

            {/* Memory grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-4xl mb-4">◎</div>
                <h3 className="font-display text-xl text-white mb-2">No memories found</h3>
                <p className="text-slate-400 text-sm">
                  Try adjusting your filters or search terms.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map(memory => (
                  <MemoryCard
                    key={memory.id}
                    memory={memory}
                    onClick={setSelectedMemory}
                  />
                ))}
              </div>
            )}

            {/* Load more placeholder */}
            {filtered.length > 0 && (
              <div className="mt-12 text-center">
                <p className="text-slate-500 text-sm font-mono mb-4">
                  Showing {filtered.length} of 4,782,341 memories
                </p>
                <button className="px-8 py-3 rounded-xl border border-nebula-500/30 text-nebula-300 hover:border-nebula-400/50 hover:text-nebula-200 text-sm font-medium transition-all duration-200">
                  Load More Memories
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Memory detail modal */}
      {selectedMemory && (
        <MemoryDetail
          memory={selectedMemory}
          onClose={() => setSelectedMemory(null)}
          onNavigate={(mem) => setSelectedMemory(mem)}
        />
      )}
    </div>
  )
}
