import { Truck, RefreshCw, Gem, Leaf } from "lucide-react";

const trustItems = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
];

export function TrustBar() {
  return (
    <div className="border-b border-velmora-hairline bg-velmora-cream">
      <div className="px-4 sm:px-6 lg:px-10 py-3 md:py-4">
        <div className="flex items-center justify-center md:justify-between gap-4 md:gap-6 overflow-x-auto hide-scrollbar">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 whitespace-nowrap text-velmora-taupe"
            >
              <item.icon size={16} className="text-velmora-gold" />
              <span className="text-[11px] md:text-xs uppercase tracking-widest">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
