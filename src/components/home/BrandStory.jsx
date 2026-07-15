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
          <div className="aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal mb-6">
              Our Story
            </h2>
            <p id="brand-story-text" className="font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-6">
              Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious without the luxury price tag. Our pieces are crafted with 18K gold plating over hypoallergenic metals, designed to be worn every day and treasured for years.
            </p>
            <p className="font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-8">
              From our studio, each design is thoughtfully created to balance timeless elegance with modern sensibility — pieces that transition effortlessly from morning coffee to evening cocktails.
            </p>
            <Link
              to="/about"
              className="inline-block font-sans text-xs tracking-widest uppercase text-brand-charcoal border-b border-brand-charcoal pb-1 hover:border-brand-gold hover:text-brand-gold transition-colors no-underline self-start"
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
