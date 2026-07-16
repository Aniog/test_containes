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
          <div className="aspect-[4/3] bg-charcoal/5 overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-i1j2k3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
              Our Story
            </h2>
            <p id="brand-story-desc" className="text-stone font-light leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as the moments she wears it for. We craft each piece with intention — blending timeless design with modern sensibility.
            </p>
            <p className="text-stone font-light leading-relaxed mb-8">
              Our demi-fine collections use 18K gold plating over hypoallergenic bases, ensuring lasting beauty without compromise. From our studio to your jewelry box, every detail is considered.
            </p>
            <span className="inline-block border-b border-gold text-sm text-charcoal tracking-wide hover:text-gold transition-colors cursor-pointer">
              Read Our Full Story
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
