import { Truck, RotateCcw, Sparkles, Leaf } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="bg-cream border-y border-hairline">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-x divide-hairline">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-3 py-4 md:py-5 px-2 text-ink"
            >
              <Icon size={16} strokeWidth={1.5} className="text-champagne" />
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-medium">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
