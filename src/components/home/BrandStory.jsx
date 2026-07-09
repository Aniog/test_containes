import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="velmora-section bg-velvet-50">
      <div className="velmora-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-8f2a"
              data-strk-img="[story-overline] [story-heading] gold jewelry artisan craft workshop"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative border accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 rounded-sm -z-10" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p id="story-overline" className="velmora-overline mb-4">
              Our Story
            </p>
            <h2 id="story-heading" className="font-serif text-heading-2 md:text-heading-1 text-velvet-900 mb-6">
              Jewelry That Tells Your Story
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="font-sans text-base text-velvet-600 leading-relaxed mb-6">
              Velmora was born from a simple belief: every woman deserves jewelry that feels as
              special as she is — without the luxury markup. We design demi-fine pieces in 18K
              gold plating that you can wear every day, knowing they were crafted with care and
              intention.
            </p>
            <p className="font-sans text-base text-velvet-600 leading-relaxed mb-8">
              Each piece in our collection is hypoallergenic, designed to last, and made with
              materials you can trust. From our studio to your jewelry box, we pour love into
              every detail.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-sans font-semibold tracking-widest uppercase text-velvet-900 hover:text-gold transition-colors duration-300 group"
            >
              Read Our Full Story
              <span className="w-4 h-px bg-current group-hover:w-6 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
