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
    <section ref={containerRef} className="relative h-[85vh] md:h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-background-main"
        data-strk-bg="warm gold jewelry close up elegant model wearing necklace earrings luxury editorial photography"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/20 to-transparent" />

      {/* Content */}
      <div className="relative h-full container-narrow flex flex-col items-start justify-end pb-20 md:pb-28">
        <div className="max-w-xl">
          <p className="text-xs font-medium tracking-widest-2xl uppercase text-gold-300 mb-4 animate-fade-in">
            Velmora Fine Jewelry
          </p>
          <h1 className="heading-display text-cream-50 mb-5 animate-slide-up" id="hero-title">
            Crafted to be Treasured
          </h1>
          <p className="text-sm md:text-base text-cream-300 leading-relaxed mb-8 max-w-md animate-slide-up" style={{ animationDelay: '0.15s' }}>
            Premium demi-fine jewelry designed for the modern woman. 18K gold plated, hypoallergenic, and made to last.
          </p>
          <Link
            to="/shop"
            className="btn-gold animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
