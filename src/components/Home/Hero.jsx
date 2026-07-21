import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80"
          alt="Velmora jewelry on model"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-velmora-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-velmora-white px-4 max-w-3xl mx-auto">
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Crafted to be
          <br />
          <em className="italic">Treasured</em>
        </h1>
        <p className="text-lg md:text-xl mb-10 text-velmora-cream/90 max-w-xl mx-auto leading-relaxed">
          Demi-fine jewelry designed for everyday luxury. Each piece is crafted with
          18K gold plating and hypoallergenic materials.
        </p>
        <Link
          to="/shop"
          className="btn-premium btn-premium-solid inline-block"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-velmora-white/50 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
