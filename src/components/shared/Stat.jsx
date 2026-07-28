import { cn } from "@/lib/utils";

export default function Stat({ value, label, sub, tone = "light" }) {
  const valueColor = tone === "light" ? "text-white" : "text-brand-800";
  const labelColor = tone === "light" ? "text-white/70" : "text-ink-500";
  const subColor = tone === "light" ? "text-white/50" : "text-ink-500";

  return (
    <div className="text-center md:text-left">
      <div
        className={cn(
          "text-3xl md:text-4xl font-bold tracking-tight",
          valueColor
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "mt-1 text-sm font-semibold uppercase tracking-wider",
          labelColor
        )}
      >
        {label}
      </div>
      {sub && <div className={cn("mt-1 text-xs", subColor)}>{sub}</div>}
    </div>
  );
}
