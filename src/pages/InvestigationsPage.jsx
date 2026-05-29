import { AlertTriangle, Radio, AlertOctagon, Clock, Users, ChevronRight } from 'lucide-react'

const INVESTIGATIONS = [
  {
    code: 'INV-2024-047', title: 'The Vanishing of Agent Reyes', status: 'Active', priority: 'Critical',
    description: 'Senior Field Agent Maria Reyes disappeared during a routine artifact recovery in Prague. Her last transmission described "a door that opened into yesterday." Her temporal signature has been detected in three separate centuries simultaneously.',
    era: '1920s Prague / Present', agents: 4, lastUpdate: '2 hours ago', lead: 'Director Chen',
  },
  {
    code: 'INV-2024-031', title: 'The Recurring Library', status: 'Active', priority: 'High',
    description: 'A library containing books that have not yet been written keeps appearing in different cities worldwide. Each appearance lasts exactly 72 hours before vanishing. The books inside describe events from the next 50 years with apparent accuracy.',
    era: 'Present Day', agents: 7, lastUpdate: '1 day ago', lead: 'Dr. Tanaka',
  },
  {
    code: 'INV-2024-019', title: 'Operation: Mirror World', status: 'Active', priority: 'High',
    description: 'Multiple reports of individuals encountering "mirror versions" of themselves from alternate timelines. The encounters are increasing in frequency, suggesting a dimensional membrane breach. Seventeen confirmed cases across six countries.',
    era: 'Present Day', agents: 12, lastUpdate: '3 days ago', lead: 'Agent Nakamura',
  },
  {
    code: 'INV-2023-088', title: 'The Clockmaker of Vienna', status: 'Pending', priority: 'Medium',
    description: 'A clockmaker in 1890s Vienna was reportedly visited by a man who gave him blueprints for a device that would not be invented for 150 years. The clockmaker built the device. It is currently in Archive storage and we do not know what it does.',
    era: '1890s Vienna', agents: 2, lastUpdate: '2 weeks ago', lead: 'Dr. Moreau',
  },
  {
    code: 'INV-2023-071', title: 'The Children Who Remember Tomorrow', status: 'Pending', priority: 'Medium',
    description: 'Twelve children across four countries have been independently drawing the same image: a city that does not exist, with a skyline that matches no known architectural style. The drawings are identical down to the millimeter.',
    era: 'Present Day', agents: 5, lastUpdate: '1 month ago', lead: 'Dr. Al-Rashid',
  },
  {
    code: 'INV-2022-003', title: 'The Lighthouse at the End of Time', status: 'Closed', priority: 'Critical',
    description: 'A lighthouse was discovered at coordinates that should be in the middle of the Pacific Ocean. The lighthouse was operational, staffed by a keeper who claimed to have been there "since before the sea." The lighthouse vanished 48 hours after discovery.',
    era: 'Present Day', agents: 0, lastUpdate: '2 years ago', lead: 'Agent Williams',
  },
]

const PARADOXES = [
  {
    id: 'PAR-2024-003', title: 'The Bootstrap Paradox of the Meridian Compass', severity: 'Critical', status: 'Unresolved', timeline: 'Prime-Alpha',
    description: 'The Meridian Compass was given to Sir Edmund Hargrove by a time traveler in 1847. That time traveler retrieved the compass from the Archive in 2031. The Archive acquired the compass from Hargrove\'s estate in 1994. The compass has no point of origin.',
  },
  {
    id: 'PAR-2024-007', title: 'The Alexandrian Field Guide Causality Loop', severity: 'High', status: 'Under Review', timeline: 'Prime-Alpha',
    description: 'The Field Guide describes artifacts that the Archive has recovered. The Archive recovered those artifacts because the Field Guide told them where to look. The Field Guide was written by a future Archive agent using information from the Archive\'s own records.',
  },
  {
    id: 'PAR-2024-011', title: 'Agent Reyes Temporal Triplication', severity: 'Critical', status: 'Active', timeline: 'Prime-Alpha / Theta-3',
    description: 'Agent Reyes has been simultaneously detected in 1923 Prague, 2024 Prague, and an unidentified future date. All three instances appear to be the same individual at different points in their personal timeline.',
  },
  {
    id: 'PAR-2023-019', title: 'The Archive\'s Own Founding', severity: 'High', status: 'Unresolved', timeline: 'Prime-Alpha',
    description: 'The Archive was founded in 2001 by a group of individuals who claimed to have been recruited by the Archive itself. The original recruitment documents are signed by the Archive\'s own director — who was not appointed until 2003.',
  },
]

const PRIORITY_CONFIG = {
  Critical: 'text-red-400 bg-red-400/10 border-red-400/30',
  High: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  Medium: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
}

const STATUS_CONFIG = {
  Active: 'text-green-400',
  Pending: 'text-amber-400',
  Closed: 'text-slate-500',
}

export default function InvestigationsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(239,68,68,0.06), transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span className="font-mono-archive text-xs text-red-400 tracking-widest">TEMPORAL INVESTIGATIONS DIVISION</span>
          </div>
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-slate-100 mb-4">Investigations & Paradoxes</h1>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            Active cases, pending investigations, and unresolved paradoxes tracked by the Archive's field operations and paradox resolution units.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 space-y-16">
        {/* Active Investigations */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h2 className="font-cinzel text-2xl font-bold text-slate-100">Active Investigations</h2>
            <span className="font-mono-archive text-xs text-red-400 bg-red-400/10 border border-red-400/20 px-2 py-1 rounded-full">
              {INVESTIGATIONS.filter(i => i.status === 'Active').length} ACTIVE
            </span>
          </div>
          <div className="space-y-4">
            {INVESTIGATIONS.map((inv) => (
              <div key={inv.code} className="glass border border-slate-700/50 hover:border-red-400/20 rounded-xl p-6 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono-archive text-xs text-slate-600">{inv.code}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-mono-archive ${PRIORITY_CONFIG[inv.priority]}`}>
                        {inv.priority.toUpperCase()}
                      </span>
                      <div className="flex items-center gap-1">
                        {inv.status === 'Active' && <Radio className="w-3 h-3 text-green-400 animate-pulse" />}
                        <span className={`text-xs font-mono-archive ${STATUS_CONFIG[inv.status]}`}>{inv.status.toUpperCase()}</span>
                      </div>
                    </div>
                    <h3 className="font-cinzel text-lg font-semibold text-slate-100 mb-2">{inv.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{inv.description}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {inv.era}</span>
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {inv.agents} agents</span>
                      <span>Lead: {inv.lead}</span>
                      <span>Updated: {inv.lastUpdate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Paradox Reports */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <AlertOctagon className="w-5 h-5 text-red-400" />
            <h2 className="font-cinzel text-2xl font-bold text-slate-100">Paradox Reports</h2>
            <span className="font-mono-archive text-xs text-red-400 bg-red-400/10 border border-red-400/20 px-2 py-1 rounded-full">
              {PARADOXES.length} LOGGED
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARADOXES.map((p) => (
              <div key={p.id} className="glass border border-red-400/10 hover:border-red-400/25 rounded-xl p-6 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono-archive text-xs text-slate-600">{p.id}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-mono-archive ${PRIORITY_CONFIG[p.severity]}`}>
                    {p.severity.toUpperCase()}
                  </span>
                </div>
                <h3 className="font-cinzel text-base font-semibold text-slate-100 mb-3 leading-tight">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{p.description}</p>
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
      </div>
    </div>
  )
}
