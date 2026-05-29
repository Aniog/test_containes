import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wine-deep/70 via-wine-deep/50 to-wine-deep" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-16">
        <p className="text-wine-gold uppercase tracking-widest text-sm font-semibold mb-4">
          Est. 1892 · Bordeaux, France
        </p>
        <h1 id="hero-title" className="font-serif text-5xl md:text-7xl text-wine-cream font-bold leading-tight mb-6">
          The Art of Fine Wine
        </h1>
        <p id="hero-subtitle" className="text-wine-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover exceptional wines crafted from the world's most celebrated vineyards. Each bottle tells a story of terroir, tradition, and passion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#collection"
            className="bg-wine-primary hover:bg-wine-hover text-wine-cream px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300 text-base"
          >
            Explore Collection
          </a>
          <a
            href="#story"
            className="border border-wine-gold text-wine-gold hover:bg-wine-gold/10 px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300 text-base"
          >
            Our Story
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-wine-gold/50" />
        <div className="w-2 h-2 rounded-full bg-wine-gold/50" />
      </div>
    </section>
  );
};

export default Hero;
