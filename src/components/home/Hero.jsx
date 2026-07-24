import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-001"
        data-strk-bg="gold jewelry elegant fashion"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(26, 26, 26, 0.35)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          className="font-sans text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto font-light"
          style={{ textShadow: '0 1px 10px rgba(0,0,0,0.3)' }}
        >
          Demi-fine jewelry designed for the modern woman. 
          Elegant pieces that transition from day to night.
        </p>
        <Link
          to="/shop"
          className="btn-primary inline-block"
          style={{
            backgroundColor: 'var(--color-gold)',
            color: 'var(--color-charcoal)'
          }}
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}