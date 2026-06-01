import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Grid, List, X } from 'lucide-react'
import GlassPanel from '@/components/shared/GlassPanel'
import TimelineRisk from '@/components/shared/TimelineRisk'
import { artifacts, eras, dimensions, stability, riskLevels, statuses } from '@/data/artifacts'

const Archive = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedEra, setSelectedEra] = useState('')
  const [selectedDimension, setSelectedDimension] = useState('')
  const [selectedStability, setSelectedStability] = useState('')
  const [selectedRisk, setSelectedRisk] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [page, setPage] = useState(1)
  const perPage = 24

  const filtered = useMemo(() => {
    return artifacts.filter((a) => {
      if (searchQuery && !a.name.toLowerCase().includes(searchQuery.toLowerCase()) && !a.id.toLowerCase().includes(searchQuery.toLowerCase())) return false
      if (selectedEra && a.era !== selectedEra) return false
      if (selectedDimension && a.dimension !== selectedDimension) return false
      if (selectedStability && a.stability !== selectedStability) return false
      if (selectedRisk && a.riskLevel !== selectedRisk) return false
      if (selectedStatus && a.status !== selectedStatus) return false
      return true
    })
  }, [searchQuery, selectedEra, selectedDimension, selectedStability, selectedRisk, selectedStatus])

  const paginated = filtered.slice(0, page * perPage)
  const hasMore = paginated.length < filtered.length

  const activeFilters = [selectedEra, selectedDimension, selectedStability, selectedRisk, selectedStatus].filter(Boolean).length

  const clearFilters = () => {
    setSelectedEra('')
    setSelectedDimension('')
    setSelectedStability('')
    setSelectedRisk('')
    setSelectedStatus('')
    setSearchQuery('')
    setPage(1)
  }

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="section-label mb-2">Classified Repository</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Artifact Archive</h1>
          <p className="text-white/40 text-sm">{filtered.length} artifacts found across all known timelines</p>
        </div>

        {/* Search and controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Search artifacts by name or ID..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setPage(1) }}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan/30 focus:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                showFilters || activeFilters > 0
                  ? 'bg-cyan/10 border-cyan/30 text-cyan'
                  : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <Filter className="w-4 h-4" />
              Filters
              {activeFilters > 0 && (
                <span className="w-5 h-5 rounded-full bg-cyan text-background text-xs flex items-center justify-center font-bold">
                  {activeFilters}
                </span>
              )}
            </button>

            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-lg border transition-all ${viewMode === 'grid' ? 'bg-cyan/10 border-cyan/30 text-cyan' : 'bg-white/5 border-white/10 text-white/40'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-lg border transition-all ${viewMode === 'list' ? 'bg-cyan/10 border-cyan/30 text-cyan' : 'bg-white/5 border-white/10 text-white/40'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filters panel */}
        {showFilters && (
          <GlassPanel className="p-6 mb-6 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white/80">Filter Artifacts</h3>
              {activeFilters > 0 && (
                <button onClick={clearFilters} className="flex items-center gap-1 text-xs text-cyan hover:text-cyan/80">
                  <X className="w-3 h-3" /> Clear all
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <FilterSelect label="Era" value={selectedEra} onChange={(v) => { setSelectedEra(v); setPage(1) }} options={eras} />
              <FilterSelect label="Dimension" value={selectedDimension} onChange={(v) => { setSelectedDimension(v); setPage(1) }} options={dimensions} />
              <FilterSelect label="Stability" value={selectedStability} onChange={(v) => { setSelectedStability(v); setPage(1) }} options={stability} />
              <FilterSelect label="Risk Level" value={selectedRisk} onChange={(v) => { setSelectedRisk(v); setPage(1) }} options={riskLevels} />
              <FilterSelect label="Status" value={selectedStatus} onChange={(v) => { setSelectedStatus(v); setPage(1) }} options={statuses} />
            </div>
          </GlassPanel>
        )}

        {/* Results */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {paginated.map((artifact) => (
              <Link key={artifact.id} to={`/archive/${artifact.id}`}>
                <GlassPanel hover className="p-4 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-cyan/50">{artifact.id}</span>
                    <TimelineRisk level={artifact.riskLevel} compact />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 leading-tight line-clamp-2">{artifact.name}</h3>
                  <p className="text-xs text-white/40 line-clamp-2 mb-3">{artifact.description}</p>
                  <div className="mt-auto pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-white/30 truncate max-w-[60%]">{artifact.era}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                      artifact.status === 'Quarantined' ? 'text-danger bg-danger/10' :
                      artifact.status === 'Missing' ? 'text-amber bg-amber/10' :
                      'text-white/40 bg-white/5'
                    }`}>{artifact.status}</span>
                  </div>
                </GlassPanel>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {paginated.map((artifact) => (
              <Link key={artifact.id} to={`/archive/${artifact.id}`}>
                <GlassPanel hover className="p-4 flex items-center gap-4">
                  <span className="text-xs font-mono text-cyan/50 w-20 shrink-0">{artifact.id}</span>
                  <h3 className="text-sm font-semibold text-white flex-1 min-w-0 truncate">{artifact.name}</h3>
                  <span className="text-xs text-white/30 hidden sm:block w-40 truncate">{artifact.era}</span>
                  <span className="text-xs text-white/30 hidden md:block w-32 truncate">{artifact.dimension}</span>
                  <TimelineRisk level={artifact.riskLevel} compact />
                </GlassPanel>
              </Link>
            ))}
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setPage(page + 1)}
              className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white/60 text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
            >
              Load more artifacts ({filtered.length - paginated.length} remaining)
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 text-lg">No artifacts match your search criteria</p>
            <button onClick={clearFilters} className="mt-4 text-cyan text-sm hover:text-cyan/80">Clear all filters</button>
          </div>
        )}
      </div>
    </div>
  )
}

const FilterSelect = ({ label, value, onChange, options }) => (
  <div>
    <label className="text-[10px] text-white/30 uppercase tracking-wider mb-1 block">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan/30 appearance-none cursor-pointer"
    >
      <option value="" className="bg-surface text-white">All</option>
      {options.map((opt) => (
        <option key={opt} value={opt} className="bg-surface text-white">{opt}</option>
      ))}
    </select>
  </div>
)

export default Archive
