import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-espresso">
            <img
              data-strk-img-id="brand-story-img-z4a5b6"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan jewelry craftsmanship gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs uppercase tracking-widest text-gold mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
              Where Craft Meets Intention
            </h2>
            <p id="brand-story-desc" className="mt-6 text-sm text-stone leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. 
              Each piece is thoughtfully designed in our studio and crafted with 18K gold plating over hypoallergenic 
              metals — so you can wear your favorites every day without worry.
            </p>
            <p className="mt-4 text-sm text-stone leading-relaxed">
              We believe in slow fashion, timeless design, and the quiet confidence that comes from wearing 
              something made with care. No trends, no fast fashion — just pieces you'll reach for again and again.
            </p>
            <a
              href="#"
              className="inline-block mt-8 border border-gold text-gold px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-gold hover:text-white transition-colors"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
