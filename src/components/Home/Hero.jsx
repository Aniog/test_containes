import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-velmora-charcoal">
          {/* Placeholder for hero image - warm-lit close-up of gold jewelry on a model */}
          <div className="w-full h-full bg-gradient-to-br from-velmora-charcoal via-velmora-graphite to-velmora-charcoal flex items-center justify-center">
            <div className="text-center text-velmora-gold/20">
              <div className="text-9xl font-serif">V</div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight animate-fade-in">
          Crafted to be
          <br />
          <em className="text-velmora-gold">Treasured</em>
        </h1>
        <p className="text-lg md:text-xl mb-10 text-velmora-warm max-w-2xl mx-auto leading-relaxed">
          Demi-fine jewelry designed for the modern woman who appreciates quiet luxury
          and timeless elegance.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-velmora-gold text-white font-medium tracking-wider uppercase text-sm hover:bg-velmora-gold-dark transition-all duration-300 hover:shadow-premium-lg"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/50" />
      </div>
    </section>
  );
};

export default Hero;
