import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a3f9c1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/40 to-sky-900/70" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-sky-300 text-sm uppercase tracking-widest font-semibold mb-4"
        >
          Straight from the mountain
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
        >
          Pure Spring Water,<br />
          <span className="text-cyan-300">Nature's Gift</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-sky-100 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Sourced from pristine mountain springs, untouched and naturally filtered
          through ancient rock layers for centuries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#benefits"
            className="bg-white text-blue-700 font-semibold rounded-full px-8 py-3 text-base hover:bg-sky-50 transition shadow-lg"
          >
            Discover the Benefits
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white font-semibold rounded-full px-8 py-3 text-base hover:bg-white/10 transition"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs">
        <span>Scroll</span>
        <div className="w-px h-8 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
