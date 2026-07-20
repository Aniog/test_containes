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
    <section id="about" ref={containerRef} className="bg-parchment">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-gold/10" />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-12 lg:px-16 py-16 md:py-20 bg-cream">
            <div className="max-w-md">
              <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-4">
                Our Story
              </p>
              <h2
                id="brand-story-title"
                className="font-serif text-3xl md:text-4xl font-light text-ink leading-snug mb-6"
              >
                Born from a love of<br />
                <em className="italic">quiet beauty</em>
              </h2>
              <div className="w-10 h-px bg-gold mb-7" />
              <p
                id="brand-story-text"
                className="font-sans text-sm text-ink-muted leading-relaxed mb-4"
              >
                Velmora was founded on a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We create demi-fine pieces — 18K gold-plated, hypoallergenic, and thoughtfully designed — that you can wear every single day.
              </p>
              <p className="font-sans text-sm text-ink-muted leading-relaxed mb-8">
                Each piece is designed in our studio with the modern woman in mind. Timeless enough to treasure, accessible enough to wear without worry.
              </p>
              <Link
                to="/#about"
                className="font-sans text-xs tracking-widest uppercase text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
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
