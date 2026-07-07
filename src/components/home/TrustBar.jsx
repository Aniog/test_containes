import React from 'react';

const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-bronze-950 text-bronze-300">
      <div className="section-padding flex flex-wrap items-center justify-center gap-6 md:gap-12 py-3">
        {items.map((text, i) => (
          <span key={i} className="text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-center">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
