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
    <section id="about" ref={containerRef} className="bg-cream-200">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden">
          <span id="brand-story-title" className="sr-only">Velmora Fine Jewelry brand story artisan craftsmanship</span>
          <span id="brand-story-desc" className="sr-only">Gold jewelry being crafted artisan hands workshop demi-fine jewelry making</span>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora jewelry craftsmanship"
            data-strk-img-id="brand-story-img-x9y0z1"
            data-strk-img="[brand-story-desc] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-snug">
            Made with intention.<br />
            <em className="italic">Worn with love.</em>
          </h2>
          <div className="w-8 h-px bg-gold mt-6 mb-6" />
          <p className="font-sans text-sm text-charcoal-muted leading-relaxed">
            Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. Every piece is thoughtfully designed, ethically sourced, and crafted to become part of your everyday story.
          </p>
          <p className="font-sans text-sm text-charcoal-muted leading-relaxed mt-4">
            We use 18K gold plating over hypoallergenic bases — so you can wear your Velmora pieces every day, in the shower, to the gym, and everywhere in between.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-charcoal hover:text-gold transition-colors duration-300 self-start"
          >
            Read Our Story
            <span className="w-8 h-px bg-current" />
          </Link>
        </div>
      </div>
    </section>
  );
}
