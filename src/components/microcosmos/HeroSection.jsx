import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
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
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-bg/60 via-cosmos-bg/40 to-cosmos-bg" />

      {/* Glowing orb effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-cosmos-teal/10 blur-3xl z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cosmos-purple/10 blur-3xl z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-cosmos-teal font-grotesk text-sm font-semibold tracking-[0.3em] uppercase mb-6"
        >
          Explore the Invisible World
        </p>
        <h1
          id="hero-title"
          className="font-grotesk font-bold text-5xl md:text-7xl lg:text-8xl text-cosmos-text leading-tight mb-6"
          style={{ textShadow: '0 0 60px rgba(0,212,170,0.3)' }}
        >
          Micro
          <span className="bg-gradient-to-r from-cosmos-teal to-cosmos-purple bg-clip-text text-transparent">
            Cosmos
          </span>
        </h1>
        <p
          id="hero-subtitle"
          className="font-inter text-cosmos-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A breathtaking journey into the microscopic universe — where bacteria, cells, and organisms invisible to the naked eye reveal a world of extraordinary beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-8 py-4 rounded-full bg-cosmos-teal text-cosmos-bg font-grotesk font-semibold text-sm tracking-wide hover:bg-cosmos-teal/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,170,0.5)]"
          >
            Begin Exploration
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full border border-cosmos-teal/40 text-cosmos-teal font-grotesk font-semibold text-sm tracking-wide hover:border-cosmos-teal hover:bg-cosmos-teal/10 transition-all duration-300"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-cosmos-dim">
        <span className="font-inter text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cosmos-teal/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
