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
    <section ref={containerRef} className="py-16 md:py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
            <span id="story-query" className="sr-only" aria-hidden="true">
              gold jewelry artisan hands crafting delicate necklace warm editorial
            </span>
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-query]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="lg:pl-8">
            <p className="text-xs uppercase tracking-[0.16em] text-gold font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-base mb-6 md:mb-8">
              Jewelry for the Way You Live Now
            </h2>
            <div className="space-y-4 text-muted leading-relaxed mb-8">
              <p>
                Velmora was founded on a simple belief: fine jewelry should feel
                attainable, wearable, and deeply personal. We design demi-fine
                pieces in small batches, working with responsible workshops that
                share our obsession for detail.
              </p>
              <p>
                Every curve, clasp, and finish is considered — so you can reach
                for the same piece on a Tuesday morning or a Saturday night.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] font-medium text-base hover:text-gold transition-colors group"
            >
              Read Our Story
              <ArrowRight
                size={16}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
