import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-brand-sand/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-brand-ivory">
            <img
              data-strk-img-id="brand-story-img-y5z6a7"
              data-strk-img="[brand-story-text] [brand-story-title] jewelry artisan crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal leading-tight">
              Our Story
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-6 mb-6" />
            <p id="brand-story-text" className="text-brand-muted leading-relaxed text-sm md:text-base">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. 
              Each piece in our collection is thoughtfully designed and meticulously crafted using 18K gold plating 
              over hypoallergenic metals — delivering the look and feel of fine jewelry at an accessible price point.
            </p>
            <p className="text-brand-muted leading-relaxed text-sm md:text-base mt-4">
              We design for the woman who values quality and intention. Every curve, every clasp, every crystal 
              is chosen with care — because the details matter.
            </p>
            <a
              href="#"
              className="inline-block mt-8 border border-brand-charcoal text-brand-charcoal px-8 py-3 text-xs tracking-wide-xl uppercase font-medium hover:bg-brand-charcoal hover:text-white transition-colors"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
