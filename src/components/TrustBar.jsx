import React from 'react';

export default function TrustBar() {
  const trustItems = [
    { icon: '🚚', text: 'Free Worldwide Shipping' },
    { icon: '↩️', text: '30-Day Returns' },
    { icon: '✨', text: '18K Gold Plated' },
    { icon: '🌿', text: 'Hypoallergenic' }
  ];

  return (
    <div className="trust-bar">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 text-charcoal-700 uppercase tracking-wider text-xs"
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
