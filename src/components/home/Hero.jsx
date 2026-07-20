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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-velmora-9f3a2b"
        data-strk-bg="warm lit gold jewelry model editorial portrait close up demi-fine luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <p
            id="hero-eyebrow"
            className="font-inter text-xs tracking-widest3 uppercase text-gold mb-6"
          >
            New Collection 2024
          </p>
          <h1
            id="hero-headline"
            className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-ivory leading-[1.05] mb-6"
          >
            Crafted to be<br />
            <em className="italic">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-inter text-sm md:text-base text-ivory/75 leading-relaxed mb-10 max-w-sm"
          >
            Demi-fine gold jewelry for the woman who values beauty in the everyday.
          </p>
          <Link
            to="/shop"
            className="inline-block font-inter text-xs tracking-widest uppercase bg-gold text-ivory px-10 py-4 hover:bg-gold-dark transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-12 bg-ivory/50 animate-pulse" />
      </div>
    </section>
  );
}
