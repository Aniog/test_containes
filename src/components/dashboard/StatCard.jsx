const StatCard = ({ label, value, unit, icon: Icon, accent = "text-slate-100", sub }) => (
  <div className="rounded-xl border border-slate-700 bg-slate-800 p-5 shadow-lg flex flex-col gap-2">
    <div className="flex items-center justify-between">
      <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">{label}</span>
      {Icon && <Icon className="w-4 h-4 text-slate-500" />}
    </div>
    <div className="flex items-end gap-1">
      <span className={`text-3xl font-bold ${accent}`}>{value}</span>
      {unit && <span className="text-sm text-slate-400 mb-1">{unit}</span>}
    </div>
    {sub && <span className="text-xs text-slate-500">{sub}</span>}
  </div>
)

export default StatCard
