import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] rounded-sm overflow-hidden relative">
            <img
              data-strk-img-id="brand-story-img-f4g5h6"
              data-strk-img="[brand-story-title] [brand-story-desc]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <span className="text-xs tracking-widest uppercase text-brand-gold font-sans font-medium">
              Our Story
            </span>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl text-brand-charcoal font-light mt-4 leading-snug"
            >
              Where Craftsmanship Meets Modern Elegance
            </h2>
            <p
              id="brand-story-desc"
              className="mt-6 text-sm md:text-base text-brand-stone leading-relaxed font-sans"
            >
              Born from a belief that luxury should be accessible, Velmora creates demi-fine jewelry 
              that bridges the gap between costume and fine. Each piece is thoughtfully designed in our 
              studio, crafted with 18K gold plating over premium metals, and finished with the kind of 
              attention to detail you'd expect from pieces costing ten times more.
            </p>
            <p className="mt-4 text-sm md:text-base text-brand-stone leading-relaxed font-sans">
              We believe jewelry should be worn every day — not saved for special occasions. That's why 
              every Velmora piece is hypoallergenic, water-resistant, and designed to become more 
              beautiful with time.
            </p>
            <a
              href="#"
              className="inline-block mt-8 text-xs tracking-widest uppercase text-brand-charcoal font-sans font-medium border-b border-brand-charcoal pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors duration-300 no-underline"
            >
              Read Our Full Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
