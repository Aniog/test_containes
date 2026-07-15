import { Truck, RotateCcw, Sparkles, Heart } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: Heart, label: "Hypoallergenic" },
];

export function TrustBar() {
  return (
    <section className="border-b border-velmora-sand bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-5 py-4 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-xs md:text-sm text-velmora-ink/80">
              <item.icon className="w-4 h-4 text-velmora-gold" />
              <span className="font-medium uppercase tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
