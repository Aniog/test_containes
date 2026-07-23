import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-obsidian"
        data-strk-bg-id="hero-bg-main-f1a2b3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay — inline style guarantees render regardless of layer order */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(26,23,20,0.78) 0%, rgba(26,23,20,0.45) 55%, rgba(26,23,20,0.15) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full">
          <div className="max-w-xl">
            <p
              id="hero-eyebrow"
              className="font-manrope text-xs uppercase tracking-widest mb-4 animate-fadeIn"
              style={{ color: '#C9A96E' }}
            >
              New Collection
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-5 animate-fadeIn"
              style={{ color: '#FAF8F4', animationDelay: '0.1s' }}
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-manrope text-sm leading-relaxed mb-8 max-w-sm animate-fadeIn"
              style={{ color: 'rgba(250,248,244,0.70)', animationDelay: '0.2s' }}
            >
              Demi-fine gold jewelry for the woman who knows her worth. Hypoallergenic, ethically made, endlessly wearable.
            </p>
            <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/shop"
                className="inline-block font-manrope text-xs uppercase tracking-widest px-10 py-4 transition-colors duration-300"
                style={{ backgroundColor: '#C9A96E', color: '#FAF8F4' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#A07840'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        <span className="font-manrope text-[10px] uppercase tracking-widest" style={{ color: 'rgba(250,248,244,0.4)' }}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ivory/40 to-transparent" />
      </div>
    </section>
  );
}
