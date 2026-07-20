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
    <section ref={containerRef} className="relative h-screen min-h-[600px]">
      <div
        className="absolute inset-0 bg-foreground/30"
        data-strk-bg-id="hero-bg-velmora-1a2b3c"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 text-xs uppercase tracking-brand opacity-90">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-3xl font-serif text-5xl leading-[1.1] md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-6 max-w-md text-sm font-light leading-relaxed opacity-90 md:text-base"
        >
          Elevated essentials designed for everyday luxury — made to layer, love, and last.
        </p>
        <Link
          to="/shop"
          className="mt-8 bg-accent px-10 py-4 text-xs font-medium uppercase tracking-brand text-white transition-colors hover:bg-accent-hover"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
