import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p id="hero-subtitle" className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 text-white/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1 id="hero-title" className="velmora-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-sm sm:text-base text-white/70 mb-8 max-w-lg mx-auto leading-relaxed">
          Everyday luxury pieces designed for the modern woman. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link to="/shop" className="velmora-btn-accent inline-flex">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
