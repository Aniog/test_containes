export default function StatCard({ icon: Icon, iconColor, iconBg, label, value, unit, sub }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex items-start gap-4">
      <div className={`flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center ${iconBg}`}>
        <Icon size={22} className={iconColor} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">{label}</p>
        <p className="text-2xl font-bold text-slate-100 leading-none">
          {value}
          {unit && <span className="text-base font-medium text-slate-400 ml-1">{unit}</span>}
        </p>
        {sub && <p className="text-xs text-slate-500 mt-1">{sub}</p>}
      </div>
    </div>
  );
}
