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
    <section id="story" ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[story-body] [story-headline] fine jewelry artisan craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-xs tracking-[0.2em] uppercase text-gold mb-5">
              Our Story
            </p>
            <h2
              id="story-headline"
              className="font-cormorant text-4xl md:text-5xl font-light text-obsidian leading-tight mb-6"
            >
              Made with intention,<br />
              <em className="italic">worn with love</em>
            </h2>
            <div className="w-8 h-px bg-gold mb-6" />
            <p
              id="story-body"
              className="font-manrope text-sm text-ink-muted leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that live at the intersection of artistry and accessibility.
            </p>
            <p className="font-manrope text-sm text-ink-muted leading-relaxed mb-8">
              Every piece is crafted in 18K gold plate over sterling silver, hypoallergenic and designed to last. Because you deserve jewelry that keeps up with your life.
            </p>
            <Link
              to="/"
              className="self-start font-manrope text-xs tracking-[0.12em] uppercase text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
