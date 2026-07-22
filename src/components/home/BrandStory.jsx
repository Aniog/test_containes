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
    <section ref={containerRef} className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-f4g5h6"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan jewelry craftsmanship gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-espresso mb-6">
              Our Story
            </h2>
            <p id="brand-story-desc" className="text-stone-600 leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. Each piece is thoughtfully designed in our studio and crafted with 18K gold plating over premium metals.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              We believe in slow fashion — timeless designs that transcend trends, made to be worn and treasured for years to come. Every detail, from the weight of a huggie to the clasp of a necklace, is considered.
            </p>
            <Link
              to="/about"
              className="inline-block text-sm font-medium text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
