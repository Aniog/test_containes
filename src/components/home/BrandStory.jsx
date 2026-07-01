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
    <section id="about" className="bg-ivory border-t border-mist" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — artisan crafting gold jewelry"
              data-strk-img-id="brand-story-img-x1y2z3"
              data-strk-img="[brand-story-text] [brand-story-heading] artisan gold jewelry crafting atelier"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-6">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-4xl md:text-5xl font-light text-velvet leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-sans text-sm text-stone leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design pieces that feel luxurious every day — crafted with intention, worn with ease.
            </p>
            <p className="font-sans text-sm text-stone leading-relaxed mb-8">
              Every piece is 18K gold plated, hypoallergenic, and designed to last. We work with ethical suppliers and use conflict-free stones, because beauty should never come at a cost.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: '18K Gold Plated', sub: 'Premium finish' },
                { label: 'Hypoallergenic', sub: 'Safe for all skin' },
                { label: 'Ethically Made', sub: 'Responsible sourcing' },
                { label: 'Designed to Last', sub: 'Timeless quality' },
              ].map(v => (
                <div key={v.label} className="border-l-2 border-gold pl-3">
                  <p className="font-sans text-xs font-semibold text-velvet tracking-wide">{v.label}</p>
                  <p className="font-sans text-xs text-stone mt-0.5">{v.sub}</p>
                </div>
              ))}
            </div>

            <Link
              to="/"
              className="self-start font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5 hover:text-gold-light hover:border-gold-light transition-colors duration-300"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
