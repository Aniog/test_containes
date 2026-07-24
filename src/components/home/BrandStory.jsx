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
    <section id="story" ref={containerRef} className="py-16 md:py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5]">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="story-img-velmora-c7d8e9"
              data-strk-img="[story-body] [story-heading] fine gold jewelry artisan craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="font-serif text-4xl md:text-5xl text-obsidian font-light leading-tight"
            >
              Made with intention.<br />
              <em className="not-italic text-gold-dark">Worn with love.</em>
            </h2>
            <p
              id="story-body"
              className="font-sans text-sm text-ink-muted mt-6 leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that are crafted to last — made from 18K gold plated brass with hypoallergenic finishes, so you can wear them every single day.
            </p>
            <p className="font-sans text-sm text-ink-muted mt-4 leading-relaxed">
              Every piece is thoughtfully designed in our studio, with an eye for the details that make jewelry feel truly personal. We believe in quiet luxury — pieces that speak softly but stay with you.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Link
                to="/"
                className="font-sans text-xs tracking-widest uppercase text-obsidian border-b border-obsidian hover:text-gold hover:border-gold transition-colors duration-200 pb-0.5"
              >
                Read Our Story →
              </Link>
              <div className="h-px flex-1 bg-linen" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-linen">
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '18K', label: 'Gold Plated' },
                { value: '4.9★', label: 'Average Rating' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl text-gold font-light">{stat.value}</p>
                  <p className="font-sans text-xs text-ink-muted mt-1 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
