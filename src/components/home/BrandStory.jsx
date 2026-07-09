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
          <div className="aspect-[4/5] bg-muted overflow-hidden">
            <span id="brand-story-desc" className="sr-only">Artisan hands crafting gold jewelry in workshop</span>
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img-d4"
              data-strk-img="[brand-story-desc] [brand-story-heading]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <span className="text-xs uppercase tracking-widest text-accent font-medium">Our Story</span>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-charcoal mt-4 leading-tight">
              Where Craft Meets Intention
            </h2>
            <p id="brand-story-text" className="mt-6 text-muted-fg leading-relaxed">
              Every Velmora piece begins with a sketch and a story. We believe jewelry should be more than decoration — it should be a daily reminder of your own quiet strength. Our artisans hand-finish each piece in 18K gold, creating heirloom-quality jewelry at an accessible price point.
            </p>
            <p className="mt-4 text-muted-fg leading-relaxed">
              Founded in 2021, we set out to bridge the gap between fine jewelry and everyday wear. No compromises on quality. No compromises on design.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border border-accent text-accent px-8 py-3 text-xs uppercase tracking-wide-btn font-medium hover:bg-accent hover:text-white transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
