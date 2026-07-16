import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-velmora-cream">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image side */}
        <div className="aspect-[4/5] md:aspect-auto bg-gradient-to-br from-velmora-charcoal to-velmora-dark flex items-center justify-center">
          <span className="font-serif text-velmora-gold/20 text-[12rem] italic">V</span>
        </div>

        {/* Text side */}
        <div className="flex items-center px-6 md:px-16 lg:px-24 py-16 md:py-0">
          <div className="max-w-md">
            <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-taupe mb-4">
              Our Story
            </p>
            <h2 className="velmora-heading text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
              Jewelry That Lives<br />With You
            </h2>
            <div className="w-12 h-px bg-velmora-gold/40 mb-6" />
            <p className="text-sm md:text-base text-velmora-taupe leading-relaxed mb-4">
              Velmora was born from the belief that fine jewelry shouldn't be locked away for special occasions. Our pieces are crafted to be worn, layered, and lived in — every single day.
            </p>
            <p className="text-sm md:text-base text-velmora-taupe leading-relaxed mb-8">
              Each design is hand-finished in 18K gold plating over brass or sterling silver, using ethically sourced crystals and materials. We work directly with artisan workshops to deliver demi-fine quality at a direct-to-consumer price.
            </p>
            <Link to="/shop" className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-dark border-b border-velmora-gold pb-1.5 hover:text-velmora-gold transition-colors">
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
