import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-warm-light overflow-hidden">
            <div
              data-strk-bg-id="brand-story-image"
              data-strk-bg="[brand-story-heading] jewelry craftsmanship"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="absolute inset-0 bg-cover bg-center"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-ink leading-tight">
              Designed with Intention
            </h2>
            <div className="w-10 h-px bg-gold my-6" />
            <p className="text-taupe text-sm md:text-base leading-relaxed font-light">
              At Velmora, we believe jewelry should feel as beautiful as it looks. Every piece is thoughtfully designed with 
              warm 18K gold plating, hypoallergenic materials, and a quiet elegance that complements your everyday — 
              not competes with it.
            </p>
            <p className="text-taupe text-sm md:text-base leading-relaxed font-light mt-4">
              Crafted for the woman who values quality over quantity, and treasures that last beyond a season.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-gold text-[11px] uppercase tracking-[0.2em] hover:text-gold-hover transition-colors group"
            >
              Our Story
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}