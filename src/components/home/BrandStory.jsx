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
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1 w-full aspect-[4/5] overflow-hidden relative">
        <img
          data-strk-img-id="brand-story-img"
          data-strk-img="[story-title] [story-text] female model with gold jewelry"
          data-strk-img-ratio="4x5"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Brand Story"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 space-y-8 text-center md:text-left">
        <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">The Velmora Ethos</span>
        <h2 id="story-title" className="text-4xl md:text-6xl font-serif leading-tight">Quiet luxuty, made for every day.</h2>
        <p id="story-text" className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          We believe fine jewelry shouldn't be reserved for special occasions. Velmora was founded on the idea that quality and elegance can be accessible, creating demi-fine pieces that tell your story through timeless design and superior craftsmanship.
        </p>
        <div className="pt-4">
          <Link to="/about" className="uppercase tracking-widest text-xs border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-all">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
