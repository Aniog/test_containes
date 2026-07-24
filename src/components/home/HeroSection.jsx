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
        data-strk-bg-id="hero-bg-main-8f2a9c"
        data-strk-bg="[hero-headline] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 bg-brand-text"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 animate-slide-up"
            >
              Crafted to be<br />Treasured
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-base md:text-lg text-white/80 mb-8 max-w-md animate-slide-up"
              style={{ animationDelay: '0.15s' }}
            >
              Discover demi-fine gold jewelry designed for everyday elegance and made to last a lifetime.
            </p>
            <Link
              to="/shop"
              className="btn-primary animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}