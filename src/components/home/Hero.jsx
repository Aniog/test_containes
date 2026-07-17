import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-velmora-a3f8c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-ink-800"
      >
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/40 to-transparent" />

        {/* Decorative warm light effect */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gold-300/8 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl animate-fade-in">
            <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold-300 mb-4">
              Demi-fine jewelry
            </p>
            <h1
              id="hero-title"
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory-50 leading-[1.1] mb-6"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="font-sans text-base md:text-lg text-ivory-200 max-w-md leading-relaxed mb-8"
            >
              18K gold plated jewelry designed for everyday elegance. Hypoallergenic, tarnish-resistant, and made with intention.
            </p>
            <Link to="/shop" className="btn-gold">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 h-8 border-2 border-ivory-300/50 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-ivory-300/80 rounded-full" />
        </div>
      </div>
    </section>
  );
}
