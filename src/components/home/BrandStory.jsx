import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-32 bg-base-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-base-muted">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight">
              Our Story
            </h2>
            <div className="w-16 h-px bg-gold" />
            <p className="text-ink-muted text-lg leading-relaxed">
              Velmora was born from a simple belief: that fine jewelry should be accessible, 
              meaningful, and designed to be worn every day. We create demi-fine pieces that 
              blend the warmth of gold with contemporary design — jewelry that feels as good 
              as it looks.
            </p>
            <p className="text-ink-muted leading-relaxed">
              Every piece is crafted with care, using ethically sourced materials and 
              hypoallergenic finishes. From our studio to your jewelry box, we ensure 
              quality at every step.
            </p>
            <Link
              to="/about"
              className="inline-block mt-4 text-gold font-medium tracking-widest uppercase text-sm hover:text-gold-light transition-colors border-b border-gold/30 hover:border-gold pb-1"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
