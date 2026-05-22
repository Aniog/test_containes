import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
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
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-brand-dark" />

      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red z-20" />

      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-2">
          <span className="font-display font-black text-2xl uppercase tracking-widest text-white">
            Velo<span className="text-brand-red">Race</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-neutral-300">
          <a href="#races" className="hover:text-brand-red transition-colors">Races</a>
          <a href="#bikes" className="hover:text-brand-red transition-colors">Bikes</a>
          <a href="#calendar" className="hover:text-brand-red transition-colors">Calendar</a>
        </div>
        <a
          href="#calendar"
          className="hidden md:inline-flex bg-brand-red hover:bg-red-500 text-white text-sm font-semibold uppercase tracking-widest rounded-full px-5 py-2.5 transition-colors"
        >
          Register Now
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p
          id="hero-subtitle"
          className="text-brand-red font-semibold uppercase tracking-widest text-sm md:text-base mb-4"
        >
          The World of Competitive Cycling
        </p>
        <h1
          id="hero-title"
          className="font-display font-black uppercase text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight text-white mb-6"
        >
          Ride Fast.<br />
          <span className="text-brand-red">Race Hard.</span>
        </h1>
        <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover the world's most thrilling bike races, elite riders, and the machines built to conquer every terrain.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#races"
            className="bg-brand-red hover:bg-red-500 text-white font-semibold uppercase tracking-widest rounded-full px-8 py-4 transition-colors text-sm"
          >
            Explore Races
          </a>
          <a
            href="#bikes"
            className="border border-neutral-500 hover:border-brand-red text-white font-semibold uppercase tracking-widest rounded-full px-8 py-4 transition-colors text-sm"
          >
            View Bikes
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-neutral-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-neutral-500 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
