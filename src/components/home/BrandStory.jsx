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
    <section className="py-24" ref={containerRef}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-24">
        <div className="relative aspect-[4/5] bg-secondary overflow-hidden">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-title] [story-desc] artisan jewelry workshop model"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt="Artisanal craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-8 max-w-lg">
          <h2 id="story-title" className="text-4xl md:text-5xl font-serif leading-tight">
            Designed for the <br /> Modern Woman
          </h2>
          <p id="story-desc" className="text-muted-foreground font-light leading-relaxed text-lg">
            At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions. 
            Our demi-fine collections blend 18K gold plating with artisanal craftsmanship to create pieces that 
            feel premium yet accessible. Every design is a tribute to quiet luxury and timeless style.
          </p>
          <div className="pt-4">
            <Link
              to="/about"
              className="inline-block border border-border px-10 py-4 brand-title text-sm hover:bg-foreground hover:text-background transition-all"
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
