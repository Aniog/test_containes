const StatCard = ({ label, value, unit, icon: Icon, iconColor, sub }) => (
  <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-col gap-3">
    <div className="flex items-center justify-between">
      <span className="text-xs font-medium uppercase tracking-wider text-slate-400">{label}</span>
      {Icon && <Icon size={20} className={iconColor ?? 'text-sky-400'} />}
    </div>
    <div className="flex items-end gap-1">
      <span className="text-3xl font-bold text-slate-100">{value}</span>
      {unit && <span className="text-sm text-slate-400 mb-1">{unit}</span>}
    </div>
    {sub && <p className="text-xs text-slate-500">{sub}</p>}
  </div>
);

export default StatCard;
