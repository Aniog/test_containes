import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
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
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a0f]/70 via-[#050a0f]/50 to-[#050a0f]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00d4ff]/10 blur-3xl z-10 animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#7c3aed]/10 blur-3xl z-10 animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <p id="hero-subtitle" className="text-sm font-medium tracking-widest uppercase text-[#00d4ff] mb-4">
          Explore the Invisible World
        </p>
        <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#f0f8ff] mb-6 leading-tight">
          Micro<span className="text-[#00d4ff]">Cosmos</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8bafc7] max-w-2xl mx-auto mb-10 leading-relaxed">
          Journey into the breathtaking universe that exists beyond the naked eye — where cells dance, crystals bloom, and life pulses in extraordinary forms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-8 py-4 rounded-full bg-[#00d4ff] text-[#050a0f] font-bold text-base hover:bg-[#00ffcc] transition-all duration-300 shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_rgba(0,255,204,0.5)]"
          >
            Begin Exploration
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full border border-[#00d4ff]/40 text-[#f0f8ff] font-semibold text-base hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all duration-300"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#8bafc7]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00d4ff] to-transparent" />
      </div>
    </section>
  );
}
