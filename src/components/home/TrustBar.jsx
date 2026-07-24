import React from 'react';

export default function TrustBar() {
  const trustItems = [
    { icon: '🚚', label: 'Free Worldwide Shipping' },
    { icon: '↩️', label: '30-Day Returns' },
    { icon: '✨', label: '18K Gold Plated' },
    { icon: '🌿', label: 'Hypoallergenic' }
  ];

  return (
    <div className="bg-velmora-ivory py-6 border-y border-velmora-gold-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-sm tracking-wide"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-velmora-charcoal font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
