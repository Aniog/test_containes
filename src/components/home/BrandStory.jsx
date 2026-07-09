import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] rounded-sm overflow-hidden">
            <img
              alt="Velmora artisan crafting jewelry"
              data-strk-img-id="brand-story-img-g7h8"
              data-strk-img="[brand-story-heading] [brand-story-text]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <span className="text-xs uppercase tracking-widest text-gold font-medium">Our Story</span>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-charcoal mt-4 leading-snug">
              Where Craft Meets Intention
            </h2>
            <p id="brand-story-text" className="mt-6 text-muted leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost the earth — 
              literally or figuratively. Each piece is designed in our London studio and crafted by 
              skilled artisans using recycled metals and ethically sourced stones.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We create demi-fine pieces that bridge the gap between costume and fine jewelry. 
              Thick gold plating over solid brass means our jewelry lasts — and looks — like pieces 
              worth many times the price.
            </p>
            <a
              href="#"
              className="inline-block mt-8 text-sm font-medium text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors"
            >
              Read Our Full Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
