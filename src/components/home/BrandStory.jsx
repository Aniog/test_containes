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
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden rounded-sm">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-r5s8t1"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal">
              Our Story
            </h2>
            <p id="brand-story-text" className="mt-6 text-base text-stone font-light leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as special as she is. We craft each piece with intention — blending timeless design with modern sensibility, using ethically sourced materials and 18K gold plating that lasts.
            </p>
            <p className="mt-4 text-base text-stone font-light leading-relaxed">
              From our studio to your jewelry box, every detail is considered. No middlemen, no markups — just beautiful pieces at honest prices, delivered directly to you.
            </p>
            <Link
              to="/#about"
              className="inline-block mt-8 border border-charcoal text-charcoal px-8 py-3 text-sm uppercase tracking-widest font-sans hover:bg-charcoal hover:text-cream transition-colors no-underline rounded-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
