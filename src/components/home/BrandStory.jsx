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
    <section ref={containerRef} className="py-24 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
             <div
              className="absolute inset-0"
              data-strk-bg-id="story-bg-velmora"
              data-strk-bg="[story-title] [story-desc] jewelry atelier hands crafting"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="1200"
            />
          </div>

          {/* Text Side */}
          <div className="flex flex-col items-start max-w-lg">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4">Our Heritage</span>
            <h2 id="story-title" className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Honoring the Ritual of Self-Adornment
            </h2>
            <p id="story-desc" className="text-muted-foreground leading-relaxed mb-10 font-light">
              Velmora was born from a desire to create demi-fine jewelry that balances timeless elegance with modern accessibility. Every piece is designed to be a quiet companion to your daily rituals, crafted in small batches with meticulous attention to detail.
            </p>
            <Link 
              to="/about" 
              className="text-sm uppercase tracking-[0.2em] font-medium border-b border-foreground pb-2 hover:opacity-60 transition-opacity"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
