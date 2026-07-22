import { Gem, Globe, Leaf, RotateCcw } from "lucide-react";

const ITEMS = [
  { icon: Globe, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="border-b border-hairline bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-4 px-5 py-5 md:grid-cols-4 md:px-8">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2.5 text-espresso"
          >
            <Icon size={16} className="text-gold" strokeWidth={1.5} />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-cocoa">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
