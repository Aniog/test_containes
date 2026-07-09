import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="section-padding bg-ivory-100">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-image"
              data-strk-img="[brand-story-title] gold jewelry artisan craftsmanship warm editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-4">
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-display-sm md:text-[3rem] text-warm-900 mb-8 leading-tight"
            >
              Jewelry That Tells Your Story
            </h2>
            <div className="space-y-5 mb-10">
              <p className="text-warm-600 text-base leading-relaxed">
                Velmora was born from a simple belief: every woman deserves jewelry that
                feels as special as she is. We create demi-fine pieces that bridge the gap
                between costume and fine jewelry — elevated enough for a gala, accessible
                enough for everyday.
              </p>
              <p className="text-warm-600 text-base leading-relaxed">
                Each piece is crafted in 18K gold plating over recycled sterling silver,
                designed to last without the luxury markup. We believe in slow fashion,
                timeless design, and the quiet confidence that comes from wearing
                something beautiful.
              </p>
            </div>
            <Link
              to="/collection"
              className="inline-flex items-center gap-3 font-sans text-sm tracking-[0.15em] uppercase text-warm-900 group/link"
            >
              <span className="border-b border-warm-900 pb-0.5 group-hover/link:border-gold transition-colors duration-300">
                Discover Our Collection
              </span>
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
