import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-base">
      <span id="hero-title" className="sr-only" aria-hidden="true">
        Velmora Fine Jewelry gold earrings necklace editorial warm light
      </span>
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-main"
        data-strk-bg="[hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-base/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end md:justify-center items-start px-5 md:px-8 lg:px-12 pb-20 md:pb-0 max-w-7xl mx-auto w-full">
        <div className="max-w-xl">
          <p className="text-ivory/80 text-xs md:text-sm uppercase tracking-[0.2em] font-medium mb-4 md:mb-6">
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ivory mb-5 md:mb-6 leading-[1.05]">
            Crafted to be Treasured
          </h1>
          <p className="text-ivory/80 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 max-w-md">
            Timeless silhouettes in warm 18k gold plate. Designed for the women
            who make everyday moments feel extraordinary.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold text-ivory px-8 md:px-10 py-3.5 md:py-4 text-xs uppercase tracking-[0.16em] font-medium hover:bg-gold-light transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
