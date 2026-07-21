import React from 'react';

const trustItems = [
  { icon: '🌍', text: 'Free Worldwide Shipping' },
  { icon: '↩️', text: '30-Day Returns' },
  { icon: '✨', text: '18K Gold Plated' },
  { icon: '💎', text: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <section className="bg-[rgb(var(--color-surface))] py-6 border-y border-[rgb(var(--color-border))]">
      <div className="container-velmora">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 font-sans text-sm uppercase tracking-wider"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
