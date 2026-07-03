import React from 'react';
import { Link } from 'react-router-dom';

export default function TrustBar() {
  const trustItems = [
    { icon: '📦', text: 'Free Worldwide Shipping' },
    { icon: '↩️', text: '30-Day Returns' },
    { icon: '✨', text: '18K Gold Plated' },
    { icon: '🌿', text: 'Hypoallergenic' },
  ];

  return (
    <section className="bg-[#F8F5F0] py-6 border-y border-[#D4CFC8]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm uppercase tracking-wider text-[#2A2520]">
              <span className="text-lg">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
