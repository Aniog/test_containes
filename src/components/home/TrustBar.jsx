import React from "react";

const items = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section
      aria-label="Trust and service"
      className="bg-espresso text-canvas border-y border-espresso"
    >
      <div className="max-w-editorial mx-auto px-6 md:px-10">
        <ul className="flex items-center justify-between gap-6 overflow-x-auto no-scrollbar py-3.5">
          {items.map((it, idx) => (
            <li
              key={it}
              className="flex items-center gap-6 whitespace-nowrap"
            >
              <span className="text-[10px] md:text-[11px] uppercase tracking-widest2 font-medium text-canvas/90">
                {it}
              </span>
              {idx < items.length - 1 && (
                <span aria-hidden="true" className="text-canvas/30">·</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
