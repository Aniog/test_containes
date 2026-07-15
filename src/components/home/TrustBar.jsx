import { Truck, RotateCcw, ShieldCheck, Heart } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: ShieldCheck, label: "18K Gold Plated" },
  { icon: Heart, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-ink text-white">
      <div className="section-padding py-3.5">
        <div className="flex items-center justify-center gap-6 md:gap-10 overflow-x-auto scrollbar-hide">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 whitespace-nowrap flex-shrink-0">
              <item.icon className="w-3.5 h-3.5 text-velmora-gold" />
              <span className="text-[11px] md:text-xs tracking-wide text-white/80">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
