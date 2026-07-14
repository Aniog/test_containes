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
    <section id="about" ref={containerRef} className="bg-velmora-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[600px] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — jewelry craftsmanship"
              data-strk-img-id="brand-story-img-x1y2z3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-velmora-charcoal/20" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-20">
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-6">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl lg:text-5xl font-light text-velmora-pale leading-tight mb-6"
            >
              Made for the<br />
              <em className="italic">Everyday Extraordinary</em>
            </h2>
            <p
              id="brand-story-desc"
              className="font-sans text-sm text-velmora-mist/70 leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that feel luxurious enough for a gala, yet comfortable enough for a Tuesday morning.
            </p>
            <p className="font-sans text-sm text-velmora-mist/70 leading-relaxed mb-10">
              Every piece is crafted with 18K gold plating over sterling silver or brass, set with hand-selected stones, and finished to a standard that rivals fine jewelry at a fraction of the price.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10 pt-8 border-t border-velmora-stone/40">
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '18K', label: 'Gold Plated' },
                { value: '4.9★', label: 'Average Rating' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl text-velmora-gold">{stat.value}</p>
                  <p className="font-sans text-xs text-velmora-mist/50 mt-1 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/shop"
              className="self-start font-sans text-xs tracking-widest uppercase text-velmora-pale border border-velmora-pale/30 px-8 py-4 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
