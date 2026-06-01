import { AlertTriangle, Shield, ShieldAlert, ShieldCheck, ShieldX } from 'lucide-react'

const riskConfig = {
  Minimal: { color: 'text-success', bg: 'bg-success/10', border: 'border-success/30', icon: ShieldCheck, label: 'MINIMAL' },
  Low: { color: 'text-cyan-400', bg: 'bg-cyan/10', border: 'border-cyan/30', icon: Shield, label: 'LOW' },
  Moderate: { color: 'text-amber-400', bg: 'bg-amber/10', border: 'border-amber/30', icon: AlertTriangle, label: 'MODERATE' },
  High: { color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30', icon: ShieldAlert, label: 'HIGH' },
  Extreme: { color: 'text-danger', bg: 'bg-danger/10', border: 'border-danger/30', icon: ShieldX, label: 'EXTREME' },
}

const TimelineRisk = ({ level, compact = false }) => {
  const config = riskConfig[level] || riskConfig.Minimal
  const Icon = config.icon

  if (compact) {
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono font-semibold ${config.color} ${config.bg} border ${config.border}`}>
        <Icon className="w-3 h-3" />
        {config.label}
      </span>
    )
  }

  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg ${config.bg} border ${config.border}`}>
      <Icon className={`w-5 h-5 ${config.color}`} />
      <div>
        <p className={`text-sm font-semibold ${config.color}`}>Timeline Risk: {config.label}</p>
        <p className="text-xs text-white/50">Temporal stability assessment</p>
      </div>
    </div>
  )
}

export default TimelineRisk
