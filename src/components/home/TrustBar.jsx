import { Globe, RotateCcw, Sparkles, Heart } from "lucide-react";

const trustItems = [
  { icon: Globe, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: Heart, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-parchment border-b border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 py-3.5">
          {trustItems.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon size={13} strokeWidth={1.5} className="text-gold" />
              <span className="font-inter text-xs uppercase tracking-widest text-umber">
                {item.label}
              </span>
              {i < trustItems.length - 1 && (
                <span className="hidden md:block w-px h-3 bg-linen ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
