import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc-7f3a1b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-4 md:px-8">
        <div className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-teal-400 text-sm font-medium tracking-widest uppercase">Explore the Invisible</span>
        </div>

        <h1
          id="hero-title"
          className="font-space text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-6"
        >
          Micro
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
            Cosmos
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Journey into the hidden universe beneath our feet — a world of microscopic life, breathtaking structures, and invisible wonders.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.5)]"
          >
            Begin Exploration
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 border border-gray-600 hover:border-teal-400 text-white hover:text-teal-400 font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
