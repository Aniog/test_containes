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
    <section id="about" ref={containerRef} className="bg-parchment">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-body] [brand-story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-obsidian/10" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 md:py-20">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-champagne mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal leading-tight mb-6"
            >
              Made with intention.<br />
              <em className="not-italic text-champagne">Worn with love.</em>
            </h2>
            <div className="w-10 h-px bg-champagne mb-8" />
            <p
              id="brand-story-body"
              className="font-sans text-sm text-stone leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that feel luxurious every day — crafted from 18K gold-plated metals with hypoallergenic finishes that last.
            </p>
            <p className="font-sans text-sm text-stone leading-relaxed mb-10">
              Each piece is thoughtfully designed in our studio and crafted by skilled artisans who share our commitment to quality. We believe in slow fashion, lasting beauty, and jewelry that tells your story.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.15em] font-medium text-champagne group"
            >
              Read Our Story
              <span className="w-8 h-px bg-champagne group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
