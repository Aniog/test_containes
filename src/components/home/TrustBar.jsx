import React from 'react';

const TrustBar = () => {
  const items = [
    'Free Worldwide Shipping',
    '30-Day Returns',
    '18K Gold Plated',
    'Hypoallergenic'
  ];

  return (
    <section className="bg-white border-b py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-4">
            <span className="text-[10px] uppercase letter-spacing-wide text-primary/60">{item}</span>
            {index < items.length - 1 && <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-accent-gold/30" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
