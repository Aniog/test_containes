import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b1c2d3"
              data-strk-img="[brand-story-title] [brand-story-desc] artisan crafting gold jewelry workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light mb-6">
              Designed with Intention
            </h2>
            <p id="brand-story-desc" className="text-stone leading-relaxed mb-4">
              Every Velmora piece begins with a simple belief: luxury should be accessible, 
              and beauty should be effortless. We craft demi-fine jewelry that bridges the gap 
              between costume and fine — using 18K gold plating over quality metals, hand-set 
              stones, and designs that transcend trends.
            </p>
            <p className="text-stone leading-relaxed mb-8">
              Founded by women, for women. Our pieces are made to be worn every day, 
              layered with meaning, and passed along with love.
            </p>
            <Link
              to="/about"
              className="inline-block self-start text-sm uppercase tracking-widest text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors no-underline"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
