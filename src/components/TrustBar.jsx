import { Truck, RotateCcw, Gem, HeartPulse } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: HeartPulse, label: "Hypoallergenic" },
];

export function TrustBar() {
  return (
    <section className="border-b border-stone-200 bg-cream py-3">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 md:px-8 lg:px-12">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-xs uppercase tracking-widest text-warm-gray">
            <item.icon size={14} className="text-gold" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
