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
    <section ref={containerRef} id="story" className="bg-linen border-y border-divider">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[520px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-s1t2u3"
              data-strk-img="[story-text] [story-headline]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-14 md:py-20">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Our Story</p>
            <h2
              id="story-headline"
              className="font-serif text-3xl md:text-4xl text-obsidian font-light leading-snug mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet elegance</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-6" />
            <p
              id="story-text"
              className="font-sans text-sm text-muted leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. Every piece is thoughtfully designed to be worn every day — from morning coffee to candlelit dinners.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed mb-8">
              We work with skilled artisans to create demi-fine pieces in 18K gold plate that are hypoallergenic, nickel-free, and built to last. Because you deserve jewelry that keeps up with your life.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors group"
            >
              Read Our Story
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
