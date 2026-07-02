import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
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

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a0f]/70 via-[#050a0f]/50 to-[#050a0f]" />

      {/* Radial glow */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400 mb-6">
          The Invisible World Revealed
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-6"
        >
          Micro<span className="text-cyan-400">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-[#7fb3c8] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Journey into the breathtaking universe that exists beyond the naked eye — where cells dance, crystals bloom, and life pulses in extraordinary forms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-8 py-4 rounded-full bg-cyan-400 text-[#050a0f] font-bold text-sm uppercase tracking-widest hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_30px_rgba(0,212,255,0.4)]"
          >
            Begin Exploration
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full border border-cyan-400/50 text-cyan-400 font-bold text-sm uppercase tracking-widest hover:bg-cyan-400/10 transition-all duration-200"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-[#4a7a8a] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-cyan-400/60" />
      </div>
    </section>
  );
}
