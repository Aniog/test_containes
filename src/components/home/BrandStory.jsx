import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion } from 'framer-motion';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-primary">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
           <img 
            data-strk-img-id="brand-story-img"
            data-strk-img="editorial jewelry designer workshop gold tools"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            className="w-full h-full object-cover"
            alt="Our Workshop"
           />
        </div>
        <div className="flex flex-col items-start max-w-lg">
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-gold mb-6">Our Heritage</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-wide mb-8 leading-tight">Quiet luxury, <br/> crafted for the modern woman.</h2>
          <p className="font-sans text-black/60 leading-relaxed mb-10">
            Founded with a vision to redefine demi-fine jewelry, VELMORA blends timeless Roman-inspired elegance with contemporary craftsmanship. Each piece is meticulously designed to be lived in, layered, and loved for a lifetime.
          </p>
          <a 
            href="/about"
            className="font-sans text-xs uppercase tracking-[0.2em] border-b border-black pb-2 hover:text-gold hover:border-gold transition-all"
          >
            Discover Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
