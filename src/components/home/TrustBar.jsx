import React from "react";

const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <div className="bg-cream-warm border-y border-line">
      <div className="container-page py-4 overflow-hidden">
        <ul className="flex items-center justify-center md:justify-between gap-8 md:gap-4 overflow-x-auto scroll-hide">
          {ITEMS.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-widest2 text-mushroom whitespace-nowrap"
            >
              <span className="hidden md:inline-block w-1 h-1 rounded-full bg-gold" />
              {i > 0 && <span className="md:hidden w-1 h-1 rounded-full bg-gold" />}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
