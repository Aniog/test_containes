import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-xl">
          <span className="inline-block bg-golden/20 text-golden border border-golden/40 rounded-full px-4 py-1 text-sm font-semibold mb-6 tracking-wide uppercase">
            Artisan Baked Daily
          </span>
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Baked with Love, <em className="text-golden not-italic">Every Day</em>
          </h1>
          <p
            id="hero-subtitle"
            className="text-tan text-lg md:text-xl leading-relaxed mb-10"
          >
            Fresh artisan breads, pastries, and cakes crafted from the finest ingredients.
            Taste the warmth of our family recipes in every bite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="inline-block bg-golden text-white rounded-full px-8 py-4 font-semibold text-base hover:bg-brown-700 transition-colors duration-200 text-center"
            >
              Explore Our Menu
            </a>
            <a
              href="#about"
              className="inline-block border-2 border-white text-white rounded-full px-8 py-4 font-semibold text-base hover:bg-white hover:text-espresso transition-colors duration-200 text-center"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path d="M8 0v20M1 13l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
