import { Gem, Globe, Leaf, RotateCcw } from "lucide-react";

const ITEMS = [
  { icon: Globe, label: "Free Worldwide Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Gem, label: "18K Gold Plated" },
  { icon: Leaf, label: "Hypoallergenic" },
];

export function TrustBar() {
  return (
    <section aria-label="Our promises" className="border-b border-line bg-cream">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            className={
              "flex items-center justify-center gap-2.5 px-4 py-4 md:py-5 text-espresso " +
              (i < ITEMS.length - 1 ? "lg:border-r lg:border-line " : "") +
              (i % 2 === 0 ? "border-r border-line lg:border-r " : "") +
              (i < 2 ? "max-lg:border-b max-lg:border-line" : "")
            }
          >
            <Icon className="h-4 w-4 shrink-0 text-bronze" strokeWidth={1.5} />
            <span className="text-[10px] md:text-[11px] font-medium uppercase tracking-luxe">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
