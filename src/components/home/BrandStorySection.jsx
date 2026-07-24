import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[var(--velmora-bg-alt)]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square lg:aspect-auto">
          <div
            data-strk-bg-id="brand-story-bg-d4e5f6"
            data-strk-bg="[brand-story-text] [our-story-title]"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="1200"
            className="absolute inset-0"
          />
        </div>

        {/* Text */}
        <div className="flex items-center justify-center p-8 sm:p-12 lg:p-20">
          <div className="max-w-md">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--velmora-accent)] mb-4">
              Our Story
            </p>
            <h2 id="our-story-title" className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              Where Craft Meets Consciousness
            </h2>
            <p id="brand-story-text" className="text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              Velmora was born from a simple belief: luxury jewelry shouldn't come at a luxury price. 
              Each piece is thoughtfully designed and crafted with 18K gold plating over recycled brass, 
              creating demi-fine jewelry that honors both your style and the planet.
            </p>
            <Link to="/about">
              <button className="btn-outline">
                Read Our Story
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
