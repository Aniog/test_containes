import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-f8g9h0"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs tracking-widest uppercase font-sans text-gold mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light leading-tight">
              Where Craftsmanship Meets Modern Elegance
            </h2>
            <p id="brand-story-desc" className="mt-6 text-muted font-sans text-sm md:text-base leading-relaxed">
              Born from a love of timeless design and accessible luxury, Velmora creates demi-fine jewelry
              that bridges the gap between costume and fine. Each piece is thoughtfully designed in our studio,
              crafted with 18K gold plating over premium metals, and finished with the kind of attention to
              detail you'd expect from pieces costing ten times more.
            </p>
            <p className="mt-4 text-muted font-sans text-sm md:text-base leading-relaxed">
              We believe every woman deserves jewelry that makes her feel extraordinary — without the
              extraordinary price tag.
            </p>
            <button className="mt-8 border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-gold hover:text-cream transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
