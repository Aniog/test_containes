import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img="[story-title] gold jewelry craftsmanship artisan"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              data-strk-img-id="brand-story-img"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="font-sans text-xs tracking-widest-xl uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal font-light leading-tight mb-6"
            >
              Designed with Intention, Worn with Confidence
            </h2>
            <p className="font-sans text-sm md:text-base text-velmora-stone leading-relaxed mb-6">
              Velmora was born from a simple belief: beautiful jewelry should not be reserved for special occasions alone. Each piece is designed in our studio and crafted from 18K gold-plated brass, with meticulous attention to detail and a commitment to quality that you can feel.
            </p>
            <p className="font-sans text-sm md:text-base text-velmora-stone leading-relaxed mb-8">
              We create demi-fine jewelry for the woman who appreciates quiet luxury — pieces that elevate your everyday without ever trying too hard.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-xs font-medium tracking-widest-lg uppercase text-velmora-charcoal link-underline pb-1"
            >
              Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}