import React from 'react';

export default function TrustBar() {
  const trustItems = [
    { icon: '🚚', text: 'Free Worldwide Shipping' },
    { icon: '↩️', text: '30-Day Returns' },
    { icon: '✨', text: '18K Gold Plated' },
    { icon: '🌿', text: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-velmora-warm py-4 border-y border-velmora-nude">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm uppercase tracking-wider text-velmora-charcoal">
              <span className="text-lg">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}