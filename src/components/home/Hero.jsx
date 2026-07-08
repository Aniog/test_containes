import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl mb-8 font-light tracking-wide">
          Demi-fine gold jewelry for life's most precious moments
        </p>
        <Link
          to="/shop"
          className="inline-block bg-white text-black px-8 py-3 text-sm tracking-widest hover:bg-gray-100 transition-colors"
        >
          SHOP THE COLLECTION
        </Link>
      </div>
    </section>
  );
};

export default Hero;