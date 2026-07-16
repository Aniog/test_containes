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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#1A1714' }}
      />

      {/* Dark overlays — inline styles for guaranteed rendering */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(26,23,20,0.82) 0%, rgba(26,23,20,0.55) 55%, rgba(26,23,20,0.15) 100%)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(26,23,20,0.6) 0%, transparent 60%)' }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            <p
              className="font-manrope text-xs uppercase tracking-widest-xl mb-6 font-medium"
              style={{ color: '#C9A96E', letterSpacing: '0.2em' }}
            >
              Demi-Fine Gold Jewelry
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-wide mb-6"
              style={{ color: '#F5F0E8' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-manrope text-sm md:text-base leading-relaxed mb-10 max-w-sm"
              style={{ color: 'rgba(245,240,232,0.72)' }}
            >
              Warm gold jewelry for the woman who moves through the world with intention. Demi-fine pieces made to be worn every day.
            </p>
            <Link
              to="/shop"
              className="inline-block font-manrope text-xs uppercase font-semibold px-10 py-4 transition-all duration-300"
              style={{
                backgroundColor: '#C9A96E',
                color: '#1A1714',
                letterSpacing: '0.12em',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#E2C98A'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#C9A96E'; }}
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.7))' }} />
      </div>
    </section>
  );
}
