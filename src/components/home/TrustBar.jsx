import { Truck, RotateCcw, Sparkles, Leaf } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="bg-ink text-cream border-y border-cream/10">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-4">
        <ul className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 whitespace-nowrap text-[11px] tracking-[0.22em] uppercase text-cream/85"
            >
              <Icon size={15} strokeWidth={1.4} className="text-gold-soft shrink-0" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
