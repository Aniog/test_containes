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
      id="story"
      ref={containerRef}
      className="py-20 md:py-0 bg-ivory overflow-hidden"
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image side */}
        <div className="relative overflow-hidden md:h-[600px] h-72">
          <img
            data-strk-img-id="story-img-velmora-b1c2d3"
            data-strk-img="[story-text] [story-headline] gold jewelry artisan craftsmanship"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora brand story"
            className="w-full h-full object-cover"
          />
          {/* Warm overlay */}
          <div className="absolute inset-0 bg-gold/10" />
        </div>

        {/* Text side */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-4">
            Our Story
          </p>
          <h2
            id="story-headline"
            className="font-cormorant text-4xl md:text-5xl font-light text-obsidian leading-tight"
          >
            Made with intention,<br />
            <em className="italic">worn with love</em>
          </h2>
          <p
            id="story-text"
            className="font-inter text-sm text-taupe leading-relaxed mt-6 max-w-md"
          >
            Velmora was born from a simple belief: that beautiful jewelry shouldn't
            cost a fortune, but it should feel like it does. We design each piece
            with the modern woman in mind — someone who values quality, craftsmanship,
            and the quiet confidence that comes from wearing something truly special.
          </p>
          <p className="font-inter text-sm text-taupe leading-relaxed mt-4 max-w-md">
            Every Velmora piece is crafted from 18K gold-plated brass or sterling silver,
            hypoallergenic and designed to last. From our studio to your jewelry box.
          </p>

          <div className="flex items-center gap-8 mt-10 pt-8 border-t border-border">
            <div>
              <p className="font-cormorant text-3xl text-obsidian">18K</p>
              <p className="font-inter text-xs text-stone uppercase tracking-widest mt-1">Gold Plated</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="font-cormorant text-3xl text-obsidian">100%</p>
              <p className="font-inter text-xs text-stone uppercase tracking-widest mt-1">Hypoallergenic</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="font-cormorant text-3xl text-obsidian">5K+</p>
              <p className="font-inter text-xs text-stone uppercase tracking-widest mt-1">Happy Customers</p>
            </div>
          </div>

          <Link
            to="/shop"
            className="mt-10 self-start font-inter text-xs uppercase tracking-widest text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
          >
            Discover Our Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
