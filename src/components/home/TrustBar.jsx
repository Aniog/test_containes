import { Truck, RotateCcw, ShieldCheck, Heart } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: ShieldCheck, label: "18K Gold Plated" },
  { icon: Heart, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-cream border-b border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-0 py-4">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-warm-gray">
              <item.icon size={16} strokeWidth={1.5} className="text-accent" />
              <span className="text-xs font-medium uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
