import { useEffect, useRef } from 'react';
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
    <section className="py-16 md:py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image side */}
          <div className="aspect-[4/5] bg-warm-beige/30 rounded-sm overflow-hidden">
            <img
              data-strk-img-id="brand-story-image"
              data-strk-img="[story-heading] [story-sub] jewelry craftsmanship studio"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="max-w-lg">
            <p className="text-taupe text-xs tracking-[0.25em] uppercase font-sans mb-2">
              Our Heritage
            </p>
            <h2
              id="story-heading"
              className="font-serif text-3xl md:text-4xl text-dark-forest leading-tight"
            >
              Jewelry Crafted with Intention
            </h2>
            <div className="w-12 h-[1px] bg-warm-gold my-6" />
            <p
              id="story-sub"
              className="text-taupe text-sm leading-relaxed font-sans"
            >
              At Velmora, we believe fine jewelry should feel personal, not pretentious. 
              Every piece is thoughtfully designed in our studio and crafted with premium 
              18K gold plating — striking the balance between luxury and everyday wearability. 
              From first sketch to final polish, we honor the art of slow making.
            </p>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 mt-6 text-sm tracking-wider uppercase text-warm-gold hover:text-warm-gold/80 transition-colors duration-300"
            >
              Our Story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}