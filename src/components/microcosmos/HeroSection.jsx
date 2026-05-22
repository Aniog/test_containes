import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/60 via-[#050d1a]/40 to-[#050d1a]" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p id="hero-subtitle" className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-6">
          Explore the Invisible World
        </p>
        <h1 id="hero-title" className="text-6xl md:text-8xl font-black tracking-tight text-[#e8f4f8] mb-6 leading-none">
          Micro<span className="text-[#00d4aa]">Cosmos</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#94b8c8] max-w-2xl mx-auto leading-relaxed mb-10">
          A breathtaking journey into the hidden universe that exists beyond the limits of the naked eye.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-8 py-4 bg-[#00d4aa] text-[#050d1a] font-bold rounded-full text-base hover:bg-[#7df9e8] transition-all duration-300 shadow-[0_0_30px_rgba(0,212,170,0.4)]"
          >
            Begin Exploring
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 border border-[#00d4aa] text-[#00d4aa] font-bold rounded-full text-base hover:bg-[#00d4aa]/10 transition-all duration-300"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#5a7a8a]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00d4aa] to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
