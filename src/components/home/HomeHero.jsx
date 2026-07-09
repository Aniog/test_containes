import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-928374"
        data-strk-bg="[hero-title] close-up gold jewelry on model warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 id="hero-title" className="text-5xl md:text-8xl font-serif mb-8 leading-tight drop-shadow-lg">
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl font-sans mb-12 uppercase tracking-luxury max-w-2xl mx-auto opacity-90">
          Demi-fine jewelry designed for daily luxury and timeless elegance.
        </p>
        <button
          onClick={() => navigate('/shop')}
          className="bg-white text-[#1A1A1A] px-12 py-5 uppercase text-xs tracking-luxury hover:bg-[#FDFCFB] hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
        >
          Shop the Collection
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50 text-white">
        <div className="w-px h-12 bg-current mx-auto" />
      </div>
    </section>
  );
};

export default HomeHero;
