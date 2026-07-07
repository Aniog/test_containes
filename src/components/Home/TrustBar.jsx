import React from 'react';

const TrustBar = () => {
  const trustItems = [
    { icon: '🚚', label: 'Free Worldwide Shipping' },
    { icon: '↩️', label: '30-Day Returns' },
    { icon: '✨', label: '18K Gold Plated' },
    { icon: '🌿', label: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-velmora-cream border-y border-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-velmora-charcoal"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
