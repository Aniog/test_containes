import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black flex flex-col justify-end overflow-hidden">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Gradient overlay — black at bottom, transparent at top */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/60 to-black/20" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-32 pt-32">
        <p id="hero-subtitle" className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
          The invisible world made visible
        </p>
        <h1 id="hero-title" className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-none mb-8">
          MICRO<br />COSMOS
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed mb-10">
          Journey into the breathtaking universe that exists beyond the naked eye — where every drop of water holds an entire world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#explore"
            className="inline-flex items-center justify-center bg-white text-black text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-neutral-200 transition-colors duration-300"
          >
            Begin Exploring
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center border border-neutral-600 text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 hover:border-white transition-colors duration-300"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-xs text-neutral-500 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-neutral-500 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
