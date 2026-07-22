import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-gold/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-manrope text-xs tracking-[0.25em] uppercase text-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-3xl md:text-4xl lg:text-5xl text-obsidian font-light leading-tight mb-6"
            >
              Born from a love of<br />
              <em>quiet beauty</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-charcoal leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design pieces that feel luxurious every day — crafted with intention, worn with ease.
            </p>
            <p className="font-manrope text-sm text-charcoal leading-relaxed mb-8">
              Every piece in our collection is made from 18K gold-plated brass, hypoallergenic and designed to last. We believe in accessible luxury — jewelry that looks like it costs ten times more, because it's made with the same care.
            </p>

            <div className="flex items-center gap-8 mb-8 py-6 border-y border-obsidian/10">
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '18K', label: 'Gold Plated' },
                { value: '4.9★', label: 'Average Rating' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <p className="font-cormorant text-2xl text-gold font-medium">{stat.value}</p>
                  <p className="font-manrope text-xs text-warm-stone tracking-wide mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="self-start font-manrope text-xs tracking-[0.15em] uppercase text-obsidian border-b border-obsidian/30 pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
