import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <section ref={containerRef} className="py-16 sm:py-20 lg:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded overflow-hidden">
            <img
              data-strk-img-id="brand-story-main"
              data-strk-img="[brand-story-text] [brand-story-heading] artisan jewelry craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan jewelry craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/30 to-transparent" />
          </div>

          {/* Text */}
          <div className="lg:py-8">
            <p className="text-xs tracking-widest-2xl uppercase text-gold mb-4">Our Story</p>
            <h2 id="brand-story-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary font-light leading-tight mb-6">
              Jewelry That<br />
              <span className="italic">Feels Like You</span>
            </h2>
            <p id="brand-story-text" className="text-text-muted leading-relaxed mb-6 text-sm sm:text-base">
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag. We create demi-fine pieces using 18K gold plating over premium base metals, designed to be worn every day and treasured for years.
            </p>
            <p className="text-text-muted leading-relaxed mb-8 text-sm sm:text-base">
              Each piece is thoughtfully designed, rigorously tested for quality, and crafted to be hypoallergenic and tarnish-resistant. Because luxury should be accessible, comfortable, and beautifully effortless.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs tracking-widest-xl uppercase font-medium text-gold hover:text-gold-light transition-colors duration-300 group"
            >
              Discover Our Craft
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
