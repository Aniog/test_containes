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
    <section ref={containerRef} className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-1a2b3c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundColor: '#2A2420' }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <p
          id="hero-subtitle"
          className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] mb-4 md:mb-6 opacity-90"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] max-w-4xl"
        >
          Crafted to be<br />Treasured
        </h1>
        <p className="font-sans text-sm md:text-base font-light mt-6 md:mt-8 max-w-md opacity-85 leading-relaxed">
          Timeless pieces designed for the modern woman — elegant, enduring, and effortlessly wearable.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 bg-white text-velmora-text px-10 py-4 text-xs uppercase tracking-widest font-sans font-medium hover:bg-velmora-accent hover:text-white transition-all duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
