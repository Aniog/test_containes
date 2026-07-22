import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velvet-50">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velvet-100 rounded-sm overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img-c6a1"
              data-strk-img="[brand-story-title] gold jewelry craftsmanship artisan"
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-4">
            <p className="text-xs tracking-widest uppercase text-gold-600 font-sans font-medium mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="section-heading text-3xl md:text-4xl lg:text-5xl text-velvet-950 leading-tight mb-6"
            >
              Jewelry that lives<br />on your skin
            </h2>
            <p className="text-sm text-velvet-600 font-sans font-light leading-relaxed mb-4">
              Velmora was born from a simple belief: fine jewelry shouldn&apos;t be reserved for special occasions.
              Our pieces are crafted from 18K gold-plated brass with the same attention to detail as high-end
              fine jewelry — at a fraction of the price.
            </p>
            <p className="text-sm text-velvet-600 font-sans font-light leading-relaxed mb-8">
              Every curve, every stone, every clasp is designed to be worn effortlessly, every single day.
              Because the most treasured pieces are the ones that become part of your story.
            </p>
            <Link to="/about" className="btn-outline text-xs">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
