import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-secondary/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-title] [story-desc] woman workshop jewelry"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Brand Story"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          <h2 id="story-title" className="text-4xl md:text-5xl font-serif italic leading-tight">
            Jewelry with <br /> a Soul
          </h2>
          <p id="story-desc" className="text-muted-foreground leading-relaxed text-lg max-w-lg font-light">
            Founded on the belief that luxury should be accessible without compromise, VELMORA creates demi-fine pieces that tell your unique story. Each piece is designed in our New York studio and ethically crafted with 18K gold and recycled precious metals.
          </p>
          <div className="pt-4">
            <Link to="/about">
              <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widestest text-[10px] h-12 px-8">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
