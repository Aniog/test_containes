import React from "react";

const items = [
  { label: "Free Worldwide Shipping" },
  { label: "30-Day Returns" },
  { label: "18K Gold Plated" },
  { label: "Hypoallergenic" },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Brand promises"
      className="bg-ivory-soft border-y border-hairline"
    >
      <div className="container-wide">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-hairline">
          {items.map((it, idx) => (
            <li
              key={it.label}
              className={`flex items-center justify-center py-4 md:py-5 ${
                idx < 2 ? "border-b md:border-b-0 border-hairline" : ""
              }`}
            >
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest-2 text-ink-muted text-center font-medium">
                {it.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
