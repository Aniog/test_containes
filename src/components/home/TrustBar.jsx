import { ShieldCheck, RotateCcw, Sparkles, Heart } from "lucide-react";

const items = [
  { icon: Sparkles, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: ShieldCheck, label: "18K Gold Plated" },
  { icon: Heart, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-border bg-surface">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5 py-4 md:py-5 md:border-r border-border last:border-r-0"
            >
              <item.icon className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-[11px] md:text-xs uppercase tracking-[0.08em] text-secondary font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}