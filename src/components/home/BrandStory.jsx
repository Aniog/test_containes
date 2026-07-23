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
    <section ref={containerRef} id="story" className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-warm-white overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
              data-strk-img-id="story-img-1"
              data-strk-img="[story-title] [story-text]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
            />
          </div>

          {/* Text */}
          <div className="md:py-8">
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Our Story</p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-6"
            >
              Where Craft Meets Intention
            </h2>
            <div className="w-12 h-px bg-champagne mb-6" />
            <p
              id="story-text"
              className="text-muted text-sm md:text-base leading-relaxed mb-4"
            >
              Velmora was born from a belief that fine jewelry should not be reserved for special occasions alone. 
              Every piece in our collection is designed in-house and crafted with 18K gold plating over premium bases — 
              delivering the look and feel of luxury at a price that invites everyday wear.
            </p>
            <p className="text-muted text-sm md:text-base leading-relaxed mb-8">
              We partner with skilled artisans who share our obsession for detail. From the first sketch to the final polish, 
              each design is refined until it feels effortless on the body and meaningful to the wearer.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium text-ink hover:text-gold transition-colors duration-300 group"
            >
              Discover Our Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
