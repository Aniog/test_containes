import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
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
        <p
          id="hero-subtitle"
          className="text-cyan-400 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6"
        >
          Explore the Invisible World
        </p>
        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-black tracking-tight text-white mb-6 leading-none"
        >
          Micro<span className="text-cyan-400">Cosmos</span>
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          A breathtaking journey into the hidden universe that exists beyond the limits of the naked eye — where cells dance, crystals bloom, and life reveals its most intricate secrets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#050a14] font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)]"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-white font-semibold rounded-full transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
