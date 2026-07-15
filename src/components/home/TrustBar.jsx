import { Truck, RotateCcw, Award, Shield } from "lucide-react";

const trustItems = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Award, label: "18K Gold Plated" },
  { icon: Shield, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-warm-200 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 overflow-x-auto gap-6">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <item.icon className="w-3.5 h-3.5 text-gold-600" />
              <span className="text-[10px] md:text-xs tracking-wider uppercase text-warm-700 font-sans font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}