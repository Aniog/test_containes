import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-muted-bg" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-charcoal overflow-hidden">
            <div
              className="w-full h-full"
              data-strk-bg-id="brand-story-img-b8c9d0"
              data-strk-bg="[brand-story-heading] [brand-story-text] artisan crafting gold jewelry"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal mb-6"
            >
              A Legacy of Craft
            </h2>
            <p
              id="brand-story-text"
              className="text-muted leading-relaxed mb-6"
            >
              Every Velmora piece begins with a sketch and a story. We believe jewelry should be
              more than an accessory — it should be a quiet companion to life's most meaningful
              moments. Our artisans hand-finish each piece with 18K gold plating over hypoallergenic
              brass, ensuring beauty that lasts and comfort that endures.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Founded on the principle that luxury should be accessible, we craft demi-fine jewelry
              that bridges the gap between costume and fine — without compromise.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-accent text-accent text-sm uppercase tracking-wider font-medium pb-1 hover:text-accent-hover hover:border-accent-hover transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
