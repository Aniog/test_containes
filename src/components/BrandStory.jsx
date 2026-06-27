import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden bg-velmora-gray-100">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative Element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-velmora-gold hidden lg:block" />
        </div>

        {/* Right: Text Content */}
        <div className="max-w-lg">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Our Story
          </h2>
          <div className="hairline w-16 mb-6" />
          <p className="text-lg mb-4 leading-relaxed text-velmora-gray-700">
            Velmora was born from a simple belief: jewelry should be treasured, not
            just worn. Each piece in our collection is thoughtfully designed to celebrate
            life's most meaningful moments.
          </p>
          <p className="text-lg mb-8 leading-relaxed text-velmora-gray-700">
            We specialize in demi-fine jewelry — pieces that bridge the gap between
            precious and accessible. Using 18K gold plating and hypoallergenic materials,
            we create jewelry that's beautiful enough for special occasions, durable
            enough for everyday wear.
          </p>
          <Link
            to="/about"
            className="btn-premium btn-premium-outline inline-block"
          >
            Discover Our Journey
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
