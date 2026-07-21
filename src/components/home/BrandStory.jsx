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
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-obsidian-light">
            <img
              alt="Velmora brand story — artisan crafting fine jewelry"
              data-strk-img-id="story-img-main-4b7c9e"
              data-strk-img="[story-text] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gold accent line */}
            <div className="absolute bottom-6 left-6 right-6 h-px bg-gold/40" />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-4">Our Story</p>
            <h2 id="story-title" className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-obsidian leading-tight mb-6">
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p id="story-text" className="font-sans text-sm text-taupe leading-relaxed mb-5">
              Velmora was founded on a simple belief: that every woman deserves to wear something beautiful, every day. We create demi-fine jewelry that bridges the gap between costume and fine — pieces that look expensive, feel luxurious, and are made to be worn, not saved.
            </p>
            <p className="font-sans text-sm text-taupe leading-relaxed mb-8">
              Each piece is thoughtfully designed, 18K gold plated, and hypoallergenic — because beauty should never come at the cost of comfort.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
