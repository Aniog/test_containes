import { Search, Users, Clock, AlertTriangle, ChevronRight } from 'lucide-react'
import GlassPanel from '@/components/shared/GlassPanel'
import { activeInvestigations } from '@/data/artifacts'

const priorityColors = {
  Critical: 'text-danger border-danger/30 bg-danger/10',
  High: 'text-orange-400 border-orange-500/30 bg-orange-500/10',
  Moderate: 'text-amber border-amber/30 bg-amber/10',
  Low: 'text-cyan border-cyan/30 bg-cyan/10',
}

const statusColors = {
  Active: 'text-success',
  Monitoring: 'text-cyan',
  Planning: 'text-amber',
}

const Investigations = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="section-label mb-2 flex items-center gap-2">
            <Search className="w-4 h-4" />
            Active Operations
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Investigations</h1>
          <p className="text-white/40 text-sm">Ongoing temporal research and recovery operations</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <GlassPanel className="p-4 text-center">
            <p className="text-2xl font-bold text-cyan font-mono">4</p>
            <p className="text-xs text-white/40 mt-1">Active Cases</p>
          </GlassPanel>
          <GlassPanel className="p-4 text-center">
            <p className="text-2xl font-bold text-danger font-mono">2</p>
            <p className="text-xs text-white/40 mt-1">Critical Priority</p>
          </GlassPanel>
          <GlassPanel className="p-4 text-center">
            <p className="text-2xl font-bold text-amber font-mono">45</p>
            <p className="text-xs text-white/40 mt-1">Agents Deployed</p>
          </GlassPanel>
          <GlassPanel className="p-4 text-center">
            <p className="text-2xl font-bold text-white/80 font-mono">404</p>
            <p className="text-xs text-white/40 mt-1">Days Total Active</p>
          </GlassPanel>
        </div>

        {/* Investigation cards */}
        <div className="space-y-6">
          {activeInvestigations.map((inv, i) => (
            <GlassPanel
              key={inv.id}
              hover
              className="p-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-cyan/50">{inv.id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded border font-semibold ${priorityColors[inv.priority]}`}>
                      {inv.priority}
                    </span>
                    <span className={`text-xs font-semibold ${statusColors[inv.status]}`}>
                      ● {inv.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{inv.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{inv.description}</p>
                </div>

                <div className="lg:w-64 shrink-0">
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-cyan/50" />
                      <div>
                        <p className="text-[10px] text-white/30 uppercase">Lead</p>
                        <p className="text-xs text-white/70">{inv.lead}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-cyan/50" />
                      <div>
                        <p className="text-[10px] text-white/30 uppercase">Team Size</p>
                        <p className="text-xs text-white/70">{inv.team} agents</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyan/50" />
                      <div>
                        <p className="text-[10px] text-white/30 uppercase">Days Active</p>
                        <p className="text-xs text-white/70">{inv.daysActive} days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {inv.priority === 'Critical' && (
                    <span className="flex items-center gap-1 text-xs text-danger">
                      <AlertTriangle className="w-3 h-3" />
                      Immediate attention required
                    </span>
                  )}
                </div>
                <button className="flex items-center gap-1 text-xs text-cyan/60 hover:text-cyan transition-colors">
                  View full report <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </GlassPanel>
          ))}
        </div>

        {/* Submit sighting */}
        <GlassPanel className="p-8 mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Report a Temporal Anomaly</h3>
          <p className="text-sm text-white/50 mb-6 max-w-lg mx-auto">
            Have you witnessed an unexplained temporal event? Submit your sighting for review by our investigation team.
          </p>
          <button className="px-6 py-3 rounded-lg bg-cyan/10 border border-cyan/30 text-cyan font-semibold text-sm hover:bg-cyan/20 hover:border-cyan/50 transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
            Submit Sighting Report
          </button>
        </GlassPanel>
      </div>
    </div>
  )
}

export default Investigations
