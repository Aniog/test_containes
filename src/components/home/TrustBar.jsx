import { Truck, RotateCcw, Gem, Leaf } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-ink/10 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-4 px-5 py-5 md:grid-cols-4 md:px-10">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2.5 text-espresso"
          >
            <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
