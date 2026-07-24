import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-0 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] lg:min-h-[700px] overflow-hidden bg-stone-200">
            <div
              data-strk-bg-id="brand-story-image"
              data-strk-bg="[story-title] [story-subtitle]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="900"
              className="absolute inset-0 bg-stone-300"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20">
            <p className="text-xs uppercase tracking-[0.2em] text-velmora-muted mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-velmora-dark leading-[1.1] mb-6"
            >
              Designed for the Modern Muse
            </h2>
            <p
              id="story-subtitle"
              className="text-velmora-muted text-sm md:text-base leading-relaxed mb-8"
            >
              Velmora was born from a love of quiet luxury — jewelry that feels
              special enough for celebrations, yet understated enough for everyday.
              Every piece is crafted in small batches using 18K gold plating,
              hypoallergenic materials, and thoughtful detailing.
            </p>
            <p className="text-velmora-muted text-sm md:text-base leading-relaxed mb-10">
              We believe the best jewelry doesn't shout. It glows.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-velmora-dark hover:text-amber-700 transition-colors w-max"
            >
              Read Our Story
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
