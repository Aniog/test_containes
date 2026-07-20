import React, { useRef, useEffect } from 'react';
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
    <section
      ref={containerRef}
      id="story"
      className="py-16 md:py-24 bg-surface border-y border-hairline"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
              data-strk-img-id="story-image"
              data-strk-img="[story-title] [story-text]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
            />
          </div>
          <div className="py-4 md:py-8">
            <p className="text-xs font-sans font-medium uppercase tracking-wider text-accent mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6 leading-tight"
            >
              Jewelry That Honors the Everyday
            </h2>
            <p
              id="story-text"
              className="text-secondary text-base leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: fine jewelry should not be
              reserved for special occasions. Every piece in our collection is
              designed to feel elevated enough for evenings out, yet comfortable
              enough for everyday wear. We work with skilled artisans who share
              our commitment to quality, using 18K gold plating and
              hypoallergenic materials that respect both your skin and your
              style.
            </p>
            <p className="text-secondary text-base leading-relaxed mb-8">
              From the first sketch to the final polish, we obsess over the
              details so you do not have to. Because the best jewelry is the
              kind you never want to take off.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors duration-300"
            >
              Discover Our Collection
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
