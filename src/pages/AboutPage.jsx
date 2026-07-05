import React from 'react';

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="text-xs tracking-[0.3em] uppercase text-[#B8860B] mb-4 text-center">Our Story</p>
        <h1 className="serif-heading text-5xl md:text-6xl font-light text-center text-[#1A1A1A] mb-12">
          Where Elegance<br />Meets Everyday
        </h1>
        <div className="w-12 h-px bg-[#B8860B] mx-auto mb-12" />

        <div className="prose prose-lg mx-auto text-[#6B6560] leading-relaxed">
          <p className="mb-6">
            Velmora was born from a simple belief: that luxury jewelry shouldn't be reserved for special occasions. Every piece in our collection is designed to be worn, loved, and treasured — day after day.
          </p>
          <p className="mb-6">
            Founded in 2024, we set out to bridge the gap between fast fashion jewelry and fine jewelry that costs a fortune. Our demi-fine collection uses 18K gold plating over responsibly sourced brass, ensuring each piece is both beautiful and hypoallergenic.
          </p>
          <p className="mb-6">
            Our designs draw inspiration from nature, architecture, and the quiet confidence of the modern woman. Each piece is thoughtfully crafted to transition seamlessly from boardroom to brunch, from date night to weekend errands.
          </p>
          <p className="mb-6">
            We believe that the best accessories are the ones you never want to take off. That's why every Velmora piece is designed with comfort, durability, and timeless style in mind.
          </p>
          <p>
            Welcome to Velmora. Welcome to everyday luxury.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          {[
            { number: '18K', label: 'Gold Plated' },
            { number: '100%', label: 'Hypoallergenic' },
            { number: '30', label: 'Day Returns' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="serif-heading text-4xl text-[#B8860B] mb-2">{stat.number}</p>
              <p className="text-xs tracking-widest uppercase text-[#6B6560]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
