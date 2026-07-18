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
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-[#E8E2DA] rounded-sm overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg-d4e5f6"
              data-strk-bg="[brand-story-text] [our-story-title]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <h2 id="our-story-title" className="serif-heading text-4xl md:text-5xl mb-6">
              Our Story
            </h2>
            <div className="w-16 h-px bg-[#B8860B] mb-6" />
            <p id="brand-story-text" className="text-[#6B6560] leading-relaxed mb-6 font-light">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. 
              We craft demi-fine pieces that bridge the gap between everyday wear and luxury, using 18K gold plating 
              over quality base metals to create pieces that feel as good as they look.
            </p>
            <p className="text-[#6B6560] leading-relaxed mb-8 font-light">
              Each piece is designed with intention, balancing timeless elegance with contemporary sensibility. 
              Our commitment to hypoallergenic materials means you can wear your favorites from morning to night, 
              every day.
            </p>
            <Link to="/about" className="btn-secondary inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
