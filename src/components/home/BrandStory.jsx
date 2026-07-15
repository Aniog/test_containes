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
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-brand-warm">
            <img
              data-strk-img-id="brand-story-img-y5z6a7"
              data-strk-img="[brand-story-desc] [brand-story-heading]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal leading-tight">
              A Legacy of Quiet Luxury
            </h2>
            <p id="brand-story-desc" className="text-brand-muted font-sans text-sm md:text-base leading-relaxed mt-6">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a fortune. 
              Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over 
              hypoallergenic metals, and finished by hand. We bridge the gap between fine jewelry 
              and everyday wear — creating pieces you'll reach for again and again.
            </p>
            <p className="text-brand-muted font-sans text-sm md:text-base leading-relaxed mt-4">
              From our signature ear cuffs to our bestselling huggie hoops, every design is made 
              to be treasured, gifted, and worn with confidence.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border-b border-brand-gold text-brand-gold text-sm font-sans font-medium tracking-wide hover:text-brand-gold-dark hover:border-brand-gold-dark transition-colors"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
