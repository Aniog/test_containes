import React from "react";

const ITEMS = [
  "Free Worldwide Shipping",
  "30-Day Returns",
  "18K Gold Plated",
  "Hypoallergenic",
];

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-border bg-velmora-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-3 text-center md:flex-row md:text-left">
        {ITEMS.map((item, idx) => (
          <React.Fragment key={item}>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-velmora-dark">
              {item}
            </span>
            {idx < ITEMS.length - 1 && (
              <span className="hidden h-4 w-px bg-velmora-border md:block" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
