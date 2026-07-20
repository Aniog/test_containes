import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-4 bg-cream-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden order-2 lg:order-1">
            <img
              data-strk-img-id="brand-story-image"
              data-strk-img="[brand-story-text] [brand-story-title] gold jewelry artisan workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <p className="font-sans text-xs tracking-wide-custom uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight"
            >
              Jewelry That Tells Your Story
            </h2>
            <div className="mt-6 space-y-4">
              <p
                id="brand-story-text"
                className="font-sans text-sm md:text-base text-charcoal-light leading-relaxed"
              >
                Velmora was born from a simple belief: everyone deserves to feel adorned.
                We create demi-fine jewelry that bridges the gap between costume and couture
                — pieces that look and feel luxurious, without the luxury price tag.
              </p>
              <p className="font-sans text-sm md:text-base text-charcoal-light leading-relaxed">
                Each piece is crafted from 18K gold-plated surgical steel, designed to be
                hypoallergenic and built to last. We believe in quiet luxury — jewelry that
                whispers rather than shouts, that becomes part of who you are.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm font-medium text-charcoal hover:text-gold transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
