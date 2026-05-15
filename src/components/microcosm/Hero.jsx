import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
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
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a14]/70 via-[#050a14]/50 to-[#050a14]" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p id="hero-subtitle" className="text-cyan-400 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6">
          The Hidden Universe Within
        </p>
        <h1 id="hero-title" className="text-7xl md:text-9xl font-bold text-white tracking-tight mb-8 leading-none">
          Microcosm
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Dive into the invisible worlds that surround us — from single cells to entire ecosystems
          thriving in a drop of water.
        </p>
        <a
          href="#intro"
          className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-3 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-cyan-400 hover:text-[#050a14] transition-all duration-300"
        >
          Explore
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-cyan-400 to-transparent mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
