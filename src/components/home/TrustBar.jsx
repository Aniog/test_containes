import React from 'react';

export default function TrustBar() {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="bg-linen border-y border-sand">
      <div className="container-max px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {items.map((item, i) => (
          <span key={i} className="text-xs md:text-sm text-stone font-medium tracking-wide flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gold" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
