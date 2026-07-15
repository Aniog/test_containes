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
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-ivory overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-q1w2e3"
            data-strk-img="[brand-story-desc] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light leading-tight">
            A Legacy of Quiet Elegance
          </h2>
          <p id="brand-story-desc" className="mt-6 text-muted leading-relaxed">
            Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. 
            Each piece is thoughtfully designed and meticulously crafted with 18K gold plating over hypoallergenic 
            bases, ensuring lasting beauty that's gentle on your skin.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We believe in slow fashion — timeless designs that transcend trends, made to be worn and treasured 
            for years to come.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 text-sm font-medium text-accent hover:text-accent-hover uppercase tracking-widest transition-colors border-b border-accent pb-0.5"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
