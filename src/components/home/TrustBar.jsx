import { Shield, RotateCcw, Diamond, Sparkles } from "lucide-react";

const trustItems = [
  { icon: Diamond, label: "18K Gold Plated" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Shield, label: "Free Worldwide Shipping" },
  { icon: Sparkles, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-dark border-y border-velmora-gold/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 overflow-x-auto gap-6">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-velmora-light/80 shrink-0"
            >
              <item.icon size={14} className="text-velmora-gold" />
              <span className="text-xs tracking-wider uppercase whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}