import React from 'react';

export default function TrustBar() {
  const trustItems = [
    { icon: '🚚', text: 'Free Worldwide Shipping' },
    { icon: '↩️', text: '30-Day Returns' },
    { icon: '✨', text: '18K Gold Plated' },
    { icon: '🌿', text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-velmora-warm py-4 md:py-6 border-y border-velmora-border">
      <div className="container-max px-4 md:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-sm text-velmora-charcoal"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="uppercase tracking-wider font-medium text-xs md:text-sm">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
