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
      aria-label="Our promises"
      className="bg-ivory-light border-b border-hairline"
    >
      <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-12">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-hairline">
          {items.map((label, i) => (
            <li key={label} className="py-4 md:py-5 flex items-center justify-center gap-3 text-cocoa text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-medium">
              <span className="hidden md:inline-block w-1 h-1 rounded-full bg-claret" aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
