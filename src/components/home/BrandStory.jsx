import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-ivory" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-dark relative overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-img-m4n5o6"
              data-strk-bg="[brand-story-title] [brand-story-desc]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-espresso">
              Our Story
            </h2>
            <p id="brand-story-desc" className="mt-6 text-sm md:text-base text-walnut leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is — without the traditional luxury markup. We work directly with master artisans to craft demi-fine pieces in 18K gold that are designed to be worn every day and treasured for years.
            </p>
            <p className="mt-4 text-sm md:text-base text-walnut leading-relaxed">
              Each piece is thoughtfully designed in our London studio and crafted using recycled metals and ethically sourced stones. Because beautiful jewelry should never come at the cost of our planet.
            </p>
            <a
              href="#"
              className="inline-block mt-8 text-xs uppercase tracking-widest font-medium text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
