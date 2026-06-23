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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a0f]/60 via-[#050a0f]/40 to-[#050a0f]" />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mb-6"
        >
          A Journey Into the Invisible
        </p>
        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-black tracking-tight text-[#e8f4f8] leading-none mb-6"
        >
          Micro<span className="text-[#00d4ff]">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-[#8ab4c8] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Explore the breathtaking universe hidden beneath the lens — from living cells and crystalline structures to the alien landscapes of microscopic life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#00d4ff] text-[#050a0f] px-8 py-4 rounded-full font-bold text-base hover:bg-[#00ffcc] transition-colors duration-200 shadow-[0_0_30px_rgba(0,212,255,0.4)]"
          >
            Begin Exploring
          </button>
          <button
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-[#00d4ff] text-[#00d4ff] px-8 py-4 rounded-full font-bold text-base hover:bg-[#00d4ff]/10 transition-colors duration-200"
          >
            View Gallery
          </button>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[#8ab4c8] animate-bounce bg-transparent border-none cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
