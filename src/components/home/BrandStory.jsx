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
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-a1b2c3d4"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan gold jewelry craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal">
              Our Story
            </h2>
            <p id="brand-story-desc" className="mt-6 text-stone text-base leading-relaxed font-sans">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. 
              Each piece is thoughtfully designed in our studio and crafted with 18K gold plating over hypoallergenic 
              metals — so you can wear your favorites every day without worry.
            </p>
            <p className="mt-4 text-stone text-base leading-relaxed font-sans">
              We believe in quiet luxury — pieces that speak softly but leave a lasting impression. 
              From our hands to yours, every Velmora piece is crafted to be treasured.
            </p>
            <span className="inline-block mt-8 text-gold text-sm uppercase tracking-widest font-sans font-medium cursor-pointer hover:text-gold-dark transition-colors">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
