import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a0f]/60 via-[#050a0f]/40 to-[#050a0f]" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-6"
        >
          A Journey Into the Invisible World
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none mb-6"
        >
          The Hidden{' '}
          <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
            Universe
          </span>{' '}
          Within
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Microscopic organisms, crystalline structures, and living cells — a breathtaking cosmos exists at scales invisible to the naked eye.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-teal-400 text-[#050a0f] font-bold text-sm tracking-wide hover:bg-cyan-300 transition-colors"
          >
            Begin Exploring
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-teal-400/50 text-teal-400 font-semibold text-sm tracking-wide hover:bg-teal-400/10 transition-colors"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-6 h-6 text-teal-400/60" />
      </div>
    </section>
  );
};

export default HeroSection;
