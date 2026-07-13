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
    <section ref={containerRef} id="about" className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c3d4e5"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry atelier craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20 bg-cream">
            <p className="text-xs tracking-widest uppercase font-sans font-medium text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-4xl md:text-5xl text-obsidian font-light leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-muted leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design pieces that feel luxurious without the luxury price tag — crafted to be worn every day, gifted with intention, and treasured for years.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed mb-10">
              Every piece is made with 18K gold plating over hypoallergenic bases, designed to last and to flatter. We believe in accessible elegance — jewelry that moves with you, not against you.
            </p>
            <Link
              to="/shop"
              className="self-start text-xs tracking-widest uppercase font-sans font-medium text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Discover Our Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
