import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050a0f]">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a0f]/60 via-[#050a0f]/40 to-[#050a0f]" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-sm font-semibold tracking-widest uppercase">
          The Invisible Universe
        </span>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#f0f9ff] leading-tight tracking-tight mb-6"
        >
          Micro<span className="text-[#00d4ff]">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Journey into the breathtaking world invisible to the naked eye — where cells, crystals, bacteria, and fungi reveal a universe of staggering beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-8 py-4 rounded-full bg-[#00d4ff] text-[#050a0f] font-bold text-base hover:bg-[#06b6d4] transition-all duration-200 shadow-[0_0_30px_rgba(0,212,255,0.4)]"
          >
            Begin Exploration
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full border border-[#1e3a5f] text-[#f0f9ff] font-semibold text-base hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all duration-200"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#explore"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[#475569] hover:text-[#00d4ff] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
