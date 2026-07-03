import { cn } from "@/lib/utils";

const StatCard = ({ icon: Icon, label, value, unit = "", sub, accentClass = "text-sky-400" }) => {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{label}</span>
        {Icon && (
          <div className={cn("p-2 rounded-lg bg-slate-800", accentClass)}>
            <Icon size={16} />
          </div>
        )}
      </div>
      <div className="flex items-end gap-1">
        <span className="text-3xl font-bold text-slate-100">{value}</span>
        {unit && <span className="text-sm text-slate-400 mb-1">{unit}</span>}
      </div>
      {sub && <p className="text-xs text-slate-500">{sub}</p>}
    </div>
  );
};

export default StatCard;
