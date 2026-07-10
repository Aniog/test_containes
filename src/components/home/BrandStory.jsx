import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-sand overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-k1l2"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <span className="text-xs uppercase tracking-ultra-wide font-sans text-gold">Our Story</span>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal mt-4 leading-snug">
              Where Timeless Meets Modern
            </h2>
            <p id="brand-story-desc" className="mt-6 text-sm md:text-base text-taupe leading-relaxed font-sans">
              Born from a love of understated elegance, Velmora creates demi-fine jewelry that bridges the gap between everyday and extraordinary. Each piece is thoughtfully designed and meticulously crafted with 18K gold plating over hypoallergenic metals — because luxury should be accessible, and beauty should never compromise comfort.
            </p>
            <p className="mt-4 text-sm md:text-base text-taupe leading-relaxed font-sans">
              We believe jewelry tells a story. Whether it's a gift for someone you love or a treat for yourself, every Velmora piece is crafted to become part of your personal narrative.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border-b border-gold text-gold text-xs uppercase tracking-ultra-wide font-sans font-medium pb-1 hover:text-gold-light hover:border-gold-light transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
