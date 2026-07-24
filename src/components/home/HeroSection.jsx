import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="relative h-[100dvh] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-headline] [hero-subheadline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Fallback / overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-base/30 via-base/10 to-base/60" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/80">
          New Collection
        </p>
        <h1
          id="hero-headline"
          className="max-w-3xl font-serif text-5xl font-normal leading-[1.1] md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subheadline"
          className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/90 md:text-base"
        >
          Demi-fine jewelry in 18K gold plate. Designed for the women who wear elegance effortlessly.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-block bg-accent px-10 py-4 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-accent-hover"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
