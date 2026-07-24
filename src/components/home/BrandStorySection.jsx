import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStorySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[#E8E2DA] rounded-sm overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg-4e5f6a"
              data-strk-bg="[brand-story-title] [brand-story-subtitle] jewelry craftsmanship"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="serif-heading text-3xl md:text-4xl lg:text-5xl tracking-wide leading-tight"
            >
              Jewelry That Tells Your Story
            </h2>
            <p
              id="brand-story-subtitle"
              className="mt-6 text-muted-foreground leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune. 
              We craft demi-fine pieces in 18K gold plating — designed to be worn daily, treasured always, 
              and gifted with meaning.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every piece is hypoallergenic, thoughtfully designed, and made to complement the modern woman's 
              everyday elegance.
            </p>
            <Link to="/about" className="btn-secondary inline-block mt-8">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
