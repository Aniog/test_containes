import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-linen overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-s1t2u3"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan crafting gold jewelry workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
              Our Story
            </h2>
            <p id="brand-story-desc" className="text-taupe leading-relaxed mb-6">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. Each piece in our collection is thoughtfully designed and meticulously crafted using 18K gold plating over premium base metals.
            </p>
            <p className="text-taupe leading-relaxed mb-8">
              We work directly with skilled artisans to bring you demi-fine pieces that look and feel like fine jewelry — without the markup. From our studio to your jewelry box, every detail is considered.
            </p>
            <span className="inline-block text-sm text-gold uppercase tracking-cta border-b border-gold pb-1 cursor-pointer hover:text-gold-light hover:border-gold-light transition-colors">
              Read More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
