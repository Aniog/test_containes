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
    <section id="about" ref={containerRef} className="py-20 lg:py-28 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-text] [brand-story-headline] fine jewelry craftsmanship atelier"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-gold/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="font-manrope text-xs uppercase tracking-[0.15em] text-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-headline"
              className="font-cormorant text-4xl lg:text-5xl font-light text-obsidian leading-tight mb-6"
            >
              Jewelry that tells<br />
              <em className="italic">your</em> story
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-charcoal leading-relaxed mb-5"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that live at the intersection of everyday wearability and genuine craftsmanship.
            </p>
            <p className="font-manrope text-sm text-charcoal leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to be worn daily, layered freely, and passed down with meaning. Because the best jewelry is the kind you never want to take off.
            </p>
            <Link
              to="/#about"
              className="inline-flex items-center gap-3 font-manrope text-xs uppercase tracking-[0.12em] text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
