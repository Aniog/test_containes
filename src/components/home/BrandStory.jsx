import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; // Make sure this path exists or omit for now

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      if(strkImgConfig && containerRef.current) {
        requestAnimationFrame(() => {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
      }
    } catch(e) {
      console.warn("ImageHelper setup skipped for now", e);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] bg-muted relative">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Jewelry crafting process"
                className="absolute inset-0 w-full h-full object-cover"
                data-strk-img-id="brand-story-img"
                data-strk-img="gold jewelry designer delicate craftsmanship"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
              />
            </div>
            {/* Decorative offset border */}
            <div className="absolute -inset-4 md:-inset-6 border border-primary/30 z-[-1] translate-y-8 translate-x-8 md:translate-y-12 md:translate-x-12" />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="uppercase tracking-[0.2em] text-muted-foreground text-sm mb-6">Our Philosophy</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Quiet Luxury, <br/>
              Loud Confidence.
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6 font-light max-w-lg">
              Velmora was born from a desire to bridge the gap between inaccessible fine jewelry and fleeting fast fashion. We believe in the power of a delicate chain and the subtle statement of a perfect gold huggie.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-10 font-light max-w-lg">
              Every piece is designed thoughtfully to be lived in, layered, and loved—crafted with high-quality gold vermeil over sterling silver, ensuring your treasures retain their luster long after the first wear.
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center tracking-[0.15em] uppercase text-sm border-b border-foreground pb-1 w-max hover:text-primary hover:border-primary transition-colors"
            >
              Read Our Story
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}