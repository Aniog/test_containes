import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="[hero-headline] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-[1]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full py-32">
        <div className="max-w-xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/70 mb-4 font-sans">
            Demi-Fine Jewelry
          </p>
          <h1
            id="hero-headline"
            className="font-serif text-[42px] md:text-[56px] lg:text-[64px] leading-[1.1] text-white font-light"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subhead"
            className="text-[15px] md:text-[16px] text-white/80 mt-6 leading-relaxed max-w-md font-light"
          >
            Timeless gold jewelry designed for the modern woman. Wear it every day, treasure it forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center h-12 px-10 bg-accent text-white text-[12px] uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors duration-200"
            >
              Shop the Collection
            </Link>
            <Link
              to="/shop?category=necklaces"
              className="inline-flex items-center justify-center h-12 px-10 border border-white/40 text-white text-[12px] uppercase tracking-[0.15em] hover:bg-white/10 transition-colors duration-200"
            >
              View Bestsellers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
