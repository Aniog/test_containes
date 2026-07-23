import React from "react";
import { Truck, RotateCcw, Sparkles, ShieldCheck } from "lucide-react";

const ITEMS = [
  {
    icon: Truck,
    label: "Free Worldwide Shipping",
    sub: "On orders over $80",
  },
  {
    icon: RotateCcw,
    label: "30-Day Returns",
    sub: "No questions asked",
  },
  {
    icon: Sparkles,
    label: "18K Gold Plated",
    sub: "Hand-finished, small batches",
  },
  {
    icon: ShieldCheck,
    label: "Hypoallergenic",
    sub: "Lead-free, nickel-free",
  },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Trust promises"
      className="bg-ivory-100 border-y border-cocoa-900/8"
    >
      <div className="max-w-site mx-auto px-5 md:px-8 lg:px-12 py-5 md:py-6">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className="flex items-center justify-center md:justify-start gap-3 text-center md:text-left"
              >
                <Icon
                  className="w-4 h-4 text-brass-700 flex-shrink-0"
                  strokeWidth={1.4}
                />
                <div className="min-w-0">
                  <p className="text-[12px] md:text-[13px] font-medium tracking-wide uppercase text-cocoa-900">
                    {item.label}
                  </p>
                  <p className="text-[11px] md:text-[12px] text-taupe-500 hidden sm:block">
                    {item.sub}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
