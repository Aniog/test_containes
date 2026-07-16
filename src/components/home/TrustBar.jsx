import { Truck, RotateCcw, Sparkles, Heart } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: Heart, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-ivory-dark border-y border-stone-light/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-4">
          {items.map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span className="font-inter text-xs uppercase tracking-widest text-espresso-light whitespace-nowrap">
                {label}
              </span>
              {i < items.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-stone-light ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
