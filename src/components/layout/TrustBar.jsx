import { Truck, RefreshCw, Sparkles, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export function TrustBar({ tone = "light" }) {
  const isDark = tone === "dark";
  return (
    <div
      className={
        isDark
          ? "bg-espresso-soft text-ink-onDark border-y border-line-dark"
          : "bg-canvas-soft text-ink border-y border-line"
      }
    >
      <div className="container-editorial py-4">
        <ul className="grid grid-cols-2 gap-y-3 gap-x-6 sm:flex sm:items-center sm:justify-between">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className="flex items-center gap-2.5 text-[11px] uppercase tracking-wider2 font-medium"
              >
                <Icon
                  size={14}
                  strokeWidth={1.4}
                  className={isDark ? "text-gold-soft" : "text-gold"}
                />
                <span className="whitespace-nowrap">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TrustBar;
