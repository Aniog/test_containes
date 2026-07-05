import React from 'react';

const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

const TrustBar = () => {
  return (
    <div className="bg-brand-ivory border-b border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-center gap-4 md:gap-8 flex-wrap">
        {trustItems.map((item, i) => (
          <span key={item} className="flex items-center gap-2 text-[11px] md:text-xs tracking-wider uppercase text-brand-slate font-sans">
            {i > 0 && <span className="hidden md:inline text-brand-sand">·</span>}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-gold">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
