import React from 'react';

const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-charcoal border-t border-b border-white/5">
      <div className="container-wide section-padding">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-4 overflow-x-auto">
          {items.map((item, i) => (
            <span
              key={i}
              className="text-[11px] md:text-xs tracking-wider uppercase text-white/50 whitespace-nowrap flex-shrink-0"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
