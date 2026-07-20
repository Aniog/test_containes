import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="story" className="py-16 md:py-24 border-t border-border-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img
              data-strk-img-id="brand-story-img-b8c9d0"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
              Our Story
            </h2>
            <p id="brand-story-desc" className="text-muted-fg leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. 
              Each piece is thoughtfully designed in our studio and crafted with 18K gold plating over premium metals, 
              creating jewelry that looks and feels like fine gold — at a fraction of the cost.
            </p>
            <p className="text-muted-fg leading-relaxed mb-8">
              We believe in slow fashion, timeless design, and pieces that become part of your story. 
              From our hands to yours, every Velmora piece is made to be treasured.
            </p>
            <span className="inline-block text-sm text-charcoal border-b border-charcoal pb-0.5 cursor-pointer hover:text-gold hover:border-gold transition-colors">
              Read More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
