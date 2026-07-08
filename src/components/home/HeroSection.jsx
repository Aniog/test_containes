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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-a3f2c1"
        data-strk-bg="gold jewelry on model close up warm light editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-white/70 mb-4 animate-fade-in">
          Fine Jewelry Collection
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.15s' }}>
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-white/80 text-sm md:text-base max-w-lg mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Premium demi-fine jewelry in 18K gold. Designed for the modern woman who values timeless elegance.
        </p>
        <Link
          to="/collection"
          className="btn-primary bg-bg-accent text-white hover:bg-bg-accent-hover animate-fade-in"
          style={{ animationDelay: '0.45s' }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-white/30 mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scrollDown_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
