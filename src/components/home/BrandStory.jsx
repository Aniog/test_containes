import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-surface border-y border-border">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-muted overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-heading] [story-text]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <h2 id="story-heading" className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-foreground">
              Our Story
            </h2>
            <div className="w-12 h-0.5 bg-accent mt-4" />
            <p id="story-text" className="text-foreground-muted text-sm md:text-base leading-relaxed mt-6">
              Velmora was born from a belief that fine jewelry shouldn't be reserved for special occasions alone. 
              We craft demi-fine pieces that transition seamlessly from desk to dinner, from everyday to extraordinary. 
              Every design is thoughtfully made with 18K gold plating and hypoallergenic materials — because you deserve 
              jewelry that feels as good as it looks.
            </p>
            <div className="mt-8">
              <Button variant="outline" asChild>
                <Link to="/about">Read Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}