import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-ivory border-b border-stone">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-5">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-6 gap-y-2">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-xs md:text-sm text-charcoal">
              <item.icon size={16} className="text-champagne" strokeWidth={1.5} />
              <span className="tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
