import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-mx7f2a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundColor: '#7B2D00' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          id="hero-subtitle"
          className="text-orange-300 uppercase tracking-widest text-sm md:text-base font-semibold mb-4"
        >
          A Culinary Journey
        </p>
        <h1
          id="hero-title"
          className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The Soul of Mexico
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Bold flavors, ancient traditions, and vibrant ingredients — Mexican cuisine is one of the world's great culinary treasures.
        </p>
        <a
          href="#dishes"
          className="inline-block mt-10 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors duration-300 text-sm uppercase tracking-wide"
        >
          Explore the Food
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
