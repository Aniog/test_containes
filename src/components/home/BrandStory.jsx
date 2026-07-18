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
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-cream">
            <img
              data-strk-img-id="brand-story-img-q1w2e3"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan crafting gold jewelry"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs uppercase tracking-widest text-bronze mb-4 font-sans">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-tight">
              Where Craft Meets Intention
            </h2>
            <p id="brand-story-desc" className="mt-6 text-muted text-sm md:text-base leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over hypoallergenic metals, and made to be worn every day — from morning coffee to evening out.
            </p>
            <p className="mt-4 text-muted text-sm md:text-base leading-relaxed">
              We believe in slow fashion, timeless design, and the quiet confidence that comes from wearing something truly special.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm text-charcoal underline underline-offset-4 hover:text-bronze transition-colors"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
