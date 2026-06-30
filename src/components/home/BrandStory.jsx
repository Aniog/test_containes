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
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                data-strk-img-id="brand-story-img-9l0m"
                data-strk-img="[brand-story-desc] [brand-story-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora brand story"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl text-obsidian font-light leading-tight mb-6"
            >
              Jewelry that<br />
              <em className="italic">tells your story</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p
              id="brand-story-desc"
              className="font-sans text-sm text-mink leading-relaxed mb-5"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We create demi-fine pieces — 18K gold plated, hypoallergenic, and thoughtfully designed — that you can wear every single day.
            </p>
            <p className="font-sans text-sm text-mink leading-relaxed mb-10">
              Each piece is crafted with intention, from the weight of the metal to the way it catches light. We believe in quiet luxury — jewelry that whispers rather than shouts, that becomes part of you.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Read Our Story
              <span className="text-base">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
