import { Truck, RotateCcw, Sparkles, ShieldCheck } from "lucide-react";

const items = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section className="bg-ink text-cream border-y border-cream/10">
      <div className="max-w-editorial mx-auto px-6 lg:px-10">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 lg:gap-y-0 py-5 lg:py-6">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-3 text-center"
            >
              <Icon
                className="w-4 h-4 text-gold flex-shrink-0"
                strokeWidth={1.4}
              />
              <span className="text-[11px] sm:text-[12px] tracking-[0.25em] uppercase text-cream/90">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
