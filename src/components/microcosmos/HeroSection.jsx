import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmos-bg">
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-bg/60 via-cosmos-bg/40 to-cosmos-bg" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <p id="hero-label" className="text-xs font-semibold uppercase tracking-widest text-cosmos-magenta mb-4">
          Explore the Invisible World
        </p>
        <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold tracking-tight text-cosmos-cyan mb-6 leading-none">
          MicroCosmos
        </h1>
        <p id="hero-subtitle" className="text-lg md:text-2xl text-cosmos-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          A journey into the breathtaking universe hidden beneath the microscope — where bacteria, cells, and organisms reveal the true complexity of life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="bg-cosmos-cyan text-cosmos-bg font-bold px-8 py-4 rounded-full hover:bg-white transition-colors duration-200 text-base"
          >
            Begin Exploring
          </a>
          <a
            href="#gallery"
            className="border border-cosmos-cyan text-cosmos-cyan px-8 py-4 rounded-full hover:bg-cosmos-cyan hover:text-cosmos-bg transition-colors duration-200 text-base"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-cosmos-muted">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-cosmos-cyan to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
