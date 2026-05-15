import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a3f9c1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-brown-dark/55" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <span className="inline-block uppercase tracking-widest text-sm font-semibold text-butter mb-4">
          Artisan Dairy
        </span>
        <h1
          id="hero-title"
          className="font-playfair text-5xl md:text-7xl font-bold text-cream leading-tight mb-6 max-w-2xl"
        >
          The Finest Butter &amp; Cheese
        </h1>
        <p
          id="hero-subtitle"
          className="text-parchment text-lg md:text-xl leading-relaxed max-w-xl mb-10"
        >
          Handcrafted from the richest pasture-raised milk. Every wheel aged to perfection,
          every pat of butter churned with care.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#butter"
            className="bg-butter hover:bg-butter-dark text-brown-dark font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Explore Butter
          </a>
          <a
            href="#cheese"
            className="border-2 border-cream text-cream hover:bg-cream hover:text-brown-dark font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Discover Cheese
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
