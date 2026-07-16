import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  return (
    <section ref={containerRef} className="py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-6 aspect-[4/5] md:aspect-square overflow-hidden bg-neutral-100 relative">
            <img
              data-strk-img-id="story-v2-img"
              data-strk-img="[story-v2-sub] [story-v2-title] studio jewelry design"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora Studio"
              className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
            />
          </div>
          <div className="md:col-span-6 md:pl-16 space-y-10">
            <div className="space-y-4">
               <p id="story-v2-sub" className="text-[10px] uppercase tracking-[0.5em] text-accent font-bold">The Essence of Velmora</p>
               <h2 id="story-v2-title" className="text-4xl md:text-6xl font-serif leading-[1.1] font-medium">Fine Details for Forever Wear</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-light italic border-l-2 border-black/5 pl-8 py-2">
              "Founded on the principle that luxury should be felt in the every day, not just the exception. Velmora is jewelry for the woman who finds poetry in the details."
            </p>
            <div className="space-y-6 text-sm text-neutral-700 leading-loose max-w-lg">
              <p>
                Our collections are designed in-house with a focus on 'Quiet Luxury'. We strip away the loud and the generic to focus on form, weight, and the warm glow of high-quality gold plating.
              </p>
              <p>
                Every piece is hypoallergenic and crafted from recycled metals, because we believe the things you treasure should also respect the world they come from.
              </p>
            </div>
            <div className="pt-6">
              <Link to="/about" className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-primary pb-1 group inline-flex items-center space-x-2">
                <span>Discover our journey</span>
                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
