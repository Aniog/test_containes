import { useEffect, useRef } from 'react';
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
      className="py-20 md:py-28 bg-velmora-cream"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-velmora-stone">
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-text] [brand-story-title] gold jewelry artisan crafted"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Gold accent border */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-velmora-gold pointer-events-none hidden md:block" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-sans uppercase tracking-widest text-velmora-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif font-light text-4xl md:text-5xl text-velmora-obsidian mb-6 leading-tight"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-8" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-velmora-charcoal leading-relaxed mb-5"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design each piece with the modern woman in mind — someone who values quality, wears jewelry daily, and wants to feel effortlessly elevated.
            </p>
            <p className="font-sans text-sm text-velmora-charcoal leading-relaxed mb-10">
              Every Velmora piece is crafted from 18K gold plated brass and sterling silver, using only hypoallergenic materials. Designed in New York, made to be treasured.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '18K', label: 'Gold Plated' },
                { value: '4.9★', label: 'Average Rating' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-serif text-2xl text-velmora-obsidian mb-1">{value}</p>
                  <p className="text-[10px] font-sans uppercase tracking-widest text-velmora-mink">{label}</p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="self-start text-xs font-sans uppercase tracking-widest text-velmora-charcoal border-b border-velmora-charcoal pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              Read Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
