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
    <section ref={containerRef} className="bg-velmora-linen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-text] [brand-story-heading] fine jewelry artisan craftsmanship gold"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-4">
                Our Story
              </p>
              <h2
                id="brand-story-heading"
                className="font-serif text-3xl md:text-4xl font-light text-velmora-ink tracking-wide leading-snug mb-6"
              >
                Born from a love of<br />
                <em className="italic">quiet beauty</em>
              </h2>
              <div className="w-10 h-px bg-velmora-gold mb-8" />
              <p
                id="brand-story-text"
                className="text-sm text-velmora-muted leading-relaxed mb-4"
              >
                Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that feel luxurious every day — crafted with care, priced with intention.
              </p>
              <p className="text-sm text-velmora-muted leading-relaxed mb-8">
                Each piece is made from 18K gold-plated sterling silver and hypoallergenic materials, designed to last and to be loved. We believe in slow fashion, thoughtful design, and jewelry that tells your story.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.18em] uppercase text-velmora-ink border-b border-velmora-ink pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors duration-300"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
