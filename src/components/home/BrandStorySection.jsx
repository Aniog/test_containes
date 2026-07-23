import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
          {/* Image side */}
          <div className="relative overflow-hidden min-h-[400px] md:min-h-0">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="brand-story-img-c3d4e5"
              data-strk-img="[brand-story-text] [brand-story-headline] artisan jewelry making gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-obsidian/10" />
          </div>

          {/* Text side */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-20 bg-cream">
            <div className="max-w-md">
              <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-4">Our Story</p>
              <h2
                id="brand-story-headline"
                className="font-cormorant text-4xl md:text-5xl text-ink font-light leading-tight mb-6"
              >
                Made with intention.<br />
                <em className="italic">Worn with love.</em>
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <p
                id="brand-story-text"
                className="font-manrope text-sm text-muted leading-relaxed mb-4"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that live at the intersection of artisan craft and everyday wearability.
              </p>
              <p className="font-manrope text-sm text-muted leading-relaxed mb-8">
                Every piece is thoughtfully designed, ethically sourced, and finished with 18K gold plating that holds its warmth through years of wear. Because jewelry should be treasured, not treated carefully.
              </p>
              <Link
                to="/#about"
                className="inline-flex items-center gap-3 font-manrope text-xs tracking-widest uppercase text-ink hover:text-gold transition-colors duration-200"
              >
                Read Our Story
                <div className="w-8 h-px bg-current" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
