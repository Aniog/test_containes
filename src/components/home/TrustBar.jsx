import { Truck, RotateCcw, Sparkles, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: ShieldCheck, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Our promise"
      className="bg-ivory-soft border-y border-hairline"
    >
      <div className="container-velmora py-4 md:py-5">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6 md:gap-4">
          {ITEMS.map((it) => {
            const Icon = it.icon;
            return (
              <li
                key={it.label}
                className="flex items-center justify-center md:justify-start gap-3 text-center md:text-left"
              >
                <Icon
                  className="w-4 h-4 text-bronze-deep flex-shrink-0"
                  strokeWidth={1.5}
                />
                <span className="text-[11px] uppercase tracking-[0.2em] text-espresso-soft font-medium">
                  {it.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
