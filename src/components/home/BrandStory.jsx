import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden bg-velmora-warm">
            <img
              src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative Element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-velmora-gold hidden md:block" />
        </div>

        {/* Text Side */}
        <div className="space-y-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">
              Our Story
            </h2>
            <div className="hairline w-16" />
          </div>

          <p className="text-lg leading-relaxed text-velmora-charcoalLight">
            At Velmora, we believe that jewelry should be both accessible and extraordinary. 
            Founded with a vision to create demi-fine pieces that bridge the gap between 
            costume and fine jewelry, every piece is crafted with intention.
          </p>

          <p className="leading-relaxed text-velmora-stone">
            Our 18K gold plating process ensures each piece maintains its luster for years to come. 
            Whether you're treating yourself or finding the perfect gift, Velmora pieces are 
            designed to be treasured and worn every day.
          </p>

          <div className="pt-4">
            <Link
              to="/about"
              className="btn-outline inline-block"
            >
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
