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
    <section id="about" ref={containerRef} className="bg-velmora-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-body] [brand-story-heading]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-20">
            <p className="font-inter text-xs font-medium uppercase tracking-widest text-velmora-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-cormorant font-light text-4xl md:text-5xl text-velmora-obsidian leading-tight mb-6"
            >
              Made with intention.<br />
              <em className="italic">Worn with love.</em>
            </h2>
            <div className="w-10 h-px bg-velmora-gold mb-8" />
            <p
              id="brand-story-body"
              className="font-inter font-light text-sm text-velmora-muted leading-relaxed mb-5"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion.
              We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
            </p>
            <p className="font-inter font-light text-sm text-velmora-muted leading-relaxed mb-10">
              Every piece is crafted in 18K gold-plated brass, hypoallergenic and built to last.
              Because you deserve jewelry that keeps up with your life.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 font-inter text-xs font-medium uppercase tracking-widest text-velmora-obsidian group"
            >
              <span className="border-b border-velmora-obsidian pb-0.5 group-hover:border-velmora-gold group-hover:text-velmora-gold transition-colors duration-300">
                Discover Our Story
              </span>
              <div className="w-8 h-px bg-velmora-obsidian group-hover:bg-velmora-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
