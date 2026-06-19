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
    <section ref={containerRef} className="relative h-screen min-h-[650px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7a3e2d"
        data-strk-bg="[hero-subtitle-text] [hero-heading-text]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      >
        <div className="absolute inset-0 bg-deep-950/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <p className="section-subheading text-cream-200 tracking-widest animate-fade-in" id="hero-subtitle-text">
            FINE JEWELRY, WITHOUT THE MARKUP
          </p>
          <h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white mt-6 animate-slide-up leading-tight"
            id="hero-heading-text"
          >
            Crafted to be Treasured
          </h1>
          <p className="text-cream-200/80 text-base md:text-lg mt-6 animate-slide-up max-w-xl mx-auto leading-relaxed">
            Demi-fine gold jewelry for the modern woman — premium materials, timeless design, and prices that feel as good as they look.
          </p>
          <div className="mt-10 animate-slide-up">
            <Link to="/shop" className="btn-primary text-sm tracking-widest px-10 py-3.5">
              SHOP THE COLLECTION
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-cream-200/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream-200/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
