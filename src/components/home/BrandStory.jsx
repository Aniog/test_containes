import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-text]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-widest-2xl uppercase text-gold-400 font-sans font-medium mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-text"
              className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-charcoal-800 leading-tight mb-6"
            >
              Jewelry That Feels
              <br />
              Like You
            </h2>
            <p className="text-charcoal-500 text-sm md:text-base leading-relaxed mb-6">
              Velmora was born from a simple belief: beautiful jewelry should be
              accessible to every woman. We create demi-fine pieces in 18K gold
              plating that rival the quality of fine jewelry — without the
              intimidating price tag.
            </p>
            <p className="text-charcoal-500 text-sm md:text-base leading-relaxed mb-8">
              Every piece is thoughtfully designed, responsibly sourced, and crafted
              to be worn and loved every single day. From our studio to your jewelry
              box, we obsess over the details so you can just enjoy the shine.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-800 tracking-wider uppercase group"
            >
              <span className="border-b border-charcoal-800/40 pb-0.5 group-hover:border-charcoal-800 transition-colors">
                Discover the Collection
              </span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
