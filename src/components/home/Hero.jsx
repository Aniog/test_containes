import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7a8b9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-espresso/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="hero-animate hero-delay-1 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-ivory font-light leading-tight tracking-wide"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="hero-animate hero-delay-2 mt-4 md:mt-6 font-sans text-sm md:text-base text-brand-ivory/80 tracking-wide max-w-lg mx-auto leading-relaxed"
        >
          Demi-fine gold jewelry designed for everyday elegance. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="hero-animate hero-delay-3 inline-block mt-8 md:mt-10 bg-brand-gold text-brand-ivory px-8 py-3.5 font-sans text-xs tracking-super-wide uppercase font-medium hover:bg-brand-gold-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
