import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050d1a]">
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
        <p
          id="hero-eyebrow"
          className="text-sm font-semibold tracking-widest uppercase text-[#00d4c8] mb-6"
        >
          A Journey Into the Invisible World
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-50 leading-none mb-6"
        >
          Micro<span className="text-[#00d4c8]">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Discover the breathtaking universe hidden beneath the lens — where single cells dance, bacteria form cities, and life thrives in forms beyond imagination.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-8 py-4 rounded-full bg-[#00d4c8] text-[#050d1a] font-bold text-base hover:bg-[#00d4c8]/90 transition-all duration-200 shadow-lg shadow-[#00d4c8]/30"
          >
            Begin Exploring
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full border border-slate-600 text-slate-200 font-semibold text-base hover:border-[#00d4c8] hover:text-[#00d4c8] transition-all duration-200"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
