import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-ivory overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-j0k1l2"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs uppercase tracking-button text-gold font-medium mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-tight">
              Where Timeless Craft Meets Modern Elegance
            </h2>
            <p id="brand-story-desc" className="text-stone leading-relaxed mb-6">
              Born from a love of fine craftsmanship and accessible luxury, Velmora creates jewelry 
              that bridges the gap between costume and fine. Each piece is thoughtfully designed in 
              our studio, hand-finished with 18K gold plating, and made to be worn every day — 
              from morning coffee to evening cocktails.
            </p>
            <p className="text-stone leading-relaxed mb-8">
              We believe beautiful jewelry shouldn't require a special occasion. It should be part 
              of your everyday ritual — a quiet confidence you carry with you.
            </p>
            <span className="inline-block text-xs uppercase tracking-button text-charcoal font-medium border-b border-charcoal pb-1 cursor-pointer hover:text-gold hover:border-gold transition-colors">
              Read More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
