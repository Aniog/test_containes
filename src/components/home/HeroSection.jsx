import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden"
    >
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-warm-gold"
        data-strk-bg="[hero-heading] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-ink-900"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p
              id="hero-subhead"
              className="text-cream-200 text-sm md:text-base tracking-widest uppercase font-sans mb-4 animate-fade-in"
            >
              Demi-Fine Gold Jewelry
            </p>
            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-light"
            >
              Crafted to be<br />
              <span className="italic font-light">Treasured</span>
            </h1>
            <p className="mt-4 text-cream-100/80 text-base md:text-lg font-sans leading-relaxed max-w-md">
              Each piece designed to hold meaning — for yourself, or for someone you love.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-8 bg-gold-500 text-white px-8 py-3.5 text-sm tracking-widest uppercase hover:bg-gold-600 transition-all duration-300 font-sans"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}