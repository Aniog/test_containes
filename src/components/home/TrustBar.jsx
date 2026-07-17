import React from 'react';

const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic'
];

const TrustBar = () => {
  return (
    <section className="bg-velmora-stone py-4 overflow-hidden border-b border-velmora-stone">
      <div className="flex justify-around items-center gap-8 whitespace-nowrap overflow-x-auto no-scrollbar px-6 md:px-12">
        {trustItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-velmora-gold rounded-full" />
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-velmora-onyx/80">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
