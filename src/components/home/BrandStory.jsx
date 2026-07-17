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
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-g7h8"
              data-strk-img="[brand-story-desc] [brand-story-heading]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:py-8">
            <p className="text-xs uppercase tracking-widest text-gold font-sans mb-4">Our Story</p>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-charcoal font-light leading-snug">
              Jewelry That Tells Your Story
            </h2>
            <p id="brand-story-desc" className="mt-6 text-stone leading-relaxed font-sans">
              Born from a belief that luxury should be accessible, Velmora creates demi-fine jewelry 
              that bridges the gap between costume and fine. Each piece is thoughtfully designed in our 
              studio, crafted with 18K gold plating over premium brass, and finished with the kind of 
              detail you'd expect from pieces costing ten times more.
            </p>
            <p className="mt-4 text-stone leading-relaxed font-sans">
              We believe in jewelry that becomes part of your daily ritual — pieces you reach for 
              instinctively, that make you feel quietly confident, that you'll want to pass on someday.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border-b border-gold text-gold text-sm uppercase tracking-widest pb-1 hover:text-gold-dark hover:border-gold-dark transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
