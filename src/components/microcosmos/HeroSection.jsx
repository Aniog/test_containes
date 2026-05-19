import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-end overflow-hidden bg-black">
      {/* Full-bleed hero background image */}
      <div
        className="absolute inset-0 w-full h-full"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 md:pb-32 w-full">
        <p
          id="hero-eyebrow"
          className="font-body text-xs tracking-[0.3em] uppercase text-white/50 mb-6"
        >
          Explore the Invisible
        </p>
        <h1
          id="hero-title"
          className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none mb-6"
        >
          Micro<br />
          <span className="italic font-normal">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle"
          className="font-body text-base md:text-lg text-white/60 max-w-md leading-relaxed mb-10"
        >
          A journey into the hidden universe that exists beneath our perception — where life thrives in extraordinary forms.
        </p>
        <a
          href="#world"
          className="inline-block border border-white text-white font-body text-xs tracking-widest uppercase px-10 py-4 hover:bg-white hover:text-black transition-all duration-300"
        >
          Begin Exploring
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 z-10">
        <span className="font-body text-xs tracking-widest uppercase text-white/30 rotate-90 origin-center mb-4">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
