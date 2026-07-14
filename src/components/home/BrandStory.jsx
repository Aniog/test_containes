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
    <section ref={containerRef} className="bg-linen border-t border-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
          {/* Image */}
          <div className="relative overflow-hidden min-h-[400px] md:min-h-0">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-body] [brand-story-heading]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-4">Our Story</p>
            <h2
              id="brand-story-heading"
              className="font-serif text-4xl md:text-5xl text-obsidian mb-6 leading-[1.1]"
            >
              Made with intention.<br />
              <em className="italic font-light">Worn with love.</em>
            </h2>
            <p
              id="brand-story-body"
              className="font-sans text-sm text-stone leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. Every piece is thoughtfully designed, ethically sourced, and crafted to become a part of your story.
            </p>
            <p className="font-sans text-sm text-stone leading-relaxed mb-8">
              We create demi-fine gold jewelry for the woman who values quality, beauty, and meaning — pieces that move with you from morning coffee to candlelit dinners.
            </p>
            <Link
              to="/#about"
              className="font-sans text-xs uppercase tracking-[0.15em] text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors duration-200 self-start"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
