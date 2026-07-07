import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-linen relative overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-img-7b4e"
              data-strk-bg="[brand-story-heading] [brand-story-text]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-gold">Our Story</span>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl font-medium text-charcoal mt-4 leading-snug"
            >
              Where Craft Meets Intention
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-base text-charcoal/70 leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. 
              Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over hypoallergenic 
              metals, and finished by hand. We create for the woman who values quality, subtlety, and the quiet 
              confidence that comes from wearing something truly special.
            </p>
            <p className="mt-4 text-base text-charcoal/70 leading-relaxed">
              From our materials to our packaging, every detail is considered — because you deserve jewelry 
              that feels as intentional as the life you're building.
            </p>
            <span className="inline-block mt-8 text-sm font-medium text-gold border-b border-gold/40 pb-0.5 cursor-pointer hover:border-gold transition-colors">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
