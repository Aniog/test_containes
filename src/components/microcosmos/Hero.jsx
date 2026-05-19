import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050a0f]">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a0f]/60 via-[#050a0f]/40 to-[#050a0f]" />

      <div className="relative z-20 text-center px-4 md:px-8 max-w-5xl mx-auto">
        <p id="hero-eyebrow" className="text-sm uppercase tracking-widest text-[#00d4c8] font-semibold mb-4">
          The Invisible World
        </p>
        <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6">
          Welcome to <br />
          <span className="text-[#00d4c8]">MicroCosmos</span>
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Microscopic organisms, cells, and crystals — a breathtaking universe hidden beneath the surface of everything we see.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-8 py-3 rounded-full bg-[#00d4c8] text-[#050a0f] font-bold text-base hover:bg-[#00bfb4] transition-colors duration-200"
          >
            Start Exploring
          </a>
          <a
            href="#gallery"
            className="px-8 py-3 rounded-full border border-[#1e3a4a] text-white font-bold text-base hover:border-[#00d4c8] hover:text-[#00d4c8] transition-colors duration-200"
          >
            View Gallery
          </a>
        </div>
      </div>

      <a
        href="#explore"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-slate-400 hover:text-[#00d4c8] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
