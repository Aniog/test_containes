import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToMenu = () => {
    const el = document.querySelector('#menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1A1A2E]/70 via-[#1A1A2E]/50 to-[#1A1A2E]/80" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <p
          id="hero-subtitle"
          className="text-[#F4A261] text-sm font-semibold tracking-widest uppercase mb-4"
        >
          Handcrafted with Love
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The Best Burgers <br />
          <span className="text-[#E63946]">In Town</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Fresh ingredients, bold flavors, and a whole lot of love stacked between two buns.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToMenu}
            className="bg-[#E63946] text-white rounded-full px-8 py-4 font-semibold text-lg hover:bg-[#c62d39] transition-colors border-none cursor-pointer"
          >
            See Our Menu
          </button>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white rounded-full px-8 py-4 font-semibold text-lg hover:bg-white hover:text-[#1A1A2E] transition-colors bg-transparent cursor-pointer"
          >
            Our Story
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '50+', label: 'Menu Items' },
            { value: '10K+', label: 'Happy Customers' },
            { value: '15', label: 'Years of Flavor' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[#F4A261] text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                {stat.value}
              </p>
              <p className="text-white/70 text-xs md:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white transition-colors animate-bounce bg-transparent border-none cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
