import { useState, useEffect, useCallback } from 'react'
import { Search, Filter, X, Loader2, ChevronDown, BookOpen } from 'lucide-react'
import { fetchArtifacts } from '../api/archive.js'
import ArtifactCard from '../components/archive/ArtifactCard.jsx'

const CATEGORIES = ['', 'Relic', 'Document', 'Technology', 'Biological', 'Anomaly', 'Recording', 'Weapon', 'Artifact']
const STABILITIES = ['', 'Stable', 'Moderate', 'Critical', 'Unknown']
const SIGNIFICANCES = ['', 'Low', 'Medium', 'High', 'Classified']
const ERAS = ['', 'Victorian Era', 'Roman Empire', 'Renaissance', 'Space Age', 'Feudal Japan', 'Near Future', '32nd Century', '26th Century', 'Late Antiquity', 'American Revolution', 'Unknown']

export default function ArchivePage() {
  const [artifacts, setArtifacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [era, setEra] = useState('')
  const [stability, setStability] = useState('')
  const [significance, setSignificance] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [total, setTotal] = useState(0)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const result = await fetchArtifacts({ search, category, era, stability, significance, limit: 50 })
      setArtifacts(result.rows)
      setTotal(result.total)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [search, category, era, stability, significance])

  useEffect(() => {
    const t = setTimeout(load, 300)
    return () => clearTimeout(t)
  }, [load])

  const clearFilters = () => {
    setSearch(''); setCategory(''); setEra(''); setStability(''); setSignificance('')
  }
  const hasFilters = search || category || era || stability || significance

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.06), transparent 60%)'
        }} />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span className="font-mono-archive text-xs text-cyan-400 tracking-widest">TEMPORAL ARTIFACT DATABASE</span>
          </div>
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-slate-100 mb-4">The Archive</h1>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            A comprehensive catalog of artifacts, documents, recordings, and anomalies recovered from across all known timelines and dimensions. Search by era, stability, category, or keyword.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Search & Filter bar */}
        <div className="glass border border-cyan-400/15 rounded-xl p-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search artifacts, eras, dimensions..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-cyan-400/15 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 text-sm"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${showFilters ? 'bg-cyan-400/10 border-cyan-400/40 text-cyan-300' : 'border-cyan-400/15 text-slate-400 hover:border-cyan-400/30 hover:text-slate-200'}`}
            >
              <Filter className="w-4 h-4" />
              Filters
              {hasFilters && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
              <ChevronDown className={`w-3 h-3 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            {hasFilters && (
              <button onClick={clearFilters} className="flex items-center gap-1.5 px-3 py-2.5 text-sm text-red-400 hover:text-red-300 transition-colors">
                <X className="w-3.5 h-3.5" /> Clear
              </button>
            )}
          </div>

          {showFilters && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 pt-4 border-t border-cyan-400/10">
              {[
                { label: 'Category', value: category, setter: setCategory, options: CATEGORIES },
                { label: 'Era', value: era, setter: setEra, options: ERAS },
                { label: 'Stability', value: stability, setter: setStability, options: STABILITIES },
                { label: 'Significance', value: significance, setter: setSignificance, options: SIGNIFICANCES },
              ].map(({ label, value, setter, options }) => (
                <div key={label}>
                  <label className="block font-mono-archive text-xs text-slate-500 mb-1.5 tracking-wide">{label.toUpperCase()}</label>
                  <select
                    value={value}
                    onChange={e => setter(e.target.value)}
                    className="w-full px-3 py-2 bg-white/5 border border-cyan-400/15 rounded-lg text-slate-300 text-sm focus:outline-none focus:border-cyan-400/40 appearance-none"
                  >
                    {options.map(o => (
                      <option key={o} value={o} style={{ background: '#0a0f1e' }}>
                        {o || `All ${label}s`}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-mono-archive text-xs text-slate-500">
            {loading ? 'SEARCHING...' : `${artifacts.length} ARTIFACT${artifacts.length !== 1 ? 'S' : ''} FOUND`}
          </p>
          {hasFilters && (
            <div className="flex flex-wrap gap-2">
              {search && <span className="text-xs px-2 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">"{search}"</span>}
              {category && <span className="text-xs px-2 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">{category}</span>}
              {era && <span className="text-xs px-2 py-1 rounded-full bg-violet-400/10 border border-violet-400/20 text-violet-400">{era}</span>}
              {stability && <span className="text-xs px-2 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400">{stability}</span>}
            </div>
          )}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-32">
            <div className="text-center">
              <Loader2 className="w-10 h-10 text-cyan-400 animate-spin mx-auto mb-4" />
              <p className="font-mono-archive text-xs text-slate-500 tracking-widest">SCANNING TEMPORAL DATABASE...</p>
            </div>
          </div>
        ) : artifacts.length === 0 ? (
          <div className="text-center py-32">
            <div className="text-6xl mb-4 opacity-20">🕰️</div>
            <h3 className="font-cinzel text-xl text-slate-400 mb-2">No Artifacts Found</h3>
            <p className="text-slate-600 text-sm">Try adjusting your search or filters.</p>
            {hasFilters && (
              <button onClick={clearFilters} className="mt-4 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                Clear all filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {artifacts.map(artifact => (
              <ArtifactCard key={artifact.id} artifact={artifact} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
