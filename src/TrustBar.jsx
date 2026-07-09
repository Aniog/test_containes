import React from 'react';

const TRUST_ITEMS = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-velmora-charcoal text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 py-3 md:py-4">
          {TRUST_ITEMS.map((item) => (
            <span key={item} className="text-[11px] md:text-xs tracking-[0.12em] uppercase text-white/70">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
