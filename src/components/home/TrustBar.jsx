import React from 'react';

const TrustBar = () => {
  const trustItems = [
    { text: 'Free Worldwide Shipping', icon: '🚚' },
    { text: '30-Day Returns', icon: '↩️' },
    { text: '18K Gold Plated', icon: '✨' },
    { text: 'Hypoallergenic', icon: '🌿' }
  ];

  return (
    <div className="bg-ivory py-6 border-y border-sand">
      <div className="container-velmora">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-gold text-lg">{item.icon}</span>
              <span className="text-sm tracking-wide text-charcoal/80">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
