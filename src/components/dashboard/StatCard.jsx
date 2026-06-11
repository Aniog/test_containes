const StatCard = ({ label, value, unit, icon: Icon, iconColor, trend }) => (
  <div className="bg-slate-800 rounded-xl border border-slate-700 p-5 flex flex-col gap-3 shadow-lg">
    <div className="flex items-center justify-between">
      <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">{label}</span>
      {Icon && <Icon className={`w-5 h-5 ${iconColor}`} />}
    </div>
    <div className="flex items-end gap-1">
      <span className="text-2xl font-bold text-slate-100">{value}</span>
      {unit && <span className="text-sm text-slate-400 mb-0.5">{unit}</span>}
    </div>
    {trend !== undefined && (
      <span className={`text-xs font-medium ${trend >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
        {trend >= 0 ? '▲' : '▼'} {Math.abs(trend).toFixed(1)} vs prev day
      </span>
    )}
  </div>
)

export default StatCard
