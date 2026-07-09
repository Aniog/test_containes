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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-cosmos-bg/70 via-cosmos-bg/40 to-cosmos-bg" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cosmos-cyan/5 blur-3xl animate-pulse-slow z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cosmos-violet/5 blur-3xl animate-pulse-slow z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p id="hero-eyebrow" className="text-cosmos-cyan text-sm md:text-base uppercase tracking-[0.3em] font-inter font-medium mb-6">
          Explore the Invisible World
        </p>
        <h1 id="hero-title" className="font-grotesk text-6xl md:text-8xl lg:text-9xl font-bold text-cosmos-text leading-none mb-6">
          Micro<span className="text-cosmos-cyan">Cosmos</span>
        </h1>
        <p id="hero-subtitle" className="font-inter text-lg md:text-2xl text-cosmos-muted max-w-2xl mx-auto leading-relaxed mb-10">
          A journey into the breathtaking universe hidden beneath the lens — where bacteria dance, cells divide, and life pulses in forms we rarely see.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-8 py-4 bg-cosmos-cyan text-cosmos-bg font-grotesk font-semibold rounded-full hover:bg-cosmos-cyan/90 transition-all duration-300 shadow-[0_0_30px_rgba(0,212,255,0.4)]"
          >
            Begin Exploring
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 border border-cosmos-border text-cosmos-text font-grotesk font-semibold rounded-full hover:border-cosmos-cyan/50 hover:text-cosmos-cyan transition-all duration-300"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-cosmos-faint text-xs uppercase tracking-widest font-inter">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cosmos-cyan/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
