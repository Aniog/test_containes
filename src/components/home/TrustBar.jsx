import { Truck, RotateCcw, Shield, Sparkles } from "lucide-react";

const trustItems = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Shield, label: "18K Gold Plated" },
  { icon: Sparkles, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5 py-4 px-2 border-r border-cream-200 last:border-r-0"
            >
              <item.icon className="w-3.5 h-3.5 text-clay-500 flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-sans text-clay-600 uppercase tracking-wider whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}