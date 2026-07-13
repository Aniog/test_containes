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
    <section id="story" className="py-20 md:py-0 bg-velmora-linen" ref={containerRef}>
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image side */}
        <div className="relative h-72 md:h-auto overflow-hidden">
          <img
            data-strk-img-id="story-img-main-c4d5e6"
            data-strk-img="[story-text] [story-headline] gold jewelry artisan crafted"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora brand story"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-velmora-obsidian/10" />
        </div>

        {/* Text side */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-24 bg-velmora-cream">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-4">
            Our Story
          </p>
          <h2
            id="story-headline"
            className="font-serif text-4xl md:text-5xl font-light text-velmora-text-primary leading-[1.15] mb-6"
          >
            Made with intention,<br />
            <em className="italic">worn with love</em>
          </h2>
          <div className="w-10 h-px bg-velmora-gold mb-8" />
          <p
            id="story-text"
            className="font-sans text-sm md:text-base text-velmora-text-secondary leading-relaxed mb-4"
          >
            Velmora was born from a simple belief: that beautiful jewelry shouldn't come with a luxury price tag — or a compromise on quality. We design each piece to be worn every day, to layer and stack, to gift and to keep.
          </p>
          <p className="font-sans text-sm md:text-base text-velmora-text-secondary leading-relaxed mb-10">
            Every Velmora piece is crafted from 18K gold plated sterling silver, hypoallergenic and designed to last. Because you deserve jewelry that keeps up with your life.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase text-velmora-gold hover:gap-5 transition-all duration-300 group"
          >
            Read Our Story
            <span className="w-8 h-px bg-velmora-gold group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
