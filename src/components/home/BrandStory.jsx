import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-artisan"
              data-strk-img="[brand-story-text] gold jewelry artisan craftsmanship workshop"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-gold-500 mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-950 mb-6 leading-snug">
              Jewelry That Feels Like You
            </h2>
            <p
              id="brand-story-text"
              className="font-sans text-sm text-stone-600 leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: luxury should be accessible,
              not exclusive. Every piece in our collection is handcrafted using
              18K gold plating over sterling silver, designed to be worn every
              day and treasured for years to come. We work with skilled artisans
              who share our commitment to quality, ensuring each piece meets the
              highest standards of craftsmanship.
            </p>
            <p className="font-sans text-sm text-stone-600 leading-relaxed mb-8">
              From the initial sketch to the final polish, every step of our
              process is guided by a dedication to creating jewelry that
              empowers women to feel confident, beautiful, and authentically
              themselves.
            </p>
            <Link
              to="/about"
              className="font-sans text-xs uppercase tracking-[0.18em] text-gold-600 hover:text-gold-700 transition-colors duration-300 border-b border-gold-400 pb-0.5"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
