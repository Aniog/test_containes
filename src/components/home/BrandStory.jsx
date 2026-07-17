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
    <section ref={containerRef} className="bg-parchment">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-body] [brand-story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-champagne/10" />
          </div>

          {/* Text side */}
          <div className="flex items-center px-8 lg:px-16 py-16 lg:py-20">
            <div className="max-w-md">
              <p className="font-sans text-xs uppercase tracking-widest text-champagne font-medium mb-4">Our Story</p>
              <h2 id="brand-story-heading" className="font-serif text-4xl lg:text-5xl text-charcoal font-light leading-tight mb-6">
                Born from a love of<br />
                <em className="italic text-champagne-dark">enduring beauty</em>
              </h2>
              <div className="w-10 h-px bg-champagne mb-8" />
              <p id="brand-story-body" className="font-sans text-sm text-stone leading-relaxed mb-5">
                Velmora was founded on a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. Every woman deserves to feel adorned, every day.
              </p>
              <p className="font-sans text-sm text-stone leading-relaxed mb-8">
                We craft each piece from 18K gold-plated brass and sterling silver, using hypoallergenic materials that are gentle on skin and kind to the planet. Designed in London, made to be worn worldwide.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-widest text-champagne-dark font-semibold hover:gap-5 transition-all duration-300"
              >
                Read Our Story
                <span className="w-8 h-px bg-champagne-dark inline-block" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
