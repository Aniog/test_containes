import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b8c9d0"
              data-strk-img="[brand-story-title] [brand-story-desc] jewelry artisan crafting gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
              Our Story
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mb-6" />
            <p id="brand-story-desc" className="text-base text-muted leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is — without the luxury markup. We craft each piece with 18K gold plating over hypoallergenic bases, ensuring lasting beauty that's kind to your skin.
            </p>
            <p className="text-base text-muted leading-relaxed mb-8">
              From our studio, every design is thoughtfully created to transition seamlessly from morning coffee to evening cocktails. Timeless, versatile, and always elegant.
            </p>
            <a
              href="#"
              className="inline-block border border-charcoal text-charcoal px-8 py-3 text-sm uppercase tracking-[0.12em] font-medium hover:bg-charcoal hover:text-white transition-colors"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
