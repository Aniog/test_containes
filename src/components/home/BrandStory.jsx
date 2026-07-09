import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-velmora-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/5] md:aspect-auto bg-velmora-sand overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-20">
            <p className="section-subtitle">Our Story</p>
            <h2 id="brand-story-title" className="section-title mt-2">
              Designed for the Quietly Confident
            </h2>
            <p id="brand-story-text" className="mt-6 text-velmora-smoke font-sans leading-relaxed text-sm md:text-base max-w-md">
              Velmora was born from the belief that luxury should feel personal, not pretentious. 
              Every piece is designed in our London atelier, crafted from 18K gold-plated brass 
              and ethically sourced crystals. We make jewelry that becomes part of your story — 
              the earrings you reach for every morning, the necklace that never leaves your neck.
            </p>
            <p className="mt-4 text-velmora-smoke font-sans leading-relaxed text-sm md:text-base max-w-md">
              No logos. No trends. Just timeless pieces that feel like they were made for you.
            </p>
            <Link to="/shop" className="btn-outline mt-8 self-start">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}