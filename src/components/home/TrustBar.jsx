import React from 'react';

export default function TrustBar() {
  const trustItems = [
    { icon: '🚚', text: 'Free Worldwide Shipping' },
    { icon: '↩️', text: '30-Day Returns' },
    { icon: '✨', text: '18K Gold Plated' },
    { icon: '🌿', text: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-velmora-nude-light py-4 border-y border-velmora-nude">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm tracking-wide">
              <span className="text-lg">{item.icon}</span>
              <span className="text-velmora-charcoal">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
