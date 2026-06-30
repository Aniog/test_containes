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
    <section ref={containerRef} className="bg-ivory-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[560px] overflow-hidden">
            <div
              className="absolute inset-0 bg-obsidian-light"
              data-strk-bg-id="brand-story-bg-x1y2z3"
              data-strk-bg="[brand-story-desc] [brand-story-title] gold jewelry artisan craftsmanship"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="900"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <span id="brand-story-title" className="sr-only">Velmora Fine Jewelry Our Story</span>
            <span id="brand-story-desc" className="sr-only">Artisan gold jewelry craftsmanship demi-fine luxury</span>
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-4">Our Story</p>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian mb-6 leading-snug">
                Born from a love of<br />
                <em className="italic">quiet elegance</em>
              </h2>
              <div className="w-8 h-px bg-gold mb-6" />
              <p className="font-sans text-sm text-taupe leading-relaxed mb-4">
                Velmora was founded on a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We create demi-fine pieces designed to be worn every day — from morning coffee to candlelit dinners.
              </p>
              <p className="font-sans text-sm text-taupe leading-relaxed mb-8">
                Each piece is thoughtfully designed in our studio and crafted with 18K gold plating over hypoallergenic bases, making luxury accessible without compromise.
              </p>
              <Link
                to="/about"
                className="inline-block border border-obsidian text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-obsidian hover:text-ivory transition-colors duration-300"
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
