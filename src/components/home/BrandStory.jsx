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
    <section ref={containerRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative aspect-[3/4] md:aspect-[4/5] bg-secondary">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt="Velmora Studio"
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-desc] [story-title] jewelry making studio"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-white/20 pointer-events-none"></div>
          </div>
          
          {/* Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
            <span className="text-primary text-sm tracking-[0.2em] uppercase">Behind the Brand</span>
            <h2 id="story-title" className="text-4xl md:text-5xl font-serif">Quiet Luxury, Everyday.</h2>
            <div className="w-12 h-[1px] bg-primary"></div>
            
            <div id="story-desc" className="space-y-4 text-muted-foreground leading-relaxed mt-4">
              <p>
                Velmora was born from a simple belief: fine jewelry shouldn't be reserved 
                only for special occasions. It should be lived in, layered, and loved every day.
              </p>
              <p>
                We bridge the gap between costume jewelry and fine jewelry, creating 
                tarnish-resistant, hypoallergenic demi-fine pieces that offer the 
                luxurious look and feel of solid gold without the traditional markup.
              </p>
            </div>
            
            <div className="pt-6">
              <Button asChild variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
