import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-velmora-bg-alt overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200&q=80"
            alt="Velmora atelier - hands crafting fine jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <p className="uppercase tracking-[0.15em] text-xs text-velmora-gold-dark mb-3">Since 2018</p>
          <h2 className="heading-serif text-4xl md:text-5xl mb-6">Our Story</h2>
          <div className="space-y-4 text-velmora-muted leading-relaxed">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
              not exclusive. We design demi-fine pieces that feel like heirlooms from the start.
            </p>
            <p>
              Each piece is crafted with 18K gold plating over solid brass, set with carefully 
              selected crystals. We work with small ateliers who share our commitment to quality 
              and care.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-block mt-8 text-sm tracking-[0.08em] uppercase border-b border-velmora-dark pb-0.5 hover:text-velmora-gold-dark hover:border-velmora-gold-dark"
          >
            Read More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
