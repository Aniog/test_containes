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
        className="absolute inset-0 bg-espresso"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-velvet/70 via-velvet/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-6 animate-fade-in">
              New Collection — Summer 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.1] mb-6 animate-fade-up"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-base md:text-lg text-cream/75 leading-relaxed mb-10 animate-fade-up"
              style={{ animationDelay: '0.15s' }}
            >
              Demi-fine gold jewelry for the woman who knows her worth.
              18K gold plated. Hypoallergenic. Made to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/shop"
                className="inline-block bg-gold text-cream font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-all duration-300 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-block border border-cream/50 text-cream font-sans text-xs tracking-widest uppercase px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <span className="font-sans text-[10px] tracking-widest uppercase text-cream/50">Scroll</span>
        <div className="w-px h-8 bg-cream/30 relative overflow-hidden">
          <div className="absolute top-0 w-full bg-gold animate-[fadeUp_1.5s_ease_infinite]" style={{ height: '50%' }} />
        </div>
      </div>
    </section>
  );
}
