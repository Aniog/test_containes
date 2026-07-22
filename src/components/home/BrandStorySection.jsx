import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[var(--velmora-cream)] overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg-d4e5f6"
              data-strk-bg="[brand-story-title] [brand-story-subtitle]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--velmora-warm)] mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="velmora-heading text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight"
            >
              Jewelry That Tells Your Story
            </h2>
            <p
              id="brand-story-subtitle"
              className="text-[var(--velmora-text-muted)] leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: luxury shouldn't be out of reach. We create demi-fine jewelry that bridges the gap between everyday wear and special occasion — pieces that feel elevated, without the luxury markup.
            </p>
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over a solid brass base, designed to be hypoallergenic and built to last. Because the jewelry you wear every day deserves the same care as the jewelry you save for occasions.
            </p>
            <Link to="/about" className="velmora-btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
