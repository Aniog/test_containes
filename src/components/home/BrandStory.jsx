import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-brand-base">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 aspect-[4/5] bg-brand-neutral/5 overflow-hidden relative">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="jewelry designer studio hands gold editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover grayscale-[0.2]"
            />
            {/* Design elements */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 border border-brand-accent/20 hidden lg:block" />
          </div>

          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-brand-neutral font-medium block">The Velmora Ethos</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Quiet Luxury, <br />Lasting Memories</h2>
            <p className="text-brand-neutral text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 font-light italic">
              "We believe that jewelry is more than just an accessory. It is a vessel for memory, a touchstone of beauty, and a reflection of your unique journey. Velmora was founded to bring high-end design to the everyday, without the extreme markups of traditional luxury."
            </p>
            <div className="pt-4">
              <Link to="/about" className="text-xs uppercase tracking-widest font-semibold border-b border-brand-text/30 pb-2 hover:border-brand-text hover:text-brand-accent transition-all inline-block">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
