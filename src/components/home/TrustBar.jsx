import { ShieldCheck, RotateCcw, Sparkles, Heart } from "lucide-react";

const trustItems = [
  { icon: Sparkles, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: ShieldCheck, label: "18K Gold Plated" },
  { icon: Heart, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="border-b border-[#2a2a2a] bg-surface/50">
      <div className="max-w-page mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2a2a2a]">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="bg-background flex items-center justify-center gap-2.5 py-4 px-4"
              >
                <Icon className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-xs text-secondary font-sans tracking-wide">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}