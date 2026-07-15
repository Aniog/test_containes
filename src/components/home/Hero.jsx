import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://placehold.co/1600x900/1a1a1a/d4af37?text=Velmora+Jewelry')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Demi-fine jewelry designed for the modern woman. Each piece is thoughtfully crafted to be worn every day and gifted for a lifetime.
        </p>
        <Link to="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
};

export default Hero;
