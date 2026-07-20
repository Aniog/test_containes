import { Truck, RotateCcw, Sparkles, Shield } from "lucide-react";

const items = [
  { Icon: Truck, text: "Free Worldwide Shipping" },
  { Icon: RotateCcw, text: "30-Day Returns" },
  { Icon: Sparkles, text: "18K Gold Plated" },
  { Icon: Shield, text: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-obsidian py-3.5 px-4">
      <div className="max-w-7xl mx-auto">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {items.map(({ Icon, text }, i) => (
            <li key={i} className="flex items-center gap-2">
              <Icon size={13} strokeWidth={1.5} className="text-gold flex-shrink-0" />
              <span className="text-[11px] font-sans uppercase tracking-widest text-ivory/80 font-medium whitespace-nowrap">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
