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
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fdf2f8]">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Pink overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#fdf2f8]/50 via-[#fdf2f8]/30 to-[#fdf2f8]" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[#fce7f3] border border-[#f9a8d4] text-[#be185d] text-sm font-semibold tracking-widest uppercase">
          The Invisible Universe
        </span>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1e1b2e] leading-tight tracking-tight mb-6"
        >
          Micro<span className="text-[#be185d]">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-[#7c4d6a] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Journey into the breathtaking world invisible to the naked eye — where cells, crystals, bacteria, and fungi reveal a universe of staggering beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-8 py-4 rounded-full bg-[#be185d] text-white font-bold text-base hover:bg-[#9d174d] transition-all duration-200 shadow-[0_0_30px_rgba(219,39,119,0.35)]"
          >
            Begin Exploration
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full border border-[#f9a8d4] text-[#1e1b2e] font-semibold text-base hover:border-[#ec4899] hover:text-[#be185d] transition-all duration-200"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#explore"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[#b07a9a] hover:text-[#be185d] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
