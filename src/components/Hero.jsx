import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-ink"
        data-strk-bg-id="hero-bg-7e3d9f"
        data-strk-bg="[hero-heading] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <p id="hero-subhead" className="text-gold-300 text-xs md:text-sm tracking-widest uppercase font-sans mb-4">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-heading"
          className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight max-w-2xl text-balance"
        >
          Crafted to be Treasured
        </h1>
        <p className="text-white/80 font-sans text-sm md:text-base mt-4 max-w-md leading-relaxed">
          Demi-fine gold jewelry designed for the woman who values quiet luxury and enduring style.
        </p>
        <Link
          to="/shop"
          className="btn-primary inline-block mt-8 w-fit bg-gold-500 hover:bg-gold-600 text-white"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}