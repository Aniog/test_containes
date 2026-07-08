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
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <span id="brand-story-title" className="sr-only">Jewelry artisan crafting gold jewelry</span>
            <span id="brand-story-desc" className="sr-only">Woman wearing fine gold jewelry in warm editorial light</span>
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              alt="Our story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-4">Our Story</p>
            <h2 className="font-cormorant text-4xl md:text-5xl text-ink font-light leading-tight mb-6">
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <div className="w-8 h-px bg-gold mb-6" />
            <p className="font-manrope text-sm text-ink-muted leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design each piece with the modern woman in mind — someone who values quality, wears jewelry daily, and wants to feel effortlessly put-together.
            </p>
            <p className="font-manrope text-sm text-ink-muted leading-relaxed mb-8">
              Every Velmora piece is crafted from 18K gold plated brass with hypoallergenic posts, designed to be worn from morning to evening, season after season.
            </p>
            <Link
              to="/"
              className="self-start font-manrope text-xs tracking-widest uppercase text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
