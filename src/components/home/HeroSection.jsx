import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="gold jewelry luxury editorial warm lighting model wearing necklace"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-velvet-950/80 via-velvet-950/50 to-velvet-950/20" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-0 w-full">
        <div className="max-w-xl">
          <p className="text-overline text-gilded-400 mb-4">
            New Collection 2026
          </p>
          <h1 className="text-display text-white mb-6">
            Crafted to be Treasured
          </h1>
          <p className="text-body-lg text-velvet-200 mb-8 max-w-md leading-relaxed">
            Discover demi-fine jewelry that transitions effortlessly from 
            everyday elegance to unforgettable moments. 18K gold plated, 
            hypoallergenic, designed to last.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/30 text-white text-overline tracking-widest-xl uppercase hover:bg-white/10 transition-all duration-300"
            >
              View Lookbook
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] tracking-widest-2xl uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
