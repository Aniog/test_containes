import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-0 bg-velmora-stone overflow-hidden"
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-x9y8z7"
            data-strk-img="[brand-story-text] [brand-story-headline] gold jewelry artisan crafted"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
            alt="Velmora brand story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-velmora-obsidian/10" />
        </div>

        {/* Text */}
        <div className="flex items-center px-4 md:px-16 py-12 md:py-20 bg-velmora-cream">
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-widest-xl font-sans text-velmora-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-headline"
              className="font-serif text-3xl md:text-4xl font-light text-velmora-ink leading-snug mb-6"
            >
              Jewelry that tells<br />
              <em className="italic">your</em> story
            </h2>
            <div className="w-10 h-px bg-velmora-gold mb-8" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base text-velmora-muted font-sans leading-relaxed mb-5"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't
              require a special occasion. We design demi-fine pieces that move with you —
              from morning coffee to candlelit dinners.
            </p>
            <p className="text-sm md:text-base text-velmora-muted font-sans leading-relaxed mb-10">
              Every piece is crafted with 18K gold plating over hypoallergenic brass,
              designed to last and made to be treasured. Because you deserve to feel
              extraordinary every single day.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-sans font-semibold text-velmora-ink hover:text-velmora-gold transition-colors group"
            >
              Discover Our Collection
              <div className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
