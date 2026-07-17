import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 lg:py-32 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-velmora-gold/10 hidden lg:block" />
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2
                className="font-serif text-4xl lg:text-5xl text-velmora-charcoal mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Our Story
              </h2>
              <div className="w-16 h-px bg-velmora-gold mb-8" />
            </div>

            <p className="text-lg text-velmora-graphite leading-relaxed">
              At Velmora, we believe that jewelry should be as enduring as the moments it marks.
              Each piece is thoughtfully designed and crafted with demi-fine materials,
              bridging the gap between precious and accessible.
            </p>

            <p className="text-lg text-velmora-graphite leading-relaxed">
              Our 18K gold-plated pieces are made to be worn, cherished, and passed down —
              quiet luxury for life's everyday elegance.
            </p>

            <Link
              to="/about"
              className="inline-block text-sm uppercase tracking-wider text-velmora-gold border-b border-velmora-gold pb-1 hover:text-velmora-gold-dark hover:border-velmora-gold-dark transition-colors"
            >
              Discover Our Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
