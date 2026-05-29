import { AlertOctagon, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const PARADOXES = [
  {
    id: 'PAR-2024-003',
    title: 'The Bootstrap Paradox of the Meridian Compass',
    severity: 'Critical',
    description: 'The Meridian Compass was given to Sir Edmund Hargrove by a time traveler in 1847. That time traveler retrieved the compass from the Archive in 2031. The Archive acquired the compass from Hargrove\'s estate in 1994. The compass has no point of origin.',
    status: 'Unresolved',
    timeline: 'Prime-Alpha',
  },
  {
    id: 'PAR-2024-007',
    title: 'The Alexandrian Field Guide Causality Loop',
    severity: 'High',
    description: 'The Field Guide describes artifacts that the Archive has recovered. The Archive recovered those artifacts because the Field Guide told them where to look. The Field Guide was written by a future Archive agent using information from the Archive\'s own records.',
    status: 'Under Review',
    timeline: 'Prime-Alpha',
  },
  {
    id: 'PAR-2023-019',
    title: 'Agent Reyes Temporal Triplication',
    severity: 'Critical',
    description: 'Agent Reyes has been simultaneously detected in 1923 Prague, 2024 Prague, and an unidentified future date. All three instances appear to be the same individual at different points in their personal timeline. Interaction between instances is strictly prohibited.',
    status: 'Active',
    timeline: 'Prime-Alpha / Theta-3',
  },
]

const SEV_CONFIG = {
  Critical: 'text-red-400 border-red-400/40 bg-red-400/5',
  High: 'text-amber-400 border-amber-400/40 bg-amber-400/5',
  Medium: 'text-cyan-400 border-cyan-400/40 bg-cyan-400/5',
}

export default function ParadoxSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <AlertOctagon className="w-4 h-4 text-red-400" />
            <span className="font-mono-archive text-xs text-red-400 tracking-widest uppercase">Paradox Reports</span>
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-slate-100">
            Active Paradoxes
          </h2>
          <p className="text-slate-500 mt-2 max-w-lg">
            Causality violations and temporal loops currently under investigation by the Paradox Resolution Unit.
          </p>
        </div>
        <Link to="/investigations" className="hidden sm:flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors">
          Full Report <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PARADOXES.map((p) => (
          <div
            key={p.id}
            className={`glass border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${SEV_CONFIG[p.severity]}`}
          >
            <div className="flex items-start justify-between mb-3">
              <span className="font-mono-archive text-xs text-slate-600">{p.id}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full border font-mono-archive ${SEV_CONFIG[p.severity]}`}>
                {p.severity.toUpperCase()}
              </span>
            </div>
            <h3 className="font-cinzel text-sm font-semibold text-slate-100 mb-3 leading-tight">
              {p.title}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-4">
              {p.description}
            </p>
            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="font-mono-archive text-xs text-violet-400">{p.timeline}</span>
              <span className={`text-xs font-mono-archive ${p.status === 'Unresolved' ? 'text-red-400' : p.status === 'Active' ? 'text-amber-400' : 'text-cyan-400'}`}>
                {p.status.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
