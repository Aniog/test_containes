import { Shield, RotateCcw, Award, Heart } from "lucide-react";

const trustItems = [
  { icon: Shield, text: "Free Worldwide Shipping" },
  { icon: RotateCcw, text: "30-Day Returns" },
  { icon: Award, text: "18K Gold Plated" },
  { icon: Heart, text: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-cream-dark border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 md:py-5">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-2.5">
              <item.icon className="w-4 h-4 text-accent-gold flex-shrink-0" />
              <span className="text-[11px] md:text-xs text-text-body uppercase tracking-wider font-medium">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}