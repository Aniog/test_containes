import { Link } from 'react-router-dom'
import { AlertTriangle, Clock, ChevronRight, Radio } from 'lucide-react'

const INVESTIGATIONS = [
  {
    id: 1,
    code: 'INV-2024-047',
    title: 'The Vanishing of Agent Reyes',
    status: 'Active',
    priority: 'Critical',
    description: 'Senior Field Agent Maria Reyes disappeared during a routine artifact recovery in Prague. Her last transmission described "a door that opened into yesterday." Her temporal signature has been detected in three separate centuries simultaneously.',
    era: '1920s Prague / Present',
    agents: 4,
    lastUpdate: '2 hours ago',
  },
  {
    id: 2,
    code: 'INV-2024-031',
    title: 'The Recurring Library',
    status: 'Active',
    priority: 'High',
    description: 'A library containing books that have not yet been written keeps appearing in different cities worldwide. Each appearance lasts exactly 72 hours before vanishing. The books inside describe events from the next 50 years with apparent accuracy.',
    era: 'Present Day',
    agents: 7,
    lastUpdate: '1 day ago',
  },
  {
    id: 3,
    code: 'INV-2024-019',
    title: 'Operation: Mirror World',
    status: 'Active',
    priority: 'High',
    description: 'Multiple reports of individuals encountering "mirror versions" of themselves from alternate timelines. The encounters are increasing in frequency, suggesting a dimensional membrane breach. Seventeen confirmed cases across six countries.',
    era: 'Present Day',
    agents: 12,
    lastUpdate: '3 days ago',
  },
]

const PRIORITY_CONFIG = {
  Critical: 'text-red-400 bg-red-400/10 border-red-400/30',
  High: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  Medium: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
}

export default function InvestigationsSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span className="font-mono-archive text-xs text-red-400 tracking-widest uppercase">Active Investigations</span>
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-slate-100">
            Open Cases
          </h2>
          <p className="text-slate-500 mt-2 max-w-lg">
            Ongoing investigations into temporal anomalies, missing agents, and unexplained phenomena.
          </p>
        </div>
        <Link to="/investigations" className="hidden sm:flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors">
          All Investigations <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-4">
        {INVESTIGATIONS.map((inv) => (
          <div
            key={inv.id}
            className="glass border border-red-400/10 hover:border-red-400/25 rounded-xl p-6 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono-archive text-xs text-slate-600">{inv.code}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-mono-archive ${PRIORITY_CONFIG[inv.priority]}`}>
                    {inv.priority.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1">
                    <Radio className="w-3 h-3 text-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 font-mono-archive">ACTIVE</span>
                  </div>
                </div>
                <h3 className="font-cinzel text-lg font-semibold text-slate-100 group-hover:text-red-300 transition-colors mb-2">
                  {inv.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{inv.description}</p>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2 shrink-0">
                <div className="text-right">
                  <div className="text-xs text-slate-600 font-mono-archive">AGENTS</div>
                  <div className="text-lg font-bold text-slate-300">{inv.agents}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-600 font-mono-archive">UPDATED</div>
                  <div className="text-xs text-slate-400">{inv.lastUpdate}</div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-red-400/10 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-xs text-slate-600">Era: {inv.era}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
