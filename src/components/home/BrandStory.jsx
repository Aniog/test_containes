import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-f3g4h5"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl font-normal text-charcoal"
            >
              Our Story
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-base text-muted font-sans leading-relaxed"
            >
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as the moments she wears it for. We craft each piece with intention — blending timeless design with modern sensibility, using ethically sourced materials and 18K gold plating that lasts.
            </p>
            <p className="mt-4 text-base text-muted font-sans leading-relaxed">
              From our studio to your jewelry box, every detail is considered. No middlemen, no markups — just beautiful pieces at prices that make luxury accessible.
            </p>
            <button className="mt-8 border border-gold text-gold hover:bg-gold hover:text-cream text-xs font-sans font-medium uppercase tracking-widest px-8 py-3 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
