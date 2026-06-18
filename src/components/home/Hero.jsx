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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main-f8a2b1"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Warm dark overlay */}
      <div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(26,23,20,0.72) 0%, rgba(26,23,20,0.42) 50%, rgba(26,23,20,0.18) 100%)'}} />
      <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(26,23,20,0.52) 0%, transparent 60%)'}} />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            <p
              id="hero-eyebrow"
              className="font-manrope text-xs tracking-[0.2em] uppercase text-gold mb-4"
            >
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl font-light text-ivory leading-[1.05] tracking-wide mb-5"
            >
              Crafted to be<br />
              <em className="not-italic font-normal">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-manrope text-sm md:text-base leading-relaxed mb-8 max-w-sm"
              style={{ color: 'rgba(253,250,246,0.75)' }}
            >
              Demi-fine gold jewelry for the woman who values beauty in the everyday. Hypoallergenic, 18K gold plated.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-gold text-ivory font-manrope text-xs tracking-[0.14em] uppercase px-10 py-4 hover:bg-gold-dark transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-manrope text-[10px] tracking-[0.15em] uppercase text-ivory">Scroll</span>
        <div className="w-px h-8 animate-pulse" style={{backgroundColor: 'rgba(253,250,246,0.4)'}} />
      </div>
    </section>
  );
}
