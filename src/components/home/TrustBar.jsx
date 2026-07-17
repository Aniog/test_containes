import React from 'react';

const trusts = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="bg-charcoal text-cream/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-3 text-[10px] md:text-[11px] tracking-widest uppercase overflow-x-auto whitespace-nowrap">
          {trusts.map((text, i) => (
            <span key={text} className="flex items-center gap-6">
              {i > 0 && <span className="w-px h-3 bg-cream/20 inline-block" />}
              <span>{text}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
