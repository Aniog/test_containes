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
    <section ref={containerRef} id="about" className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: '480px' }}>
            <img
              data-strk-img-id="brand-story-img-k1l2m3"
              data-strk-img="[brand-story-text] [brand-story-heading] fine jewelry craftsmanship atelier"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="bg-ivory flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-sans text-xs text-gold tracking-ultra-wide uppercase mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-4xl md:text-5xl text-obsidian font-light leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">lasting beauty</em>
            </h2>
            <div className="w-8 h-px bg-gold mb-8" />
            <p
              id="brand-story-text"
              className="font-sans text-sm text-stone leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't
              require a special occasion. We design demi-fine pieces that move with you —
              from morning coffee to candlelit dinners.
            </p>
            <p className="font-sans text-sm text-stone leading-relaxed mb-10">
              Every piece is crafted with 18K gold plating over a hypoallergenic base,
              designed to last and made to be treasured. Because you deserve jewelry
              that feels as good as it looks.
            </p>
            <Link
              to="/shop"
              className="inline-block self-start border border-obsidian text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-3 hover:bg-obsidian hover:text-ivory transition-colors duration-300"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
