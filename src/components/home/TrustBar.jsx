import React from 'react';

const TrustBar = () => {
  const trustItems = [
    { icon: '🚚', text: 'Free Worldwide Shipping' },
    { icon: '↩️', text: '30-Day Returns' },
    { icon: '✨', text: '18K Gold Plated' },
    { icon: '🌿', text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-cream border-y border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm tracking-wide text-charcoal"
            >
              <span className="text-base">{item.icon}</span>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
