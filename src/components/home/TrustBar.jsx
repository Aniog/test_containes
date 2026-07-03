import React from "react";

const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section
      aria-label="Our promise"
      className="bg-ink text-ivory border-y border-ivory/10"
    >
      <div className="container-page py-3.5 overflow-x-auto no-scrollbar">
        <ul className="flex items-center justify-between gap-6 min-w-max md:min-w-0">
          {ITEMS.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-6 text-[11px] tracking-eyebrow uppercase text-ivory/80"
            >
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="hidden md:inline-block w-1 h-1 rounded-full bg-gold-soft/60"
                />
              )}
              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                <span className="w-1 h-1 rounded-full bg-gold-soft md:hidden" />
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
