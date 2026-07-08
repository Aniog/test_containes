import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d5e6f7"
              data-strk-img="[brand-story-title] [brand-story-desc] artisan jewelry crafting gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-brand-charcoal">
              Our Story
            </h2>
            <p id="brand-story-desc" className="mt-6 text-brand-muted leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. 
              Each piece in our collection is thoughtfully designed and meticulously crafted using 18K gold plating 
              over hypoallergenic metals — delivering the warmth and weight of fine jewelry at an accessible price point.
            </p>
            <p className="mt-4 text-brand-muted leading-relaxed">
              We design for the modern woman who values quality, subtlety, and self-expression. 
              From our studio to your jewelry box, every Velmora piece is crafted to be treasured.
            </p>
            <button className="mt-8 border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm font-medium tracking-wide-nav uppercase hover:bg-brand-charcoal hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
