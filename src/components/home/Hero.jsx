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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-headline] [hero-subheadline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-charcoal"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="max-w-2xl">
            <p className="text-gold-light text-sm tracking-widest uppercase font-sans font-medium mb-3">
              New Collection
            </p>
            <h1
              id="hero-headline"
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-white leading-tight"
            >
              Crafted to be
              <br />
              <span className="italic font-light">Treasured</span>
            </h1>
            <p
              id="hero-subheadline"
              className="text-lg md:text-xl text-white/80 font-sans font-light mt-4 max-w-lg leading-relaxed"
            >
              Demi-fine gold jewelry, thoughtfully designed for the woman who values quiet elegance.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-8 bg-gold text-white px-10 py-4 font-sans text-sm tracking-widest uppercase hover:bg-gold-dark transition-all duration-300 rounded-none"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}