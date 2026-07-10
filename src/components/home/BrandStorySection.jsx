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
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5]">
            <img
              data-strk-img-id="brand-story-img-c3d4e5"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian leading-tight mb-6"
            >
              Born from a love of<br />
              <em>enduring beauty</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-velmora-muted leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design pieces that move with you — from morning coffee to candlelit dinners — without ever losing their luster.
            </p>
            <p className="font-manrope text-sm text-velmora-muted leading-relaxed mb-8">
              Every piece is crafted from 18K gold-plated brass, hypoallergenic and built to last. We believe in accessible luxury — jewelry that feels like an heirloom, priced like a treat.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-obsidian hover:text-velmora-gold transition-colors border-b border-velmora-obsidian hover:border-velmora-gold pb-0.5 self-start"
            >
              Our Story
              <ArrowRight size={12} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
