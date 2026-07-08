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
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                data-strk-img-id="brand-story-img-c4d5e6"
                data-strk-img="[brand-story-text] [brand-story-title] gold jewelry artisan crafting"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora brand story"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-velmora-gold-light hidden md:block" />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="font-sans text-[10px] tracking-widest3 uppercase text-velmora-gold mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl font-light text-velmora-black leading-snug mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet elegance</em>
            </h2>
            <div className="w-10 h-px bg-velmora-gold mb-8" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-velmora-stone leading-relaxed mb-5"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We create demi-fine pieces that feel luxurious, wear beautifully, and last for years.
            </p>
            <p className="font-sans text-sm text-velmora-stone leading-relaxed mb-8">
              Every piece is crafted in 18K gold-plated brass, hypoallergenic and nickel-free, designed to be worn every day and passed down with love.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-velmora-black border-b border-velmora-black pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              Our Story
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
