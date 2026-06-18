import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
      className="py-20 md:py-0 bg-linen overflow-hidden"
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image side */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[600px] overflow-hidden">
          <span id="brand-story-title" className="sr-only">Velmora Fine Jewelry brand story craftsmanship</span>
          <span id="brand-story-desc" className="sr-only">Jewelry maker crafting gold jewelry artisan workshop warm light</span>
          <img
            data-strk-img-id="brand-story-img-a1b2c3"
            data-strk-img="[brand-story-desc] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-velvet/10" />
        </div>

        {/* Text side */}
        <div className="flex items-center px-8 md:px-16 lg:px-20 py-16 md:py-20">
          <div className="max-w-md">
            <p className="font-manrope text-xs font-medium tracking-widest uppercase text-gold mb-5">
              Our Story
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink tracking-wide leading-tight mb-6">
              Made with intention,<br />
              <em className="italic">worn with love</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="font-manrope text-sm text-mist leading-relaxed mb-5">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We create demi-fine pieces designed to be worn every day — to work, to dinner, to wherever life takes you.
            </p>
            <p className="font-manrope text-sm text-mist leading-relaxed mb-10">
              Each piece is crafted from 18K gold-plated brass with hypoallergenic posts, designed to last and to be treasured. Because you deserve to feel beautiful, always.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 font-manrope text-xs font-medium tracking-widest uppercase text-ink hover:text-gold transition-colors duration-300 group"
            >
              Discover Our Collection
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
