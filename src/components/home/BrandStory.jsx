import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const titleId = 'brand-story-title';
  const subtitleId = 'brand-story-subtitle';

  return (
    <section ref={containerRef} className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-clay overflow-hidden">
            <img
              alt="Our Story"
              data-strk-img-id="brand-story-img"
              data-strk-img={`[${subtitleId}] [${titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-4 text-center md:text-left">
            <span className="text-xs tracking-[0.2em] uppercase text-taupe mb-3 block">Our Story</span>
            <h2
              id={titleId}
              className="serif-heading text-2xl md:text-3xl lg:text-4xl text-espresso leading-tight"
            >
              Jewelry meant to be lived in
            </h2>
            <p
              id={subtitleId}
              className="text-taupe leading-relaxed mt-6 mb-8 max-w-md mx-auto md:mx-0"
            >
              Velmora was born from a simple belief: that fine jewelry should feel effortless.
              Each piece is crafted in small batches using 18K gold plating and ethically sourced
              materials — designed to move with you from morning coffee to evening candlelight,
              and every moment in between.
            </p>
            <button className="btn-outline w-full sm:w-auto">
              Read Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
