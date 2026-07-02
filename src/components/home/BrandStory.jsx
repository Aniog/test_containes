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
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="w-full h-full object-cover"
            />
            {/* Decorative gold border */}
            <div className="absolute inset-4 border border-gold/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-primary font-light leading-tight mb-6">
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-6" />
            <p id="brand-story-desc" className="font-sans text-sm text-text-secondary font-light leading-relaxed mb-4">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design pieces that feel luxurious every day — crafted with intention, worn with ease.
            </p>
            <p className="font-sans text-sm text-text-secondary font-light leading-relaxed mb-8">
              Each piece is thoughtfully designed in our studio and crafted using 18K gold plating over hypoallergenic bases. Accessible luxury, without compromise.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-text-primary border-b border-text-primary pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300 self-start"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
