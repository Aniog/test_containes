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
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-velmora-warm">
            <div
              data-strk-bg-id="brand-story-bg-d4e5f6"
              data-strk-bg="[brand-story-text] [our-story-title]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <span className="font-sans text-xs tracking-widest uppercase text-velmora-gold">Our Story</span>
            <h2 id="our-story-title" className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-black mt-4 mb-6">
              Jewelry That Tells Your Story
            </h2>
            <p id="brand-story-text" className="font-sans text-velmora-gray-dark leading-relaxed mb-6">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't come with a luxury markup. 
              We craft demi-fine pieces in 18K gold plating over sterling silver — designed to be worn every day, 
              treasured for years, and passed down with love.
            </p>
            <p className="font-sans text-velmora-gray-dark leading-relaxed mb-8">
              Each piece is thoughtfully designed in our studio, using ethically sourced materials and 
              hypoallergenic metals. Because luxury should feel good in every sense.
            </p>
            <Link to="#" className="btn-outline inline-block">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
