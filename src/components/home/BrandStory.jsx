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
    <section ref={containerRef} id="story" className="py-20 md:py-0 bg-parchment">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden md:aspect-auto aspect-[4/3]" style={{ minHeight: '500px' }}>
          <img
            data-strk-img-id="story-img-main-c4d8e2"
            data-strk-img="[story-text] [story-headline] gold jewelry artisan crafted"
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Our Story"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-obsidian/10" />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24 bg-parchment">
          <p className="font-manrope text-xs uppercase tracking-[0.15em] text-gold mb-5">
            Our Story
          </p>
          <h2
            id="story-headline"
            className="font-cormorant text-4xl md:text-5xl font-light text-obsidian leading-tight mb-6"
          >
            Made with intention.<br />
            <em className="italic">Worn with love.</em>
          </h2>
          <p
            id="story-text"
            className="font-manrope text-sm text-muted leading-relaxed mb-4"
          >
            Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that are made to be worn every day — to work, to dinner, to wherever life takes you.
          </p>
          <p className="font-manrope text-sm text-muted leading-relaxed mb-10">
            Each piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be treasured. Because you deserve to feel beautiful, always.
          </p>
          <Link
            to="/"
            className="self-start font-manrope text-xs uppercase tracking-[0.15em] text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
