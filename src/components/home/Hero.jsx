import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[#1C1917]">
        <img
          data-strk-img-id="hero-main"
          data-strk-img="warm lit close-up gold jewelry on model elegant editorial"
          data-strk-img-ratio="16x9"
          data-strk-img-width="2000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Velmora Fine Jewelry - Warm lit gold jewelry on model"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-7xl text-[#F8F5F1] tracking-[0.05em] mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-[#F8F5F1]/90 text-lg md:text-xl mb-10 tracking-wide">
          Demi-fine gold jewelry, made for the moments that matter.
        </p>
        <Link 
          to="/shop" 
          className="btn btn-primary inline-block"
        >
          SHOP THE COLLECTION
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-12 bg-[#F8F5F1]/40" />
      </div>
    </section>
  );
};

export default Hero;
