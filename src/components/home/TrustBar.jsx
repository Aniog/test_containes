import React from 'react';

export default function TrustBar() {
  const trustItems = [
    { icon: '🚚', text: 'Free Worldwide Shipping' },
    { icon: '↩️', text: '30-Day Returns' },
    { icon: '✨', text: '18K Gold Plated' },
    { icon: '🌿', text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-velmora-cream py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-3 font-sans text-sm text-velmora-charcoal"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="uppercase tracking-wider">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
