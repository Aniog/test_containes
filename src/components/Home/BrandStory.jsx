import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-32 bg-velmora-cream">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute bottom-8 left-8 w-24 h-24 border-2 border-velmora-gold/50" />
          </div>

          {/* Right: Text Content */}
          <div className="max-w-lg">
            <h2
              className="font-serif text-3xl md:text-4xl mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Our Story
            </h2>
            <div className="hairline w-16 mb-8" />

            <p className="text-velmora-text-light mb-6 leading-relaxed">
              Velmora was born from a simple belief: luxury should be accessible,
              and jewelry should be treasured, not trend-chased.
            </p>

            <p className="text-velmora-text-light mb-6 leading-relaxed">
              Each piece in our collection is thoughtfully designed and crafted using
              18K gold plating over high-quality brass, ensuring a luxurious look
              and feel at a price point that allows you to build a meaningful collection.
            </p>

            <p className="text-velmora-text-light mb-10 leading-relaxed">
              We believe in creating jewelry that becomes part of your daily ritual —
              pieces that feel like you, whether you're dressing for a boardroom
              or a weekend getaway.
            </p>

            <Link
              to="/about"
              className="btn-premium btn-premium-outline inline-block"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
