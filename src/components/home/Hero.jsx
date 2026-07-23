import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <div
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-stone-800"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p
          id="hero-subtitle"
          className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-stone-200"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-3xl font-serif text-5xl font-medium leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p className="mt-6 max-w-md text-base font-light leading-relaxed text-stone-200 sm:text-lg">
          Timeless pieces for everyday rituals and unforgettable moments.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-flex items-center gap-3 rounded-sm bg-gold px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-all duration-300 hover:bg-gold-dark hover:gap-4"
        >
          Shop the Collection
          <ArrowRight size={16} strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}