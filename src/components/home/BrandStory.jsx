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
    <section ref={containerRef} className="py-16 md:py-24 px-5 md:px-8 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-muted-bg overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img-k3l4m5"
              data-strk-img="[brand-story-heading] [brand-story-desc]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <span className="text-xs font-medium tracking-widest uppercase text-accent">Our Story</span>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl font-medium text-charcoal mt-4">
              Where Craft Meets Intention
            </h2>
            <p id="brand-story-desc" className="text-muted text-base leading-relaxed mt-6">
              Every Velmora piece begins with a sketch and a story. We believe jewelry should be more than decoration — it should be a daily reminder of your own elegance. Our demi-fine collections are crafted with 18K gold plating over hypoallergenic bases, designed to be worn every day and treasured for years.
            </p>
            <p className="text-muted text-base leading-relaxed mt-4">
              From our studio to your jewelry box, each piece is made with care, intention, and a commitment to accessible luxury.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm font-medium text-accent hover:text-accent-hover transition-colors underline underline-offset-4"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
