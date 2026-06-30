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
    <section className="py-16 md:py-24 bg-ivory" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-g0h1i2"
              data-strk-img="[brand-story-title] [brand-story-desc] jewelry craftsmanship artisan"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:py-8">
            <span className="font-sans text-xs uppercase tracking-widest text-accent">Our Story</span>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal mt-4">
              Where Intention Meets Craft
            </h2>
            <p id="brand-story-desc" className="mt-6 text-muted font-sans text-sm leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury price tag. 
              Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over hypoallergenic 
              metals, and finished by hand to ensure every detail is perfect.
            </p>
            <p className="mt-4 text-muted font-sans text-sm leading-relaxed">
              We create for the woman who values quality and intention — pieces meant to be worn every day, 
              gifted with love, and treasured for years to come.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border-b border-accent text-accent font-sans text-xs uppercase tracking-widest pb-1 hover:text-accent-hover hover:border-accent-hover transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
