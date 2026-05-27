import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050d1a]/70 via-[#050d1a]/50 to-[#050d1a]" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-teal-900/50 text-teal-300 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6 border border-teal-700/40">
          Explore the Invisible World
        </div>
        <h1 id="hero-title" className="text-5xl md:text-8xl font-black text-white tracking-tight leading-none mb-4">
          Micro<span className="text-teal-400">Cosmos</span>
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Journey into the breathtaking hidden universe of microscopic life — bacteria, fungi, protozoa, and beyond.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="bg-teal-400 hover:bg-teal-300 text-[#050d1a] font-bold px-8 py-3 rounded-full transition-all duration-200 text-sm uppercase tracking-wide"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="border border-teal-400/50 hover:border-teal-400 text-teal-300 hover:text-teal-200 font-semibold px-8 py-3 rounded-full transition-all duration-200 text-sm uppercase tracking-wide"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-teal-400 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
