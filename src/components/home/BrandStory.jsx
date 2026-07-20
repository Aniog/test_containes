import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="story" className="py-16 md:py-24 bg-sand/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img-k1l2m3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal leading-snug">
              Jewelry That Tells Your Story
            </h2>
            <p id="brand-story-desc" className="mt-6 text-taupe leading-relaxed">
              Born from a belief that luxury should be accessible, Velmora creates demi-fine jewelry 
              for women who appreciate quality craftsmanship without the traditional markup. Each piece 
              is designed in our London studio and crafted with 18K gold plating over hypoallergenic 
              base metals — beautiful enough for special occasions, durable enough for every day.
            </p>
            <p className="mt-4 text-taupe leading-relaxed">
              We believe in slow fashion, timeless design, and the quiet confidence that comes from 
              wearing something truly beautiful.
            </p>
            <a
              href="#"
              className="inline-block mt-8 text-sm text-charcoal uppercase tracking-wider font-medium border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors no-underline"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
