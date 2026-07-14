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
      id="about"
      ref={containerRef}
      className="py-20 lg:py-0 bg-cream"
    >
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:min-h-[600px]">
        {/* Image side */}
        <div className="relative aspect-[4/3] lg:aspect-auto bg-charcoal overflow-hidden img-zoom">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            data-strk-img-id="brand-story-img-k1l3m5"
            data-strk-img="[brand-story-desc] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            alt="Velmora brand story"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text side */}
        <div className="flex items-center px-6 lg:px-16 py-16 lg:py-20">
          <div className="max-w-md">
            <p className="text-[10px] tracking-ultra-wide uppercase font-sans text-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl lg:text-5xl text-obsidian mb-6 leading-tight"
              style={{ fontWeight: 300 }}
            >
              Made with intention.<br />
              <em>Worn with love.</em>
            </h2>
            <p
              id="brand-story-desc"
              className="text-base text-ink-muted font-sans leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. Every piece is thoughtfully designed, ethically sourced, and crafted to become a part of your story.
            </p>
            <p className="text-base text-ink-muted font-sans leading-relaxed mb-8">
              We use 18K gold plating over hypoallergenic bases, so your jewelry stays beautiful — and your skin stays happy.
            </p>
            <Link
              to="/#about"
              className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-sans text-obsidian hover:text-gold transition-colors border-b border-obsidian hover:border-gold pb-0.5"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
