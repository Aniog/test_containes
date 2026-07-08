import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="max-w-lg">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Story</h2>
          <div className="w-16 h-px bg-gray-300 mb-6" />
          
          <p className="text-gray-700 mb-4 leading-relaxed">
            At Velmora, we believe that fine jewelry should be accessible without compromising on quality. 
            Each piece is thoughtfully designed and crafted with 18K gold plating, creating demi-fine 
            jewelry that's meant to be worn, cherished, and passed down.
          </p>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            From our studio to your jewelry box, we're committed to creating pieces that celebrate 
            life's everyday moments and milestone occasions alike.
          </p>

          <Link
            to="/about"
            className="inline-block border border-black text-black px-8 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition-colors"
          >
            DISCOVER MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;