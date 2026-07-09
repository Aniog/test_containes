import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-[#050a0f]" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mb-4 animate-fade-in">
          Welcome to the invisible world
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-black tracking-tight text-[#e8f4f8] leading-tight mb-6 animate-fade-in-up"
        >
          The World of{' '}
          <span className="text-[#00d4ff] drop-shadow-[0_0_20px_rgba(0,212,255,0.6)]">
            MicroCosmos
          </span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-[#7fb3c8] leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up"
        >
          Dive into the breathtaking universe hidden beneath the surface — microscopic organisms, crystalline structures, and living cells that form the foundation of all life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <a
            href="#explore"
            className="bg-[#00d4ff] text-[#050a0f] font-bold rounded-full px-8 py-3 text-base hover:bg-[#00ffcc] transition-colors duration-200 inline-block"
          >
            Begin Exploring
          </a>
          <a
            href="#gallery"
            className="border border-[#00d4ff] text-[#00d4ff] rounded-full px-8 py-3 text-base hover:bg-[#00d4ff]/10 transition-colors duration-200 inline-block"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#explore"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[#7fb3c8] hover:text-[#00d4ff] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
