import { Truck, RotateCcw, Sparkles, Heart } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: Heart, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-ink/10 bg-velmora-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-5 md:px-10 md:py-6 lg:px-16">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 md:justify-between">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 text-velmora-ink"
            >
              <Icon className="h-[14px] w-[14px] text-velmora-gold-deep" strokeWidth={1.4} />
              <span className="text-[11px] uppercase tracking-[0.22em]">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
