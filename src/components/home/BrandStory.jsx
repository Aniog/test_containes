import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
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
              data-strk-img-id="brand-story-img-w1x2y3"
              data-strk-img="[brand-story-text] [brand-story-title] artisan crafting gold jewelry workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <span className="font-sans text-xs font-medium uppercase tracking-widest text-gold">Our Story</span>
            <h2 id="brand-story-title" className="mt-4 font-serif text-3xl md:text-4xl text-charcoal font-light leading-snug">
              Where Craft Meets Intention
            </h2>
            <p id="brand-story-text" className="mt-6 text-base text-stone font-sans leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. Each piece is thoughtfully designed in our studio and crafted with 18K gold plating over hypoallergenic metals — so you can wear your favorites every day without worry.
            </p>
            <p className="mt-4 text-base text-stone font-sans leading-relaxed">
              We believe in slow fashion, timeless design, and the quiet confidence that comes from wearing something truly special.
            </p>
            <button className="mt-8 px-6 py-3 border border-charcoal text-charcoal font-sans text-sm font-medium uppercase tracking-widest hover:bg-charcoal hover:text-white transition-all duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
