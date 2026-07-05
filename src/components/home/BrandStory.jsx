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
    <section ref={containerRef} className="py-24 bg-muted/40 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
          {/* Image Left */}
          <div className="relative aspect-[4/5] overflow-hidden lg:order-1">
            <img
              data-strk-img-id="brand-story-img-8822"
              data-strk-img="[story-title] artisan crafting luxury gold jewelry workshop workspace tools"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Artisanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Right */}
          <div className="space-y-8 lg:order-2 lg:pr-12">
            <div className="space-y-4">
              <h4 id="story-subtitle" className="text-accent uppercase tracking-widest text-xs font-semibold">The Velmora Ethos</h4>
              <h2 id="story-title" className="text-4xl md:text-5xl font-serif leading-tight">Beyond a Keepsake.</h2>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              Founded on the belief that jewelry should be both meaningful and accessible, Velmora bridges the gap between fast-fashion and high-jewelry. Every piece is consciously crafted using 18K gold plating over sustainable brass, ensuring a premium feel that lasts.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              We design with the modern woman in mind—pieces that stack effortlessly, transition from day to night, and tell a story that is uniquely yours.
            </p>

            <Link 
              to="/about" 
              className="inline-block text-xs uppercase tracking-[0.2em] font-semibold border-b border-foreground pb-2 hover:text-accent hover:border-accent transition-all"
            >
              Discover Our Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
