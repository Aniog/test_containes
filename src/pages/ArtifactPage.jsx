import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchArtifactById } from '../api/archive.js'
import { ArrowLeft, Shield, Clock, MapPin, User, AlertTriangle, CheckCircle, HelpCircle, Zap, Tag, FileText, Loader2 } from 'lucide-react'

const STABILITY_CONFIG = {
  Stable: { color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/30', icon: CheckCircle, label: 'STABLE', desc: 'No timeline disruption risk detected.' },
  Moderate: { color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/30', icon: AlertTriangle, label: 'MODERATE', desc: 'Minor timeline fluctuations observed. Handle with care.' },
  Critical: { color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/30', icon: Zap, label: 'CRITICAL', desc: 'Significant paradox risk. Restricted access required.' },
  Unknown: { color: 'text-slate-400', bg: 'bg-slate-400/10 border-slate-400/30', icon: HelpCircle, label: 'UNKNOWN', desc: 'Timeline impact cannot be assessed.' },
}

const SIG_COLORS = {
  Low: 'text-slate-400',
  Medium: 'text-cyan-400',
  High: 'text-amber-400',
  Classified: 'text-red-400',
}

export default function ArtifactPage() {
  const { id } = useParams()
  const [artifact, setArtifact] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchArtifactById(id)
      .then(setArtifact)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <Loader2 className="w-10 h-10 text-cyan-400 animate-spin mx-auto mb-4" />
        <p className="font-mono-archive text-xs text-slate-500 tracking-widest">RETRIEVING ARTIFACT DATA...</p>
      </div>
    </div>
  )

  if (error || !artifact) return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="font-cinzel text-2xl text-slate-300 mb-2">Artifact Not Found</h2>
        <p className="text-slate-500 mb-6">{error || 'This artifact may have been redacted or does not exist.'}</p>
        <Link to="/archive" className="text-cyan-400 hover:text-cyan-300 transition-colors">← Return to Archive</Link>
      </div>
    </div>
  )

  const d = artifact.data || {}
  const stability = STABILITY_CONFIG[d.timeline_stability] || STABILITY_CONFIG.Unknown
  const StabilityIcon = stability.icon

  return (
    <div className="min-h-screen pt-20">
      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <Link to="/archive" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Archive
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Image + metadata */}
          <div className="lg:col-span-1 space-y-6">
            {/* Artifact visual */}
            <div className="glass border border-cyan-400/15 rounded-2xl overflow-hidden">
              <div className="relative h-64 flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.1))'
              }}>
                <div className="text-8xl opacity-40">
                  {d.category === 'Document' ? '📜' : d.category === 'Technology' ? '⚙️' : d.category === 'Recording' ? '🎙️' : d.category === 'Weapon' ? '⚔️' : d.category === 'Biological' ? '🌱' : '🏺'}
                </div>
                <div className="absolute inset-0" style={{
                  background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.1), transparent 70%)'
                }} />
              </div>
              <div className="p-4 border-t border-cyan-400/10">
                <div className="font-mono-archive text-xs text-slate-500 text-center">{d.catalog_id || 'TTA-UNKN'}</div>
              </div>
            </div>

            {/* Timeline Risk Indicator */}
            <div className={`glass border rounded-xl p-5 ${stability.bg}`}>
              <div className="flex items-center gap-2 mb-3">
                <StabilityIcon className={`w-5 h-5 ${stability.color}`} />
                <span className={`font-cinzel text-sm font-bold ${stability.color}`}>TIMELINE RISK</span>
              </div>
              <div className={`font-mono-archive text-2xl font-bold mb-2 ${stability.color}`}>
                {stability.label}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{stability.desc}</p>
              <div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${d.timeline_stability === 'Stable' ? 'bg-green-400 w-1/4' : d.timeline_stability === 'Moderate' ? 'bg-amber-400 w-2/4' : d.timeline_stability === 'Critical' ? 'bg-red-400 w-full' : 'bg-slate-500 w-1/2'}`}
                />
              </div>
            </div>

            {/* Metadata */}
            <div className="glass border border-cyan-400/15 rounded-xl p-5 space-y-4">
              <h3 className="font-cinzel text-xs text-slate-400 tracking-widest uppercase">Artifact Metadata</h3>
              {[
                { icon: Clock, label: 'Era', value: d.era },
                { icon: Clock, label: 'Year', value: d.year ? (d.year < 0 ? `${Math.abs(d.year)} BCE` : `${d.year} CE`) : 'Unknown' },
                { icon: Shield, label: 'Dimension', value: d.dimension || 'Unknown' },
                { icon: Shield, label: 'Category', value: d.category },
                { icon: Shield, label: 'Significance', value: d.historical_significance, color: SIG_COLORS[d.historical_significance] },
                { icon: Shield, label: 'Access Level', value: d.access_level },
                { icon: MapPin, label: 'Recovered At', value: d.recovery_location || 'Unknown' },
                { icon: Clock, label: 'Recovery Date', value: d.recovery_date || 'Unknown' },
                { icon: User, label: 'Recovered By', value: d.recovered_by || 'Unknown' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon className="w-3.5 h-3.5 text-slate-600 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-mono-archive text-xs text-slate-600 tracking-wide">{label.toUpperCase()}</div>
                    <div className={`text-sm mt-0.5 ${color || 'text-slate-300'}`}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tags */}
            {d.tags?.length > 0 && (
              <div className="glass border border-cyan-400/15 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-3.5 h-3.5 text-slate-500" />
                  <span className="font-mono-archive text-xs text-slate-500 tracking-wide">TAGS</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {d.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-cyan-400/5 border border-cyan-400/15 text-cyan-400/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Description + curator notes */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-mono-archive text-xs text-slate-600">{d.catalog_id}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">{d.category}</span>
                {d.is_featured && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400">⭐ Featured</span>
                )}
              </div>
              <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-slate-100 leading-tight mb-2">
                {d.name}
              </h1>
              <div className="flex items-center gap-2">
                <span className="font-mono-archive text-xs text-violet-400">DIM: {d.dimension || 'UNKNOWN'}</span>
                <span className="text-slate-700">·</span>
                <span className="font-mono-archive text-xs text-slate-500">{d.era}</span>
              </div>
            </div>

            {/* Description */}
            <div className="glass border border-cyan-400/15 rounded-xl p-6">
              <h2 className="font-cinzel text-sm text-slate-400 tracking-widest uppercase mb-4">Description</h2>
              <p className="text-slate-300 leading-relaxed text-base">{d.description}</p>
            </div>

            {/* Curator Notes */}
            {d.curator_notes && (
              <div className="glass border border-amber-400/20 rounded-xl p-6" style={{ background: 'rgba(245,158,11,0.03)' }}>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <h2 className="font-cinzel text-sm text-amber-400 tracking-widest uppercase">Curator Notes</h2>
                  <span className="font-mono-archive text-xs text-amber-400/50 ml-auto">INTERNAL — RESTRICTED</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm italic">{d.curator_notes}</p>
              </div>
            )}

            {/* Related artifacts placeholder */}
            <div className="glass border border-cyan-400/10 rounded-xl p-6">
              <h2 className="font-cinzel text-sm text-slate-400 tracking-widest uppercase mb-4">Related Artifacts</h2>
              <p className="text-slate-600 text-sm">Cross-referencing temporal database for related artifacts...</p>
              <Link to="/archive" className="inline-flex items-center gap-2 mt-4 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                Browse Full Archive →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
