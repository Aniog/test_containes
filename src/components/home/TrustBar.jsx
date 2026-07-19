import { Truck, RotateCcw, Gem, Shield } from "lucide-react";

const features = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: Shield, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-ink border-b border-parchment/10">
      <div className="max-w-site mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-3.5 overflow-x-auto hide-scrollbar">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-2 flex-shrink-0">
              <f.icon size={14} className="text-gold" />
              <span className="text-[11px] md:text-xs text-parchment/70 font-sans tracking-wide whitespace-nowrap">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
