import { Truck, RefreshCw, Shield, Gem } from "lucide-react";
import { trustItems } from "@/data/products";

const ICONS = [Truck, RefreshCw, Shield, Gem];

export default function TrustBar() {
  return (
    <section
      aria-label="Promises"
      className="border-y border-mist bg-ivory"
    >
      <div className="container-editorial">
        <ul className="grid grid-cols-2 divide-x divide-mist md:grid-cols-4">
          {trustItems.map((item, i) => {
            const Icon = ICONS[i] || Gem;
            return (
              <li
                key={item.id}
                className="flex items-center justify-center gap-3 px-4 py-5 text-center md:py-6"
              >
                <Icon
                  size={16}
                  strokeWidth={1.5}
                  className="flex-shrink-0 text-gold-deep"
                />
                <span className="font-sans text-[12px] font-medium uppercase tracking-product text-charcoal">
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
