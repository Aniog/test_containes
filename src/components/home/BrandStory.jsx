import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-white py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-zinc-50">
           <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-title] [story-desc] jewelry model studio"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Velmora Studio"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="order-1 md:order-2 max-w-lg">
          <span className="text-[10px] uppercase tracking-widestest text-accent font-bold mb-4 block">Our Heritage</span>
          <h2 id="story-title" className="text-4xl md:text-6xl mb-8 leading-tight">Quiet Luxury, Thoughtfully Made.</h2>
          <p id="story-desc" className="text-zinc-600 leading-relaxed mb-10 text-lg font-light">
            VELMORA was born from a desire to create demi-fine jewelry that bridges the gap between fast fashion and fine jewelry. Every piece is crafted in 18K gold plated brass, designed to be worn daily and loved forever.
          </p>
          <Link to="/about" className="btn-outline">
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
