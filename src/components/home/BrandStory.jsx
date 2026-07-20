import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="jewelry artisan workshop gold crafting warm editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-widest uppercase text-gold font-sans font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-6 leading-tight">
              Jewelry That Feels Like You
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Velmora was born from a simple belief: beautiful jewelry shouldn't require a second mortgage. We create demi-fine pieces in 18K gold plating that look and feel luxurious, at prices that let you build a collection — not just own a single piece.
              </p>
              <p>
                Every design starts with a sketch in our studio, inspired by architecture, nature, and the women who wear our pieces. We work with skilled artisans who share our commitment to quality, using hypoallergenic materials that are gentle on sensitive skin.
              </p>
              <p>
                The result? Jewelry you reach for every morning without thinking. Pieces that transition from coffee runs to candlelit dinners. Treasures that become part of your story.
              </p>
            </div>
            <Link
              to="#"
              className="inline-block mt-8 text-xs tracking-widest uppercase font-sans font-medium text-stone-900 border-b-2 border-gold pb-1 hover:text-gold transition-colors"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
