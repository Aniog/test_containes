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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main-8f2a9c"
        data-strk-bg="[hero-img-desc] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Hidden image descriptor for better stock image matching */}
      <span id="hero-img-desc" className="sr-only">woman wearing elegant gold earrings necklace warm editorial portrait close-up demi-fine jewelry</span>

      {/* Warm overlay — stronger on left for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/55 to-charcoal/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <p className="font-inter text-xs uppercase tracking-widest text-gold-light mb-6 animate-fadeIn" style={{ color: '#E8D5B0' }}>
              New Collection — 2024
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-wide mb-6 animate-fadeIn"
              style={{ color: '#FAF8F5', animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-inter text-sm md:text-base leading-relaxed mb-10 max-w-sm animate-fadeIn"
              style={{ color: 'rgba(250,248,245,0.75)', animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who knows her worth. Designed to be worn every day, treasured forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/shop"
                className="inline-block bg-gold font-inter text-xs uppercase tracking-widest px-10 py-4 hover:bg-gold-dark transition-colors duration-300 text-center"
                style={{ color: '#FAF8F5' }}
              >
                Shop the Collection
              </Link>
              <Link
                to="/shop"
                className="inline-block font-inter text-xs uppercase tracking-widest px-10 py-4 transition-colors duration-300 text-center"
                style={{ color: '#FAF8F5', border: '1px solid rgba(250,248,245,0.5)' }}
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
        <span className="font-inter text-[10px] uppercase tracking-widest" style={{ color: 'rgba(250,248,245,0.5)' }}>Scroll</span>
        <div className="w-px h-8 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-[slideDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
