import React from "react";

const ITEMS = [
  "Crafted to be treasured",
  "Free worldwide shipping over $80",
  "30-day returns on unworn pieces",
  "Hand-finished in small batches",
  "Hypoallergenic · Nickel-free",
  "Designed in Paris",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section className="bg-cream border-y border-ink/10 overflow-hidden" aria-label="Atelier promises">
      <div className="vm-marquee py-4 md:py-5">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-6 px-6 whitespace-nowrap vm-serif text-2xl md:text-3xl text-ink/80"
          >
            <span className="italic font-light">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}
