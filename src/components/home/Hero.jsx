// Hero Section Component
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
          Crafted to be<br />
          <span className="italic">Treasured</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 font-light tracking-wide">
          Demi-fine jewelry for life's most meaningful moments
        </p>
        <Link
          to="/shop"
          className="btn-premium bg-white text-velmora-charcoal hover:bg-velmora-gold hover:text-white transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-white opacity-60" />
      </div>
    </section>
  );
};

export default Hero;
