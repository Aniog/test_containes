import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 lg:py-28 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-strk-img-id="brand-story-img-c3d4e5"
                data-strk-img="[brand-story-text] [brand-story-title] artisan jewelry making gold craftsmanship"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora brand story"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-champagne/40 hidden lg:block" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="font-manrope text-xs tracking-[0.2em] uppercase text-champagne mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-cormorant text-4xl lg:text-5xl font-light text-obsidian leading-tight"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="h-px w-12 bg-champagne mt-6 mb-6" />
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-stone-600 leading-relaxed"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners — without ever losing their elegance.
            </p>
            <p className="font-manrope text-sm text-stone-600 leading-relaxed mt-4">
              Every piece is crafted from 18K gold-plated brass, hypoallergenic and designed to last. We believe in accessible luxury — jewelry that feels like an heirloom, priced for real life.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 mt-8 font-manrope text-xs tracking-wider uppercase text-obsidian border-b border-obsidian pb-0.5 hover:text-champagne-dark hover:border-champagne-dark transition-colors duration-200"
            >
              Read Our Story
              <div className="h-px w-6 bg-current" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
