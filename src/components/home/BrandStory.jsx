import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 sm:py-24 border-t border-border" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b1c2d3e4"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan crafting gold jewelry workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2 id="brand-story-title" className="font-serif text-3xl sm:text-4xl text-charcoal">Our Story</h2>
            <p id="brand-story-desc" className="mt-6 font-sans text-sm text-muted-fg leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. 
              Each piece in our collection is thoughtfully designed and meticulously crafted using 18K gold plating 
              over hypoallergenic metals, ensuring lasting beauty that's gentle on your skin.
            </p>
            <p className="mt-4 font-sans text-sm text-muted-fg leading-relaxed">
              We work directly with skilled artisans to bring you demi-fine pieces that bridge the gap between 
              costume and fine jewelry — timeless designs you'll reach for every day, at a price that feels right.
            </p>
            <a
              href="#"
              className="inline-block mt-8 font-sans text-sm uppercase tracking-wider text-accent border-b border-accent pb-0.5 hover:text-accent-light hover:border-accent-light transition-colors no-underline"
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
