import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
      {/* Image */}
      <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="brand-story-bg"
          data-strk-bg="[brand-story-heading] [brand-story-sub]"
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="1000"
        />
        <span id="brand-story-heading" className="hidden">Our Story</span>
        <span id="brand-story-sub" className="hidden">jewelry artisan bench tools warm lighting craft</span>
      </div>

      {/* Text */}
      <div className="flex items-center bg-brand-charcoal text-brand-cream">
        <div className="px-8 md:px-16 lg:px-20 py-16 max-w-lg">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-brand-gold mb-4">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-hero mb-6">
            Designed in London.<br />Crafted with Intention.
          </h2>
          <p className="font-sans text-sm leading-relaxed text-brand-cream/60 mb-8 font-light">
            Velmora was born from the belief that fine jewelry shouldn't be reserved for special occasions. Each piece is designed in our London atelier, crafted from 18K gold-plated brass, and finished by hand. We believe in demi-fine: luxury that fits your life, not just your jewelry box.
          </p>
          <Link to="#" className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gold hover:text-brand-cream transition-colors border-b border-brand-gold/40 pb-1">
            Read Our Full Story
          </Link>
        </div>
      </div>
    </section>
  );
}