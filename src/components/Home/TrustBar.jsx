import React from 'react';

const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic'
];

export default function TrustBar() {
  return (
    <section className="bg-velmora-cream py-6 border-y border-velmora-beige">
      <div className="container-velmora">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 trust-badge"
            >
              <div className="w-1 h-1 rounded-full bg-velmora-gold" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}