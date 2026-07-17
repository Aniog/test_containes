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
    <section ref={containerRef} id="story" className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="story-img-velmora-c3d4e5"
              data-strk-img="[story-body] [story-heading] fine jewelry artisan craftsmanship gold"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-champagne/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="section-label mb-4">Our Story</p>
            <h2 id="story-heading" className="font-serif text-4xl md:text-5xl font-light text-velvet leading-tight mb-6">
              Born from a love of<br />
              <em className="italic text-champagne">quiet beauty</em>
            </h2>
            <p id="story-body" className="font-sans text-sm text-stone leading-relaxed mb-4">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We create demi-fine pieces that feel luxurious, wear beautifully, and last for years.
            </p>
            <p className="font-sans text-sm text-stone leading-relaxed mb-8">
              Every piece is thoughtfully designed in our studio, crafted with 18K gold plating over hypoallergenic bases, and finished by hand. We believe in jewelry that becomes part of your story.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="font-sans text-xs tracking-widest2 uppercase text-champagne hover:text-gold transition-colors border-b border-champagne/40 pb-0.5"
              >
                Our Story
              </Link>
              <div className="h-px flex-1 bg-mink/30" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-mink/30">
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '4.9★', label: 'Average Rating' },
                { value: '3 Yrs', label: 'Crafting Beauty' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl text-champagne font-light mb-1">{stat.value}</p>
                  <p className="font-sans text-xs text-stone/70 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
