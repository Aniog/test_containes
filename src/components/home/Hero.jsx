import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { StockBackground } from '@/components/ui/StockImage.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <StockBackground
        id="hero-bg-velmora"
        query="[hero-subtitle] [hero-title]"
        ratio="16x9"
        width="1600"
        className="absolute inset-0"
        containerRef={sectionRef}
      >
        <div className="absolute inset-0 bg-black/40" />
      </StockBackground>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-foreground/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-5xl font-light leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-foreground/90 md:text-lg"
        >
          Elevated essentials in 18k gold plate, designed for the women who wear them every day.
        </p>
        <Link
          to="/shop"
          className="mt-10 bg-accent px-10 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-accent-hover"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
