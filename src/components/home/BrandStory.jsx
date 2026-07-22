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
    <section id="about" ref={containerRef} className="bg-blush">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b1c2d3"
              data-strk-img="[brand-story-body] [brand-story-title] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-champagne mb-4">
                Our Story
              </p>
              <h2
                id="brand-story-title"
                className="font-cormorant text-4xl md:text-5xl font-light text-obsidian tracking-wide leading-tight mb-6"
              >
                Made for the<br />
                <em className="italic">Modern Woman</em>
              </h2>
              <div className="w-10 h-px bg-champagne mb-8" />
              <p
                id="brand-story-body"
                className="font-inter text-sm text-stone leading-relaxed mb-4"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that feel luxurious, wear beautifully, and last.
              </p>
              <p className="font-inter text-sm text-stone leading-relaxed mb-8">
                Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to be worn every day, gifted with love, and treasured for years.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-3 font-inter text-xs uppercase tracking-[0.15em] text-obsidian hover:text-champagne transition-colors group"
              >
                Our Story
                <span className="w-8 h-px bg-obsidian group-hover:bg-champagne group-hover:w-12 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
