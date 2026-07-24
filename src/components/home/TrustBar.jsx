import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <div className="border-b border-border bg-white">
      <div className="container-editorial">
        <div className="flex flex-wrap items-center justify-center gap-6 py-3 md:gap-10">
          {items.map((item) => (
            <span key={item} className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-secondary">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
