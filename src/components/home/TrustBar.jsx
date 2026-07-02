import { Truck, RotateCcw, Gem, HeartPulse } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: HeartPulse, label: "Hypoallergenic" },
];

export function TrustBar() {
  return (
    <section className="border-b border-hairline bg-cream py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-10">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-mocha"
            >
              <item.icon className="h-3.5 w-3.5 text-gold" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
