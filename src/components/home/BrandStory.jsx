import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="story" ref={containerRef} className="bg-velmora-obsidian">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px]">

          {/* Image side */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
            <img
              data-strk-img-id="story-img-velmora-x9y8z7"
              data-strk-img="[story-text] [story-headline] fine jewelry artisan craftsmanship gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-velmora-obsidian/20" />
          </div>

          {/* Text side */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold font-medium mb-5">
                Our Story
              </p>
              <h2
                id="story-headline"
                className="font-serif text-3xl md:text-4xl font-light text-velmora-text-light tracking-wide leading-snug mb-6"
              >
                Made with intention.<br />
                <em className="not-italic text-velmora-gold">Worn with love.</em>
              </h2>
              <div className="w-10 h-px bg-velmora-gold mb-8" />
              <p
                id="story-text"
                className="text-sm text-velmora-sand font-light leading-relaxed mb-4"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design demi-fine pieces that bridge the gap between costume and fine jewelry — crafted to be worn every day, treasured for years.
              </p>
              <p className="text-sm text-velmora-mist font-light leading-relaxed mb-10">
                Every piece is 18K gold plated, hypoallergenic, and designed with the modern woman in mind. From the studio to your doorstep, we obsess over every detail.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-medium text-velmora-gold hover:gap-5 transition-all duration-300"
              >
                Read Our Story
                <div className="w-8 h-px bg-velmora-gold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
