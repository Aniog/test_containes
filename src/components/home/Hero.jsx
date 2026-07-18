import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { placeholderSrc } from '@/lib/images';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-velmora-espresso"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <img
          src={placeholderSrc}
          alt=""
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/40 via-velmora-espresso/20 to-velmora-espresso/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <p
          id="hero-subtitle"
          className="caption-label text-velmora-cream/90 mb-5 animate-fadeIn"
          style={{ animationDelay: '0.1s' }}
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-velmora-cream mb-6 leading-[1.05] tracking-tight animate-fadeIn"
          style={{ animationDelay: '0.2s' }}
        >
          Crafted to be
          <br />
          Treasured
        </h1>
        <p
          className="font-sans text-base md:text-lg text-velmora-cream/85 max-w-md mx-auto mb-10 leading-relaxed animate-fadeIn"
          style={{ animationDelay: '0.3s' }}
        >
          Timeless pieces for everyday luxury — designed for layering, gifting,
          and keeping forever.
        </p>
        <Link
          to="/shop"
          className="btn-primary animate-fadeIn"
          style={{ animationDelay: '0.4s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn">
        <span className="text-[10px] uppercase tracking-[0.2em] text-velmora-cream/70">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-velmora-cream/70 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
