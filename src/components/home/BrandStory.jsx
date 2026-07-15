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
    <section ref={containerRef} className="py-16 lg:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] lg:aspect-square overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-q1w2e3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <h2 id="brand-story-title" className="font-serif text-3xl lg:text-4xl text-charcoal leading-tight">
              Jewelry with Intention
            </h2>
            <p id="brand-story-desc" className="mt-6 text-stone leading-relaxed">
              Every Velmora piece begins with a simple belief: jewelry should be both beautiful and accessible. 
              We craft each design with 18K gold plating over hypoallergenic metals, ensuring luxury that 
              doesn't compromise on quality or comfort.
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              From our studio, we obsess over every curve, clasp, and crystal placement — because the 
              details are what transform a piece of jewelry into something you'll reach for every single day.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm uppercase tracking-widest text-gold border-b border-gold pb-1 hover:text-gold-dark hover:border-gold-dark transition-colors"
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
