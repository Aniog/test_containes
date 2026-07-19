import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStorySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-velmora-base/5 overflow-hidden">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-img-d4e5f6"
              data-strk-bg="[brand-story-subtitle] [brand-story-title]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-velmora-gold text-xs tracking-super-wide uppercase mb-3">Our Philosophy</p>
            <h2 id="brand-story-title" className="font-serif text-3xl lg:text-4xl font-light text-velmora-base mb-6 leading-snug">
              Jewelry That Tells<br />Your Story
            </h2>
            <p id="brand-story-subtitle" className="text-velmora-stone leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury shouldn't be reserved for special occasions. Every piece in our collection is designed to be worn daily — to become part of your story, your rituals, your everyday moments of beauty.
            </p>
            <p className="text-velmora-stone leading-relaxed mb-8">
              We use 18K gold plating over responsibly sourced brass, ensuring each piece is both beautiful and kind to your skin. Hypoallergenic, durable, and designed to last.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-velmora-base text-xs tracking-ultra-wide uppercase font-medium group hover:text-velmora-gold-dark transition-colors"
            >
              Read Our Story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
