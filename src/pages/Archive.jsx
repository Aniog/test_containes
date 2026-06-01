import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Grid, List, ChevronDown } from 'lucide-react'
import { artifacts, eras, dimensions, stability, categories, statuses } from '@/data/artifacts'

function RiskBar({ level }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 w-2 rounded-sm ${
            i < level
              ? level > 7 ? 'bg-archive-rose' : level > 4 ? 'bg-archive-amber' : 'bg-archive-emerald'
              : 'bg-archive-border/50'
          }`}
        />
      ))}
    </div>
  )
}

function ArtifactCard({ artifact }) {
  return (
    <Link
      to={`/archive/${artifact.id}`}
      className="glass-panel-hover p-5 no-underline group block"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] text-archive-glow/70">{artifact.id}</span>
        <span className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase ${
          artifact.status === 'Secured' ? 'text-archive-emerald bg-archive-emerald/10' :
          artifact.status === 'Quarantined' ? 'text-archive-rose bg-archive-rose/10' :
          artifact.status === 'Missing' ? 'text-archive-amber bg-archive-amber/10' :
          'text-archive-muted bg-archive-surface'
        }`}>
          {artifact.status}
        </span>
      </div>

      <h3 className="font-cinzel text-sm font-semibold text-archive-text group-hover:text-archive-glow transition-colors mb-2 leading-tight">
        {artifact.name}
      </h3>

      <div className="space-y-1.5 mb-3">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-archive-muted">Era</span>
          <span className="text-archive-text font-mono">{artifact.era}</span>
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-archive-muted">Dimension</span>
          <span className="text-archive-text font-mono">{artifact.dimension}</span>
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-archive-muted">Category</span>
          <span className="text-archive-text font-mono">{artifact.category}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[9px] text-archive-muted uppercase font-mono">Risk Level</span>
        <RiskBar level={artifact.riskLevel} />
      </div>
    </Link>
  )
}

function ArtifactRow({ artifact }) {
  return (
    <Link
      to={`/archive/${artifact.id}`}
      className="glass-panel-hover p-4 no-underline group flex items-center gap-4"
    >
      <span className="font-mono text-xs text-archive-glow/70 w-20 shrink-0">{artifact.id}</span>
      <span className="font-cinzel text-sm text-archive-text group-hover:text-archive-glow transition-colors flex-1 min-w-0 truncate">
        {artifact.name}
      </span>
      <span className="hidden md:block font-mono text-xs text-archive-muted w-24">{artifact.era}</span>
      <span className="hidden lg:block font-mono text-xs text-archive-muted w-20">{artifact.dimension}</span>
      <span className={`hidden sm:block px-2 py-0.5 rounded text-[9px] font-mono uppercase w-24 text-center ${
        artifact.stability === 'Stable' ? 'text-archive-emerald bg-archive-emerald/10' :
        artifact.stability === 'Critical' ? 'text-archive-rose bg-archive-rose/10' :
        artifact.stability === 'Unstable' ? 'text-archive-amber bg-archive-amber/10' :
        'text-archive-muted bg-archive-surface'
      }`}>
        {artifact.stability}
      </span>
      <div className="w-24 shrink-0 hidden sm:block">
        <RiskBar level={artifact.riskLevel} />
      </div>
    </Link>
  )
}

function FilterDropdown({ label, options, value, onChange }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-archive-surface/60 border border-archive-border/50 rounded-lg px-3 py-2 pr-8 text-xs text-archive-text font-mono focus:outline-none focus:border-archive-glow/40 cursor-pointer"
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-archive-muted pointer-events-none" />
    </div>
  )
}

