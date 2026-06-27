import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 border-t border-brand-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-brand-divider overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-e1f2g3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-brand-dark mb-6">
              Our Story
            </h2>
            <p id="brand-story-desc" className="text-brand-body font-sans text-sm md:text-base leading-relaxed mb-6">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over hypoallergenic metals, and finished by hand.
            </p>
            <p className="text-brand-body font-sans text-sm md:text-base leading-relaxed mb-8">
              We create for the woman who values quality and intention — pieces meant to be worn every day, layered with meaning, and passed along with love. No fast fashion. No compromise.
            </p>
            <a
              href="#"
              className="inline-block border-b border-brand-gold text-brand-gold font-sans text-xs tracking-widest uppercase pb-1 hover:text-brand-gold-hover hover:border-brand-gold-hover transition-colors"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
