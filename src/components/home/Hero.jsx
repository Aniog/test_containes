import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-velvet-900/70 via-velvet-900/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
        <div className="max-w-xl">
          <p
            id="hero-eyebrow"
            className="font-sans text-xs tracking-widest3 uppercase text-gold mb-4 md:mb-6"
          >
            New Collection
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ivory-100 leading-tight mb-4 md:mb-6"
          >
            Crafted to be<br />
            <em className="italic">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-sans text-sm md:text-base text-ivory-200 font-light mb-8 md:mb-10 max-w-sm leading-relaxed"
          >
            Demi-fine gold jewelry for the woman who moves through the world with intention. Hypoallergenic. Timeless.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold text-velvet-900 px-10 py-4 font-sans text-xs tracking-widest2 uppercase font-semibold hover:bg-gold-light transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
        <span className="font-sans text-[10px] tracking-widest uppercase text-ivory-200">Scroll</span>
        <div className="w-px h-8 bg-ivory-200 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
