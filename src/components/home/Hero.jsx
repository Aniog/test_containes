import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-velmora-obsidian"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subheadline] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-obsidian/70 via-velmora-obsidian/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="font-inter text-xs uppercase tracking-[0.3em] mb-6 animate-fade-in-up" style={{ color: '#C9A96E' }}>
              New Collection 2024
            </p>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-wide mb-6"
              style={{ color: '#F5EFE6', animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>

            {/* Subhead */}
            <p
              id="hero-subheadline"
              className="font-inter text-sm md:text-base leading-relaxed mb-10 max-w-sm"
              style={{ color: 'rgba(245,239,230,0.75)', animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who moves through the world with intention. 18K gold plated. Hypoallergenic. Made to last.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center font-inter text-xs uppercase tracking-widest px-10 py-4 transition-colors duration-200"
                style={{ backgroundColor: '#C9A96E', color: '#1A1614' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E2C98A'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
              >
                Shop the Collection
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center font-inter text-xs uppercase tracking-widest px-10 py-4 transition-colors duration-200"
                style={{ border: '1px solid rgba(245,239,230,0.4)', color: '#F5EFE6' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A96E'; e.currentTarget.style.color = '#C9A96E'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,239,230,0.4)'; e.currentTarget.style.color = '#F5EFE6'; }}
              >
                Explore Gifts
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-inter text-[10px] uppercase tracking-widest" style={{ color: 'rgba(245,239,230,0.4)' }}>Scroll</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(245,239,230,0.4), transparent)' }} />
      </div>
    </section>
  );
}
