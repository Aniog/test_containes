import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-h1i2j3"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan crafting gold jewelry workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-brand-charcoal leading-tight">
              Where Craft Meets Intention
            </h2>
            <p id="brand-story-desc" className="font-sans text-base text-brand-muted mt-6 leading-relaxed">
              Every Velmora piece begins as a sketch, inspired by the quiet confidence of the women who wear them. We believe jewelry should feel like a whisper — subtle, personal, and enduring.
            </p>
            <p className="font-sans text-base text-brand-muted mt-4 leading-relaxed">
              Our artisans hand-finish each piece with 18K gold plating over hypoallergenic bases, ensuring beauty that lasts and skin that breathes.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 font-sans text-sm tracking-wider uppercase text-brand-charcoal border-b border-brand-charcoal pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors no-underline w-fit"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
