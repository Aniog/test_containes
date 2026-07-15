import React from 'react';

const TrustBar = () => {
  const trustItems = [
    { icon: '🚚', text: 'Free Worldwide Shipping' },
    { icon: '↩️', text: '30-Day Returns' },
    { icon: '✨', text: '18K Gold Plated' },
    { icon: '🌿', text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-cream py-4 lg:py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-2 trust-badge"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
