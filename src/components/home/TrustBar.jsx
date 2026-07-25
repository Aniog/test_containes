import React from 'react';

const TrustBar = () => {
  const trustItems = [
    { icon: '🚚', text: 'Free Worldwide Shipping' },
    { icon: '↩️', text: '30-Day Returns' },
    { icon: '✨', text: '18K Gold Plated' },
    { icon: '🌿', text: 'Hypoallergenic' }
  ];
  
  return (
    <section className="bg-cream py-4 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-2 text-sm font-medium tracking-wide"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
