import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-p7q8r9"
              data-strk-img="[brand-story-title] [brand-story-text] jewelry craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
              Our Story
            </h2>
            <p id="brand-story-text" className="text-sm md:text-base text-muted leading-relaxed mb-6">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is. 
              We craft each piece with intention — blending timeless design with modern sensibility. Our 18K gold-plated 
              collections are designed to be worn every day, layered with meaning, and passed down with love.
            </p>
            <p className="text-sm md:text-base text-muted leading-relaxed mb-8">
              From our studio to your jewelry box, every detail is considered. We source responsibly, 
              plate generously, and package beautifully — because the little things matter most.
            </p>
            <span className="inline-block border-b border-gold text-gold text-xs tracking-widest uppercase font-sans pb-1 cursor-pointer hover:text-gold-light transition-colors">
              Read More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
