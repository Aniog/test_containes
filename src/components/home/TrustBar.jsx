import { Truck, RotateCcw, Gem, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-hairline bg-cream">
      <div className="mx-auto grid max-w-editorial grid-cols-2 divide-x divide-hairline md:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-2.5 px-4 py-5 text-center md:px-6 md:py-6"
          >
            <Icon size={18} className="shrink-0 text-gold" strokeWidth={1.5} />
            <span className="font-sans text-[10px] uppercase tracking-widest2 text-ink md:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
