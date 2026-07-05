import React from "react";

const ITEMS = [
  "Free worldwide shipping over $80",
  "30-day returns on unworn pieces",
  "18K gold plated · Hypoallergenic",
  "Crafted in small batches",
];

const AnnouncementBar = () => {
  // Duplicate items so the marquee loops seamlessly
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="bg-ink text-ivory overflow-hidden">
      <div className="flex whitespace-nowrap py-2.5 animate-marquee">
        {loop.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 font-sans text-[10px] uppercase tracking-eyebrow text-ivory/85"
          >
            <span aria-hidden="true" className="text-gold">·</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
