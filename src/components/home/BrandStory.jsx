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
      className="py-20 md:py-28 bg-linen"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
            {/* Gold accent border */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold opacity-40 hidden md:block" />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="font-sans text-xs tracking-widest uppercase text-gold font-medium mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl text-obsidian font-light leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">lasting beauty</em>
            </h2>
            <p
              id="brand-story-desc"
              className="font-sans text-sm md:text-base text-stone leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: every woman deserves jewelry that feels luxurious without the luxury price tag. We work with skilled artisans to create demi-fine pieces that are made to be worn every day — and treasured for years.
            </p>
            <p className="font-sans text-sm md:text-base text-stone leading-relaxed mb-8">
              Each piece is crafted from 18K gold-plated brass and sterling silver, hypoallergenic and nickel-free. Because beautiful jewelry should never come at the cost of your comfort.
            </p>

            <div className="flex items-center gap-8 mb-8">
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '4.9★', label: 'Average Rating' },
                { value: '100%', label: 'Hypoallergenic' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl text-gold font-light">{stat.value}</p>
                  <p className="font-sans text-xs text-muted tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase font-medium text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
