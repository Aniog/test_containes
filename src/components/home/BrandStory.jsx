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
    <section ref={containerRef} className="bg-cream border-y border-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-desc] [brand-story-title] jewelry artisan craftsmanship gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-5">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl font-light text-ink leading-[1.15] mb-6"
            >
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <p
              id="brand-story-desc"
              className="font-sans text-sm text-muted leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design every piece with the modern woman in mind — someone who values quality, wears jewelry daily, and wants to feel effortlessly elevated.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed mb-8">
              Each piece is crafted in 18K gold-plated brass, hypoallergenic and built to last. We work with small ateliers who share our commitment to quality and ethical production.
            </p>
            <div className="w-12 h-px bg-linen mb-8" />
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-ink hover:text-gold transition-colors duration-300 group"
            >
              Read Our Story
              <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
