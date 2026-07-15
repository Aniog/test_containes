import React, { useEffect, useRef } from 'react';
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
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-hairline/30">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
              data-strk-img-id="brand-story-img-1"
              data-strk-img="[story-title] [story-subtitle]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
            />
          </div>
          <div className="md:py-8">
            <p className="text-xs font-medium tracking-ultra-wide uppercase text-accent mb-4">
              Our Philosophy
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-tight"
            >
              Designed for the Modern Woman
            </h2>
            <p
              id="story-subtitle"
              className="mt-5 text-warm-gray leading-relaxed text-sm md:text-base"
            >
              Velmora was born from a belief that fine jewelry should not be reserved for special occasions alone. 
              Every piece in our collection is designed in our New York studio and crafted with care using 
              18K gold plating and responsibly sourced materials. We create jewelry that feels precious 
              yet accessible — pieces you reach for every single day.
            </p>
            <p className="mt-4 text-warm-gray leading-relaxed text-sm md:text-base">
              From the sculptural curves of our ear cuffs to the delicate filigree of our drop earrings, 
              each design is a quiet statement of confidence and taste.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium tracking-wide text-charcoal hover:text-accent transition-colors duration-300 group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
