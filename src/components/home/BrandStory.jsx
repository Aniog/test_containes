import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-brand-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] bg-brand-ivory overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-w2x3y4"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal leading-tight">
              Jewelry That Tells Your Story
            </h2>
            <p id="brand-story-desc" className="mt-6 text-brand-muted leading-relaxed">
              At Velmora, we believe luxury should be accessible. Each piece is thoughtfully designed
              in our studio, crafted with 18K gold plating over hypoallergenic metals, and finished
              with the kind of detail you'd expect from fine jewelry — at a fraction of the price.
            </p>
            <p className="mt-4 text-brand-muted leading-relaxed">
              From our signature ear cuffs to our bestselling huggie hoops, every design is made
              to be worn every day, layered with intention, and treasured for years to come.
            </p>
            <button className="mt-8 border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-wider uppercase font-medium hover:bg-brand-charcoal hover:text-brand-cream transition-colors">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
