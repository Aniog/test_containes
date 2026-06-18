import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-title] [brand-story-text]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs uppercase tracking-widest text-gold font-medium mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light leading-tight">
              Born from a Love of Timeless Design
            </h2>
            <p id="brand-story-text" className="text-stone text-base leading-relaxed mt-6">
              Velmora was founded on the belief that luxury should be accessible. Each piece in our collection is thoughtfully designed and meticulously crafted using 18K gold plating over hypoallergenic base metals — delivering the look and feel of fine jewelry at a fraction of the price.
            </p>
            <p className="text-stone text-base leading-relaxed mt-4">
              We believe jewelry should be worn every day, not saved for special occasions. Our designs are made to layer, stack, and style — becoming part of your personal story.
            </p>
            <button className="mt-8 border border-charcoal text-charcoal px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-charcoal hover:text-ivory transition-all duration-300 bg-transparent cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
