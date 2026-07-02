import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic',
  ];

  return (
    <section className="bg-zinc-50 border-b border-zinc-100 py-4 overflow-hidden">
      <div className="flex justify-around items-center gap-12 px-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-500">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
