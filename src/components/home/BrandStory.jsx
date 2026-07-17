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
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-k3m4n5"
              data-strk-img="[brand-story-text] [brand-story-heading] velmora jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              id="brand-story-heading"
              className="font-serif text-heading md:text-4xl text-velmora-ink tracking-wide mb-6"
            >
              The Art of Everyday Luxury
            </h2>
            <div className="w-12 h-px bg-velmora-gold mb-6" />
            <p
              id="brand-story-text"
              className="text-velmora-muted leading-relaxed mb-4"
            >
              At Velmora, we believe that fine jewelry shouldn't be reserved for special occasions.
              Each piece is thoughtfully designed in our studio and crafted with 18K gold plating
              over brass — creating jewelry that feels luxurious, looks timeless, and wears beautifully
              every day.
            </p>
            <p className="text-velmora-muted leading-relaxed mb-8">
              From the first sketch to the final polish, we obsess over every detail so you can
              simply enjoy the pleasure of wearing something made with care.
            </p>
            <Link
              to="/about"
              className="inline-block border border-velmora-gold text-velmora-gold font-sans text-xs uppercase tracking-wide px-8 py-3.5 hover:bg-velmora-gold hover:text-white transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
