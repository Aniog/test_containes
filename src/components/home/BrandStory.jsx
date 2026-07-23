import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-muted overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c4d8e2"
              data-strk-img="[brand-story-heading] [brand-story-text] jewelry artisan crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Jewelry artisan at work"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:py-8">
            <span className="text-xs tracking-[0.15em] uppercase text-gold font-sans font-medium">
              Our Story
            </span>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl font-light text-charcoal mt-4 leading-snug"
            >
              Where Intention Meets Craft
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-base text-muted-fg leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. Each piece is thoughtfully designed in our studio and crafted with 18K gold plating over hypoallergenic metals — so you can wear your favorites every day, worry-free.
            </p>
            <p className="mt-4 text-base text-muted-fg leading-relaxed">
              We believe in slow fashion, timeless design, and the quiet confidence that comes from wearing something made with care.
            </p>
            <button className="mt-8 border border-gold text-gold px-8 py-3 text-sm tracking-[0.1em] uppercase font-sans font-medium hover:bg-gold hover:text-cream transition-colors bg-transparent">
              Read Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
