import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-i1j2k3"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan jewelry crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs uppercase tracking-product font-sans text-gold mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light leading-snug">
              Where Timeless Meets Modern
            </h2>
            <p id="brand-story-desc" className="mt-6 text-base text-stone font-sans leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is. 
              We craft each piece with 18K gold plating over hypoallergenic metals, ensuring luxury that's 
              accessible and kind to sensitive skin.
            </p>
            <p className="mt-4 text-base text-stone font-sans leading-relaxed">
              Our designs draw inspiration from architectural forms, organic textures, and the quiet confidence 
              of the modern woman. Each collection tells a story of elegance without excess.
            </p>
            <span className="inline-block mt-8 text-sm font-sans text-gold uppercase tracking-product border-b border-gold pb-1 cursor-pointer hover:text-gold-light hover:border-gold-light transition-colors">
              Read Our Story
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
