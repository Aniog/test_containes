import { Shield, Truck, RotateCcw, Sparkles } from "lucide-react";

const trustItems = [
  { icon: Truck, text: "Free Worldwide Shipping" },
  { icon: RotateCcw, text: "30-Day Returns" },
  { icon: Sparkles, text: "18K Gold Plated" },
  { icon: Shield, text: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-velmora-border bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-2">
              <item.icon className="w-4 h-4 text-velmora-gold flex-shrink-0" />
              <span className="text-xs md:text-sm text-velmora-muted tracking-wider uppercase whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}