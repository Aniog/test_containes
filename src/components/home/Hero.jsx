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
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-espresso/70 via-espresso/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            <p className="font-inter text-xs uppercase tracking-widest text-gold mb-4">
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl font-light text-cream leading-tight mb-6"
            >
              Crafted to be<br />
              <em>Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-inter text-sm text-cream/70 leading-relaxed mb-10 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who moves through the world with intention. 18K gold plated. Hypoallergenic. Made to last.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-gold text-cream font-inter text-xs uppercase tracking-widest px-10 py-4 hover:bg-gold-dark transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-cream/30 animate-pulse" />
      </div>
    </section>
  );
}
