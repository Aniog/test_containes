import { Truck, RefreshCw, Sparkles, Heart } from "lucide-react";

const ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RefreshCw, label: "30-Day Returns" },
  { icon: Sparkles, label: "18K Gold Plated" },
  { icon: Heart, label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Our promises"
      className="bg-bone border-y border-hairline"
    >
      <div className="container-x py-5 md:py-6">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className="flex items-center gap-3 text-espresso"
              >
                <Icon
                  className="w-4 h-4 text-champagne"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-eyebrow uppercase tracking-[0.2em]">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
