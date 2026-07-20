import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="bg-cream border-t border-stone"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[560px]">
          <span id="brand-story-title" className="hidden">Velmora Fine Jewelry brand story artisan craftsmanship</span>
          <span id="brand-story-desc" className="hidden">woman wearing gold jewelry close up portrait warm light editorial</span>
          <img
            data-strk-img-id="brand-story-img-x9y8z7"
            data-strk-img="Velmora Fine Jewelry brand story woman wearing gold jewelry editorial portrait warm light artisan"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src={PLACEHOLDER}
            alt="Velmora brand story"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-6">
            Our Story
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
            Made with intention,<br />
            <em className="italic">worn with love</em>
          </h2>
          <p className="font-inter text-sm text-warm-gray leading-relaxed mb-4">
            Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
          </p>
          <p className="font-inter text-sm text-warm-gray leading-relaxed mb-8">
            Every piece is crafted in 18K gold plate over hypoallergenic brass, designed to last and to be treasured. We believe in accessible luxury — quality you can feel, at a price that makes sense.
          </p>
          <Link
            to="/#about"
            className="font-inter text-xs tracking-widest uppercase text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300 self-start"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
