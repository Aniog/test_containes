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
    <section ref={containerRef} className="py-20 lg:py-28 bg-velvet-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="gold jewelry artisan crafting hands workshop warm light"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting jewelry"
              className="w-full aspect-[4/5] object-cover"
            />
            {/* Accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gilded-700/30 -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-overline text-gilded-500 mb-4">Our Story</p>
            <h2 className="text-display text-white mb-6">
              Jewelry That Tells Your Story
            </h2>
            <div className="space-y-4 text-velvet-300 text-body-lg">
              <p>
                Velmora was born from a simple belief: everyone deserves jewelry that 
                feels luxurious without the luxury price tag. We design demi-fine pieces 
                in 18K gold plating that you can wear every single day.
              </p>
              <p>
                Each piece is crafted with care — hypoallergenic, tarnish-resistant, 
                and designed to move with you through life's most beautiful moments. 
                From morning coffee to midnight champagne, Velmora is your everyday luxury.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/about" className="btn-outline border-white/30 text-white hover:bg-white hover:text-velvet-950">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
