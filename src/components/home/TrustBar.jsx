// Trust Bar Component
import React from 'react';

const TrustBar = () => {
  const trustItems = [
    { icon: '🚚', text: 'Free Worldwide Shipping' },
    { icon: '↩️', text: '30-Day Returns' },
    { icon: '✨', text: '18K Gold Plated' },
    { icon: '🌿', text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-velmora-cream border-y border-velmora-border-light py-4">
      <div className="container-premium">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-velmora-text-secondary">
              <span className="text-lg">{item.icon}</span>
              <span className="tracking-wide">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
