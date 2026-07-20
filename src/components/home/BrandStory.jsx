import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12 bg-pearl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-m1n2o3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal">
              Our Story
            </h2>
            <p id="brand-story-desc" className="mt-6 text-stone text-sm md:text-base leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is — without the luxury markup. Our pieces are crafted with 18K gold plating over hypoallergenic bases, designed to be worn every day and treasured for years.
            </p>
            <p className="mt-4 text-stone text-sm md:text-base leading-relaxed">
              From our studio, each design is thoughtfully created to balance timeless elegance with modern sensibility. We believe in slow fashion, intentional design, and the quiet confidence that comes from wearing something truly beautiful.
            </p>
            <button className="mt-8 border border-gold text-gold px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
