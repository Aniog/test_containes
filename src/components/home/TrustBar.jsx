import React from "react";

const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  // Duplicate for seamless marquee on mobile
  const allItems = [...ITEMS, ...ITEMS];
  return (
    <section
      aria-label="Our promises"
      className="bg-ink border-y border-bone/10 overflow-hidden"
    >
      <div className="md:hidden flex animate-marquee whitespace-nowrap py-3.5">
        {allItems.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-6 text-bone/85">
            <span className="w-1 h-1 rounded-full bg-gold-light" />
            <span className="text-[10px] tracking-wide-4 uppercase font-medium">
              {item}
            </span>
          </div>
        ))}
      </div>
      <div className="hidden md:block mx-auto max-w-8xl px-8 lg:px-12">
        <ul className="grid grid-cols-4 divide-x divide-bone/10">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-center justify-center gap-2.5 py-4 text-bone/85"
            >
              <span className="w-1 h-1 rounded-full bg-gold-light" />
              <span className="text-[10px] tracking-wide-4 uppercase font-medium">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
