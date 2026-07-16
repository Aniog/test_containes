import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
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
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050810]/60 via-[#050810]/40 to-[#050810]" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 md:px-8">
        <p className="text-xs uppercase tracking-widest text-cyan-400 mb-4 font-medium">
          Explore the Invisible World
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Micro<span className="text-cyan-400">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A journey into the breathtaking universe hidden beneath the surface —
          microscopic organisms, crystalline structures, and living cells that
          form the fabric of all life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-8 py-3 bg-cyan-400 text-[#050810] font-semibold rounded-full hover:bg-cyan-300 transition-colors duration-200"
          >
            Begin Exploring
          </a>
          <a
            href="#gallery"
            className="px-8 py-3 border border-slate-600 text-slate-200 font-semibold rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
