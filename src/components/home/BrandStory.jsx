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
    <section
      id="story"
      ref={containerRef}
      className="py-20 md:py-0 bg-ivory-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
          <span id="story-img-title" className="sr-only">Velmora jewelry brand story atelier craftsmanship</span>
          <span id="story-img-desc" className="sr-only">Artisan hands crafting fine gold jewelry in a warm studio</span>
          <img
            data-strk-img-id="brand-story-img-a1b2c3"
            data-strk-img="[story-img-desc] [story-img-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora atelier"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-center px-8 md:px-16 lg:px-20 py-16 md:py-20">
          <div className="max-w-md">
            <p className="text-xs tracking-ultra-wide uppercase font-sans text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light leading-tight mb-6">
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-6" />
            <p className="text-base text-text-secondary font-sans leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. Every piece is thoughtfully designed to be worn every day — and treasured for years.
            </p>
            <p className="text-base text-text-secondary font-sans leading-relaxed mb-8">
              We work with skilled artisans to create demi-fine pieces that balance quality, beauty, and accessibility. 18K gold plated, hypoallergenic, and made to last.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-sans font-medium text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
