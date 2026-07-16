import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-brand-ivory">
            <img
              data-strk-img-id="brand-story-img-x5y2z8"
              data-strk-img="[brand-story-title] [brand-story-desc] artisan crafting gold jewelry workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal leading-snug">
              Designed with Intention, Crafted with Care
            </h2>
            <p id="brand-story-desc" className="mt-6 font-sans text-sm md:text-base text-brand-graphite leading-relaxed">
              Every Velmora piece begins as a sketch inspired by the women who wear them — confident, 
              graceful, unapologetically themselves. We believe fine jewelry shouldn't require a fine 
              jewelry budget. That's why we use premium 18K gold plating over hypoallergenic bases, 
              creating pieces that look and feel luxurious without the luxury price tag.
            </p>
            <p className="mt-4 font-sans text-sm md:text-base text-brand-graphite leading-relaxed">
              From our studio to your jewelry box, each piece is quality-checked by hand and packaged 
              with the same care we'd give a gift to someone we love.
            </p>
            <button className="mt-8 border border-brand-charcoal text-brand-charcoal px-8 py-3 font-sans text-xs uppercase tracking-wide-xl hover:bg-brand-charcoal hover:text-white transition-colors bg-transparent cursor-pointer">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
