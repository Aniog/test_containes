import { Truck, RotateCcw, Sparkles, ShieldCheck } from "lucide-react";

const trustItems = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <div className="bg-cream border-b border-stonehair">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-4">
        <div className="flex items-center justify-center md:justify-between gap-6 overflow-x-auto hide-scrollbar">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-taupe whitespace-nowrap"
            >
              <item.icon className="w-4 h-4 text-accent" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
