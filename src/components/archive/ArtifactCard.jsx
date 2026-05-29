import { Link } from 'react-router-dom'
import { Shield, Clock, AlertTriangle, CheckCircle, HelpCircle, Zap } from 'lucide-react'

const STABILITY_CONFIG = {
  Stable: { color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/30', icon: CheckCircle, label: 'STABLE' },
  Moderate: { color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/30', icon: AlertTriangle, label: 'MODERATE' },
  Critical: { color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/30', icon: Zap, label: 'CRITICAL' },
  Unknown: { color: 'text-slate-400', bg: 'bg-slate-400/10 border-slate-400/30', icon: HelpCircle, label: 'UNKNOWN' },
}

const CATEGORY_COLORS = {
  Relic: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  Document: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Technology: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  Biological: 'text-green-400 bg-green-400/10 border-green-400/20',
  Anomaly: 'text-red-400 bg-red-400/10 border-red-400/20',
  Recording: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  Weapon: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  Artifact: 'text-slate-300 bg-slate-400/10 border-slate-400/20',
}

const ERA_ICONS = {
  'Victorian Era': '🎩',
  'Roman Empire': '🏛️',
  'Renaissance': '🎨',
  'Space Age': '🚀',
  'Feudal Japan': '⚔️',
  'Near Future': '🔮',
  '32nd Century': '🤖',
  '26th Century': '⏳',
  'Late Antiquity': '📜',
  'American Revolution': '🦅',
  'Unknown': '❓',
}

export default function ArtifactCard({ artifact, compact = false }) {
  const d = artifact?.data || {}
  const stability = STABILITY_CONFIG[d.timeline_stability] || STABILITY_CONFIG.Unknown
  const StabilityIcon = stability.icon
  const catColor = CATEGORY_COLORS[d.category] || CATEGORY_COLORS.Artifact
  const eraIcon = ERA_ICONS[d.era] || '🕰️'

  return (
    <Link
      to={`/archive/${artifact.id}`}
      className="group block glass border border-cyan-400/10 hover:border-cyan-400/30 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:box-glow-cyan"
    >
      {/* Image area */}
      <div className="relative h-40 overflow-hidden" style={{
        background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.08))'
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">{eraIcon}</span>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, transparent 50%, rgba(5,8,16,0.8))'
        }} />
        {/* Stability badge */}
        <div className={`absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-mono-archive ${stability.bg} ${stability.color}`}>
          <StabilityIcon className="w-3 h-3" />
          {stability.label}
        </div>
        {/* Catalog ID */}
        <div className="absolute bottom-3 left-3">
          <span className="font-mono-archive text-xs text-slate-500">{d.catalog_id || 'TTA-UNKN'}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-cinzel text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors leading-tight line-clamp-2">
            {d.name}
          </h3>
          <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full border font-medium ${catColor}`}>
            {d.category}
          </span>
        </div>

        <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
          {d.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-slate-600" />
            <span className="text-xs text-slate-500">{d.era}</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-slate-600" />
            <span className="text-xs text-slate-600">{d.access_level}</span>
          </div>
        </div>

        {d.dimension && (
          <div className="mt-2 pt-2 border-t border-cyan-400/10">
            <span className="font-mono-archive text-xs text-violet-400">DIM: {d.dimension}</span>
          </div>
        )}
      </div>
    </Link>
  )
}
