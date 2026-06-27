import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden bg-velmora-base">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p
          id="hero-overline"
          className="text-white/70 text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium mb-6"
        >
          New Collection
        </p>
        <h1
          id="hero-title"
          className="font-serif text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] max-w-4xl"
        >
          Crafted to be<br />Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/70 text-sm md:text-base font-light mt-6 max-w-md leading-relaxed"
        >
          Demi-fine gold jewelry designed for everyday luxury and moments that matter.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-block bg-velmora-accent hover:bg-velmora-accent-hover text-white text-xs md:text-sm tracking-[0.2em] uppercase font-medium px-10 py-4 transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
