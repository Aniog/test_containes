import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-border bg-velmora-surface/50">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="w-4 h-4 text-velmora-gold" strokeWidth={1.5} />
              <span className="text-xs tracking-[0.1em] text-velmora-text-secondary uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
