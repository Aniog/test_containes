import { Truck, RotateCcw, Gem, Leaf } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="border-b border-[#1A1816]/10 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 overflow-x-auto gap-6 no-scrollbar">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 whitespace-nowrap">
              <Icon size={14} className="text-[#B8966A]" strokeWidth={1.5} />
              <span className="text-[11px] md:text-xs tracking-[0.08em] text-[#6E6862]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
