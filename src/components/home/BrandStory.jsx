import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] [brand-story-heading] fine jewelry atelier craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora atelier"
              className="w-full h-full object-cover"
            />
            {/* Decorative gold line */}
            <div className="absolute bottom-6 right-6 w-16 h-px bg-gold" />
            <div className="absolute bottom-6 right-6 w-px h-16 bg-gold" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-4xl md:text-5xl font-light text-ink leading-tight mb-6"
            >
              Made with intention.<br />
              <em className="not-italic font-normal text-gold">Worn with love.</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-sans text-sm text-ink-muted leading-relaxed mb-5"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move seamlessly from morning coffee to candlelit dinners — jewelry that becomes part of your story.
            </p>
            <p className="font-sans text-sm text-ink-muted leading-relaxed mb-8">
              Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be treasured. We believe in accessible luxury — quality that doesn't compromise, at a price that doesn't punish.
            </p>
            <a
              href="#"
              className="self-start font-sans text-[11px] font-semibold uppercase tracking-widest text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
            >
              Read Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
