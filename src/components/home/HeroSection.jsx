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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-c4f8a2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl mx-auto">
        <p
          id="hero-eyebrow"
          className="text-amber-400 uppercase tracking-widest text-sm md:text-base font-semibold mb-4"
        >
          Artisan &amp; Aged
        </p>

        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          The World of Cheese
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-2xl text-amber-100 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From creamy brie to sharp aged cheddar — discover the rich, complex flavors
          that have delighted palates for centuries.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold text-base px-8 py-3 rounded-full transition-colors duration-200 shadow-lg">
            Explore Varieties
          </button>
          <button className="border-2 border-white/70 hover:border-white text-white font-semibold text-base px-8 py-3 rounded-full transition-colors duration-200 backdrop-blur-sm">
            Our Story
          </button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-950/60 to-transparent" />
    </section>
  );
};

export default HeroSection;
