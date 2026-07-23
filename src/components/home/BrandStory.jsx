import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="story" ref={containerRef} className="py-16 md:py-24 border-t border-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-muted overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-k1l2m3"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan crafting gold jewelry"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-tight">
              Our Story
            </h2>
            <p id="brand-story-desc" className="mt-6 text-sm md:text-base text-warm-gray leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. Each piece is thoughtfully designed in our studio and crafted with 18K gold plating over hypoallergenic bases — so you can wear your favorites every day without worry.
            </p>
            <p className="mt-4 text-sm md:text-base text-warm-gray leading-relaxed">
              We believe in slow fashion, timeless design, and the quiet confidence that comes from wearing something truly special. Every Velmora piece is made to be treasured — by you, or by someone you love.
            </p>
            <button className="mt-8 border border-gold text-gold px-8 py-3 text-xs uppercase tracking-[0.15em] font-sans font-medium bg-transparent hover:bg-gold hover:text-cream transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
