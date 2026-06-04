import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BakeryHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay – soft pink/lavender gradient */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(180,80,120,0.55) 0%, rgba(120,90,160,0.50) 100%)' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" style={{color: 'inherit'}}>
        <p
          id="hero-eyebrow"
          className="font-playfair italic text-lg md:text-xl mb-4 tracking-widest uppercase"
          style={{color: '#F9D0E0'}}
        >
          Artisan Baked Goods
        </p>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-playfair font-bold leading-tight mb-6"
          style={{color: '#FFFDF8'}}
        >
          Baked with Love,<br />
          <span className="italic" style={{color: '#F9D0E0'}}>Every Single Day</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{color: 'rgba(255,253,248,0.80)'}}
        >
          Fresh sourdough, flaky croissants, and seasonal pastries — crafted from
          scratch each morning using time-honored recipes and the finest local ingredients.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="rounded-full px-8 py-4 font-semibold text-base transition-colors"
            style={{ background: '#C9728A', color: '#FFFDF8' }}
          >
            Explore Our Menu
          </a>
          <a
            href="#about"
            className="border-2 rounded-full px-8 py-4 font-semibold text-base transition-colors"
            style={{ borderColor: '#F9D0E0', color: '#FFFDF8' }}
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{color: 'rgba(255,253,248,0.60)'}}>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-warm-white/40 animate-pulse" />
      </div>
    </section>
  );
};

export default BakeryHero;
