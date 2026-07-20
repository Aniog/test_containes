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
    <section id="story" ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-c3d4e5"
              data-strk-img="[brand-story-body] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute inset-4 border border-parchment/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-widest uppercase text-gold font-sans mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl text-charcoal leading-tight"
            >
              Made with intention,<br />
              <em className="italic">worn with love</em>
            </h2>
            <div className="w-12 h-px bg-gold mt-6 mb-6" />
            <p
              id="brand-story-body"
              className="text-sm md:text-base text-warm-gray font-sans leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune,
              but it should feel like it does. We design each piece with the modern woman in mind —
              someone who moves through the world with intention, who values quality over quantity,
              and who knows that the right piece of jewelry can change how you feel about yourself.
            </p>
            <p className="text-sm md:text-base text-warm-gray font-sans leading-relaxed mt-4">
              Every Velmora piece is crafted from 18K gold-plated brass, hypoallergenic and designed
              to last. From our studio to your jewelry box — with love.
            </p>
            <Link
              to="/"
              className="mt-8 self-start text-xs tracking-widest uppercase text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200 font-sans"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
