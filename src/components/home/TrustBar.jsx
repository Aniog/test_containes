import { Truck, RotateCcw, ShieldCheck, Heart } from "lucide-react";

const benefits = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: ShieldCheck, label: "18K Gold Plated" },
  { icon: Heart, label: "Hypoallergenic" },
];

export function TrustBar() {
  return (
    <section className="border-b border-taupe bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex overflow-x-auto hide-scrollbar items-center justify-between gap-6 md:gap-0">
          {benefits.map((benefit) => (
            <div
              key={benefit.label}
              className="flex items-center gap-2 text-espresso whitespace-nowrap"
            >
              <benefit.icon className="w-4 h-4 text-gold" />
              <span className="text-xs uppercase tracking-wider">{benefit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
