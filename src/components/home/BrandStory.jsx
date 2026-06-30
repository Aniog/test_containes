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
    <section id="story" ref={containerRef} className="py-0 bg-ivory-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
          {/* Image side */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
            <img
              data-strk-img-id="brand-story-img-c3d4e5"
              data-strk-img="[story-text] [story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="flex items-center bg-ivory-dark px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="text-gold text-xs tracking-ultra-wide uppercase font-medium mb-4">
                Our Story
              </p>
              <h2
                id="story-title"
                className="font-serif text-3xl md:text-4xl font-light text-obsidian mb-6 leading-snug"
              >
                Made with intention,<br />
                <em className="italic">worn with love</em>
              </h2>
              <div className="w-10 h-px bg-gold mb-8" />
              <p
                id="story-text"
                className="text-taupe text-sm leading-relaxed mb-4"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that feel luxurious, look expensive, and are made to be worn every single day.
              </p>
              <p className="text-taupe text-sm leading-relaxed mb-8">
                Every piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be treasured. Because you deserve jewelry that keeps up with your life.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-obsidian hover:text-gold transition-colors group"
              >
                Read Our Story
                <span className="w-8 h-px bg-obsidian group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
