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
    <section id="story" ref={containerRef} className="py-0 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
            <img
              data-strk-img-id="story-img-main-x1y2z3"
              data-strk-img="[story-text] [story-heading] fine jewelry craftsmanship gold atelier"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-obsidian/10" />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 lg:px-16 py-16 lg:py-20 bg-cream">
            <div className="max-w-md">
              <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Our Story</p>
              <h2
                id="story-heading"
                className="font-serif text-4xl lg:text-5xl text-ink font-light leading-tight"
              >
                Born from a love of<br />
                <em className="italic">quiet beauty</em>
              </h2>
              <div className="w-12 h-px bg-gold mt-6 mb-6" />
              <p
                id="story-text"
                className="font-sans text-sm text-stone leading-relaxed"
              >
                Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We create demi-fine pieces designed for the everyday — crafted with the same care as fine jewelry, at a price that feels like a gift to yourself.
              </p>
              <p className="font-sans text-sm text-stone leading-relaxed mt-4">
                Every piece is 18K gold plated over hypoallergenic brass, designed to last through your daily rituals and beyond.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 mt-8 font-sans text-xs tracking-widest uppercase text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
              >
                Read Our Story <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
