import React from "react";
import Hairline from "@/components/ui/Hairline";

const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

const TrustBar = () => {
  return (
    <section className="bg-ivory border-b border-ink/10">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-4">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-6">
          {ITEMS.map((item, i) => (
            <li
              key={item}
              className="flex items-center justify-center md:justify-center text-center font-sans text-[10px] md:text-[11px] uppercase tracking-eyebrow text-ink/80"
            >
              <span aria-hidden="true" className="hidden md:inline-block text-gold mr-3">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrustBar;
