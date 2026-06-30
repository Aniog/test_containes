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
    <section id="story" ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] overflow-hidden">
            <img
              data-strk-img-id="story-img-velmora-3c4d5e"
              data-strk-img="[story-text] [story-headline] gold jewelry artisan crafted"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-velvet/10" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-20">
            <p className="font-manrope text-[10px] tracking-[0.2em] uppercase text-gold mb-5">Our Story</p>
            <h2
              id="story-headline"
              className="font-cormorant text-4xl md:text-5xl font-light text-velvet leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-8 h-px bg-gold mb-8" />
            <p
              id="story-text"
              className="font-manrope text-sm text-text-secondary leading-relaxed mb-5"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that feel luxurious every day — crafted with care, priced with intention.
            </p>
            <p className="font-manrope text-sm text-text-secondary leading-relaxed mb-10">
              Every piece is made with 18K gold plating over hypoallergenic bases, designed to last and to be loved. We believe in jewelry that tells your story, not ours.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-manrope text-[11px] tracking-[0.14em] uppercase text-gold hover:text-gold-dark transition-colors duration-200 self-start border-b border-gold pb-0.5"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
