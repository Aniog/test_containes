export default function StatCard({ label, value, unit, icon: Icon, iconColor, subtext }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-lg flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{label}</span>
        {Icon && (
          <div className={`p-2 rounded-lg bg-slate-800 ${iconColor || "text-sky-400"}`}>
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>
      <div className="flex items-end gap-1">
        <span className="text-3xl font-bold text-white">{value}</span>
        {unit && <span className="text-sm text-slate-400 mb-1">{unit}</span>}
      </div>
      {subtext && <p className="text-xs text-slate-500">{subtext}</p>}
    </div>
  );
}
