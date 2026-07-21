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
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-q1w2e3"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan crafting gold jewelry"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-heading leading-tight">
              Jewelry with Intention
            </h2>
            <p id="brand-story-desc" className="mt-6 text-base text-muted font-sans leading-relaxed">
              Every Velmora piece begins with a story — of craftsmanship passed through generations, 
              of materials chosen with care, of designs that honor both tradition and the modern woman. 
              We believe luxury should be accessible, that quality shouldn't require compromise, 
              and that the jewelry you wear should feel as intentional as the life you're building.
            </p>
            <p className="mt-4 text-base text-muted font-sans leading-relaxed">
              Our 18K gold-plated pieces are designed in London and crafted by artisan jewelers 
              who share our commitment to beauty, durability, and ethical sourcing.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border-b border-accent text-accent text-sm uppercase tracking-widest font-sans pb-1 hover:text-accent-hover hover:border-accent-hover transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
