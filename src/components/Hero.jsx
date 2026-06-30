import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight">
          Crafted to be
          <br />
          <em className="italic">Treasured</em>
        </h1>
        <p className="text-lg md:text-xl mb-12 font-light tracking-wide max-w-2xl mx-auto">
          Demi-fine jewelry designed for the modern woman.
          <br className="hidden md:block" />
          Everyday luxury, thoughtfully made.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-white text-velmora-charcoal px-10 py-4 text-sm tracking-widest uppercase hover:bg-velmora-gold hover:text-white transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-0.5 h-12 bg-white opacity-60" />
      </div>
    </section>
  );
};

export default Hero;
