import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-warm-dark"
      >
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-warm-black/70 via-warm-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-20 lg:pb-32">
        <div className="max-w-2xl animate-slide-up">
          <h1
            id="hero-title"
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-wide"
          >
            Crafted to be<br />Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-base md:text-lg text-white/80 mt-4 max-w-md font-light leading-relaxed"
          >
            Discover demi-fine gold jewelry designed for the woman who values quiet elegance and enduring quality.
          </p>
          <Link
            to="/shop"
            className="btn-primary inline-block mt-8 text-white border-2 border-gold hover:bg-gold-dark"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}