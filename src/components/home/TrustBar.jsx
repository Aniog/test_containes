import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="border-b border-velmora-hairline bg-velmora-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-3">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-velmora-accent" />
              <span className="text-[11px] sm:text-xs uppercase tracking-wide font-medium text-velmora-muted">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
