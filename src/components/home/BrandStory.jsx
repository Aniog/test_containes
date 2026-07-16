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
    <section ref={containerRef} className="bg-[#faf8f5]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px] bg-[#e8e4df]">
          <div
            data-strk-bg-id="brand-story-bg-d4e5f6"
            data-strk-bg="[brand-story-subtitle] [brand-story-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1200"
            className="absolute inset-0"
          />
        </div>

        {/* Text */}
        <div className="flex items-center justify-center px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <div className="max-w-md">
            <p className="text-xs tracking-widest uppercase text-primary mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="serif-heading text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6 leading-tight"
            >
              Jewelry That Tells Your Story
            </h2>
            <p
              id="brand-story-subtitle"
              className="text-sm text-[#6b6560] leading-relaxed mb-8"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. 
              Each piece is crafted with 18K gold plating over recycled brass, designed to be worn every day 
              and treasured for years. We create demi-fine jewelry that bridges the gap between fast fashion 
              and fine jewelry — accessible, sustainable, and undeniably beautiful.
            </p>
            <Link to="/shop" className="btn-secondary inline-block">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