export default function ArchivePage() {
  const [search, setSearch] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [filterEra, setFilterEra] = useState('')
  const [filterDimension, setFilterDimension] = useState('')
  const [filterStability, setFilterStability] = useState('')
  const [filterCategory, setFilterCategory] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [page, setPage] = useState(1)
  const perPage = viewMode === 'grid' ? 24 : 20

  const filtered = useMemo(() => {
    return artifacts.filter((a) => {
      if (search && !a.name.toLowerCase().includes(search.toLowerCase()) && !a.id.toLowerCase().includes(search.toLowerCase())) return false
      if (filterEra && a.era !== filterEra) return false
      if (filterDimension && a.dimension !== filterDimension) return false
      if (filterStability && a.stability !== filterStability) return false
      if (filterCategory && a.category !== filterCategory) return false
      if (filterStatus && a.status !== filterStatus) return false
      return true
    })
  }, [search, filterEra, filterDimension, filterStability, filterCategory, filterStatus])

  const totalPages = Math.ceil(filtered.length / perPage)
  const paginated = filtered.slice((page - 1) * perPage, page * perPage)

  const clearFilters = () => {
    setSearch('')
    setFilterEra('')
    setFilterDimension('')
    setFilterStability('')
    setFilterCategory('')
    setFilterStatus('')
    setPage(1)
  }

  return (
    <div className="min-h-screen pt-24 lg:pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-cinzel text-3xl lg:text-4xl font-bold text-archive-text mb-2">
          The Archive
        </h1>
        <p className="text-archive-muted text-sm">
          {filtered.length} artifacts catalogued across {eras.length} eras and {dimensions.length} dimensions
        </p>
      </div>

      {/* Search & Filters */}
      <div className="glass-panel p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-archive-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1) }}
              placeholder="Search artifacts by name or ID..."
              className="w-full bg-archive-bg/50 border border-archive-border/50 rounded-lg pl-10 pr-4 py-2.5 text-sm text-archive-text placeholder:text-archive-muted/50 focus:outline-none focus:border-archive-glow/40"
            />
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-1 border border-archive-border/50 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors border-none cursor-pointer ${viewMode === 'grid' ? 'bg-archive-glow/10 text-archive-glow' : 'text-archive-muted hover:text-archive-text bg-transparent'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors border-none cursor-pointer ${viewMode === 'list' ? 'bg-archive-glow/10 text-archive-glow' : 'text-archive-muted hover:text-archive-text bg-transparent'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter row */}
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <Filter className="w-3.5 h-3.5 text-archive-muted" />
          <FilterDropdown label="All Eras" options={eras} value={filterEra} onChange={(v) => { setFilterEra(v); setPage(1) }} />
          <FilterDropdown label="All Dimensions" options={dimensions} value={filterDimension} onChange={(v) => { setFilterDimension(v); setPage(1) }} />
          <FilterDropdown label="Stability" options={stability} value={filterStability} onChange={(v) => { setFilterStability(v); setPage(1) }} />
          <FilterDropdown label="Category" options={categories} value={filterCategory} onChange={(v) => { setFilterCategory(v); setPage(1) }} />
          <FilterDropdown label="Status" options={statuses} value={filterStatus} onChange={(v) => { setFilterStatus(v); setPage(1) }} />
          {(filterEra || filterDimension || filterStability || filterCategory || filterStatus || search) && (
            <button
              onClick={clearFilters}
              className="text-xs text-archive-glow hover:text-archive-glow/80 bg-transparent border-none cursor-pointer font-mono"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginated.map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} />
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {paginated.map((artifact) => (
            <ArtifactRow key={artifact.id} artifact={artifact} />
          ))}
        </div>
      )}

      {/* Empty state */}
      {paginated.length === 0 && (
        <div className="text-center py-20">
          <p className="text-archive-muted font-mono text-sm">No artifacts match your search criteria.</p>
          <button onClick={clearFilters} className="mt-4 text-archive-glow text-sm bg-transparent border border-archive-glow/30 px-4 py-2 rounded-lg cursor-pointer hover:bg-archive-glow/10">
            Reset Filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="px-3 py-2 rounded-lg text-xs font-mono border border-archive-border/50 text-archive-muted hover:text-archive-text disabled:opacity-30 bg-archive-surface/40 cursor-pointer disabled:cursor-not-allowed"
          >
            Prev
          </button>
          <span className="font-mono text-xs text-archive-muted px-4">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="px-3 py-2 rounded-lg text-xs font-mono border border-archive-border/50 text-archive-muted hover:text-archive-text disabled:opacity-30 bg-archive-surface/40 cursor-pointer disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
