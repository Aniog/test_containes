import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[92vh] items-end overflow-hidden bg-espresso md:items-center"
    >
      <div
        className="absolute inset-0 animate-ken-burns bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-01"
        data-strk-bg="[hero-headline] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          backgroundImage:
            'linear-gradient(to top, rgba(32,25,20,0.72) 0%, rgba(32,25,20,0.25) 45%, rgba(32,25,20,0.15) 100%)',
        }}
      />
      {/* Warm gradient overlay to guarantee legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/25 to-espresso/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-10 md:pb-0">
        <p className="animate-fade-up text-[11px] font-medium uppercase tracking-[0.3em] text-bronze-light">
          Demi-Fine Jewelry · 18K Gold
        </p>
        <h1
          id="hero-headline"
          className="mt-4 max-w-2xl animate-fade-up font-serif text-5xl font-medium leading-[1.05] text-ivory md:text-7xl"
          style={{ animationDelay: '0.15s' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subhead"
          className="mt-5 max-w-md animate-fade-up text-base leading-relaxed text-ivory/85 md:text-lg"
          style={{ animationDelay: '0.3s' }}
        >
          Warm-lit gold pieces for the everyday and the unforgettable — designed to be worn,
          gifted, and kept close.
        </p>
        <div className="mt-9 animate-fade-up" style={{ animationDelay: '0.45s' }}>
          <Link
            to="/shop"
            className="inline-block bg-bronze px-10 py-4 text-[11px] font-medium uppercase tracking-luxe text-ivory transition-all duration-300 hover:bg-bronze-dark hover:shadow-[0_12px_30px_rgba(169,126,63,0.4)]"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="h-10 w-px bg-gradient-to-b from-transparent via-ivory/60 to-ivory/10" />
      </div>
    </section>
  );
}
