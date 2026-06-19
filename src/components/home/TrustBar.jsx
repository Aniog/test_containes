import React from 'react';

export default function TrustBar() {
  const trustItems = [
    { id: 1, text: 'Free Worldwide Shipping' },
    { id: 2, text: '30-Day Returns' },
    { id: 3, text: '18K Gold Plated' },
    { id: 4, text: 'Hypoallergenic' },
  ];

  return (
    <div className="bg-velmora-warm py-4 border-y border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {trustItems.map((item) => (
            <div
              key={item.id}
              className="text-sm tracking-wider uppercase text-velmora-charcoal"
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
