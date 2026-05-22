import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-[#C9A84C] text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4">
          Bienvenue
        </p>
        <h1
          id="hero-title"
          className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
        >
          La Belle France
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/80 text-lg md:text-2xl font-light mb-10 max-w-2xl mx-auto"
        >
          A journey through the timeless flavours, iconic dishes, and culinary traditions of France
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('dishes')}
            className="bg-[#8B1A2F] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6e1525] transition-colors text-base"
          >
            Explore Dishes
          </button>
          <button
            onClick={() => scrollToSection('regions')}
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1C1C1C] transition-colors text-base"
          >
            By Region
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
