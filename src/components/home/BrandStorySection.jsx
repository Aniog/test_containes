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
    <section ref={containerRef} className="section-divider">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="aspect-[4/5] lg:aspect-auto relative bg-[#FAF8F5]">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[brand-story-title] [brand-story-subtitle] jewelry craftsmanship"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-center justify-center p-8 sm:p-12 lg:p-20 bg-[#FAF8F5]">
          <div className="max-w-md">
            <span className="text-xs uppercase tracking-widest text-accent mb-4 block">Our Story</span>
            <h2
              id="brand-story-title"
              className="serif-heading text-3xl sm:text-4xl text-foreground mb-6 leading-tight"
            >
              Jewelry That Tells Your Story
            </h2>
            <p
              id="brand-story-subtitle"
              className="text-[#6B6560] leading-relaxed mb-8"
            >
              Velmora was born from a simple belief: luxury shouldn't be reserved for special occasions. 
              We create demi-fine pieces that bridge the gap between everyday wear and heirloom quality — 
              jewelry you reach for daily, that grows more meaningful with time.
            </p>
            <Link to="/about" className="btn-secondary inline-block">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
