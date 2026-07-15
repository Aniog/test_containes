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
      aria-label="Brand promises"
      className="bg-parchment border-y border-line/70"
    >
      <div className="container-shell py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:gap-x-12 text-center">
          {ITEMS.map((label, i) => (
            <li
              key={label}
              className="flex items-center gap-x-8 sm:gap-x-12 text-[11px] uppercase tracking-[0.24em] text-ink/80"
            >
              <span>{label}</span>
              {i < ITEMS.length - 1 && (
                <span aria-hidden="true" className="w-px h-3 bg-line hidden sm:inline-block" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
