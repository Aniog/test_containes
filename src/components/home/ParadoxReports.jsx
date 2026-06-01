import { AlertTriangle } from 'lucide-react'
import GlassPanel from '@/components/shared/GlassPanel'
import { paradoxReports } from '@/data/artifacts'

const severityColors = {
  Critical: 'text-danger border-danger/30 bg-danger/10',
  High: 'text-orange-400 border-orange-500/30 bg-orange-500/10',
  Moderate: 'text-amber border-amber/30 bg-amber/10',
  Low: 'text-cyan border-cyan/30 bg-cyan/10',
}

const statusDot = {
  Unresolved: 'bg-danger animate-pulse',
  'Under Review': 'bg-amber',
  Monitoring: 'bg-cyan',
  Resolved: 'bg-success',
}

const ParadoxReports = () => {
  return (
    <section className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="section-label mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-danger/70" />
            <span className="text-danger/70">Paradox Reports</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Active Temporal Anomalies</h2>
          <p className="text-white/40 mt-2 text-sm">Causal violations and timeline inconsistencies requiring attention</p>
        </div>

        <div className="space-y-4">
          {paradoxReports.map((report, i) => (
            <GlassPanel
              key={report.id}
              hover
              className="p-5 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-3 sm:w-48 shrink-0">
                  <span className={`px-2 py-1 rounded text-xs font-semibold border ${severityColors[report.severity]}`}>
                    {report.severity}
                  </span>
                  <span className="text-xs font-mono text-white/30">{report.id}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-white/80">{report.location}</span>
                    <span className="text-xs text-white/20">•</span>
                    <span className="text-xs text-white/30">{report.dateReported}</span>
                  </div>
                  <p className="text-sm text-white/50 line-clamp-2">{report.description}</p>
                </div>

                <div className="flex items-center gap-2 sm:w-32 shrink-0">
                  <div className={`w-2 h-2 rounded-full ${statusDot[report.status]}`} />
                  <span className="text-xs text-white/50">{report.status}</span>
                </div>
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ParadoxReports
