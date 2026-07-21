import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Velmora Fine Jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-wide">
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide max-w-2xl mx-auto">
          Timeless pieces for life's most precious moments. 
          Discover our collection of demi-fine gold jewelry.
        </p>
        <Link
          to="/shop"
          className="bg-yellow-600 text-white px-8 py-4 tracking-wide hover:bg-black transition-colors inline-block"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
