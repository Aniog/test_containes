import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] rounded-sm overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-g0h1i2"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan gold jewelry crafting workshop"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-xs font-sans font-semibold uppercase tracking-wide-xl text-brand-gold mb-4">
              Our Story
            </p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-brand-espresso font-light leading-snug">
              Where Timeless Craft Meets Modern Elegance
            </h2>
            <p id="brand-story-desc" className="mt-6 text-sm md:text-base text-brand-muted font-sans leading-relaxed">
              Born from a belief that luxury should be accessible, Velmora creates demi-fine jewelry 
              that bridges the gap between costume and fine. Each piece is thoughtfully designed, 
              meticulously crafted with 18K gold plating over hypoallergenic base metals, and made 
              to be worn every day — not just on special occasions.
            </p>
            <p className="mt-4 text-sm md:text-base text-brand-muted font-sans leading-relaxed">
              We believe in slow fashion, intentional design, and pieces that tell a story. 
              From our studio to your jewelry box, every Velmora piece is crafted to be treasured.
            </p>
            <button className="mt-8 px-6 py-3 border border-brand-charcoal text-brand-charcoal text-sm font-sans font-medium uppercase tracking-wide-xl rounded-sm bg-transparent hover:bg-brand-charcoal hover:text-brand-cream transition-all duration-300 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
