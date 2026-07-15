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
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg-j1k2l3"
              data-strk-bg="[brand-story-subtitle] [brand-story-title] [our-story-title]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-velmora-accent text-sm tracking-widest uppercase mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-text mb-6 leading-tight">
              Jewelry That Tells<br />Your Story
            </h2>
            <p id="brand-story-subtitle" className="text-velmora-secondary text-base md:text-lg leading-relaxed mb-6">
              Velmora was born from a simple belief: luxury shouldn't be reserved for special occasions. 
              Every piece in our collection is designed to be worn, loved, and treasured — from morning 
              coffee to midnight conversations.
            </p>
            <p className="text-velmora-secondary text-base md:text-lg leading-relaxed mb-8">
              We use 18K gold plating over responsibly sourced base metals, ensuring each piece 
              is as kind to your skin as it is beautiful to behold.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-velmora-accent text-velmora-accent pb-1 text-sm tracking-widest uppercase hover:text-velmora-accent-hover transition-colors"
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
