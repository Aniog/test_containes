import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-heading] [hero-subheading]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='900' viewBox='0 0 1600 900'%3E%3Crect fill='%234a3f35' width='1600' height='900'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-muted-gold/90 text-xs md:text-sm tracking-[0.25em] uppercase mb-4 font-sans">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-heading"
          className="text-white font-serif text-5xl md:text-7xl lg:text-8xl leading-tight max-w-4xl"
        >
          Crafted to be<br />Treasured
        </h1>
        <p
          id="hero-subheading"
          className="text-white/80 text-base md:text-lg mt-4 max-w-xl font-sans font-light"
        >
          Discover demi-fine gold jewelry designed for everyday elegance and timeless beauty.
        </p>
        <Link
          to="/shop"
          className="group inline-flex items-center gap-2 mt-8 bg-warm-gold text-white px-8 py-3.5 text-sm tracking-wider uppercase rounded-sm hover:bg-warm-gold/90 transition-all duration-300"
        >
          Shop the Collection
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
}