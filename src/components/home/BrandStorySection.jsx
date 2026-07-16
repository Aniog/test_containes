import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-[var(--velmora-bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] bg-[var(--velmora-border-light)] overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg-d4e5f6"
              data-strk-bg="[brand-story-subtitle] [brand-story-title]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              className="absolute inset-0"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-secondary)] mb-4">Our Story</p>
            <h2 id="brand-story-title" className="serif-heading text-3xl md:text-4xl lg:text-5xl text-[var(--velmora-text)] mb-6">
              Jewelry That Tells<br />Your Story
            </h2>
            <p id="brand-story-subtitle" className="text-[var(--velmora-text-secondary)] leading-relaxed mb-8">
              Founded with a simple belief: luxury shouldn't come with a luxury price tag. Every Velmora piece is crafted 
              with 18K gold plating over hypoallergenic base metals, designed to be worn daily and treasured forever. 
              We source responsibly, design thoughtfully, and deliver directly to you.
            </p>
            <Link to="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
