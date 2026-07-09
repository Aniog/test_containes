import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <div className="aspect-[4/5] bg-ivory relative overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg-7a4e1c"
              data-strk-bg="[brand-story-title] [brand-story-desc]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              className="absolute inset-0"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Our Story
            </span>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl font-light text-heading mt-4 leading-snug"
            >
              Jewelry with Intention
            </h2>
            <p
              id="brand-story-desc"
              className="mt-6 text-muted leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost the earth — literally or figuratively. Every piece is crafted from recycled metals, plated in rich 18K gold, and designed to become part of your everyday story.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              We work directly with skilled artisans, cutting out the middlemen to bring you demi-fine quality at an accessible price. No compromises on craftsmanship. No compromises on ethics.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm font-medium text-accent uppercase tracking-wider hover:text-accent-hover transition-colors no-underline border-b border-accent pb-0.5"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
