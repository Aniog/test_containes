import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="aspect-square bg-velmora-warm overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-velmora-gold/20 to-velmora-warm flex items-center justify-center">
              <div className="text-center">
                <div className="font-serif text-6xl text-velmora-gold/30 mb-4">V</div>
                <p className="text-velmora-charcoal/50 italic">Brand imagery</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Crafted with
              <br />
              <em className="text-velmora-gold">Intention</em>
            </h2>
            <div className="w-16 h-px bg-velmora-gold mb-8" />
            <p className="text-velmora-graphite leading-relaxed mb-6">
              At Velmora, we believe jewelry should be as unique as the woman who wears it.
              Each piece in our collection is thoughtfully designed, using only the finest
              18K gold plating and hypoallergenic materials.
            </p>
            <p className="text-velmora-graphite leading-relaxed mb-8">
              Our demi-fine approach means you get the luxury look and feel of solid gold
              at a more accessible price point. Because everyone deserves to feel treasured.
            </p>
            <Link
              to="/about"
              className="inline-block font-serif text-lg text-velmora-gold hover:text-velmora-gold-dark transition-colors border-b-2 border-velmora-gold pb-1"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
