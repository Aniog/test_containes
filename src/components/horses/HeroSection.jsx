import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundColor: '#5C3D1E' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p id="hero-subtitle" className="text-hay font-semibold tracking-widest uppercase text-sm md:text-base mb-4">
          Discover the Majesty
        </p>
        <h1
          id="hero-title"
          className="font-playfair text-5xl md:text-7xl font-bold text-cream leading-tight mb-6"
        >
          The World of Horses
        </h1>
        <p className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Graceful, powerful, and deeply connected to humanity — horses have shaped our history and captured our hearts for thousands of years.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-saddle text-cream px-8 py-3 rounded-full font-semibold hover:bg-chestnut transition-colors text-base"
          >
            Explore More
          </a>
          <a
            href="#breeds"
            className="border-2 border-cream text-cream px-8 py-3 rounded-full font-semibold hover:bg-cream hover:text-bark transition-colors text-base"
          >
            View Breeds
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/70">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-cream/50 animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
