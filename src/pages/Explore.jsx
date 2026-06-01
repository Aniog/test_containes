import { useState, useEffect, useCallback } from 'react'
import FilterBar from '../components/explore/FilterBar'
import MemoryCard from '../components/explore/MemoryCard'
import { fetchMemories } from '../api/memories'

const PAGE_SIZE = 12

export default function Explore() {
  const [memories, setMemories] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(0)
  const [filters, setFilters] = useState({ era: '', continent: '', emotion: '', life_event: '', search: '' })
  const [showFilters, setShowFilters] = useState(false)

  const load = useCallback(async (f, p) => {
    setLoading(true)
    const { rows, total: t } = await fetchMemories({
      era: f.era || undefined,
      continent: f.continent || undefined,
      emotion: f.emotion || undefined,
      life_event: f.life_event || undefined,
      search: f.search || undefined,
      limit: PAGE_SIZE,
      offset: p * PAGE_SIZE,
    })
    setMemories(rows)
    setTotal(t)
    setLoading(false)
  }, [])

  useEffect(() => {
    load(filters, page)
  }, [filters, page, load])

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
    setPage(0)
  }

  const totalPages = Math.ceil(total / PAGE_SIZE)
  const activeFilterCount = Object.values(filters).filter(Boolean).length

  return (
    <div className="min-h-screen bg-cosmos pt-20">
      {/* Page header */}
      <div className="border-b border-stardust bg-void/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="font-cinzel text-3xl md:text-4xl text-starlight mb-2">
                The Memory Archive
              </h1>
              <p className="text-moonlight text-sm">
                {total > 0 ? (
                  <span className="font-mono">{total.toLocaleString()} memories preserved</span>
                ) : (
                  <span className="text-twilight">Loading archive...</span>
                )}
              </p>
            </div>
            <button
              onClick={() => setShowFilters(v => !v)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-stardust text-moonlight hover:border-aurora/50 hover:text-starlight text-sm font-mono transition-all duration-200 flex-shrink-0"
            >
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-aurora text-white text-xs flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
              <span className="text-xs">{showFilters ? '▲' : '▼'}</span>
            </button>
          </div>

          {/* Filter panel */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-stardust">
              <FilterBar filters={filters} onChange={handleFilterChange} />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <div key={i} className="rounded-xl border border-stardust bg-void p-5 animate-pulse">
                <div className="h-3 bg-stardust rounded mb-3 w-1/3" />
                <div className="h-4 bg-stardust rounded mb-2 w-4/5" />
                <div className="h-3 bg-stardust rounded mb-2 w-full" />
                <div className="h-3 bg-stardust rounded mb-2 w-5/6" />
                <div className="h-3 bg-stardust rounded w-3/4" />
              </div>
            ))}
          </div>
        ) : memories.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">✦</div>
            <h3 className="font-cinzel text-xl text-starlight mb-2">No memories found</h3>
            <p className="text-moonlight text-sm">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {memories.map(memory => (
                <MemoryCard key={memory.id} memory={memory} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-12">
                <button
                  onClick={() => setPage(p => Math.max(0, p - 1))}
                  disabled={page === 0}
                  className="px-4 py-2 rounded-full border border-stardust text-moonlight hover:border-aurora/50 hover:text-starlight text-sm font-mono transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← Prev
                </button>
                <span className="text-xs text-twilight font-mono">
                  {page + 1} / {totalPages}
                </span>
                <button
                  onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                  disabled={page >= totalPages - 1}
                  className="px-4 py-2 rounded-full border border-stardust text-moonlight hover:border-aurora/50 hover:text-starlight text-sm font-mono transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
