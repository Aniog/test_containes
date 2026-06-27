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
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-gold-light rounded-sm overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-5f6a7b"
              data-strk-img="[brand-story-title] [brand-story-subtitle]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-16 lg:pl-20 pt-10 md:pt-0">
            <p className="text-xs tracking-[0.15em] uppercase text-velmora-gold mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl leading-tight mb-6">
              Designed to Last,<br />Made to Treasure
            </h2>
            <p id="brand-story-subtitle" className="text-velmora-text-secondary leading-relaxed mb-8">
              Velmora was born from a belief that fine jewelry should be both beautiful and accessible. 
              Each piece is crafted with 18K gold plating and ethically sourced materials, designed 
              in London and brought to life by master artisans.
            </p>
            <Link
              to="#"
              className="inline-block text-sm tracking-[0.12em] uppercase text-velmora-gold border-b border-velmora-gold pb-1 hover:text-velmora-gold-hover hover:border-velmora-gold-hover transition-colors"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
