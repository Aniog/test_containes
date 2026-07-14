import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-sand-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-main"
              data-strk-img="artisan gold jewelry workshop hands crafting warm editorial"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center max-w-lg">
            <span className="font-sans text-[11px] tracking-widest uppercase text-gold mb-4">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso tracking-wide mb-6 leading-tight">
              Born from a love of quiet luxury
            </h2>
            <p className="font-sans text-sm text-espresso/60 leading-relaxed mb-4">
              Velmora was founded on a simple belief: every woman deserves jewelry that feels
              as considered as she is. We design demi-fine pieces in 18K gold plating — substantial
              enough to treasure, accessible enough to collect.
            </p>
            <p className="font-sans text-sm text-espresso/60 leading-relaxed mb-8">
              Each piece is crafted with hypoallergenic materials, designed for all-day wear,
              and presented in our signature gift box — because unwrapping should feel as
              beautiful as wearing.
            </p>
            <Link to="/about" className="btn-outline self-start">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
