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
      className="py-20 md:py-0 bg-parchment overflow-hidden"
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image side */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[600px] overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-bs1a2b3"
            data-strk-img="[brand-story-desc] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora brand story"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span id="brand-story-title" className="sr-only">Velmora Fine Jewelry brand story artisan craftsmanship</span>
          <span id="brand-story-desc" className="sr-only">gold jewelry being crafted artisan hands workshop fine jewelry making</span>
        </div>

        {/* Text side */}
        <div className="flex items-center px-4 md:px-16 py-16 md:py-20">
          <div className="max-w-md">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-6">Our Story</p>
            <h2
              id="brand-story-heading"
              className="font-serif text-4xl md:text-5xl text-ink font-light leading-tight"
            >
              Born from a love of
              <br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-12 h-px bg-gold mt-8 mb-8" />
            <p className="font-sans text-sm text-muted leading-relaxed">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that feel luxurious every day — crafted with intention, worn with ease.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed mt-4">
              Each piece is thoughtfully designed in our studio and crafted from 18K gold-plated materials that are hypoallergenic and built to last. Because you deserve jewelry that keeps up with your life.
            </p>
            <Link
              to="/#about"
              className="inline-block mt-8 font-sans text-xs tracking-widest uppercase text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
