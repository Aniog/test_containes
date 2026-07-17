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
    <section id="story" ref={containerRef} className="bg-parchment">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden" style={{ minHeight: '480px' }}>
          <span id="story-title" className="sr-only">Velmora brand story fine jewelry craftsmanship</span>
          <span id="story-desc" className="sr-only">Woman wearing gold jewelry editorial portrait warm light</span>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            data-strk-img-id="brand-story-img-7c8d9e"
            data-strk-img="[story-desc] [story-title]"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            alt="Velmora brand story"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-10 md:px-16 py-16 md:py-20">
          <p className="font-sans text-xs tracking-widest3 uppercase text-champagne mb-4">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light leading-tight mb-6">
            Made to be<br />
            <em>Worn Every Day</em>
          </h2>
          <div className="w-10 h-px bg-champagne mb-8" />
          <p className="font-sans text-sm text-stone-warm leading-relaxed mb-4">
            Velmora was born from a simple belief: beautiful jewelry shouldn't live in a box. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
          </p>
          <p className="font-sans text-sm text-stone-warm leading-relaxed mb-8">
            Every piece is crafted in 18k gold plate over sterling silver, hypoallergenic and built to last. Because you deserve jewelry that keeps up with your life.
          </p>
          <Link
            to="/shop"
            className="self-start font-sans text-xs tracking-widest uppercase text-obsidian border-b border-obsidian pb-0.5 hover:text-champagne hover:border-champagne transition-colors"
          >
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
