import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 border-t border-stone">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-f9g0h1"
              data-strk-img="[brand-story-title] [brand-story-desc]"
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
            <p id="brand-story-desc" className="text-warm-gray leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is — without the luxury markup. We craft each piece with 18K gold plating over hypoallergenic metals, ensuring lasting beauty that's kind to your skin.
            </p>
            <p className="text-warm-gray leading-relaxed mb-6">
              From our studio, every design is thoughtfully created to transition seamlessly from morning coffee to evening cocktails. Timeless, versatile, and always elegant.
            </p>
            <a
              href="#"
              className="inline-block text-sm font-sans font-medium text-gold uppercase tracking-widest hover:text-gold-dark transition-colors no-underline border-b border-gold/30 pb-0.5"
            >
              Read Our Full Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
