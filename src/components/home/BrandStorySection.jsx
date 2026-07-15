import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';
import { ImageHelper } from '@strikingly/sdk';

const BrandStorySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-secondary rounded-sm overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              data-strk-bg-id="brand-story-img-d4e5f6"
              data-strk-bg="[brand-story-title] [brand-story-subtitle] jewelry artisan craft"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <span className="font-sans text-xs tracking-widest uppercase text-primary mb-4 block">
              Our Story
            </span>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-foreground mb-6 leading-tight"
            >
              Jewelry That Tells Your Story
            </h2>
            <p
              id="brand-story-subtitle"
              className="font-sans text-base text-muted-foreground leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. We craft each piece with care — 18K gold plated over recycled brass, hypoallergenic, and designed to be worn every day.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
              From our studio to your doorstep, every detail is considered. Because the pieces you wear closest to your heart deserve nothing less.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-primary hover:text-[#A07D52] transition-colors"
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

export default BrandStorySection;
