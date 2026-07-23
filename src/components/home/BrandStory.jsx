import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 border-t border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] bg-brand-ivory overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-f9g0h1"
              data-strk-img="[brand-story-desc] [brand-story-title] jewelry craftsmanship artisan"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-5xl font-light text-brand-espresso leading-tight"
            >
              Our Story
            </h2>
            <p
              id="brand-story-desc"
              className="text-brand-muted text-sm md:text-base leading-relaxed mt-6"
            >
              Velmora was born from a simple belief: that beautiful jewelry should not come with an impossible price tag. Each piece is thoughtfully designed in our London studio and crafted using 18K gold plating over hypoallergenic metals — so you can wear luxury every day without compromise.
            </p>
            <p className="text-brand-muted text-sm md:text-base leading-relaxed mt-4">
              We believe in slow fashion, timeless design, and pieces that become part of your story. From our hands to yours — crafted to be treasured.
            </p>
            <button className="mt-8 border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-wider uppercase font-medium hover:bg-brand-charcoal hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
