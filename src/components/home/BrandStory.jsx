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
    <section ref={containerRef} className="section-padding py-16 md:py-20 bg-velmora-blush">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-auto overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-3c7d1e"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-14 py-12 md:py-0">
            <p className="text-xs tracking-[0.2em] uppercase text-velmora-gold mb-4 font-medium">
              Our Story
            </p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-velmora-ink tracking-wide mb-6 leading-snug">
              Born from a belief that luxury should be personal, not performative.
            </h2>
            <p id="brand-story-desc" className="text-velmora-smoke/70 leading-relaxed mb-8 text-sm md:text-base">
              Velmora was founded to bridge the space between fast-fashion jewelry and unattainable luxury. 
              Each piece is crafted in small batches using 18K gold plating over brass, with a commitment to 
              ethical sourcing and timeless design. We believe the jewelry you wear every day should feel as 
              precious as the moments it marks.
            </p>
            <Link to="/" className="btn-outline self-start text-xs">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
