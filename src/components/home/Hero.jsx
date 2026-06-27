import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[85vh] sm:h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main-a7f3e2"
        data-strk-bg="gold jewelry model warm light editorial portrait luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-white leading-tight tracking-wide mb-4 sm:mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-white/80 text-base sm:text-lg md:text-xl font-light mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
          Demi-fine 18K gold-plated jewelry designed for the modern woman. 
          Premium quality, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-velmora-gold text-white px-8 sm:px-12 py-3.5 sm:py-4 text-sm tracking-[0.2em] uppercase font-medium hover:bg-velmora-gold-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-velmora-ivory to-transparent" />
    </section>
  );
}
