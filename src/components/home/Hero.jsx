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
    <section ref={containerRef} className="relative h-[100vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-a7b2c3"
        data-strk-bg="gold jewelry on model warm lighting editorial portrait luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-velvet-950/70 via-velvet-950/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-[1440px] mx-auto section-padding flex items-center">
        <div className="max-w-xl">
          <h1
            id="hero-title"
            className="text-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory-50 mb-4 animate-slide-up"
          >
            Crafted to be<br />
            <span className="text-gold-400">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-ivory-100/80 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-md animate-slide-up"
            style={{ animationDelay: '0.15s' }}
          >
            Premium demi-fine jewelry, designed for the modern woman.
            18K gold plated. Hypoallergenic. Always elegant.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/shop" className="btn-gold">
              Shop the Collection
            </Link>
            <Link to="/about" className="btn-outline border-ivory-50/40 text-ivory-50 hover:bg-ivory-50 hover:text-velvet-950">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-ivory-50/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-ivory-50/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
