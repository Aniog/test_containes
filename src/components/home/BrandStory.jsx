import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
            alt="Velmora jewelry craftsmanship"
            className="w-full aspect-square object-cover"
          />
          <div className="absolute inset-0 border-2 border-velmora-gold/30 m-8" />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl">Our Story</h2>
          <div className="elegant-divider w-24 my-6" />
          <p className="text-lg leading-relaxed text-velmora-charcoal-light">
            At Velmora, we believe that jewelry should be as unique as the moments it celebrates.
            Founded with a passion for craftsmanship and an eye for timeless design, we create
            demi-fine pieces that bridge the gap between everyday elegance and special occasion luxury.
          </p>
          <p className="text-lg leading-relaxed text-velmora-charcoal-light">
            Each piece in our collection is thoughtfully designed and crafted using premium materials,
            ensuring that your Velmora jewelry becomes a treasured part of your story.
          </p>
          <Link
            to="/about"
            className="inline-block border-b-2 border-velmora-gold text-velmora-charcoal hover:text-velmora-gold transition-colors tracking-wide text-sm mt-4"
          >
            DISCOVER OUR JOURNEY →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;