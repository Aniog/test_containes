import { Truck, RotateCcw, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: ShieldCheck, label: "18K Gold Plated" },
  { icon: Sparkles, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-ivory border-y border-velmora-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-2 py-3.5">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-velmora-charcoal-light"
            >
              <item.icon className="w-3.5 h-3.5 text-velmora-gold" />
              <span className="text-xs tracking-wider uppercase font-sans font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}