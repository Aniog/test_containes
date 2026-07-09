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
        data-strk-bg-id="hero-bg-mc002"
        data-strk-bg="fluorescent microscopy cells glowing colorful biology"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a0f]/60 via-[#050a0f]/30 to-[#050a0f]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050a0f]/50 via-transparent to-[#050a0f]/50" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-4 md:px-8">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#00d4c8]/40 text-[#00d4c8] text-xs font-semibold tracking-widest uppercase">
          The Invisible World
        </span>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-black text-[#e8f4f8] leading-none tracking-tight mb-6"
          style={{ textShadow: '0 0 60px rgba(0,212,200,0.3)' }}
        >
          Micro<span className="text-[#00d4c8]">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-[#7fb3c8] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Journey into the breathtaking universe hidden beneath the naked eye — where cells, crystals, and organisms reveal nature's most extraordinary designs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-8 py-4 rounded-full bg-[#00d4c8] text-[#050a0f] font-bold text-base hover:bg-[#00bfb4] transition-all duration-200 shadow-[0_0_30px_rgba(0,212,200,0.4)]"
          >
            Begin Exploration
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full border border-[#e8f4f8]/20 text-[#e8f4f8] font-semibold text-base hover:border-[#00d4c8]/50 hover:text-[#00d4c8] transition-all duration-200"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#explore"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[#4a7a8a] hover:text-[#00d4c8] transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
