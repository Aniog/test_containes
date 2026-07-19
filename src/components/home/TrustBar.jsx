import React from 'react';

export default function TrustBar() {
  const trustItems = [
    { text: 'Free Worldwide Shipping', subtext: 'On orders over $50' },
    { text: '30-Day Returns', subtext: 'Hassle-free returns' },
    { text: '18K Gold Plated', subtext: 'Premium quality' },
    { text: 'Hypoallergenic', subtext: 'Safe for sensitive skin' },
  ];

  return (
    <section className="bg-velmora-cream py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="text-center">
              <p className="font-sans text-xs md:text-sm tracking-wider uppercase text-velmora-charcoal">
                {item.text}
              </p>
              <p className="text-xs text-gray-600 mt-1">{item.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
