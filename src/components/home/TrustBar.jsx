import React from 'react';

export default function TrustBar() {
  const trustItems = [
    { icon: '🚚', text: 'Free Worldwide Shipping' },
    { icon: '↩️', text: '30-Day Returns' },
    { icon: '✨', text: '18K Gold Plated' },
    { icon: '🌿', text: 'Hypoalergenic' }
  ];

  return (
    <div className="bg-velmora-cream border-y border-velmora-warmGray/10">
      <div className="container-custom py-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-sm text-velmora-charcoal"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="uppercase tracking-wider font-medium text-xs">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
