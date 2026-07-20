import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[#2C2522]">
        <img
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=2000&q=90"
          alt="Velmora Fine Jewelry - Elegant gold jewelry on model"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-[#2C2522]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-serif-custom text-5xl md:text-6xl lg:text-7xl text-white tracking-[0.05em] leading-[1.1] mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-md mx-auto">
          Demi-fine jewelry for the moments that matter.
        </p>
        <Link
          to="/shop"
          className="btn-premium btn-premium-solid inline-block"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-12 bg-white/40" />
      </div>
    </section>
  );
};

export default Hero;
