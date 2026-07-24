import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle-text] [hero-title-text]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-walnut-950/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p
          id="hero-subtitle-text"
          className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-cream-200/80 mb-4"
        >
          Premium Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title-text"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-100 tracking-wide mb-6 leading-tight"
        >
          Crafted to Be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-cream-200/70 max-w-md mx-auto mb-8 leading-relaxed">
          18K gold-plated jewelry designed for the modern woman. Timeless pieces that transition seamlessly from everyday to extraordinary.
        </p>
        <Link to="/shop" className="btn-gold text-xs md:text-sm">
          Shop the Collection
        </Link>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-100 to-transparent" />
    </section>
  );
}
