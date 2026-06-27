import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    if (strkImgConfig && containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700"
        data-strk-bg-id="hero-bg-velmora-a1b2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        {/* Warm overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-dark-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="max-w-2xl">
          <p
            className={`text-gold-400 text-xs sm:text-sm tracking-[0.3em] uppercase font-sans mb-4 sm:mb-6 transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Fine Jewelry Collection
          </p>
          <h1
            id="hero-title"
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 transition-all duration-1000 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Crafted to be{' '}
            <span className="italic text-gold-300">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className={`text-warm-300 text-base sm:text-lg max-w-md leading-relaxed font-sans mb-8 transition-all duration-1000 delay-400 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Discover demi-fine 18K gold-plated jewelry designed for the modern woman — 
            accessible luxury that lasts.
          </p>
          <div
            className={`transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Link
              to="/shop"
              className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-gold-500 text-dark-900 text-xs sm:text-sm tracking-[0.2em] uppercase font-sans font-medium hover:bg-gold-400 transition-all duration-300 btn-premium"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
