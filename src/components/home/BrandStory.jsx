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
    <section ref={containerRef} className="py-16 md:py-24 bg-muted-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c8d9e0"
              data-strk-img="[brand-story-heading] [brand-story-text] jewelry artisan crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs font-sans font-medium tracking-widest uppercase text-accent mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-snug"
            >
              Where Timeless Craft Meets Modern Elegance
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-sm md:text-base text-muted leading-relaxed"
            >
              Born from a love of understated luxury, Velmora creates demi-fine jewelry
              that bridges the gap between everyday wear and heirloom quality. Each piece
              is thoughtfully designed and meticulously crafted with 18K gold plating over
              hypoallergenic metals — because beautiful jewelry should never compromise on comfort.
            </p>
            <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
              We believe in pieces that tell a story, that become part of your daily ritual,
              and that you'll reach for again and again.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border border-accent text-accent px-8 py-3 text-sm font-sans font-medium tracking-widest uppercase hover:bg-accent hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
