import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&h=1080&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-velmora-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-velmora-ivory px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-lg md:text-xl mb-8 font-light tracking-wide">
          Timeless pieces for life's most precious moments
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-velmora-ivory text-velmora-charcoal text-sm uppercase tracking-wider hover:bg-velmora-gold hover:text-velmora-ivory transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
