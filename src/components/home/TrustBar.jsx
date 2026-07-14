import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-velmora-bg border-b border-velmora-border py-4 overflow-hidden">
      <div className="flex items-center justify-center space-x-8 md:space-x-16">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center whitespace-nowrap">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium text-velmora-muted">
              {item}
            </span>
            {idx < items.length - 1 && (
              <span className="ml-8 md:ml-16 text-velmora-border text-xs">·</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
