import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-title] [brand-body]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:py-8">
            <h2
              id="brand-title"
              className="font-serif text-3xl md:text-4xl tracking-wide"
            >
              Designed with Intention
            </h2>
            <p
              id="brand-body"
              className="mt-6 text-warm-gray text-sm md:text-base leading-relaxed"
            >
              Velmora was born from a belief that fine jewelry should not be reserved for special occasions alone. Each piece is designed in our studio and crafted in small batches using 18K gold plating and hypoallergenic materials — so you can wear them every day, comfortably and confidently.
            </p>
            <p className="mt-4 text-warm-gray text-sm md:text-base leading-relaxed">
              We partner with responsible manufacturers who share our commitment to quality and ethical practices. From the first sketch to the final polish, every detail matters.
            </p>
            <Link
              to="/"
              className="inline-block mt-8 text-xs uppercase tracking-widest border-b border-espresso pb-1 hover:text-bronze hover:border-bronze transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
