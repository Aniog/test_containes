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
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-bg/60 via-cosmos-bg/40 to-cosmos-bg" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cosmos-teal/10 blur-3xl z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cosmos-violet/10 blur-3xl z-10 animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-cosmos-teal/10 border border-cosmos-teal/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-cosmos-teal animate-pulse" />
          <span className="text-cosmos-teal text-xs font-semibold uppercase tracking-widest">
            Explore the Invisible World
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-6xl md:text-8xl font-black tracking-tight text-cosmos-text mb-6 leading-none"
        >
          Micro
          <span className="text-cosmos-teal">Cosmos</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-cosmos-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A breathtaking journey into the hidden universe beneath our feet — where bacteria, cells, and microorganisms shape all life on Earth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="bg-cosmos-teal text-cosmos-bg font-bold px-8 py-4 rounded-full hover:bg-cosmos-teal/90 transition-all duration-300 text-sm uppercase tracking-wider"
          >
            Explore Gallery
          </a>
          <a
            href="#organisms"
            className="border border-cosmos-teal text-cosmos-teal font-bold px-8 py-4 rounded-full hover:bg-cosmos-teal/10 transition-all duration-300 text-sm uppercase tracking-wider"
          >
            Discover Life
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-cosmos-muted text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cosmos-teal to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
