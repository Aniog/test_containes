import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-espresso"
        data-strk-bg-id="hero-bg-main-f8a2b1"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
              New Collection 2024
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl font-light text-cream leading-[1.05] tracking-wide mb-6"
            >
              Crafted to be<br />
              <em className="not-italic text-gold-light">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-inter text-sm text-cream/70 leading-relaxed mb-10 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who wears her story. Designed to last, priced to love.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-gold text-espresso font-inter text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-inter text-[9px] tracking-widest uppercase text-cream">Scroll</span>
        <div className="w-px h-8 bg-cream/40 animate-pulse" />
      </div>
    </section>
  );
};

export default HomeHero;
