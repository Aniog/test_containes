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
    <section id="about" ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
            <span id="brand-story-title" className="sr-only">Velmora Fine Jewelry brand story artisan craftsmanship</span>
            <span id="brand-story-desc" className="sr-only">Artisan crafting gold jewelry close up hands workshop</span>
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-manrope text-xs tracking-[0.2em] uppercase text-gold mb-4">
                Our Story
              </p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian leading-tight mb-6">
                Made with intention.<br />
                <em className="italic">Worn with love.</em>
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <p className="font-manrope text-sm text-text-secondary leading-relaxed mb-5">
                Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. Every piece is thoughtfully designed to be worn every day — from morning coffee to candlelit dinners.
              </p>
              <p className="font-manrope text-sm text-text-secondary leading-relaxed mb-10">
                We use 18K gold plating over hypoallergenic bases, so your skin stays happy and your jewelry stays radiant. Because you deserve both.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-3 font-manrope text-xs tracking-[0.15em] uppercase text-obsidian hover:text-gold transition-colors duration-200 group"
              >
                Read Our Story
                <span className="w-8 h-px bg-obsidian group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
