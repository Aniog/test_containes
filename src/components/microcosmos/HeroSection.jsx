import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black" />

      {/* Radial glow */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,212,200,0.08)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cosmos-teal/40 bg-cosmos-teal/10 text-cosmos-teal text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-cosmos-teal animate-pulse" />
          Explore the Invisible World
        </div>

        <h1
          id="hero-title"
          className="font-display text-7xl md:text-9xl font-bold text-white tracking-tight leading-none mb-6"
        >
          Micro
          <span className="text-cosmos-teal">Cosmos</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A journey into the hidden universe beneath our feet — where bacteria dance,
          cells breathe, and life thrives in forms too small to see.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full bg-cosmos-teal text-black font-semibold text-base hover:bg-cosmos-cyan transition-colors duration-300"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:border-cosmos-teal/60 hover:text-cosmos-teal transition-colors duration-300 backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-400 text-xs">
        <span>Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-cosmos-teal/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
