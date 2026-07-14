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
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b8c9d0"
              data-strk-img="[brand-story-text] [brand-story-title] jewelry artisan crafting gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-4">
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl font-light text-charcoal"
            >
              Our Story
            </h2>
            <p
              id="brand-story-text"
              className="mt-6 text-base font-light text-muted leading-relaxed"
            >
              Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious without the luxury price tag. Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over hypoallergenic metals, and finished by hand.
            </p>
            <p className="mt-4 text-base font-light text-muted leading-relaxed">
              We believe in slow fashion — timeless designs that transcend trends, made to be worn and treasured for years to come.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs uppercase tracking-product font-medium text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
