import { cn } from "@/lib/utils";

const StatCard = ({ label, value, unit, icon, trend, trendLabel, colorClass = "text-slate-800" }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col gap-2 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{label}</span>
        {icon && <span className="text-xl">{icon}</span>}
      </div>
      <div className="flex items-end gap-1">
        <span className={cn("text-3xl font-bold", colorClass)}>{value}</span>
        {unit && <span className="text-sm text-slate-400 mb-1">{unit}</span>}
      </div>
      {trendLabel && (
        <span className={cn("text-xs font-medium", trend === "up" ? "text-orange-500" : trend === "down" ? "text-blue-500" : "text-slate-400")}>
          {trend === "up" ? "▲" : trend === "down" ? "▼" : "—"} {trendLabel}
        </span>
      )}
    </div>
  );
};

export default StatCard;
