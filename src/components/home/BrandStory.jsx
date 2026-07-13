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
    <section id="about" ref={containerRef} className="bg-velmora-obsidian">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — jewelry craftsmanship"
              data-strk-img-id="brand-story-img-x1y2z3"
              data-strk-img="[brand-story-desc] [brand-story-title] fine jewelry craftsmanship atelier"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-velmora-obsidian/20" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="text-xs tracking-widest uppercase font-medium text-velmora-gold mb-5">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl font-light text-velmora-ivory tracking-wide leading-[1.15] mb-6"
            >
              Made with<br />
              <em className="italic">intention</em>
            </h2>
            <div className="w-10 h-px bg-velmora-gold mb-8" />
            <p
              id="brand-story-desc"
              className="text-sm text-velmora-sand leading-relaxed mb-5"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We create demi-fine pieces that feel luxurious, wear beautifully, and last.
            </p>
            <p className="text-sm text-velmora-mist leading-relaxed mb-10">
              Every piece is thoughtfully designed, 18K gold plated over sterling silver, and hypoallergenic. Because you deserve jewelry that loves your skin back.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-velmora-gold hover:gap-5 transition-all duration-300 group"
            >
              Read Our Story
              <span className="w-8 h-px bg-velmora-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
